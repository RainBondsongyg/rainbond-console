(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"0j6k":function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var s=l(a("2/Rp"));a("Mwp2");var d=l(a("VXEj"));a("T2oS");var i=l(a("W9HT"));a("14J3");var n=l(a("BMrR"));a("jCWc");var u=l(a("kPKH"));a("5Dmo");var o=l(a("3S7+"));a("Pwec");var p=l(a("CtXQ"));a("sRBo");var c=l(a("kaz8")),f=l(a("jehZ"));a("y8nQ");var m=l(a("Vl3Y"));a("OaEy");var g,h,_,v,E=l(a("2fM7")),y=r(a("q1tI")),b=a("MuoO"),k=a("7DNP"),x=l(a("QDog")),S=l(a("VixT")),C=l(a("Utb7")),I=E.default.Option,z=(g=m.default.create(),h=(0,b.connect)(),g(_=h((v=class extends y.PureComponent{constructor(e){super(e),this.generateUpdateOrder=(()=>{var e=this.props,t=e.group_id,a=e.data,l=e.activeKey,r=e.dispatch,s=this.state.infoObj,d={team_name:x.default.getCurrTeamName(),group_id:t,group_key:s.group_key};s&&("market"===s.source||s.is_from_cloud)&&(d.marketName=s.market_name,d.isFromCloud=!0),r({type:"global/CloudAppUpdateOrder",payload:d,callback:e=>{e&&200==e._code&&(2!=l?this.setState({infoObj:e.bean?e.bean:a}):this.setState({textState:a.status}),2==l&&4==s.status?this.setState({record_id:s.ID},()=>{this.getUpgradeRecordsInfo("Rollback")}):2==l&&2==s.status?this.setState({record_id:s.ID},()=>{this.getUpgradeRecordsInfo()}):2==l&&this.setState({text:S.default.getStatusCNS(s.status)}),s.not_upgrade_record_id&&s.not_upgrade_record_status&&2==s.not_upgrade_record_status&&this.setState({record_id:s.not_upgrade_record_id},()=>{this.getUpgradeRecordsInfo()}))}})}),this.getUpdatedVersion=(e=>{var t=this.props.group_id,a=this.state.infoObj;this.props.dispatch({type:"global/CloudAppUpdatedVersion",payload:{team_name:x.default.getCurrTeamName(),group_id:t,group_key:a.group_key},callback:t=>{t&&200==t._code&&this.setState({upgradeVersions:t.list},()=>{if(e||2!=this.props.activeKey)this.getUpdatedInfo(t.list.length>0&&t.list[0]);else{var l=a.service_record,r=this.state.indexs;if(l&&l.length>0){for(var s=[],d=0;d<l.length;d++)s.push(l[d].service_id);var i=l[r>l.length-1?0:r].service_id,n=l[r];this.setState({upgradeInfo:l,type:i,upgrade_info:n,service_id:s,conshow:null})}}})}})}),this.getUpdatedInfo=(e=>{var t=this.props.form.getFieldValue("upgradeVersions"),a=this.props,l=a.group_id,r=a.dispatch,s=this.state.infoObj,d={team_name:x.default.getCurrTeamName(),group_id:l,group_key:s.group_key,version:e||t};s&&s.is_from_cloud&&(d.marketName=s.market_name),r({type:"global/CloudAppUpdatedInfo",payload:d,callback:e=>{if(e&&200==e._code){var t=this.state.indexs,a=e.list;if(a&&a.length>0){for(var l=[],r=0;r<a.length;r++)a[r].upgrade_info&&"{}"!=JSON.stringify(a[r].upgrade_info)&&l.push(a[r].service.service_id);var s=a[t>a.length-1?0:t].service.service_id,d=a[t];this.setState({upgradeInfo:a,type:s,upgrade_info:d,conshow:null,service_id:l})}}}})}),this.handleChangeVersions=(e=>{this.props.form.setFieldsValue({upgradeVersions:e}),this.getUpdatedInfo(e)}),this.onChange=(()=>{}),this.handleType=((e,t)=>{if(this.state.type!==e.service_id){var a=this.state.upgradeInfo;this.setState({type:e.service_id,indexs:t,upgrade_info:a[t]})}}),this.handleSubmit=(()=>{var e=this.props.form,t=this.state.upgradeLoading;e.validateFields((e,a)=>{e||t||this.setState({upgradeLoading:!0},()=>{this.createUpgradeTasks(a)})})}),this.createUpgradeTasks=(e=>{for(var t=this.props,a=t.group_id,l=t.form,r=t.dispatch,s=this.state,d=s.infoObj,i=s.upgradeInfo,n=l.getFieldValue("upgradeVersions"),u=[],o=[],p=0;p<i.length;p++)for(var c=0;c<e.services.length;c++)i[p].service.service_id==e.services[c]&&(u.push(i[p]),o.push(p));r({type:"global/CloudAppUpdatedTasks",payload:{team_name:x.default.getCurrTeamName(),group_id:a,group_key:d.group_key,version:n,services:u,upgrade_record_id:d.ID},callback:e=>{e&&200==e._code&&this.setState({record_id:e.bean.ID},()=>{this.getUpgradeRecordsInfo()})}})}),this.getUpgradeRecordsInfo=(e=>{var t=this.props,a=t.group_id,l=t.dispatch,r=this.state,s=r.record_id,d=r.upgradeText;l({type:"global/CloudAppUpdateRecordsInfo",payload:{team_name:x.default.getCurrTeamName(),group_id:a,record_id:s},callback:t=>{if(t&&200==t._code){var a=t.bean;this.setState({upgradeRecords:a.service_record,textState:a.status,text:S.default.getStatusCNS(a.status),upgradeText:e?d:1==a.status?"\u672a\u5347\u7ea7":2==a.status?"\u5347\u7ea7\u4e2d":3==a.status?"\u5347\u7ea7\u5b8c\u6210":6==a.status?"\u90e8\u5206\u5347\u7ea7":8==a.status?"\u5347\u7ea7\u5931\u8d25":"\u5347\u7ea7",upgradeLoading:!1,rollbackLoading:!1},()=>{3!=a.status&&5!=a.status&&6!=a.status&&7!=a.status&&8!=a.status&&9!=a.status&&setTimeout(()=>{this.getUpgradeRecordsInfo(e)},3e3)})}}})}),this.getData=(()=>{if(this.state.upgrade_info&&"{}"!=JSON.stringify(this.state.upgrade_info)){var e=this.state.upgrade_info,t=e.upgrade_info,a=e.update,l=e.service;return l&&"add"==l.type?[{title:"",description:y.default.createElement("div",{style:{textAlign:"center",lineHeight:"300px",fontSize:"25px"}},"\u65b0\u589e\u7ec4\u4ef6")}]:t&&"{}"!=JSON.stringify(t)?this.setData(t):a&&"{}"!=JSON.stringify(a)?this.setData(a):[{title:"",description:y.default.createElement("div",{style:{textAlign:"center",lineHeight:"300px",fontSize:"25px"}},"\u7ec4\u4ef6\u65e0\u53d8\u66f4\uff0c\u65e0\u9700\u5347\u7ea7")}]}return[{title:"",description:y.default.createElement("div",{style:{textAlign:"center",lineHeight:"300px",fontSize:"25px"}},"\u7ec4\u4ef6\u65e0\u53d8\u66f4\uff0c\u65e0\u9700\u5347\u7ea7")}]}),this.setData=(e=>{e.deploy_version;var t=e.image,a=e.ports,l=e.volumes,r=e.dep_services,s=e.dep_volumes,d=e.plugins,i=e.envs,n={title:"\u955c\u50cf",description:y.default.createElement("div",null,t&&t.is_change?y.default.createElement("div",{className:C.default.textzt},"\u4ece ",y.default.createElement("span",null,t.old)," \u53d8\u66f4\u4e3a ",y.default.createElement("span",null,t.new)):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},u={title:"\u73af\u5883\u53d8\u91cf",description:y.default.createElement("div",null,i&&i.add&&i.add.length>0?y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u53d8\u91cf\uff1a",i.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.attr_name)})):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},o={title:"\u7aef\u53e3",description:y.default.createElement("div",null,a&&a.add&&a.add.length>0?y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u7aef\u53e3\uff1a",a.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.container_port)})):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},p={title:"\u5b58\u50a8",description:y.default.createElement("div",null,l?y.default.createElement("div",null,l.add&&l.add.length>0&&y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u5b58\u50a8\u6302\u8f7d\uff1a",l.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.volume_name)})),l.upd&&l.upd.length>0&&y.default.createElement("div",{className:C.default.textzt},"\u66f4\u65b0\u5b58\u50a8\u6302\u8f7d\uff1a",l.upd.map((e,t)=>{return y.default.createElement("span",{key:t},e.volume_name)}))):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},c={title:"\u4f9d\u8d56\u7ec4\u4ef6",description:y.default.createElement("div",null,r?y.default.createElement("div",null,r.add&&r.add.length>0&&y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u5bf9",r.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.service_cname)}),"\u7ec4\u4ef6\u7684\u4f9d\u8d56"),r.del&&r.del.length>0&&y.default.createElement("div",{className:C.default.textzt},"\u79fb\u9664\u5bf9",r.del.map((e,t)=>{return y.default.createElement("span",{key:t},e.service_cname)}),"\u7ec4\u4ef6\u7684\u4f9d\u8d56")):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},f={title:"\u4f9d\u8d56\u7684\u5b58\u50a8",description:y.default.createElement("div",null,s&&s.add&&s.add.length>0?y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u5b58\u50a8\u6302\u8f7d\uff1a",s.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.mnt_name)})):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},m={title:"\u63d2\u4ef6",description:y.default.createElement("div",null,d&&d.add&&d.add.length>0?y.default.createElement("div",{className:C.default.textzt},"\u65b0\u589e\u63d2\u4ef6\uff1a",d.add.map((e,t)=>{return y.default.createElement("span",{key:t},e.plugin_alias)})):y.default.createElement("div",null,"\u6682\u65e0\u53d8\u5316"))},g=[p,f,u,n,c,o,m];return g}),this.getUpgradeRollback=(()=>{var e=this.props,t=e.group_id,a=e.form,l=e.dispatch,r=this.state.rollbackLoading;a.validateFields((e,a)=>{e||r||this.setState({rollbackLoading:!0},()=>{l({type:"global/CloudAppUpdateRollback",payload:{team_name:x.default.getCurrTeamName(),group_id:t,record_id:this.state.infoObj.ID,service_ids:a.services},callback:e=>{e&&200==e._code&&this.setState({record_id:e.bean.ID},()=>{this.getUpgradeRecordsInfo("Rollback")})}})})})}),this.state={type:"",indexs:0,infoObj:e.data?e.data:"",upgradeVersions:[],upgradeInfo:[],upgrade_info:"",upgradeRecords:[],text:2==this.props.activeKey?"\u56de\u6eda":"\u5347\u7ea7",upgradeText:"\u5347\u7ea7",textState:1,service_id:[],upgradeLoading:!1,rollbackLoading:!1,conshow:!0}}componentDidMount(){this.generateUpdateOrder(),this.getUpdatedVersion()}shouldComponentUpdate(){return!0}render(){var e=this.props,t=e.dispatch,a=e.activeKey,l=e.group_id,r=e.form,g=r.getFieldDecorator,h=this.state,_=h.type,v=h.infoObj,b=h.upgradeVersions,S=h.upgradeInfo,z=h.upgradeRecords,N=h.text,w=h.upgradeText,D=h.textState,T=h.service_id,R=h.conshow,A=h.upgradeLoading,U=h.rollbackLoading,L="/team/".concat(x.default.getCurrTeamName(),"/region/").concat(x.default.getCurrRegionName(),"/apps/").concat(l),M={labelCol:{xs:{span:6},sm:{span:6}},wrapperCol:{xs:{span:16},sm:{span:16}}},O=this.getData(),V=A||2==D,j=!(2!=D&&4!=D)||U;return y.default.createElement("div",{style:{padding:"10px",background:"#fff"}},y.default.createElement(n.default,{gutter:24,style:{margin:"0px"}},y.default.createElement(u.default,{xs:{span:6,offset:0},lg:{span:6,offset:0},style:{background:"#fff",borderRight:"1px solid #E8E8E8"},className:C.default.zslbor},y.default.createElement(m.default,{onSubmit:this.handleSubmit},y.default.createElement("div",{className:C.default.zsldis},y.default.createElement(m.default.Item,(0,f.default)({},M,{label:"\u5347\u7ea7\u5230",style:{width:"100%"}}),g("upgradeVersions",{initialValue:v&&v.version?v.version:b&&b.length>0&&b[0],rules:[{required:!1,message:"\u8bf7\u9009\u62e9"}]})(y.default.createElement(E.default,{disabled:1!=D,size:"small",style:{width:80},onChange:this.handleChangeVersions},b&&b.length>0&&b.map((e,t)=>{return y.default.createElement(I,{value:e,key:t},e)}))),y.default.createElement("span",null,"\xa0\xa0\u7248\u672c"))),y.default.createElement("div",{className:C.default.zslcheck},y.default.createElement(m.default.Item,{label:"",style:{width:"100%"}},g("services",{initialValue:T,force:!0,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u9700\u8981\u5347\u7ea7\u7684\u4e91\u5e02\u5e94\u7528"}]})(y.default.createElement(c.default.Group,{onChange:this.onChange,className:C.default.zslGroup},y.default.createElement(n.default,{gutter:24,style:{height:"400px",overflow:"auto"}},S&&S.length>0&&S.map((e,t)=>{var a=e.service,l=e.upgrade_info,r=e.update,s=z&&z.length>0&&z[t]&&z[t].status;return y.default.createElement(u.default,{span:24,className:"".concat(C.default.zslMt," ").concat(_===(a?a.service_id:e.service_id)?C.default.active:""),onClick:()=>{this.handleType(a||e,t)}},y.default.createElement("div",{style:{width:"100%"}},y.default.createElement(c.default,{disabled:!("{}"!=JSON.stringify(l||r)&&(l?null!=l:null!=r)),value:a?a.service_id:e.service_id,style:{width:"30px"}}),a?a.service_cname:e.service_cname),y.default.createElement("div",null,z&&z.length>0&&(null!=l||null!=r)&&"{}"!=JSON.stringify(l||r)?z[t]&&y.default.createElement("div",null,1==s||2==s||4==s?y.default.createElement(p.default,{type:"sync",style:{color:"#1890ff"},spin:!0}):3==s||5==s&&s<=7?y.default.createElement(o.default,{title:"\u6210\u529f"},y.default.createElement(p.default,{type:"check",style:{color:"#239B24"}})):8==s?y.default.createElement(o.default,{title:"\u5931\u8d25"},y.default.createElement(p.default,{type:"close",style:{color:"red"}})):y.default.createElement(o.default,{title:"\u6210\u529f"},y.default.createElement(p.default,{type:"check",style:{color:"#239B24"}}))):a&&a.type&&y.default.createElement("div",null,"upgrade"!=a.type||null==l&&null==r||"{}"==JSON.stringify(l||r)?null==l&&null==r||"{}"==JSON.stringify(l||r)?"":y.default.createElement(o.default,{title:"\u65b0\u589e\u7ec4\u4ef6"},y.default.createElement(p.default,{type:"plus",style:{color:"#239B24"}})):y.default.createElement(o.default,{title:"\u53ef\u5347\u7ea7"},y.default.createElement(p.default,{type:"up",style:{color:"#239B24"}})))))})))))))),y.default.createElement(u.default,{xs:{span:18,offset:0},lg:{span:18,offset:0},style:{background:"#fff"}},y.default.createElement("div",{className:C.default.zslbor},y.default.createElement("div",{className:C.default.zslcen},"\u7ec4\u4ef6\u5c5e\u6027\u53d8\u66f4\u8be6\u60c5"),y.default.createElement(n.default,{gutter:24,style:{margin:"10px 20px 20px",height:"400px",overflow:"auto"}},R?y.default.createElement(i.default,{size:"large"}):y.default.createElement(d.default,{itemLayout:"horizontal",dataSource:O,renderItem:(e,t)=>y.default.createElement(d.default.Item,{key:t},y.default.createElement(d.default.Item.Meta,{title:e.title,description:e.description}))}))))),y.default.createElement(n.default,{gutter:24,className:C.default.customBtn},y.default.createElement(s.default,{style:{marginRight:"5px"},onClick:()=>{this.props.setInfoShow()}},"\u8fd4\u56de"),1==a&&y.default.createElement(s.default,{type:"primary",onClick:()=>{1!=D&&2!=D&&4!=D?t(k.routerRedux.push(L)):this.handleSubmit()},disabled:V,loading:V,style:{marginRight:"5px"}},w),(1!=D&&2!=D||2==a)&&y.default.createElement(s.default,{type:"primary",onClick:()=>{3!=D&&4!=D&&8!=D&&(1==a&&6!=D||2==a&&1!=D&&2!=D)?t(k.routerRedux.push(L)):this.getUpgradeRollback()},style:{marginRight:"5px"},disabled:j,loading:j},3==D||6==D||8==D?"\u56de\u6eda":N)))}},_=v))||_)||_);t.default=z},T40H:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var s=l(a("wCAj"));a("Mwp2");var d=l(a("VXEj"));a("Telt");var i=l(a("Tckk"));a("+BJd");var n=l(a("mr32"));a("Znn+");var u,o,p,c=l(a("ZTPi")),f=r(a("q1tI")),m=a("MuoO"),g=a("7DNP"),h=l(a("XZXw")),_=l(a("0j6k")),v=l(a("VixT")),E=l(a("iPMB")),y=l(a("ZgmS")),b=l(a("QDog")),k=a("vSx2"),x=l(a("hMqj")),S=l(a("Utb7")),C=c.default.TabPane,I=(u=(0,m.connect)(e=>{var t=e.user,a=e.global,l=e.application,r=e.teamControl,s=e.enterprise;return{groupDetail:l.groupDetail||{},currUser:t.pageUser,groups:a.groups||[],currentTeam:r.currentTeam,currentRegionName:r.currentRegionName,currentEnterprise:s.currentEnterprise,currentTeamPermissionsInfo:r.currentTeamPermissionsInfo}}),u((p=class extends f.PureComponent{constructor(e){super(e),this.getApplication=(()=>{this.props.dispatch({type:"global/application",payload:{team_name:b.default.getCurrTeamName(),group_id:this.getGroupId()},callback:e=>{e&&200==e._code&&this.setState({list:e.list})}})}),this.getGroupId=(()=>{var e=this.props.match.params;return e.appID}),this.getUpgradeRecordsList=(()=>{var e=this.state,t=e.page,a=e.pageSize;this.props.dispatch({type:"global/CloudAppUpdateRecordsList",payload:{team_name:b.default.getCurrTeamName(),group_id:this.getGroupId(),page:t,pageSize:a,status__gt:1},callback:e=>{e&&200==e._code&&e.list&&e.list.length>0&&this.setState({dataList:e.list})}})}),this.fetchAppDetail=(()=>{var e=this.props.dispatch,t=this.props.match.params,a=t.teamName,l=t.regionName,r=t.appID;this.setState({loadingDetail:!0}),e({type:"application/fetchGroupDetail",payload:{team_name:a,region_name:l,group_id:r},callback:e=>{e&&200===e._code&&this.setState({appDetail:e.bean,loadingDetail:!1})},handleError:t=>{t&&404===t.code&&e(g.routerRedux.push("/team/".concat(b.default.getCurrTeamName(),"/region/").concat(b.default.getCurrRegionName(),"/apps")))}})}),this.showMarketAppDetail=(e=>{this.setState({showApp:e,showMarketAppDetail:!0})}),this.hideMarketAppDetail=(()=>{this.setState({showApp:{},showMarketAppDetail:!1})}),this.callback=(e=>{this.setState({activeKey:e},()=>{"2"==e?this.getUpgradeRecordsList():this.getApplication()})}),this.handleTableChange=((e,t)=>{this.setState({page:e,pageSize:t},()=>{this.getUpgradeRecordsList()})}),this.state={loading:!1,showApp:{},showMarketAppDetail:!1,infoShow:!1,infoData:null,list:[],activeKey:"1",page:1,pageSize:5,total:0,dataList:[],appDetail:{}}}componentWillMount(){var e=this.props,t=e.currentTeamPermissionsInfo,a=e.dispatch,l=x.default.queryAppInfo(t,"upgrade");l||b.default.withoutPermission(a)}componentDidMount(){this.fetchAppDetail(),this.getApplication()}render(){var e=this.props,t=e.currentEnterprise,l=e.currentTeam,r=e.currentRegionName,u=this.state,o=u.loading,p=u.list,m=u.showMarketAppDetail,g=u.showApp,b=u.infoShow,x=u.infoData,I=u.activeKey,z=u.page,N=u.total,w=u.pageSize,D=u.dataList,T=u.appDetail,R=u.loadingDetail,A={onChange:this.handleTableChange,pageSize:w,total:N,page:z},U=e=>{var t=e.data,a=t.upgrade_versions,l=t.current_version,r=t.min_memory;return f.default.createElement("div",{className:S.default.listContent},f.default.createElement("div",{className:S.default.listContentItem},f.default.createElement("span",null,"\u5f53\u524d\u7248\u672c"),f.default.createElement("p",null,f.default.createElement(n.default,{style:{height:"17px",lineHeight:"16px",marginBottom:"3px"},color:"green",size:"small"}," ",l))),f.default.createElement("div",{className:S.default.listContentItem},f.default.createElement("span",null,"\u53ef\u5347\u7ea7\u7248\u672c"),f.default.createElement("p",null,a&&a.length>0?a.map((e,t)=>{return f.default.createElement(n.default,{style:{height:"17px",lineHeight:"16px",marginBottom:"3px"},color:"green",size:"small",key:t}," ",e)}):"\u6682\u65e0\u5347\u7ea7")),f.default.createElement("div",{className:S.default.listContentItem},f.default.createElement("span",null,"\u5185\u5b58"),f.default.createElement("p",null,y.default.unit(r||128,"MB"))))},L=[{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time",key:"1",width:"20%",render:e=>f.default.createElement("span",null,e)},{title:"\u540d\u5b57",dataIndex:"group_name",key:"2",width:"20%",render:e=>f.default.createElement("span",null,e)},{title:"\u7248\u672c",dataIndex:"version",key:"3",width:"30%",render:(e,t)=>f.default.createElement("span",null,t.old_version&&t.version?f.default.createElement("span",null,f.default.createElement("a",{href:"javascript:;"},t.old_version),"\u5347\u7ea7\u5230",f.default.createElement("a",{href:"javascript:;"},t.version)):"-")},{title:"\u72b6\u6001",dataIndex:"status",key:"4",width:"15%",render:e=>f.default.createElement("span",null,v.default.getStatusCN(e))},{title:"\u7ec4\u4ef6\u8be6\u60c5",dataIndex:"tenant_id",key:"5",width:"15%",render:(e,t)=>f.default.createElement("a",{onClick:e=>{e.preventDefault(),1!=t.status&&this.setState({infoData:t,infoShow:!0})},style:{color:1==t.status?"#000":"#1890ff"},href:"javascript:;"},1==t.status?"-":"\u8be6\u60c5")}],M=[];return M=(0,k.createApp)((0,k.createTeam)((0,k.createEnterprise)(M,t),l,r),l,r,{appName:T.group_name,appID:T.group_id}),f.default.createElement(h.default,{breadcrumbList:M,loading:R,title:"\u5347\u7ea7\u7ba1\u7406",content:"\u5f53\u524d\u5e94\u7528\u5185\u5177\u6709\u4ece\u5e94\u7528\u5e02\u573a\u6216\u5e94\u7528\u5546\u5e97\u5b89\u88c5\u800c\u6765\u7684\u7ec4\u4ef6\u65f6\uff0c\u5347\u7ea7\u7ba1\u7406\u529f\u80fd\u53ef\u7528\u3002\u82e5\u5b89\u88c5\u6e90\u7684\u5e94\u7528\u7248\u672c\u6709\u53d8\u66f4\u5219\u53ef\u4ee5\u8fdb\u884c\u5347\u7ea7\u64cd\u4f5c",extraContent:null},!b&&f.default.createElement(c.default,{defaultActiveKey:I,onChange:this.callback,className:S.default.tabss},f.default.createElement(C,{tab:"\u4e91\u5e02\u5e94\u7528\u5217\u8868",key:"1"},f.default.createElement("div",{className:S.default.cardList},f.default.createElement(d.default,{rowKey:"id",size:"large",loading:o,dataSource:[...p],renderItem:e=>f.default.createElement(d.default.Item,{actions:[f.default.createElement("a",{onClick:t=>{t.preventDefault(),e.can_upgrade&&this.setState({infoData:e},()=>{this.setState({infoShow:!!e.not_upgrade_record_id||!!e.can_upgrade})})},style:{display:"block",marginTop:"15px",color:e.can_upgrade?"#1890ff":"#bfbfbf"}},1!=e.not_upgrade_record_status?v.default.getStatusCN(e.not_upgrade_record_status):e.can_upgrade?"\u5347\u7ea7":"\u65e0\u53ef\u5347\u7ea7\u7684\u53d8\u66f4")]},f.default.createElement(d.default.Item.Meta,{avatar:f.default.createElement(i.default,{src:e.pic||a("Vkwn"),shape:"square",size:"large"}),title:f.default.createElement("a",{onClick:()=>{this.showMarketAppDetail(e)}},e.group_name),description:e.describe}),f.default.createElement(U,{data:e}))}))),f.default.createElement(C,{tab:"\u4e91\u5e02\u5e94\u7528\u5347\u7ea7\u8bb0\u5f55",key:"2"},f.default.createElement(s.default,{columns:L,dataSource:D,pagination:A}))),m&&f.default.createElement(E.default,{onOk:this.hideMarketAppDetail,onCancel:this.hideMarketAppDetail,app:g}),b&&f.default.createElement(_.default,{data:x,activeKey:this.state.activeKey,group_id:this.getGroupId(),setInfoShow:()=>{this.setState({infoShow:!1},()=>{"2"==this.state.activeKey?this.getUpgradeRecordsList():this.getApplication()})}}))}},o=p))||o);t.default=I},Utb7:function(e,t,a){e.exports={icon:"icon___2AsL9",iconm:"iconm___qqaow",customBtn:"customBtn___SyQT6",cardList:"cardList___Yf-MH",card:"card___3ovxG",item:"item___1Ils1",tabss:"tabss___uEiMM",textzt:"textzt___3pFoJ",zsldis:"zsldis___1GahJ",zslbor:"zslbor___2ZXVM",zsllbor:"zsllbor___3pSS2",extraImg:"extraImg___2CzFB",newButton:"newButton___2YSwX",cardAvatar:"cardAvatar___1xUfe",cardDescription:"cardDescription___2vI9s",pageHeaderContent:"pageHeaderContent___1B8bR",contentLink:"contentLink___1LQb0",zslcheck:"zslcheck___115pt",zslIcon:"zslIcon___3tP6k",zslGroup:"zslGroup___ahs1r",zslMt:"zslMt___3-U0F",active:"active___17Zw6",zslcen:"zslcen___2982Y",zslborl:"zslborl___XdlyT",zslborr:"zslborr___10Zhw",zslh:"zslh___3CELq",listContent:"listContent___3FKvX",listContentItem:"listContentItem___3GH5D",standardList:"standardList___lVj3g",headerInfo:"headerInfo___2zfaG",extraContentSearch:"extraContentSearch___bx9rK",listCard:"listCard___IhqPy",standardListForm:"standardListForm___2itqX",formResult:"formResult___1LmUn"}},VixT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={1:"\u672a\u5347\u7ea7",2:"\u5347\u7ea7\u4e2d",3:"\u5df2\u5347\u7ea7",4:"\u56de\u6eda\u4e2d",5:"\u5df2\u56de\u6eda",6:"\u90e8\u5206\u5347\u7ea7",7:"\u90e8\u5206\u56de\u6eda",8:"\u5347\u7ea7\u5931\u8d25",9:"\u56de\u6eda\u5931\u8d25"},r={1:"\u672a\u5347\u7ea7",2:"\u5347\u7ea7\u4e2d",3:"\u5347\u7ea7\u5b8c\u6210",4:"\u56de\u6eda\u4e2d",5:"\u56de\u6eda\u5b8c\u6210",6:"\u90e8\u5206\u5347\u7ea7",7:"\u90e8\u5206\u56de\u6eda",8:"\u5347\u7ea7\u5931\u8d25",9:"\u56de\u6eda\u5931\u8d25"},s={getStatusCN:e=>{return l[e]||"-"},getStatusCNS:e=>{return r[e]||"-"}},d=s;t.default=d}}]);