(()=>{"use strict";var n={365:(n,e,A)=>{A.d(e,{A:()=>b});var t=A(354),o=A.n(t),i=A(314),r=A.n(i),a=A(417),p=A.n(a),c=new URL(A(366),A.b),l=new URL(A(251),A.b),s=new URL(A(907),A.b),d=new URL(A(476),A.b),E=new URL(A(569),A.b),g=new URL(A(32),A.b),B=r()(o()),h=p()(c),C=p()(l),u=p()(s),m=p()(d),f=p()(E),x=p()(g);B.push([n.id,`*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  font-size: 20px;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-position: 50% -70%;\n  background-image: url(${h});\n  background-color: rgba(255,255,255,0.7);\n  background-blend-mode: lighten;\n}\n\n/* General styles */\n.shadow {\n  box-shadow: 2px 2px 8px rgb(60, 60, 60);\n}\n\n/* pinwheel */\n.pinwheel-holder {\n  --skew: -23.5deg;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 700px;\n  width: 100%;  \n  z-index: -1;\n}\n\n.pinwheel {\n  height: 100%;\n  transform: skewY(var(--skew));\n  transform-origin: bottom left;\n}\n\n.pinwheel.layer-one {\n  background-color: #ddbda9;\n}\n\n.pinwheel.layer-two {\n  background-color: #6f794b;\n}\n\n.pinwheel.layer-three {\n  background-color: #6f3582;\n}\n\n.wrapper {\n  max-width: 1800px;\n}\n\n/* header */\nheader,\nsection {\n  padding: 32px 42px;\n}\n\n.frame {\n  position: relative;\n  margin: 12px;\n}\n\n.frame > img {\n  width: 100%;\n}\n\nh1 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n\n  color: white;\n  font-size: 4.5rem;\n  line-height: 1.1;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.about {\n  margin-top: 32px;\n  padding: 1px 24px;\n  background-color: white;\n}\n\n.about > * {\n  margin: 18px 0;\n}\n\nh2 {\n  margin-top: 28px;\n  text-align: center;\n  font-size: 2.3rem;\n}\n\n.link-holder {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n\na.link {\n  --link-button-size: 40px;\n  width: var(--link-button-size);\n  height: var(--link-button-size);\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  background-size: cover;\n}\n\na.link.icon-github {\n  background-image: url(${C});\n}\n\na.link.icon-linkedin {\n  background-image: url(${u});\n}\n\na.link.icon-instagram {\n  background-image: url(${m});\n}\n\na.link.icon-open-in-new {\n  --link-button-size: 32px;\n  background-image: url(${f});\n}\n\n/* gallery */\nsection {\n  margin-bottom: 42px;\n}\n\nsection h2 {\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.gallery {\n  --card-height: 900px;\n\n  display: grid;\n  grid-auto-rows: var(--card-height);\n  gap: 70px 54px;\n\n  margin-top: 18px;\n}\n\n/* card */\n.card.height-2 {\n  grid-row: span 2;\n}\n\n.card.width-end {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.card > img {\n  height: 70%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.card > .info {\n  padding: 16px 20px 0 20px;\n  height: 30%;\n  background-color: white;\n}\n\nh3 {\n  font-size: 1.5rem;\n  margin-left: 12px;\n}\n\n.card-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 12px;\n}\n\n.card-title a {\n  display: inline-block;\n}\n\n/* footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 24px;\n  width: 100vw;\n  padding: 42px 42px 64px 42px;\n  background-color: #e8e2f8;\n}\n\n.contact-info > * {\n  margin-left: 0;\n}\n\nfooter h2 {\n  margin-top: 0;\n  font-size: 2rem;\n}\n\nfooter h3 {\n  margin-top: 32px;\n  font-weight: normal;\n  font-size: 1rem;\n}\n\nfooter .link-holder {\n  margin-top: 24px;\n  margin-bottom: 48px;\n}\n\nfooter img {\n  width: min(100vw - 20px, 550px);\n}\n\n/* Tablet styling */\n@media (min-width: 760px) and (max-width: 1099px) {\n  .pinwheel-holder {\n    height: 500px;\n  }\n\n  body {\n    background-image: url(${x});\n    background-position: 40% 0%;\n  }\n\n  h1 {\n    font-size: 2.8rem;\n    top: 12px;\n    left: calc(var(--frame-width) - 55px);\n    white-space: nowrap;\n  }\n\n  .frame {\n    --frame-width: 330px;\n\n    width: var(--frame-width);\n    margin-right: 24px;\n    float: left;\n  }\n\n  .frame > img {\n    height: 100%;\n    object-fit: cover;\n    object-position: 0 20%;\n  }\n\n  .about {\n    margin-top: 100px;\n    margin-left: 60px;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n    margin-top: 70px;\n  }\n\n  section > h2 {\n    font-size: 3rem;\n  }\n\n  header p {\n    font-size: 1rem;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer * {\n    text-align: center;\n  }\n\n  footer .link-holder {\n    justify-content: center;\n  }\n}\n\n/* Tablet AND desktop styling */\n@media (min-width: 760px) {\n  .pinwheel-holder {\n    --skew: -15deg;\n  }\n\n  .link-holder {\n    justify-content: end;\n  }\n\n  .card.width-2 {\n    grid-column: span 2;\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n}\n\n/* Desktop styling */\n@media (min-width: 1100px) {\n  .pinwheel-holder {\n    height: 800px;\n  }\n\n  body {\n    background-position: 15% 0%;\n    background-image: url(${x});\n  }\n\n  header {\n    display: flex;\n    align-items: center;\n    padding: 42px 56px;\n  }\n\n  .frame {\n    min-width: 500px;\n    margin: 0;\n  }\n\n  .about {\n    min-height: 550px;\n    text-align: left;\n  }\n\n  .about > h2 {\n    text-align: left;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer h2 {\n    text-align: left;\n  }\n\n  footer img {\n    object-fit: cover;\n    object-position: center;\n  }\n\n  footer .link-holder {\n    justify-content: start;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  font-size: 20px;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-position: 50% -70%;\n  background-image: url(./images/gyro-floral-tall.jpg);\n  background-color: rgba(255,255,255,0.7);\n  background-blend-mode: lighten;\n}\n\n/* General styles */\n.shadow {\n  box-shadow: 2px 2px 8px rgb(60, 60, 60);\n}\n\n/* pinwheel */\n.pinwheel-holder {\n  --skew: -23.5deg;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 700px;\n  width: 100%;  \n  z-index: -1;\n}\n\n.pinwheel {\n  height: 100%;\n  transform: skewY(var(--skew));\n  transform-origin: bottom left;\n}\n\n.pinwheel.layer-one {\n  background-color: #ddbda9;\n}\n\n.pinwheel.layer-two {\n  background-color: #6f794b;\n}\n\n.pinwheel.layer-three {\n  background-color: #6f3582;\n}\n\n.wrapper {\n  max-width: 1800px;\n}\n\n/* header */\nheader,\nsection {\n  padding: 32px 42px;\n}\n\n.frame {\n  position: relative;\n  margin: 12px;\n}\n\n.frame > img {\n  width: 100%;\n}\n\nh1 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n\n  color: white;\n  font-size: 4.5rem;\n  line-height: 1.1;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.about {\n  margin-top: 32px;\n  padding: 1px 24px;\n  background-color: white;\n}\n\n.about > * {\n  margin: 18px 0;\n}\n\nh2 {\n  margin-top: 28px;\n  text-align: center;\n  font-size: 2.3rem;\n}\n\n.link-holder {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n\na.link {\n  --link-button-size: 40px;\n  width: var(--link-button-size);\n  height: var(--link-button-size);\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  background-size: cover;\n}\n\na.link.icon-github {\n  background-image: url(./icons/icons8-github-60.png);\n}\n\na.link.icon-linkedin {\n  background-image: url(./icons/icons8-linkedin-50.png);\n}\n\na.link.icon-instagram {\n  background-image: url(./icons/icons8-instagram-60.png);\n}\n\na.link.icon-open-in-new {\n  --link-button-size: 32px;\n  background-image: url(./icons/open-in-new.png);\n}\n\n/* gallery */\nsection {\n  margin-bottom: 42px;\n}\n\nsection h2 {\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.gallery {\n  --card-height: 900px;\n\n  display: grid;\n  grid-auto-rows: var(--card-height);\n  gap: 70px 54px;\n\n  margin-top: 18px;\n}\n\n/* card */\n.card.height-2 {\n  grid-row: span 2;\n}\n\n.card.width-end {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.card > img {\n  height: 70%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.card > .info {\n  padding: 16px 20px 0 20px;\n  height: 30%;\n  background-color: white;\n}\n\nh3 {\n  font-size: 1.5rem;\n  margin-left: 12px;\n}\n\n.card-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 12px;\n}\n\n.card-title a {\n  display: inline-block;\n}\n\n/* footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 24px;\n  width: 100vw;\n  padding: 42px 42px 64px 42px;\n  background-color: #e8e2f8;\n}\n\n.contact-info > * {\n  margin-left: 0;\n}\n\nfooter h2 {\n  margin-top: 0;\n  font-size: 2rem;\n}\n\nfooter h3 {\n  margin-top: 32px;\n  font-weight: normal;\n  font-size: 1rem;\n}\n\nfooter .link-holder {\n  margin-top: 24px;\n  margin-bottom: 48px;\n}\n\nfooter img {\n  width: min(100vw - 20px, 550px);\n}\n\n/* Tablet styling */\n@media (min-width: 760px) and (max-width: 1099px) {\n  .pinwheel-holder {\n    height: 500px;\n  }\n\n  body {\n    background-image: url(./images/gyro-floral.png);\n    background-position: 40% 0%;\n  }\n\n  h1 {\n    font-size: 2.8rem;\n    top: 12px;\n    left: calc(var(--frame-width) - 55px);\n    white-space: nowrap;\n  }\n\n  .frame {\n    --frame-width: 330px;\n\n    width: var(--frame-width);\n    margin-right: 24px;\n    float: left;\n  }\n\n  .frame > img {\n    height: 100%;\n    object-fit: cover;\n    object-position: 0 20%;\n  }\n\n  .about {\n    margin-top: 100px;\n    margin-left: 60px;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n    margin-top: 70px;\n  }\n\n  section > h2 {\n    font-size: 3rem;\n  }\n\n  header p {\n    font-size: 1rem;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer * {\n    text-align: center;\n  }\n\n  footer .link-holder {\n    justify-content: center;\n  }\n}\n\n/* Tablet AND desktop styling */\n@media (min-width: 760px) {\n  .pinwheel-holder {\n    --skew: -15deg;\n  }\n\n  .link-holder {\n    justify-content: end;\n  }\n\n  .card.width-2 {\n    grid-column: span 2;\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n}\n\n/* Desktop styling */\n@media (min-width: 1100px) {\n  .pinwheel-holder {\n    height: 800px;\n  }\n\n  body {\n    background-position: 15% 0%;\n    background-image: url(./images/gyro-floral.png);\n  }\n\n  header {\n    display: flex;\n    align-items: center;\n    padding: 42px 56px;\n  }\n\n  .frame {\n    min-width: 500px;\n    margin: 0;\n  }\n\n  .about {\n    min-height: 550px;\n    text-align: left;\n  }\n\n  .about > h2 {\n    text-align: left;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer h2 {\n    text-align: left;\n  }\n\n  footer img {\n    object-fit: cover;\n    object-position: center;\n  }\n\n  footer .link-holder {\n    justify-content: start;\n  }\n}\n"],sourceRoot:""}]);const b=B},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",t=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),t&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),t&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var a=0;a<this.length;a++){var p=this[a][0];null!=p&&(r[p]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),A&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=A):l[2]=A),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function A(n){for(var A=-1,t=0;t<e.length;t++)if(e[t].identifier===n){A=t;break}return A}function t(n,t){for(var i={},r=[],a=0;a<n.length;a++){var p=n[a],c=t.base?p[0]+t.base:p[0],l=i[c]||0,s="".concat(c," ").concat(l);i[c]=l+1;var d=A(s),E={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)e[d].references++,e[d].updater(E);else{var g=o(E,t);t.byIndex=a,e.splice(a,0,{identifier:s,updater:g,references:1})}r.push(s)}return r}function o(n,e){var A=e.domAPI(e);return A.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var a=A(i[r]);e[a].references--}for(var p=t(n,o),c=0;c<i.length;c++){var l=A(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},659:n=>{var e={};n.exports=function(n,A){var t=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(A)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,A)=>{n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var t="";A.supports&&(t+="@supports (".concat(A.supports,") {")),A.media&&(t+="@media ".concat(A.media," {"));var o=void 0!==A.layer;o&&(t+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),t+=A.css,o&&(t+="}"),A.media&&(t+="}"),A.supports&&(t+="}");var i=A.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},251:(n,e,A)=>{n.exports=A.p+"3379329c5a67d1edcc1c.png"},476:(n,e,A)=>{n.exports=A.p+"0cd4637598f117a2ba31.png"},907:(n,e,A)=>{n.exports=A.p+"a2f5bf46a80b9b03c87c.png"},569:(n,e,A)=>{n.exports=A.p+"f379747cc140ca3aa6a4.png"},366:(n,e,A)=>{n.exports=A.p+"71553822f0b0c12fde88.jpg"},32:(n,e,A)=>{n.exports=A.p+"cb41de9da78bdd56d8da.png"}},e={};function A(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,A),i.exports}A.m=n,A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var e=A.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),A.b=document.baseURI||self.location.href,A.nc=void 0;var t=A(72),o=A.n(t),i=A(825),r=A.n(i),a=A(659),p=A.n(a),c=A(56),l=A.n(c),s=A(540),d=A.n(s),E=A(113),g=A.n(E),B=A(365),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=p().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),o()(B.A,h),B.A&&B.A.locals&&B.A.locals,console.log("hello world")})();
//# sourceMappingURL=main.js.map