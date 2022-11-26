"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{6713:function(n,e,t){t.d(e,{Ii:function(){return u},Pv:function(){return f},bs:function(){return h},cJ:function(){return d},cu:function(){return o},pS:function(){return s},yW:function(){return p}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u={IMAGE_URL:"https://image.tmdb.org/t/p"},o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/trending/all/week",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150",page:e}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/genre/movie/list",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e,"/credits"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e,"/reviews"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150",query:e,page:t}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},9779:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,u,o,s,p,f=t(5861),d=t(885),h=t(4687),l=t.n(h),v=t(7689),x=t(2791),g=t(6713),m=t(168),b=t(7691),Z=b.ZP.h3(r||(r=(0,m.Z)(["\n    margin-top:40px;\n    font-size: 40px;\n    text-transform: uppercase;\n"]))),w=b.ZP.ul(a||(a=(0,m.Z)(["\n  margin-top:35px;\n  height: 100%;\n  scroll-margin: 30px;\n"]))),k=b.ZP.li(c||(c=(0,m.Z)(["\n  border-bottom: 2px solid lightgrey;\n  overflow: auto;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),y=b.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n"]))),_=b.ZP.img(u||(u=(0,m.Z)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),P=b.ZP.b(o||(o=(0,m.Z)(["\n  text-transform: uppercase;\n  color: var(--color-dark-grey);\n"]))),j=b.ZP.p(s||(s=(0,m.Z)(["\n  padding: 20px 0;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.67;\n  color: var(--color-dark-grey);\n"]))),I=(b.ZP.p(p||(p=(0,m.Z)(["\n  margin-bottom: 30px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 30px;\n  color: red;\n"]))),t(7173)),L=t(184),U=function(){var n=(0,v.UO)().movieId,e=(0,x.useState)([]),t=(0,d.Z)(e,2),r=t[0],a=t[1],c=(0,x.useState)(!1),i=(0,d.Z)(c,2),u=i[0],o=i[1];(0,x.useEffect)((function(){var e=function(){var e=(0,f.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.cJ)(n);case 3:t=e.sent,console.log(t),a(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return r.length>0?(0,L.jsx)(w,{children:r.map((function(n){var e=n.id,t=n.author,r=n.author_details,a=n.content,c=function(n){var e=I;return n&&(e=n.startsWith("/http")?n.slice(1):"".concat(g.Ii.IMAGE_URL,"/w200/").concat(n)),e}(r.avatar_path);return(0,L.jsxs)(k,{children:[(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{src:u?c:I,width:"50",height:"50",onLoad:function(){return o(!0)}}),(0,L.jsx)(P,{children:t})]}),(0,L.jsx)(j,{children:a})]},e)}))}):(0,L.jsx)(Z,{children:"There is no reviews."})}},7173:function(n,e,t){n.exports=t.p+"static/media/Default.dc3f3be43bf915f0d62d.png"}}]);
//# sourceMappingURL=779.3cee79ce.chunk.js.map