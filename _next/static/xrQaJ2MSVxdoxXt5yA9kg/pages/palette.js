(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{T0AG:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/palette",function(){return n("vNSZ")}])},gvr7:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},vNSZ:function(t,e,n){"use strict";n.r(e),n.d(e,"SectionTitle",(function(){return A}));var o=n("wx14"),r=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),c=n("md7G"),l=n("foSv"),u=n("q1tI"),s=n.n(u),p=n("vOnD"),f=n("8aTD"),d=n("s1MD"),b=n("JHyu"),h=n("tHw4"),m=n("l+Tb"),y=n("qVHz"),g=n("exWN"),v=n("gvr7"),x=n.n(v),w=n("2LpV"),O=s.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(t){Object(i.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleClick=function(e){x()(t.ghost),document.execCommand("copy")},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=s.a.Children.only(this.props.children);return[s.a.cloneElement(e,{onClick:this.handleClick}),O("div",{ref:function(e){return t.ghost=e},children:this.props.text,style:{position:"absolute",zIndex:-1,opacity:0}})]}}]),n}(s.a.Component),C=function(t){return Object.keys(t).map((function(e){return{name:e,value:t[e]}}))},N=Object(p.default)(f.a).withConfig({displayName:"palette__ColorChip",componentId:"sc-1d2yf-0"})(["height:100px;width:100%;border-radius:2px 2px 0 0;transition:all 0.1s ease;"]),S=p.default.button.withConfig({displayName:"palette__HexButton",componentId:"sc-1d2yf-1"})(["width:100%;display:inline-block;position:relative;font-family:inherit;font-size:12px;margin:0;padding:0;color:inherit;text-align:left;background-color:transparent;border:0;border-radius:0;appearance:none;transition:all 0.125s ease;box-shadow:0 4px 4px 0 rgba(0,0,0,0.08);&:hover{box-shadow:0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);}&:active{transform:scale(0.9);}& > span{top:0;left:0;position:absolute;font-size:12px;padding:8px 0;width:100%;color:#fff;border-radius:2px 2px 0 0;background-color:#001833;text-align:center;opacity:0;transition-property:opacity;transition-duration:0.125s;transition-timing-function:ease-out;}&:hover > span{opacity:1;}"]),T=function(t){var e=t.name,n=t.value;return O(d.a,{borderWidth:0,m:0},O(k,{text:n},O(S,null,O(N,{bg:n}),O("span",null,"Press to copy"),O(f.a,{p:2},O(b.a,{fontSize:0,mb:1,align:"left"},e),O(w.b,{fontSize:0,align:"left",color:"gray"},n)))))},R=function(t){return O(f.a,Object(o.a)({},t,{width:[.5,null,1/3,.25,.2],mb:4,px:2}))},_=function(t){return t.colors.map((function(t){return O(R,{key:t.key},O(T,t))}))},A=function(t){return O(h.a.h3,Object(o.a)({fontSize:[2,3],bold:!0,mt:[2,4]},t))},E=Object(m.a)().palette,z={};e.default=function(t){return O(f.a,null,O(w.d,null,"Palette"),O(w.c,null,"The design system includes a palette that can be used to theme components."),Object.keys(E).map((function(t){if("object"===typeof E[t])return O(s.a.Fragment,null,O(A,null,t),O(y.a,{wrap:!0,mx:-2,pt:4},O(_,{colors:C(E[t])})),O(g.a,null));z[t]=E[t]})),O(y.a,{wrap:!0,mx:-2,pt:4},O(_,{colors:C(z)})))}}},[["T0AG",0,1,5,2,3,4]]]);