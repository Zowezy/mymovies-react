(this["webpackJsonpmy-movies"]=this["webpackJsonpmy-movies"]||[]).push([[4],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(50);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var c,r,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(c=n.next()).done)&&(i.push(c.value),!t||i.length!==t);s=!0);}catch(o){a=!0,r=o}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return j}));var c=n(137),r=n(50);var i=n(2),s=n(35),a=n(1),o=n(139),l=n.n(o),u=n(3),d=["onOpen","onClose","background"],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onOpen,n=e.onClose,c=e.background,r=Object(s.a)(e,d),o="\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    z-index: 1000;\n    overflow:hidden;\n  ",j="\n    position: fixed;\n    background: ".concat(c||"transparent",";\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow:hidden;\n  "),f=Object(a.useRef)(),O=l()(Object(i.a)({onOpen:function(e){e.portal.current.style.cssText=c?j:o,t&&t(e)},onClose:function(e){e.portal.current.removeAttribute("style"),n&&n(e)},onPortalClick:function(e){var t=e.target;f&&f.current&&!f.current.contains(t)&&A()}},r)),h=O.isOpen,v=O.togglePortal,m=O.openPortal,A=O.closePortal,p=O.Portal,x=Object(a.useCallback)((function(e){return Object(u.jsx)(p,{children:Object(u.jsx)("div",Object(i.a)({ref:f,style:b(o)},e))})}),[o]),g=c?x:p;return Object.assign([m,A,h,g,v],{Modal:g,toggleModal:v,openModal:m,closeModal:A,isOpen:h})};t.a=j;function b(e){var t,n,i=e.replace(/\/\*(.|\s)*?\*\//g," ").replace(/\s+/g," "),s={},a=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,i=function(){};return{s:i,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}(((i.match(/ ?(.*?) ?{([^}]*)}/)||[])[2]||i).split(";").map((function(e){return e.split(":").map((function(e){return e&&e.trim()}))})));try{for(a.s();!(t=a.n()).done;){var o=Object(c.a)(t.value,2),l=o[0],u=o[1];s[(n=l,n.replace(/\W+\w/g,(function(e){return e.slice(-1).toUpperCase()})))]=u}}catch(d){a.e(d)}finally{a.f()}return s}},139:function(e,t,n){"use strict";var c=this&&this.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n(33),o=i(n(140));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,i=void 0===n||n,l=e.closeOnEsc,u=void 0===l||l,d=e.bindTo,j=e.isOpen,b=void 0!==j&&j,f=e.onOpen,O=e.onClose,h=e.onPortalClick,v=r(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),m=o.default(),A=m.isServer,p=m.isBrowser,x=s.useState(b),g=x[0],w=x[1],y=s.useRef(g),E=s.useCallback((function(e){y.current=e,w(e)}),[]),B=s.useRef(),P=s.useRef(p?document.createElement("div"):null);s.useEffect((function(){p&&!P.current&&(P.current=document.createElement("div"))}),[p,P]);var N=s.useMemo((function(){if(!A)return d&&a.findDOMNode(d)||document.body}),[A,d]),C=function(e){if(!e)return{portal:P,targetEl:B,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=B,t.event=e;var n=e.currentTarget;return!B.current&&n&&n!==document&&(B.current=t.currentTarget),t},Q=Object.entries(v).reduce((function(e,t){var n=t[0],c=t[1];return e[n]=function(e){A||c(C(e))},e}),{}),S=s.useCallback((function(e){if(!A){var n=C(e);if(null==B.current)throw setTimeout((function(){return E(!0)}),0),Error(t.errorMessage1);f&&f(n),E(!0)}}),[A,P,E,B,f]),k=s.useCallback((function(e){if(!A){var t=C(e);O&&y.current&&O(t),y.current&&E(!1)}}),[A,O,E]),I=s.useCallback((function(e){return y.current?k(e):S(e)}),[k,S]),M=s.useCallback((function(e){return"Escape"===e.key&&u?k(e):void 0}),[u,k]),H=s.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!y.current||t(B)||i&&k(e)}),[A,k,i,P]),J=s.useCallback((function(e){if(!A&&P.current instanceof HTMLElement){var t=C(e);P.current.contains(t.target)&&h&&h(t),H(e)}}),[H]),K=s.useRef({});s.useEffect((function(){if(!A&&N instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return N.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(K.current[t]=function(e){return v[t](C(e))},document.addEventListener(n,K.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",J),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(document.removeEventListener(n,K.current[t]),delete K.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",J),N.removeChild(t)}}}),[A,H,M,N,P]);var L=s.useCallback((function(e){var t=e.children;return null!=P.current?a.createPortal(t,P.current):null}),[P]);return Object.assign([S,k,y.current,L,I,B,P],c(c({isOpen:y.current,openPortal:S,ref:B,closePortal:k,togglePortal:I,Portal:L,portalRef:P},Q),{bind:c({ref:B},Q)}))}},140:function(e,t,n){"use strict";var c,r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(c=t.Device||(t.Device={}));var i=c.Browser,s=c.Server,a=c.Native,o=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:o?i:s,u={isBrowser:l===i,isServer:l===s,isNative:l===a,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===i&&!!window.addEventListener,canUseViewport:l===i&&!!window.screen},d=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=u,Object.keys(e).map((function(t){return e[t]})),u));var e},j=d();t.weAreServer=function(){u.isServer=!0,j=d()},t.useSSR=function(){return j},t.default=t.useSSR},141:function(e,t,n){"use strict";var c=n(137),r=n(1),i=n(18),s=n(24),a=n(23),o=n(31),l=n(49),u=n(3);t.a=function(e){var t=e.movieId,n=e.type,d=Object(i.c)((function(e){return e.auth})),j=d.sessionId,b=d.isAuth,f=Object(i.c)((function(e){return e.auth.profile.id})),O=Object(r.useState)(null),h=Object(c.a)(O,2),v=h[0],m=h[1],A=Object(i.b)(),p=function(e){b?(A(e?Object(s.j)("favorite",n,f,j,t):Object(s.b)("favorite",f,n,j,t)).then((function(e){!0===e.success?l.a.success(e.status_message):l.a.error(e.status_message)})),m(!e)):l.a.error("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")};return Object(r.useEffect)((function(){b&&A(Object(s.d)(n,t,j)).then((function(e){m(e.favorite)}))}),[]),Object(u.jsx)(u.Fragment,{children:v?Object(u.jsx)(o.a,{type:"secondary",id:"openModal",onClick:function(){return p(v)},children:Object(u.jsx)("i",{children:Object(u.jsx)(a.f,{})})}):Object(u.jsx)(o.a,{type:"secondary",id:"openModal",onClick:function(){return p(v)},children:Object(u.jsx)("i",{children:Object(u.jsx)(a.e,{})})})})}},142:function(e,t,n){"use strict";var c=n(137),r=n(1),i=n(138),s=n(18),a=n(31),o=n(23),l=n(24),u=n(49),d=n(3);t.a=function(e){var t=e.type,n=e.movieId,j=Object(i.b)({background:"rgba(0,0,0, 0.5)"}),b=j.openModal,f=j.closeModal,O=j.isOpen,h=j.Modal,v=Object(s.b)(),m=Object(s.c)((function(e){var t=e.auth;return{sessionId:t.sessionId,accountId:t.accountId,isAuth:t.isAuth}})),A=m.sessionId,p=m.accountId,x=m.isAuth,g=Object(r.useState)(!1),w=Object(c.a)(g,2),y=w[0],E=w[1],B=Object(r.useState)(null),P=Object(c.a)(B,2),N=P[0],C=P[1];return Object(r.useEffect)((function(){x&&v(Object(l.d)(t,n,A)).then((function(e){e.rated&&E(e.rated.value),e.rated?C(!0):C(!1)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.a,{type:"secondary",id:"openModal",onClick:function(e){return function(e){x?b(e):u.a.error("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")}(e)},children:Object(d.jsx)("i",{children:!0===N?Object(d.jsx)(o.j,{}):Object(d.jsx)(o.i,{})})}),O&&Object(d.jsx)(h,{children:Object(d.jsx)("div",{className:"modal-wrapper text-center",children:Object(d.jsxs)("div",{className:"content-rate",children:[Object(d.jsx)("h5",{children:!0===N?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443"}),Object(d.jsx)("div",{class:"rate d-flex justify-content-center",children:Array(10).fill(0).map((function(e,t){return y>=t+1?Object(d.jsx)(o.j,{onClick:function(){return E(t+1)}}):Object(d.jsx)(o.i,{onClick:function(){return E(t+1)}})}))}),Object(d.jsx)("button",{class:"col-12 action",onClick:function(){x?(v(Object(l.p)("rated",!0)),v(Object(l.b)("rated",n,t,A,y)).then((function(e){!0===e.success?u.a.success(e.status_message):u.a.error(e.status_message),setTimeout((function(){v(Object(l.m)(t,p,A,"rated"))}),1e3)})),C(!0),f()):alert("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})})]})}},143:function(e,t,n){"use strict";var c=n(2),r=n(1),i=n(18),s=n(138),a=n(23),o=n(137),l=n(24),u=(n(53),n(3));var d=function(e){var t=e.id,n=e.movieId,c=e.name,s=(e.addItems,e.deleteItems,e.actionItem),d=Object(i.b)(),j=Object(r.useState)(null),b=Object(o.a)(j,2),f=b[0],O=b[1];return console.log("\u041f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u043a\u0430"),Object(r.useEffect)((function(){d(Object(l.e)(t,n)).then((function(e){O(e.item_present)}))}),[]),Object(u.jsxs)("div",{class:"list d-flex justify-content-between align-items-center",children:[Object(u.jsxs)("div",{class:"name d-flex align-items-center",children:[Object(u.jsx)("div",{class:"icon",children:Object(u.jsx)("i",{children:Object(u.jsx)(a.g,{})})}),Object(u.jsx)("h6",{children:c})]}),Object(u.jsx)("div",{class:"action-button",children:Object(u.jsx)("button",{onClick:function(){return function(e){O(!f),s(e,f)}(t)},children:f?"\u0423\u0431\u0440\u0430\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})},j=n(31),b=n(51),f=function(e){return Object(u.jsxs)(b.a,Object(c.a)(Object(c.a)({speed:2,width:570,height:50,viewBox:"0 0 570 45",backgroundColor:"#ebeaea",foregroundColor:"#ecebeb"},e),{},{children:[Object(u.jsx)("rect",{x:"6",y:"410",rx:"0",ry:"0",width:"267",height:"49"}),Object(u.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"570",height:"45"})]}))},O=n(49);t.a=function(e){var t=e.movieId,n=(e.type,Object(i.b)()),r=Object(s.b)({background:"rgba(0, 0, 0, 0.5)"}),o=r.openModal,b=r.isOpen,h=r.Modal,v=Object(i.c)((function(e){return e.auth.profile})).list,m=Object(i.c)((function(e){return e.auth})),A=m.sessionId,p=m.isAuth,x=Object(i.c)((function(e){return e.auth.profile.id})).accountId,g=Object(i.c)((function(e){return e.auth.profile.list})).isFetching,w=function(e,c){n(c?Object(l.h)(e,A,t):Object(l.a)(e,A,t)).then((function(e){!0===e.success?O.a.success(e.status_message):O.a.error(e.status_message)}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(j.a,{id:"openModal",onClick:function(e){p?(o(e),n(Object(l.l)(x,A))):O.a.error("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")},children:[" ",Object(u.jsx)("i",{children:Object(u.jsx)(a.g,{})})," "]}),b&&Object(u.jsx)(h,{children:Object(u.jsx)("div",{className:"modal-wrapper text-center",children:Object(u.jsxs)("div",{class:"content-list",children:[Object(u.jsx)("h5",{className:b?"animateIn":"animateOut",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a"}),Object(u.jsx)("div",{class:"lists",children:!1===g?v.items.map((function(e,n){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e),{},{movieId:t,accountId:x,sessionId:A,actionItem:function(e,t){return w(e,t)},addItems:w,isFetching:g}))})):Object(u.jsx)(f,{})})]})})})]})}},146:function(e,t,n){"use strict";n.r(t);var c=n(137),r=n(1),i=n(8),s=n(73),a=n(18),o=n(2),l=n(34),u=n(56),d=n(57),j=n(31),b=n(23),f=n(138),O=n(3);var h,v=function(e){var t=e.src,n=Object(f.a)({background:"rgba(0, 0, 0, 0.5)"}),c=n.openModal,r=n.isOpen,i=n.Modal;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{id:"openModal",onClick:c,circle:!0,children:Object(O.jsx)("i",{children:Object(O.jsx)(b.b,{})})}),r&&Object(O.jsx)(i,{children:Object(O.jsx)("div",{className:"modal-video",children:Object(O.jsx)("div",{className:"content-video",children:Object(O.jsx)("iframe",{className:"embed-responsive-item",width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(t),title:"Trailer",allowFullScreen:!0})})})})]})},m=n(39),A=n(143),p=n(141),x=n(142),g=n(38),w=d.a.div(h||(h=Object(u.a)(["\nz-index: 1;\nposition: absolute;\nbackground: linear-gradient(180deg, #353941 0%, rgba(17, 18, 26, 0.4) 100%),\nurl('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces","')\n    no-repeat;\nbackground-position: center;\nwidth: 100%;\nheight: 350px;\n"])),(function(e){return e.bg}));function y(e){var t=e.title,n=e.movieId,c=e.name,r=e.tag,i=e.releaseDate,s=e.runtime,a=e.rate,o=e.genres,l=e.bg,u=e.img,d=e.video,j=e.type,b=Object(m.a)("https://image.tmdb.org/t/p/w500",u);return Object(O.jsxs)("div",{className:"single",children:[Object(O.jsx)(w,{bg:l}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"header-info col-lg-12 d-lg-flex text-center text-lg-start",children:[Object(O.jsx)("div",{className:"poster col-lg-3 col-12",children:Object(O.jsx)("img",{src:b,alt:""})}),Object(O.jsxs)("div",{className:"about col-lg-8 col-12 mt-5 mt-lg-1 text-center text-lg-start",children:[Object(O.jsxs)("h5",{children:[t||c," ",Object(O.jsxs)("span",{children:["(",i&&i.substr(0,4),")"]})," ",a>0&&Object(O.jsx)(g.a,{value:a})]}),Object(O.jsx)("i",{children:r}),Object(O.jsxs)("div",{className:"action mt-0 mt-lg-5",children:[Object(O.jsxs)("p",{children:[s," \u2022   ",o&&o.map((function(e){return Object(O.jsxs)("i",{children:[e.name," / "]},e.id)}))]}),Object(O.jsxs)("div",{className:"action-btn mt-4",children:[Object(O.jsx)(A.a,{type:j,movieId:n}),Object(O.jsx)(p.a,{type:j,movieId:n}),Object(O.jsx)(x.a,{type:j,movieId:n}),d&&Object(O.jsx)(v,{src:d})]})]})]})]})})})]})}var E=n(25);var B=function(e){var t=e.items,n=e.setSquad,c=e.type,r=Object(l.a)(t).splice(0,6);return Object(O.jsx)("div",{className:"additional",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsxs)("div",{className:"header-block d-flex justify-content-between align-items-center header-block",children:[Object(O.jsx)("h5",{children:"\u0410\u043a\u0442\u0451\u0440\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432"}),Object(O.jsx)("i",{onClick:n,children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435\u0445"})]}),Object(O.jsx)("div",{className:"list-of-items col-12",children:Object(O.jsx)("div",{className:"row p-1",children:r?r.map((function(e){return Object(O.jsx)(E.e,Object(o.a)({type:c},e),e.id)})):Array(5).fill(0).map((function(e,t){return Object(O.jsx)(E.e,{})}))})})]})})})},P=n(52);var N=function(e){var t=e.items,n=e.type;return Object(O.jsx)("div",{className:"additional",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsxs)("div",{className:"list-film col-12",children:[Object(O.jsx)("h5",{className:"mb-2",children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"}),Object(O.jsx)(P.a,{type:n,items:t})]})})})})};var C=function(e){var t=e.info,n=e.recoms,c=e.setSquad,r=e.squads,i=e.type,s=e.movieId,a=Object(l.a)(r.crew).splice(0,3);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,Object(o.a)(Object(o.a)({},t),{},{movieId:s,type:i})),Object(O.jsx)("div",{className:"main-info",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row flex-column-reverse flex-lg-row",children:[Object(O.jsxs)("div",{className:"role col-lg-9",children:[Object(O.jsx)("div",{className:"roles d-flex justify-content-between",children:a.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:e.job}),Object(O.jsx)("p",{children:e.name})]},t)}))}),Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("h4",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("p",{children:t.descr})]})]}),Object(O.jsx)("div",{className:"col-lg-3 d-lg-flex justify-content-end m-0 p-0",children:Object(O.jsxs)("div",{className:"col-12 col-lg-7 roles d-flex d-lg-block justify-content-between",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(O.jsx)("p",{children:t.status})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("p",{children:t.original_title})]}),t.budget>0&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"\u0411\u044e\u0434\u0436\u0435\u0442"}),Object(O.jsxs)("p",{children:[t.budget,"$"]})]}),t.profit>0&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"\u0421\u0431\u043e\u0440\u044b"}),Object(O.jsxs)("p",{children:[t.profit,"$"]})]})]})})]})})}),r.actors.length>0&&Object(O.jsx)(B,{type:r.type,items:r.actors,setSquad:c}),n.length>5&&Object(O.jsx)(N,{type:i,items:n})]})},Q=n(11);var S,k=function(e){var t=e.name,n=e.id,c=e.character,r=e.job,i=e.profile_path,s="https://www.themoviedb.org/t/p/w66_and_h66_face/";return i?s+=i:s="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABCAEIDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+cWvpTygoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/ph/bt/4KMftdf8E+/HPwU/Zn/Y2+Inh74E/Bfw3+yt+z/wCJbfwh4e+Enwe19dQ8U+MvBkWueJ/E+r6r458B+KtYvdb1q/n83ULoX0Md3JELueCTUJ728uuGjQp1lOpVi5ydSau5SWidklZrRHROpODUYNRXLHRJbtb6pnxB/wAP7/8AgrL/ANHXf+YL/Zr/APnOVr9Tw3/Pv/yep/8AJEe3q/zf+Sx/yD/h/f8A8FZf+jrv/MF/s1//ADnKPqeG/wCff/k9T/5IPb1f5v8AyWP+R658AP8AguP/AMFQPHHx2+C/gnxn+0naeJfCHjL4rfD3wl4p8PX3wS/Z8tbPWvDviXxZpOi61plxc6R8KtN1OCK806+uIGmsb+0uY9+6KdGANTPCYdQm1Ts1GTT556NJtbyHGtUcopy0bSfux2b9D4T/AOCoPgLwd8MP+Cg37Wvgb4f+HdL8JeD9D+MfiIaH4a0S1jsNF0W31JbXV5rDSNPgCWum6XBeX9wLDTLKOGw0208qxsLe3s7eCCPXDtyo03JttxV29301IqJKpNLRXPg2tiAoAKACgD9gf+C2n/J2Xw1/7M+/ZZ/9VpZ1zYT+HL/r7U/9KNa3xL/BH8j8jtP0jVtWF+dK0zUdTGl6dcavqZ0+yubwadpNo0SXWp35topPsmnWzzwrcXtx5dtC00SySqZEB6bpbu19Pn2Mj+r7Rv22v+CSdv8A8EVJfgNd+HfBifHeX4B3fhS5+F8nw5vX+IN/+08PDd1p1t8Wv+EwttAlsIoZfHUaeO7LxZceJS+m+Fza+GJYjcJF4Wl850cT9a57vk5783Np7O9+W1+2lravXzOnnpex5bLm5bWtrzd7+uu/l5H81P7LH/Jzv7OX/ZePhB/6sHw9XdU/h1P8Ev8A0lmEPij/AIl+aPqn/gr7/wApMf2yf+yw6n/6atJrPDfwKX+H9WVV/iT9T83q3MwoAKACgD96v+CmH7PvxW/aj/4KI/AP4G/BbwxP4r+IPjj9k79lqy0qwRxb2VlawfC+2utU13XNRkBg0nw/oenw3Gp6xqdx+7tbO3kKJNcNDby8lCcadCc5u0VUqX/8C0S83sjepFyqRilduMfyP64/+Ccn/BLr4H/sCfA/UPAcOl6J8SPib8SNEFj8dfiNrmjW13H44ju7Z4r3wXp+m6jFcLZfDSyW4uLS08OXCuusK82p+IEur268q182viJ1p31jGL9yKe3n/i8+nQ6qdNU1bdv4n38vQ+SvDH/Bur+wZpPxj+Nvj/xDpniTxT8PPiVol1pvw9+D8mo3ukaP8Fb/AF6K5HiPWvDfiGwvzq+uXllO0D/D5NZT7L4PtWure/t/FN0NO1HTtHjazhCKspRfvT3crbJrZf3u/lqR9XheT6PZfy97fp2P5h/2i/8Agmv8VP8AgnJ/wUB/Zu8J+I5ZvF3wi8bfH74a3/wb+KkVusFv4o0ew+I3hZrzRNetoiY9I8beHI76xi17TQfst0lxa6vpLyaferHbd8K8a9Go1pJQlzR7Pleq7p9PuZzum6dSKeqclZ99V+Pc8A/4K+/8pMf2yf8AssOp/wDpq0mrw38Cl/h/Vk1f4k/U/N6tzMKACgAoA/o1/wCCk37Of7bfxA/aT+Bn7Qf7Jfwj/aJ8W+H9Q/Y8/ZsTwj8Yf2f/AA3461a2PmfCyHStWh0rxp8P4ZpLSWexvJ7O8t47+CW502+KyRyWV4DLxUKlKMJwqSgmqtS8ZtL7V1ozoqRm5RlBS+CNnG/bo0fGn/Cn/wDguP8A9CZ/wU6/79ftL/8Ax6tefCfzUP8AyQi1f/p598g/4U//AMFx/wDoTP8Agp1/36/aX/8Aj1HPhP5qH/kgWr/9PPvkdJ8K/wBlD/gqv4//AGiv2btW+N3wL/bi8ZaJ4O+Nnw11VNV+K/hH4z6/o/hPTh458N3Ouap/aPjG2urHw/YLaWEdzq9+Z7O2S1slnvZhDbB0UqmHUKihOkm4SVouKb0dtt/IajVcouSm7SW93bVdzwX/AIK26lp2r/8ABSf9si90u+tNRsz8adftRdWU8Vzbm5062sNPvoBNCzxmW0vrW5tLhAxMVxBLE+HRgLw2lClf+VE1f4k/U/OutjMKACgAoA+j/AP7Y/7Xfwp8Laf4H+F37VP7R/w28FaS1y2leD/APxx+J3g7wtpjXtzLeXjaf4f8O+KNO0mya7u5prq5NtaRme5llnl3yyMxiVKnJ3lThJvrKEW/vauUpzSspSS7KTS/M7L/AIeGft+/9Hx/tg/+JMfGn/5taXsaP/Pql/4Lh/kHtJ/zz/8AAn/mH/Dwz9v3/o+P9sH/AMSY+NP/AM2tHsaP/Pql/wCC4f5B7Sf88/8AwJ/5kNz/AMFBP29by3ntLv8Abc/a7urW6hltrm2uf2k/jLPb3FvOjRTQTwy+NGjmhmjZo5YpFZJEZkdSpIo9jR/59Uv/AAXH/IPaT/nn/wCBP/M+SJpprmaW4uJZJ7ieSSaeeaRpZpppWLyyyyuWeSSR2Z5JHYs7EsxJJNaEkdABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQA/9k=",Object(O.jsxs)("div",{className:"actor d-flex col-12 align-items-center",children:[Object(O.jsx)("div",{className:"profile-image",children:Object(O.jsx)("img",{src:"".concat(s),alt:""})}),Object(O.jsxs)("div",{className:"detail",children:[Object(O.jsx)(Q.b,{to:"../../actor/".concat(n),children:Object(O.jsx)("b",{children:t})}),Object(O.jsx)("i",{children:c||r})]})]})},I=d.a.div(S||(S=Object(u.a)(["\nbackground: linear-gradient(180deg, #353941 0%, rgba(17, 18, 26, 0.4) 100%), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",") no-repeat;\nbackground-position: center;\n"])),(function(e){return e.bg}));var M=function(e){var t=e.squad,n=e.title,c=e.setSquad,r=e.bg;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{className:"bg-film",bg:r,children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsx)("div",{className:"row text-center align-items-center",children:Object(O.jsxs)("div",{className:"named-films",children:[Object(O.jsx)("h5",{children:n}),Object(O.jsx)("b",{onClick:c,children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u0444\u0438\u043b\u044c\u043c\u0443"})]})})})}),Object(O.jsx)("div",{className:"squad",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsxs)("div",{className:"col-lg-4 col-12 main-squad text-center text-lg-start",children:[Object(O.jsx)("h2",{children:"\u0410\u043a\u0442\u0451\u0440\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432"}),Object(O.jsx)("div",{className:"list-actor",children:t.actors.map((function(e){return Object(O.jsx)(k,Object(o.a)({},e),e.id)}))})]}),Object(O.jsxs)("div",{className:"col-lg-4 offset-lg-2 col-12 tech-squad text-center text-lg-start",children:[Object(O.jsx)("h2",{children:"\u0421\u044a\u0451\u043c\u043e\u0447\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432"}),Object(O.jsx)("div",{className:"list-actor",children:t.crew.map((function(e,t){return Object(O.jsx)(k,Object(o.a)({},e),t)}))})]})]})})})]})},H=n(32);t.default=function(){var e=Object(a.b)(),t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],l=n[1],u=Object(r.useCallback)((function(){l(!o)}),[o]),d=Object(i.h)(),j=d.type,b=d.id;Object(r.useEffect)((function(){e(Object(s.b)(j,b))}),[b]);var f=Object(a.c)((function(e){var t=e.single;return{mainInf:t.mainInfo,squads:t.squad,recoms:t.recommendations,isFetching:t.isFetching}})),h=f.mainInf,v=f.squads,m=f.recoms;return!0===f.isFetching?Object(O.jsx)(H.b,{}):(console.log("false"),Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(M,{bg:h.bg,title:h.title,setSquad:u,squad:v}):Object(O.jsx)(C,{setSquad:u,type:j,info:h,squads:v,recoms:m,movieId:b})}))}}}]);
//# sourceMappingURL=4.7211fd7d.chunk.js.map