(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"1cUz":function(t,e,a){t.exports={antd_row:"antd_row___22Eih",antd_form:"antd_form___3vT_u",antd_row_btn:"antd_row_btn___M_ybW",antd_btn:"antd_btn___HnUHl",lists:"lists___PLy7p"}},tYjc:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("T2oS");var n=r(a("W9HT"));a("IzEo");var s=r(a("bx4M"));a("14J3");var i=r(a("BMrR"));a("+L6B");var l=r(a("2/Rp"));a("FJo9");var o=r(a("L41K"));a("y8nQ");var d,u,c,p=r(a("Vl3Y")),f=a("MuoO"),h=a("7DNP"),m=r(a("Qyje")),y=E(a("q1tI")),_=r(a("3a4m")),g=r(a("ALo4")),v=r(a("XZXw")),b=r(a("+iC2")),k=r(a("1cUz"));function w(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(w=function(t){return t?a:e})(t)}function E(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var a=w(e);if(a&&a.has(t))return a.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var i=n?Object.getOwnPropertyDescriptor(t,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=t[s]}return r.default=t,a&&a.set(t,r),r}p.default.Item;var L=o.default.Step,S=(d=p.default.create(),u=(0,f.connect)(t=>{var e=t.user,a=t.list,r=t.loading,n=t.global,s=t.index;return{user:e.currentUser,list:a,loading:r.models.list,rainbondInfo:n.rainbondInfo,enterprise:n.enterprise,isRegist:n.isRegist,oauthLongin:r.effects["global/creatOauth"],overviewInfo:s.overviewInfo}}),d(c=u(c=class extends y.PureComponent{constructor(t){super(t),this.getRegionLength=(()=>{var t=this.props,e=t.dispatch,a=t.match.params.eid,r=this.state.token;e({type:"region/fetchHelmJoinStatus",payload:{eid:a,token:r},callback:t=>{200===t.status_code&&this.setState({flagStatus:!0,status:t.response_data.msg})}})}),this.loadSteps=(()=>{var t=[{title:"\u57fa\u672c\u914d\u7f6e"},{title:"\u9ad8\u7ea7\u914d\u7f6e"},{title:"\u6267\u884c\u5b89\u88c5"},{title:"\u5bf9\u63a5\u96c6\u7fa4"}];return t}),this.toLinkNext=(t=>{var e=this.props,a=e.dispatch,r=e.match.params.eid,n=this.state,s=n.data,i=n.copy,l=n.token,o=n.name,d=n.step;"install"===t?_.default.push({pathname:"/enterprise/".concat(r,"/provider/ACksterList/install"),search:m.default.stringify({data:s,copy:i,token:l,name:o,step:d,isResult:!0})}):"finish"===t&&a(h.routerRedux.push("/enterprise/".concat(r,"/clusters")))}),this.refreshStatus=(()=>{this.setState({flagStatus:!1}),this.getRegionLength()}),this.renderBody=(()=>{var t=this.state.status,e="",a="",r="",n=[];return"success"===t&&(e="success",a="\u96c6\u7fa4\u5bf9\u63a5\u6210\u529f",r="\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u67e5\u770b\u5f53\u524d\u5bf9\u63a5\u7684\u96c6\u7fa4",n=[y.default.createElement(l.default,{className:k.default.antd_btn,onClick:()=>{this.toLinkNext("finish")},type:"primary"},"\u5b8c\u6210")]),"failed"===t&&(e="error",a="\u5f53\u524d\u96c6\u7fa4\u5bf9\u63a5\u5931\u8d25",r="\u53ef\u80fd\u670d\u52a1\u5668\u547d\u4ee4\u8fd8\u6ca1\u6709\u6267\u884c\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u201c\u5237\u65b0\u8fdb\u5ea6\u201d\u6216\u53bb\u670d\u52a1\u5668\u6267\u884c\u201c watch kubectl get po -n rbd-system \u201d\u547d\u4ee4\uff0c\u67e5\u770bPod\u72b6\u6001\u3002",n=[y.default.createElement(l.default,{className:k.default.antd_btn,onClick:()=>{this.toLinkNext("install")},type:"primary"},"\u4e0a\u4e00\u6b65"),y.default.createElement(l.default,{onClick:()=>{this.refreshStatus()},className:k.default.antd_btn,type:"primary"},"\u5237\u65b0\u8fdb\u5ea6")]),y.default.createElement(g.default,{className:k.default.lists,type:e,title:a,actions:n,description:y.default.createElement("div",null,r)})});var e=this.props,a=e.user,r=e.location.search,n=m.default.parse(r.substr(1))||{},s=n.data,i=n.token,o=n.copy,d=n.name,u=n.step,c=b.default.isCompanyAdmin(a);this.state={adminer:c,status:"failed",flagStatus:!1,data:s,token:i,copy:o,name:d,step:u}}componentWillMount(){var t=this.state.adminer,e=this.props.dispatch;t||e(h.routerRedux.push("/"))}componentDidMount(){this.getRegionLength()}render(){var t=this.props.match.params,e=(t.eid,t.provider,t.clusterID,this.state.flagStatus);this.props.form.getFieldDecorator;return y.default.createElement(v.default,{title:"\u6dfb\u52a0\u96c6\u7fa4",content:"\u96c6\u7fa4\u662f\u8d44\u6e90\u7684\u96c6\u5408\uff0c\u4ee5Kubernetes\u96c6\u7fa4\u4e3a\u57fa\u7840\uff0c\u90e8\u7f72\u5e73\u53f0Region\u670d\u52a1\u5373\u53ef\u6210\u4e3a\u5e73\u53f0\u96c6\u7fa4\u8d44\u6e90\u3002"},y.default.createElement(i.default,{style:{marginBottom:"16px"}},y.default.createElement(o.default,{current:3},this.loadSteps().map(t=>y.default.createElement(L,{key:t.title,title:t.title})))),y.default.createElement(s.default,{style:{padding:"24px"}},!e&&y.default.createElement(n.default,{tip:"Loading..."},y.default.createElement(s.default,{bordered:!1},this.renderBody())),e&&y.default.createElement(s.default,{bordered:!1},this.renderBody())))}})||c)||c);e.default=S}}]);