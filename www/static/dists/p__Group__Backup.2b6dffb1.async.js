(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{UHeB:function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var i=s(a("bx4M"));a("g9YV");var n=s(a("wCAj"));a("/xke");var o=s(a("TeRw")),l=s(a("p0pE"));a("2qtc");var u=s(a("kLXV"));a("Mwp2");var c=s(a("VXEj"));a("fOrg");var p=s(a("+KLJ")),d=s(a("jehZ"));a("5Dmo");var h=s(a("3S7+"));a("+L6B");var m=s(a("2/Rp"));a("y8nQ");var f=s(a("Vl3Y"));a("Pwec");var g=s(a("CtXQ"));a("7Kak");var k=s(a("9yH6"));a("5NDa");var v,b,E,_,I,w,y,C,S,B=s(a("5rEg")),D=a("MuoO"),x=a("7DNP"),R=r(a("q1tI")),T=s(a("nyIC")),L=s(a("q76B")),M=s(a("e6Ls")),N=s(a("deV3")),P=s(a("D+Pu")),O=s(a("br/n")),A=s(a("puxM")),U=s(a("XZXw")),z=a("vSx2"),G=s(a("QDog")),q=s(a("ym8O")),X=s(a("hMqj")),j=s(a("ZgmS")),V=s(a("+iC2")),J=B.default.TextArea,F=k.default.Button,Q=k.default.Group,Z=(v=(0,D.connect)(e=>{var t=e.user;return{currUser:t.currentUser}}),v((E=class extends R.PureComponent{constructor(e){super(e),this.getSocketUrl=(()=>{return V.default.getCurrRegionSoketUrl(this.props.currUser)}),this.state={map:{starting:"\u5907\u4efd\u4e2d",success:"\u5907\u4efd\u6210\u529f",failed:"\u5907\u4efd\u5931\u8d25"}},this.timer=null}componentDidMount(){var e=this.props.data;"starting"===e.status&&(this.createSocket(),this.startLoopStatus())}componentWillUnmount(){this.stopLoopStatus(),this.logSocket&&this.logSocket.destroy(),this.logSocket=null}createSocket(){this.logSocket=new q.default({url:this.getSocketUrl(),eventId:this.props.data.event_id,onMessage:e=>{}})}startLoopStatus(){this.props.dispatch({type:"application/fetchBackupStatus",payload:{team_name:G.default.getCurrTeamName(),backup_id:this.props.data.backup_id,group_id:this.props.group_id},callback:e=>{if(e){var t=e.bean;"starting"===t.status?this.timer=setTimeout(()=>{this.startLoopStatus()},1e4):this.props.onEnd&&this.props.onEnd()}}})}stopLoopStatus(){clearTimeout(this.timer)}render(){var e=this.props.data||{};return R.default.createElement("span",null,this.state.map[e.status]," ","starting"===e.status&&R.default.createElement(g.default,{style:{marginLeft:8},type:"loading",spin:!0}))}},b=E))||b),K=(_=f.default.create(),_((w=class extends R.PureComponent{constructor(){super(...arguments),this.state={},this.onOk=(e=>{e.preventDefault();var t=this.props,a=t.form,s=t.onOk,r=t.warningText;a.validateFields((e,t)=>{if(!e){var a=t;r&&(a.force=!0),s&&s(a)}})})}render(){var e=this.props,t=e.data,a=void 0===t?{}:t,s=e.form,r=e.is_configed,i=e.componentList,n=e.warningText,o=e.onCancel,l=s.getFieldDecorator,g={labelCol:{span:5},wrapperCol:{span:19}},k=r?"\u5907\u4efd\u5230\u4e91\u7aef\u5b58\u50a8\u4e0a\uff0c\u53ef\u5b9e\u73b0\u8de8\u96c6\u7fa4\u8fc1\u79fb":"\u8bf7\u5728\u7ba1\u7406\u540e\u53f0\u5f00\u542f\u6b64\u529f\u80fd";return R.default.createElement(u.default,{title:"\u65b0\u589e\u5907\u4efd",visible:!0,className:M.default.TelescopicModal,onOk:this.onOk,onCancel:o,footer:[R.default.createElement(m.default,{onClick:o}," \u53d6\u6d88 "),R.default.createElement(m.default,{type:"primary",onClick:this.onOk},n?"\u5f3a\u5236\u5907\u4efd":"\u786e\u5b9a")]},R.default.createElement(f.default,{layout:"horizontal"},R.default.createElement(f.default.Item,(0,d.default)({},g,{label:R.default.createElement("span",null,"\u5907\u4efd\u65b9\u5f0f")}),l("mode",{initialValue:r?a.mode||"full-online":"full-offline",rules:[{required:!0,message:"\u8981\u521b\u5efa\u7684\u5e94\u7528\u8fd8\u6ca1\u6709\u540d\u5b57"}]})(R.default.createElement(Q,null,R.default.createElement(h.default,{title:k},R.default.createElement(F,{disabled:!r,value:"full-online"},"\u4e91\u7aef\u5907\u4efd")),R.default.createElement(h.default,{title:"\u5907\u4efd\u5230\u5f53\u524d\u96c6\u7fa4\u672c\u5730\uff0c\u4e0d\u80fd\u8de8\u96c6\u7fa4\u8fc1\u79fb"},R.default.createElement(F,{value:"full-offline"},"\u672c\u5730\u5907\u4efd"))))),R.default.createElement(f.default.Item,(0,d.default)({},g,{label:"\u5907\u4efd\u8bf4\u660e"}),l("note",{initialValue:a.note||"",rules:[{required:!0,message:"\u8bf7\u5199\u5165\u5907\u4efd\u8bf4\u660e"}]})(R.default.createElement(J,{placeholder:"\u8bf7\u5199\u5165\u5907\u4efd\u8bf4\u660e"}))),n&&R.default.createElement("div",null,R.default.createElement(p.default,{message:n,type:"warning"}),R.default.createElement(c.default,{size:"small",style:{margin:"10px 0"},header:R.default.createElement("h6",{style:{marginBottom:"0",fontSize:"15px"}},"\u7ec4\u4ef6\u540d\u79f0"),bordered:!0,dataSource:i,renderItem:e=>R.default.createElement(c.default.Item,null,e)}))))}},I=w))||I),W=(y=(0,D.connect)(e=>{var t=e.user,a=e.global,s=e.teamControl,r=e.enterprise;return{currUser:t.currentUser,groups:a.groups||[],currentTeam:s.currentTeam,currentRegionName:s.currentRegionName,currentEnterprise:r.currentEnterprise,currentTeamPermissionsInfo:s.currentTeamPermissionsInfo}}),y((S=class extends R.PureComponent{constructor(e){super(e),this.onBackup=(()=>{this.setState({showBackup:!0})}),this.getGroupId=(()=>{var e=this.props.match.params;return e.appID}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return X.default.querySpecifiedPermissionsInfo(t,e)}),this.fetchBackup=(()=>{var e=this.props.match.params,t=e.teamName,a=e.appID;this.props.dispatch({type:"application/fetchBackup",payload:{team_name:t,group_id:a,page:this.state.page,page_size:this.state.pageSize},callback:e=>{e&&this.setState({list:e.list||[],total:e.total,is_configed:e.bean.is_configed})}})}),this.cancelBackup=(()=>{this.setState({showBackup:!1,warningText:"",componentList:[]})}),this.handleBackup=(e=>{this.props.dispatch({type:"application/backup",payload:(0,l.default)({team_name:G.default.getCurrTeamName(),group_id:this.getGroupId()},e),callback:()=>{this.cancelBackup(),this.fetchBackup()},handleError:e=>{e&&e.data&&e.data.code&&(4122===e.data.code&&this.setState({warningText:"\u5907\u4efd\u6709\u5f02\u5e38 \uff1a\u7ec4\u4ef6\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u5b58\u50a8\uff0c\u662f\u5426\u5f3a\u5236\u5907\u4efd",componentList:e.data.data.list||[]}),4121===e.data.code&&this.setState({warningText:"\u5907\u4efd\u6709\u5f02\u5e38 \uff1a\u6709\u72b6\u6001\u7ec4\u4ef6\u672a\u505c\u6b62\uff0c\u662f\u5426\u5f3a\u5236\u5907\u4efd",componentList:e.data.data.list||[]}))}})}),this.fetchAppDetail=(()=>{var e=this.props.dispatch,t=this.props.match.params,a=t.teamName,s=t.regionName,r=t.appID;this.setState({loadingDetail:!0}),e({type:"application/fetchGroupDetail",payload:{team_name:a,region_name:s,group_id:r},callback:e=>{e&&200===e._code&&this.setState({appDetail:e.bean,loadingDetail:!1})},handleError:e=>{e&&404===e.code&&this.props.dispatch(x.routerRedux.push("/team/".concat(G.default.getCurrTeamName(),"/region/").concat(G.default.getCurrRegionName(),"/apps")))}})}),this.toAdd=(()=>{this.setState({showImport:!0})}),this.handleImportBackup=(e=>{o.default.success({message:"\u5907\u4efd\u5df2\u5bfc\u5165",duration:2}),this.setState({showImport:!1}),this.fetchBackup()}),this.cancelImportBackup=(()=>{this.setState({showImport:!1}),this.fetchBackup()}),this.handleRecovery=((e,t)=>{this.setState({showRecovery:!0,backup_id:e.backup_id,group_uuid:e.group_uuid})}),this.handleRecoveryBackup=(()=>{this.setState({showRecovery:!1,backup_id:""}),this.fetchBackup()}),this.cancelRecoveryBackup=(()=>{this.setState({showRecovery:!1,backup_id:""}),this.fetchBackup()}),this.handleMove=((e,t)=>{this.setState({showMove:!0,backup_id:e.backup_id,group_uuid:e.group_uuid})}),this.handleMoveBackup=(()=>{this.setState({showMove:!1})}),this.cancelMoveBackup=(()=>{this.setState({showMove:!1,backup_id:""})}),this.handleExport=(e=>{var t="".concat(T.default.baseUrl,"/console/teams/").concat(G.default.getCurrTeamName(),"/groupapp/").concat(this.getGroupId(),"/backup/export?backup_id=").concat(e.backup_id);window.open(t),o.default.success({message:"\u5907\u4efd\u5bfc\u51fa\u4e2d",duration:2})}),this.handleDel=((e,t)=>{this.setState({showDel:!0,backup_id:e.backup_id})}),this.handleDelete=(()=>{this.props.dispatch({type:"application/delBackup",payload:{team_name:G.default.getCurrTeamName(),group_id:this.getGroupId(),backup_id:this.state.backup_id},callback:e=>{e&&(o.default.success({message:"\u5220\u9664\u6210\u529f",duration:2}),this.cancelDelete(),this.fetchBackup())}})}),this.cancelDelete=(()=>{this.setState({showDel:!1,backup_id:""},()=>{this.fetchBackup()})}),this.jumpToAllbackup=(()=>{this.props.dispatch(x.routerRedux.push("/team/".concat(G.default.getCurrTeamName(),"/region/").concat(G.default.getCurrRegionName(),"/allbackup")))}),this.state={list:[],page:1,total:0,pageSize:6,showBackup:!1,showMove:!1,showDel:!1,showRecovery:!1,showImport:!1,backup_id:"",appDetail:{},is_configed:null,group_uuid:"",warningText:"",componentList:[],operationPermissions:this.handlePermissions("queryAppInfo")}}componentWillMount(){var e=this.props.dispatch,t=this.state.operationPermissions.isBackup;t||G.default.withoutPermission(e)}componentDidMount(){this.fetchAppDetail(),this.fetchBackup()}render(){var e=this.props,t=e.currentEnterprise,a=e.currentTeam,s=e.currentRegionName,r=this.state,o=r.appDetail,l=r.loadingDetail,u=r.list,c=void 0===u?[]:u,p=r.operationPermissions,d=p.isMigrate,h=(p.isRestore,p.isImport),f=p.isExport,g=[{title:"\u5907\u4efd\u65f6\u95f4",dataIndex:"create_time"},{title:"\u5907\u4efd\u4eba",dataIndex:"user"},{title:"\u5907\u4efd\u6a21\u5f0f",dataIndex:"mode",render:(e,t)=>{var a={"full-online":"\u4e91\u7aef\u5907\u4efd","full-offline":"\u672c\u5730\u5907\u4efd"};return a[e]||""}},{title:"\u5305\u5927\u5c0f",dataIndex:"backup_size",render:(e,t)=>{return j.default.unit(e,"Byte")}},{title:"\u72b6\u6001",dataIndex:"status",render:(e,t)=>{return R.default.createElement(Z,{onEnd:this.fetchBackup,group_id:this.getGroupId(),data:t})}},{title:"\u5907\u6ce8",dataIndex:"note"},{title:"\u64cd\u4f5c",dataIndex:"action",render:(e,t)=>{return R.default.createElement("div",null,"success"===t.status?R.default.createElement(R.Fragment,null,d&&R.default.createElement("a",{style:{marginRight:"5px"},onClick:this.handleRecovery.bind(this,t)},"\u6062\u590d"),d&&R.default.createElement("a",{style:{marginRight:"5px"},onClick:this.handleMove.bind(this,t)},"\u8fc1\u79fb"),"full-online"===t.mode&&f&&R.default.createElement("a",{style:{marginRight:"5px"},onClick:this.handleExport.bind(this,t)},"\u5bfc\u51fa"),R.default.createElement("a",{onClick:this.handleDel.bind(this,t)},"\u5220\u9664")):"","failed"===t.status?R.default.createElement(R.Fragment,null,R.default.createElement("a",{onClick:this.handleDel.bind(this,t)},"\u5220\u9664")):"")}}],k=[];return k=(0,z.createApp)((0,z.createTeam)((0,z.createEnterprise)(k,t),a,s),a,s,{appName:o.group_name,appID:o.group_id}),R.default.createElement(U.default,{loading:l,breadcrumbList:k,title:"\u5907\u4efd\u7ba1\u7406",content:R.default.createElement("p",null,"\u5e94\u7528\u5907\u4efd\u662f\u6307\u5c06\u5f53\u524d\u5e94\u7528\u5143\u6570\u636e\u3001\u6301\u4e45\u5316\u6570\u636e\u3001\u7248\u672c\u6570\u636e\u5b8c\u6574\u5907\u4efd\uff0c\u5907\u4efd\u8bb0\u5f55\u53ef\u7528\u4e8e\u5e94\u7528\u8fc1\u79fb\u548c\u56de\u6eda\uff0c\u4e91\u7aef\u5907\u4efd\u8bb0\u5f55\u53ef\u7528\u4e8e\u8de8\u96c6\u7fa4\u5e94\u7528\u8fc1\u79fb\u64cd\u4f5c"),extraContent:R.default.createElement("div",null,R.default.createElement(m.default,{style:{marginRight:8},type:"primary",onClick:this.onBackup},"\u65b0\u589e\u5907\u4efd"),h&&R.default.createElement(m.default,{style:{marginRight:8},onClick:this.toAdd},"\u5bfc\u5165\u5907\u4efd"),R.default.createElement(m.default,{onClick:this.jumpToAllbackup,href:"javascript:;"},"\u56e2\u961f\u5168\u90e8\u5907\u4efd"))},R.default.createElement(i.default,null,R.default.createElement(A.default,{sm:800},R.default.createElement(n.default,{rowKey:e=>{return e.backup_id},pagination:{current:this.state.page,total:this.state.total,pageSize:this.state.pageSize,onChange:e=>{this.setState({page:e},()=>{this.fetchBackup()})}},columns:g,dataSource:c}))),this.state.showBackup&&R.default.createElement(K,{warningText:this.state.warningText,componentList:this.state.componentList,is_configed:this.state.is_configed,onOk:this.handleBackup,onCancel:this.cancelBackup}),this.state.showMove&&R.default.createElement(P.default,{onOk:this.handleMoveBackup,onCancel:this.cancelMoveBackup,backupId:this.state.backup_id,groupId:this.getGroupId(),group_uuid:this.state.group_uuid}),this.state.showRecovery&&R.default.createElement(O.default,{onOk:this.handleRecoveryBackup,onCancel:this.cancelRecoveryBackup,propsParams:this.props.match.params,backupId:this.state.backup_id,group_uuid:this.state.group_uuid,groupId:this.getGroupId()}),this.state.showImport&&R.default.createElement(N.default,{onReLoad:this.handleImportBackup,onCancel:this.cancelImportBackup,backupId:this.state.backup_id,groupId:this.getGroupId()}),this.state.showDel&&R.default.createElement(L.default,{backupId:this.state.backup_id,onOk:this.handleDelete,onCancel:this.cancelDelete,title:"\u5220\u9664\u5907\u4efd",desc:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u5907\u4efd\u5417\uff1f",subDesc:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d"}))}},C=S))||C);t.default=W},deV3:function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var i=s(a("kLXV"));a("DZo9");var n=s(a("8z0m"));a("+L6B");var o=s(a("2/Rp"));a("/xke");var l,u,c,p=s(a("TeRw")),d=a("MuoO"),h=r(a("q1tI")),m=s(a("nyIC")),f=s(a("8+Sn")),g=s(a("QDog")),k=f.default.get("token"),v={};k&&(v.Authorization="GRJWT ".concat(k),v.X_REGION_NAME=g.default.getCurrRegionName(),v.X_TEAM_NAME=g.default.getCurrTeamName());var b=(l=(0,d.connect)(e=>{var t=e.user,a=e.global,s=e.application;return{groupDetail:s.groupDetail||{},currUser:t.currentUser,groups:a.groups||[]}}),l((c=class extends h.PureComponent{constructor(e){super(e),this.onChange=(e=>{var t=e.fileList,a=e.file.status;if("done"===a)this.props.onReLoad&&this.props.onReLoad();else if("error"===a){var s=e.file.response;p.default.warning({message:s.msg_show})}t[0]&&"error"==t[0].status?this.setState({fileList:[]}):this.setState({fileList:t})}),this.handleProgress=((e,t)=>{var a=this.state.fileList;a=a.map(a=>{return a.uid===t.uid&&(a.percent=e.percent),a}),this.setState({fileList:a})}),this.onRemove=(e=>{return p.default.info({message:"\u5907\u4efd\u5df2\u5bfc\u5165",duration:"2"}),!1}),this.onData=(e=>{console.log("---\x3e".concat(JSON.stringify(e)))}),this.state={fileList:[]}}render(){var e=this.props.groupId,t=g.default.getCurrTeamName(),a="".concat(m.default.baseUrl,"/console/teams/").concat(t,"/groupapp/").concat(e,"/backup/import"),s=this.state.fileList;return h.default.createElement(i.default,{visible:!0,onCancel:this.props.onCancel,title:"\u8bf7\u5bfc\u5165\u5907\u4efd",footer:[h.default.createElement(o.default,{key:"back",onClick:this.props.onCancel},"\u5173\u95ed")]},h.default.createElement(n.default,{action:a,fileList:s,onChange:this.onChange,headers:v,onRemove:this.onRemove,onProgress:this.handleProgress,data:this.onData},s.length>0?null:h.default.createElement(o.default,null,"\u8bf7\u9009\u62e9\u6587\u4ef6")))}},u=c))||u);t.default=b}}]);