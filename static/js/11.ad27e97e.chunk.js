(this.webpackJsonpcointrace=this.webpackJsonpcointrace||[]).push([[11],{269:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(1),i=a(14),c=a(3),o=a.n(c),s=a(16),l=a(0),u=a(2),p=a.n(u),m=a(71),d=a(227),h=a(225),f=a(280),g=a(245),b=a(244),v=a(279),x=a(223),w=a(59),O=a(247),E=a(251),k=a(250),j=a(246),y=a(248),S=a(249),N=a(54),W=a(44),C=a(105),R=a.n(C),I=a(218),J=Object(I.a)((function(e){return{wrapper:{height:"80vh",userSelect:"none",textAlign:"center",width:"100%",flex:1,flexDirection:"column",overflowY:"hidden"},accordion:{width:"100%"},accordionDetails:{width:"80vw",height:"50vh",overflowY:"hidden",margin:"auto"},icon:{width:"100%",height:"100%",color:e.palette.secondary.main},iconBox:{width:50,marginRight:10},search:{marginTop:"10vh"},title:{"font-weight":100},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,textAlign:"right",flexGrow:1},table:{border:0},root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"70vw",flexGrow:1},input:{marginLeft:e.spacing(1),flex:1}}}));var L=function(){var e=J(),t=p.a.useState(!1),a=Object(l.a)(t,2),c=a[0],u=a[1],C=p.a.useState({}),I=Object(l.a)(C,2),L=I[0],T=I[1],z=p.a.useState({}),G=Object(l.a)(z,2),P=G[0],A=G[1],D=p.a.useState({}),M=Object(l.a)(D,2),B=M[0],H=M[1],X=p.a.useState(""),Y=Object(l.a)(X,2),_=Y[0],q=Y[1],F=p.a.useState([]),Z=Object(l.a)(F,2),K=Z[0],Q=Z[1],U=p.a.useState(!0),V=Object(l.a)(U,2),$=V[0],ee=V[1],te=p.a.useState(!0),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ie=p.a.useState(0),ce=Object(l.a)(ie,2),oe=ce[0],se=ce[1];p.a.useEffect((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()("https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/tickers");case 2:t=e.sent,a=JSON.parse(localStorage.getItem("favs"))||[],n={},a.forEach((function(e){n[e]=t.data[e]})),H(n),T(t.data),ee(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),p.a.useEffect((function(){ee(!0),clearTimeout(oe),se(setTimeout((function(){if(_.length){var e={};Object.keys(L).forEach((function(t,a){t.includes(_.toLowerCase())&&(e[t]=L[t])})),A(e)}else A(B);ee(!1)}),600))}),[_,L]);var le=JSON.parse(localStorage.getItem("favs"))||[];return p.a.createElement(p.a.Fragment,null,p.a.createElement(W.a,{title:"Welcome",description:"Welcome to React PWA"}),p.a.createElement(m.a,{maxWidth:"sm",className:"full-height"},p.a.createElement(N.a,{alignCenter:!0,className:e.search},p.a.createElement(x.a,{component:"form",className:e.root},p.a.createElement(v.a,{className:e.input,placeholder:"Search Cryptos",value:_,onChange:function(e){return q(e.target.value)}}))),p.a.createElement(N.a,{justifyCenter:!0,alignCenter:!0,className:e.wrapper},$?p.a.createElement(d.a,null):le.length||_.length?Object.keys(P).map((function(t,a){return p.a.createElement(f.a,{key:t+a,expanded:c===t,onChange:(l=t,function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re(!0),a){e.next=4;break}return u(!1),e.abrupt("return");case 4:return u(l),e.next=7,R()("https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/trades?market="+l);case 7:n=e.sent,r=[],n.data.forEach((function(e){r.push({price:e.price,time:e.created_at})})),Q(r),re(!1);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),className:e.accordion},p.a.createElement(b.a,{expandIcon:p.a.createElement(w.c,null),"aria-controls":t+"bh-content",id:t+"bh-header"},le.includes(t)?p.a.createElement(w.d,{onClick:function(e){return function(e,t){e.stopPropagation(),ee(!0);var a=JSON.parse(localStorage.getItem("favs"))||[],n={};localStorage.setItem("favs",JSON.stringify(a.filter((function(e){return e!=t&&(n[t]=B[t],!0)})))),H(n),ee(!1)}(e,t)}}):p.a.createElement(w.h,{onClick:function(e){return function(e,t){e.stopPropagation(),ee(!0);var a=JSON.parse(localStorage.getItem("favs"))||[];localStorage.setItem("favs",JSON.stringify([t].concat(Object(i.a)(a)))),H(Object(r.a)(Object(n.a)({},t,L[t]),B)),ee(!1)}(e,t)}}),p.a.createElement(h.a,{className:e.heading},L[t].name.split("/")[0]),p.a.createElement(h.a,{className:e.secondaryHeading},L[t].last+" ("+L[t].quote_unit+")")),p.a.createElement(g.a,{className:e.accordionDetails},p.a.createElement(j.a,null,ne?p.a.createElement(d.a,null):p.a.createElement(O.a,{className:e.table,"aria-label":"simple table",size:"small"},p.a.createElement(y.a,null,p.a.createElement(S.a,null,p.a.createElement(k.a,null,"Time"),p.a.createElement(k.a,{align:"right"},"Price"))),p.a.createElement(E.a,null,K.map((function(e,a){return p.a.createElement(S.a,{key:t+a},p.a.createElement(k.a,{component:"th",scope:"row"},e.time.split("T")[1].split("Z")[0]),p.a.createElement(k.a,{align:"right"},e.price))})))))));var l})):"Add coins to favourites!")))};t.default=L},44:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(57),c=a(38);function o(e){var t=e.description,a=e.meta,n=e.title,o=e.image,s="".concat(c.h," ").concat(n?"| "+n:"");return r.a.createElement(i.a,{title:s,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:image",content:o},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:s},{name:"twitter:description",content:t}].concat(a)})}o.defaultProps={meta:[],image:"".concat(window.location.origin,"/images/cover.png")};var s=o;t.a=s},71:function(e,t,a){"use strict";var n=a(27),r=a(29),i=a(35),c=a(2),o=(a(28),a(30)),s=a(31),l=a(33),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,p=e.disableGutters,m=void 0!==p&&p,d=e.fixed,h=void 0!==d&&d,f=e.maxWidth,g=void 0===f?"lg":f,b=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(n.a)({className:Object(o.a)(a.root,i,h&&a.fixed,m&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(l.a)(String(g)))]),ref:t},b))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)}}]);