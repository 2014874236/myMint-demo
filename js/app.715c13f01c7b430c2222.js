webpackJsonp([1],[,,,,,,,,,,function(t,e,s){function a(t){s(103)}var n=s(1)(s(93),s(225),a,null,null);t.exports=n.exports},function(t,e,s){"use strict";var a=s(12),n=s(231);a.default.use(n.a);var i=new n.a.Store({state:{loginForm:{username:"",password:""},loginStatus:!1},getter:{userLoginStatus:function(t){return console.log("入参zzzzz：",t.loginStatus),t.loginStatus}},mutations:{SET_LOGINSTATUS:function(t,e){t.loginStatus=e,console.log("入参：",t.loginStatus)}},actions:{setloginStatus:function(t,e){var s=(t.dispatch,t.commit);t.state;s("SET_LOGINSTATUS",e)}}});e.a=i},,function(t,e,s){"use strict";s.d(e,"a",function(){return r});var a=s(86),n=s.n(a),i={apiUrl:"/ccp-web/api",ctxPath:"/dist",staticPath:n.a.build.staticPath},r={home:i.staticPath+"dataJson/home.json",classify:i.staticPath+"dataJson/classify.json",login:i.staticPath+"dataJson/login.json",captchas:"/v1/captchas"}},,,,,,,,,,,function(t,e,s){function a(t){s(99)}var n=s(1)(s(92),s(221),a,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e){t.exports={NODE_ENV:'"production"'}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){function a(t){s(102)}var n=s(1)(s(90),s(224),a,null,null);t.exports=n.exports},function(t,e,s){function a(t){s(98)}var n=s(1)(s(91),s(220),a,null,null);t.exports=n.exports},,function(t,e){!function(t,e){var s=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",n=function(){var t=s.clientWidth;t&&(s.style.fontSize=t/375*20+"px")};t.addEventListener&&(e.addEventListener(a,n,!1),t.addEventListener("DOMContentLoaded",n,!1))}(document,window)},function(t,e,s){"use strict";var a=s(12),n=s(229),i=s(10),r=(s.n(i),s(78)),o=s.n(r),c=s(216),l=s.n(c),u=s(218),d=s.n(u),p=s(24),v=s.n(p),m=s(219),f=s.n(m),g=s(217),h=s.n(g),_=s(77),C=s.n(_);a.default.use(n.a),e.a=new n.a({routes:[{path:"/home",component:o.a},{path:"/dragonDetail",component:C.a},{path:"/classify",component:l.a},{path:"/shopping",component:f.a},{path:"/personal",component:h.a},{path:"/register",component:d.a},{path:"/login",component:v.a},{path:"/",redirect:"home"}]})},function(t,e){},function(t,e,s){function a(t){s(101)}var n=s(1)(s(88),s(223),a,null,null);t.exports=n.exports},,function(t,e,s){var a=s(232),n=s(43);t.exports=a(n,{NODE_ENV:'"development"'})},function(t,e,s){(function(e){var a=s(198);t.exports={build:{env:s(43),index:a.resolve(e,"../dist/index.html"),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"",assetsPublicPath:"./",staticPath:"./",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:s.i({NODE_ENV:"production"}).npm_config_report},dev:{env:s(85),port:8081,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",staticPath:"/static/",proxyTable:{"/v1":{target:"http://images.cangdu.org/",changeOrigin:!0,pathRewrite:{"^/v1":"/v1"}}},cssSourceMap:!1}}}).call(e,"/")},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a),i=s(13);e.default={data:function(){return{value:"",lists:""}},components:{NavBar:n.a},mounted:function(){this.getData()},methods:{goBack:function(){this.$router.go(-1)},getData:function(){var t=this;this.$http.get(i.a.classify).then(function(e){t.lists=e.data.data})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(201),n=s.n(a),i=s(206),r=s.n(i),o=s(207),c=s.n(o),l=s(210),u=s.n(l),d=s(211),p=s.n(d),v=s(212),m=s.n(v),f=s(213),g=s.n(f),h=s(202),_=s.n(h),C=s(203),A=s.n(C),b=s(204),x=s.n(b),F=s(205),w=s.n(F),B=s(10),E=s.n(B),k=s(77),S=s.n(k),j=s(24),P=(s.n(j),s(13));e.default={data:function(){return{value:"",imgs:[n.a,r.a,c.a],list:[u.a,p.a,m.a,g.a,_.a,A.a,x.a,w.a],loading:!1,products:""}},components:{NavBar:E.a},mounted:function(){this.getData()},methods:{getData:function(){var t=this;console.log("aaa"),this.$http.get(P.a.home).then(function(e){t.products=e.data})},handleSelected:function(t){this.$router.push({path:"/dragonDetail",component:S.a})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(78),n=s.n(a),i=s(11),r=s(13),o=s(25);s.n(o);e.default={data:function(){return{loginForm:i.a.state.loginForm,form:""}},mounted:function(){this.getData()},methods:{goBack:function(){this.$router.go(-1)},getData:function(){var t=this;this.$http.get(r.a.login).then(function(e){console.log("登录页面response的值",e),t.form=e.data})},loginSubmit:function(){console.log("this.loginForm.username：",this.loginForm.username),console.log("this.loginForm.password：",this.loginForm.password);for(var t=0,e=0;e<this.form.length;e++)if(this.form[e].username===this.loginForm.username&&this.form[e].password==this.loginForm.password){t=1;break}0===t?(o.MessageBox.alert("用户名或密码不正确","提示"),this.loginForm.username="",this.loginForm.password=""):(this.$router.push({path:"/",component:n.a}),i.a.dispatch("setloginStatus",!0))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(11);e.default={data:function(){return{selected:"",fixed:!0}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a),i=s(11),r=s(24),o=s.n(r);e.default={data:function(){return{loginForm:i.a.state.loginForm}},components:{NavBar:n.a},computed:{loginStatus:function(){return this.$store.state.loginStatus}},mounted:function(){this.loginStatus||this.$router.push({path:"/login",component:o.a})},methods:{goBack:function(){this.$router.go(-1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(25),n=(s.n(a),s(13));e.default={data:function(){return{rulesForm:{username:"",email:"",password:"",dbpassword:"",phone:""},form:"",popupVisible:!1}},mounted:function(){this.getData()},methods:{goBack:function(){this.$router.go(-1)},getData:function(){this.$http.get(n.a.login).then(function(t){console.log("response的值",t),this.form=t.data})},registerSubmit:function(){for(var t=!0,e=0,s=0;s<this.form.length;s++)if(this.rulesForm.username===this.form[s].username){e=1;break}console.log("flag的值",e),this.rulesForm.username||(a.MessageBox.alert("用户名不能为空","提示"),t=!1),1===e&&(a.MessageBox.alert("用户名已存在","提示"),t=!1),this.rulesForm.phone||(a.MessageBox.alert("电话号码不能为空","提示"),t=!1),/^[0-9]{11}$/.test(this.rulesForm.phone)||(a.MessageBox.alert("电话号码必须为11位数字","提示"),t=!1),this.rulesForm.password||(a.MessageBox.alert("密码不能为空","提示"),t=!1),""!==this.rulesForm.password&&(this.rulesForm.dbpassword?this.rulesForm.password===this.rulesForm.dbpassword?console.log("两次密码一致"):(a.MessageBox.alert("两次密码不一致","提示"),t=!1,this.rulesForm.password="",this.rulesForm.dbpassword=""):(a.MessageBox.alert("请再次输入密码","提示"),t=!1)),!0===t&&a.MessageBox.alert("注册成功","提示")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a),i=s(24),r=s.n(i);e.default={data:function(){return{}},components:{NavBar:n.a},computed:{loginStatus:function(){return this.$store.state.loginStatus}},mounted:function(){this.loginStatus||this.$router.push({path:"/login",component:r.a}),console.log("tai",this.loginStatus),console.log(0)},methods:{goBack:function(){this.$router.go(-1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(12),n=s(84),i=s(83),r=s.n(i),o=s(81),c=s(25),l=s.n(c),u=s(82),d=(s.n(u),s(11)),p=s(80);s.n(p);a.default.use(n.a),a.default.use(l.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:o.a,store:d.a,template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"img/1.f95f79e.jpg"},function(t,e,s){t.exports=s.p+"img/10.0b28986.jpg"},function(t,e,s){t.exports=s.p+"img/11.dd21f4a.jpg"},function(t,e,s){t.exports=s.p+"img/12.998fc1e.jpg"},function(t,e,s){t.exports=s.p+"img/13.db42f26.jpg"},function(t,e,s){t.exports=s.p+"img/2.fd6c8ce.jpg"},function(t,e,s){t.exports=s.p+"img/3.b83fab5.jpg"},function(t,e,s){t.exports=s.p+"img/4.dc3259b.png"},function(t,e,s){t.exports=s.p+"img/5.d22a3de.png"},function(t,e,s){t.exports=s.p+"img/6.82899c8.jpg"},function(t,e,s){t.exports=s.p+"img/7.933e61e.jpg"},function(t,e,s){t.exports=s.p+"img/8.503f48d.jpg"},function(t,e,s){t.exports=s.p+"img/9.8ead7e3.jpg"},function(t,e){t.exports="data:image/png;base64,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"},,function(t,e,s){function a(t){s(100)}var n=s(1)(s(89),s(222),a,null,null);t.exports=n.exports},function(t,e,s){function a(t){s(104)}var n=s(1)(s(94),s(226),a,null,null);t.exports=n.exports},function(t,e,s){function a(t){s(105)}var n=s(1)(s(95),s(227),a,null,null);t.exports=n.exports},function(t,e,s){function a(t){s(106)}var n=s(1)(s(96),s(228),a,null,null);t.exports=n.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("header",[s("div",{staticClass:"title"},[t._v("醉品商城")]),t._v(" "),s("div",{staticClass:"search"},[s("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索您想要的产品"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"swipe"},[s("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgs,function(t){return s("mt-swipe-item",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})])}))],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("section",{staticClass:"part3"},[s("h3",[t._v("8大热销茶叶品类")]),t._v(" "),s("p",[t._v("总有你想不到的低价")]),t._v(" "),t._l(t.list,function(t){return s("div",{staticClass:"list-img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]})])})],2),t._v(" "),s("section",{staticClass:"part4"},[s("div",{staticClass:"part4-content"},[s("div",{staticClass:"newProducts"},[s("h3",[t._v(t._s(t.products.title))]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.products.note))]),t._v(" "),t._l(t.products.data,function(e,a){return s("div",{staticClass:"product",on:{click:function(e){t.handleSelected(a)}}},[s("img",{attrs:{src:e.img}}),t._v(" "),s("p",{staticClass:"product-p1"},[t._v(t._s(e.bigContent))]),t._v(" "),s("p",{staticClass:"product-p2"},[s("span",{domProps:{innerHTML:t._s(e.smallContent)}}),t._v(" "),s("span",{staticClass:"money"},[s("i",{staticClass:"fa fa-jpy",attrs:{"aria-hidden":"true"}}),t._v(t._s(e.price.toFixed(2)))])])])})],2)])]),t._v(" "),s("NavBar")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"part1"},[s("div",{staticClass:"text-content"},[s("i",{staticClass:"fa fa-check-circle-o check-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"text"},[t._v("全场商品90天保价")])]),t._v(" "),s("div",{staticClass:"text-content"},[s("i",{staticClass:"fa fa-check-circle-o check-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"text"},[t._v("30天无忧退换货")])]),t._v(" "),s("div",{staticClass:"text-content"},[s("i",{staticClass:"fa fa-check-circle-o check-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"text"},[t._v("满59元免运费")])]),t._v(" "),s("div",{staticStyle:{clear:"left"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"part2"},[a("div",{staticClass:"part2-content"},[a("div",{staticClass:"part2-img"},[a("p",[a("img",{attrs:{src:s(208)}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(209)}})]),t._v(" "),a("div",{staticStyle:{clear:"left"}})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("mt-header",{attrs:{title:"账户登录"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")]),t._v(" "),s("router-link",{attrs:{to:"/register"},slot:"right"},[s("mt-button",[t._v("注册")])],1)],1),t._v(" "),s("form",{staticClass:"loginForm",attrs:{model:t.loginForm}},[s("section",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.username,expression:"loginForm.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.loginForm.username},on:{input:function(e){e.target.composing||(t.loginForm.username=e.target.value)}}})])]),t._v(" "),s("section",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||(t.loginForm.password=e.target.value)}}})])]),t._v(" "),s("section",[s("mt-button",{on:{click:t.loginSubmit}},[t._v("登录")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classify"},[s("mt-header",{attrs:{fixed:"",title:"全部产品分类"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1),t._v(" "),s("div",{staticClass:"search"},[s("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索您想要的产品"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),t._l(t.lists,function(e){return s("section",{staticClass:"tea"},[s("h3",[t._v(t._s(e.title))]),t._v(" "),s("div",[s("ul",[t._l(e.items,function(e){return s("li",[s("router-link",{attrs:{to:""}},[s("p",[s("img",{attrs:{src:e.img}})]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.text))])])],1)}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2)])])}),t._v(" "),s("router-view"),t._v(" "),s("NavBar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dragonDetail"},[s("mt-header",{attrs:{title:"顶峰 开化龙顶 2017明前茶 绿茶  50g 黄罐单罐"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navBar"},[s("mt-tabbar",{staticClass:"nav",attrs:{fixed:"fixed"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"home"}},[s("router-link",{attrs:{to:"/home"}},[s("p",[s("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",[t._v("首页")])])],1),t._v(" "),s("mt-tab-item",{attrs:{id:"classify"}},[s("router-link",{attrs:{to:"/classify"}},[s("p",[s("i",{staticClass:"fa fa-th-large",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",[t._v("分类")])])],1),t._v(" "),s("mt-tab-item",{attrs:{id:"cart"}},[s("router-link",{attrs:{to:"/shopping"}},[s("p",[s("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",[t._v("购物车")])])],1),t._v(" "),s("mt-tab-item",{attrs:{id:"user"}},[s("router-link",{attrs:{to:"/personal"}},[s("p",[s("i",{staticClass:"fa fa-user-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",[t._v("我的")])])],1)],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal"},[s("mt-header",{attrs:{title:"个人中心"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1),t._v(" "),s("div",{staticClass:"personalInfo"},[t._m(0),t._v(" "),s("div",{staticClass:"username"},[s("p",[t._v(t._s(t.loginForm.username))]),t._v(" "),s("p",[t._v("茶人-V0 您已累计消费0元")])]),t._v(" "),s("div",{staticClass:"btn"},[s("mt-button",[s("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t签到得积分\n\t\t\t")])],1),t._v(" "),s("div",{staticStyle:{clear:"left"}})]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"myOrder"},[s("div",{staticClass:"order"},[s("mt-button",{staticClass:"btn"},[s("i",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",[t._v("我的订单")]),t._v(" "),t._m(2)],1),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"otherInfo"},[s("div",{staticClass:"address"},[s("mt-button",{staticClass:"btn"},[s("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",[t._v("地址管理")]),t._v(" "),t._m(4)],1),t._v(" "),s("div",{staticClass:"password"},[s("mt-button",{staticClass:"btn"},[s("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",[t._v("修改密码")]),t._v(" "),t._m(5)],1),t._v(" "),s("div",{staticClass:"phone"},[s("mt-button",{staticClass:"btn"},[s("i",{staticClass:"fa fa-mobile",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",[t._v("绑定手机")]),t._v(" "),t._m(6)],1),t._v(" "),s("div",{staticClass:"login"},[s("mt-button",{staticClass:"btn"},[s("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",[t._v("退出登录")]),t._v(" "),t._m(7)],1)]),t._v(" "),s("NavBar")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Img"},[a("img",{attrs:{src:s(214)}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accountInfo"},[s("ul",[s("li",[s("p",[t._v("0")]),t._v(" "),s("p",[t._v("账户余额")])]),t._v(" "),s("li",[s("p",[t._v("0")]),t._v(" "),s("p",[t._v("积分余额")])]),t._v(" "),s("li",[s("p",[t._v("0")]),t._v(" "),s("p",[t._v("红包个数")])]),t._v(" "),s("div",{staticStyle:{clear:"left"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"moreOrder"},[t._v("\n\t\t\t\t查看全部订单\n\t\t\t\t"),s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderInfo"},[s("div",{staticClass:"wait"},[s("p",[s("i",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"text"},[t._v("待付款")])]),t._v(" "),s("div",{staticClass:"wait"},[s("p",[s("i",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"text"},[t._v("待发货")])]),t._v(" "),s("div",{staticClass:"wait"},[s("p",[s("i",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"text"},[t._v("待收货")])]),t._v(" "),s("div",{staticClass:"wait"},[s("p",[s("i",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"text"},[t._v("待评价")])]),t._v(" "),s("div",{staticStyle:{clear:"left"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"right"},[s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"right"},[s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"right"},[s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"right"},[s("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("mt-header",{attrs:{title:"用户注册"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1),t._v(" "),s("div",{staticClass:"registerContent"},[s("form",{ref:"rulesForm",attrs:{model:t.rulesForm}},[s("section",[s("div",[s("label",{attrs:{id:"username"}},[t._v("用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rulesForm.username,expression:"rulesForm.username"}],attrs:{type:"text",id:"username",placeholder:"请输入用户名"},domProps:{value:t.rulesForm.username},on:{input:function(e){e.target.composing||(t.rulesForm.username=e.target.value)}}})])]),t._v(" "),s("section",[s("div",[s("label",{attrs:{id:"phone"}},[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rulesForm.phone,expression:"rulesForm.phone"}],attrs:{type:"text",id:"phone",placeholder:"请输入电话号码"},domProps:{value:t.rulesForm.phone},on:{input:function(e){e.target.composing||(t.rulesForm.phone=e.target.value)}}})])]),t._v(" "),s("section",[s("div",{staticClass:"code"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rulesForm.verification,expression:"rulesForm.verification"}],attrs:{type:"text",id:"verification",placeholder:"4位数字"},domProps:{value:t.rulesForm.verification},on:{input:function(e){e.target.composing||(t.rulesForm.verification=e.target.value)}}}),t._v(" "),s("mt-button",{staticClass:"codeBtn",attrs:{type:"danger"}},[t._v("获取验证码")])],1)]),t._v(" "),s("section",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rulesForm.password,expression:"rulesForm.password"}],attrs:{type:"password",id:"password",placeholder:"请输入密码"},domProps:{value:t.rulesForm.password},on:{input:function(e){e.target.composing||(t.rulesForm.password=e.target.value)}}})])]),t._v(" "),s("section",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rulesForm.dbpassword,expression:"rulesForm.dbpassword"}],attrs:{type:"password",id:"dbpassword",placeholder:"请重复输入密码"},domProps:{value:t.rulesForm.dbpassword},on:{input:function(e){e.target.composing||(t.rulesForm.dbpassword=e.target.value)}}})])]),t._v(" "),s("section",[s("mt-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:t.registerSubmit}},[t._v("注册")])],1)])]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}}),t._v("\n            点击 立即注册 即表示您同意醉品"),s("span",[t._v("用户协议")]),t._v("和"),s("span",[t._v("隐私协议")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopping"},[s("mt-header",{attrs:{title:"购物车"}},[s("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1),t._v(" "),t._m(0),t._v(" "),s("NavBar")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"emptyShopping"},[s("p",[t._v("你的购物车没有任何商品")])])}]}},,,,,,,,function(t,e){}],[97]);
//# sourceMappingURL=app.715c13f01c7b430c2222.js.map