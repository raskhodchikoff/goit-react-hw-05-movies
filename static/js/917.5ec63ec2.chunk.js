"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{9055:function(n,e,t){t.d(e,{x:function(){return i}});var r=t(6444),a=t(407),i=(0,r.ZP)("div")(a.Dh,a.$_,a.cp,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK,a.AF)},4162:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(8402),i=t(168),u=t(6444).ZP.div(r||(r=(0,i.Z)([""]))),o=t(184),c=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(a.s5,{strokeColor:"#82919F",strokeWidth:"5",animationDuration:"0.75",width:"256",visible:!0})})}},8917:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,u,o,c=t(885),s=t(2791),p=t(6731),d=t(470),f=t(4162),l=t(6355),x=t(168),m=t(6444),v=m.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  min-width: 400px;\n  margin-left: 10px;\n"]))),h=m.ZP.input(a||(a=(0,x.Z)(["\n  border: 1px solid #82919f;\n  padding: 10px 20px;\n  min-width: 250px;\n"]))),g=m.ZP.button(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 33px;\n  height: 33px;\n  margin-left: -35px;\n  border: 2px #82919f;\n  background-repeat: 2px;\n  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: #82919f;\n  color: white;\n\n  &:hover {\n    background-color: #a4bbd1;\n  }\n"]))),b=t(184),Z=function(n){var e=n.handleSubmit,t=n.value;return(0,b.jsxs)(v,{onSubmit:e,children:[(0,b.jsx)(h,{type:"text",name:"movieName",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",defaultValue:t}),(0,b.jsx)(g,{type:"submit",children:(0,b.jsx)(l.U41,{size:16})})]})},k=t(4390),w=m.ZP.ul(u||(u=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n"]))),y=(0,m.ZP)(p.rU)(o||(o=(0,x.Z)(["\n  min-width: 100%;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    padding: 2px;\n  }\n"]))),j=t(9055),P=function(){var n,e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,p.lr)(),u=(0,c.Z)(i,2),o=u[0],l=u[1],x=(0,d.TH)(),m=null!==(n=o.get("movieName"))&&void 0!==n?n:"";(0,s.useEffect)((function(){""!==m&&(0,k.z1)(m).then((function(n){return a(n.results)}))}),[m]);return(0,b.jsxs)(j.x,{as:"main",children:[(0,b.jsx)(Z,{handleSubmit:function(n){n.preventDefault();var e=n.currentTarget;l({movieName:e.elements.movieName.value})},value:m}),(0,b.jsx)(w,{children:r.length>0&&r.map((function(n){return(0,b.jsx)("div",{children:(0,b.jsx)(y,{to:"/movies/".concat(n.id),state:{from:x},children:n.original_title||n.name})},n.id)}))}),(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)(f.Z,{}),children:(0,b.jsx)(d.j3,{})})]})}},4390:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return d},TP:function(){return p},tx:function(){return f},z1:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),u=t(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o="5968db72ea451807fee259e98f2e91a5",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie?query=".concat(e,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=917.5ec63ec2.chunk.js.map