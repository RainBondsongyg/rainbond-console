(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{hPvT:function(e,t,r){"use strict";var s=r("tAuX"),a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,o,p=s(r("q1tI")),c=r("MuoO"),m=a(r("XZXw")),h=a(r("pYXB")),u=a(r("fNFb")),d=r("vSx2"),l=a(r("hMqj")),f=a(r("QDog")),b=(n=(0,c.connect)(e=>{var t=e.user,r=e.teamControl,s=e.enterprise;return{currUser:t.currentUser,currentTeam:r.currentTeam,currentRegionName:r.currentRegionName,currentEnterprise:s.currentEnterprise,currentTeamPermissionsInfo:r.currentTeamPermissionsInfo}}),n((o=class extends p.Component{constructor(e){super(e),this.handleTabChange=(e=>{this.setState({tabKey:e,open:!1})}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return l.default.querySpecifiedPermissionsInfo(t,e)}),this.renderContent=(()=>{var e=this.state,t=e.open,r=e.tabKey,s=e.operationPermissions;return"http"===r?p.default.createElement(h.default,{operationPermissions:s,open:t}):p.default.createElement(u.default,{operationPermissions:s})}),this.state={tabKey:e.match&&e.match.params&&e.match.params.types&&e.match.params.types?e.match.params.types:"http",open:!!(this.props.match&&this.props.match.params&&this.props.match.params.types&&this.props.match.params.types)&&this.props.match.params.types,operationPermissions:this.handlePermissions("queryControlInfo")}}componentWillMount(){var e=this.props.dispatch,t=this.state.operationPermissions.isAccess;t||f.default.withoutPermission(e)}render(){var e=this.props,t=e.currentEnterprise,r=e.currentTeam,s=e.currentRegionName,a=[];return a=(0,d.createTeam)((0,d.createEnterprise)(a,t),r,s),a.push({title:"\u7f51\u5173\u7ba1\u7406"}),p.default.createElement(m.default,{title:"\u8bbf\u95ee\u63a7\u5236",tabActiveKey:this.state.tabKey,breadcrumbList:a,tabList:[{key:"http",tab:"HTTP"},{key:"tcp",tab:"TCP/UDP"}],onTabChange:this.handleTabChange},this.renderContent())}},i=o))||i),P=b;t.default=P}}]);