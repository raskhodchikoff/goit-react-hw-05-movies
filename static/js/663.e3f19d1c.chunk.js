"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{6663:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,a=t(885),c=t(470),u=t(2791),i=t(4390),o=t(168),s=t(6444).ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n  padding-top: 10px;\n  color: black;\n"]))),p=t(184),f=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],o=(0,c.UO)().movieId;return(0,u.useEffect)((function(){(0,i.M1)(o).then((function(e){return r(e.cast)}))}),[o]),(0,p.jsx)(s,{children:t.map((function(e){var n=e.id,t=e.profile_path,r=e.name,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w200".concat(t):"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg",alt:"title",width:140,height:200,loading:"lazy"}),(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:["Character: ",a]})]},n)}))})}},4390:function(e,n,t){t.d(n,{Df:function(){return o},M1:function(){return f},TP:function(){return p},tx:function(){return l},z1:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="5968db72ea451807fee259e98f2e91a5",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("search/movie?query=".concat(n,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=663.e3f19d1c.chunk.js.map