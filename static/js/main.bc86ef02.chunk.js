(this.webpackJsonpLDA_visualization=this.webpackJsonpLDA_visualization||[]).push([[0],{227:function(s,e,i){"use strict";i.r(e);var c=i(1),t=i(38),l=i(2),r=i(187),a=i(17),n=i(16),o=i(93),d=function(){var s={colors:["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"],enableTooltip:!0,deterministic:!1,fontFamily:"DotumChe",fontSizes:[50,110],fontStyle:"normal",fontWeight:"normal",padding:1,rotations:3,rotationAngles:[0],scale:"sqrt",spiral:"archimedean",transitionDuration:1e3},e=Object(l.useState)({}),i=Object(t.a)(e,2),r=i[0],d=i[1],j=Object(l.useState)([]),b=Object(t.a)(j,2),h=b[0],x=b[1];Object(l.useEffect)((function(){fetch("LDA-tag.json").then((function(s){return s.json()})).then((function(s){d(s)})),fetch("LDA-wordlist.json").then((function(s){return s.json()})).then((function(s){x(s)}))}),[]);var p=Array.prototype.slice,O=Function.prototype.call.bind(p);function u(){return O(arguments)}var g=JSON.parse(JSON.stringify(u(r)));null!=r.children&&g[0].children.sort((function(s,e){return e.topic1-s.topic1}));var v=JSON.parse(JSON.stringify(u(r)));null!=r.children&&v[0].children.sort((function(s,e){return e.topic2-s.topic2}));var m=JSON.parse(JSON.stringify(u(r)));null!=r.children&&m[0].children.sort((function(s,e){return e.topic3-s.topic3}));var f=JSON.parse(JSON.stringify(u(r)));null!=r.children&&f[0].children.sort((function(s,e){return e.topic4-s.topic4}));var w=JSON.parse(JSON.stringify(u(r)));null!=r.children&&w[0].children.sort((function(s,e){return e.topic5-s.topic5}));var y=JSON.parse(JSON.stringify(u(r)));null!=r.children&&y[0].children.sort((function(s,e){return e.topic6-s.topic6}));var k=JSON.parse(JSON.stringify(u(r)));null!=r.children&&k[0].children.sort((function(s,e){return e.topic7-s.topic7}));var S=JSON.parse(JSON.stringify(u(r)));null!=r.children&&S[0].children.sort((function(s,e){return e.topic8-s.topic8}));var T=JSON.parse(JSON.stringify(u(r)));null!=r.children&&T[0].children.sort((function(s,e){return e.topic9-s.topic9}));var C=JSON.parse(JSON.stringify(u(r)));null!=r.children&&C[0].children.sort((function(s,e){return e.topic10-s.topic10}));var _=JSON.parse(JSON.stringify(u(r)));null!=r.children&&_[0].children.sort((function(s,e){return e.topic11-s.topic11}));var J=JSON.parse(JSON.stringify(u(r)));null!=r.children&&J[0].children.sort((function(s,e){return e.topic12-s.topic12}));o.a().domain([10,1]).range([600,0]).nice(),o.a().domain([0,g.length-1]).range([0,1e3]),o.a().domain([10,1]).range([600,0]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("head",{children:Object(c.jsx)("title",{children:"LDA\u3092\u7528\u3044\u305fQiita\u306e\u5206\u6790"})}),Object(c.jsxs)("body",{children:[Object(c.jsxs)("section",{class:"hero is-success",children:[Object(c.jsx)("div",{class:"hero-head",children:Object(c.jsx)("nav",{class:"navbar",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{id:"navbarMenuHeroA",class:"navbar-menu",children:Object(c.jsx)("div",{class:"navbar-end",children:Object(c.jsx)("a",{class:"navbar-item is-active",href:"https://github.com/Arasou-0206/qiita_LDA",children:"Github\u3078\u306f\u3053\u3061\u3089"})})})})})}),Object(c.jsx)("div",{class:"hero-body",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("h1",{class:"title is-1 has-text-black",children:"LDA\u3092\u7528\u3044\u305fQiita\u8a18\u4e8b\u306e\u30c8\u30d4\u30c3\u30af\u53ef\u8996\u5316"}),Object(c.jsx)("h2",{class:"subtitle is-6 has-text-black",children:"Qiita\u306b\u6295\u7a3f\u3055\u308c\u3066\u3044\u308b\u8a18\u4e8b\u3068\u30bf\u30b0\u3092\u7528\u3044\u3066\u3001Qiita\u5185\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8abf\u3079\u53ef\u8996\u5316\u3057\u307e\u3057\u305f\u3002 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u6280\u8853\u5171\u6709\u30b5\u30a4\u30c8\u3068\u3057\u3066\u6700\u3082\u4f7f\u7528\u3055\u308c\u3066\u3044\u308bQiita\u306e\u8a18\u4e8b\u306e\u30c8\u30d4\u30c3\u30af\u3092\u77e5\u308b\u3053\u3068\u3067\u3001\u65e5\u672c\u56fd\u5185\u5185\u306e\u6280\u8853\u30c8\u30d4\u30c3\u30af\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u307e\u305a\u306f\u5168\u4f53\u3092\u898b\u3066\u3044\u305f\u3060\u304d\u3001\u305d\u306e\u5f8c\u30dc\u30bf\u30f3\u307e\u305f\u306f\u753b\u9762\u4e0a\u90e8\u306e\u30c8\u30d4\u30c3\u30af\u4e00\u89a7\u304b\u3089\u898b\u305f\u3044\u30c8\u30d4\u30c3\u30af\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3001\u4efb\u610f\u306e\u30c8\u30d4\u30c3\u30af\u3078\u79fb\u52d5\u3057\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})})]}),Object(c.jsx)("nav",{class:"navbar is-fixed-top",children:Object(c.jsxs)("div",{id:"navbarExampleTransparentExample",class:"navbar-menu",children:[Object(c.jsxs)("div",{class:"navbar-start",children:[Object(c.jsx)("a",{class:"navbar-item",href:"#",children:Object(c.jsx)("strong",{children:"Home"})}),Object(c.jsxs)("div",{class:"navbar-item has-dropdown is-hoverable",children:[Object(c.jsx)("a",{class:"navbar-link",children:"\u30c8\u30d4\u30c3\u30af\u4e00\u89a7"}),Object(c.jsxs)("div",{class:"navbar-dropdown is-boxed",children:[Object(c.jsx)("a",{class:"navbar-item",href:"#topic1",children:"Topic1"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic2",children:"Topic2"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic3",children:"Topic3"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic4",children:"Topic4"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic5",children:"Topic5"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic6",children:"Topic6"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic7",children:"Topic7"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic8",children:"Topic8"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic9",children:"Topic9"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic10",children:"Topic10"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic11",children:"Topic11"}),Object(c.jsx)("a",{class:"navbar-item",href:"#topic12",children:"Topic12"})]})]})]}),Object(c.jsx)("div",{class:"navbar-end",children:Object(c.jsx)("div",{class:"navbar-item",children:Object(c.jsxs)("div",{class:"field is-grouped",children:[Object(c.jsx)("p",{class:"control",children:Object(c.jsx)("a",{class:"button is-primary",href:"https://vdslab.jp/products",children:Object(c.jsx)("span",{children:"\u7814\u7a76\u5ba4\u30db\u30fc\u30e0\u30da\u30fc\u30b8"})})}),Object(c.jsx)("p",{class:"control",children:Object(c.jsx)("a",{class:"button is-dark",href:"https://github.com/Arasou-0206/qiita_LDA",children:Object(c.jsx)("span",{children:"Github\u3078\u306f\u3053\u3061\u3089"})})})]})})})]})}),Object(c.jsx)("div",{class:"navbar-start",children:Object(c.jsx)("div",{class:"navbar-item",children:Object(c.jsxs)("div",{class:"buttons",children:[Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic1",children:Object(c.jsx)("strong",{children:"Topic1"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic2",children:Object(c.jsx)("strong",{children:"topic2"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic3",children:Object(c.jsx)("strong",{children:"topic3"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic4",children:Object(c.jsx)("strong",{children:"topic4"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic5",children:Object(c.jsx)("strong",{children:"topic5"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic6",children:Object(c.jsx)("strong",{children:"topic6"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic7",children:Object(c.jsx)("strong",{children:"topic7"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic8",children:Object(c.jsx)("strong",{children:"topic8"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic9",children:Object(c.jsx)("strong",{children:"topic9"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic10",children:Object(c.jsx)("strong",{children:"topic10"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic11",children:Object(c.jsx)("strong",{children:"topic11"})}),Object(c.jsx)("a",{class:"button is-success is-large",href:"#topic12",children:Object(c.jsx)("strong",{children:"Topic12"})})]})})}),Object(c.jsxs)("section",{class:"section",children:[Object(c.jsx)("a",{name:"topic1",id:"topic1"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 1"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent",children:[Object(c.jsx)("div",{class:"tile is-parent is-4",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[0]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent is-6",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success is-centered",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:v[0]||[],identity:"tag",value:"topic2",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic2",id:"topic2"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 2"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[1]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:v[0]||[],identity:"tag",value:"topic2",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic3",id:"topic3"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 3"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[2]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:m[0]||[],identity:"tag",value:"topic3",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic4",id:"topic4"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 4"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[3]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:f[0]||[],identity:"tag",value:"topic4",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic5",id:"topic5"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 5"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[4]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:w[0]||[],identity:"tag",value:"topic5",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic6",id:"topic6"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 6"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[5]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:y[0]||[],identity:"tag",value:"topic6",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic7",id:"topic7"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 7"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[6]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:k[0]||[],identity:"tag",value:"topic7",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic8",id:"topic8"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 8"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[7]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:S[0]||[],identity:"tag",value:"topic8",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic9",id:"topic9"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 9"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[8]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:T[0]||[],identity:"tag",value:"topic9",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic10",id:"topic10"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 10"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[9]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:C[0]||[],identity:"tag",value:"topic10",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic11",id:"topic11"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 11"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[10]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:_[0]||[],identity:"tag",value:"topic11",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]}),Object(c.jsx)("a",{name:"topic12",id:"topic12"}),Object(c.jsxs)("div",{class:"box",children:[Object(c.jsx)("h1",{class:"title is-2",children:"topic 12"}),Object(c.jsx)("div",{class:"tile is-success",children:Object(c.jsxs)("div",{class:"tile is-parent is-2",children:[Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"Word Cloud"}),Object(c.jsx)("p",{class:"subtitle",children:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u4e0a\u4f4d30\u4ef6\u306e\u5358\u8a9e\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(c.jsx)("div",{class:"box has-background-white",style:{width:"500px",height:"600px"},children:Object(c.jsx)(a.a,{options:s,words:h[11]||[]||[]})})]})}),Object(c.jsx)("div",{class:"tile is-parent",children:Object(c.jsxs)("article",{class:"tile is-child box has-background-success",children:[Object(c.jsx)("p",{class:"title",children:"TreeMap"}),Object(c.jsx)("p",{class:"subtitle",children:"Topic\u3092\u7528\u3044\u3066\u3069\u306e\u30bf\u30b0\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u304b\u8868\u793a\u3057\u305f\u7d50\u679c\u3067\u3059\u3002"}),Object(c.jsx)("div",{class:"container",style:{width:"1000px",height:"600px"},children:Object(c.jsx)(n.a,{root:J[0]||[],identity:"tag",value:"topic12",innerPadding:3,outerPadding:3,orientLabel:!1,margin:{top:10,right:10,bottom:10,left:10},label:"tag",labelSkipSize:11,labelTextColor:"#0d0d0d",colors:{scheme:"yellow_orange_brown"},borderColor:{from:"color",modifiers:[["darker","0.2"]]},animate:!0,motionStiffness:90,motionDamping:11})})]})})]})})]})]}),Object(c.jsx)("div",{class:"navbar-end",children:Object(c.jsx)("div",{class:"navbar-item",children:Object(c.jsx)("div",{class:"buttons",children:Object(c.jsx)("p",{id:"pageTop",children:Object(c.jsx)("a",{class:"button is-success is-large",href:"#",children:Object(c.jsx)("strong",{children:"Page Top"})})})})})}),Object(c.jsx)("br",{}),Object(c.jsx)("footer",{class:"footer",children:Object(c.jsx)("div",{class:"content has-text-centered",children:Object(c.jsx)("p",{children:"2020\u5e74\u5ea6\u5352\u696d\u6f14\u7fd2\u8ab2\u984c"})})})]})]})};Object(r.render)(Object(c.jsx)(d,{}),document.querySelector("#content"))},266:function(s,e){}},[[227,1,2]]]);
//# sourceMappingURL=main.bc86ef02.chunk.js.map