(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"2fd8":function(t,e,n){},"4ee2":function(t,e,n){},"52b8":function(t,e,n){"use strict";n("bf12")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=n("2877"),l={},s=Object(r["a"])(l,o,i,!1,null,null,null),u=s.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticClass:"screen-xxl",attrs:{id:"components-layout-demo-custom-trigger"}},[n("a-layout-sider",{attrs:{width:"256px",collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[t.hasSideBar?n("sideBar",{attrs:{collapsed:t.collapsed}}):t._e()],1),n("a-layout",[n("a-layout-header",{staticStyle:{background:"#fff",padding:"0",display:"flex","align-items":"center"}},[n("topBar",[n("div",{attrs:{slot:"menu-btn"},slot:"menu-btn"},[n("a-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:t.toggleCollapsed}},[n("a-icon",{attrs:{type:t.collapsed?"menu-unfold":"menu-fold"}})],1)],1)])],1),n("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px",overflowY:"scroll"}},[n("router-view")],1)],1)],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topBar"},[t._t("menu-btn")],2)},m=[],h={name:"TopBar",components:{},data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{}},b=h,g=(n("da79"),Object(r["a"])(b,f,m,!1,null,"803f0b90",null)),v=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftNav"},[n("div",{staticClass:"logo"},[n("a",{staticClass:"router-link-active",attrs:{href:"/"}},[t.collapsed?t._e():n("h1",[n("svg",{staticClass:"icon",attrs:{t:"1597989581210",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"30",height:"30"}},[n("path",{attrs:{d:"M218.112 64h583.296L1024 384.768 509.76 960 0 384.768 218.112 64z m286.08 504.192l-252.48-287.36-86.72 91.968 339.2 366.464 329.28-366.464-77.184-91.968-252.096 287.36z",fill:"#fff","p-id":"4449"}})]),n("span",{staticClass:"title",attrs:{title:t.title}},[t._v(t._s(t.title))])]),t.collapsed?n("h1",{class:{small:t.collapsed}},[n("svg",{staticClass:"icon",attrs:{t:"1597989581210",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"30",height:"30"}},[n("path",{attrs:{d:"M218.112 64h583.296L1024 384.768 509.76 960 0 384.768 218.112 64z m286.08 504.192l-252.48-287.36-86.72 91.968 339.2 366.464 329.28-366.464-77.184-91.968-252.096 287.36z",fill:"#fff","p-id":"4449"}})])]):t._e()])]),n("a-menu",{attrs:{"default-selected-keys":["1"],"default-open-keys":["sub1"],mode:"inline",theme:"dark","inline-collapsed":t.collapsed}},[t._l(t.menuList,(function(e){return[e.children.length?n("a-sub-menu",{key:e.id},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"mail"}}),n("span",[t._v(t._s(e.name))])],1),t._l(e.children,(function(a){return n("a-menu-item",{key:a.id,on:{click:function(n){return t.menuClick(e)}}},[n("a-icon",{attrs:{type:e.icon}}),n("span",[t._v(t._s(a.name))])],1)}))],2):n("a-menu-item",{key:e.id,on:{click:function(n){return t.menuClick(e)}}},[n("a-icon",{attrs:{type:e.icon}}),n("span",[t._v(t._s(e.name))])],1)]}))],2)],1)},w=[],x={name:"SideBar",components:{},props:{collapsed:{typeof:Boolean,default:!0}},data:function(){return{vm:this,logo:n("5803"),title:"Vue-Study",menuList:[{id:0,name:"Form",url:"/form",icon:"smile",children:[]},{id:1,name:"About",url:"/about",icon:"smile",children:[{id:1,name:"About",url:"/about",icon:"smile"}]}]}},created:function(){},mounted:function(){document.addEventListener("visibilitychange",(function(){}))},computed:{},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed},menuClick:function(t){var e={path:t.url};this.$route.path!==t.url&&this.$router.push(e).catch((function(){}))}}},k=x,_=(n("52b8"),Object(r["a"])(k,y,w,!1,null,"40251fdf",null)),B=_.exports,C={name:"Home",components:{TopBar:v,SideBar:B},data:function(){return{hasSideBar:!0,collapsed:!1}},beforeRouteEnter:function(t,e,n){n((function(e){e.hasSideBar=t.meta.sideBar}))},watch:{$route:function(t){this.hasSideBar=!!t.meta.sideBar}},mounted:function(){},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}},T=C,E=(n("e35a"),Object(r["a"])(T,d,p,!1,null,"0fa5b3b2",null)),S=E.exports;a["a"].use(c["a"]);var $=[{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e("form").then(n.bind(null,"7101"))}},{path:"/",redirect:"/index",name:"Home",component:S,meta:{title:"Home",requireAuth:!1,sideBar:!0},children:[{path:"/index",name:"index",meta:{title:"Index",requireAuth:!1,sideBar:!0},component:function(){return n.e("form").then(n.bind(null,"1110"))}},{path:"/form",name:"form",meta:{title:"Home",requireAuth:!1,sideBar:!0},component:function(){return n.e("form").then(n.bind(null,"62bc"))}},{path:"/about",name:"about",meta:{title:"About",requireAuth:!1,sideBar:!0},component:function(){return n.e("about").then(n.bind(null,"8ab4"))}}]}],O=new c["a"]({mode:"history",base:"",routes:$}),P=O,L=n("2f62");a["a"].use(L["a"]);var j=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("6e40"),q=n.n(A),U=n("d4ec"),H=n("bee2"),I=function(){function t(){Object(U["a"])(this,t)}return Object(H["a"])(t,[{key:"debounce",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a=arguments.length>2?arguments[2]:void 0;return function(){var o=this,i=arguments;if(e&&clearTimeout(e),a){var r=!e;e=setTimeout((function(){e=null}),n),r&&t.apply(o,i)}else e=setTimeout((function(){t.apply(o,i)}),n)}}}]),t}(),z=new I,D=z,M={login:{login:"/login",verifyCode:"/getCode",updatePwd:"/updatePwd"}},R=M,G=n("bc3a"),J=n.n(G),N=n("4328"),F=n.n(N),V=J.a.create({baseURL:q.a,withCredentials:!0,timeout:6e3,maxContentLength:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}});function X(t,e,n){var a=localStorage.getItem("token");if(a){var o={token:a};Object.assign(n,o)}return new Promise((function(a,o){V({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null}).then((function(t){a(t.data)})).catch((function(t){o(t)}))}))}V.interceptors.request.use((function(t){return"post"!==t.method&&"put"!==t.method&&"delete"!==t.method||(t.data=F.a.stringify(t.data)),t}),(function(t){console.log(t)})),V.interceptors.response.use((function(t){return t}),(function(t){console.log(t)}));var Y={get:function(t,e){return X("GET",t,e)},post:function(t,e){return X("POST",t,e)},put:function(t,e){return e._method="put",X("PUT",t,e)},delete:function(t,e){return e._method="delete",X("DELETE",t,e)}},K={},Q={},W=(n("159b"),n("b64b"),n("0bb7")),Z=n("9839"),tt=n("de1b"),et=n("0020"),nt=n("5efb"),at=n("b558"),ot=n("55f1"),it=n("0c63"),rt=n("98c5"),lt=n("7571"),st=n("a79d8"),ut=n("39ab"),ct={DatePicker:W["a"],Select:Z["b"],Pagination:tt["a"],Table:et["a"],Button:nt["a"],Input:at["a"],Menu:ot["a"],Icon:it["a"],Layout:rt["a"],Tag:lt["a"],Divider:st["a"],Upload:ut["a"]},dt={install:function(t){Object.keys(ct).forEach((function(e){return t.use(ct[e])}))}},pt=dt;n("2fd8"),n("4ee2");a["a"].use(pt),a["a"].prototype.$Tools=D,a["a"].prototype.$store=j,a["a"].prototype.$Url=R,a["a"].prototype.$axios=Y,a["a"].prototype.$baseUrl=q.a,a["a"].prototype.$CONST={REGEX:K,PROMPT:Q},a["a"].config.productionTip=!1,P.beforeEach((function(t,e,n){t.meta.requireAuth?(n(),localStorage.getItem("token")?n():n({path:"/login"})):n()})),new a["a"]({router:P,store:j,render:function(t){return t(u)}}).$mount("#app")},5803:function(t,e,n){t.exports=n.p+"static/img/process-white.1d450073.png"},"6e40":function(t,e,n){var a="https://song-api.only0129.top";a="https://song-api.only0129.top",t.exports=a},"841d":function(t,e,n){},bf12:function(t,e,n){},da79:function(t,e,n){"use strict";n("eb63")},e35a:function(t,e,n){"use strict";n("841d")},eb63:function(t,e,n){}},[[0,"runtime","chunk-antd","about"]]]);