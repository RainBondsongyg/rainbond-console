(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"1nZ5":function(e,t,a){"use strict";var i=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=i(a("bx4M"));a("g9YV");var l=i(a("wCAj"));a("+L6B");var n=i(a("2/Rp"));a("14J3");var d=i(a("BMrR"));a("/xke");var o=i(a("TeRw"));a("tU7J");var c,u,p,m=i(a("wFql")),h=s(a("q1tI")),f=a("MuoO"),g=i(a("XZXw")),y=i(a("SKd/")),v=a("vSx2"),b=i(a("QDog")),_=i(a("hMqj")),k=m.default.Paragraph,w=(c=(0,f.connect)(e=>{var t=e.user,a=e.teamControl,i=e.enterprise;return{currUser:t.currentUser,currentTeam:a.currentTeam,currentRegionName:a.currentRegionName,currentEnterprise:i.currentEnterprise,currentTeamPermissionsInfo:a.currentTeamPermissionsInfo}}),c((p=class extends h.Component{constructor(e){super(e),this.onPageChange=(e=>{this.setState({licenseLoading:!0}),this.setState({page:e},()=>{this.load()})}),this.rowKey=((e,t)=>t),this.load=(()=>{var e=this.state,t=e.page,a=e.pageSize;this.props.dispatch({type:"gateWay/fetchAllLicense",payload:{team_name:b.default.getCurrTeamName(),page_num:t,page_size:a},callback:e=>{e&&200==e._code&&this.setState({licenseList:e.list,total:e.bean.nums,editData:"",licenseLoading:!1})}})}),this.handleCick=(()=>{this.setState({visibleDrawer:!0})}),this.handleClose=(()=>{this.setState({visibleDrawer:!1,editData:""})}),this.handleOk=(e=>{var t=this.state.editData;t?this.props.dispatch({type:"gateWay/editLicense",payload:{alias:e.alias,private_key:e.private_key,certificate:e.certificate,certificate_type:e.certificate_type,team_name:b.default.getCurrTeamName(),certifiate_id:this.state.id},callback:e=>{e&&200==e._code&&(o.default.success({message:e?"\u4fee\u6539\u6210\u529f":"\u4fee\u6539\u5931\u8d25"}),this.setState({visibleDrawer:!1},()=>{this.load()}))}}):this.props.dispatch({type:"gateWay/addLicense",payload:{alias:e.alias,private_key:e.private_key,certificate:e.certificate,certificate_type:e.certificate_type,team_name:b.default.getCurrTeamName()},callback:e=>{e&&200==e._code&&(o.default.success({message:"\u6dfb\u52a0\u6210\u529f"}),this.setState({visibleDrawer:!1},()=>{this.load()}))}})}),this.handleDelete=(e=>{this.props.dispatch({type:"gateWay/deleteLicense",payload:{team_name:b.default.getCurrTeamName(),certifiate_id:e.id},callback:e=>{e&&200==e._code&&(o.default.success({message:e&&e.msg_show||"\u5220\u9664\u6210\u529f"}),this.load())}})}),this.handleEdit=(e=>{this.props.dispatch({type:"gateWay/queryDetail",payload:{certifiate_id:e.id,team_name:b.default.getCurrTeamName()},callback:e=>{e&&200==e._code&&this.setState({visibleDrawer:!0,editData:e.bean,id:e.bean.id})}})}),this.saveForm=(e=>{this.form=e,this.state.editData&&this.form&&this.form.setFieldsValue(this.state.editData)}),this.handleUpdate=(e=>{console.log(e)}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return _.default.querySpecifiedPermissionsInfo(t,e)}),this.state={visibleDrawer:!1,licenseList:[],licenseLoading:!0,page:1,pageSize:10,total:"",editData:"",id:"",operationPermissions:this.handlePermissions("queryCertificateInfo")}}componentWillMount(){var e=this.props.dispatch,t=this.state.operationPermissions.isAccess;t?this.load():b.default.withoutPermission(e)}render(){var e=this.props,t=e.currentEnterprise,a=e.currentTeam,i=e.currentRegionName,s=this.state,o=s.page,c=s.pageSize,u=s.total,p=s.licenseList,m=s.operationPermissions,f=m.isCreate,b=m.isEdit,_=m.isDelete,w=[{title:"\u8bc1\u4e66\u540d\u79f0",dataIndex:"alias",key:"alias",align:"center",width:"12%"},{title:"\u8bc1\u4e66\u5730\u5740",dataIndex:"issued_to",key:"issued_to",align:"center",width:"25%",render:e=>{return h.default.createElement(k,{ellipsis:{rows:2,expandable:!0}},e&&e.map(e=>{return h.default.createElement(d.default,{key:e},h.default.createElement(k,{copyable:!0},e))}))}},{title:"\u8fc7\u671f\u65f6\u95f4",dataIndex:"end_data",key:"end_data",align:"center",width:"20%",render:(e,t)=>{return h.default.createElement("div",{style:{color:t.has_expired?"red":" rgba(0, 0, 0, 0.65)"}},e)}},{title:"\u8bc1\u4e66\u7c7b\u578b",dataIndex:"certificate_type",key:"certificate_type",align:"center",width:"13%"},{title:"\u8bc1\u4e66\u6765\u6e90",dataIndex:"issued_by",key:"issued_by",align:"center",width:"15%"},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"center",width:"15%",render:(e,t)=>{return h.default.createElement("span",null,b&&h.default.createElement("a",{style:{marginRight:"10px"},onClick:()=>{this.handleEdit(t)}},"\u7f16\u8f91"),!t.issued_by.includes("\u7b2c\u4e09\u65b9\u7b7e\u53d1")&&b&&h.default.createElement("a",{style:{marginRight:"10px"},onClick:()=>{this.handleUpdate(t)}},"\u66f4\u65b0"),_&&h.default.createElement("a",{onClick:()=>{this.handleDelete(t)}},"\u5220\u9664"))}}],E=[];return E=(0,v.createTeam)((0,v.createEnterprise)(E,t),a,i),E.push({title:"\u7f51\u5173\u7ba1\u7406"}),h.default.createElement(g.default,{title:"\u8bc1\u4e66\u7ba1\u7406",breadcrumbList:E,content:"TLS\u8bc1\u4e66\u7ba1\u7406\uff0c\u652f\u6301\u670d\u52a1\u7aef\u8bc1\u4e66\uff0c\u652f\u6301\u5c55\u793a\u8bc1\u4e66\u8fc7\u671f\u65f6\u95f4"},h.default.createElement(d.default,null,f&&h.default.createElement(n.default,{type:"primary",icon:"plus",style:{float:"right",marginBottom:"10px"},onClick:this.handleCick},"\u6dfb\u52a0\u8bc1\u4e66")),h.default.createElement(r.default,{bodyStyle:{padding:"0"}},h.default.createElement(l.default,{pagination:{total:u,page_num:o,pageSize:c,onChange:this.onPageChange,current:o},rowKey:this.rowKey,dataSource:p,columns:w,loading:this.state.licenseLoading})),this.state.visibleDrawer&&h.default.createElement(y.default,{ref:this.saveForm,visible:this.state.visibleDrawer,onClose:this.handleClose,onOk:e=>{this.handleOk(e)},editData:this.state.editData}))}},u=p))||u),E=w;t.default=E},"SKd/":function(e,t,a){"use strict";var i=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=i(a("/wGt"));a("+L6B");var l=i(a("2/Rp")),n=i(a("jehZ"));a("5NDa");var d=i(a("5rEg"));a("miYZ");var o=i(a("tsqr"));a("7Kak");var c=i(a("9yH6"));a("y8nQ");var u,p,m,h=i(a("Vl3Y")),f=s(a("q1tI")),g=a("MuoO"),y=i(a("ZNrE")),v=h.default.Item,b=c.default.Group,_=(u=(0,g.connect)(e=>{var t=e.loading;return{editLicenseLoading:t.effects["gateWay/editLicense"],addLicenseLoading:t.effects["gateWay/addLicense"]}}),u((m=class extends f.PureComponent{constructor(e){super(e),this.handleSubmit=(e=>{e.preventDefault();var t=this.props.onOk;this.props.form.validateFields((e,a)=>{!e&&t&&t(a)})}),this.beforeUpload=((e,t)=>{var a=e.name.split("."),i=a.length,s="pem"===a[i-1]||"crt"===a[i-1]||"cer"===a[i-1]||"key"===a[i-1];return!!s||(t&&o.default.warning("\u8bf7\u4e0a\u4f20\u4ee5.pem, .crt, .cer, .key\u7ed3\u5c3e\u7684\u6587\u4ef6",5),!1)}),this.state={}}render(){var e=this.props,t=e.onClose,a=e.editData,i=void 0===a?{}:a,s=e.addLicenseLoading,o=e.editLicenseLoading,u=e.form,p=u.getFieldDecorator,m=u.setFieldsValue,g={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:18}}},_={setFieldsValue:m,formItemLayout:g,Form:h.default,width:"328px",getFieldDecorator:p},k=[{value:i.certificate,name:"certificate",label:"\u516c\u94a5\u8bc1\u4e66",messages:"\u8bf7\u8f93\u5165\u8bc1\u4e66\u540d\u79f0",uploadName:"public_key_btn",mode:"javascript"},{value:i.private_key,name:"private_key",label:"\u79c1\u94a5",messages:"\u8bf7\u8f93\u5165\u79c1\u94a5",uploadName:"private_key_btn",mode:"javascript"}];return f.default.createElement("div",null,f.default.createElement(r.default,{title:i?"\u7f16\u8f91\u8bc1\u4e66":"\u6dfb\u52a0\u8bc1\u4e66",placement:"right",width:500,closable:!1,onClose:t,visible:this.props.visible,maskClosable:!1,style:{overflow:"auto"}},f.default.createElement(h.default,{onSubmit:this.handleSubmit},f.default.createElement(v,(0,n.default)({},g,{label:"\u8bc1\u4e66\u540d\u79f0"}),p("alias",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8bc1\u4e66\u540d\u79f0!"}]})(f.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u8bc1\u4e66\u540d\u79f0"}))),f.default.createElement(v,(0,n.default)({},g,{label:"\u8bc1\u4e66\u7c7b\u578b"}),p("certificate_type",{initialValue:"\u670d\u52a1\u7aef\u8bc1\u4e66",rules:[{required:!0}]})(f.default.createElement(b,null,f.default.createElement(c.default,{value:"\u670d\u52a1\u7aef\u8bc1\u4e66"},"\u670d\u52a1\u7aef\u8bc1\u4e66")))),k.map(e=>{var t=e.value,a=e.name,i=e.label,s=e.messages,r=e.mode;return f.default.createElement(f.Fragment,{key:a},f.default.createElement(y.default,(0,n.default)({},_,{data:t,name:a,label:i,message:s,mode:r,beforeUpload:this.beforeUpload})))}),f.default.createElement("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px",zIndex:4}},f.default.createElement(l.default,{style:{marginRight:8},onClick:t},"\u53d6\u6d88"),f.default.createElement(l.default,{htmlType:"submit",type:"primary",loading:o||s},"\u786e\u8ba4")))))}},p=m))||p),k=h.default.create()(_),w=k;t.default=w}}]);