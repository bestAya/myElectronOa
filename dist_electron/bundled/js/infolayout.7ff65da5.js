(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["infolayout"],{4601:function(t,s,i){"use strict";var a=i("9029"),e=i.n(a);e.a},"4e8f":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"info"},[i("div",{staticClass:"info_left"},[i("div",{staticClass:"info_left_seach"},[i("el-input",{staticClass:"seach",attrs:{size:"small",placeholder:"搜索"}},[i("i",{staticClass:"suffix",attrs:{slot:"suffix"},slot:"suffix"},[t._v("(⌘+k)")]),i("i",{staticClass:"suffix el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),i("el-button",{attrs:{size:"small",icon:"el-icon-plus",circle:""},on:{click:t.openCalendarWindow}})],1),i("div",{staticClass:"info_list"},[i("div",{staticClass:"info_box info_actve"},[i("el-avatar",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}}),t._m(0)],1),i("router-link",{staticClass:"info_box",attrs:{tag:"div",to:"/login"}},[i("el-avatar",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}}),i("div",{staticClass:"information"},[i("div",{staticClass:"information_top"},[i("div",[i("h5",[t._v("小白白")]),i("i",{staticClass:"tips"},[t._v("TOP")])]),i("span",{staticClass:"time"},[t._v("3月24日")])]),i("p",[t._v("这是提升内容")])])],1)],1)]),i("div",{staticClass:"info_right"})])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"application"},[i("div",[i("h5",[t._v("小白白")]),i("i",{staticClass:"tips"},[t._v("部门")])]),i("span",{staticClass:"time"},[t._v("今天")])])}];const{ipcRenderer:n}=i("34bb");var c={components:{},props:{},data(){return{}},watch:{},computed:{},methods:{openCalendarWindow(){n.send("openCalendarWindow",{options:{width:400,height:550},url:window.location.origin+"/#/creatwin"})}},created(){},mounted(){}},o=c,l=(i("4601"),i("9ca4")),r=Object(l["a"])(o,a,e,!1,null,"14ef0576",null);s["default"]=r.exports},9029:function(t,s,i){}}]);
//# sourceMappingURL=infolayout.7ff65da5.js.map