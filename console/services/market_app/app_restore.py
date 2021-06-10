# -*- coding: utf8 -*-
import json
import logging

from .app import MarketApp
from .original_app import OriginalApp
from .new_app import NewApp
from .component import Component
# repository
from console.repositories.app_snapshot import app_snapshot_repo
# model
from www.models.main import ServiceGroup
from www.models.main import TenantServiceInfo
from www.models.main import TenantServiceEnvVar
from www.models.main import TenantServicesPort
from www.models.main import TenantServiceVolume
from www.models.main import TenantServiceConfigurationFile
from www.models.main import TenantServiceRelation
from www.models.main import TenantServiceMountRelation
from www.models.main import ServiceProbe
from www.models.service_publish import ServiceExtendMethod
from console.models.main import AppUpgradeRecord
from console.models.main import ServiceSourceInfo
from console.models.main import ServiceMonitor
from console.models.main import ComponentGraph
# exception
from console.exception.main import ServiceHandleException

logger = logging.getLogger('django.contrib.gis')


class AppRestore(MarketApp):
    """
    AppRestore is responsible for restore an upgrade.
    1. AppRestore will use the snapshot to overwrite the components.
    2. AppRestore will not delete new components in the upgrade.
    3. AppRestore will not restore components that were deleted after the upgrade.
    """

    def __init__(self, tenant, region_name, app: ServiceGroup, upgrade_group_id, record: AppUpgradeRecord):
        self.tenant = tenant
        self.region_name = region_name
        self.app = app
        self.upgrade_group_id = upgrade_group_id
        self.record = record

        self.original_app = OriginalApp(tenant.tenant_id, region_name, app, upgrade_group_id)
        self.snapshot = self._get_snapshot()
        self.new_app = self._create_new_app()
        super(AppRestore, self).__init__(self.original_app, self.new_app)

    def restore(self):
        self.sync_new_app()
        try:
            self.save_new_app()
        except Exception as e:
            logger.exception(e)
            self.rollback()
            raise ServiceHandleException("unexpected error", "未知错误, 请联系管理员")

    def _get_snapshot(self):
        snap = app_snapshot_repo.get_by_snapshot_id(self.record.snapshot_id)
        snap = json.loads(snap.snapshot)
        # filter out components that are in the snapshot but not in the application
        component_ids = [cpt.component.component_id for cpt in self.original_app.components()]
        snap["components"] = [snap for snap in snap["components"] if snap["component_id"] in component_ids]
        return snap

    def _create_new_app(self):
        """
        create new app from the snapshot
        """
        components = []
        for snap in self.snapshot["components"]:
            components.append(self._create_component(snap))
        component_ids = [cpt.component.component_id for cpt in components]

        # component dependencies
        new_deps = self._create_component_deps(component_ids)
        component_deps = self.ensure_component_deps(self.original_app, new_deps)

        # volume dependencies
        new_volume_deps = self._create_volume_deps(component_ids)
        volume_deps = self.ensure_component_deps(self.original_app, new_volume_deps)

        return NewApp(
            tenant=self.tenant,
            region_name=self.region_name,
            app=self.app,
            upgrade_group_id=self.upgrade_group_id,
            new_components=[],
            update_components=components,
            component_deps=component_deps,
            volume_deps=volume_deps,
        )

    @staticmethod
    def _create_component(snap):
        # component
        component = TenantServiceInfo(**snap["service_base"])
        # component source
        component_source = ServiceSourceInfo(**snap["service_source"])
        # environment
        envs = [TenantServiceEnvVar(**env) for env in snap["service_env_vars"]]
        # ports
        ports = [TenantServicesPort(**port) for port in snap["service_ports"]]
        # service_extend_method
        extend_info = ServiceExtendMethod(**snap["service_extend_method"])
        # volumes
        volumes = [TenantServiceVolume(**volume) for volume in snap["service_volumes"]]
        # configuration files
        config_files = [TenantServiceConfigurationFile(**config_file) for config_file in
                        snap["service_config_file"]]
        # probe
        probes = [ServiceProbe(**probe) for probe in snap["service_probes"]]
        # monitors
        monitors = [ServiceMonitor(**monitor) for monitor in snap["service_monitors"]]
        # graphs
        graphs = [ComponentGraph(**graph) for graph in snap["component_graphs"]]
        return Component(
            component=component,
            component_source=component_source,
            envs=envs,
            ports=ports,
            volumes=volumes,
            config_files=config_files,
            probe=probes[0] if probes else None,
            extend_info=extend_info,
            monitors=monitors,
            graphs=graphs,
        )

    def _create_component_deps(self, component_ids):
        component_deps = []
        for snap in self.snapshot["components"]:
            component_deps.extend([TenantServiceRelation(**dep) for dep in snap["service_relation"]])
        # filter out the component dependencies which dep_service_id does not belong to the components
        return [dep for dep in component_deps if dep.dep_service_id in component_ids]

    def _create_volume_deps(self, component_ids):
        volume_deps = []
        for snap in self.snapshot["components"]:
            volume_deps.extend([TenantServiceMountRelation(**dep) for dep in snap["service_mnts"]])
        # filter out the component dependencies which dep_service_id does not belong to the components
        return [dep for dep in volume_deps if dep.dep_service_id in component_ids]
