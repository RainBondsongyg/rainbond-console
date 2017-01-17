from django.conf.urls import patterns, url
from www.tests import *
from www.services_view import *
from www.views import ajax
from www.views.ajax import UpdateGroupView, BatchActionView
from www.views.ajax.service_rule import *
from www.views.ajax.service_group import AddGroupView, DeleteGroupView, UpdateServiceGroupView
from www.views.ajax.service_log import *
urlpatterns = patterns(
    '',
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/app-deploy/$', ajax.service_actions.AppDeploy.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/perms', ajax.ServiceIdentity.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/invite', ajax.InviteServiceUser.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/manage', ajax.ServiceManage.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/upgrade', ajax.ServiceUpgrade.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/detail', ajax.ServiceDetail.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/net-disk', ajax.ServiceNetAndDisk.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/log', ajax.ServiceLog.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/relation', ajax.ServiceRelation.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/check', ajax.ServiceCheck.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/mapping-port', ajax.ServiceMappingPort.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/domain', ajax.ServiceDomainManager.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/envvar', ajax.ServiceEnvVarManager.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/graph', ajax.ServiceGraph.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/branch', ajax.ServiceBranch.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/ports/(?P<port>\d+)', ajax.ServicePort.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/custom-env', ajax.ServiceEnv.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/custom-port', ajax.ServiceNewPort.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/mnt', ajax.ServiceMnt.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/docker', ajax.ServiceDockerContainer.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/invite', ajax.InviteTenantUser.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/perms', ajax.TenantIdentity.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/serviceinfo', ajax.AllServiceInfo.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/tenant-disk', ajax.AllTenantsUsedResource.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/rechargelist', ajax.AccountRecharging.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/consumelist', ajax.AccountQuery.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/paymodel', ajax.PayModelInfo.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/code_repos', ajax.CodeAction.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/remote/market', ajax.RemoteServiceMarketAjax.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/logtype/services', ajax.ServiceLogTypeView.as_view()),
    url(r'form_valid', ajax.FormValidView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/volume', ajax.ServiceVolumeView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/service-mnt-share-type', ajax.MntShareTypeView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/container-stats', ajax.ContainerStatsView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/resource/monitor', ajax.ServiceMonitorQuery.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/topological/(?P<group_id>\d+)', ajax.TopologicalGraphView.as_view()),
    # service group
    url(r'^(?P<tenantName>[\w\-]+)/group/add$', AddGroupView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/group/update$', UpdateGroupView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/group/delete$', DeleteGroupView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/group/change-group$', UpdateServiceGroupView.as_view()),

    url(r'^(?P<tenantName>[\w\-]+)/batch-action$', BatchActionView.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/change-service-name', ajax.ServiceNameChangeView.as_view()),
    # service rule
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/rule$', ServiceRuleManage.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/rule/update$', ServiceRuleUpdate.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/rule/delete$', ServiceRuleDelete.as_view()),
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/rule/status$', ServiceRuleUpdateStatus.as_view()),
    # service log
    url(r'^(?P<tenantName>[\w\-]+)/(?P<serviceAlias>[\w\-]+)/log-match$', ServiceLogManage.as_view()),
    
)
