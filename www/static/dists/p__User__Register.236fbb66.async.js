(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{cq3J:function(e,t,a){"use strict";var r=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var n,d,i,o=r(a("TeRw")),l=r(a("p0pE")),u=a("MuoO"),p=a("7DNP"),c=s(a("q1tI")),f=r(a("AklW")),g=r(a("mWxT")),h=r(a("5WY0")),m=r(a("dYZ0")),b=(n=(0,u.connect)(e=>{var t=e.user,a=e.global;return{register:t.register,rainbondInfo:a.rainbondInfo,isRegist:a.isRegist}}),n((i=class extends c.Component{constructor(){super(...arguments),this.state={},this.handleSubmit=(e=>{var t=this.props.dispatch;t({type:"user/register",payload:(0,l.default)({},e),complete:()=>{},handleError:e=>{e&&e.data&&e.data.code&&e.data.code<600&&e.data.msg_show?o.default.warning({message:e.data.msg_show}):f.default.handleCloudAPIError(e)}})})}render(){var e=this.props,t=e.isRegist,a=e.dispatch,r=e.rainbondInfo;if(!t)return a(p.routerRedux.replace("/user/login")),null;var s=!g.default.fetchIsFirstRegist(r);return c.default.createElement("div",{className:h.default.main,style:{marginTop:"37px"}},c.default.createElement("h3",null,s?"\u7ba1\u7406\u5458\u6ce8\u518c":"\u7528\u6237\u6ce8\u518c"),c.default.createElement(m.default,{onSubmit:this.handleSubmit,type:"register"}))}},d=i))||d);t.default=b}}]);