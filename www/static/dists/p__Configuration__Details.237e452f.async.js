(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"9rEN":function(e,t,a){e.exports={setCheckbox:"setCheckbox___326jc",over:"over___3ReWB"}},ZEeq:function(e,t,a){"use strict";var i=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var s=i(a("bx4M"));a("sRBo");var l=i(a("kaz8"));a("14J3");var r=i(a("BMrR"));a("BoS7");var o=i(a("Sdc0"));a("5NDa");var d=i(a("5rEg"));a("+L6B");var c=i(a("2/Rp"));a("/xke");var h=i(a("TeRw")),u=i(a("p0pE"));a("2qtc");var m=i(a("kLXV"));a("y8nQ");var p,f,g,v,_=i(a("Vl3Y")),C=n(a("q1tI")),b=a("MuoO"),k=a("7DNP"),E=i(a("nckk")),y=i(a("YABy")),x=a("vSx2"),P=a("xpXo"),I=i(a("QDog")),N=i(a("hMqj")),w=i(a("9rEN")),D=_.default.Item,S=m.default.confirm,A=(p=(0,b.connect)(e=>{var t=e.loading,a=e.teamControl,i=e.enterprise;return{AddConfigurationLoading:t.effects["global/AddConfiguration"],EditConfigurationLoading:t.effects["global/EditConfiguration"],currentTeam:a.currentTeam,currentRegionName:a.currentRegionName,currentEnterprise:i.currentEnterprise,currentTeamPermissionsInfo:a.currentTeamPermissionsInfo}}),f=_.default.create(),p(g=f((v=class extends C.PureComponent{constructor(e){super(e),this.onChangeGroup=(e=>{this.setState({allChecked:this.state.apps.length===e.length})}),this.onOk=(e=>{e.preventDefault();var t=this.props.form,a=this.handleParameter();a.id;t.validateFields({force:!0},(e,t)=>{if(!e){void 0===t.enable&&(t.enable=!1),t.config_items&&1===t.config_items.length&&""===t.config_items[0].item_key&&(""===t.config_items[0].item_value||t.config_items[0].item_value)&&(t.config_items=[]);var a=Object.assign({},t,{deploy_type:"env"});this.handleHelpfulVisable(a)}})}),this.onCancel=(()=>{var e=this.props.dispatch,t=this.handleParameter(),a=t.regionName,i=t.teamName,n=t.appID;e(k.routerRedux.push("/team/".concat(i,"/region/").concat(a,"/apps/").concat(n,"/configgroups")))}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return N.default.querySpecifiedPermissionsInfo(t,e)}),this.handleConfiguration=(e=>{var t=this.props.dispatch,a=this.state.info,i=this.handleParameter(),n=i.teamName,s=i.regionName,l=i.appID,r=i.id,o=(0,u.default)({region_name:s,team_name:n,group_id:l},e),d=e.service_ids;"add"==="".concat(r)?t({type:"global/AddConfiguration",payload:(0,u.default)({},o),callback:e=>{e&&(this.handleClose(),h.default.success({message:"\u6dfb\u52a0\u6210\u529f"}),d&&d.length>0?this.showRemind(d):this.onCancel())}}):t({type:"global/EditConfiguration",payload:(0,u.default)({name:r},o),callback:e=>{if(e){var t=[],i=[];a&&a.services&&a.services.length>0&&a.services.map(e=>{e.service_id&&t.push(e.service_id)}),(d&&d.length>0||t.length>0)&&(i=Array.from(new Set([...d,...t]))),h.default.success({message:"\u4fdd\u5b58\u6210\u529f"}),this.handleClose(),i.length>0?this.showRemind(i):this.onCancel()}}})}),this.showRemind=(e=>{var t=this;S({title:"\u9700\u66f4\u65b0\u7ec4\u4ef6\u7acb\u5373\u751f\u6548",content:"\u662f\u5426\u7acb\u5373\u66f4\u65b0\u7ec4\u4ef6",okText:"\u66f4\u65b0",cancelText:"\u53d6\u6d88",onOk(){return t.handleBatchOperation(e),new Promise((e,t)=>{setTimeout(Math.random()>.5?e:t,2e3)}).catch(()=>console.log("Oops errors!"))},onCancel(){t.onCancel()}})}),this.handleBatchOperation=(e=>{var t=this.handleParameter(),a=t.teamName;(0,P.batchOperation)({action:"upgrade",team_name:a,serviceIds:e&&e.length>0?e.join(","):""}).then(e=>{e&&this.onCancel()})}),this.loadComponents=(()=>{var e=this.props.dispatch,t=this.state.info,a=this.handleParameter(),i=a.teamName,n=a.regionName,s=a.appID,l=a.id;e({type:"application/fetchApps",payload:{team_name:i,region_name:n,group_id:s,page:1,page_size:999},callback:e=>{if(e&&200==e._code){if(e.list&&e.list.length>0){var a=e.list.filter(e=>"third_party"!==e.service_source);this.setState({apps:a}),t&&t.services&&t.services.length>0&&this.setState({allChecked:a.length===t.services.length})}"add"===l&&this.setState({loading:!1})}}})}),this.loadConfigurationDetails=(()=>{var e=this.props.dispatch,t=this.handleParameter(),a=t.teamName,i=t.appID,n=t.id;"add"!==n?e({type:"global/fetchConfigurationDetails",payload:{team_name:a,group_id:i,name:n},callback:e=>{e&&200==e._code&&this.setState({info:e.bean,loading:!1},()=>{this.loadComponents()})}}):this.loadComponents()}),this.checkConfiguration=((e,t,a)=>{if(t&&t.length>0){var i=t.filter(e=>""===e.item_key);if(""===t[0].item_key&&""===t[0].item_value)a();else if(i&&i.length>0)a("\u914d\u7f6e\u9879key\u503c\u4e0d\u80fd\u4e3a\u7a7a");else{var n=!1,s=!1;if(t.map(e=>{var t=e.item_key,a=e.item_value;/^[-._a-zA-Z][-._a-zA-Z0-9]*$/.test(t)||(n=!0),(t.length>65535||a.length>65535)&&(s=!0)}),n)return void a(" \u5fc5\u987b\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u548c - . _ \u7ec4\u6210\uff0c\u4e0d\u652f\u6301\u6570\u5b57\u5f00\u5934");if(s)return void a("\u6700\u5927\u957f\u5ea665535");a()}}a()}),this.handleHelpfulVisable=(e=>{this.setState({helpfulVisable:e})}),this.handleClose=(()=>{this.setState({helpfulVisable:!1})}),this.handleParameter=(()=>{var e=this.props.match,t=e.params,a=t.teamName,i=t.regionName,n=t.appID,s=t.id;return{regionName:i,teamName:a,appID:n,id:s}}),this.handleIsAll=(()=>{var e=this.props.form.setFieldsValue,t=this.state,a=t.apps,i=t.allChecked,n=i?[]:a.map(e=>e.service_id);e({service_ids:n}),this.setState({allChecked:!i})}),this.state={apps:[],info:{},loading:!0,helpfulVisable:!1,appConfigGroupPermissions:this.handlePermissions("queryAppConfigGroupInfo"),allChecked:!1}}componentWillMount(){var e=this.props.dispatch,t=this.state.appConfigGroupPermissions,a=t.isCreate,i=t.isEdit;a||i||I.default.withoutPermission(e)}componentDidMount(){this.loadConfigurationDetails()}render(){var e=this.props,t=e.form,a=e.AddConfigurationLoading,i=e.EditConfigurationLoading,n=e.currentEnterprise,h=e.currentTeam,u=e.currentRegionName,p=this.state,f=p.apps,g=p.info,v=p.loading,b=p.helpfulVisable,k=p.allChecked,P=t.getFieldDecorator,I=[];g&&g.services&&g.services.length>0&&g.services.map(e=>{I.push(e.service_id)});var N=this.handleParameter(),S=N.id,A="add"===S,R=[];return R=(0,x.createTeam)((0,x.createEnterprise)(R,n),h,u),C.default.createElement(E.default,{breadcrumbList:R},b&&C.default.createElement(m.default,{visible:!0,title:"\u53cb\u60c5\u63d0\u793a",confirmLoading:a||i,onOk:()=>{this.handleConfiguration(b)},onCancel:this.handleClose},C.default.createElement("p",null,"\u662f\u5426\u4fdd\u5b58\u5df2\u4fee\u6539\u7684\u914d\u7f6e\u7ec4")),C.default.createElement(s.default,{loading:v,style:{minHeight:"600px"},title:A?"\u6dfb\u52a0\u914d\u7f6e\u7ec4":"\u4fee\u6539\u914d\u7f6e\u7ec4",extra:[C.default.createElement(c.default,{onClick:this.onCancel,style:{marginRight:"20px"}},"\u53d6\u6d88"),C.default.createElement(c.default,{type:"primary",onClick:this.onOk,loading:a||i},A?"\u786e\u5b9a":"\u4fdd\u5b58")]},C.default.createElement(_.default,{onSubmit:this.onOk,style:{margin:"0 auto",width:"820px"}},C.default.createElement(r.default,{style:{display:"flex",alignItems:"center"}},C.default.createElement(D,{style:{width:"370px"},label:"\u914d\u7f6e\u7ec4\u540d\u79f0"},P("config_group_name",{initialValue:g&&g.config_group_name||"",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u914d\u7f6e\u7ec4\u540d\u79f0"},{min:2,message:"\u6700\u5c0f\u957f\u5ea62\u4f4d"},{max:64,message:"\u6700\u5927\u957f\u5ea664\u4f4d"},{pattern:/^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/,message:"\u5fc5\u987b\u7531\u5c0f\u5199\u7684\u5b57\u6bcd\u3001\u6570\u5b57\u548c-\u7ec4\u6210\uff0c\u5e76\u4e14\u5fc5\u987b\u4ee5\u5b57\u6bcd\u6570\u5b57\u5f00\u59cb\u548c\u7ed3\u675f"}]})(C.default.createElement(d.default,{style:{width:"370px"},disabled:g&&g.config_group_name,placeholder:"\u8bf7\u586b\u5199\u914d\u7f6e\u7ec4\u540d\u79f0"}))),C.default.createElement(_.default.Item,{style:{width:"370px",marginLeft:"24px"},label:"\u751f\u6548\u72b6\u6001"},P("enable",{initialValue:g&&g.enable,rules:[{required:!1}]})(C.default.createElement(o.default,{defaultChecked:g&&g.enable})))),C.default.createElement(D,{label:"\u914d\u7f6e\u9879"},P("config_items",{initialValue:g&&g.config_items||[],rules:[{required:!1,message:"\u8bf7\u586b\u5199\u914d\u7f6e\u9879"},{validator:this.checkConfiguration}]})(C.default.createElement(y.default,{editInfo:g&&g.config_items||""}))),f.length>0&&C.default.createElement(D,{label:"\u751f\u6548\u7ec4\u4ef6"},C.default.createElement(l.default,{checked:k,onChange:this.handleIsAll},"\u5168\u9009"),P("service_ids",{initialValue:I,rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u751f\u6548\u7ec4\u4ef6"}]})(C.default.createElement(l.default.Group,{className:w.default.setCheckbox,onChange:this.onChangeGroup},C.default.createElement(r.default,{span:24},f.map(e=>{var t=e.service_cname,a=e.service_id;return C.default.createElement(l.default,{key:S,value:a},C.default.createElement("div",{title:t},t))}))))))))}},g=v))||g)||g);t.default=A}}]);