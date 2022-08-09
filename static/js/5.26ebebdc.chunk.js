(this["webpackJsonpmy-movies"]=this["webpackJsonpmy-movies"]||[]).push([[5],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(50);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var c,r,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(c=n.next()).done)&&(i.push(c.value),!t||i.length!==t);s=!0);}catch(o){a=!0,r=o}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var c=n(137),r=n(50);var i=n(2),s=n(35),a=n(1),o=n(139),l=n.n(o),u=n(3),j=["onOpen","onClose","background"],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onOpen,n=e.onClose,c=e.background,r=Object(s.a)(e,j),o="\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    z-index: 1000;\n    overflow:hidden;\n  ",d="\n    position: fixed;\n    background: ".concat(c||"transparent",";\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow:hidden;\n  "),f=Object(a.useRef)(),O=l()(Object(i.a)({onOpen:function(e){e.portal.current.style.cssText=c?d:o,t&&t(e)},onClose:function(e){e.portal.current.removeAttribute("style"),n&&n(e)},onPortalClick:function(e){var t=e.target;f&&f.current&&!f.current.contains(t)&&p()}},r)),h=O.isOpen,m=O.togglePortal,v=O.openPortal,p=O.closePortal,x=O.Portal,g=Object(a.useCallback)((function(e){return Object(u.jsx)(x,{children:Object(u.jsx)("div",Object(i.a)({ref:f,style:b(o)},e))})}),[o]),y=c?g:x;return Object.assign([v,p,h,y,m],{Modal:y,toggleModal:m,openModal:v,closeModal:p,isOpen:h})};t.a=d;function b(e){var t,n,i=e.replace(/\/\*(.|\s)*?\*\//g," ").replace(/\s+/g," "),s={},a=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,i=function(){};return{s:i,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}(((i.match(/ ?(.*?) ?{([^}]*)}/)||[])[2]||i).split(";").map((function(e){return e.split(":").map((function(e){return e&&e.trim()}))})));try{for(a.s();!(t=a.n()).done;){var o=Object(c.a)(t.value,2),l=o[0],u=o[1];s[(n=l,n.replace(/\W+\w/g,(function(e){return e.slice(-1).toUpperCase()})))]=u}}catch(j){a.e(j)}finally{a.f()}return s}},139:function(e,t,n){"use strict";var c=this&&this.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n(33),o=i(n(140));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,i=void 0===n||n,l=e.closeOnEsc,u=void 0===l||l,j=e.bindTo,d=e.isOpen,b=void 0!==d&&d,f=e.onOpen,O=e.onClose,h=e.onPortalClick,m=r(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),v=o.default(),p=v.isServer,x=v.isBrowser,g=s.useState(b),y=g[0],w=g[1],k=s.useRef(y),N=s.useCallback((function(e){k.current=e,w(e)}),[]),C=s.useRef(),S=s.useRef(x?document.createElement("div"):null);s.useEffect((function(){x&&!S.current&&(S.current=document.createElement("div"))}),[x,S]);var _=s.useMemo((function(){if(!p)return j&&a.findDOMNode(j)||document.body}),[p,j]),E=function(e){if(!e)return{portal:S,targetEl:C,event:e};var t=e||{};t.persist&&t.persist(),t.portal=S,t.targetEl=C,t.event=e;var n=e.currentTarget;return!C.current&&n&&n!==document&&(C.current=t.currentTarget),t},M=Object.entries(m).reduce((function(e,t){var n=t[0],c=t[1];return e[n]=function(e){p||c(E(e))},e}),{}),I=s.useCallback((function(e){if(!p){var n=E(e);if(null==C.current)throw setTimeout((function(){return N(!0)}),0),Error(t.errorMessage1);f&&f(n),N(!0)}}),[p,S,N,C,f]),P=s.useCallback((function(e){if(!p){var t=E(e);O&&k.current&&O(t),k.current&&N(!1)}}),[p,O,N]),A=s.useCallback((function(e){return k.current?P(e):I(e)}),[P,I]),F=s.useCallback((function(e){return"Escape"===e.key&&u?P(e):void 0}),[u,P]),L=s.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(S)||0!==e.button||!k.current||t(C)||i&&P(e)}),[p,P,i,S]),T=s.useCallback((function(e){if(!p&&S.current instanceof HTMLElement){var t=E(e);S.current.contains(t.target)&&h&&h(t),L(e)}}),[L]),B=s.useRef({});s.useEffect((function(){if(!p&&_ instanceof HTMLElement&&S.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=S.current;return _.appendChild(S.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(B.current[t]=function(e){return m[t](E(e))},document.addEventListener(n,B.current[t]))})),document.addEventListener("keydown",F),document.addEventListener("mousedown",T),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(document.removeEventListener(n,B.current[t]),delete B.current[t])})),document.removeEventListener("keydown",F),document.removeEventListener("mousedown",T),_.removeChild(t)}}}),[p,L,F,_,S]);var R=s.useCallback((function(e){var t=e.children;return null!=S.current?a.createPortal(t,S.current):null}),[S]);return Object.assign([I,P,k.current,R,A,C,S],c(c({isOpen:k.current,openPortal:I,ref:C,closePortal:P,togglePortal:A,Portal:R,portalRef:S},M),{bind:c({ref:C},M)}))}},140:function(e,t,n){"use strict";var c,r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(c=t.Device||(t.Device={}));var i=c.Browser,s=c.Server,a=c.Native,o=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:o?i:s,u={isBrowser:l===i,isServer:l===s,isNative:l===a,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===i&&!!window.addEventListener,canUseViewport:l===i&&!!window.screen},j=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=u,Object.keys(e).map((function(t){return e[t]})),u));var e},d=j();t.weAreServer=function(){u.isServer=!0,d=j()},t.useSSR=function(){return d},t.default=t.useSSR},141:function(e,t,n){"use strict";var c=n(137),r=n(1),i=n(18),s=n(24),a=n(23),o=n(31),l=n(49),u=n(3);t.a=function(e){var t=e.movieId,n=e.type,j=Object(i.c)((function(e){return e.auth})),d=j.sessionId,b=j.isAuth,f=Object(i.c)((function(e){return e.auth.profile.id})),O=Object(r.useState)(null),h=Object(c.a)(O,2),m=h[0],v=h[1],p=Object(i.b)(),x=function(e){b?(p(e?Object(s.j)("favorite",n,f,d,t):Object(s.b)("favorite",f,n,d,t)).then((function(e){!0===e.success?l.a.success(e.status_message):l.a.error(e.status_message)})),v(!e)):l.a.error("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")};return Object(r.useEffect)((function(){b&&p(Object(s.d)(n,t,d)).then((function(e){v(e.favorite)}))}),[]),Object(u.jsx)(u.Fragment,{children:m?Object(u.jsx)(o.a,{type:"secondary",id:"openModal",onClick:function(){return x(m)},children:Object(u.jsx)("i",{children:Object(u.jsx)(a.f,{})})}):Object(u.jsx)(o.a,{type:"secondary",id:"openModal",onClick:function(){return x(m)},children:Object(u.jsx)("i",{children:Object(u.jsx)(a.e,{})})})})}},142:function(e,t,n){"use strict";var c=n(137),r=n(1),i=n(138),s=n(18),a=n(31),o=n(23),l=n(24),u=n(49),j=n(3);t.a=function(e){var t=e.type,n=e.movieId,d=Object(i.b)({background:"rgba(0,0,0, 0.5)"}),b=d.openModal,f=d.closeModal,O=d.isOpen,h=d.Modal,m=Object(s.b)(),v=Object(s.c)((function(e){var t=e.auth;return{sessionId:t.sessionId,accountId:t.accountId,isAuth:t.isAuth}})),p=v.sessionId,x=v.accountId,g=v.isAuth,y=Object(r.useState)(!1),w=Object(c.a)(y,2),k=w[0],N=w[1],C=Object(r.useState)(null),S=Object(c.a)(C,2),_=S[0],E=S[1];return Object(r.useEffect)((function(){g&&m(Object(l.d)(t,n,p)).then((function(e){e.rated&&N(e.rated.value),e.rated?E(!0):E(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.a,{type:"secondary",id:"openModal",onClick:function(e){return function(e){g?b(e):u.a.error("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")}(e)},children:Object(j.jsx)("i",{children:!0===_?Object(j.jsx)(o.j,{}):Object(j.jsx)(o.i,{})})}),O&&Object(j.jsx)(h,{children:Object(j.jsx)("div",{className:"modal-wrapper text-center",children:Object(j.jsxs)("div",{className:"content-rate",children:[Object(j.jsx)("h5",{children:!0===_?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443"}),Object(j.jsx)("div",{class:"rate d-flex justify-content-center",children:Array(10).fill(0).map((function(e,t){return k>=t+1?Object(j.jsx)(o.j,{onClick:function(){return N(t+1)}}):Object(j.jsx)(o.i,{onClick:function(){return N(t+1)}})}))}),Object(j.jsx)("button",{class:"col-12 action",onClick:function(){g?(m(Object(l.p)("rated",!0)),m(Object(l.b)("rated",n,t,p,k)).then((function(e){!0===e.success?u.a.success(e.status_message):u.a.error(e.status_message),setTimeout((function(){m(Object(l.m)(t,x,p,"rated"))}),1e3)})),E(!0),f()):alert("\u0421\u043d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})})]})}},145:function(e,t,n){"use strict";n.r(t);var c=n(137),r=n(1),i=n(31),s=n(3);var a=function(e){var t=e.img,n=t?"https://www.themoviedb.org/t/p/w150_and_h150_face".concat(t):"https://lh3.googleusercontent.com/proxy/ZWwMUlBoxWnMC4yA1LG_ftDxELSu0uBcsHS_Kj3erfALvBje8aA_djYo8TIupR8K4T1SKwmB04TdpfpgA9GSPZqx9Hk82eAlRPR1y94t_YNT4UmQ0sM";return Object(s.jsxs)("div",{className:"profile-info col-lg-12 d-lg-flex align-items-center",children:[Object(s.jsxs)("div",{className:"aboutMe col-lg-9 d-lg-flex text-center align-items-center",children:[Object(s.jsx)("img",{src:n,alt:"avatar"}),Object(s.jsx)("h5",{children:"Zowezy"})]}),Object(s.jsx)("div",{className:"stats col-lg-3 justify-content-center justify-content-lg-end d-flex",children:Object(s.jsx)(i.a,{type:"primary",children:"\u0412\u044b\u0439\u0442\u0438 \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})})]})},o=n(2),l=n(25),u=n(4),j=n(6),d=n(23),b=n(30),f=n(138);var O=function(e){var t=e.handleSubmit,n=Object(f.a)({background:"rgba(0, 0, 0, 0.5)"}),c=n.openModal,r=n.closeModal,a=n.isOpen,o=n.Modal;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{onClick:c,type:"alternative",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),a&&Object(s.jsx)(o,{children:Object(s.jsx)("div",{className:"modal-wrapper text-center",children:Object(s.jsxs)("div",{class:"content-create",children:[Object(s.jsx)("h5",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"}),Object(s.jsx)(b.c,{initialValues:{title:"",descr:""},onSubmit:function(){var e=Object(j.a)(Object(u.a)().mark((function e(n,c){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n,c),r();case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.status;return Object(s.jsxs)(b.b,{className:"row flex-column justify-content-center align-items-center",children:[Object(s.jsxs)("div",{class:"form-input align-items-center col-8",children:[Object(s.jsxs)("div",{class:"input-group",children:[Object(s.jsx)("div",{class:"input-group-text",children:Object(s.jsx)("i",{children:Object(s.jsx)(d.h,{})})}),Object(s.jsx)(b.a,{type:"text",className:"form-control",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",id:"title",name:"title"})]}),Object(s.jsxs)("div",{class:"input-group",children:[Object(s.jsx)("div",{class:"input-group-text",children:Object(s.jsx)("i",{children:Object(s.jsx)(d.h,{})})}),Object(s.jsx)(b.a,{type:"text",className:"form-control",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"descr",name:"descr"})]})]}),t&&t.message&&Object(s.jsx)("div",{className:"message",children:t.message}),Object(s.jsx)("button",{class:"action col-6",type:"submit",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})}})]})})})]})};var h=function(e){var t=e.handleSubmit,n=e.visible,c=e.setVisibleBlock;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"header-block d-block d-md-flex justify-content-between align-items-end",children:[Object(s.jsx)("h5",{children:"C\u043f\u0438\u0441\u043a\u0438"}),Object(s.jsx)("div",{className:"sort-button",children:n?Object(s.jsx)(l.b,{type:"alternative",onClick:c,children:"\u0412 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}):Object(s.jsx)(O,{handleSubmit:t})})]}),Object(s.jsx)("hr",{id:"delimiter"})]})},m=n(18),v=n(24),p=n(51),x=function(e){return Object(s.jsx)(p.a,Object(o.a)(Object(o.a)({speed:2,width:310,height:165,viewBox:"0 0 310 165",backgroundColor:"#ebeaea",foregroundColor:"#ecebeb",className:"list col-lg-3"},e),{},{children:Object(s.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"310",height:"165"})}))};var g=function(e){var t=e.name,n=e.id,c=e.deleteList,r=e.setVisibleBlock,a=e.getDetail;return e.isFetching?Object(s.jsx)(x,{}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"list col-lg-3 text-center",children:[Object(s.jsx)("div",{className:"named d-flex align-items-center justify-content-center",children:Object(s.jsx)("span",{children:t})}),Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)(i.a,{type:"primary",onClick:function(){a(n),r()},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(s.jsx)(i.a,{type:"alternative",onClick:function(){return c(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})},y=function(e){return Object(s.jsxs)(p.a,Object(o.a)(Object(o.a)({speed:2,width:308,height:450,viewBox:"0 0 312 450",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",className:e.className},e),{},{children:[Object(s.jsx)("rect",{x:"6",y:"0",rx:"0",ry:"0",width:"100%",height:"400"}),Object(s.jsx)("rect",{x:"6",y:"410",rx:"0",ry:"0",width:"100%",height:"49"})]}))},w=n(49);var k=function(e){var t=e.items,n=e.isFetching,c=e.idList,i=e.session,a=Object(m.b)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"list-item mt-0",children:n?Array(4).fill(3).map((function(e,t){return Object(s.jsx)(y,{className:"item col-lg-3 p-0 mt-3"},t)})):t.map((function(e,t){return Object(r.createElement)(l.a,Object(o.a)(Object(o.a)({onDelete:function(){return t=e.id,void a(Object(v.h)(c,i,t)).then((function(e){!0===e.success?w.a.success(e.status_message):w.a.error(e.status_message)}));var t},key:t},e),{},{key:t}))}))})})};var N=function(e){var t=e.accountId,n=e.session,i=Object(m.b)(),a=Object(r.useState)(!1),u=Object(c.a)(a,2),j=u[0],d=u[1],b=Object(r.useState)(1),f=Object(c.a)(b,2),O=f[0],p=f[1],y=Object(r.useState)(0),w=Object(c.a)(y,2),N=w[0],C=w[1],S=Object(m.c)((function(e){return e.auth.profile})).list,_=Object(m.c)((function(e){return e.auth})).sessionId,E=function(){d(!j)},M=function(){i(Object(v.l)(t,n,O))};Object(r.useEffect)((function(){0===S.items.length&&M()}),[O]);var I=function(e){i(Object(v.i)(e,n)).catch((function(e){M()}))},P=function(e){i(Object(v.k)(e)),C(e)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{handleSubmit:function(e,t){i(Object(v.f)(e,t,n)).then((function(e){M()}))},setVisibleBlock:E,visible:j}),Object(s.jsx)("div",{className:"list-item mt-0",children:Object(s.jsx)("div",{className:"row",children:j?Object(s.jsx)(k,{items:S.currentList,isFetching:S.isFetching,idList:N,session:_}):S.isFetching?Object(s.jsx)(x,{}):S.items&&S.items.map((function(e,t){return Object(s.jsx)(g,Object(o.a)(Object(o.a)({},e),{},{deleteList:I,setVisibleBlock:E,getDetail:P}),t)}))})}),S.pages>1&&Object(s.jsx)(l.g,{page:O,pages:S.pages,onPageChanged:function(e){return p(e)}})]})},C=n(8);var S=function(e){var t=e.title,n=e.onChangeFilter,c=e.type;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"header-block d-block d-md-flex justify-content-between align-items-end",children:[Object(s.jsx)("h5",{children:t}),Object(s.jsxs)("div",{className:"sort-button",children:[Object(s.jsx)(l.b,{onClick:function(){return n("movie")},type:c&&"movie"===c?"primary":"alternative",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(s.jsx)(l.b,{onClick:function(){return n("tv")},type:c&&"tv"===c?"primary":"alternative",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"})]})]}),Object(s.jsx)("hr",{id:"delimiter"})]})},_=n(34),E=n(11),M=n(141),I=n(142);var P=function(e){var t=e.id,n=e.title,c=e.name,r=e.overview,a=e.poster_path,o=e.rating,l=e.vote_average,u=e.type,j=e.deleteItem,b=Object(_.a)(r).splice(0,300);return Object(s.jsxs)("div",{className:"rate-items d-lg-flex col-lg-12",children:[Object(s.jsx)("div",{className:"poster col-lg-2",children:Object(s.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(a),alt:""})}),Object(s.jsxs)("div",{className:"about_film col-lg-7 d-flex flex-column justify-content-between",children:[Object(s.jsxs)("div",{className:"named d-flex justify-content-center justify-content-lg-start",children:[Object(s.jsx)(E.b,{to:"../single/".concat(u,"/").concat(t),children:Object(s.jsx)("h4",{children:n||c})}),Object(s.jsx)("b",{children:l})]}),Object(s.jsx)("div",{className:"descr",children:Object(s.jsxs)("p",{children:[b,"..."]})}),Object(s.jsxs)("div",{className:"action_link d-flex justify-content-center justify-content-lg-start",children:[Object(s.jsx)("div",{className:"action",children:Object(s.jsx)(I.a,{type:u,movieId:t})}),Object(s.jsx)("div",{className:"action",children:Object(s.jsx)(M.a,{type:u,movieId:t})}),Object(s.jsx)("div",{className:"action",onClick:function(){return j(t)},children:Object(s.jsx)(i.a,{type:"secondary",circle:!0,children:Object(s.jsx)(d.k,{})})})]})]}),Object(s.jsxs)("div",{className:"rate col-lg-3 d-flex flex-column justify-content-center align-items-center",children:[Object(s.jsx)("b",{children:o}),Object(s.jsx)("span",{children:"\u041c\u043e\u044f \u043e\u0446\u0435\u043d\u043a\u0430"})]})]})},A=function(e){return Object(s.jsx)(p.a,Object(o.a)(Object(o.a)({speed:2,width:1320,height:245,viewBox:"0 0 1320 245",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:Object(s.jsx)("rect",{x:"2",y:"0",rx:"0",ry:"0",width:"100%",height:"245"})}))};var F=function(e){var t=e.category,n=e.accountId,i=e.session,a=Object(m.c)((function(e){return e.auth.profile[t]})),u=Object(m.b)(),j=Object(r.useState)("movie"),d=Object(c.a)(j,2),b=d[0],f=d[1],O=Object(r.useState)(1),h=Object(c.a)(O,2),p=h[0],x=h[1],g=function(e){u(Object(v.j)(t,b,n,i,e)).then((function(e){!0===e.success?w.a.success(e.status_message):w.a.error(e.status_message)})),console.log("check")};return Object(r.useEffect)((function(){u(Object(v.m)(b,n,i,t,p))}),[b,p,t]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{onChangeFilter:function(e){f(e),x(1)},title:a.text,category:"favs",type:b}),Object(s.jsx)("div",{className:"list-item",children:Object(s.jsx)("div",{className:"row",children:a.isFetching?Array(4).fill(0).map((function(e,n){return"rated"===t?Object(s.jsx)(A,{className:"mt-3"},n):Object(s.jsx)(y,{className:"col-lg-3"},n)})):a[b].items.map((function(e,n){return"rated"===t?Object(s.jsx)(P,Object(o.a)(Object(o.a)({type:b},e),{},{deleteItem:function(){return g(e.id)}}),n):Object(s.jsx)(l.a,Object(o.a)(Object(o.a)({type:b},e),{},{onDelete:function(){return g(e.id)}}),n)}))})}),a[b].pages>1&&Object(s.jsx)(l.g,{page:p,pages:a[b].pages,onPageChanged:function(e){return x(e)}})]})},L=[{type:"list",title:"\u041c\u043e\u0438 \u0441\u043f\u0438\u0441\u043a\u0438"},{type:"rated",title:"\u041c\u043e\u0438 \u043e\u0446\u0435\u043d\u043a\u0438"},{type:"favorite",title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}];t.default=function(){var e=Object(m.c)((function(e){return e.auth})),t=e.isAuth,n=e.sessionId,i=e.profile,o=Object(r.useState)(0),l=Object(c.a)(o,2),u=l[0],j=l[1];return!1===t?Object(s.jsx)(C.a,{to:"/login"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"profile",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(a,{img:i.avatar}),Object(s.jsx)("div",{className:"search-params col-lg-12 d-lg-flex d-sm-block justify-content-center",children:L.map((function(e,t){return Object(s.jsx)("div",{onClick:function(){return j(t)},className:"col-lg-4 params d-flex justify-content-center align-items-center ".concat(t===u&&"active","  "),children:Object(s.jsx)("b",{children:e.title})},t)}))})]})})}),Object(s.jsx)("div",{className:"MyFilm",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:"list"===L[u].type?Object(s.jsx)(N,{accountId:i.id,session:n}):Object(s.jsx)(F,{accountId:i.id,session:n,category:L[u].type})})})})]})}}}]);
//# sourceMappingURL=5.26ebebdc.chunk.js.map