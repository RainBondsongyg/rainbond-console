(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"3DXh":function(e,t,a){e.exports={numberInfo:"numberInfo___1ChkS",suffix:"suffix___2d8Sr",numberInfoTitle:"numberInfoTitle___1c9kA",numberInfoSubTitle:"numberInfoSubTitle___1ecJ3",numberInfoValue:"numberInfoValue___1Muvp",subTotal:"subTotal___35P-M",numberInfolight:"numberInfolight___2_VRt"}},Ex6E:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var n=l(a("BMrR"));a("g9YV");var i=l(a("wCAj"));a("Pwec");var s=l(a("CtXQ"));a("jCWc");var d=l(a("kPKH"));a("IzEo");var o=l(a("bx4M"));a("DjyN");var u=l(a("NUBc"));a("2qtc");var m=l(a("kLXV"));a("+L6B");var c=l(a("2/Rp"));a("T2oS");var p=l(a("W9HT"));a("Awhp");var f=l(a("KrTs"));a("5Dmo");var g=l(a("3S7+"));a("Mwp2");var h=l(a("VXEj")),_=l(a("p0pE"));a("/xke");var v=l(a("TeRw"));a("y8nQ");var b=l(a("Vl3Y"));a("5NDa");var E,y,w,T,N=l(a("5rEg")),x=a("MuoO"),C=a("7DNP"),k=l(a("wd/R")),S=l(a("ZhIB")),I=r(a("q1tI")),L=a("LLXN"),A=l(a("qCJ4")),D=a("KTCi"),R=l(a("LOQS")),P=l(a("ALo4")),M=a("vSx2"),z=l(a("npAr")),B=l(a("8+Sn")),O=l(a("QDog")),j=l(a("+rJz")),W=l(a("mWxT")),G=l(a("hMqj")),q=l(a("ZgmS")),F=l(a("+iC2")),U=l(a("bJ8p")),V=N.default.Search,H=(E=(0,x.connect)(e=>{var t=e.user,a=e.index,l=e.loading,r=e.global,n=e.teamControl,i=e.enterprise;return{currUser:t.currentUser,index:a,enterprise:r.enterprise,events:a.events,pagination:a.pagination,rainbondInfo:r.rainbondInfo,currentTeam:n.currentTeam,currentRegionName:n.currentRegionName,currentEnterprise:i.currentEnterprise,loading:l,currentTeamPermissionsInfo:n.currentTeamPermissionsInfo}}),y=b.default.create(),E(w=y((T=class extends I.PureComponent{constructor(e){super(e),this.onPageChange=((e,t)=>{this.setState({page:e,page_size:t},()=>{this.getTeamAppList()})}),this.onDomainPageChange=(e=>{this.setState({domainPage:e},()=>{this.getDomainName()})}),this.onServicePageChange=(e=>{this.setState({servicePage:e},()=>{this.getService()})}),this.getService=(()=>{var e=this.state,t=e.servicePage,a=e.servicePageSize;this.props.dispatch({type:"global/getService",payload:{team_name:O.default.getCurrTeamName(),region_name:O.default.getCurrRegionName(),page:t,page_size:a},callback:e=>{e&&200==e._code&&this.setState({serviceList:e.list})}})}),this.getStartTime=(()=>{return(new Date).getTime()/1e3-3600}),this.getStep=(()=>{return 60}),this.handleSearchApp=(e=>{this.setState({query:e,page:1},()=>{this.getTeamAppList()})}),this.getDomain=(()=>{var e=this.state,t=e.domainPage,a=e.domainPageSize;this.props.dispatch({type:"global/getDomainName",payload:{team_name:O.default.getCurrTeamName(),region_name:O.default.getCurrRegionName(),page:t,page_size:a,id:0,start:this.getStartTime(),step:this.getStep(),end:(new Date).getTime()/1e3},callback:e=>{if(e&&200==e._code){var t=e.bean&&e.bean.data&&e.bean.data.result&&e.bean.data.result.length>0&&e.bean.data.result[0].values&&e.bean.data.result[0].values,a=[];if(t&&t.length>0)for(var l=0;l<t.length;l+=1)a.push({x:(0,k.default)(new Date(1e3*t[l][0])).locale("zh-cn").format("YYYY-MM-DD HH:mm"),y:Math.floor(t[l][1])});this.setState({visitData:a},()=>{this.handleTimers("getDomainTimer",()=>{this.getDomain()},1e4)})}},handleError:e=>{this.handleError(e),this.handleTimers("getDomainTimer",()=>{this.getDomain()},2e4)}})}),this.getDomainName=(()=>{var e=this.state,t=e.domainPage,a=e.domainPageSize;this.props.dispatch({type:"global/getDomainName",payload:{team_name:O.default.getCurrTeamName(),region_name:O.default.getCurrRegionName(),page:t,page_size:a,id:1},callback:e=>{e&&200==e._code&&this.setState({domainTotal:e.bean&&e.bean.total,domainList:e.list,num:e.bean&&e.bean.total_traffic},()=>{this.handleTimers("getDomainNameTimer",()=>{this.getDomainName()},1e4)})},handleError:e=>{this.handleError(e),this.handleTimers("getDomainNameTimer",()=>{this.getDomainName()},2e4)}})}),this.getTeamAppList=(()=>{var e=this.state,t=e.page,a=e.page_size,l=e.query;this.props.dispatch({type:"global/getTeamAppList",payload:{team_name:O.default.getCurrTeamName(),region:O.default.getCurrRegionName(),query:l,page:t,page_size:a},callback:e=>{e&&200==e._code&&this.setState({teamAppList:e.list,total:e.bean&&e.bean.total})}})}),this.getGuideState=(()=>{this.props.dispatch({type:"global/getGuideState",payload:{enterprise_id:this.props.currUser.enterprise_id},callback:e=>{if(e&&200==e._code){var t=e.list,a=7;t.filter((e,t)=>{return e.status||(a=t),!e.status}),this.setState({GuideList:e.list,current:a},()=>{var e=7!==this.state.current&&!B.default.get("newbie_guide");7===this.state.current||B.default.get("newbie_guide")||B.default.setGuide("newbie_guide","true"),this.setState({guidevisible:e})})}}})}),this.getCompanyInfo=(()=>{this.props.dispatch({type:"global/getCompanyInfo",payload:{team_name:O.default.getCurrTeamName(),enterprise_id:this.props.currUser.enterprise_id}})}),this.handleError=(e=>{e&&e.data&&e.data.msg_show&&v.default.warning({message:"\u8bf7\u6c42\u9519\u8bef",description:e.data.msg_show})}),this.handleTimers=((e,t,a)=>{this[e]=setTimeout(()=>{t()},a)}),this.handleClearTimeout=(e=>{e&&clearTimeout(e)}),this.loadOverview=(()=>{var e=this.props.dispatch;this.setState({loadingOverview:!0}),e({type:"index/fetchOverview",payload:{team_name:O.default.getCurrTeamName(),region_name:O.default.getCurrRegionName()},callback:t=>{this.setState({loadingOverview:!1,loadedOverview:!0}),t&&t.bean&&t.bean.region_health&&(e({type:"global/setNouse",payload:{isNouse:!1}}),this.loadApps(),this.getDomain(),this.getDomainName(),this.getTeamAppList(),this.getService(),this.loadEvents(),this.isPublicRegion()&&(this.getCompanyInfo(),this.getRegionResource()))},handleError:t=>{this.setState({loadingOverview:!1,loadedOverview:!0}),t&&10400===t.code&&e({type:"global/setNouse",payload:{isNouse:!0}}),this.handleError(t)}})}),this.loadEvents=(()=>{var e=this.props.dispatch;e({type:"index/fetchEvents",payload:{team_name:O.default.getCurrTeamName(),page:1,page_size:5}})}),this.loadApps=(()=>{var e=this.props,t=e.dispatch,a=e.form,l=e.index,r=l.pagination,n={searchKey:"",service_status:""};a.validateFields((e,t)=>{n=t});var i=(0,_.default)({team_name:O.default.getCurrTeamName(),region_name:O.default.getCurrRegionName(),page:r.currentPage,page_size:r.pageSize,order:(r.order||"").replace("end",""),fields:r.fields},n);t({type:"index/fetchApps",payload:i,callback:e=>{e&&200===e._code&&this.handleTimers("loadAppsTimer",()=>{this.loadApps()},1e4)},handleError:e=>{this.handleError(e),this.handleTimers("loadAppsTimer",()=>{this.loadApps()},2e4)}})}),this.handleOkApplication=(e=>{var t=this.props.dispatch;t({type:"application/addGroup",payload:{team_name:O.default.getCurrTeamName(),group_name:e.group_name,note:e.note},callback:e=>{e&&(v.default.success({message:"\u6dfb\u52a0\u6210\u529f"}),this.handleCancelApplication(),this.getTeamAppList(),t({type:"global/fetchGroups",payload:{team_name:O.default.getCurrTeamName()}}))}})}),this.handleCancelApplication=(()=>[this.setState({addApplication:!1})]),this.handleOkGuidevisible=(()=>{this.setState({guidevisible:!1})}),this.handleCancelGuidevisible=(()=>{this.setState({guidevisible:!1})}),this.state={addApplication:!1,teamAppList:[],query:"",page:1,page_size:10,total:0,domainList:[],domainPage:1,domainPageSize:5,domainTotal:0,serviceList:[],servicePage:1,servicePageSize:5,num:"",visitData:[],current:null,guidevisible:!1,GuideList:[],loadingOverview:!1,loadedOverview:!1}}componentWillMount(){var e=this.props.enterprise;W.default.newbieGuideEnable(e)&&this.getGuideState()}componentDidMount(){this.loadOverview()}componentWillUnmount(){this.handleClearTimeout(this.loadAppsTimer),this.handleClearTimeout(this.loadOverviewTimer),this.handleClearTimeout(this.getDomainTimer),this.handleClearTimeout(this.getDomainNameTimer)}getRegionResource(){this.props.dispatch({type:"global/getRegionSource",payload:{team_name:O.default.getCurrTeamName(),enterprise_id:this.props.currUser.enterprise_id,region:O.default.getCurrRegionName()}})}isPublicRegion(){var e=F.default.hasTeamAndRegion(this.props.currUser,O.default.getCurrTeamName(),O.default.getCurrRegionName());return!!e&&"public"===e.region_scope}renderActivities(){var e=this.props.events||[];return e.length?e.map(e=>{var t=e.UserName,a=e.OptType,l=e.FinalStatus,r=e.Status,n=e.create_time,i=e.Target,s="/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/components/").concat(e.service_alias,"/overview");return I.default.createElement(h.default.Item,{key:e.ID},I.default.createElement(h.default.Item.Meta,{title:I.default.createElement("span",null,I.default.createElement("a",{className:U.default.username},t),I.default.createElement("span",{className:U.default.event}," ",O.default.fetchStateOptTypeText(a)),"\xa0",i&&"service"===i&&I.default.createElement(C.Link,{to:s,className:U.default.event},e.service_name),I.default.createElement("span",{style:{color:O.default.fetchAbnormalcolor(a)}},O.default.fetchOperation(l,r))),description:I.default.createElement("span",{className:U.default.datatime_float,title:e.updatedAt},O.default.fetchdayTime(n))}))}):I.default.createElement("p",{style:{textAlign:"center",color:"ccc",paddingTop:20}},"\u6682\u65e0\u52a8\u6001")}render(){var e=[{title:"\u57df\u540d",dataIndex:"metric",key:"metric",width:"70%",render:(e,t)=>I.default.createElement(g.default,{title:t.metric.host},I.default.createElement("div",{style:{wordBreak:"break-all",wordWrap:"break-word",height:"38px",lineHeight:"17px",overflow:"auto"}},I.default.createElement("a",{href:"http://".concat(t.metric.host),target:"_blank"},t.metric.host)))},{title:"\u8bf7\u6c42\u91cf/\u65f6",dataIndex:"value",key:"value",width:"30%",sorter:(e,t)=>e.range-t.range,render:(e,t)=>I.default.createElement("span",{style:{wordBreak:"break-all",wordWrap:"break-word",marginRight:4,display:"inline-block"}},t.value[1]),align:"right"}],t=[{title:"\u7ec4\u4ef6\u540d\u79f0",dataIndex:"metric",key:"metric",width:"65%",render:(e,t)=>I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/components/").concat(t.metric.service_alias)},I.default.createElement(g.default,{title:t.metric.service_cname},I.default.createElement("a",{style:{display:"inline-block",wordBreak:"break-all",wordWrap:"break-word",height:"38px",lineHeight:"17px",overflow:"auto"}},t.metric.service_cname," ")))},{title:"\u8bf7\u6c42\u91cf/\u65f6",dataIndex:"value",key:"value",width:"35%",sorter:(e,t)=>e.range-t.range,render:(e,t)=>I.default.createElement("span",{style:{display:"inline-block",marginRight:4,wordBreak:"break-all",wordWrap:"break-word",minHeight:"35px"}},t.value[1]),align:"right"}],a=this.props,l=a.index,r=a.currentEnterprise,_=a.currentTeam,v=a.currentRegionName,b=a.currentTeamPermissionsInfo,E=this.state,y=E.teamAppList,w=E.GuideList,T=E.domainList,N=E.serviceList,x=E.loadingOverview,B=E.loadedOverview,W=G.default.queryAppInfo(b,"create"),F=I.default.createElement("div",{className:U.default.extraContent},I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"success"}),I.default.createElement(L.FormattedMessage,{id:"team.appNum"})),I.default.createElement("div",null,I.default.createElement("div",{style:{color:"rgba(0,0,0,.85)"}},l.overviewInfo.team_app_num||0))),I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"processing"}),I.default.createElement(L.FormattedMessage,{id:"team.componentNum"})),I.default.createElement("div",{style:{color:"rgba(0,0,0,.85)"}},l.overviewInfo.team_service_num||0)),I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"error"}),I.default.createElement(L.FormattedMessage,{id:"team.gatewayRuleNum"})),I.default.createElement("div",null,I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/gateway/control"),style:{wordBreak:"break-all",wordWrap:"break-word",color:"#1890ff"}},l.overviewInfo.total_http_domain+l.overviewInfo.total_tcp_domain||0))),I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"warning"}),I.default.createElement(L.FormattedMessage,{id:"team.memoryUsage"})),I.default.createElement("div",null,I.default.createElement(g.default,{style:{color:"rgba(0,0,0,.85)"},title:"".concat(q.default.unit(l.overviewInfo.team_service_memory_count||0,"MB"))},"".concat(q.default.unit(l.overviewInfo.team_service_memory_count||0,"MB"))))),I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"warning"}),I.default.createElement(L.FormattedMessage,{id:"team.diskUsage"})),I.default.createElement("div",null,I.default.createElement(g.default,{style:{color:"rgba(0,0,0,.85)"},title:"".concat(q.default.unit(l.overviewInfo.team_service_total_disk||0,"MB"))},"".concat(q.default.unit(l.overviewInfo.team_service_total_disk||0,"MB"))))),I.default.createElement("div",{className:U.default.statItem},I.default.createElement("p",null,I.default.createElement(f.default,{status:"default"}),I.default.createElement(L.FormattedMessage,{id:"team.appmodeNum"})),I.default.createElement("div",{style:{wordBreak:"break-all",wordWrap:"break-word",color:"rgba(0,0,0,.85)"}},l.overviewInfo.share_app_num||0))),H=[];H=(0,M.createTeam)((0,M.createEnterprise)(H,r),_,v);var J=j.default.getStep(w);return I.default.createElement(I.Fragment,null,x&&I.default.createElement(p.default,{tip:"Loading..."}),!x&&l.overviewInfo.region_health&&I.default.createElement("div",{style:{margin:"0px -24px 0"}},I.default.createElement(m.default,{title:z.default.rainbondTextShow&&I.default.createElement("h1",{style:{color:"#1890FF",textAlign:"center",border:"none",marginBottom:"0px",marginTop:"10px"}},"\u6b22\u8fce\u4f7f\u7528\u4e91\u5e94\u7528\u64cd\u4f5c\u7cfb\u7edf"),visible:this.state.guidevisible,onOk:this.handleOkGuidevisible,onCancel:this.handleCancelGuidevisible,width:1e3,footer:null,className:U.default.modals,maskClosable:!1},I.default.createElement("p",{style:{fontSize:"17px"}},"\u662f\u4ee5\u4f01\u4e1a\u4e91\u539f\u751f\u5e94\u7528\u5f00\u53d1\u3001\u67b6\u6784\u3001\u8fd0\u7ef4\u3001\u5171\u4eab\u3001\u4ea4\u4ed8\u4e3a\u6838\u5fc3\u7684Kubernetes\u591a\u4e91\u8d4b\u80fd\u5e73\u53f0\u3002\u4e3a\u4e86\u4fbf\u4e8e\u4f60\u4f7f\u7528\u548c\u7406\u89e3\u5e73\u53f0\u9879\u76ee\uff0c\u6211\u4eec\u7279\u610f\u4e3a\u4f60\u51c6\u5907\u4e86 \u5e73\u53f0 \u57fa\u7840\u529f\u80fd\u6d41\u7a0b\u7684\u65b0\u624b\u4efb\u52a1"),I.default.createElement("p",null,I.default.createElement("div",{className:U.default.stepsbox},J.map((e,t)=>{var a=e.status;return I.default.createElement("div",{className:a?U.default.stepssuccess:U.default.stepsinfo,key:t},I.default.createElement("div",{className:a?U.default.stepssuccesslux:U.default.stepsinfolux,style:{marginLeft:0==t?"53px":1==t?"80px":2==t?"100px":3==t?"72px":4==t?"82px":5==t?"77px":"53px",width:1==t?"86%":2==t?"60%":3==t?"86%":4==t?"78%":5==t?"77%":"100%",display:6==t?"none":""}}),I.default.createElement("div",{className:a?U.default.stepssuccessbj:U.default.stepsinfobj},I.default.createElement("span",null,a&&I.default.createElement("svg",{viewBox:"64 64 896 896","data-icon":"check",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},I.default.createElement("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})))),I.default.createElement("div",{className:a?U.default.stepssuccesscontent:U.default.stepsinfocontent},I.default.createElement("div",null,e.title)),I.default.createElement("div",null))}))),I.default.createElement("p",{style:{textAlign:"center"}},I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/guide"),style:{wordBreak:"break-all",wordWrap:"break-word",color:"#1890ff"}},I.default.createElement(c.default,{type:"primary"},"\u67e5\u770b\u8be6\u60c5")))),I.default.createElement("div",{className:U.default.contents},I.default.createElement(n.default,null,I.default.createElement(d.default,{xs:14,sm:14,md:14,lg:14,xl:14,style:{paddingRight:"10px"}},F,I.default.createElement(o.default,{style:{marginBottom:10},title:I.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},I.default.createElement("span",null,"\u5e94\u7528"),I.default.createElement(V,{style:{width:"350px"},placeholder:"\u8bf7\u8f93\u5165\u5e94\u7528\u540d\u79f0\u8fdb\u884c\u641c\u7d22",onSearch:this.handleSearchApp}),W&&I.default.createElement("a",{style:{fontSize:"14px",fontWeight:400},onClick:()=>{this.setState({addApplication:!0})}},"\u65b0\u5efa\u5e94\u7528")),bordered:!1,bodyStyle:{padding:0,height:"100%"}},y&&y.length>0&&y.map((e,t)=>{var a=e.backup_record_num,l=e.group_name,r=e.run_service_num,n=e.services_num,i=e.share_record_num,s=(e.group_id,e.update_time);return I.default.createElement("div",{key:t,style:{borderBottom:"1px solid #e8e8e8"}},I.default.createElement("div",{style:{padding:"10px 20px"}},I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/apps/").concat(e.group_id),style:{wordBreak:"break-all",wordWrap:"break-word",color:"rgba(0,0,0,.85)"}},I.default.createElement("a",{style:{fontSize:"16px"}},l)),I.default.createElement("span",{className:U.default.timeShow},s&&(0,k.default)(s).fromNow()),I.default.createElement("div",{className:U.default.teamListStyle},I.default.createElement("div",null,I.default.createElement("span",null,"\u7ec4\u4ef6\uff1a"),I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/apps/").concat(e.group_id),style:{wordBreak:"break-all",wordWrap:"break-word",color:"rgba(0,0,0,.85)"}},I.default.createElement("a",null,r?"".concat(r,"/"):"",n))),I.default.createElement("div",null,I.default.createElement("span",null,"\u5907\u4efd\u8bb0\u5f55\uff1a"),I.default.createElement(C.Link,{to:"/team/".concat(O.default.getCurrTeamName(),"/region/").concat(O.default.getCurrRegionName(),"/apps/").concat(e.group_id,"/backup"),style:{wordBreak:"break-all",wordWrap:"break-word",color:"rgba(0,0,0,.85)"}},I.default.createElement("a",{style:{fontSize:"16px"}},a))),I.default.createElement("div",null,I.default.createElement("span",null,"\u5206\u4eab\u8bb0\u5f55\uff1a"),I.default.createElement("a",{style:{color:"rgba(0, 0, 0, 0.65)"}},i)))))}),y&&y.length>0&&this.state.total>0?I.default.createElement("div",{style:{textAlign:"right",margin:"15px"}},I.default.createElement(u.default,{current:this.state.page,pageSize:this.state.page_size,total:Number(this.state.total),onChange:this.onPageChange})):I.default.createElement(h.default,null))),I.default.createElement(d.default,{xs:10,sm:10,md:10,lg:10,xl:10},I.default.createElement(o.default,{style:{marginBottom:10,border:"none",height:"562px",overflow:"hidden"},title:"\u70ed\u95e8\u8bbf\u95ee\u57df\u540d",bordered:!1,bodyStyle:{padding:0},border:!1},I.default.createElement(D.ChartCard,{style:{marginTop:"-20px",border:"none"}},I.default.createElement(R.default,{subTitle:I.default.createElement("span",null,"\u6574\u4f53\u8bf7\u6c42\u91cf",I.default.createElement(g.default,{title:"\u6574\u4f53\u8bf7\u6c42\u91cf"},I.default.createElement(s.default,{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:(0,S.default)(this.state.num).format("0,0")}),I.default.createElement(D.MiniArea,{line:!0,height:45,data:this.state.visitData}),I.default.createElement(i.default,{rowKey:e=>e.index,size:"small",style:{marginTop:"15px",height:"300px"},columns:e,dataSource:T,pagination:{style:{marginBottom:0},current:this.state.domainPage,pageSize:this.state.domainPageSize,total:this.state.domainTotal,onChange:this.onDomainPageChange}}))),I.default.createElement(o.default,{style:{marginBottom:10,height:468},title:"\u70ed\u95e8\u8bbf\u95ee\u7ec4\u4ef6",bordered:!1,bodyStyle:{padding:0}},I.default.createElement(d.default,{span:24},I.default.createElement(D.ChartCard,{style:{marginTop:"-20px",border:"none"}},I.default.createElement(i.default,{className:U.default.cancelMargin,style:{height:"390px",marginTop:"-20px",overflow:"auto"},rowKey:e=>e.index,size:"small",columns:t,dataSource:N,pagination:!1})))))),this.state.addApplication&&I.default.createElement(A.default,{title:"\u65b0\u5efa\u5e94\u7528",onCancel:this.handleCancelApplication,onOk:this.handleOkApplication}))),B&&l.overviewInfo&&!l.overviewInfo.region_health&&I.default.createElement("div",null,I.default.createElement(P.default,{type:"warning",title:"\u96c6\u7fa4\u7aef\u5931\u53bb\u54cd\u5e94\uff0c\u7a0d\u540e\u91cd\u8bd5",description:"\u82e5\u4e00\u76f4\u65e0\u6cd5\u52a0\u8f7d\uff0c\u8bf7\u8054\u7cfb\u96c6\u7fa4\u7ba1\u7406\u5458\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",actions:[I.default.createElement(c.default,{loading:x,onClick:this.loadOverview,type:"primary",key:"console"},"\u91cd\u65b0\u52a0\u8f7d")]})))}},w=T))||w)||w);t.default=H},LOQS:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ"));a("Pwec");var n=l(a("CtXQ")),i=l(a("Y/ft")),s=l(a("q1tI")),d=l(a("TSYQ")),o=l(a("3DXh")),u=e=>{var t=e.theme,a=e.title,l=e.subTitle,u=e.total,m=e.subTotal,c=e.status,p=e.suffix,f=e.gap,g=(0,i.default)(e,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return s.default.createElement("div",(0,r.default)({className:(0,d.default)(o.default.numberInfo,{[o.default["numberInfo".concat(t)]]:t})},g),a&&s.default.createElement("div",{className:o.default.numberInfoTitle},a),l&&s.default.createElement("div",{className:o.default.numberInfoSubTitle},l),s.default.createElement("div",{className:o.default.numberInfoValue,style:f?{marginTop:f}:null},s.default.createElement("span",null,u,p&&s.default.createElement("em",{className:o.default.suffix},p)),(c||m)&&s.default.createElement("span",{className:o.default.subTotal},m,c&&s.default.createElement(n.default,{type:"caret-".concat(c)}))))};t.default=u},bJ8p:function(e,t,a){e.exports={icon:"icon___HM6VW",iconm:"iconm___1XPzY",activitiesList:"activitiesList___1geqF",username:"username___2QS9q",event:"event___15oix",timeShow:"timeShow___gDgZS",contents:"contents___3phAE",cancelMargin:"cancelMargin___3ndy-",pageHeaderContent:"pageHeaderContent___yiS-3",avatar:"avatar___30h6e",content:"content___dRRMF",contentTitle:"contentTitle___14nMn",teamListStyle:"teamListStyle___2UwRf",extraContent:"extraContent___3DBoG",statItem:"statItem___2reAM",members:"members___WB65e",member:"member___2TDJq",modals:"modals___zkAg2",projectList:"projectList___1gp9t",cardTitle:"cardTitle___mqcWV",projectGrid:"projectGrid___3Z2FI",projectItemContent:"projectItemContent___1c9t4",datetime:"datetime___3dc6I",datatime_float:"datatime_float___2LPjl",activeCard:"activeCard___3vG-M",tableList:"tableList___11Iut",tableListOperator:"tableListOperator___3yL30",tableListForm:"tableListForm___22llv",submitButtons:"submitButtons___3ZSMq",stepsbox:"stepsbox___2OnYp",stepssuccess:"stepssuccess___2amCq",stepssuccessbj:"stepssuccessbj___1EQPl",stepssuccesslux:"stepssuccesslux___2xr9T",stepssuccesscontent:"stepssuccesscontent___23VdZ",stepsinfo:"stepsinfo___1sXu9",stepsinfobj:"stepsinfobj___x_La_",stepsinfolux:"stepsinfolux___1zv0B",stepsinfocontent:"stepsinfocontent___2VJPs",connect:"connect___2JCXB"}}}]);