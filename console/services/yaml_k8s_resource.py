from console.services.region_resource_processing import region_resource
from www.apiclient.regionapi import RegionInvokeApi
from www.models.main import ServiceGroup, RegionApp

region_api = RegionInvokeApi()


class YamlK8SResource(object):
    def yaml_k8s_resource_name(self, event_id, app_id, tenant_id, namespace, region_id, enterprise_id):
        region_app = RegionApp.objects.filter(app_id=app_id)
        if region_app:
            region_app_id = region_app[0].region_app_id
            data = {"event_id": event_id, "region_app_id": region_app_id, "tenant_id": tenant_id,
                    "namespace": namespace}
            _, body = region_api.yaml_resource_name(enterprise_id, region_id, data)
            yaml_resource = body["bean"]
            app_resource = yaml_resource.pop("app_resource")
            body["bean"] = {"app_resource": app_resource, "error_yaml": yaml_resource}
            return body
        return []

    def yaml_k8s_resource_detailed(self, event_id, app_id, tenant_id, namespace, region_id, enterprise_id):
        region_app = RegionApp.objects.filter(app_id=app_id)
        if region_app:
            region_app_id = region_app[0].region_app_id
            data = {"event_id": event_id, "region_app_id": region_app_id, "tenant_id": tenant_id,
                    "namespace": namespace}
            _, body = region_api.yaml_resource_detailed(enterprise_id, region_id, data)
            return body["bean"]
        return []

    def yaml_k8s_resource_import(self, event_id, app_id, tenant_id, namespace, region, enterprise_id, user_id):
        app = RegionApp.objects.filter(app_id=app_id)
        if app:
            app = app[0]
            data = {"event_id": event_id, "region_app_id": app.region_app_id, "tenant_id": tenant_id,
                    "namespace": namespace}
            _, body = region_api.yaml_resource_detailed(enterprise_id, region.region_id, data)
            ac = body["bean"]
            region_resource.create_k8s_resources(ac["k8s_resources"], app_id)
            region_resource.create_components(app, ac["component"], {"UUID": tenant_id}, region.region_name, user_id)
            return body["bean"]
        return []


yaml_k8s_resource = YamlK8SResource()
