(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"56Ly":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("fOrg");var d=l(a("+KLJ"));a("14J3");var i=l(a("BMrR"));a("+L6B");var c=l(a("2/Rp"));a("jCWc");var s=l(a("kPKH"));a("2qtc");var u=l(a("kLXV"));a("/xke");var o=l(a("TeRw"));a("tU7J");var f,m,p,h=l(a("wFql")),E=n(a("q1tI")),v=a("MuoO"),g=a("7DNP"),y=l(a("ohE7")),x=l(a("PVyA")),_=l(a("wd/R")),b=h.default.Paragraph,M=(f=(0,v.connect)(),f((p=class extends E.PureComponent{constructor(e){super(e),this.fetchEnterpriseOrderDetails=(()=>{var e=this.props,t=e.dispatch,a=e.eid,l=e.orderId;t({type:"order/fetchEnterpriseOrderDetails",payload:{enterprise_id:a,order_id:l},callback:e=>{e&&200===e._code&&this.setState({dtailsLoading:!1,info:e.bean})},handleError:e=>{e&&e.data&&6004===e.data.code&&(o.default.warning({message:"\u8ba2\u5355\u4e0d\u5b58\u5728"}),this.jump())}})}),this.financialInfo=(()=>{var e=this;u.default.info({title:"\u6e29\u99a8\u63d0\u793a",content:E.default.createElement("div",null,E.default.createElement("p",null,"\u8d22\u52a1\u4eba\u5458\u5c06\u4f1a\u572824\u5c0f\u65f6\u5185\u5ba1\u6838"),E.default.createElement("p",null,"\u82e5\u6709\u7591\u95ee\u8bf7\u8054\u7cfb18701654470")),onOk(){e.jump()}})}),this.jump=(()=>{var e=this.props,t=e.dispatch,a=e.eid;t(g.routerRedux.push("/enterprise/".concat(a,"/orders/orderManagement")))}),this.fetchBankInfo=(()=>{var e=this.props.dispatch;e({type:"order/fetchBankInfo",callback:e=>{e&&200===e._code&&this.setState({bankLoading:!1,bankInfo:e.bean})}})}),this.handlUnit=(e=>{if(e){var t=e;return t>=1024?(t=e/1024,t.toFixed(2)/1):e}}),this.handleClose=(()=>{this.setState({visible:!1})}),this.handleStateText=(e=>{var t={ToBePaid:"\u5f85\u652f\u4ed8:",Paid:"\u5df2\u652f\u4ed8:",Closed:"\u5df2\u5173\u95ed:"};return t[e]||""}),this.state={info:null,dtailsLoading:!0,bankLoading:!0,visible:!0,bankInfo:null}}componentWillMount(){this.fetchEnterpriseOrderDetails(),this.fetchBankInfo()}render(){var e=this.state,t=e.info,a=e.bankInfo,l=e.dtailsLoading,n=e.bankLoading,u=t&&t.status&&"Paid"===t.status,o=t&&t.status&&"ToBePaid"===t.status,f=t&&[{name:"\u8ba2\u5355\u7f16\u53f7",value:t.order_id},{name:"\u521b\u5efa\u65f6\u95f4",value:"".concat((0,_.default)(t.create_time).locale("zh-cn").format("YYYY-MM-DD HH:mm:ss"))},{name:"\u670d\u52a1\u5468\u671f",value:"\n        ".concat(0===t.final_price?"\u4e0d\u9650\u5236":"".concat(t.months,"\u6708"))},{name:"\u751f\u6548\u65f6\u95f4",value:"\n        ".concat(0===t.final_price?"\u4e0d\u9650\u5236":u?"".concat((0,_.default)(t.effect_time).locale("zh-cn").format("YYYY-MM-DD")):"\u672a\u751f\u6548")},{name:"\u7ed3\u675f\u65f6\u95f4",value:"".concat(0===t.final_price?"\u4e0d\u9650\u5236":u?"".concat((0,_.default)(t.expired_time).locale("zh-cn").format("YYYY-MM-DD")):"\u672a\u751f\u6548")},{name:"\u8d2d\u4e70\u5bb9\u91cf",value:"".concat(x.default.handlUnit(t.memory),"GB\u8c03\u5ea6\u5185\u5b58")},{name:"\u603b\u8d39\u7528",value:"\xa5 ".concat(t.final_price.toFixed(2)/1," ").concat(t.original_price&&0!==t.final_price&&t.original_price!==t.final_price?"\u5df2\u4f18\u60e0\xa5 ".concat((t.original_price-t.final_price).toFixed(2)/1):"")}];return E.default.createElement(r.default,null,E.default.createElement("div",null,"\u8ba2\u5355\u8be6\u60c5"),E.default.createElement(r.default,{loading:l||n,style:{margin:"42px 0",background:"#f3f5f9"}},E.default.createElement(i.default,{style:{display:"flex",alignItems:"center"}},E.default.createElement(s.default,{span:o?11:24,style:{height:o&&"246px"}},f&&f.map((e,t)=>{var a=e.name,l=e.value;return E.default.createElement(s.default,{span:o?24:12,style:{marginBottom:"14px"}},E.default.createElement(s.default,{span:4,className:y.default.ordelText},a),E.default.createElement(s.default,{span:20,className:y.default.orderText},0===t?E.default.createElement(b,{style:{marginBottom:"0px"},copyable:{text:l}},l):l))}),!o&&E.default.createElement(s.default,{span:12,offset:12},E.default.createElement(s.default,{span:4}),E.default.createElement(s.default,{span:20,className:y.default.orderText},E.default.createElement(c.default,{type:"primary",onClick:this.jump},"\u8fd4\u56de")))),o&&E.default.createElement(s.default,{span:2},E.default.createElement("div",{className:y.default.segmentation})),o&&E.default.createElement(s.default,{span:11,style:{height:"246px"}},a&&E.default.createElement(i.default,null,E.default.createElement(s.default,{span:12,className:y.default.orderTitleL},E.default.createElement("div",null,this.handleStateText(t&&t.status)),E.default.createElement("div",null,"\xa5\xa0",t&&t.final_price.toFixed(2)/1)),E.default.createElement(s.default,{span:12,className:y.default.orderTitleR},E.default.createElement("p",null,"\u8bf7\u901a\u8fc7\u5bf9\u516c\u4ed8\u6b3e\u5230\u4ee5\u4e0b\u8d26\u53f7"," ",E.default.createElement(b,{style:{marginBottom:"0px"},copyable:{text:"\u5f00\u6237\u884c\uff1a".concat(a.bank,"; \u8d26\u53f7\u540d\uff1a").concat(a.account_name,"; \u8d26\u53f7\uff1a").concat(a.account,";")}}),"\uff1a"),E.default.createElement("p",null,E.default.createElement("span",null,"\u5f00\u6237\u884c\uff1a"),E.default.createElement(b,{style:{marginBottom:"0px"},copyable:{text:a.bank}},a.bank)),E.default.createElement("p",null,E.default.createElement("span",null,"\u8d26\u53f7\u540d\uff1a"),E.default.createElement(b,{style:{marginBottom:"0px"},copyable:{text:a.account_name}},a.account_name)),E.default.createElement("p",null,E.default.createElement("span",null,"\u8d26\xa0\xa0\xa0\u53f7\uff1a"),E.default.createElement(b,{style:{marginBottom:"0px"},copyable:{text:a.account}},a.account)))),this.state.visible?E.default.createElement(d.default,{style:{marginBottom:"20px"},message:"\u8bf7\u5728\u5bf9\u516c\u8f6c\u8d26\u94f6\u884c\u8ba2\u5355\u4e2d\u9644\u52a0\u8ba2\u5355\u53f7\u4f5c\u4e3a\u5907\u6ce8\u4fe1\u606f",type:"info",showIcon:!0,closable:!0,afterClose:this.handleClose}):null,E.default.createElement(c.default,{type:"primary",onClick:()=>{t&&"ToBePaid"===t.status?this.financialInfo():this.jump()}},t&&"ToBePaid"===t.status?"\u5b8c\u6210\u652f\u4ed8":"\u8fd4\u56de")))))}},m=p))||m);t.default=M},KrgH:function(e,t,a){e.exports=a.p+"static/phone.54b3f6a4.png"},b9sP:function(e,t,a){e.exports=a.p+"static/weChat.78ff70a7.jpeg"},lgET:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("g9YV");var d=l(a("wCAj"));a("14J3");var i=l(a("BMrR"));a("jCWc");var c=l(a("kPKH"));a("Awhp");var s=l(a("KrTs"));a("y8nQ");var u=l(a("Vl3Y"));a("OaEy");var o,f,m,p=l(a("2fM7")),h=n(a("q1tI")),E=a("MuoO"),v=a("7DNP"),g=l(a("PVyA")),y=l(a("wd/R")),x=p.default.Option,_=u.default.Item,b=(o=(0,E.connect)(e=>{var t=e.user,a=e.list,l=e.loading,n=e.global,r=e.index;return{user:t.currentUser,list:a,loading:l.models.list,rainbondInfo:n.rainbondInfo,enterprise:n.enterprise,isRegist:n.isRegist,oauthLongin:l.effects["global/creatOauth"],overviewInfo:r.overviewInfo}}),o((m=class extends h.PureComponent{constructor(e){super(e),this.handelChange=(e=>{this.setState({query:e},()=>{this.handleSearch()})}),this.handleSearch=(()=>{this.setState({page:1},()=>{this.fetchEnterpriseOrderList()})}),this.onPageChange=(e=>{this.setState({page:e,tabLoading:!0},()=>{this.fetchEnterpriseOrderList()})}),this.fetchEnterpriseOrderList=(()=>{this.setState({tabLoading:!0});var e=this.props,t=e.dispatch,a=e.eid,l=this.state,n=l.page,r=l.page_size,d=l.query;t({type:"order/fetchEnterpriseOrderList",payload:{query:d,page:n,page_size:r,enterprise_id:a},callback:e=>{e&&200===e._code&&this.setState({loading:!1,tabLoading:!1,orderList:e.list,total:e.total||0})}})}),this.state={page:1,page_size:10,orderList:[],total:0,loading:!0,tabLoading:!0,query:""}}componentWillMount(){this.fetchEnterpriseOrderList()}render(){var e=this.props.eid,t=this.state,a=t.orderList,l=t.loading,n=t.tabLoading,o=t.page,f=t.page_size,m=t.total,E=(e,t)=>{return{margin:"0 auto",width:"100px",color:e,background:t,borderRadius:"15px",padding:"2px 0"}},b=[{title:"\u8ba2\u5355\u7f16\u53f7",dataIndex:"order_id",rowKey:"order_id",align:"center",width:"220px",render:t=>{return h.default.createElement(v.Link,{to:"/enterprise/".concat(e,"/orders/orderManagement/orderDetails/").concat(t),style:{wordBreak:"break-all",wordWrap:"break-word",color:"#1890ff"}},t)}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time",rowKey:"create_time",align:"center",width:"190px",render:e=>{return h.default.createElement("span",null," ",(0,y.default)(e).locale("zh-cn").format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u670d\u52a1\u5468\u671f",dataIndex:"months",rowKey:"months",align:"center",width:"130px",render:(e,t)=>{return h.default.createElement("div",null,0===t.final_price?"\u4e0d\u9650\u5236":h.default.createElement("div",null,e,"\u6708"))}},{title:"\u751f\u6548\u65f6\u95f4",dataIndex:"effect_time",rowKey:"effect_time",width:"130px",align:"center",render:(e,t)=>{return h.default.createElement("div",null,0===t.final_price?"\u4e0d\u9650\u5236":"Paid"===t.status?h.default.createElement("div",null,(0,y.default)(e).locale("zh-cn").format("YYYY-MM-DD")):h.default.createElement("div",null,"\u672a\u751f\u6548"))}},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"expired_time",rowKey:"expired_time",align:"center",width:"130px",render:(e,t)=>{return h.default.createElement("div",null,0===t.final_price?"\u4e0d\u9650\u5236":"Paid"===t.status?h.default.createElement("div",null,(0,y.default)(e).locale("zh-cn").format("YYYY-MM-DD")):h.default.createElement("div",null,"\u672a\u751f\u6548"))}},{title:"\u8d2d\u4e70\u5bb9\u91cf(GB)",dataIndex:"memory",rowKey:"memory",align:"center",width:"130px",render:e=>{return h.default.createElement("span",null,g.default.handlUnit(e))}},{title:"\u603b\u4ef7",dataIndex:"final_price",rowKey:"final_price",align:"center",width:"220px",render:(e,t)=>{return h.default.createElement("div",null,"\xa5",e.toFixed(2)/1,0!==e&&t.original_price&&t.original_price!==e&&h.default.createElement("s",{style:{color:"#b7bcc7",fontSize:"12px",marginLeft:"5px"}},"( \u5df2\u4f18\u60e0\xa5",(t.original_price-e).toFixed(2)/1," )"))}},{title:"\u8ba2\u5355\u72b6\u6001",dataIndex:"status",rowKey:"status",align:"center",width:"110px",render:e=>{switch(e){case"ToBePaid":return h.default.createElement("div",{style:E("#1890ff","#e6f7ff")},h.default.createElement(s.default,{color:"#1890ff"}),"\u5f85\u652f\u4ed8");case"Paid":return h.default.createElement("div",{style:E("#52c41a","#e9f8e2")},h.default.createElement(s.default,{color:"#52c41a"}),"\u5df2\u652f\u4ed8");case"Closed":return h.default.createElement("div",{style:E("#b7b7b7","#f5f5f5")},h.default.createElement(s.default,{color:"#b7b7b7"}),"\u5df2\u5173\u95ed");default:return h.default.createElement("div",{style:E("#fff","#ffac38")},h.default.createElement(s.default,{color:"#fff"}),"\u672a\u77e5")}}}];return h.default.createElement(r.default,{loading:l},h.default.createElement(i.default,{style:{marginBottom:"20px",display:"flex",alignItems:"center"}},h.default.createElement(c.default,{span:24},h.default.createElement(u.default,{layout:"inline",style:{display:"inline-block"}},h.default.createElement(_,null,h.default.createElement(p.default,{defaultValue:"",style:{width:120},onChange:this.handelChange},h.default.createElement(x,{value:""},"\u5168\u90e8\u72b6\u6001"),h.default.createElement(x,{value:"ToBePaid"},"\u5f85\u652f\u4ed8"),h.default.createElement(x,{value:"Paid"},"\u5df2\u652f\u4ed8"),h.default.createElement(x,{value:"Closed"},"\u5df2\u5173\u95ed")))))),h.default.createElement(d.default,{loading:n,pagination:{current:o,pageSize:f,total:m,onChange:this.onPageChange},dataSource:a,columns:b}))}},f=m))||f);t.default=b},ohE7:function(e,t,a){e.exports={orders:"orders___1S-WF",tagVertical:"tagVertical___3HsME",checked:"checked___2f7tB",durationChecked:"durationChecked___3UZJD",cukIconCheck:"cukIconCheck___2NNr-",boxs:"boxs___iH8m4",ordelText:"ordelText___3DOtn",orderText:"orderText___TEkUi",segmentation:"segmentation___3jjPv",orderTitleL:"orderTitleL___1E5or",orderTitleR:"orderTitleR___2BbyH",tabs:"tabs___SDyQ1",unit:"unit___1qmk_",imgbox:"imgbox___6CLow",serviceBox:"serviceBox___1qSw9",serviceDetailsBox:"serviceDetailsBox___14P8f",serviceDetailsL:"serviceDetailsL___wBIau",serviceDetailsR:"serviceDetailsR___27IKc",capacityBox:"capacityBox___1GogR",amount:"amount___3cklh",showInput:"showInput___pjoUv",zslSlider:"zslSlider___3Khsy"}},tQOM:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("14J3");var d=l(a("BMrR"));a("+L6B");var i=l(a("2/Rp"));a("jCWc");var c,s,u,o=l(a("kPKH")),f=a("MuoO"),m=a("7DNP"),p=l(a("wd/R")),h=n(a("q1tI")),E=l(a("KrgH")),v=l(a("b9sP")),g=l(a("PVyA")),y=l(a("ohE7")),x=(c=(0,f.connect)(e=>{var t=e.order;return{enterpriseServiceInfo:t.enterpriseServiceInfo}}),c((u=class extends h.PureComponent{constructor(e){super(e),this.handlRefresh=(()=>{var e=this.props,t=e.dispatch,a=e.eid;t({type:"order/fetchEnterpriseServiceRefresh",payload:{enterprise_id:a},callback:e=>{e&&200===e._code&&this.fetchEnterpriseService()}})}),this.fetchEnterpriseService=(()=>{var e=this.props,t=e.dispatch,a=e.eid;t({type:"order/fetchEnterpriseService",payload:{enterprise_id:a},callback:e=>{e&&200===e._code&&this.setState({loading:!1})}})}),this.state={loading:!0}}componentWillMount(){}render(){var e=this.state.loading,t=this.props,a=t.eid,l=t.enterpriseServiceInfo,n=l&&"free"===l.type,c=n?"\u514d\u8d39\u7248":"\u4ed8\u8d39\u7248",s="RAINBOND CLOUD",u=n?"\u514d\u8d39\u670d\u52a1":"\u4ed8\u8d39\u670d\u52a1";return h.default.createElement("div",null,h.default.createElement(r.default,{bordered:!1,loading:!l,style:{marginBottom:"45px"},bodyStyle:{padding:!e&&"0"}},l&&h.default.createElement(d.default,null,h.default.createElement(o.default,{span:7,className:y.default.boxs},h.default.createElement("p",null,s),h.default.createElement("p",null," ",c," "),n?h.default.createElement("p",null):h.default.createElement("p",null,(0,p.default)(l.expired_time).format("YYYY-MM-DD"),"\u5230\u671f")),h.default.createElement(o.default,{span:8},h.default.createElement(d.default,null,h.default.createElement(o.default,{span:12,className:y.default.unit},h.default.createElement("div",null,h.default.createElement("p",null,"\u5f53\u524d\u4f7f\u7528\u8c03\u5ea6\u5185\u5b58(GB)"),h.default.createElement("div",{style:{display:"flex",border:"none",alignItems:"baseline"}},h.default.createElement("h6",null,g.default.handlUnit(l.used_memory)||0),h.default.createElement("a",{style:{marginLeft:"5px",fontSize:"12px"},onClick:this.handlRefresh},"\u5237\u65b0"))),h.default.createElement(i.default,{style:{marginTop:"50px"},type:"primary"},h.default.createElement(m.Link,{to:"/enterprise/".concat(a,"/orders/overviewService/details")},n?"\u8ba2\u8d2d":"\u6269\u5bb9\u7eed\u8d39"))),h.default.createElement(o.default,{span:12,className:y.default.unit},h.default.createElement("div",null,h.default.createElement("p",null,"\u8c03\u5ea6\u5185\u5b58\u4e0a\u9650(GB)"),h.default.createElement("h6",null,g.default.handlUnit(l.memory_limit)))))),h.default.createElement(o.default,{span:9,className:y.default.unit},h.default.createElement("p",null,"\u4f60\u6b63\u5728\u4f7f\u7528"),h.default.createElement("h5",null,s,"\xa0",u)))),!n&&h.default.createElement(r.default,{bordered:!1,loading:e},h.default.createElement(d.default,null,h.default.createElement(o.default,{span:12,className:y.default.imgbox},h.default.createElement("img",{src:E.default,alt:""}),h.default.createElement("div",null,h.default.createElement("p",null,"\u4e13\u5c5e\u5ba2\u670d\u7535\u8bdd"),h.default.createElement("p",null,"18701654470"))),h.default.createElement(o.default,{span:12,className:y.default.imgbox},h.default.createElement("img",{src:v.default,alt:""}),h.default.createElement("div",null,h.default.createElement("p",null,"\u4e13\u5c5e\u5ba2\u670d\u5fae\u4fe1"),h.default.createElement("p",null,"wechat"))))))}},s=u))||s);t.default=x},tUQu:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,d,i,c=l(a("q1tI")),s=a("MuoO"),u=a("7DNP"),o=n(a("XZXw")),f=n(a("lgET")),m=n(a("56Ly")),p=n(a("tQOM")),h=n(a("vDs9")),E=n(a("a7IW")),v=n(a("mWxT")),g=(r=(0,s.connect)(e=>{var t=e.user,a=e.global,l=e.index;return{user:t.currentUser,rainbondInfo:a.rainbondInfo,enterprise:a.enterprise,overviewInfo:l.overviewInfo}}),r((i=class extends c.PureComponent{constructor(e){super(e),this.callback=(e=>{var t=this.props,a=t.dispatch,l=t.match.params.eid;a(u.routerRedux.push("/enterprise/".concat(l,"/orders/").concat(e)))}),this.state={}}render(){var e=this.props.match.params,t=e.eid,a=e.orderType,l=e.orderId,n=window.location.href.indexOf("overviewService/details")>-1,r=[{key:"overviewService",tab:"\u670d\u52a1\u6982\u89c8"},{key:"orderManagement",tab:"\u8ba2\u5355\u7ba1\u7406"}];return v.default.isEnableBillingFunction()?c.default.createElement(o.default,{title:"\u670d\u52a1\u8ba2\u8d2d",tabList:r,tabActiveKey:a,onTabChange:this.callback},"overviewService"===a&&(n?c.default.createElement(h.default,{eid:t}):c.default.createElement(p.default,{eid:t})),"orderManagement"===a&&(l?c.default.createElement(m.default,{eid:t,orderId:l}):c.default.createElement(f.default,{eid:t}))):c.default.createElement(E.default,null)}},d=i))||d);t.default=g},vDs9:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp"));a("giR+");var d=l(a("fyUT"));a("jCWc");var i=l(a("kPKH"));a("8dk+");var c=l(a("eZ87"));a("fOrg");var s=l(a("+KLJ"));a("IzEo");var u=l(a("bx4M"));a("14J3");var o=l(a("BMrR"));a("T2oS");var f=l(a("W9HT"));a("/xke");var m,p,h,E=l(a("TeRw")),v=a("MuoO"),g=a("7DNP"),y=l(a("wd/R")),x=n(a("q1tI")),_=l(a("PVyA")),b=l(a("ohE7")),M=(m=(0,v.connect)(e=>{var t=e.order;return{enterpriseServiceInfo:t.enterpriseServiceInfo}}),m((h=class extends x.PureComponent{constructor(e){super(e),this.fetchEnterpriseService=(()=>{var e=this.props.enterpriseServiceInfo;if(!e)return null;this.setState({loading:!1,info:e,discountMoney:e.discount?e.discount:.8,discountText:e.discount?"".concat(10*e.discount,"\u6298\u4f18\u60e0"):"8.0\u6298\u4f18\u60e0",capacity:_.default.handlUnitMemory(e.memory_limit)},()=>{this.calculatePrice()})}),this.handleClose=(e=>{this.setState({[e]:!1})}),this.selected=(e=>{this.setState({selected:e},()=>{this.calculatePrice()})}),this.calculatePrice=(()=>{var e=this.state,t=e.monthNumber,a=e.price,l=e.capacity,n=e.info,r=e.selected,d=e.discountText,i=e.discountMoney,c=3===r,s=n&&"vip"===n.type,u=_.default.handlUnitMemory(n&&n.memory_limit),o=l-u<=0,f=n&&n.expired_time,m=s&&_.default.fetchHowManyMonths(f),p=s&&m&&12===m?0:_.default.fetchHowManyDays(f),h=l-u,E=this.calculateDifference(a,m,p,h,!1,i),v=this.calculateDifference(a,m,p,h,!0,i),g=s&&"".concat(0!==m?"\xa5".concat(a,"/GB/\u6708 x ").concat(h,"GB\u5bb9\u91cf x ").concat(m,"\u6708 ").concat(m>=12?"x ".concat(d):""," "):"","\n      ").concat(0!==m&&0!==p?" + ":"","\n      ").concat(0!==p?" \xa5".concat(a,"/GB/\u6708 x ( ").concat(h,"GB\u5bb9\u91cf x ").concat(p,"\u5929 / 30 ) "):""," ");this.fetchmonths(r,t,f,s),this.calculateExtended(c,s,o,E,g,v,d,i),this.calculateYearsPay(12,a,l,s,h,E,g,v,d,i),this.calculateMonthPay(t,a,l,s,h,E,g,v,d,i)}),this.calculateYearsPay=((e,t,a,l,n,r,d,i,c,s)=>{var u=0,o=0,f="( ".concat(t,"/GB/\u6708 x ").concat(a,"GB\u5bb9\u91cf x ").concat(e,"\u6708 x ").concat(c," )");u=_.default.fetchOrderCost(!0,e,t,a,s),o=_.default.fetchOrderCost(!1,e,t,a,s),l&&(f="".concat(0!==n?"\u4e0d\u5ef6\u957f\u8d39\u7528 ( ".concat(d," ) +"):""," ").concat(0!==n?"\u5ef6\u957f\u8d39\u7528":""," ").concat(f),u=i+u,o=r+o),this.setState({computingYears:f,yearsPay:u,discount:o})}),this.calculateMonthPay=((e,t,a,l,n,r,d,i,c,s)=>{var u=0,o=0,f="( ".concat(t,"/GB/\u6708 x ").concat(a,"GB\u5bb9\u91cf x ").concat(e>=12?"".concat(e,"\u6708 x ").concat(c," )"):"".concat(e,"\u6708 )"));o=_.default.fetchOrderCost(!1,e,t,a,s),u=_.default.fetchOrderCost(!0,e,t,a,s),l&&(f="".concat(0!==n?"\u4e0d\u5ef6\u957f\u8d39\u7528 ( ".concat(d," ) +"):""," ").concat(0!==n?"\u5ef6\u957f\u8d39\u7528":""," ").concat(f),o=r+o,u=i+u),this.setState({computingMonth:f,monthPay:o,originalMonthPay:u})}),this.calculateExtended=((e,t,a,l,n,r)=>{e&&t&&this.setState({extended:a?0:l,noDiscountExtended:a?0:r,computingNewOrder:a?"":n})}),this.calculateDifference=((e,t,a,l,n,r)=>{var d=n?1:t>11?r:1,i=e*t*l*d,c=a/30*e*l,s=(i+c).toFixed(2)/1;return s}),this.durationChecked=(()=>{return x.default.createElement("div",{className:b.default.durationChecked},x.default.createElement("svg",{fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",viewBox:"0 0 18 18",className:b.default.cukIconCheck,style:{verticalAlign:"middle"}},x.default.createElement("g",null,x.default.createElement("path",{d:"m16.03125 3.33984375h-1.2287109c-.1722657 0-.3357422.07910156-.441211.21445312l-7.24746091 9.18105473-3.47519531-4.40332035c-.10722657-.13535156-.26894532-.21445313-.44121094-.21445313h-1.22871094c-.11777344 0-.1828125.13535157-.11074219.22675782l4.81464844 6.09960936c.225.2847656.65742187.2847656.88417969 0l8.58515626-10.87910155c.0720703-.08964844.0070312-.225-.1107422-.225z",fillRule:"evenodd"}))))}),this.toThousands=(e=>{return e.toFixed(2)}),this.onChangeMonthNumber=(e=>{this.setState({monthNumber:e<1?1:e},()=>{this.calculatePrice()})}),this.submitOrders=(()=>{var e=this.state,t=e.monthNumber,a=e.capacity,l=e.yearsPay,n=e.selected,r=e.extended,d=e.noDiscountExtended,i=e.discount,c=e.monthPay,s=e.originalMonthPay;this.setState({submitLoading:!0});var u=this.props,o=u.dispatch,f=u.eid,m=1===n?i:2===n?c:r,p=1===n?12:2===n?t:0,h=1===n?l:2===n?s:d;o({type:"order/createOrder",payload:{enterprise_id:f,final_price:m,memory:a,months:p,original_price:h},callback:e=>{e&&200===e._code&&e.bean&&o(g.routerRedux.push("/enterprise/".concat(f,"/orders/orderManagement/orderDetails/").concat(e.bean.order_id)))},handleError:e=>{if(this.setState({submitLoading:!1}),e&&e.data&&e.data.code)switch(e.data.code){case 6e3:return E.default.warning({message:"\u8bf7\u6c42\u7684\u4ef7\u683c, \u548c\u5b9e\u9645\u8ba1\u7b97\u51fa\u6765\u7684\u4ef7\u683c\u4e0d\u4e00\u81f4"});case 6002:return E.default.warning({message:"\u53c2\u6570 months \u4e0d\u6b63\u786e"});case 6003:return E.default.warning({message:"\u53c2\u6570 memory \u4e0d\u6b63\u786e"});case 6005:return E.default.warning({message:"\u5185\u5b58\u4e0d\u80fd\u5c0f\u4e8e\u5df2\u4f7f\u7528\u5185\u5b58"});case 6006:return E.default.warning({message:"\u8fd8\u6709\u672a\u652f\u4ed8\u7684\u8ba2\u5355"});default:return E.default.warning({message:"\u672a\u77e5\u9519\u8bef"})}}})}),this.setObj=(e=>{for(var t={},a=e/5,l=0;l<=a;l++){var n=5*l;t["".concat(n)]=0!==n&&n%50===0?"".concat(n,"GB"):""}return t}),this.fetchmonths=((e,t,a,l)=>{var n="",r=new Date;n=1===e?l?(0,y.default)(a).add(12,"months").locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5"):(0,y.default)(r.setMonth(r.getMonth()+12)).locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5"):2===e?l?(0,y.default)(a).add(t,"months").locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5"):(0,y.default)(r.setMonth(r.getMonth()+t)).locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5"):(0,y.default)(a).locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5"),this.setState({moments:n})}),this.state={loading:!0,submitLoading:!1,visible:!0,cycleVisible:!0,info:null,selected:1,price:49,capacity:30,discountMoney:.8,discountText:"8\u6298\u4f18\u60e0",yearsPay:17640..toFixed(2)/1,discount:14112..toFixed(2)/1,monthNumber:1,monthPay:1470..toFixed(2)/1,originalMonthPay:1470..toFixed(2)/1,extended:0,noDiscountExtended:0,computingYears:"",computingMonth:"",computingNewOrder:""}}componentWillMount(){}componentDidMount(){}render(){var e=this.state,t=e.info,a=e.loading,l=e.selected,n=e.visible,m=e.cycleVisible,p=e.price,h=e.capacity,E=e.yearsPay,v=e.discount,g=e.monthNumber,M=e.monthPay,w=e.extended,k=e.moments,B=e.submitLoading,D=e.computingYears,P=e.computingMonth,S=e.computingNewOrder,C=e.discountText,I=e.maxSlider,Y=t&&"free"===t.type,L=_.default.handlUnitMemory(t&&t.memory_limit),N=_.default.handlUnitMemory(t&&t.used_memory),O=N>L?N:L,T=O+200;I&&(T=h);var R=this.setObj(T),z=1===l?v:2===l?M:w,j=this.toThousands(z),K=1===l?D:2===l?P:S;return x.default.createElement("div",{className:b.default.serviceBox},a?x.default.createElement("div",{style:{width:"100%",height:"100%",margin:"auto",paddingTop:50,textAlign:"center"}},x.default.createElement(f.default,{size:"large"})):x.default.createElement("div",null,x.default.createElement(u.default,{loading:a,bordered:!1,style:{marginBottom:"30px",background:"#f3f5f9"},bodyStyle:{padding:"35px 55px 10px 72px"}},x.default.createElement(o.default,{className:b.default.serviceDetailsBox},x.default.createElement("div",{className:b.default.serviceDetailsL},x.default.createElement("h6",null,"RAINBOND CLOUD \u4ed8\u8d39\u7248"),x.default.createElement("ul",null,x.default.createElement("li",null,"\u63a5\u5165\u96c6\u7fa4\u6570\u91cf\u65e0\u9650\u5236"),x.default.createElement("li",null,"\u56e2\u961f\u3001\u7528\u6237\u6570\u91cf\u65e0\u9650\u5236"),x.default.createElement("li",null,"\u5171\u4eab\u5e93\u5e94\u7528\u6a21\u7248\u6570\u91cf\uff0c\u7248\u672c\u6570\u91cf\u65e0\u9650\u5236"),x.default.createElement("li",null,"SLA\u4fdd\u8bc1\u30017x24\u5c0f\u65f6\u5728\u7ebf\u670d\u52a1"))),x.default.createElement("div",{className:b.default.serviceDetailsR},x.default.createElement("div",null,x.default.createElement("span",null,"\xa5",p," "),x.default.createElement("span",null,"/GB/\u6708")),x.default.createElement("div",null,"\u6309\u7167\u5e73\u53f0\u8c03\u5ea6\u7684\u5e94\u7528\u5185\u5b58\u603b\u6570\u8ba1\u8d39")))),x.default.createElement("div",{className:b.default.capacityBox},x.default.createElement("span",null,"\u5bb9\u91cf\u9009\u62e9"),x.default.createElement("span",null,"\uff08\u8d2d\u4e70\u540e\u53ef\u53e0\u52a0\u8ba2\u5355\u6269\u5927\u5bb9\u91cf\uff09")),n&&x.default.createElement(s.default,{message:Y?"\u6700\u5c0f\u8d2d\u4e70\u91cf\u5e94\u8be5\u5927\u4e8e\u5f53\u524d\u8d44\u6e90\u4f7f\u7528\u91cf".concat(N," GB \u5e76\u4e14\u5927\u4e8e30GB"):"\u5f53\u524d\u5df2\u8d2d\u4e70\u5bb9\u91cf ".concat(L," GB\uff0c\u4f60\u53ef\u4ee5\u589e\u52a0\u8d2d\u4e70\u66f4\u591a\u5bb9\u91cf\uff0c\u6269\u5927\u5bb9\u91cf\u4ed8\u6b3e\u5373\u7acb\u5373\u751f\u6548"),type:"info",showIcon:!0,closable:!0,afterClose:()=>{this.handleClose("visible")}}),x.default.createElement(o.default,null,x.default.createElement(i.default,{span:22,style:{overflow:"hidden"}},x.default.createElement(c.default,{className:b.default.zslSlider,tooltipVisible:!0,style:{margin:"70px 0 50px 0 "},marks:R,step:null,onAfterChange:e=>{var t=e>=L?e:L;this.setState({capacity:t},()=>{this.calculatePrice()})},onChange:e=>{this.setState({capacity:e,maxSlider:!1})},value:h,min:O,max:T})),x.default.createElement(i.default,{span:1},x.default.createElement(d.default,{min:O,style:{margin:"70px 16px 50px"},value:h,onChange:e=>{e%5>0?this.setState({capacity:e+(5-e%5),maxSlider:!0}):this.setState({capacity:e,maxSlider:!0})}}))),x.default.createElement("div",{className:b.default.capacityBox},x.default.createElement("span",null,Y?"\u65f6\u957f\u9009\u62e9":"\u5ef6\u957f\u5468\u671f\u9009\u62e9")),!Y&&m&&t&&x.default.createElement(s.default,{message:"\u5f53\u524d\u670d\u52a1\u5230\u671f\u65f6\u95f4\u4e3a ".concat((0,y.default)(t.expired_time).locale("zh-cn").format("YYYY\u5e74MM\u6708DD\u65e5")),type:"info",showIcon:!0,closable:!0,afterClose:()=>{this.handleClose("cycleVisible")},style:{marginBottom:"20px"}}),x.default.createElement(o.default,{gutter:24,style:{marginBottom:"30px"}},x.default.createElement(i.default,{span:8,onClick:()=>{this.selected(1)}},x.default.createElement("div",{className:"".concat(b.default.orders," ").concat(1===l&&b.default.checked)},x.default.createElement("div",null,x.default.createElement("span",null,"1"),x.default.createElement("span",null,"\u5e74")),x.default.createElement("div",null,x.default.createElement("div",null,x.default.createElement("span",null,"\xa5\xa0",this.toThousands(v)),x.default.createElement("s",null,"\xa5\xa0",this.toThousands(E))),x.default.createElement("div",null,"\u7acb\u4eab",C)),x.default.createElement("div",{className:b.default.tagVertical},"\u8350"),1===l&&this.durationChecked())),x.default.createElement(i.default,{span:8,onClick:()=>{this.selected(2)}},x.default.createElement("div",{className:"".concat(b.default.orders," ").concat(2===l&&b.default.checked)},x.default.createElement("div",null,x.default.createElement("span",null,x.default.createElement(d.default,{className:b.default.showInput,size:"small",min:1,max:12,value:g,style:{width:"50px",marginRight:"5px"},onChange:this.onChangeMonthNumber})),x.default.createElement("span",null,"\u6708")),x.default.createElement("div",null,x.default.createElement("div",null,x.default.createElement("span",null,"\xa5\xa0",this.toThousands(M)))),2===l&&this.durationChecked())),!Y&&x.default.createElement(i.default,{span:8,onClick:()=>{this.selected(3)}},x.default.createElement("div",{className:"".concat(b.default.orders," ").concat(3===l&&b.default.checked)},x.default.createElement("div",{style:{width:"0px"}}),x.default.createElement("div",{style:{width:"100%",paddingLeft:"0"}},"\u4e0d\u5ef6\u957f"),3===l&&this.durationChecked()))),x.default.createElement(u.default,{className:b.default.amount,bodyStyle:{padding:"20px 0 15px 24px"}},x.default.createElement("div",null,x.default.createElement("span",null,"\u5e94\u4ed8\u603b\u989d\uff1a"),x.default.createElement("span",null,"\xa5\xa0",j),x.default.createElement("span",null,"\xa0",K,"\xa0")),x.default.createElement("div",null,"\u603b\u5171\u53ef\u7ba1\u7406 ",h," GB \u8c03\u5ea6\u5185\u5b58\u7684\u5e94\u7528\u5230 ",k)),x.default.createElement(r.default,{type:"primary",disabled:!z||0===z,loading:B,onClick:this.submitOrders},"\u63d0\u4ea4\u8ba2\u5355")))}},p=h))||p);t.default=M}}]);