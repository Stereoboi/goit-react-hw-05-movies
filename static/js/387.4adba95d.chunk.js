"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{713:function(n,e,r){r.d(e,{Pv:function(){return p},bs:function(){return f},cJ:function(){return o},cu:function(){return i},yW:function(){return s}});var t=r(861),a=r(757),c=r.n(a),u=r(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/trending/all/day",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(e),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(e,"/credits"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(e,"/reviews"),{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/search/movie",{params:{api_key:"ac2f015efbd63aedea7bf25c08e7a150",query:e}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},387:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,c,u,i,s,p,o,f=r(861),d=r(885),x=r(757),h=r.n(x),l=r(689),v=r(791),m=r(713),b=r(168),g=r(444),Z=g.ZP.div(t||(t=(0,b.Z)(["\n  margin-top:15px;\n"]))),w=g.ZP.div(a||(a=(0,b.Z)(["\n  padding:10px;\n  \n"]))),k=(g.ZP.h2(c||(c=(0,b.Z)(["\n  margin-top:15px;\n"]))),g.ZP.img(u||(u=(0,b.Z)(["\n    width: 100%;\n    object-fit: cover;\n    border-bottom: 1px solid rgb(204, 204, 204);\n"])))),y=g.ZP.h3(i||(i=(0,b.Z)(["\n    margin-bottom: 5px;\n    text-align: center;\n    font-size: 16px;\n    text-transform: uppercase;\n"]))),P=g.ZP.p(s||(s=(0,b.Z)(["\n  margin: auto;\n    height: 100%;\n    font-size: 18px;\n    text-align: center;\n    color: dark-grey;\n      &:not(:last-child) {\n        margin-bottom: 10px;\n      }\n"]))),_=g.ZP.ul(p||(p=(0,b.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n    gap: 20px 10px;\n"]))),j=g.ZP.li(o||(o=(0,b.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 2px 5px 0px, rgb(0 0 0 / 12%) 0px 2px 10px -1px;\n"]))),C=r(184),z=function(){var n=(0,l.UO)().movieId,e=(0,v.useState)(null),r=(0,d.Z)(e,2),t=r[0],a=r[1];if((0,v.useEffect)((function(){var e=function(){var e=(0,f.Z)(h().mark((function e(){var r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Pv)(n);case 3:r=e.sent,a(r),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),t)return(0,C.jsxs)(Z,{children:[(0,C.jsx)(y,{children:"Cast"}),(0,C.jsx)(_,{children:t.map((function(n){return(0,C.jsxs)(j,{children:[(0,C.jsx)(k,{src:"https://image.tmdb.org/t/p/w500/".concat(n.profile_path),alt:n.name,width:"150"}),(0,C.jsxs)(w,{children:[(0,C.jsx)(y,{children:"Name"}),(0,C.jsx)(P,{children:n.name}),(0,C.jsx)(y,{children:"Character"}),(0,C.jsx)(P,{children:n.character})]})]},n.id)}))})]})}}}]);
//# sourceMappingURL=387.4adba95d.chunk.js.map