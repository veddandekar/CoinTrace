(this.webpackJsonpcointrace=this.webpackJsonpcointrace||[]).push([[12],{268:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(1),c=a(14),o=a(3),i=a.n(o),l=a(16),s=a(0),u=a(2),m=a.n(u),p=a(176),f=a(227),h=a(225),g=a(279),d=a(245),v=a(244),w=a(278),E=a(223),b=a(59),y=a(247),x=a(251),S=a(250),O=a(246),j=a(248),k=a(249),N=a(54),C=a(45),I=a(103),J=a.n(I),T=a(218),z=Object(T.a)((function(e){return{wrapper:{height:"80vh",userSelect:"none",textAlign:"center",width:"100%",flex:1,flexDirection:"column",overflowY:"hidden"},accordion:{width:"100%"},accordionDetails:{width:"80vw",height:"50vh",overflowY:"hidden",margin:"auto"},icon:{width:"100%",height:"100%",color:e.palette.secondary.main},iconBox:{width:50,marginRight:10},search:{marginTop:"10vh"},title:{"font-weight":100},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,textAlign:"right",flexGrow:1},table:{border:0},root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"70vw",flexGrow:1},input:{marginLeft:e.spacing(1),flex:1}}}));var P=function(){var e=z(),t=m.a.useState(!1),a=Object(s.a)(t,2),o=a[0],u=a[1],I=m.a.useState({}),T=Object(s.a)(I,2),P=T[0],A=T[1],R=m.a.useState({}),W=Object(s.a)(R,2),D=W[0],B=W[1],G=m.a.useState({}),H=Object(s.a)(G,2),L=H[0],Y=H[1],_=m.a.useState(""),q=Object(s.a)(_,2),F=q[0],Z=q[1],K=m.a.useState([]),M=Object(s.a)(K,2),Q=M[0],U=M[1],V=m.a.useState(!0),X=Object(s.a)(V,2),$=X[0],ee=X[1],te=m.a.useState(!0),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1],ce=m.a.useState(0),oe=Object(s.a)(ce,2),ie=oe[0],le=oe[1];m.a.useEffect((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J()("https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/tickers");case 2:t=e.sent,a=JSON.parse(localStorage.getItem("favs"))||[],n={},a.forEach((function(e){n[e]=t.data[e]})),Y(n),A(t.data),ee(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),m.a.useEffect((function(){ee(!0),clearTimeout(ie),le(setTimeout((function(){if(F.length){var e={};Object.keys(P).forEach((function(t,a){t.includes(F.toLowerCase())&&(e[t]=P[t])})),B(e)}else B(L);ee(!1)}),600))}),[F,P]);var se=JSON.parse(localStorage.getItem("favs"))||[];return m.a.createElement(m.a.Fragment,null,m.a.createElement(C.a,{title:"Welcome",description:"Welcome to React PWA"}),m.a.createElement(p.a,{maxWidth:"sm",className:"full-height"},m.a.createElement(N.a,{alignCenter:!0,className:e.search},m.a.createElement(E.a,{component:"form",className:e.root},m.a.createElement(w.a,{className:e.input,placeholder:"Search Cryptos",value:F,onChange:function(e){return Z(e.target.value)}}))),m.a.createElement(N.a,{justifyCenter:!0,alignCenter:!0,className:e.wrapper},$?m.a.createElement(f.a,null):se.length||F.length?Object.keys(D).map((function(t,a){return m.a.createElement(g.a,{key:t+a,expanded:o===t,onChange:(s=t,function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re(!0),a){e.next=4;break}return u(!1),e.abrupt("return");case 4:return u(s),e.next=7,J()("https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/trades?market="+s);case 7:n=e.sent,r=[],n.data.forEach((function(e){r.push({price:e.price,time:e.created_at})})),U(r),re(!1);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),className:e.accordion},m.a.createElement(v.a,{expandIcon:m.a.createElement(b.c,null),"aria-controls":t+"bh-content",id:t+"bh-header"},se.includes(t)?m.a.createElement(b.d,{onClick:function(e){return function(e,t){e.stopPropagation(),ee(!0);var a=JSON.parse(localStorage.getItem("favs"))||[],n={};localStorage.setItem("favs",JSON.stringify(a.filter((function(e){return e!=t&&(n[t]=L[t],!0)})))),Y(n),ee(!1)}(e,t)}}):m.a.createElement(b.h,{onClick:function(e){return function(e,t){e.stopPropagation(),ee(!0);var a=JSON.parse(localStorage.getItem("favs"))||[];localStorage.setItem("favs",JSON.stringify([t].concat(Object(c.a)(a)))),Y(Object(r.a)(Object(n.a)({},t,P[t]),L)),ee(!1)}(e,t)}}),m.a.createElement(h.a,{className:e.heading},P[t].name.split("/")[0]),m.a.createElement(h.a,{className:e.secondaryHeading},P[t].last+" ("+P[t].quote_unit+")")),m.a.createElement(d.a,{className:e.accordionDetails},m.a.createElement(O.a,null,ne?m.a.createElement(f.a,null):m.a.createElement(y.a,{className:e.table,"aria-label":"simple table",size:"small"},m.a.createElement(j.a,null,m.a.createElement(k.a,null,m.a.createElement(S.a,null,"Time"),m.a.createElement(S.a,{align:"right"},"Price"))),m.a.createElement(x.a,null,Q.map((function(e,a){return m.a.createElement(k.a,{key:t+a},m.a.createElement(S.a,{component:"th",scope:"row"},e.time.split("T")[1].split("Z")[0]),m.a.createElement(S.a,{align:"right"},e.price))})))))));var s})):"Add coins to favourites!")))};t.default=P},45:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(58),o=a(37);function i(e){var t=e.description,a=e.meta,n=e.title,i=e.image,l="".concat(o.h," ").concat(n?"| "+n:"");return r.a.createElement(c.a,{title:l,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:image",content:i},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(a)})}i.defaultProps={meta:[],image:"".concat(window.location.origin,"/images/cover.png")};var l=i;t.a=l}}]);