(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{C5h0:function(e,t,a){"use strict";var r=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var i=r(a("2/Rp"));a("g9YV");var l=r(a("wCAj"));a("IzEo");var n=r(a("bx4M"));a("O3gP");var d=r(a("lrIw")),o=r(a("jehZ"));a("Pwec");var c=r(a("CtXQ")),p=r(a("p0pE")),h=r(a("d6i3")),u=r(a("1l/V"));a("/xke");var m=r(a("TeRw"));a("giR+");var _=r(a("fyUT"));a("14J3");var f=r(a("BMrR"));a("jCWc");var v=r(a("kPKH"));a("sRBo");var g=r(a("kaz8"));a("/zsF");var E=r(a("PArb"));a("2qtc");var b=r(a("kLXV"));a("OaEy");var y=r(a("2fM7"));a("5NDa");var C=r(a("5rEg"));a("y8nQ");var S=r(a("Vl3Y"));a("Znn+");var k,x,M,I,w=r(a("ZTPi")),V=a("MuoO"),A=a("7DNP"),D=s(a("q1tI")),N=r(a("qula")),T=r(a("WnAZ")),R=r(a("XZXw")),F=a("vSx2"),L=r(a("8+Sn")),P=r(a("QDog")),q=r(a("/EMh")),B=r(a("pLWA")),O=w.default.TabPane,j=S.default.Item,z=C.default.TextArea,G=y.default.Option,J=b.default.confirm,W={labelCol:{span:8},wrapperCol:{span:16}},X=L.default.get("token"),Z={};X&&(Z.Authorization="GRJWT ".concat(X));class U extends D.PureComponent{constructor(){super(...arguments),this.state={checked:!0},this.getValue=(e=>{this.props.form.validateFields((t,a)=>{t||e(a)})}),this.handleCheckChange=((e,t,a)=>{var r={},s=t;r[e]="**None**",a.target.checked?this.props.form.setFieldsValue(r):(r[e]=s,this.props.form.setFieldsValue(r))}),this.handleIsChange=((e,t)=>{this.props.form.setFieldsValue({[e]:t.target.checked})}),this.renderConnectInfo=(()=>{var e=this.props,t=e.app,a=void 0===t?{}:t,r=e.form,s=r.getFieldDecorator;return a.service_connect_info_map_list&&a.service_connect_info_map_list.length?D.default.createElement("div",{style:{marginBottom:24}},D.default.createElement("h4",{style:{marginBottom:8}},"\u8fde\u63a5\u4fe1\u606f"),D.default.createElement(E.default,null),D.default.createElement(f.default,null,a.service_connect_info_map_list.map((e,t)=>D.default.createElement(v.default,{key:"connection_".concat(t),span:8},D.default.createElement(j,{label:e.attr_name,style:{padding:16}},s("connect||".concat(e.attr_name,"||attr_value"),{initialValue:e.attr_value,rules:[{required:!0,message:"\u4e0d\u80fd\u4e3a\u7a7a"}]})(D.default.createElement(C.default,{placeholder:e.attr_value})),s("connect||".concat(e.attr_name,"||random"),{valuePropName:"checked",initialValue:"**None**"==e.attr_value})(D.default.createElement(g.default,{onChange:this.handleCheckChange.bind(this,"connect||".concat(e.attr_name,"||attr_value"),e.attr_value)},"\u751f\u6210\u968f\u673a\u503c")),s("connectIsChange||".concat(e.attr_name),{valuePropName:"checked",initialValue:e.is_change})(D.default.createElement(g.default,{onChange:this.handleIsChange.bind(this,"connectIsChange||".concat(e.attr_name))},"\u53ef\u4fee\u6539"))))))):null}),this.onChange=(e=>{this.setState({checked:e.target.checked})}),this.renderEvn=(()=>{var e=this.props,t=e.app,a=void 0===t?{}:t,r=e.form,s=r.getFieldDecorator;r.setFieldsValue;return a.service_env_map_list&&a.service_env_map_list.length?D.default.createElement("div",{style:{marginBottom:24}},D.default.createElement("h4",{style:{marginBottom:8}},"\u73af\u5883\u53d8\u91cf"),D.default.createElement(E.default,null),D.default.createElement(f.default,null,a.service_env_map_list.map(e=>{var t=e.attr_name,a=e.attr_value,r=e.is_change;return D.default.createElement(v.default,{span:8},D.default.createElement(j,{label:t,style:{padding:16}},s("env||".concat(t,"||attr_value||").concat(a),{initialValue:a,rules:[{required:!0,message:"\u4e0d\u80fd\u4e3a\u7a7a"}]})(D.default.createElement(C.default,null)),s("envIschange||".concat(t),{valuePropName:"checked",initialValue:r})(D.default.createElement(g.default,{onChange:this.handleIsChange.bind(this,"envIschange||".concat(t))},"\u53ef\u4fee\u6539"))))}))):null}),this.renderExtend=(()=>{var e=this.props,t=e.app,a=void 0===t?{}:t,r=e.ID,s=void 0===r?"extend":r,i=e.form,l=i.getFieldDecorator,n=i.getFieldValue;if(a.extend_method_map){var d=n("".concat(s,"||step_node"));return D.default.createElement("div",{style:{marginBottom:24}},D.default.createElement("h4",{style:{marginBottom:8}},"\u4f38\u7f29\u89c4\u5219"),D.default.createElement(E.default,null),D.default.createElement(f.default,null,D.default.createElement(v.default,{span:6},D.default.createElement(j,{label:"\u6700\u5c0f\u8282\u70b9(\u4e2a)",style:{padding:16}},l("".concat(s,"||min_node"),{initialValue:a.extend_method_map.min_node,rules:[{required:!0,message:"\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(D.default.createElement(_.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6700\u5c0f\u8282\u70b9",min:1,step:d||a.extend_method_map.step_node})))),D.default.createElement(v.default,{span:6},D.default.createElement(j,{label:"\u6700\u5927\u8282\u70b9(\u4e2a)",style:{padding:16}},l("".concat(s,"||max_node"),{initialValue:a.extend_method_map.max_node,rules:[{required:!0,message:"\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(D.default.createElement(_.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u8282\u70b9",min:1,step:d||a.extend_method_map.step_node})))),D.default.createElement(v.default,{span:6},D.default.createElement(j,{label:"\u8282\u70b9\u6b65\u957f(\u4e2a)",style:{padding:16}},l("".concat(s,"||step_node"),{initialValue:a.extend_method_map.step_node,rules:[{required:!0,message:"\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(D.default.createElement(_.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u8282\u70b9\u6b65\u957f",min:a.extend_method_map.min_node,max:a.extend_method_map.max_node})))),D.default.createElement(v.default,{span:6},D.default.createElement(j,{label:"\u6700\u5c0f\u5185\u5b58(M)",style:{padding:16}},l("".concat(s,"||min_memory"),{initialValue:a.extend_method_map.min_memory,rules:[{required:!0,message:"\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(D.default.createElement(_.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u6700\u5c0f\u5185\u5b58",min:64,max:a.extend_method_map.max_memory,step:a.extend_method_map.step_memory}))))))}return null})}componentDidMount(){this.props.getref&&this.props.getref(this)}render(){return D.default.createElement(D.Fragment,null,this.renderConnectInfo(),this.renderEvn(),this.renderExtend())}}var Q=(k=(0,V.connect)(e=>{var t=e.user,a=e.application,r=e.loading,s=e.enterprise,i=e.teamControl;return{currUser:t.currentUser,apps:a.apps,currentTeam:i.currentTeam,currentRegionName:i.currentRegionName,currentEnterprise:s.currentEnterprise,groupDetail:a.groupDetail||{},loading:r}}),x=S.default.create(),k(M=x((I=class extends D.PureComponent{constructor(e){var t;super(e),t=this,this.onCancels=(e=>{this.setState({shareModal:null,isShare:e||this.state.isShare,service_cname:"",dep_service_name:[]})}),this.onFileChange=(e=>{var t=this.share_service_list,a=this.state,r=(a.shareList,a.sharearrs);if(e.length>0){var s=r.filter(t=>!e.includes(t)),i=[],l=[];e.map(e=>{t.map(t=>{e==t.service_share_uuid&&t.dep_service_map_list&&t.dep_service_map_list.length>0&&t.dep_service_map_list.map(e=>{i.push(e.dep_service_key),l.push(t.service_cname)})})});var n=!1,d="";s.length>0&&i.length>0&&s.map(e=>{t.map(t=>{e==t.service_share_uuid&&(d=t.service_cname)}),i.map(t=>{t==e&&(n=!0)})}),n&&e.length<=r.length?this.setState({shareModal:e,service_cname:d,dep_service_name:l}):this.setState({sharearrs:e},()=>{this.handleTabList()})}else m.default.warning({message:"\u5206\u4eab\u7ec4\u4ef6\u4e0d\u80fd\u5c11\u4e8e1\u4e2a"})}),this.getBase64=(e=>{return new Promise((t,a)=>{var r=new FileReader;r.readAsDataURL(e),r.onload=(()=>t(r.result)),r.onerror=(e=>a(e))})}),this.fetchRecord=(()=>{this.setState({loading:!0});var e=this.props.match.params,t=e.teamName,a=e.appID,r=e.shareId,s=this.props.dispatch;s({type:"application/fetchShareRecord",payload:{team_name:t,app_id:a,record_id:r},callback:e=>{e&&e.bean&&200===e._code&&this.setState({record:e.bean,loading:!1},()=>{this.fetchModels()})}})}),this.fetchModels=((e,t)=>{var a=this.state.record,r=a&&a.scope,s=a&&a.scope_target,i=this.props.match.params,l=i.teamName,n=i.appID,d=this.props,o=d.dispatch,c=d.form,p=c.setFieldsValue,h={team_name:l,app_id:n};"goodrain"==r&&s?(h.scope="goodrain",h.market_id=s.store_id):h.scope="local",this.setState({loadingModels:!0}),o({type:"enterprise/fetchShareModels",payload:h,callback:a=>{a&&200===a._code&&this.setState({models:a.list,model:a.bean,loadingModels:!1},()=>{if(a.list.length>0){if(t){var r=a.list.filter(e=>{return e.app_id===t.app_id});return r&&r.length>0&&(p({describe:r[0].app_describe||""}),this.setState({model:r[0]})),null}e&&p({app_id:a.list[0].app_id}),"{}"===JSON.stringify(a.bean)?this.changeCurrentModel(a.list[0].app_id):this.changeCurrentModel(e?a.list[0].app_id:a.bean&&a.bean.app_id,e?"":a.bean&&a.bean.version,e)}})}})}),this.fetchAppDetail=(()=>{var e=this.props.dispatch,t=this.props.match.params,a=t.teamName,r=t.regionName,s=t.appID;this.setState({loadingDetail:!0}),e({type:"application/fetchGroupDetail",payload:{team_name:a,region_name:r,group_id:s},callback:e=>{e&&200===e._code&&this.setState({appDetail:e.bean,loadingDetail:!1})},handleError:e=>{e&&404===e.code&&this.props.dispatch(A.routerRedux.push("/team/".concat(P.default.getCurrTeamName(),"/region/").concat(P.default.getCurrRegionName(),"/apps")))}})}),this.handleSubmitConditions=(()=>{var e=this.state,t=e.record,a=e.versionInfo,r=this.props.form,s=this;r.validateFields((e,r)=>{e||("goodrain"!==t.scope&&a&&r.version===a.version&&a.dev_status?J({title:"\u5f53\u524d\u53d1\u5e03\u7248\u672c\u662fRelease\u72b6\u6001\uff0c\u53d1\u5e03\u6210\u529f\u540e\u8be5\u7248\u672c\u5c06\u53d6\u6d88Release\u72b6\u6001",content:"",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk(){s.handleSubmit()}}):s.handleSubmit())})}),this.handleSubmit=(()=>{var e=this.props,t=e.dispatch,a=e.form,r=this.state,s=r.record,i=r.sharearrs,l={};a.validateFields((e,a)=>{if(!e){this.setState({submitLoading:!0});var r={share_id:s.record_id,app_model_id:a.app_id,describe:a.describe,version:a.version,version_alias:a.version_alias};"goodrain"==s.scope&&(r.scope_target=s.scope_target,r.scope=s.scope,r.market_id=s.scope_target&&s.scope_target.store_id,r.template_type="RAM");var n=this.share_service_list;this.share_service_list.map((e,t)=>{var r=e.extend_method_map,s=e.service_id;r&&Object.keys(r).forEach(function(e){a["".concat(s,"||").concat(e)]&&(n[t].extend_method_map[e]=a["".concat(s,"||").concat(e)])})});var d=[],o=[];i.map(e=>{n.map(t=>{e==t.service_share_uuid&&(d.push(t),t.dep_service_map_list&&t.dep_service_map_list.length>0&&t.dep_service_map_list.map(e=>{o.push(e.dep_service_key)}))})});var c=this.com;c.map(e=>{var t=e.props.tab,a=null;e.props.form.validateFields((e,t)=>{e||(a=t)}),n.map(e=>{if(e.service_alias==t)for(var r in a){var s=[];s=r.split("||"),"connect"==s[0]&&"random"!=s[2]&&e.service_connect_info_map_list.map(e=>{e.attr_name==s[1]&&(e[s[2]]=a[r])}),"env"==s[0]&&e.service_env_map_list.map(e=>{var t=e.attr_name,i=e.attr_value;t==s[1]&&i==s[3]&&(e[s[2]]=a[r])}),"envIschange"==s[0]&&e.service_env_map_list.map(e=>{var t=e.attr_name;t==s[1]&&(e.is_change=a[r])}),"connectIsChange"==s[0]&&e.service_connect_info_map_list.map(e=>{e.attr_name==s[1]&&(e.is_change=a[r])}),"extend"==s[0]&&(e.extend_method_map[s[1]]=a[r])}})}),l.app_version_info=r,l.share_service_list=d,l.share_plugin_list=this.state.info.share_plugin_list;var p=P.default.getCurrTeamName(),h=this.props.match.params,u=h.appID,_=h.shareId;t({type:"application/subShareInfo",payload:{team_name:p,share_id:_,use_force:this.state.isShare,new_info:l},callback:e=>{this.setState({submitLoading:!1}),e&&(this.onCancels("false"),t(A.routerRedux.push("/team/".concat(P.default.getCurrTeamName(),"/region/").concat(P.default.getCurrRegionName(),"/apps/").concat(u,"/share/").concat(_,"/two"))))},handleError:e=>{this.setState({submitLoading:!1});var t=e&&e.data,a=t&&t.msg_show;if(t&&t.code&&10501===t.code)return m.default.warning({message:"\u63d0\u793a",description:a}),this.setState({isShare:"true"}),null;m.default.warning({message:"\u8bf7\u6c42\u9519\u8bef",description:a})}})}})}),this.handleGiveup=(()=>{var e=this.props.match.params.appID,t=this.props.dispatch;t({type:"application/giveupShare",payload:{team_name:P.default.getCurrTeamName(),share_id:this.props.match.params.shareId},callback:()=>{t(A.routerRedux.push("/team/".concat(P.default.getCurrTeamName(),"/region/").concat(P.default.getCurrRegionName(),"/apps/").concat(e)))}})}),this.handleLogoChange=(e=>{var t=e.fileList;this.setState({fileList:t})}),this.handleLogoRemove=(()=>{this.setState({fileList:[]})}),this.save=(e=>{this.com.push(e)}),this.tabClick=(e=>{this.setState({tabk:e})}),this.handleSubmits=(()=>{this.setState({sharearrs:this.state.shareModal,isShare:"true",shareModal:null},()=>{this.handleTabList()})}),this.handleTabList=(()=>{var e=this.state.sharearrs,t=this.share_service_list,a=[];e.map(e=>{t.map(t=>{e==t.service_share_uuid&&a.push(t)})}),this.setState({share_service_list:a},()=>{a.length>0&&this.tabClick(a[0].service_share_uuid)})}),this.hanldeShareTypeChange=(e=>{var t=this.props.form.setFieldsValue,a=e.target.value;this.setState({ShareTypeShow:"goodrain"==a}),t({scope:a})}),this.hanldeScopeValueChange=(e=>{var t=e.target.value;this.setState({scopeValue:t})}),this.handlePreview=function(){var e=(0,u.default)(h.default.mark(function e(a){return h.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a.url||a.preview){e.next=4;break}return e.next=3,t.getBase64(a.originFileObj);case 3:a.preview=e.sent;case 4:t.setState({previewImage:a.url||a.preview,previewVisible:!0});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.showCreateAppModel=(()=>{this.setState({showCreateAppModel:!0})}),this.hideCreateAppModel=(()=>{this.setState({showCreateAppModel:!1})}),this.handleCreateAppModel=(()=>{m.default.success({message:"\u521b\u5efa\u6210\u529f"}),this.fetchModels(!0),this.hideCreateAppModel()}),this.handleCancel=(()=>this.setState({previewVisible:!1})),this.changeCurrentVersion=(e=>{var t=this.state.model;t&&t.versions&&t.versions.length>0&&t.versions.map(t=>{e===t.version&&this.handleSetFieldsValue(t)})}),this.changeCurrentModel=((e,t,a)=>{var r=this.state.models;r&&r.length>0&&r.map(r=>{var s=r.app_id,i=r.versions;e===s&&this.setState({model:r,versions:i},()=>{if(i&&i.length>0){var e=i[0];t&&i.map(a=>{var r=a.version;r===t&&(e=a)}),this.handleSetFieldsValue(e,a)}else this.handleSetFieldsValue(r,a)})})}),this.handleSetFieldsValue=((e,t)=>{var a=this.props.form.setFieldsValue;this.setState({versionInfo:e}),a({version:t?"0.1":e?e.version:""}),a({version_alias:e?e.version_alias:""}),a({describe:e?e.describe||e.app_describe:""})}),this.handleEditorAppModel=(e=>{m.default.success({message:"\u7f16\u8f91\u6210\u529f"}),this.fetchModels(!1,e),this.hideEditorAppModel()}),this.showEditorAppModel=(e=>{var t=this.state.models,a=t.filter(t=>{return t.app_id===e});a&&a.length>0&&this.setState({appModelInfo:a[0],editorAppModel:!0})}),this.hideEditorAppModel=(()=>{this.setState({editorAppModel:!1,appModelInfo:!1})}),this.checkVersion=((e,t,a)=>{""!==t&&t||a("\u7248\u672c\u4e0d\u80fd\u4e3a\u7a7a, \u8bf7\u9009\u62e9\u6216\u6dfb\u52a0\u7248\u672c"),!t||/^[0-9]+(\.[0-9]+){1,2}$/.test(t)?a():a("\u53ea\u5141\u8bb8\u8f93\u5165\u6570\u5b57\u3001\u7248\u672c\u683c\u5f0f:1.0\u62161.0.0")}),this.state={previewVisible:!1,previewImage:"",toDelete:!1,recordShare:!1,checkShare:!0,ShareStep:0,ID:0,info:null,selectedApp:"",service:null,tabk:"",fileList:[],shareList:[],sharearrs:[],shareModal:null,isShare:"false",service_cname:"",dep_service_name:[],share_service_list:[],ShareTypeShow:!1,scopeValue:"goodrain:private",appDetail:{},record:{},model:{},submitLoading:!1,loadingModels:!0,models:[],versions:[],versionInfo:!1,editorAppModel:!1,appModelInfo:!1},this.com=[],this.share_group_info=null,this.share_service_list=null}componentDidMount(){this.fetchAppDetail(),this.fetchRecord(),this.getShareInfo()}getParams(){return{groupId:this.props.match.params.appID,shareId:this.props.match.params.shareId}}getShareInfo(){var e=this.props.dispatch,t=this.getParams();e({type:"application/getShareInfo",payload:(0,p.default)({team_name:P.default.getCurrTeamName()},t),callback:e=>{var t="";if(e){e.bean.share_service_list[0]&&(t=e.bean.share_service_list[0].service_alias),this.setState({info:e.bean,selectedApp:t,tabk:e.bean.share_service_list[0].service_share_uuid,share_service_list:e.bean.share_service_list}),this.share_service_list=e.bean.share_service_list;var a=[];e.bean.share_service_list&&e.bean.share_service_list.length>0&&(e.bean.share_service_list.map(e=>{a.push(e.service_share_uuid)}),this.setState({shareList:a,sharearrs:a}))}},handleError:e=>{e&&404===e.status&&this.props.dispatch(A.routerRedux.push("/team/".concat(P.default.getCurrTeamName(),"/region/").concat(P.default.getCurrRegionName(),"/exception/404")))}})}render(){var e=this.state,t=e.info,a=e.tabk;if(!t)return null;var r=t.share_service_list||[],s=t.share_plugin_list||[],p=this.props,h=p.loading,u=p.form,m=p.currentEnterprise,_=p.currentTeam,k=p.currentRegionName,x=u.getFieldDecorator,M=u.getFieldValue,I=this.state,V=I.shareModal,A=I.sharearrs,L=(I.share_service_list,I.models),P=I.appDetail,j=I.showCreateAppModel,J=I.editorAppModel,X=I.model,Z=I.record,Q=I.versionInfo,K=I.versions,Y=I.submitLoading,H=I.appModelInfo,$=M("app_id"),ee=[];ee=(0,F.createApp)((0,F.createTeam)((0,F.createEnterprise)(ee,m),_,k),_,k,{appName:P.group_name,appID:P.group_id}),ee.push({title:"\u53d1\u5e03\u8bb0\u5f55\u5217\u8868",href:"/team/".concat(_.team_name,"/region/").concat(k,"/apps/").concat(P.group_id,"/publish")}),Z&&"goodrain"==Z.scope?ee.push({title:"\u53d1\u5e03\u5230\u4e91\u5e94\u7528\u5546\u5e97"}):ee.push({title:"\u53d1\u5e03\u5230\u7ec4\u4ef6\u5e93"});var te=Z.scope_target&&Z.scope_target.store_id;return D.default.createElement(R.default,{breadcrumbList:ee},D.default.createElement("div",null,D.default.createElement(n.default,{style:{marginBottom:24},title:"\u5e94\u7528\u6a21\u7248\u53ca\u53d1\u5e03\u7248\u672c\u8bbe\u7f6e",bordered:!1,bodyStyle:{padding:0}},D.default.createElement("div",{style:{padding:"24px"}},D.default.createElement(f.default,{gutter:24},D.default.createElement(v.default,{span:"12"},D.default.createElement(S.default.Item,(0,o.default)({},W,{label:"\u5e94\u7528\u6a21\u7248"}),x("app_id",{initialValue:X.app_id,rules:[{required:!0,message:"\u5e94\u7528\u6a21\u7248\u9009\u62e9\u662f\u5fc5\u987b\u7684"}]})(D.default.createElement(y.default,{style:{width:280},onChange:this.changeCurrentModel,placeholder:"\u9009\u62e9\u53d1\u5e03\u7684\u5e94\u7528\u6a21\u7248",dropdownRender:e=>D.default.createElement("div",null,e,D.default.createElement(E.default,{style:{margin:"4px 0"}}),D.default.createElement("div",{style:{padding:"4px 8px",cursor:"pointer",textAlign:"center"},onMouseDown:e=>e.preventDefault(),onClick:this.showCreateAppModel},D.default.createElement(c.default,{type:"plus"})," \u65b0\u5efa\u5e94\u7528\u6a21\u7248"))},L.map(e=>D.default.createElement(G,{key:e.app_id},e.app_name)))),$&&L&&L.length>0&&!te&&D.default.createElement("a",{style:{marginLeft:"10px"},onClick:()=>{this.showEditorAppModel($)}},"\u7f16\u8f91\u5e94\u7528\u6a21\u7248"))),D.default.createElement(v.default,{span:"12"},D.default.createElement(S.default.Item,(0,o.default)({},W,{label:"\u7248\u672c\u53f7"}),x("version",{initialValue:Q&&Q.version||"",rules:[{required:!0,validator:this.checkVersion}]})(D.default.createElement(d.default,{style:{width:280},onChange:this.changeCurrentVersion,placeholder:"\u7248\u672c\u53f7\u9ed8\u8ba4\u4e3a\u9009\u62e9\u6a21\u7248\u7684\u4e0a\u6b21\u5206\u4eab\u7248\u672c"},K&&K.length>0&&K.map((e,t)=>{var a=e.version;return D.default.createElement(d.default.Option,{key:"version".concat(t),value:a},a)}))))),D.default.createElement(v.default,{span:"12"},D.default.createElement(S.default.Item,(0,o.default)({},W,{label:"\u7248\u672c\u522b\u540d"}),x("version_alias",{initialValue:Q&&Q.version_alias||""})(D.default.createElement(C.default,{style:{width:280},placeholder:"\u8bbe\u7f6e\u7248\u672c\u522b\u540d\uff0c\u6bd4\u5982\u9ad8\u7ea7\u7248"})))),D.default.createElement(v.default,{span:"12",style:{height:"104px"}},D.default.createElement(S.default.Item,(0,o.default)({},W,{label:"\u7248\u672c\u8bf4\u660e"}),x("describe",{initialValue:Q&&(Q.describe||Q.app_describe)||"",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u7248\u672c\u8bf4\u660e"}]})(D.default.createElement(z,{placeholder:"\u8bf7\u8f93\u5165\u7248\u672c\u8bf4\u660e",style:{height:"70px"}}))))))),D.default.createElement(n.default,{style:{marginBottom:24},title:"\u53d1\u5e03\u7ec4\u4ef6\u6a21\u578b\u914d\u7f6e",bordered:!1,bodyStyle:{padding:0}},D.default.createElement("div",{style:{padding:"24px"}},D.default.createElement("div",{className:B.default.mytab},D.default.createElement("h4",{className:B.default.required,style:{marginBottom:8}},"\u5206\u4eab\u7ec4\u4ef6"),D.default.createElement("div",{className:B.default.mytabtit,id:"mytabtit"},D.default.createElement(g.default.Group,{onChange:this.onFileChange,value:A,style:{display:"block",marginTop:"9px"}},D.default.createElement(w.default,{activeKey:a,onChange:this.tabClick},r.map(e=>{return D.default.createElement(O,{key:e.service_share_uuid,tab:D.default.createElement("span",{className:B.default.cont},D.default.createElement(g.default,{onChange:this.onChange,value:e.service_share_uuid,style:{marginRight:"10px"}}),D.default.createElement("a",{tab:e.service_cname,onClick:()=>{this.tabClick(e.service_share_uuid)}},e.service_cname))})}))),r.map(e=>{var t=e.service_share_uuid;return A.includes(a)&&t===a&&D.default.createElement(U,{key:t,form:u,app:e,getref:this.save,tab:e.service_alias,ID:e.service_id})}))))),D.default.createElement(n.default,{style:{marginBottom:128},title:"\u53d1\u5e03\u63d2\u4ef6\u6a21\u578b\u4fe1\u606f",bordered:!1},D.default.createElement(l.default,{size:"middle",dataSource:s,columns:[{title:"\u63d2\u4ef6\u540d",dataIndex:"plugin_alias"},{title:"\u5206\u7c7b",dataIndex:"category",render:e=>{return q.default.getCategoryCN(e)}},{title:"\u7248\u672c",dataIndex:"build_version"}]})),V&&D.default.createElement(b.default,{title:"\u4f9d\u8d56\u68c0\u6d4b",visible:V,onOk:this.handleSubmits,onCancel:this.onCancels,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},D.default.createElement("div",null,D.default.createElement("a",null,this.state.service_cname,"\u7ec4\u4ef6"),"\u88ab\u9700\u8981\u5206\u4eab\u7684",this.state.dep_service_name&&this.state.dep_service_name.length>0&&this.state.dep_service_name.map((e,t)=>{return D.default.createElement("a",{style:{marginLeft:"5px"},key:t},e,"\u7ec4\u4ef6")}),"\u4f9d\u8d56,",D.default.createElement("p",{style:{marginTop:"5px"}},"\u662f\u5426\u786e\u5b9a\u53d6\u6d88\u5206\u4eab",D.default.createElement("a",null,this.state.service_cname),"\u7ec4\u4ef6"),".")),j&&D.default.createElement(N.default,{title:"\u521b\u5efa\u5e94\u7528\u6a21\u7248",appName:P&&P.group_name,eid:m.enterprise_id,onOk:this.handleCreateAppModel,defaultScope:"team",market_id:te,onCancel:this.hideCreateAppModel}),J&&D.default.createElement(N.default,{title:"\u7f16\u8f91\u5e94\u7528\u6a21\u7248",team_name:_.team_name,appInfo:H,eid:m.enterprise_id,onOk:this.handleEditorAppModel,defaultScope:"team",onCancel:this.hideEditorAppModel}),D.default.createElement(T.default,null,D.default.createElement(i.default,{type:"primary",htmlType:"submit",loading:Y,onClick:this.handleSubmitConditions},"\u63d0\u4ea4"),D.default.createElement(i.default,{disabled:h.effects["application/giveupShare"],onClick:this.handleGiveup},"\u653e\u5f03\u5206\u4eab"))))}},M=I))||M)||M);t.default=Q},pLWA:function(e,t,a){e.exports={mytabtit:"mytabtit___3DE4w",cont:"cont___296Gw",required:"required___25zA8"}}}]);