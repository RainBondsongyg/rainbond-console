(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"+zy9":function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var n=l(a("3S7+"));a("7Kak");var i=l(a("9yH6"));a("+L6B");var r=l(a("2/Rp"));a("/xke");var d,o,u,c=l(a("TeRw")),p=a("MuoO"),m=a("7DNP"),h=s(a("q1tI")),f=a("LLXN"),v=l(a("exCG")),_=l(a("q76B")),g=a("xpXo"),y=l(a("QDog")),E=l(a("hMqj")),b=(d=(0,p.connect)(e=>{var t=e.teamControl;return{currentTeamPermissionsInfo:t.currentTeamPermissionsInfo}},null,null,{withRef:!0}),d((u=class extends h.PureComponent{constructor(e){super(e),this.getMultipleModulesInfo=(()=>{this.props.dispatch({type:"appControl/getMultipleModulesInfo",payload:{team_name:y.default.getCurrTeamName(),check_uuid:this.getCheck_uuid()},callback:e=>{e&&200===e.status_code&&this.setState({data:e.list})}})}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return E.default.querySpecifiedPermissionsInfo(t,e)}),this.handleBuild=(()=>{this.setState({buildState:!0});var e=this.state,t=e.JavaMavenData,a=e.is_deploy;if(t.length>0){var l=this.fetchParameter(),s=l.team_name,n=l.app_alias;this.props.dispatch({type:"appControl/createService",payload:{team_name:s,app_alias:n,service_infos:t},callback:e=>{if(e&&200===e.status_code){var t=e.bean&&e.bean.group_id,l=e.bean&&e.bean.service_ids;a?this.BuildShape(t,l):this.fetchGroups(t)}}})}else this.setState({buildState:!1}),c.default.warning({message:(0,f.formatMessage)({id:"notification.warn.need_build_module"})})}),this.BuildShape=((e,t)=>{(0,g.batchOperation)({action:"deploy",team_name:y.default.getCurrTeamName(),serviceIds:t&&t.length>0&&t.join(",")}).then(()=>{this.fetchGroups(e)})}),this.fetchGroups=(e=>{var t=this.fetchParameter(),a=t.team_name,l=t.region_name,s=this.props.dispatch;s({type:"global/fetchGroups",payload:{team_name:a,region_name:l},callback:()=>{c.default.success({message:(0,f.formatMessage)({id:"notification.success.success_create_components"}),duration:"3"}),this.setState({buildState:!1}),this.handleJump("apps/".concat(e))}})}),this.handleDelete=(()=>{var e=this.fetchParameter(),t=e.team_name,a=e.app_alias,l=this.props.dispatch;this.handleDeleteLoading(!0),l({type:"appControl/deleteApp",payload:{team_name:t,app_alias:a,is_force:!0},callback:()=>{this.handleDeleteLoading(!1),this.handleJump("index")}})}),this.handleDeleteLoading=(e=>{this.setState({deleteLoading:e})}),this.showDelete=(()=>{this.setState({showDelete:!0})}),this.fetchParameter=(()=>{return{team_name:y.default.getCurrTeamName(),region_name:y.default.getCurrRegionName(),app_alias:this.getAppAlias()}}),this.handleJump=(e=>{var t=this.props.dispatch,a=this.fetchParameter(),l=a.team_name,s=a.region_name;t(m.routerRedux.replace("/team/".concat(l,"/region/").concat(s,"/").concat(e)))}),this.renderSuccessOnChange=(()=>{this.setState({is_deploy:!this.state.is_deploy})}),this.state={appPermissions:this.handlePermissions("queryAppInfo"),data:null,JavaMavenData:[],is_deploy:!0,deleteLoading:!1,buildState:!1}}componentDidMount(){this.getMultipleModulesInfo()}componentWillUnmount(){this.props.dispatch({type:"appControl/clearDetail"})}getCheck_uuid(){return this.props.match.params.check_uuid}getAppAlias(){return this.props.match.params.appAlias}render(){var e=this.state,t=e.data,a=e.is_deploy,l=e.buildState,s=e.showDelete,d=e.deleteLoading,o=e.appPermissions.isDelete,u=t;return u&&u.length>0&&u.map((e,t)=>{u[t].index=t}),h.default.createElement("div",null,h.default.createElement("h2",{style:{textAlign:"center"}},"JavaMaven\u591a\u6a21\u5757\u8bbe\u7f6e"),h.default.createElement("div",{style:{overflow:"hidden"}},t&&t.length>0&&h.default.createElement(v.default,{data:u,onSubmit:e=>{this.setState({JavaMavenData:e})}}),h.default.createElement("div",{style:{background:"#fff",padding:"20px",textAlign:"right",position:"fixed",bottom:0,left:0,right:0,zIndex:2,borderTop:"1px solid #e8e8e8"}},h.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},h.default.createElement(r.default,{style:{marginRight:8},onClick:this.handleBuild,loading:l,type:"primary"},(0,f.formatMessage)({id:"button.confirm_create"})),h.default.createElement("div",null,h.default.createElement(n.default,{placement:"topLeft",title:h.default.createElement("p",null,"\u53d6\u6d88\u672c\u9009\u9879,\u4e0d\u6784\u5efa\u542f\u52a8\u3002")},h.default.createElement(i.default,{size:"small",onClick:this.renderSuccessOnChange,checked:a},(0,f.formatMessage)({id:"button.build_start"})))),o&&h.default.createElement(r.default,{onClick:this.showDelete,type:"default"},(0,f.formatMessage)({id:"button.abandon_create"})))),s&&h.default.createElement(_.default,{onOk:this.handleDelete,loading:d,title:(0,f.formatMessage)({id:"confirmModal.abandon_create.create_check.title"}),subDesc:(0,f.formatMessage)({id:"confirmModal.delete.strategy.subDesc"}),desc:(0,f.formatMessage)({id:"confirmModal.delete.create_check.desc"}),onCancel:()=>{this.setState({showDelete:!1})}})))}},o=u))||o);t.default=b},FRTm:function(e,t,a){e.exports={typeBtnWrap:"typeBtnWrap___1asGj",typeBtn:"typeBtn___1uRh_",active:"active___1sarO",content:"content___C0tD4",ant_radio_disabled:"ant_radio_disabled___2AquS"}},exCG:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fOrg");var n=l(a("+KLJ"));a("g9YV");var i=l(a("wCAj")),r=l(a("jehZ"));a("+L6B");var d=l(a("2/Rp"));a("/xke");var o=l(a("TeRw"));a("y8nQ");var u=l(a("Vl3Y"));a("2qtc");var c=l(a("kLXV"));a("5NDa");var p=l(a("5rEg"));a("Znn+");var m=l(a("ZTPi"));a("7Kak");var h,f,v,_,g,y,E=l(a("9yH6")),b=s(a("q1tI")),C=a("MuoO"),S=a("LLXN"),w=(a("7DNP"),l(a("QDog")),l(a("n9hB")),l(a("FRTm"))),M=(E.default.Button,E.default.Group,m.default.TabPane,p.default.TextArea),D=(c.default.confirm,h=(0,C.connect)(e=>{var t=e.user;e.appControl,e.teamControl;return{currUser:t.currentUser}},null,null,{withRef:!0}),f=u.default.create(),h(v=f((_=class extends b.PureComponent{constructor(e){super(e),this.handleSubmit=(e=>{var t=this.props.form;t.validateFields((e,t)=>{e||this.props.onSubmit&&this.props.onSubmit(t)})}),this.handleEdit=(e=>{var t="",a="";e&&e.envs&&e.envs.length>0&&e.envs.map(e=>{"BUILD_MAVEN_CUSTOM_OPTS"==e.name&&(t=e.value),"BUILD_PROCFILE"==e.name&&(a=e.value)}),this.setState({isEdit:!0,editData:e,buildValue:t,startValue:a})}),this.handleOk=(()=>{var e=this.state,t=e.memoryList,a=e.editData,l=this.props.form,s=t;l.validateFields((e,t)=>{e||(s.map(e=>{e.id==a.id&&(e.cname=t.cname,e.envs.map(e=>{"BUILD_MAVEN_CUSTOM_OPTS"==e.name&&(e.value=t.BUILD_MAVEN_CUSTOM_OPTS),"BUILD_PROCFILE"==e.name&&(e.value=t.PROCFILE)}))}),this.setState({memoryList:s},()=>{o.default.destroy(),o.default.success({message:(0,S.formatMessage)({id:"notification.success.edit"})}),this.handleCancel()}))})}),this.handleCancel=(()=>{this.setState({isEdit:!1,isIndex:!1})}),this.state={isShow:[!0,!0],memoryList:this.props.data,isEdit:!1,isIndex:!1,editData:!1,buildValue:"",startValue:"",activeselectedRows:[],activeselectedRowKeys:""}}render(){var e=[{title:"\u6a21\u5757\u540d\u79f0",dataIndex:"name",rowKey:"name",width:"15%"},{title:"\u7ec4\u4ef6\u540d\u79f0",dataIndex:"cname",rowKey:"cname",width:"15%"},{title:"\u5305\u7c7b\u578b",dataIndex:"packaging",rowKey:"packaging",width:"8%"},{title:"\u7aef\u53e3",dataIndex:"index",rowKey:"index",width:"10%",render:(e,t)=>{return b.default.createElement("span",{key:e},t.ports&&t.ports.length>0?t.ports[0].container_port:e+5e3)}},{title:"\u6784\u5efa\u53d8\u91cf\u4fe1\u606f",dataIndex:"envs",rowKey:"envs",width:"45%",render:(e,t)=>{var a="",l="",s="";return e&&e.length>0&&e.map(e=>{"BUILD_MAVEN_CUSTOM_OPTS"==e.name&&(a=e.value),"BUILD_MAVEN_CUSTOM_GOALS"==e.name&&(l=e.value),"BUILD_PROCFILE"==e.name&&(s=e.value)}),b.default.createElement("div",{key:t},b.default.createElement("div",{style:{display:"flex"}},b.default.createElement("p",{style:{width:"30%"}},"Maven\u6784\u5efa\u53c2\u6570:"),b.default.createElement("div",{style:{width:"70%"}},a)),b.default.createElement("div",{style:{display:"flex"}},b.default.createElement("p",{style:{width:"30%"}},"Maven\u6784\u5efa\u547d\u4ee4:"),b.default.createElement("div",{style:{width:"70%"}},l)),b.default.createElement("div",{style:{display:"flex"}},b.default.createElement("p",{style:{width:"30%"}},"\u542f\u52a8\u547d\u4ee4:"),b.default.createElement("div",{style:{width:"70%"}},s)))}},{title:"\u64cd\u4f5c",dataIndex:"id",rowKey:"id",width:"7%",render:(e,t)=>{return b.default.createElement(d.default,{onClick:()=>{this.handleEdit(t)}},"\u4fee\u6539")}}],t={onChange:(e,t)=>{this.props.onSubmit(t)},getCheckboxProps:e=>({disabled:e.operation,operation:e.operation})},a=this.props.form,l=a.getFieldDecorator,s=(a.getFieldValue,{labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:18},sm:{span:18}}}),n=this.state,o=n.memoryList,m=n.isEdit,h=n.editData,f=n.buildValue,v=n.startValue;return b.default.createElement("div",null,m&&b.default.createElement(c.default,{title:"\u4fee\u6539",visible:m,onOk:this.handleOk,onCancel:this.handleCancel},b.default.createElement(u.default.Item,(0,r.default)({},s,{label:"\u7ec4\u4ef6\u540d\u79f0"}),l("cname",{initialValue:h&&h.cname,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7ec4\u4ef6\u547d\u4ee4"}]})(b.default.createElement(p.default,{placeholder:""}))),b.default.createElement(u.default.Item,(0,r.default)({},s,{label:"\u6784\u5efa\u547d\u4ee4"}),l("BUILD_MAVEN_CUSTOM_OPTS",{initialValue:f&&f,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6784\u5efa\u547d\u4ee4"}]})(b.default.createElement(M,{placeholder:""}))),b.default.createElement(u.default.Item,(0,r.default)({},s,{label:"\u542f\u52a8\u547d\u4ee4"}),l("PROCFILE",{initialValue:v&&v,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u542f\u52a8\u547d\u4ee4"}]})(b.default.createElement(M,{placeholder:""})))),b.default.createElement(i.default,{rowSelection:t,dataSource:o,columns:e,pagination:!1,style:{background:"#fff",marginTop:"20px"}}))}},v=_))||v)||v),x=(g=(0,C.connect)(e=>{var t=e.user;e.appControl;return{currUser:t.currentUser}},null,null,{withRef:!0}),g(y=class extends b.PureComponent{constructor(e){super(e),this.state={}}render(){var e=this.props.data;return b.default.createElement("div",null,b.default.createElement("div",{style:{overflow:"hidden"}},b.default.createElement("div",{className:w.default.content,style:{overflow:"hidden",marginBottom:90}},b.default.createElement(n.default,{message:"\u4ee5\u4e0b\u4e3a\u68c0\u6d4b\u51fa\u7684Maven\u591a\u6a21\u5757\u9879\u76ee\u7684\u6a21\u5757\u4fe1\u606f, \u8bf7\u9009\u62e9\u9700\u8981\u6784\u5efa\u7684\u6a21\u5757, \u5e76\u786e\u8ba4\u6784\u5efa\u4fe1\u606f",type:"success"}),b.default.createElement(D,{data:e,onSubmit:this.props.onSubmit}))))}})||y);t.default=x}}]);