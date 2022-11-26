"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{6713:function(A,n,e){e.d(n,{Ii:function(){return i},Pv:function(){return p},bs:function(){return l},cJ:function(){return g},cu:function(){return s},pS:function(){return c},yW:function(){return u}});var t=e(5861),r=e(4687),a=e.n(r),o=e(1044);o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i={IMAGE_URL:"https://image.tmdb.org/t/p"},s=function(){var A=(0,t.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/trending/all/week",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150",page:n}});case 2:return e=A.sent,A.abrupt("return",e);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),c=function(){var A=(0,t.Z)(a().mark((function A(){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/genre/movie/list",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return n=A.sent,A.abrupt("return",n);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),u=function(){var A=(0,t.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/movie/".concat(n),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,t.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/movie/".concat(n,"/credits"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),g=function(){var A=(0,t.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/movie/".concat(n,"/reviews"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),l=function(){var A=(0,t.Z)(a().mark((function A(n,e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.ZP.get("/search/movie",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150",query:n,page:e}});case 2:return t=A.sent,A.abrupt("return",t);case 4:case"end":return A.stop()}}),A)})));return function(n,e){return A.apply(this,arguments)}}()},8933:function(A,n,e){e.d(n,{e:function(){return P}});var t,r,a,o,i,s,c,u=e(5861),p=e(885),g=e(4687),l=e.n(g),f=e(168),d=e(7691),x=d.ZP.ul(t||(t=(0,f.Z)(["\n  display: grid;\n  margin-top:40px;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  margin-bottom: 50px;\n"]))),h=e(6731),m=e(7689),E=d.ZP.li(r||(r=(0,f.Z)([""]))),v=d.ZP.img(a||(a=(0,f.Z)(["\n  width: 100%;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  object-fit: cover;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),\n    0 2px 10px -1px rgb(0 0 0 / 12%);\n  transition: all 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.05) translateY(-5px);\n    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);\n  }\n  @media screen and (max-width: 767px) {\n    min-height: 420px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    min-height: 450px;\n  }\n  @media screen and (min-width: 1024px) {\n    min-height: 310px;\n  }\n"]))),C=d.ZP.h2(o||(o=(0,f.Z)(["\n  min-height: 28px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: var(--color-dark-grey);\n"]))),Q=d.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),b=d.ZP.p(s||(s=(0,f.Z)(["\n  display: inline-block;\n  margin-right: 10px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--color-green);\n"]))),Z=d.ZP.p(c||(c=(0,f.Z)(["\n  min-width: 36px;\n  height: 16px;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  text-align: center;\n  line-height: 16px;\n  color: #ffffff;\n  background-color: ",";\n"])),(function(A){return A.rating<=4?"tomato":A.rating<=7?"#F78D05":A.rating<=10?"var(--color-green)":void 0})),y=e(2791),B=e(6713),I=e(6419),w=e(184),k=function(A){var n=A.id,e=A.posterPath,t=A.title,r=A.genres,a=A.releaseDate,o=A.rating,i=(0,y.useState)(!1),s=(0,p.Z)(i,2),c=s[0],u=s[1],g=(0,m.TH)();return(0,w.jsxs)(E,{children:[(0,w.jsx)(h.rU,{to:"/movies/".concat(n),state:{from:g},children:(0,w.jsx)(v,{src:e&&c?"".concat(B.Ii.IMAGE_URL,"/w300").concat(e):I,alt:t,onLoad:function(){return u(!0)},width:"300",height:"450"})}),(0,w.jsx)(C,{children:t}),(0,w.jsxs)(Q,{children:[(0,w.jsxs)(b,{children:[r," | ",a.substring(0,4)]}),(0,w.jsx)(Z,{rating:o,children:o.toFixed(1)})]})]})},P=function(A){var n=A.trendingFils,e=(0,y.useState)([]),t=(0,p.Z)(e,2),r=t[0],a=t[1];return(0,y.useEffect)((function(){var A=function(){var A=(0,u.Z)(l().mark((function A(){var n;return l().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,B.pS)();case 3:n=A.sent,a(n.data.genres),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log("error");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}();A()}),[]),(0,w.jsx)(x,{children:n.map((function(A){var n=A.id,e=A.poster_path,t=A.title,a=A.release_date,o=A.vote_average,i=A.genre_ids,s=r.filter((function(A){return i.includes(A.id)})).map((function(A){return A.name})).join(", ");return(0,w.jsx)(k,{id:n,posterPath:e,title:t,releaseDate:a||"\u2015",rating:o,genres:s||"\u2015"},n)}))})}},7605:function(A,n,e){e.d(n,{Z:function(){return o}});e(2791);var t=e(4162),r=e(5557),a=e(184);function o(A){var n=A.handleClick,e=A.page,o=A.totalPages;return(0,a.jsx)(t.Z,{spacing:2,children:(0,a.jsx)(r.Z,{onChange:function(A,e){return n(e)},count:o,variant:"outlined",page:e,sx:{".MuiPaginationItem-root.Mui-selected":{color:"green",border:"1px solid green",backgroundColor:"rgba(25, 118, 210, 0.12)"},".MuiPagination-ul":{justifyContent:"center",marginBottom:"50px"}}})})}},5837:function(A,n,e){e.d(n,{Q:function(){return a}});var t,r=e(168),a=e(7691).ZP.main(t||(t=(0,r.Z)(["\n  \n"])))},8357:function(A,n,e){e.r(n),e.d(n,{default:function(){return j}});var t,r,a,o,i,s,c=e(2982),u=e(5861),p=e(885),g=e(4687),l=e.n(g),f=e(2791),d=e(6713),x=e(6731),h=e(5403),m=e(6863),E=e(4626),v=(0,m.ZP)(E.Z)({"& label.Mui-focused":{color:"var(--color-green)"},"& .MuiInput-underline:after":{borderBottomColor:"var(--color-green)"}}),C=e(6015),Q=e(184),b=function(A){var n=A.onSubmit;return(0,Q.jsx)(C.Z,{component:"form",sx:{"& > :not(style)":{m:1,pb:2}},onSubmit:function(A){return n(A)},children:(0,Q.jsxs)(C.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,Q.jsx)(h.Z,{sx:{color:"action.active",mr:1}}),(0,Q.jsx)(v,{name:"query",type:"text",label:"Tap to fid film",variant:"standard",sx:{width:"400px"}})]})})},Z=e(8933),y=e(168),B=e(7691),I=((0,B.ZP)(x.OL)(t||(t=(0,y.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),B.ZP.p(r||(r=(0,y.Z)(["\n  padding: 8px 0;\n  font-size: 20px;\n  display: inline-block;\n"]))),B.ZP.li(a||(a=(0,y.Z)(["\n  \n"]))),B.ZP.h1(o||(o=(0,y.Z)(["\n  padding: 8px 0;\n  font-size: 40px;\n  display: inline-block;\n  margin-bottom: 10px;\n"]))),B.ZP.ul(i||(i=(0,y.Z)(["\n  margin-top: 15px;\n"]))),B.ZP.main(s||(s=(0,y.Z)(["\n  \n"])))),w=e(5837),k=e(8009),P=(e(5462),function(){return(0,Q.jsx)(k.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})}),S=e(7605),j=function(){var A,n=(0,f.useState)("idle"),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)([]),o=(0,p.Z)(a,2),i=o[0],s=o[1],g=(0,x.lr)(),h=(0,p.Z)(g,2),m=h[0],E=h[1],v=(0,f.useState)(1),C=(0,p.Z)(v,2),y=C[0],B=C[1],j=(0,f.useState)(0),J=(0,p.Z)(j,2),F=J[0],U=J[1],T=null!==(A=m.get("name"))&&void 0!==A?A:"",R=m.get("page")||1,V=function(A){A.preventDefault(),E({name:A.target.elements.query.value,page:R})};return(0,f.useEffect)((function(){if(T){var A=function(){var A=(0,u.Z)(l().mark((function A(){var n;return l().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,d.bs)(T,R);case 3:if(n=A.sent,s((0,c.Z)(n.data.results)),B(n.data.page),U(n.data.total_pages),0!==i.length){A.next=9;break}throw new Error;case 9:r("resolved"),A.next=16;break;case 12:A.prev=12,A.t0=A.catch(0),r("rejected"),k.Am.error("We cannot find movie with such search parameter",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});case 16:case"end":return A.stop()}}),A,null,[[0,12]])})));return function(){return A.apply(this,arguments)}}();A()}}),[y,R,T,m,i.length]),"idle"===t||"pending"===t?(0,Q.jsx)(I,{children:(0,Q.jsx)(b,{onSubmit:V,value:T})}):"resolved"===t?(0,Q.jsxs)(I,{children:[(0,Q.jsx)(b,{onSubmit:V,value:T}),i&&(0,Q.jsxs)(w.Q,{children:[(0,Q.jsx)(Z.e,{trendingFils:i}),(0,Q.jsx)(S.Z,{page:y,handleClick:function(A){B(A),E({name:T,page:A})},totalPages:F})]})]}):"rejected"===t?(0,Q.jsxs)(I,{children:[(0,Q.jsx)(b,{onSubmit:V,value:T}),(0,Q.jsx)(P,{})]}):void 0}},6419:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=357.cac7a5a1.chunk.js.map