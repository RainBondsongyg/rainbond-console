(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{jH8a:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("MuoO"),r=a("7DNP"),o=l(a("q1tI")),i=l(a("rkhD")),s=l(a("W2Kv")),u=l(a("QDog")),d=l(a("tH/r")),c=l(a("mWxT")),f=l(a("ZShK")),h=l(a("BOD2"));class p extends o.default.PureComponent{constructor(e){super(e),this.isRender=(e=>{this.setState({isRender:e})}),this.state={isRender:!1}}componentWillMount(){var e=this.props.dispatch;e({type:"global/fetchRainbondInfo",callback:e=>{if(e){u.default.putLog(e);var t=this.props.location.query,a="/user/login"===this.props.location.pathname;if(a){var l=t.redirect;l&&window.localStorage.setItem("redirect",l)}var n=c.default.OauthbEnable(e)||c.default.OauthEnterpriseEnable(e),r=e.enterprise_center_oauth&&e.enterprise_center_oauth.value;if(!r&&e.oauth_services&&e.oauth_services.value&&e.oauth_services.value.map(e=>{return e.is_auto_login&&(r=e),null}),n&&r&&a){var o=t.disable_auto_login;r.is_auto_login&&"true"!==o&&(u.default.removeCookie(),window.location.href=d.default.getAuthredictURL(r)),this.isRender(!r.is_auto_login)}else this.isRender(!0)}}})}render(){var e=this.props,t=e.rainbondInfo,a=e.children,l=this.state.isRender,n=c.default.fetchLogo(t)||s.default,u=c.default.isEnterpriseEdition(t);return t&&l?o.default.createElement("div",{className:h.default.container},o.default.createElement("div",{className:h.default.headers},o.default.createElement("div",{className:h.default.logo},o.default.createElement(r.Link,{to:"/"},o.default.createElement("img",{src:n,alt:"LOGO"})))),o.default.createElement("div",{className:h.default.content},o.default.createElement("div",{className:h.default.contentBox},o.default.createElement("div",{className:h.default.contentBoxLeft},o.default.createElement("img",{src:i.default,alt:"\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0"})),o.default.createElement("div",{className:h.default.contentBoxRight},a))),!u&&o.default.createElement(f.default,null)):null}}var m=(0,n.connect)(e=>{var t=e.global;return{rainbondInfo:t.rainbondInfo}})(p);t.default=m},rkhD:function(e,t,a){e.exports=a.p+"static/cloud.fdefbf75.png"}}]);