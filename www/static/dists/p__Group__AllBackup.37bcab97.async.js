(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{VDAs:function(e,t,a){"use strict";var s=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var u=s(a("bx4M"));a("g9YV");var l=s(a("wCAj"));a("/xke");var r=s(a("TeRw"));a("Pwec");var o,c,n,p,d,h,g=s(a("CtXQ")),k=i(a("q1tI")),m=a("MuoO"),f=a("7DNP"),_=s(a("XZXw")),b=s(a("ym8O")),v=s(a("q76B")),B=s(a("D+Pu")),S=s(a("br/n")),w=s(a("ZgmS")),y=s(a("+iC2")),D=s(a("QDog")),C=s(a("nyIC")),E=(o=(0,m.connect)(e=>{var t=e.user;e.appControl;return{currUser:t.currentUser}}),o((n=class extends k.PureComponent{constructor(e){super(e),this.getSocketUrl=(()=>{return y.default.getCurrRegionSoketUrl(this.props.currUser)}),this.state={map:{starting:"\u5907\u4efd\u4e2d",success:"\u5907\u4efd\u6210\u529f",failed:"\u5907\u4efd\u5931\u8d25"}},this.timer=null}componentDidMount(){var e=this.props.data;"starting"===e.status&&(this.createSocket(),this.startLoopStatus())}createSocket(){this.logSocket=new b.default({url:this.getSocketUrl(),eventId:this.props.data.event_id,onMessage:e=>{console.log(e)}})}componentWillUnmount(){this.stopLoopStatus(),this.logSocket&&this.logSocket.destroy(),this.logSocket=null}startLoopStatus(){this.props.dispatch({type:"application/fetchBackupStatus",payload:{team_name:D.default.getCurrTeamName(),backup_id:this.props.data.backup_id,group_id:this.props.group_id},callback:e=>{if(e){var t=e.bean;"starting"===t.status?this.timer=setTimeout(()=>{this.startLoopStatus()},1e4):this.props.onEnd&&this.props.onEnd()}}})}stopLoopStatus(){clearTimeout(this.timer)}render(){var e=this.props.data||{};return k.default.createElement("span",null,this.state.map[e.status]," ","starting"===e.status&&k.default.createElement(g.default,{style:{marginLeft:8},type:"loading",spin:!0}))}},c=n))||c),x=(p=(0,m.connect)(e=>{var t=e.user,a=e.global,s=e.application;return{groupDetail:s.groupDetail||{},currUser:t.currentUser,groups:a.groups||[]}}),p((h=class extends k.default.Component{constructor(e){super(e),this.fetchAllBackup=(()=>{var e=this.props.dispatch,t=this.state,a=t.pageNum,s=t.pageSize;e({type:"application/queryAllBackup",payload:{team_name:D.default.getCurrTeamName(),pageNum:a,pageSize:s},callback:e=>{e&&this.setState({list:e.list,tableLoading:!1,total:e.total})}})}),this.onPageChange=(e=>{this.setState({pageNum:e,tableLoading:!0},()=>{this.fetchAllBackup()})}),this.handleMoveBackup=(()=>{this.setState({showMove:!1})}),this.cancelMoveBackup=(()=>{this.setState({showMove:!1,backup_id:"",group_id:""})}),this.handleRecoveryBackup=(()=>{this.setState({showRecovery:!1,backup_id:"",group_id:""}),this.fetchAllBackup()}),this.cancelRecoveryBackup=(()=>{this.setState({showRecovery:!1,backup_id:"",group_id:""}),this.fetchAllBackup()}),this.handleDel=((e,t)=>{this.setState({showDel:!0,backup_id:e.backup_id,group_id:e.group_id})}),this.handleDelete=(e=>{var t=D.default.getCurrTeamName();this.props.dispatch({type:"application/delBackup",payload:{team_name:t,group_id:this.state.group_id,backup_id:this.state.backup_id},callback:e=>{r.default.success({message:"\u5220\u9664\u6210\u529f",duration:"2"}),this.cancelDelete(),this.fetchAllBackup()}})}),this.cancelDelete=(e=>{this.setState({showDel:!1,backup_id:""},()=>{this.fetchAllBackup()})}),this.handleDelBackup=((e,t)=>{this.setState({showDelBackup:!0,backup_id:e.backup_id,group_id:e.group_id})}),this.handleDeleteBackup=(e=>{var t=D.default.getCurrTeamName();this.props.dispatch({type:"application/delFailureBackup",payload:{team_name:t,group_id:this.state.group_id,backup_id:this.state.backup_id},callback:e=>{r.default.success({message:"\u5220\u9664\u6210\u529f",duration:"2"}),this.cancelDeleteBackup()}})}),this.cancelDeleteBackup=(e=>{this.setState({showDelBackup:!1,backup_id:""},()=>{this.fetchAllBackup()})}),this.handleRecovery=((e,t)=>{this.setState({showRecovery:!0,backup_id:e.backup_id,group_uuid:e.group_uuid,group_id:e.group_id})}),this.handleMove=((e,t)=>{this.setState({showMove:!0,backup_id:e.backup_id,group_uuid:e.group_uuid,group_id:e.group_id})}),this.handleExport=((e,t)=>{var a=e.backup_id,s=D.default.getCurrTeamName(),i=e.group_id,u=C.default.baseUrl+"/console/teams/"+s+"/groupapp/"+i+"/backup/export?backup_id="+a;window.open(u),r.default.success({message:"\u5907\u4efd\u5bfc\u51fa\u4e2d",duration:"2"})}),this.state={tableLoading:!0,list:[],total:0,pageNum:1,pageSize:10,showMove:!1,showDel:!1,showDelBackup:!1,showRecovery:!1,backup_id:"",group_uuid:"",event_id:"",group_id:""}}componentWillMount(){this.fetchAllBackup()}render(){var e=[{title:"\u5907\u4efd\u65f6\u95f4",dataIndex:"create_time"},{title:"\u5907\u4efd\u4eba",dataIndex:"user"},{title:"\u5907\u4efd\u6a21\u5f0f",dataIndex:"mode",render:(e,t)=>{var a={"full-online":"\u4e91\u7aef\u5907\u4efd","full-offline":"\u672c\u5730\u5907\u4efd"};return a[e]||""}},{title:"\u5305\u5927\u5c0f",dataIndex:"backup_size",render:(e,t)=>{return w.default.unit(e,"Byte")}},{title:"\u72b6\u6001",dataIndex:"status",render:(e,t)=>{return k.default.createElement(E,{onEnd:this.fetchAllBackup,group_id:t.group_id,data:t})}},{title:"\u5907\u4efd\u5e94\u7528",dataIndex:"group_name",render:(e,t)=>{return e.includes("\u5df2\u5220\u9664")?k.default.createElement("a",{href:"",disabled:!0},e):k.default.createElement(f.Link,{to:"/team/".concat(D.default.getCurrTeamName(),"/region/").concat(D.default.getCurrRegionName(),"/apps/").concat(t.group_id,"/")},e)}},{title:"\u5907\u6ce8",dataIndex:"note"},{title:"\u64cd\u4f5c",dataIndex:"action",render:(e,t)=>{return k.default.createElement("div",null,"success"==t.status?k.default.createElement(k.Fragment,null,k.default.createElement("a",{href:"javascript:;",style:{marginRight:"5px"},onClick:this.handleRecovery.bind(this,t)},"\u6062\u590d"),k.default.createElement("a",{href:"javascript:;",style:{marginRight:"5px"},onClick:this.handleMove.bind(this,t)},"\u8fc1\u79fb"),"full-online"==t.mode&&k.default.createElement("a",{href:"javascript:;",style:{marginRight:"5px"},onClick:this.handleExport.bind(this,t)},"\u5bfc\u51fa"),t.is_delete&&k.default.createElement("a",{href:"javascript:;",style:{marginRight:"5px"},onClick:this.handleDelBackup.bind(this,t)},"\u5220\u9664")):"","failed"==t.status?k.default.createElement(k.Fragment,null,k.default.createElement("a",{href:"javascript:;",onClick:this.handleDel.bind(this,t)},"\u5220\u9664")):"")}}],t=this.state,a=t.tableLoading,s=t.pageNum,i=t.pageSize,r=t.total,o=t.list;return k.default.createElement(_.default,{title:"\u5e94\u7528\u5907\u4efd\u8bb0\u5f55",content:"\u5e94\u7528\u5907\u4efd\u8bb0\u5f55\u662f\u5f53\u524d\u56e2\u961f\u4e0b\u7684\u6240\u6709\u5907\u4efd\u8bb0\u5f55\uff0c\u5305\u62ec\u5df2\u5220\u9664\u5e94\u7528\u7684\u5907\u4efd\u8bb0\u5f55\uff0c\u57fa\u4e8e\u5907\u4efd\u53ef\u4ee5\u6062\u590d\u6216\u8fc1\u79fb\u5df2\u5220\u9664\u7684\u5e94\u7528"},k.default.createElement(u.default,null,k.default.createElement(l.default,{rowKey:e=>{return e.backup_id},pagination:{total:r,pageSize:i,current:s,onChange:this.onPageChange},columns:e,dataSource:o,loading:a})),this.state.showMove&&k.default.createElement(B.default,{onOk:this.handleMoveBackup,onCancel:this.cancelMoveBackup,backupId:this.state.backup_id,group_uuid:this.state.group_uuid,groupId:this.state.group_id}),this.state.showRecovery&&k.default.createElement(S.default,{onOk:this.handleRecoveryBackup,onCancel:this.cancelRecoveryBackup,propsParams:this.props.match.params,backupId:this.state.backup_id,group_uuid:this.state.group_uuid,groupId:this.state.group_id}),this.state.showDel&&k.default.createElement(v.default,{backupId:this.state.backup_id,onOk:this.handleDelete,onCancel:this.cancelDelete,title:"\u5220\u9664\u5907\u4efd",desc:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u5907\u4efd\u5417\uff1f",subDesc:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d"}),this.state.showDelBackup&&k.default.createElement(v.default,{backupId:this.state.backup_id,onOk:this.handleDeleteBackup,onCancel:this.cancelDeleteBackup,title:"\u5220\u9664\u5907\u4efd",desc:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u5907\u4efd\u5417\uff1f",subDesc:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d"}))}},d=h))||d),I=x;t.default=I}}]);