(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5DSb":function(e,t,a){"use strict";var i=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("MXD1");var n,s,l,o=i(a("CFYs")),d=r(a("q1tI")),u=a("MuoO"),c=(n=(0,u.connect)(e=>{var t=e.global;return{apploadingnum:t.apploadingnum}},null,null,{pure:!1}),n((l=class extends d.Component{constructor(e){super(e),this.saveRef=(e=>{this.element=e}),this.width=0,this.timer=null,this.total=0,this.loaded=0,this.state={width:0,show:!1}}getCurrentWidth(){var e=100;return this.state.width+=.01*(e-this.state.width),this.state.width>90?90:this.state.width}componentWillReceiveProps(e){var t=this.props.apploadingnum,a=e.apploadingnum;t!==a&&(a>0?(this.start(),this.computedWidth()):0===a&&this.completed())}start(){this.timer||(this.setState({width:0,show:!0}),this.computedWidth(),this.timer=setInterval(()=>{this.computedWidth()},this.props.interval||800))}computedWidth(){var e=this.getCurrentWidth();this.setState({width:e})}addRequest(){this.timer?this.computedWidth():this.start()}removeRequest(){this.loaded++,this.total==this.loaded?this.completed():this.computedWidth()}completed(){this.total=this.loaded=0,this.setState({width:100},()=>{setTimeout(()=>{this.setState({show:!1},()=>{this.setState({width:0})})},500)}),clearInterval(this.timer),this.timer=null}render(){return d.default.createElement("div",{ref:this.saveRef,className:"loadingbar",style:{display:this.state.show?"block":"none",zIndex:9999999,height:"3px",position:"fixed",left:0,top:-10,width:"100%"}},d.default.createElement(o.default,{status:"active",size:"small",percent:this.state.width}))}},s=l))||s);t.default=c},W7L6:function(e,t,a){"use strict";var i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getMenuData=void 0;var r=i(a("q1tI")),n=i(a("p0pE")),s=i(a("mWxT")),l=i(a("+iC2")),o=a("+n12");function d(e,t,a){var i=l.default.isCompanyAdmin(t),n=r.default.createElement("i",{className:"anticon"},r.default.createElement("svg",{t:"1584693382814",viewBox:"0 0 1024 1024",version:"1.1","p-id":"812",width:"20",height:"20"},r.default.createElement("path",{d:"M512 542.72L286.72 412.16V151.04L512 20.48l225.28 130.56v261.12L512 542.72zM339.2 381.44L512 481.28l172.8-99.84V181.76L512 81.92l-172.8 99.84v199.68zM776.96 1006.08L551.68 875.52V614.4l225.28-130.56L1002.24 614.4v261.12L776.96 1006.08zM602.88 844.8l172.8 99.84L949.76 844.8V645.12l-172.8-99.84-172.8 99.84V844.8zM247.04 1006.08L21.76 875.52V614.4l225.28-130.56L473.6 614.4v261.12L247.04 1006.08zM74.24 844.8l172.8 99.84L421.12 844.8V645.12l-172.8-99.84-174.08 99.84V844.8z",fill:"#9CA2A8","p-id":"813"}))),o=r.default.createElement("i",{className:"anticon"},r.default.createElement("svg",{t:"1585203404203",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18024",width:"20",height:"20"},r.default.createElement("path",{d:"M111.872 42.666667A26.538667 26.538667 0 0 0 85.333333 69.205333v885.589334c0 14.677333 11.861333 26.538667 26.538667 26.538666h800.256a26.538667 26.538667 0 0 0 26.538667-26.538666V69.205333A26.538667 26.538667 0 0 0 912.128 42.666667H111.872z m0-42.666667h800.256C950.357333 0 981.333333 30.976 981.333333 69.205333v885.589334c0 38.229333-30.976 69.205333-69.205333 69.205333H111.872A69.205333 69.205333 0 0 1 42.666667 954.794667V69.205333C42.666667 30.976 73.642667 0 111.872 0z",fill:"#4A4A4A","p-id":"18025"}),r.default.createElement("path",{d:"M661.333333 128a21.333333 21.333333 0 1 1 42.666667 0v160c0 65.706667-61.226667 117.333333-135.125333 117.333333H455.125333C381.226667 405.333333 320 353.706667 320 288V128a21.333333 21.333333 0 0 1 42.666667 0v160c0 40.362667 40.661333 74.666667 92.458666 74.666667h113.749334c51.797333 0 92.458667-34.304 92.458666-74.666667V128z",fill:"#4A4A4A","p-id":"18026"}))),d=r.default.createElement("i",{className:"anticon"},r.default.createElement("svg",{viewBox:"0 0 1024 1024","p-id":"9673",width:"20",height:"20"},r.default.createElement("path",{d:"M834.383448 34.109793H198.867862a141.241379 141.241379 0 0 0-141.241379 141.241379v496.357518a141.241379 141.241379 0 0 0 141.241379 141.241379H834.383448a141.241379 141.241379 0 0 0 141.24138-141.241379V175.351172a141.241379 141.241379 0 0 0-141.24138-141.241379z m-635.515586 70.62069H834.383448a70.62069 70.62069 0 0 1 70.62069 70.620689v496.357518a70.62069 70.62069 0 0 1-70.62069 70.620689H198.867862a70.62069 70.62069 0 0 1-70.62069-70.620689V175.351172a70.62069 70.62069 0 0 1 70.62069-70.620689z",fill:"#9CA2A8","p-id":"9674"}),r.default.createElement("path",{d:"M286.72 514.01269a35.310345 35.310345 0 0 1 35.310345 35.310344v99.751725a35.310345 35.310345 0 0 1-70.62069 0v-99.751725a35.310345 35.310345 0 0 1 35.310345-35.310344zM436.718345 456.951172a35.310345 35.310345 0 0 1 35.310345 35.310345v156.813242a35.310345 35.310345 0 1 1-70.62069 0v-156.777931a35.310345 35.310345 0 0 1 35.310345-35.310345zM586.752 483.116138a35.310345 35.310345 0 0 1 35.310345 35.310345v130.648276a35.310345 35.310345 0 1 1-70.62069 0v-130.648276a35.310345 35.310345 0 0 1 35.310345-35.310345zM736.785655 392.015448a35.310345 35.310345 0 0 1 35.310345 35.310345v221.748966a35.310345 35.310345 0 1 1-70.62069 0v-221.748966a35.310345 35.310345 0 0 1 35.310345-35.310345zM725.768828 202.575448a35.310345 35.310345 0 0 1 43.431724 55.507862l-3.531035 2.718897-143.289379 98.26869a35.310345 35.310345 0 0 1-28.601379 5.12l-4.131311-1.306483-144.948965-56.24938-152.293517 53.318621a35.310345 35.310345 0 0 1-43.431725-17.867034l-1.553655-3.813518a35.310345 35.310345 0 0 1 17.867035-43.431724l3.778207-1.553655 164.652138-57.555862a35.310345 35.310345 0 0 1 19.632551-1.094621l4.802207 1.483035L597.804138 290.251034l127.929379-87.675586zM837.278897 902.708966a35.310345 35.310345 0 0 1 4.13131 70.408827l-4.13131 0.211862h-632.055173a35.310345 35.310345 0 0 1-4.13131-70.373517l4.13131-0.247172h632.055173z",fill:"#9CA2A8","p-id":"9675"}))),u=[{name:"\u603b\u89c8",icon:"dashboard",path:"/enterprise/".concat(e,"/index"),authority:["admin","user"]},{name:"\u5e94\u7528\u5e02\u573a",icon:"share-alt",path:"/enterprise/".concat(e,"/shared/local"),authority:["admin","user"]}];if(s.default.isEnableBillingFunction()&&u.push({name:"\u8ba2\u8d2d",icon:o,path:"/enterprise/".concat(e,"/orders/overviewService"),authority:["admin","user"]}),u.push({name:"\u9879\u76ee/\u56e2\u961f",icon:"team",path:"/enterprise/".concat(e,"/teams"),authority:["admin","user"]}),i){if(u.push({name:"\u96c6\u7fa4",icon:n,path:"/enterprise/".concat(e,"/clusters"),authority:["admin","user"]},{name:"\u7528\u6237",icon:"user",path:"/enterprise/".concat(e,"/users"),authority:["admin","user"]}),a&&s.default.isEnableMonitoring(a)&&s.default.fetchMonitoring(a)){var c={slo_monitor_suffix:"\u670d\u52a1\u76d1\u63a7",cluster_monitor_suffix:"\u96c6\u7fa4\u76d1\u63a7",node_monitor_suffix:"\u8282\u70b9\u76d1\u63a7",component_monitor_suffix:"\u7ec4\u4ef6\u76d1\u63a7"},h=s.default.fetchMonitoring(a),p=[];Object.keys(h).map(e=>{"home_url"!==e&&p.push({name:c[e],path:"/".concat(e,"/dashboard"),authority:["admin","user"]})}),u.push({name:"\u76d1\u63a7",icon:d,path:"/enterprise/".concat(e,"/monitoring"),authority:["admin","user"],children:p})}u.push({name:"\u8bbe\u7f6e",icon:"setting",path:"/enterprise/".concat(e,"/setting"),authority:["admin","user"]})}return u}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;return e.map(e=>{var i=e.path;(0,o.isUrl)(i)||(i=t+e.path);var r=(0,n.default)({},e,{path:i,authority:e.authority||a});return e.children&&(r.children=u(e.children,"".concat(t).concat(e.path,"/"),e.authority)),r})}var c=(e,t,a)=>{var i=u(d(e,t,a));return i};t.getMenuData=c},uHcJ:function(e,t,a){"use strict";var i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fOrg");var r=i(a("+KLJ"));a("B9cy");var n=i(a("Ol7k")),s=i(a("TSYQ")),l=a("MuoO"),o=a("7DNP"),d=a("4zCG"),u=i(a("XaGS")),c=i(a("Wwog")),h=i(a("bALw")),p=i(a("17x9")),f=a("s4NR"),m=P(a("q1tI")),g=a("E6Dt"),v=i(a("ZFw/")),b=i(a("W2Kv")),y=a("W7L6"),w=i(a("/VoG")),E=i(a("NtFa")),M=i(a("h3zL")),C=i(a("CmFy")),x=i(a("5DSb")),L=i(a("xqX8")),_=i(a("AgvA")),N=i(a("IamK")),A=i(a("HZnN")),I=i(a("QDog")),W=i(a("mWxT")),k=i(a("+iC2")),z=i(a("2tDf")),S=i(a("R1Dz")),D=i(a("u95X"));function O(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=r?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(i,n,s):i[n]=e[n]}return i.default=e,a&&a.set(e,i),i}var R,T=n.default.Content,V=(0,c.default)(e=>{var t={},a=e=>{e.forEach(e=>{e.children&&a(e.children),t[e.path]=e})};return a(e),t},u.default),j={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200}};(0,d.enquireScreen)(e=>{R=e});class G extends m.PureComponent{constructor(e){super(e),this.handleGetEnterpeiseMsg=((e,t)=>{var a=this.props.dispatch,i=this.state.offLineDisNew;a({type:"global/fetchRainbondInfo",callback:r=>{if(r&&"false"!==r.is_offline&&(r.is_offline||"true"===r.is_offline))a({type:"global/putNewbieGuideConfig",payload:{arr:[...i]},callback:i=>{if(i){var r=W.default.isEnableNewbieGuide(e);a({type:"global/fetchNewbieGuideConfig",callback:e=>{e&&e.list&&3===e.list.length&&r&&a(o.routerRedux.push("/enterprise/".concat(t,"/clusters")))}})}},handleError:e=>{}});else{var n=W.default.isEnableNewbieGuide(e);n&&this.getNewbieGuideConfig(t)}},handleError:e=>{}})}),this.getEnterpriseList=(()=>{var e=this.props.dispatch;e({type:"global/fetchEnterpriseList",callback:e=>{if(e&&200===e.status_code){var t=!!(e.list&&e.list.length>0);this.setState({enterpriseList:e.list,ready:t},()=>{t?(this.redirectEnterpriseView(),this.load(),this.getAlertInfo()):this.handleJumpLogin()})}else this.handleJumpLogin()},handleError:()=>{this.handleJumpLogin()}})}),this.loadClusters=(e=>{var t=this.props,a=t.dispatch,i=t.currentUser;a({type:"region/fetchEnterpriseClusters",payload:{enterprise_id:e,check_status:"no"},callback:t=>{var r=k.default.isCompanyAdmin(i);t&&t.list&&0===t.list.length&&r&&a(o.routerRedux.push("/enterprise/".concat(e,"/shared/local?init=true")))}})}),this.load=(()=>{(0,d.enquireScreen)(e=>{this.setState({isMobile:e})})}),this.getChildContext=(()=>{var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}),this.matchParamsPath=(e=>{var t=Object.keys(this.breadcrumbNameMap).find(t=>{return(0,h.default)(t).test(e)});return this.breadcrumbNameMap[t]}),this.handleMenuCollapse=(e=>{var t=this.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})}),this.handleJumpLogin=(()=>{var e=this.props.dispatch;e(o.routerRedux.push("/user/login"))}),this.redirectEnterpriseView=(()=>{var e=this.props,t=e.dispatch,a=e.currentUser,i=e.rainbondInfo,r=e.match.params.eid,n=this.state.enterpriseList;if((!r||"auto"===r)&&n.length>0){var s=null;n.map(e=>{return e.enterprise_id===a.enterprise_id&&(s=e),e}),null==s&&(s=n[0]),this.handlePutLog(i,s),this.fetchEnterpriseInfo(s.enterprise_id),this.setState({enterpriseInfo:s}),t(o.routerRedux.replace("/enterprise/".concat(s.enterprise_id,"/index")))}else n.map(e=>{return e.enterprise_id===r&&(this.fetchEnterpriseInfo(r),this.handlePutLog(i,e),this.setState({enterpriseInfo:e})),e})}),this.handlePutLog=((e,t)=>{I.default.putLog(Object.assign(e,t))}),this.getNewbieGuideConfig=(e=>{var t=this.props.dispatch;t({type:"global/fetchNewbieGuideConfig",callback:t=>{var a=W.default.handleNewbie(t&&t.list,"welcome");a&&this.loadClusters(e)}})}),this.fetchEnterpriseInfo=(e=>{if(!e)return null;var t=this.props.dispatch;t({type:"global/fetchEnterpriseInfo",payload:{enterprise_id:e},callback:t=>{t&&t.bean&&this.handleGetEnterpeiseMsg(t.bean,e)}})}),this.fetchEnterpriseService=(e=>{var t=this.props.dispatch;t({type:"order/fetchEnterpriseService",payload:{enterprise_id:e}})}),this.getAlertInfo=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"global/getRainbondAlert",payload:{enterprise_id:a},callback:e=>{e&&e.bean&&e.list.length>0&&this.setState({alertInfo:e.list})},handleError:e=>{console.log(e)}})}),this.breadcrumbNameMap=V((0,y.getMenuData)(this.props.groups)),this.state={isMobile:R,enterpriseList:[],enterpriseInfo:!1,ready:!1,alertInfo:[],offLineDisNew:[{key:"welcome",value:!0},{key:"applicationInfo",value:!0},{key:"installApp",value:!0}]}}componentDidMount(){this.getEnterpriseList()}getContext(){var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}render(){var e=this.props,t=e.memoryTip,a=e.currentUser,i=e.collapsed,l=e.location,d=e.location.pathname,u=e.match.params.eid,c=e.orders,h=e.children,p=e.rainbondInfo,I=e.enterprise,k=e.showAuthCompany,O=this.state,P=O.enterpriseList,R=O.enterpriseInfo,V=O.ready,G=O.alertInfo,H=i?"calc(100% - 416px)":"calc(100% - 116px)",q=W.default.isEnableBillingFunction(),U=(0,f.stringify)({redirect:window.location.href});if(!V||!R)return m.default.createElement(L.default,null);if(!a||!p||0===P.length)return m.default.createElement(o.Redirect,{to:"/user/login?".concat(U)});var J=W.default.fetchLogo(p,I)||b.default,B=()=>{return m.default.createElement("div",{className:M.default.enterprise},I&&I.enterprise_alias||R&&R.enterprise_alias)},F=()=>{return m.default.createElement(n.default,null,m.default.createElement(N.default,{currentEnterprise:R,enterpriseList:P,currentUser:a,logo:J,Authorized:A.default,collapsed:i,location:l,isMobile:this.state.isMobile,onCollapse:this.handleMenuCollapse}),m.default.createElement(n.default,null,m.default.createElement(E.default,{eid:u,logo:J,isPubCloud:p&&p.is_public&&p.is_public.enable,currentUser:a,collapsed:i,onCollapse:this.handleMenuCollapse,isMobile:this.state.isMobile,customHeader:B}),m.default.createElement(n.default,{style:{flexDirection:"row"}},m.default.createElement(C.default,{currentEnterprise:R,enterpriseList:P,title:p&&p.title&&p.title.enable&&p.title.value,currentUser:a,Authorized:A.default,menuData:(0,y.getMenuData)(u,a,I),showMenu:!0,pathname:d,location:l,isMobile:this.state.isMobile,collapsed:i,onCollapse:this.handleMenuCollapse}),m.default.createElement(T,{key:u,style:{height:"calc(100vh - 64px)",overflow:"auto",width:H}},G.length>0&&G.map(e=>{return m.default.createElement("div",{className:D.default.alerts},m.default.createElement(r.default,{style:{textAlign:"left",marginTop:"4px",marginBottom:"4px",color:"#c40000",background:"#fff1f0",border:" 1px solid red"},message:e.annotations.description,type:"warning",showIcon:!0}))}),m.default.createElement("div",{style:{margin:"24px 24px 0"}},m.default.createElement(A.default,{logined:!0,authority:["admin","user"],noMatch:m.default.createElement(o.Redirect,{to:"/user/login"})},h))))))},X=W.default.fetchSiteTitle(p);return m.default.createElement(m.Fragment,null,m.default.createElement(v.default,{title:X},m.default.createElement(g.ContainerQuery,{query:j},e=>m.default.createElement(S.default.Provider,{value:this.getContext()},m.default.createElement("div",{className:(0,s.default)(e)},F())))),m.default.createElement(x.default,null),k&&m.default.createElement(w.default,{eid:u,marketName:k,currStep:0}),t&&m.default.createElement(z.default,{memoryTip:t}),c&&q&&m.default.createElement(_.default,{eid:u,orders:c}))}}G.childContextTypes={location:p.default.object,breadcrumbNameMap:p.default.object,currRegion:p.default.string,currTeam:p.default.string};var H=(0,l.connect)(e=>{var t=e.user,a=e.global,i=e.index,r=e.loading;return{currentUser:t.currentUser,notifyCount:t.notifyCount,collapsed:a.collapsed,groups:a.groups,fetchingNotices:r.effects["global/fetchNotices"],notices:a.notices,currTeam:I.default.getCurrTeamName(),currRegion:I.default.getCurrRegionName(),rainbondInfo:a.rainbondInfo,payTip:a.payTip,memoryTip:a.memoryTip,noMoneyTip:a.noMoneyTip,showAuthCompany:a.showAuthCompany,orders:a.orders,overviewInfo:i.overviewInfo,nouse:a.nouse,enterprise:a.enterprise}})(G);t.default=H}}]);