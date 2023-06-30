"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var a,r=n(861),v=n(439),o=n(757),i=n.n(o),f=n(643),u=n(791),p=n(14),h=n(689),l=n(377),s=n(168),x=n(444).ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  & li {\n    list-style: none;\n    max-width: 150px;\n    transition: transform 250ms ease-out;\n    &:hover {\n      transform: translate(0px, 0px) scale(1.03, 1.03);\n    }\n\n    & img {\n      width: 150px;\n      min-height: 225px;\n    }\n  }\n"]))),L=n(184),A=function(){var t=(0,u.useState)(""),e=(0,v.Z)(t,2),n=e[0],a=e[1],o=(0,h.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.y)("/movie/".concat(o,"/credits"));case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p.Am.error("Sory error credits",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[o,a]),n&&(0,L.jsx)("div",{children:(0,L.jsx)(x,{children:n.map((function(t){var e=t.id,n=t.profile_path,a=t.name,r=t.character;return(0,L.jsxs)("li",{children:[(0,L.jsx)("img",{src:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):l,alt:a,width:80}),(0,L.jsx)("p",{children:a}),(0,L.jsxs)("span",{children:["Character : ",r]})]},e)}))})})}},377:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=736.16358bea.chunk.js.map