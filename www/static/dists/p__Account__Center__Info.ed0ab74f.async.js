(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"51Hh":function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("lUTK");var n,i,l,c=s(a("BvKs")),o=r(a("q1tI")),d=a("MuoO"),u=s(a("3a4m")),h=a("LLXN"),m=s(a("mWxT")),p=s(a("vFwn")),f=c.default.Item,g=(n=(0,d.connect)(e=>{var t=e.user,a=e.global;return{currentUser:t.currentUser,enterprise:a.enterprise}}),n((l=class extends o.Component{constructor(e){super(e),this.getmenu=(()=>{var e=this.state.menuMap;return Object.keys(e).map(t=>o.default.createElement(f,{key:t},e[t]))}),this.getRightTitle=(()=>{var e=this.state,t=e.selectKey,a=e.menuMap;return a[t]}),this.selectKey=(e=>{var t=e.key;u.default.push("/account/center/".concat(t)),this.setState({selectKey:t})});var t=e.match,a=e.location,s=e.enterprise,r=e.currentUser,n=m.default.OauthEnterpriseEnable(s),i=r.oauth_services&&r.oauth_services.length>0&&r.oauth_services,l=n&&i,c={};l&&(c.binding=o.default.createElement(h.FormattedMessage,{id:"app.settings.menuMap.binding",defaultMessage:"Account Binding"})),c.accesstoken=o.default.createElement(h.FormattedMessage,{id:"app.settings.menuMap.access-token",defaultMessage:"Access Token"});var d=a.pathname.replace("".concat(t.path,"/"),"");this.state={mode:"inline",menuMap:c,selectKey:c[d]?d:l?"binding":"accesstoken"}}static getDerivedStateFromProps(e,t){var a=e.match,s=e.location,r=e.match.params.eid,n=a.path.replace(/:eid/g,r),i=s.pathname.replace("".concat(n,"/"),"");return i=t.menuMap[i]?i:"binding",i!==t.selectKey?{selectKey:i}:null}render(){var e=this.props.children,t=this.state,a=t.mode,s=t.selectKey;return o.default.createElement("div",{className:p.default.main},o.default.createElement("div",{className:p.default.leftmenu},o.default.createElement(c.default,{mode:a,selectedKeys:[s],onClick:this.selectKey},this.getmenu())),o.default.createElement("div",{className:p.default.right},o.default.createElement("div",{className:p.default.title},this.getRightTitle()),e))}},i=l))||i),v=g;t.default=v},Nh26:function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n,i,l=s(a("VXEj")),c=a("MuoO"),o=r(a("q1tI")),d=a("LLXN"),u=s(a("tH/r")),h=s(a("mWxT")),m=(n=(0,c.connect)(e=>{var t=e.user,a=e.global,s=e.appControl;return{currUser:t.currentUser,rainbondInfo:a.rainbondInfo,enterprise:a.enterprise,appDetail:s.appDetail}}),n(i=class extends o.Component{render(){var e=this.props,t=e.currUser,a=e.enterprise;if(!t)return null;var s=h.default.OauthEnterpriseEnable(a),r=t.oauth_services&&t.oauth_services.length>0&&t.oauth_services,n=a&&s&&r||[];return o.default.createElement(o.Fragment,null,o.default.createElement(l.default,{itemLayout:"horizontal",dataSource:n,renderItem:e=>{var t=e.service_name,a=e.is_authenticated,s=e.oauth_user_name,r=e.is_expired,n=e.oauth_type,i=u.default.getAuthredictURL(e),c="";return a?c="".concat((0,d.formatMessage)({id:"otherEnterprise.BindingView.Certified"})):r&&(c="".concat((0,d.formatMessage)({id:"otherEnterprise.BindingView.Expired"}))),o.default.createElement(l.default.Item,{actions:[o.default.createElement("span",{style:{color:a?"green":"#4d73b1"}},a?c:i&&o.default.createElement("a",{rel:"noreferrer",href:"".concat(i,"&&type=certification"),target:"_blank"},c||"".concat((0,d.formatMessage)({id:"otherEnterprise.BindingView.De_certification"}))))]},o.default.createElement(l.default.Item.Meta,{avatar:u.default.getIcon(e,"48px"),title:t,description:o.default.createElement("div",null,(0,d.formatMessage)({id:"otherEnterprise.BindingView.now"}),c||"".concat((0,d.formatMessage)({id:"otherEnterprise.BindingView.Not_certified"})),s||n,(0,d.formatMessage)({id:"otherEnterprise.BindingView.number"}))}))}}))}})||i),p=m;t.default=p},gEbF:function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var n=s(a("wCAj"));a("14J3");var i=s(a("BMrR"));a("+L6B");var l=s(a("2/Rp"));a("fOrg");var c=s(a("+KLJ"));a("/xke");var o,d,u,h=s(a("TeRw")),m=a("MuoO"),p=s(a("wd/R")),f=r(a("q1tI")),g=a("LLXN"),v=s(a("sv7o")),k=s(a("q76B")),E=(o=(0,m.connect)(e=>{var t=e.loading;return{deleteAccessLoading:t.effects["user/deleteAccessToke"]}}),o((u=class extends f.Component{constructor(e){super(e),this.onCanceAccessToken=(()=>{this.setState({openDeleteAccessToken:!1,ID:""})}),this.loadAccessTokenList=(()=>{var e=this.props.dispatch;e({type:"user/fetchAccessToken",callback:e=>{e&&200===e.status_code&&this.setState({dataSource:e.list})}})}),this.handleDeleteAccessToken=(()=>{var e=this.props.dispatch,t=this.state.ID;e({type:"user/deleteAccessToke",payload:{user_id:t},callback:e=>{e&&200===e.status_code&&(h.default.success({message:(0,g.formatMessage)({id:"notification.success.delete"})}),this.loadAccessTokenList(),this.onCanceAccessToken())}})}),this.addAccessToken=(()=>{this.setState({visible:!0})}),this.handleCancel=(()=>{this.setState({visible:!1,ID:""})}),this.openDeleteAccessToken=(e=>{this.setState({ID:e,openDeleteAccessToken:!0})}),this.handleRegenerateAccessToken=(e=>{this.setState({ID:e,visible:!0})}),this.disabledDate=(e=>{return e&&e<(0,p.default)().endOf("day")}),this.disabledDateTime=(()=>{return{disabledHours:()=>this.range(0,24).splice(4,20),disabledMinutes:()=>this.range(30,60),disabledSeconds:()=>[55,56]}}),this.range=((e,t)=>{for(var a=[],s=e;s<t;s++)a.push(s);return a}),this.handleSubmit=(()=>{this.loadAccessTokenList(),this.handleCancel()}),this.handleExpireTime=(e=>{var t="",a=e?"".concat(e):"";return e&&10===a.length?(t=new Date(1e3*parseInt(e)),t):e&&13===a.length?(t=new Date(parseInt(e)),t):null}),this.state={dataSource:[],openDeleteAccessToken:!1,ID:"",visible:!1}}componentDidMount(){this.loadAccessTokenList()}render(){var e=this.props.deleteAccessLoading,t=this.state,a=t.dataSource,s=t.openDeleteAccessToken,r=t.visible,o=t.ID,d=[{title:(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.note"}),dataIndex:"note",key:"note",width:"30%"},{title:(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.expire_time"}),dataIndex:"expire_time",key:"expire_time",width:"25%",render:e=>{var t=this.handleExpireTime(e);return t?(0,p.default)(t).locale("zh-cn").format("YYYY-MM-DD HH:mm:ss"):"".concat((0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.Unlimited"}))}},{title:(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.user_id"}),dataIndex:"user_id",key:"user_id",width:"20%",render:(e,t)=>{var a=this.handleExpireTime(t.expire_time),s=(0,p.default)().valueOf(),r=!!a&&s>=a;return f.default.createElement(f.Fragment,null,f.default.createElement("div",{style:{color:r?"#f81d22":" #0b8235"}},r?f.default.createElement(g.FormattedMessage,{id:"otherEnterprise.AccesstokenView.overdue"}):f.default.createElement(g.FormattedMessage,{id:"otherEnterprise.AccesstokenView.normal"})))}},{title:(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.var"}),dataIndex:"var",width:"20%",render:(e,t)=>f.default.createElement(f.Fragment,null,f.default.createElement("a",{onClick:()=>this.openDeleteAccessToken(t.ID),style:{margintRight:10}},(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.delete"})),f.default.createElement("a",{onClick:()=>{this.handleRegenerateAccessToken(t.ID)},style:{margintRight:10}},(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.Regenerate"})))}];return f.default.createElement(f.Fragment,null,f.default.createElement(c.default,{message:(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.api"}),type:"info",showIcon:!0,style:{margin:"20px"}}),f.default.createElement(i.default,{style:{textAlign:"right"}},f.default.createElement(l.default,{style:{margin:"0  5px 20px 0"},type:"primary",onClick:this.addAccessToken},(0,g.formatMessage)({id:"otherEnterprise.AccesstokenView.add"}))),f.default.createElement(n.default,{dataSource:a,columns:d,pagination:!1}),r&&f.default.createElement(v.default,{onOk:this.handleSubmit,onCancel:this.handleCancel,ID:o}),s&&f.default.createElement(k.default,{title:(0,g.formatMessage)({id:"confirmModal.token.delete.title"}),desc:(0,g.formatMessage)({id:"confirmModal.delete.token.desc"}),loading:e,onCancel:this.onCanceAccessToken,onOk:this.handleDeleteAccessToken}))}},d=u))||d),A=E;t.default=A},sv7o:function(e,t,a){"use strict";var s=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var n=s(a("kLXV"));a("iQDF");var i=s(a("+eQT")),l=s(a("jehZ"));a("5NDa");var c=s(a("5rEg"));a("fOrg");var o=s(a("+KLJ"));a("/xke");var d=s(a("TeRw"));a("tU7J");var u=s(a("wFql"));a("y8nQ");var h,m,p,f,g=s(a("Vl3Y")),v=a("MuoO"),k=s(a("wd/R")),E=r(a("q1tI")),A=a("LLXN"),b=s(a("e6Ls")),M=g.default.Item,y=u.default.Paragraph,_=(h=g.default.create(),m=(0,v.connect)(),h(p=m((f=class extends E.PureComponent{constructor(e){super(e),this.handleSubmit=(()=>{var e=this.props,t=e.form,a=e.onOk,s=this.state.accessKey;if(s)return a(),this.handleCloneAccessKey(),null;t.validateFields((e,t)=>{if(!e){if(t.age){var a=(0,k.default)(t.age).valueOf(),s=(0,k.default)().valueOf();t.age=(0,k.default)(a).diff((0,k.default)(s),"seconds")}this.addAccesstoken(t)}})}),this.handleAccesstokenCallback=(e=>{e&&200===e.status_code&&this.setState({accessKey:e.bean.access_key}),this.setState({loading:!1})}),this.addAccesstoken=(e=>{var t=this.props.dispatch;this.setState({loading:!0}),t({type:"user/addAccessToken",payload:e,callback:e=>{this.handleAccesstokenCallback(e)},handleError:e=>{e&&e.data&&e.data.msg_show&&d.default.warning({message:e.data.msg_show}),this.setState({loading:!1})}})}),this.putAccesstoken=(e=>{var t=this.props.dispatch;this.setState({loading:!0}),t({type:"user/putAccessToken",payload:{user_id:e},callback:e=>{this.handleAccesstokenCallback(e)}})}),this.disabledDate=(e=>{return e&&e<(0,k.default)().endOf("day")}),this.disabledDateTime=(()=>{return{disabledHours:()=>this.range(0,24).splice(4,20),disabledMinutes:()=>this.range(30,60),disabledSeconds:()=>[55,56]}}),this.range=((e,t)=>{for(var a=[],s=e;s<t;s++)a.push(s);return a}),this.handleCloneAccessKey=(()=>{this.setState({accessKey:!1});var e=this.props,t=e.onOk,a=e.onCancel,s=this.state.accessKey;s?t():a()}),this.state={accessKey:!1,loading:!1}}componentDidMount(){var e=this.props.ID;e&&this.putAccesstoken(e)}render(){var e=this.props,t=e.form,a=e.ID,s=t.getFieldDecorator,r=this.state,d=r.loading,u=r.accessKey,h={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}};return E.default.createElement(n.default,{visible:!0,confirmLoading:d,maskClosable:!1,className:b.default.TelescopicModal,title:a||u?(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.save"}):(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.add"}),onOk:this.handleSubmit,onCancel:this.handleCloneAccessKey},a||u?E.default.createElement(E.Fragment,null,E.default.createElement(o.default,{message:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.be_careful"}),type:"info",showIcon:!0,style:{marginBottom:"20px"}}),E.default.createElement(o.default,{message:E.default.createElement(y,{style:{marginBottom:"0"},copyable:!0},u),style:{marginBottom:"20px"},type:"success"})):E.default.createElement(E.Fragment,null,E.default.createElement(M,(0,l.default)({},h,{label:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.purpose"})}),s("note",{rules:[{required:!0,message:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.input_purpose"})},{max:32,message:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.max"})}],initialValue:""})(E.default.createElement(c.default,{placeholder:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.input_purpose"})}))),E.default.createElement(M,(0,l.default)({},h,{label:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.time"})}),s("age",{rules:[{required:!1,message:(0,A.formatMessage)({id:"otherEnterprise.AccesstokenForm.import_time"})}],initialValue:""})(E.default.createElement(i.default,{style:{width:"100%"},format:"YYYY-MM-DD HH:mm:ss",disabledDate:this.disabledDate,disabledTime:this.disabledDateTime,showTime:{defaultValue:(0,k.default)("00:00:00","HH:mm:ss")}})))))}},p=f))||p)||p),w=_;t.default=w},vFwn:function(e,t,a){e.exports={main:"main___12-o4",leftmenu:"leftmenu___1g3zt",right:"right___L1Wpz",title:"title___3oSLP"}}}]);