(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{ESNr:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var i=l(a("kLXV")),s=l(a("jehZ"));a("fOrg");var r=l(a("+KLJ"));a("/xke");var d=l(a("TeRw")),o=l(a("p0pE"));a("5NDa");var u=l(a("5rEg"));a("y8nQ");var c,m,f,h=l(a("Vl3Y")),p=n(a("q1tI")),g=a("MuoO"),E=l(a("e6Ls")),y=h.default.Item,w=u.default.TextArea,b=(c=(0,g.connect)(),c((f=class extends p.PureComponent{constructor(e){super(e),this.handleSubmit=(()=>{var e=this.props.form,t=e.validateFields;t((e,t)=>{e||this.upClusters(t)})}),this.upClusters=(e=>{var t=this.props,a=t.dispatch,l=t.eid,n=t.regionInfo,i=t.onOk;a({type:"region/upEnterpriseCluster",payload:(0,o.default)({region_id:n&&n.region_id},e,{enterprise_id:l}),callback:e=>{e&&200===e._code&&(e.bean&&"failure"===e.bean.health_status?this.setState({healthStatus:!1}):(d.default.success({message:"\u7f16\u8f91\u6210\u529f"}),i&&i()))}})}),this.state={healthStatus:!0}}render(){var e=this.props,t=e.form,a=e.onCancel,l=e.title,n=e.regionInfo,d=this.state.healthStatus,o=t.getFieldDecorator,c={labelCol:{xs:{span:24},sm:{span:9}},wrapperCol:{xs:{span:24},sm:{span:13}}},m=/(http|ws|https|wss):\/\/[\w\-_]+([\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/;return p.default.createElement(i.default,{visible:!0,title:l||"\u96c6\u7fa4",className:E.default.TelescopicModal,onOk:this.handleSubmit,width:1e3,onCancel:a},!d&&p.default.createElement(r.default,{style:{textAlign:"center",marginBottom:"8px"},message:"\u96c6\u7fa4\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u786e\u8ba4\u914d\u7f6e\u662f\u5426\u6b63\u786e",type:"error"}),p.default.createElement(h.default,{onSubmit:this.handleSubmit},p.default.createElement("div",{style:{display:"flex"}},p.default.createElement(y,(0,s.default)({},c,{label:"\u96c6\u7fa4ID",style:{width:"50%"}}),o("region_name",{initialValue:n?n.region_name:"",rules:[{required:!0,message:"\u96c6\u7fa4ID\u4e0d\u53ef\u4fee\u6539"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u96c6\u7fa4ID",disabled:void 0!==n}))),p.default.createElement(y,(0,s.default)({},c,{label:"\u96c6\u7fa4\u540d\u79f0",style:{width:"50%"}}),o("region_alias",{initialValue:n?n.region_alias:"",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u96c6\u7fa4\u540d\u79f0!"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u96c6\u7fa4\u540d\u79f0"})))),p.default.createElement("div",{style:{display:"flex"}},p.default.createElement(y,(0,s.default)({label:"API\u5730\u5740"},c,{style:{width:"50%"}}),o("url",{initialValue:n.url,rules:[{required:!0,message:"API\u901a\u4fe1\u5730\u5740\u662f\u5fc5\u586b\u9879"},{pattern:m,message:"\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165API\u901a\u4fe1\u5730\u5740"}))),p.default.createElement(y,(0,s.default)({label:"WebSocket\u901a\u4fe1\u5730\u5740"},c,{style:{width:"50%"}}),o("wsurl",{initialValue:n.wsurl,rules:[{required:!0,message:"WebSocket\u901a\u4fe1\u5730\u5740\u662f\u5fc5\u586b\u9879"},{pattern:m,message:"\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165WebSocket\u901a\u4fe1\u5730\u5740"})))),p.default.createElement("div",{style:{display:"flex"}},p.default.createElement(y,(0,s.default)({label:"HTTP\u5e94\u7528\u9ed8\u8ba4\u57df\u540d\u540e\u7f00"},c,{style:{width:"50%"}}),o("httpdomain",{initialValue:n.httpdomain,rules:[{required:!0,message:"HTTP\u5e94\u7528\u9ed8\u8ba4\u57df\u540d\u540e\u7f00\u662f\u5fc5\u586b\u9879"},{pattern:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,message:"\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165HTTP\u5e94\u7528\u9ed8\u8ba4\u57df\u540d\u540e\u7f00"}))),p.default.createElement(y,(0,s.default)({label:"TCP\u5e94\u7528\u9ed8\u8ba4\u8bbf\u95eeIP"},c,{style:{width:"50%"}}),o("tcpdomain",{initialValue:n.tcpdomain,rules:[{required:!0,message:"TCP\u5e94\u7528\u9ed8\u8ba4\u8bbf\u95eeIP\u662f\u5fc5\u586b\u9879"},{pattern:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,message:"\u683c\u5f0f\u4e0d\u6b63\u786e"}]})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165TCP\u5e94\u7528\u9ed8\u8ba4\u8bbf\u95eeIP"})))),p.default.createElement("div",{style:{display:"flex"}},p.default.createElement(y,(0,s.default)({label:"API-CA\u8bc1\u4e66"},c,{style:{width:"50%"}}),o("ssl_ca_cert",{initialValue:n.ssl_ca_cert,rules:[{required:!0,message:"API-CA\u8bc1\u4e66"}]})(p.default.createElement(w,{autosize:{minRows:3,maxRows:6},placeholder:"API-CA\u8bc1\u4e66\u5185\u5bb9"}))),p.default.createElement(y,(0,s.default)({label:"API-Client\u8bc1\u4e66"},c,{style:{width:"50%"}}),o("cert_file",{initialValue:n.cert_file,rules:[{required:!0,message:"API-Client\u8bc1\u4e66\u5fc5\u586b"}]})(p.default.createElement(w,{autosize:{minRows:3,maxRows:6},placeholder:"API-Client\u8bc1\u4e66\u5185\u5bb9"})))),p.default.createElement("div",{style:{display:"flex"}},p.default.createElement(y,(0,s.default)({label:"API-Client\u8bc1\u4e66\u5bc6\u94a5"},c,{style:{width:"50%"}}),o("key_file",{initialValue:n.key_file,rules:[{required:!0,message:"API-Client\u8bc1\u4e66\u5bc6\u94a5\u5fc5\u586b"}]})(p.default.createElement(w,{autosize:{minRows:3,maxRows:6},placeholder:"API-Client\u8bc1\u4e66\u5bc6\u94a5\u5185\u5bb9"}))),p.default.createElement(y,(0,s.default)({label:"\u5907\u6ce8"},c,{style:{width:"50%"}}),o("desc",{initialValue:n.desc})(p.default.createElement(w,{autosize:{minRows:3,maxRows:6},placeholder:"\u96c6\u7fa4\u5907\u6ce8\u4fe1\u606f"}))))))}},m=f))||m),v=h.default.create()(b),C=v;t.default=C},xRNp:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a("jehZ"));a("giR+");var s=l(a("fyUT"));a("IzEo");var r=l(a("bx4M"));a("g9YV");var d=l(a("wCAj"));a("fOrg");var o=l(a("+KLJ"));a("14J3");var u=l(a("BMrR"));a("jCWc");var c=l(a("kPKH"));a("+L6B");var m=l(a("2/Rp"));a("Awhp");var f=l(a("KrTs"));a("/xke");var h=l(a("TeRw"));a("y8nQ");var p=l(a("Vl3Y"));a("2qtc");var g,E,y,w,b=l(a("kLXV")),v=a("MuoO"),C=a("7DNP"),_=n(a("q1tI")),x=l(a("ESNr")),T=l(a("q76B")),S=l(a("XZXw")),I=l(a("+iC2")),k=b.default.confirm,P=(g=(0,v.connect)(e=>{var t=e.user,a=e.list,l=e.loading,n=e.global,i=e.index;return{user:t.currentUser,list:a,loading:l.models.list,rainbondInfo:n.rainbondInfo,enterprise:n.enterprise,isRegist:n.isRegist,oauthLongin:l.effects["global/creatOauth"],delclusterLongin:l.effects["region/deleteEnterpriseCluster"],overviewInfo:i.overviewInfo}}),E=p.default.create(),g(y=E((w=class extends _.PureComponent{constructor(e){var t;super(e),t=this,this.handleMandatoryDelete=(()=>{var e=this;k({title:"\u5f53\u524d\u96c6\u7fa4\u4e2d\u8fd8\u5b58\u5728\u7ec4\u4ef6\u3001\u662f\u5426\u5f3a\u5236\u5220\u9664",content:"\u5220\u9664\u540e\u53ef\u901a\u8fc7\u76f8\u540c\u7684\u96c6\u7fa4ID\u91cd\u65b0\u6dfb\u52a0\u6062\u590d\u5df2\u6709\u79df\u6237\u548c\u5e94\u7528\u7684\u7ba1\u7406",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk(){return e.handleDelete(!0),new Promise((e,t)=>{setTimeout(Math.random()>.5?e:t,1e3)}).catch(e=>console.log(e))}})}),this.handleDelete=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=t.state.regionInfo,l=t.props,n=l.dispatch,i=l.match.params.eid;n({type:"region/deleteEnterpriseCluster",payload:{region_id:a.region_id,enterprise_id:i,force:e},callback:e=>{e&&200===e._condition&&(t.loadClusters(),h.default.success({message:"\u5220\u9664\u6210\u529f"})),t.cancelClusters()},handleError:e=>{e&&e.data&&10050===e.data.code&&(t.setState({delVisible:!1}),t.handleMandatoryDelete())}})},this.loadClusters=(e=>{var t=this.props,a=t.dispatch,l=t.match.params.eid;a({type:"region/fetchEnterpriseClusters",payload:{enterprise_id:l,name:e},callback:e=>{if(e&&e.list){var t=[];e.list.map((e,a)=>{e.key="cluster".concat(a),t.push(e)}),this.setState({clusters:t})}}})}),this.addClusterShow=(()=>{}),this.cancelEditClusters=(()=>{this.loadClusters(),this.setState({editClusterShow:!1,text:"",regionInfo:!1})}),this.handleEdit=(e=>{this.loadPutCluster(e.region_id)}),this.delUser=(e=>{this.setState({delVisible:!0,regionInfo:e})}),this.cancelClusters=(()=>{this.setState({delVisible:!1,regionInfo:!1})}),this.handlUnit=(e=>{return e?(e/1024).toFixed(2)/1:0}),this.loadPutCluster=(e=>{var t=this.props,a=t.dispatch,l=t.match.params.eid;a({type:"region/fetchEnterpriseCluster",payload:{enterprise_id:l,region_id:e},callback:e=>{e&&200===e._code&&this.setState({regionInfo:e.bean,editClusterShow:!0,text:"\u7f16\u8f91\u96c6\u7fa4"})}})}),this.showRegions=(e=>{this.setState({showTenantList:!0,regionAlias:e.region_alias,regionName:e.region_name,showTenantListRegion:e.region_id,loadTenants:!0},this.loadRegionTenants)}),this.loadRegionTenants=(()=>{var e=this.state,t=e.tenantPage,a=e.tenantPageSize,l=e.showTenantListRegion,n=this.props,i=n.dispatch,s=n.match.params.eid;i({type:"region/fetchEnterpriseClusterTenants",payload:{enterprise_id:s,page:t,pageSize:a,region_id:l},callback:e=>{e&&e.bean?this.setState({tenants:e.bean.tenants,tenantTotal:e.bean.total,loadTenants:!1}):this.setState({loadTenants:!1})},handleError:()=>{this.setState({loadTenants:!1})}})}),this.setTenantLimit=(e=>{this.setState({setTenantLimitShow:!0,limitTenantName:e.tenant_name,limitTeamName:e.team_name,initLimitValue:e.set_limit_memory})}),this.submitLimit=(e=>{e.preventDefault();var t=this.props,a=t.match.params.eid,l=t.form,n=this.state,i=n.limitTenantName,s=n.showTenantListRegion;l.validateFields({force:!0},(e,t)=>{e||(this.setState({limitSummitLoading:!0}),this.props.dispatch({type:"region/setEnterpriseTenantLimit",payload:{enterprise_id:a,region_id:s,tenant_name:i,limit_memory:t.limit_memory},callback:()=>{h.default.success({message:"\u8bbe\u7f6e\u6210\u529f"}),this.setState({limitSummitLoading:!1,setTenantLimitShow:!1}),this.loadRegionTenants()},handleError:()=>{h.default.warning({message:"\u8bbe\u7f6e\u5931\u8d25\u54af\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"}),this.setState({limitSummitLoading:!1})}}))})}),this.hideTenantListShow=(()=>{this.setState({showTenantList:!1,showTenantListRegion:"",tenants:[]})}),this.handleTenantPageChange=(e=>{this.setState({tenantPage:e},this.loadRegionTenants)}),this.handleJoinTeams=(e=>{var t=this.state.regionName,a=this.props.dispatch;a({type:"teamControl/joinTeam",payload:{team_name:e},callback:a=>{a&&200===a._code&&this.onJumpTeam(e,t)}})}),this.onJumpTeam=((e,t)=>{var a=this.props.dispatch;a(C.routerRedux.push("/team/".concat(e,"/region/").concat(t,"/index")))});var a=this.props.user,l=I.default.isCompanyAdmin(a);this.state={adminer:l,clusters:[],editClusterShow:!1,regionInfo:!1,text:"",delVisible:!1,showTenantList:!1,loadTenants:!1,tenantTotal:0,tenants:[],tenantPage:1,tenantPageSize:5,showTenantListRegion:"",setTenantLimitShow:!1}}componentWillMount(){var e=this.state.adminer,t=this.props.dispatch;e||t(C.routerRedux.push("/"))}componentDidMount(){this.loadClusters()}render(){var e=this.props,t=e.delclusterLongin,a=e.match.params.eid,l=e.form,n=this.state,h=n.clusters,g=n.text,E=n.regionInfo,y=n.delVisible,w=n.showTenantList,v=n.tenants,I=n.loadTenants,k=n.regionAlias,P=n.tenantTotal,L=n.tenantPage,R=n.tenantPageSize,A=n.setTenantLimitShow,V=n.limitTeamName,z=n.limitSummitLoading,q=n.initLimitValue,D=l.getFieldDecorator,M={onChange:this.handleTenantPageChange,total:P,pageSize:R,current:L},O=(e,t)=>{return{width:"100px",color:e,background:t,borderRadius:"15px",padding:"2px 0"}},B=[{title:"\u540d\u79f0",dataIndex:"region_alias",align:"center",render:(e,t)=>{return _.default.createElement(C.Link,{to:"/enterprise/".concat(a,"/clusters/").concat(t.region_id,"/dashboard")},e)}},{title:"\u7c7b\u578b",dataIndex:"region_type",align:"center",render:(e,t)=>{return _.default.createElement("span",null,e&&e instanceof Array&&e.length>0?e.map(e=>{return"development"===e?_.default.createElement("span",{style:{marginRight:"8px"},key:e},"\u5f00\u53d1\u96c6\u7fa4"):"ack-manage"===e?_.default.createElement("span",{style:{marginRight:"8px"},key:e},"\u963f\u91cc\u4e91-\u6258\u7ba1\u96c6\u7fa4"):"custom"===e?_.default.createElement("span",{style:{marginRight:"8px"},key:e},"\u666e\u901a\u96c6\u7fa4"):void 0}):"\u666e\u901a\u96c6\u7fa4")}},{title:"\u5185\u5b58(GB)",dataIndex:"total_memory",align:"center",width:"200px",render:(e,t)=>{return _.default.createElement("a",{onClick:()=>{this.showRegions(t)}},this.handlUnit(t.used_memory),"/",this.handlUnit(t.total_memory))}},{title:"\u7248\u672c",dataIndex:"rbd_version",align:"center",width:"350px"},{title:"\u72b6\u6001",dataIndex:"status",align:"center",width:"150px",render:(e,t)=>{if("failure"===t.health_status)return _.default.createElement("span",{style:{color:"red"}},"\u901a\u4fe1\u5f02\u5e38");switch(e){case"0":return _.default.createElement("div",{style:O("#1890ff","#e6f7ff")},_.default.createElement(f.default,{color:"#1890ff"}),"\u7f16\u8f91\u4e2d");case"1":return _.default.createElement("div",{style:O("#52c41a","#e9f8e2")},_.default.createElement(f.default,{color:"#52c41a"}),"\u8fd0\u884c\u4e2d");case"2":return _.default.createElement("div",{style:O("#b7b7b7","#f5f5f5")},_.default.createElement(f.default,{color:"#b7b7b7"}),"\u5df2\u4e0b\u7ebf");case"3":return _.default.createElement("div",{style:O("#1890ff","#e6f7ff")},_.default.createElement(f.default,{color:"#1890ff"}),"\u7ef4\u62a4\u4e2d");case"5":return _.default.createElement("div",{style:O("#fff","#f54545")},_.default.createElement(f.default,{color:"#fff"}),"\u5f02\u5e38");default:return _.default.createElement("div",{style:O("#fff","#ffac38")},_.default.createElement(f.default,{color:"#fff"}),"\u672a\u77e5")}}},{title:"\u64cd\u4f5c",dataIndex:"method",align:"center",width:"170px",render:(e,t)=>{return[_.default.createElement("a",{onClick:()=>{this.delUser(t)}},"\u5220\u9664"),_.default.createElement("a",{onClick:()=>{this.handleEdit(t)}},"\u7f16\u8f91"),_.default.createElement("a",{onClick:()=>{this.showRegions(t)}},"\u8d44\u6e90\u9650\u989d")]}}],N=[{title:"\u6240\u5c5e\u56e2\u961f",dataIndex:"team_name",align:"center",render:(e,t)=>{return _.default.createElement("a",{onClick:()=>{this.handleJoinTeams(t.tenant_name)}},t.team_name)}},{title:"\u5185\u5b58\u4f7f\u7528\u91cf(MB)",dataIndex:"memory_request",align:"center"},{title:"CPU\u4f7f\u7528\u91cf",dataIndex:"cpu_request",align:"center"},{title:"\u79df\u6237\u9650\u989d(MB)",dataIndex:"set_limit_memory",align:"center"},{title:"\u8fd0\u884c\u7ec4\u4ef6\u6570",dataIndex:"running_app_num",align:"center"},{title:"\u64cd\u4f5c",dataIndex:"method",align:"center",width:"100px",render:(e,t)=>{return[_.default.createElement("a",{onClick:()=>{this.setTenantLimit(t)}},"\u8bbe\u7f6e\u9650\u989d")]}}],Z={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:20},sm:{span:12}}};return _.default.createElement(S.default,{title:"\u96c6\u7fa4\u7ba1\u7406",content:"\u96c6\u7fa4\u662f\u8d44\u6e90\u7684\u96c6\u5408\uff0c\u4ee5Kubernetes\u96c6\u7fa4\u4e3a\u57fa\u7840\uff0c\u90e8\u7f72Rainbond Region\u670d\u52a1\u5373\u53ef\u6210\u4e3aRainbond\u96c6\u7fa4\u8d44\u6e90\u3002"},_.default.createElement(u.default,{style:{marginBottom:"20px"}},_.default.createElement(c.default,{span:24,style:{textAlign:"right"}},_.default.createElement(C.Link,{to:"/enterprise/".concat(a,"/addCluster")},_.default.createElement(m.default,{type:"primary"},"\u6dfb\u52a0\u96c6\u7fa4")))),_.default.createElement(r.default,null,y&&_.default.createElement(T.default,{loading:t,title:"\u5220\u9664\u96c6\u7fa4",subDesc:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d",desc:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u96c6\u7fa4\u5417\uff1f",onOk:()=>this.handleDelete(!1),onCancel:this.cancelClusters}),this.state.editClusterShow&&_.default.createElement(x.default,{regionInfo:E,title:g,eid:a,onOk:this.cancelEditClusters,onCancel:this.cancelEditClusters}),_.default.createElement(o.default,{style:{marginBottom:"16px"},message:"\u6ce8\u610f\uff01\u96c6\u7fa4\u5185\u5b58\u4f7f\u7528\u91cf\u662f\u6307\u5f53\u524d\u96c6\u7fa4\u7684\u6574\u4f53\u4f7f\u7528\u91cf\uff0c\u4e00\u822c\u90fd\u5927\u4e8e\u79df\u6237\u5185\u5b58\u4f7f\u7528\u91cf\u7684\u603b\u548c"}),_.default.createElement(d.default,{dataSource:h,columns:B})),w&&_.default.createElement(b.default,{maskClosable:!1,title:"\u79df\u6237\u8d44\u6e90\u5360\u7528\u6392\u884c",width:800,visible:w,footer:null,onOk:this.hideTenantListShow,onCancel:this.hideTenantListShow},A&&_.default.createElement("div",null,_.default.createElement(o.default,{style:{marginBottom:"16px"},message:"\u6b63\u5728\u8bbe\u7f6e ".concat(V," \u5728 ").concat(k," \u96c6\u7fa4\u7684\u5185\u5b58\u9650\u989d")}),_.default.createElement(p.default,{onSubmit:this.submitLimit},_.default.createElement(p.default.Item,(0,i.default)({},Z,{name:"limit_memory",label:"\u5185\u5b58\u9650\u989d(MB)"}),D("limit_memory",{initialValue:q,rules:[{required:!0,message:"\u5185\u5b58\u9650\u5236\u503c\u5fc5\u586b"}]})(_.default.createElement(s.default,{style:{width:"200px"},min:0,precision:0,max:2147483647}))),_.default.createElement("div",{style:{textAlign:"center"}},_.default.createElement(m.default,{onClick:()=>{this.setState({setTenantLimitShow:!1,limitSummitLoading:!1})}},"\u53d6\u6d88"),_.default.createElement(m.default,{style:{marginLeft:"16px"},type:"primary",loading:z,htmlType:"submit"},"\u786e\u8ba4")))),!A&&_.default.createElement("div",null,_.default.createElement(o.default,{style:{marginBottom:"16px"},message:"CPU \u4f7f\u7528\u91cf 1000 \u76f8\u5f53\u4e8e\u5206\u914d1\u6838 CPU"}),_.default.createElement(d.default,{pagination:M,dataSource:v,columns:N,loading:I}))))}},y=w))||y)||y);t.default=P}}]);