(this.webpackJsonpcointrace=this.webpackJsonpcointrace||[]).push([[12],{270:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(14),l=a(1),o=a(3),c=a.n(o),i=a(16),u=a(0),s=a(2),m=a.n(s),p=a(54),d=a(227),f=a(260),g=a(225),h=a(280),y=a(245),E=a(244),b=a(226),v=a(59),w=a(44),O=a(105),j=a.n(O),x=a(282),k=a(252),S=a(259),C=a(254),N=a(255),q=a(253),P=a(281),T=a(247),A=a(251),z=a(250),F=a(246),J=a(248),R=a(249),H=a(256),I=a(264),L=a(218),D=Object(L.a)((function(e){return{wrapper:{height:"80vh",userSelect:"none",textAlign:"center",width:"100%",flex:1,flexDirection:"column",marginTop:"10vh",overflowY:"hidden"},accordion:{width:"100%"},accordionDetails:{width:"90vw",height:"50vh",overflowY:"hidden",margin:"auto"},icon:{width:"100%",height:"100%",color:e.palette.secondary.main},iconBox:{width:50,marginRight:10},title:{"font-weight":100},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeadingProfit:{fontSize:e.typography.pxToRem(15),color:"green",textAlign:"right",flexGrow:1},secondaryHeadingLoss:{fontSize:e.typography.pxToRem(15),color:"red",textAlign:"right",flexGrow:1},table:{border:0},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}}));var B=function(){var e=D(),t=m.a.useState(!1),a=Object(u.a)(t,2),o=a[0],s=a[1],O=m.a.useState({}),L=Object(u.a)(O,2),B=L[0],G=L[1],Q=m.a.useState({}),W=Object(u.a)(Q,2),Y=(W[0],W[1],m.a.useState(!0)),M=Object(u.a)(Y,2),K=M[0],U=M[1],V=m.a.useState({}),X=Object(u.a)(V,2),Z=X[0],$=X[1],_=m.a.useState(!1),ee=Object(u.a)(_,2),te=ee[0],ae=ee[1],ne=m.a.useState({name:"",value:Number(),quantity:Number()}),re=Object(u.a)(ne,2),le=re[0],oe=re[1],ce=function(){ae(!1)};m.a.useEffect((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()("https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/tickers");case 2:t=e.sent,G(t.data),$(JSON.parse(localStorage.getItem("portfolio"))||{}),U(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var ie=Object.keys(B).sort();return m.a.createElement(m.a.Fragment,null,m.a.createElement(w.a,{title:"My Portfolio",description:"Track your portfolio"}),m.a.createElement(p.a,{justifyCenter:!0,alignCenter:!0,className:e.wrapper},K?m.a.createElement(d.a,null):Object.keys(Z).length?Object.keys(Z).map((function(t,a){var n=0,r=0;Z[t].forEach((function(e){n+=e.value*e.quantity,r+=e.quantity}));var l,u=((B[t].last-n/r)/(n/r)*100).toFixed(2);return console.log(n,r,u),m.a.createElement(h.a,{key:t+a,expanded:o===t,onChange:(l=t,function(){var e=Object(i.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!!a&&l);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),TransitionProps:{unmountOnExit:!0},className:e.accordion},m.a.createElement(E.a,{expandIcon:m.a.createElement(v.c,null),"aria-controls":t+"bh-content",id:t+"bh-header"},m.a.createElement(g.a,{className:e.heading},B[t].name.split("/")[0]),m.a.createElement(g.a,{className:u>0?e.secondaryHeadingProfit:e.secondaryHeadingLoss},u,"%")),m.a.createElement(y.a,{className:e.accordionDetails},m.a.createElement(F.a,null,m.a.createElement(T.a,{className:e.table,"aria-label":"simple table",size:"small"},m.a.createElement(J.a,null,m.a.createElement(R.a,null,m.a.createElement(z.a,null,"Rem"),m.a.createElement(z.a,null,"Cost"),m.a.createElement(z.a,null,"Quant."),m.a.createElement(z.a,null,"P/L"),m.a.createElement(z.a,{align:"right"},"P/L %"))),m.a.createElement(A.a,null,Z[t].map((function(e,a){return m.a.createElement(R.a,{key:t+a},m.a.createElement(z.a,null,m.a.createElement(v.j,{onClick:function(){return function(e,t){var a={};Object.keys(Z).forEach((function(n){if(n!=e)a[n]=Z[n];else{if(1==Z[e].length)return;a[e]=Z[e],a[e].splice(t,1)}})),localStorage.setItem("portfolio",JSON.stringify(a)),$(a)}(t,a)}})),m.a.createElement(z.a,null,e.value),m.a.createElement(z.a,null,e.quantity),m.a.createElement(z.a,null,(B[t].last*e.quantity-e.value*e.quantity).toFixed(2)),m.a.createElement(z.a,null,((B[t].last*e.quantity-e.value*e.quantity)/(e.value*e.quantity)*100).toFixed(2)))})))))))})):"Add transactions to track!",m.a.createElement(k.a,{open:te,onClose:ce,"aria-labelledby":"form-dialog-title"},m.a.createElement(q.a,{id:"form-dialog-title"},"Add new Transaction"),m.a.createElement(C.a,null,m.a.createElement(N.a,null,"Enter transaction details to track"),m.a.createElement(H.a,{variant:"outlined",className:e.formControl},m.a.createElement(P.a,{htmlFor:"outlined-age-native-simple"},"Coin"),m.a.createElement(I.a,{native:!0,value:le.name,onChange:function(e){oe(Object(l.a)(Object(l.a)({},le),{},{name:e.target.value}))},label:"Coin",inputProps:{name:"coin",id:"outlined-age-native-simple"}},m.a.createElement("option",{key:"default",value:""},"Select a coin"),ie.map((function(e){return m.a.createElement("option",{key:e,value:e},e)})))),m.a.createElement(x.a,{margin:"dense",id:"value",label:"value",value:le.value,onChange:function(e){return oe(Object(l.a)(Object(l.a)({},le),{},{value:e.target.value}))},fullWidth:!0}),m.a.createElement(x.a,{margin:"dense",id:"quantity",label:"Quantity",value:le.quantity,onChange:function(e){return oe(Object(l.a)(Object(l.a)({},le),{},{quantity:e.target.value}))},fullWidth:!0})),m.a.createElement(S.a,null,m.a.createElement(b.a,{onClick:ce,color:"primary"},"Cancel"),m.a.createElement(b.a,{onClick:function(e){var t=Object(l.a)(Object(l.a)({},Z),{},Object(n.a)({},le.name,[{value:Number(le.value),quantity:Number(le.quantity)}].concat(Object(r.a)(Z[le.name]||[]))));$(t),localStorage.setItem("portfolio",JSON.stringify(t)),ce()},color:"primary"},"Add"))),m.a.createElement(f.a,{className:e.fab,"aria-label":"add",color:"primary",onClick:function(){ae(!0)}},m.a.createElement(v.f,null))))};t.default=B},44:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(57),o=a(38);function c(e){var t=e.description,a=e.meta,n=e.title,c=e.image,i="".concat(o.h," ").concat(n?"| "+n:"");return r.a.createElement(l.a,{title:i,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:image",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(a)})}c.defaultProps={meta:[],image:"".concat(window.location.origin,"/images/cover.png")};var i=c;t.a=i}}]);