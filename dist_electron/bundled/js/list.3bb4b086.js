(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{4939:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"80%","custom-class":"dialog_box","show-close":!1},on:{"update:visible":function(s){t.dialogVisible=s}}},[i("div",{staticClass:"dialog_header",attrs:{slot:"title"},slot:"title"},[i("span",[t._v("这是一段信息")]),i("div",{staticClass:"task-detail-action-list"},[i("span",{staticClass:"el-icon-turn-off"}),i("span",{staticClass:"el-icon-edit"}),i("span",{staticClass:"el-icon-tickets"}),i("span",{staticClass:"el-icon-circle-close"})])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(s){t.dialogVisible=!1}}},[t._v("确 定")])],1)]),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:24}},[i("p",{staticClass:"title"},[t._v("待办任务")]),i("TodoList",{on:{handelTag:t.handelTag}})],1)],1)],1)},l=[],o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"todo_scroll",attrs:{"infinite-scroll-disabled":"disabled"}},[i("el-row",{attrs:{gutter:20}},t._l(t.count,(function(s){return i("el-col",{key:s,attrs:{xs:24,sm:12,md:8,lg:8,xl:6}},[i("div",{staticClass:"grid-content bg-purple",on:{click:function(i){return t.handelTag(s)}}},[i("div",{staticClass:"todo_header"},[i("p",[t._v("确认收费(二)测试24万")]),i("span",[t._v("2020-06-24")])]),i("div",{staticClass:"todo_tip"},[i("div",[i("p",[i("i",{staticClass:"el-icon-postcard"}),i("span",[t._v("垫资")])]),i("p",[i("i",{staticClass:"el-icon-user"}),i("span",[t._v("张三")])])]),i("div",{staticClass:"todo_tip_gurp"},[i("p",[i("i",{staticClass:"el-icon-alarm-clock"}),i("span",[t._v("2020-06-24")])]),i("p",[i("i",{staticClass:"tag"}),i("span",{staticClass:"tag-text"},[t._v("正常")])])])])])])})),1),t.loading?i("p",[t._v("加载中...")]):t._e(),t.noMore?i("p",[t._v("没有更多了")]):t._e()],1)},e=[],n={data(){return{count:10,loading:!1}},computed:{noMore(){return this.count>=20},disabled(){return this.loading||this.noMore}},methods:{load(){this.loading=!0,setTimeout(()=>{this.count+=2,this.loading=!1},2e3)},handelTag(t){this.$emit("handelTag",t)}}},c=n,r=(i("f6f5"),i("9ca4")),d=Object(r["a"])(c,o,e,!1,null,null,null),u=d.exports,p={components:{TodoList:u},data(){return{dialogVisible:!1}},methods:{handelTag(t){console.log(t),this.dialogVisible=!0}}},f=p,v=(i("ff2d"),Object(r["a"])(f,a,l,!1,null,"7741a338",null));s["default"]=v.exports},"71cb":function(t,s,i){},ca1a:function(t,s,i){},f6f5:function(t,s,i){"use strict";var a=i("ca1a"),l=i.n(a);l.a},ff2d:function(t,s,i){"use strict";var a=i("71cb"),l=i.n(a);l.a}}]);
//# sourceMappingURL=list.3bb4b086.js.map