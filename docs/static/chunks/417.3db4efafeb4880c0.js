(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},1664:function(a,c,b){a.exports=b(8418)},1:function(J,o,b){"use strict";b.d(o,{V:function(){return az}});var a,g,h=b(7294),K=b(2984),e=b(2351),L=b(3784),p=((a=p||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a),M=b(9946),N=b(2180),q=((g=q||{})[g.None=1]="None",g[g.Focusable=2]="Focusable",g[g.Hidden=4]="Hidden",g);let O=(0,e.yV)(function(b,c){let{features:a=1,...d}=b;return(0,e.sY)({ourProps:{ref:c,"aria-hidden":(2&a)==2||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&a)==4&&(2&a)!=2&&{display:"none"}}},theirProps:d,slot:{},defaultTag:"div",name:"Hidden"})});function P(a){return"undefined"==typeof window?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(a=>`${a}:not([tabindex='-1'])`).join(",");var c,f,i,j,r=((c=r||{})[c.First=1]="First",c[c.Previous=2]="Previous",c[c.Next=4]="Next",c[c.Last=8]="Last",c[c.WrapAround=16]="WrapAround",c[c.NoScroll=32]="NoScroll",c),s=((f=s||{})[f.Error=0]="Error",f[f.Overflow=1]="Overflow",f[f.Success=2]="Success",f[f.Underflow=3]="Underflow",f),t=((i=t||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i),u=((j=u||{})[j.Strict=0]="Strict",j[j.Loose=1]="Loose",j);function R(a){null==a||a.focus({preventScroll:!0})}function S(a,f,l=!0){var g,h,i;let j=Array.isArray(a)?a.length>0?a[0].ownerDocument:document:a.ownerDocument,k=Array.isArray(a)?l?function(a,b=a=>a){return a.slice().sort((e,f)=>{let a=b(e),c=b(f);if(null===a||null===c)return 0;let d=a.compareDocumentPosition(c);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(a):a:function(a=document.body){return null==a?[]:Array.from(a.querySelectorAll(Q))}(a),p=j.activeElement,m=(()=>{if(5&f)return 1;if(10&f)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),n=(()=>{if(1&f)return 0;if(2&f)return Math.max(0,k.indexOf(p))-1;if(4&f)return Math.max(0,k.indexOf(p))+1;if(8&f)return k.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=32&f?{preventScroll:!0}:{},e=0,c=k.length,b;do{if(e>=c||e+c<=0)return 0;let d=n+e;if(16&f)d=(d+c)%c;else{if(d<0)return 3;if(d>=c)return 1}null==(b=k[d])||b.focus(o),e+=m}while(b!==j.activeElement)return 6&f&&null!=(i=null==(h=null==(g=b)?void 0:g.matches)?void 0:h.call(g,"textarea,input"))&&i&&b.select(),b.hasAttribute("tabindex")||b.setAttribute("tabindex","0"),2}var T=b(3781),U=b(3855);function V(a,b,c){let d=(0,U.E)(b);(0,h.useEffect)(()=>{function b(a){d.current(a)}return window.addEventListener(a,b,c),()=>window.removeEventListener(a,b,c)},[a,c])}var k,v=((k=v||{})[k.Forwards=0]="Forwards",k[k.Backwards=1]="Backwards",k),W=b(4879);function X(...a){return(0,h.useMemo)(()=>P(...a),[...a])}function Y(a,b,c,d){let e=(0,U.E)(c);(0,h.useEffect)(()=>{function c(a){e.current(a)}return(a=null!=a?a:window).addEventListener(b,c,d),()=>a.removeEventListener(b,c,d)},[a,b,d])}var Z=b(1021);function $(a,b){let d=(0,h.useRef)([]),c=(0,T.z)(a);(0,h.useEffect)(()=>{for(let[a,e]of b.entries())if(d.current[a]!==e){let f=c(b);return d.current=b,f}},[c,...b])}var d,n=((d=n||{})[d.None=1]="None",d[d.InitialFocus=2]="InitialFocus",d[d.TabLock=4]="TabLock",d[d.FocusLock=8]="FocusLock",d[d.RestoreFocus=16]="RestoreFocus",d[d.All=30]="All",d);let _=Object.assign((0,e.yV)(function(g,i){let b=(0,h.useRef)(null),j=(0,L.T)(b,i),{initialFocus:k,containers:l,features:a=30,...m}=g;(0,N.H)()||(a=1);let c=X(b);aa({ownerDocument:c},Boolean(16&a));let n=ab({ownerDocument:c,container:b,initialFocus:k},Boolean(2&a));ac({ownerDocument:c,container:b,containers:l,previousActiveElement:n},Boolean(8&a));let d,o=(d=(0,h.useRef)(0),V("keydown",a=>{"Tab"===a.key&&(d.current=a.shiftKey?1:0)},!0),d),f=(0,T.z)(()=>{let a=b.current;a&&(0,K.E)(o.current,{[v.Forwards]:()=>S(a,r.First),[v.Backwards]:()=>S(a,r.Last)})});return h.createElement(h.Fragment,null,Boolean(4&a)&&h.createElement(O,{as:"button",type:"button",onFocus:f,features:q.Focusable}),(0,e.sY)({ourProps:{ref:j},theirProps:m,defaultTag:"div",name:"FocusTrap"}),Boolean(4&a)&&h.createElement(O,{as:"button",type:"button",onFocus:f,features:q.Focusable}))}),{features:n});function aa({ownerDocument:a},b){let c=(0,h.useRef)(null);Y(null==a?void 0:a.defaultView,"focusout",a=>{!b||c.current||(c.current=a.target)},!0),$(()=>{b||((null==a?void 0:a.activeElement)===(null==a?void 0:a.body)&&R(c.current),c.current=null)},[b]);let d=(0,h.useRef)(!1);(0,h.useEffect)(()=>(d.current=!1,()=>{d.current=!0,(0,Z.Y)(()=>{d.current&&(R(c.current),c.current=null)})}),[])}function ab({ownerDocument:c,container:d,initialFocus:e},a){let b=(0,h.useRef)(null);return $(()=>{if(!a)return;let g=d.current;if(!g)return;let f=null==c?void 0:c.activeElement;if(null!=e&&e.current){if((null==e?void 0:e.current)===f){b.current=f;return}}else if(g.contains(f)){b.current=f;return}null!=e&&e.current?R(e.current):S(g,r.First)===s.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),b.current=null==c?void 0:c.activeElement},[a]),b}function ac({ownerDocument:a,container:b,containers:c,previousActiveElement:d},e){let f=(0,W.t)();Y(null==a?void 0:a.defaultView,"focus",g=>{if(!e||!f.current)return;let h=new Set(null==c?void 0:c.current);h.add(b);let i=d.current;if(!i)return;let a=g.target;a&&a instanceof HTMLElement?ad(h,a)?(d.current=a,R(a)):(g.preventDefault(),g.stopPropagation(),R(i)):R(d.current)},!0)}function ad(b,c){var a;for(let d of b)if(null!=(a=d.current)&&a.contains(c))return!0;return!1}var ae=b(6723);let af=new Set,ag=new Map;function ah(a){a.setAttribute("aria-hidden","true"),a.inert=!0}function ai(a){let b=ag.get(a);b&&(null===b["aria-hidden"]?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",b["aria-hidden"]),a.inert=b.inert)}var aj=b(3935);let ak=(0,h.createContext)(!1);function al(a){return h.createElement(ak.Provider,{value:a.force},a.children)}let am=h.Fragment,w=(0,e.yV)(function(d,f){let b=(0,h.useRef)(null),g=(0,L.T)((0,L.h)(a=>{b.current=a}),f),j=X(b),c=function(b){let c=(0,h.useContext)(ak),d=(0,h.useContext)(ao),e=X(b),[a,f]=(0,h.useState)(()=>{if(!c&&null!==d||"undefined"==typeof window)return null;let a=null==e?void 0:e.getElementById("headlessui-portal-root");if(a)return a;if(null===e)return null;let b=e.createElement("div");return b.setAttribute("id","headlessui-portal-root"),e.body.appendChild(b)});return(0,h.useEffect)(()=>{null!==a&&(null!=e&&e.body.contains(a)||null==e||e.body.appendChild(a))},[a,e]),(0,h.useEffect)(()=>{c||null!==d&&f(d.current)},[d,f,c]),a}(b),[a]=(0,h.useState)(()=>{var a;return"undefined"==typeof window?null:null!=(a=null==j?void 0:j.createElement("div"))?a:null}),i=(0,N.H)(),k=(0,h.useRef)(!1);return(0,ae.e)(()=>{if(k.current=!1,!(!c||!a))return c.contains(a)||(a.setAttribute("data-headlessui-portal",""),c.appendChild(a)),()=>{k.current=!0,(0,Z.Y)(()=>{var b;k.current&&c&&a&&(c.removeChild(a),c.childNodes.length<=0&&(null==(b=c.parentElement)||b.removeChild(c)))})}},[c,a]),i&&c&&a?(0,aj.createPortal)((0,e.sY)({ourProps:{ref:g},theirProps:d,defaultTag:am,name:"Portal"}),a):null}),an=h.Fragment,ao=(0,h.createContext)(null),x=(0,e.yV)(function(a,b){let{target:c,...d}=a,f={ref:(0,L.T)(b)};return h.createElement(ao.Provider,{value:c},(0,e.sY)({ourProps:f,theirProps:d,defaultTag:an,name:"Popover.Group"}))}),ap=Object.assign(w,{Group:x}),aq=(0,h.createContext)(null);function ar(){let a=(0,h.useContext)(aq);if(null===a){let b=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(b,ar),b}return a}let y=(0,e.yV)(function(c,d){let a=ar(),b=`headlessui-description-${(0,M.M)()}`,f=(0,L.T)(d);(0,ae.e)(()=>a.register(b),[b,a.register]);let g={ref:f,...a.props,id:b};return(0,e.sY)({ourProps:g,theirProps:c,slot:a.slot||{},defaultTag:"p",name:a.name||"Description"})});var as=b(6567);let z=(0,h.createContext)(()=>{});z.displayName="StackContext";var A=((au=A||{})[au.Add=0]="Add",au[au.Remove=1]="Remove",au);function at({children:b,onUpdate:e,type:c,element:d}){let f=(0,h.useContext)(z),a=(0,T.z)((...a)=>{null==e||e(...a),f(...a)});return(0,ae.e)(()=>(a(0,c,d),()=>a(1,c,d)),[a,c,d]),h.createElement(z.Provider,{value:a},b)}var au,l,m,B=((l=B||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),C=((m=C||{})[m.SetTitleId=0]="SetTitleId",m);let av={0:(a,b)=>a.titleId===b.id?a:{...a,titleId:b.id}},D=(0,h.createContext)(null);function aw(c){let a=(0,h.useContext)(D);if(null===a){let b=Error(`<${c} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,aw),b}return a}function ax(b,a){return(0,K.E)(a.type,av,b,a)}D.displayName="DialogContext";let ay=e.AN.RenderStrategy|e.AN.Static,E=(0,e.yV)(function(d,s){let{open:c,onClose:k,initialFocus:t,__demoMode:v=!1,...w}=d,[x,R]=(0,h.useState)(0),f=(0,as.oJ)();void 0===c&&null!==f&&(c=(0,K.E)(f,{[as.ZM.Open]:!0,[as.ZM.Closed]:!1}));let y=(0,h.useRef)(new Set),b=(0,h.useRef)(null),z=(0,L.T)(b,s),B=(0,h.useRef)(null),l=X(b),m=d.hasOwnProperty("open")||null!==f,n=d.hasOwnProperty("onClose");if(!m&&!n)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!m)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!n)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof k)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${k}`);let a=c?0:1,[o,S]=(0,h.useReducer)(ax,{titleId:null,descriptionId:null,panelRef:(0,h.createRef)()}),g=(0,T.z)(()=>k(!1)),C=(0,T.z)(a=>S({type:0,id:a})),i=!!(0,N.H)()&&!v&&0===a,j=x>1,E=null!==(0,h.useContext)(D);(function(b,a=!0){(0,ae.e)(()=>{if(!a||!b.current)return;let c=b.current,e=P(c);if(e){for(let d of(af.add(c),ag.keys()))d.contains(c)&&(ai(d),ag.delete(d));return e.querySelectorAll("body > *").forEach(a=>{if(a instanceof HTMLElement){for(let b of af)if(a.contains(b))return;1===af.size&&(ag.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),ah(a))}}),()=>{if(af.delete(c),af.size>0)e.querySelectorAll("body > *").forEach(a=>{if(a instanceof HTMLElement&&!ag.has(a)){for(let b of af)if(a.contains(b))return;ag.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),ah(a)}});else for(let a of ag.keys())ai(a),ag.delete(a)}}},[a])})(b,!!j&&i),function(b,c,a=!0){let d=(0,h.useRef)(!1);function e(e,h){if(!d.current||e.defaultPrevented)return;let i=function b(a){return"function"==typeof a?b(a()):Array.isArray(a)||a instanceof Set?a:[a]}(b),a=h(e);if(null!==a&&a.ownerDocument.documentElement.contains(a)){for(let f of i){if(null===f)continue;let g=f instanceof HTMLElement?f:f.current;if(null!=g&&g.contains(a))return}return!function(a,c=0){var b;return a!==(null==(b=P(a))?void 0:b.body)&&(0,K.E)(c,{0:()=>a.matches(Q),1(){let b=a;for(;null!==b;){if(b.matches(Q))return!0;b=b.parentElement}return!1}})}(a,u.Loose)&& -1!==a.tabIndex&&e.preventDefault(),c(e,a)}}(0,h.useEffect)(()=>{requestAnimationFrame(()=>{d.current=a})},[a]),V("click",a=>e(a,a=>a.target),!0),V("blur",a=>e(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(()=>{var a,c;return[...Array.from(null!=(a=null==l?void 0:l.querySelectorAll("body > *, [data-headlessui-portal]"))?a:[]).filter(a=>!(!(a instanceof HTMLElement)||a.contains(B.current)||o.panelRef.current&&a.contains(o.panelRef.current))),null!=(c=o.panelRef.current)?c:b.current]},g,i&&!j),Y(null==l?void 0:l.defaultView,"keydown",b=>{b.defaultPrevented||b.key===p.Escape&&0===a&&(j||(b.preventDefault(),b.stopPropagation(),g()))}),(0,h.useEffect)(()=>{var e;if(0!==a||E)return;let d=P(b);if(!d)return;let c=d.documentElement,g=null!=(e=d.defaultView)?e:window,i=c.style.overflow,j=c.style.paddingRight,f=g.innerWidth-c.clientWidth;if(c.style.overflow="hidden",f>0){let h=f-(c.clientWidth-c.offsetWidth);c.style.paddingRight=`${h}px`}return()=>{c.style.overflow=i,c.style.paddingRight=j}},[a,E]),(0,h.useEffect)(()=>{if(0!==a||!b.current)return;let c=new IntersectionObserver(b=>{for(let a of b)0===a.boundingClientRect.x&&0===a.boundingClientRect.y&&0===a.boundingClientRect.width&&0===a.boundingClientRect.height&&g()});return c.observe(b.current),()=>c.disconnect()},[a,b,g]);let[F,G]=function(){let[a,b]=(0,h.useState)([]);return[a.length>0?a.join(" "):void 0,(0,h.useMemo)(()=>function(a){let c=(0,T.z)(a=>(b(b=>[...b,a]),()=>b(d=>{let b=d.slice(),c=b.indexOf(a);return -1!==c&&b.splice(c,1),b}))),d=(0,h.useMemo)(()=>({register:c,slot:a.slot,name:a.name,props:a.props}),[c,a.slot,a.name,a.props]);return h.createElement(aq.Provider,{value:d},a.children)},[b])]}(),H=`headlessui-dialog-${(0,M.M)()}`,I=(0,h.useMemo)(()=>[{dialogState:a,close:g,setTitleId:C},o],[a,o,g,C]),r=(0,h.useMemo)(()=>({open:0===a}),[a]),J={ref:z,id:H,role:"dialog","aria-modal":0===a||void 0,"aria-labelledby":o.titleId,"aria-describedby":F};return h.createElement(at,{type:"Dialog",element:b,onUpdate:(0,T.z)((a,b,c)=>{"Dialog"===b&&(0,K.E)(a,{[A.Add](){y.current.add(c),R(a=>a+1)},[A.Remove](){y.current.add(c),R(a=>a-1)}})})},h.createElement(al,{force:!0},h.createElement(ap,null,h.createElement(D.Provider,{value:I},h.createElement(ap.Group,{target:b},h.createElement(al,{force:!1},h.createElement(G,{slot:r,name:"Dialog.Description"},h.createElement(_,{initialFocus:t,containers:y,features:i?(0,K.E)(j?"parent":"leaf",{parent:_.features.RestoreFocus,leaf:_.features.All& ~_.features.FocusLock}):_.features.None},(0,e.sY)({ourProps:J,theirProps:w,slot:r,defaultTag:"div",features:ay,visible:0===a,name:"Dialog"})))))))),h.createElement(O,{features:q.Hidden,ref:B}))}),F=(0,e.yV)(function(a,b){let[{dialogState:c,close:j}]=aw("Dialog.Overlay"),d=(0,L.T)(b),f=`headlessui-dialog-overlay-${(0,M.M)()}`,g=(0,T.z)(a=>{if(a.target===a.currentTarget){if(function(d){let a=d.parentElement,b=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(b=a),a=a.parentElement;let c=(null==a?void 0:a.getAttribute("disabled"))==="";return!(c&&function c(b){if(!b)return!1;let a=b.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(b))&&c}(a.currentTarget))return a.preventDefault();a.preventDefault(),a.stopPropagation(),j()}}),i=(0,h.useMemo)(()=>({open:0===c}),[c]);return(0,e.sY)({ourProps:{ref:d,id:f,"aria-hidden":!0,onClick:g},theirProps:a,slot:i,defaultTag:"div",name:"Dialog.Overlay"})}),G=(0,e.yV)(function(a,b){let[{dialogState:c},d]=aw("Dialog.Backdrop"),f=(0,L.T)(b),g=`headlessui-dialog-backdrop-${(0,M.M)()}`;(0,h.useEffect)(()=>{if(null===d.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[d.panelRef]);let i=(0,h.useMemo)(()=>({open:0===c}),[c]);return h.createElement(al,{force:!0},h.createElement(ap,null,(0,e.sY)({ourProps:{ref:f,id:g,"aria-hidden":!0},theirProps:a,slot:i,defaultTag:"div",name:"Dialog.Backdrop"})))}),H=(0,e.yV)(function(a,b){let[{dialogState:c},d]=aw("Dialog.Panel"),f=(0,L.T)(b,d.panelRef),g=`headlessui-dialog-panel-${(0,M.M)()}`,i=(0,h.useMemo)(()=>({open:0===c}),[c]),j=(0,T.z)(a=>{a.stopPropagation()});return(0,e.sY)({ourProps:{ref:f,id:g,onClick:j},theirProps:a,slot:i,defaultTag:"div",name:"Dialog.Panel"})}),I=(0,e.yV)(function(b,c){let[{dialogState:d,setTitleId:f}]=aw("Dialog.Title"),a=`headlessui-dialog-title-${(0,M.M)()}`,g=(0,L.T)(c);(0,h.useEffect)(()=>(f(a),()=>f(null)),[a,f]);let i=(0,h.useMemo)(()=>({open:0===d}),[d]);return(0,e.sY)({ourProps:{ref:g,id:a},theirProps:b,slot:i,defaultTag:"h2",name:"Dialog.Title"})}),az=Object.assign(E,{Backdrop:G,Panel:H,Overlay:F,Title:I,Description:y})},3587:function(m,g,a){"use strict";a.d(g,{u:function(){return I}});var c,e=a(7294),b=a(2351),n=a(6567),o=a(2984),p=a(1021),q=a(9946),r=a(4879),s=a(6723),t=a(3855),u=a(2180),v=a(3784);function w(){let b=[],c=[],a={enqueue(a){c.push(a)},addEventListener:(b,c,d,e)=>(b.addEventListener(c,d,e),a.add(()=>b.removeEventListener(c,d,e))),requestAnimationFrame(...b){let c=requestAnimationFrame(...b);return a.add(()=>cancelAnimationFrame(c))},nextFrame:(...b)=>a.requestAnimationFrame(()=>a.requestAnimationFrame(...b)),setTimeout(...b){let c=setTimeout(...b);return a.add(()=>clearTimeout(c))},add:a=>(b.push(a),()=>{let c=b.indexOf(a);if(c>=0){let[d]=b.splice(c,1);d()}}),dispose(){for(let a of b.splice(0))a()},async workQueue(){for(let a of c.splice(0))await a()}};return a}function x(a,...b){a&&b.length>0&&a.classList.add(...b)}function y(a,...b){a&&b.length>0&&a.classList.remove(...b)}var d,h=((d=h||{}).Ended="ended",d.Cancelled="cancelled",d),z=a(3781);function A(a=""){return a.split(" ").filter(a=>a.trim().length>1)}let i=(0,e.createContext)(null);i.displayName="TransitionContext";var j=((c=j||{}).Visible="visible",c.Hidden="hidden",c);let k=(0,e.createContext)(null);function B(a){return"children"in a?B(a.children):a.current.filter(({state:a})=>"visible"===a).length>0}function C(a){let g=(0,t.E)(a),c=(0,e.useRef)([]),h=(0,r.t)(),d=(0,z.z)((e,a=b.l4.Hidden)=>{let d=c.current.findIndex(({id:a})=>a===e);-1!==d&&((0,o.E)(a,{[b.l4.Unmount](){c.current.splice(d,1)},[b.l4.Hidden](){c.current[d].state="hidden"}}),(0,p.Y)(()=>{var a;!B(c)&&h.current&&(null==(a=g.current)||a.call(g))}))}),f=(0,z.z)(e=>{let a=c.current.find(({id:a})=>a===e);return a?"visible"!==a.state&&(a.state="visible"):c.current.push({id:e,state:"visible"}),()=>d(e,b.l4.Unmount)});return(0,e.useMemo)(()=>({children:c,register:f,unregister:d}),[f,d,c])}function D(){}k.displayName="NestingContext";let E=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(d){var a;let b={};for(let c of E)b[c]=null!=(a=d[c])?a:D;return b}let G=b.AN.RenderStrategy,H=(0,b.yV)(function(E,H){var d;let{beforeEnter:I,afterEnter:J,beforeLeave:K,afterLeave:L,enter:M,enterFrom:N,enterTo:O,entered:P,leave:Q,leaveFrom:R,leaveTo:S,...g}=E,f=(0,e.useRef)(null),T=(0,v.T)(f,H),[a,ab]=(0,e.useState)("visible"),U=g.unmount?b.l4.Unmount:b.l4.Hidden,{show:c,appear:V,initial:W}=function(){let a=(0,e.useContext)(i);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),{register:j,unregister:X}=function(){let a=(0,e.useContext)(k);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),Y=(0,e.useRef)(null),l=(0,q.M)();(0,e.useEffect)(()=>{if(l)return j(l)},[j,l]),(0,e.useEffect)(()=>{if(U===b.l4.Hidden&&l){if(c&&"visible"!==a){ab("visible");return}(0,o.E)(a,{hidden:()=>X(l),visible:()=>j(l)})}},[a,l,j,X,c,U]);let m,Z=(0,t.E)({enter:A(M),enterFrom:A(N),enterTo:A(O),entered:A(P),leave:A(Q),leaveFrom:A(R),leaveTo:A(S)}),$=(d={beforeEnter:I,afterEnter:J,beforeLeave:K,afterLeave:L},m=(0,e.useRef)(F(d)),(0,e.useEffect)(()=>{m.current=F(d)},[d]),m),p=(0,u.H)();(0,e.useEffect)(()=>{if(p&&"visible"===a&&null===f.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,a,p]);let D=W&&!V,_=!p||D||Y.current===c?"idle":c?"enter":"leave",ac=(0,e.useRef)(!1),aa=C(()=>{ac.current||(ab("hidden"),X(l))});return function({container:b,direction:a,classes:c,events:d,onStart:f,onStop:g}){let i=(0,r.t)(),j=function(){let[a]=(0,e.useState)(w);return(0,e.useEffect)(()=>()=>a.dispose(),[a]),a}(),k=(0,t.E)(a),l=(0,z.z)(()=>(0,o.E)(k.current,{enter:()=>d.current.beforeEnter(),leave:()=>d.current.beforeLeave(),idle(){}})),m=(0,z.z)(()=>(0,o.E)(k.current,{enter:()=>d.current.afterEnter(),leave:()=>d.current.afterLeave(),idle(){}}));(0,s.e)(()=>{let a=w();j.add(a.dispose);let d=b.current;if(d&&"idle"!==k.current&&i.current)return a.dispose(),l(),f.current(k.current),a.add(function(c,a,f,d){var g;let h,b=f?"enter":"leave",e=w(),k=void 0!==d?(g=d,h={called:!1},(...a)=>{if(!h.called)return h.called=!0,g(...a)}):()=>{},i=(0,o.E)(b,{enter:()=>a.enter,leave:()=>a.leave}),l=(0,o.E)(b,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),j=(0,o.E)(b,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom});return y(c,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),x(c,...i,...j),e.nextFrame(()=>{y(c,...j),x(c,...l),function(b,c){let a=w();if(!b)return a.dispose;let{transitionDuration:d,transitionDelay:e}=getComputedStyle(b),[f,g]=[d,e].map(a=>{let[b=0]=a.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):1e3*parseFloat(a)).sort((a,b)=>b-a);return b});if(f+g!==0){let h=[];h.push(a.addEventListener(b,"transitionrun",d=>{d.target===d.currentTarget&&(h.splice(0).forEach(a=>a()),h.push(a.addEventListener(b,"transitionend",a=>{a.target===a.currentTarget&&(c("ended"),h.splice(0).forEach(a=>a()))}),a.addEventListener(b,"transitioncancel",a=>{a.target===a.currentTarget&&(c("cancelled"),h.splice(0).forEach(a=>a()))})))}))}else c("ended");a.add(()=>c("cancelled")),a.dispose}(c,b=>("ended"===b&&(y(c,...i),x(c,...a.entered)),k(b)))}),e.dispose}(d,c.current,"enter"===k.current,b=>{a.dispose(),(0,o.E)(b,{[h.Ended](){m(),g.current(k.current)},[h.Cancelled](){}})})),a.dispose},[a])}({container:f,classes:Z,events:$,direction:_,onStart:(0,t.E)(()=>{ac.current=!0}),onStop:(0,t.E)(a=>{ac.current=!1,"leave"!==a||B(aa)||(ab("hidden"),X(l))})}),(0,e.useEffect)(()=>{D&&(U===b.l4.Hidden?Y.current=null:Y.current=c)},[c,D,a]),e.createElement(k.Provider,{value:aa},e.createElement(n.up,{value:(0,o.E)(a,{visible:n.ZM.Open,hidden:n.ZM.Closed})},(0,b.sY)({ourProps:{ref:T},theirProps:g,defaultTag:"div",features:G,visible:"visible"===a,name:"Transition.Child"})))}),f=(0,b.yV)(function(g,h){let{show:a,appear:j=!1,unmount:l,...m}=g,p=(0,e.useRef)(null),q=(0,v.T)(p,h);(0,u.H)();let c=(0,n.oJ)();if(void 0===a&&null!==c&&(a=(0,o.E)(c,{[n.ZM.Open]:!0,[n.ZM.Closed]:!1})),![!0,!1].includes(a))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[r,y]=(0,e.useState)(a?"visible":"hidden"),d=C(()=>{y("hidden")}),[t,z]=(0,e.useState)(!0),w=(0,e.useRef)([a]);(0,s.e)(()=>{!1!==t&&w.current[w.current.length-1]!==a&&(w.current.push(a),z(!1))},[w,a]);let x=(0,e.useMemo)(()=>({show:a,appear:j,initial:t}),[a,j,t]);(0,e.useEffect)(()=>{if(a)y("visible");else if(B(d)){let c=p.current;if(!c)return;let b=c.getBoundingClientRect();0===b.x&&0===b.y&&0===b.width&&0===b.height&&y("hidden")}else y("hidden")},[a,d]);let f={unmount:l};return e.createElement(k.Provider,{value:d},e.createElement(i.Provider,{value:x},(0,b.sY)({ourProps:{...f,as:e.Fragment,children:e.createElement(H,{ref:q,...f,...m})},theirProps:{},defaultTag:e.Fragment,features:G,visible:"visible"===r,name:"Transition"})))}),l=(0,b.yV)(function(a,b){let c=null!==(0,e.useContext)(i),d=null!==(0,n.oJ)();return e.createElement(e.Fragment,null,!c&&d?e.createElement(f,{ref:b,...a}):e.createElement(H,{ref:b,...a}))}),I=Object.assign(f,{Child:l,Root:f})},3781:function(c,b,a){"use strict";a.d(b,{z:function(){return f}});var d=a(7294),e=a(3855);let f=function(a){let b=(0,e.E)(a);return d.useCallback((...a)=>b.current(...a),[b])}},9946:function(e,c,a){"use strict";a.d(c,{M:function(){return j}});var b,d=a(7294),f=a(6723),g=a(2180);let h=0;function i(){return++h}let j=null!=(b=d.useId)?b:function(){let b=(0,g.H)(),[a,c]=d.useState(b?i:null);return(0,f.e)(()=>{null===a&&c(i())},[a]),null!=a?""+a:void 0}},4879:function(c,b,a){"use strict";a.d(b,{t:function(){return f}});var d=a(7294),e=a(6723);function f(){let a=(0,d.useRef)(!1);return(0,e.e)(()=>(a.current=!0,()=>{a.current=!1}),[]),a}},6723:function(d,c,a){"use strict";a.d(c,{e:function(){return e}});var b=a(7294);let e="undefined"!=typeof window?b.useLayoutEffect:b.useEffect},3855:function(c,b,a){"use strict";a.d(b,{E:function(){return f}});var d=a(7294),e=a(6723);function f(a){let b=(0,d.useRef)(a);return(0,e.e)(()=>{b.current=a},[a]),b}},2180:function(c,b,a){"use strict";a.d(b,{H:function(){return f}});var d=a(7294);let e={serverHandoffComplete:!1};function f(){let[a,b]=(0,d.useState)(e.serverHandoffComplete);return(0,d.useEffect)(()=>{!0!==a&&b(!0)},[a]),(0,d.useEffect)(()=>{!1===e.serverHandoffComplete&&(e.serverHandoffComplete=!0)},[]),a}},3784:function(c,b,a){"use strict";a.d(b,{T:function(){return h},h:function(){return g}});var d=a(7294),e=a(3781);let f=Symbol();function g(a,b=!0){return Object.assign(a,{[f]:b})}function h(...a){let c=(0,d.useRef)(a);(0,d.useEffect)(()=>{c.current=a},[a]);let b=(0,e.z)(b=>{for(let a of c.current)null!=a&&("function"==typeof a?a(b):a.current=b)});return a.every(a=>null==a||(null==a?void 0:a[f]))?void 0:b}},6567:function(g,c,b){"use strict";b.d(c,{ZM:function(){return f},oJ:function(){return h},up:function(){return i}});var a,d=b(7294);let e=(0,d.createContext)(null);e.displayName="OpenClosedContext";var f=((a=f||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function h(){return(0,d.useContext)(e)}function i({value:a,children:b}){return d.createElement(e.Provider,{value:a},b)}},2984:function(c,a,b){"use strict";function d(a,b,...f){if(a in b){let c=b[a];return"function"==typeof c?c(...f):c}let e=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,d),e}b.d(a,{E:function(){return d}})},1021:function(c,a,b){"use strict";function d(a){"function"==typeof queueMicrotask?queueMicrotask(a):Promise.resolve().then(a).catch(a=>setTimeout(()=>{throw a}))}b.d(a,{Y:function(){return d}})},2351:function(g,d,c){"use strict";c.d(d,{AN:function(){return e},l4:function(){return f},sY:function(){return j},yV:function(){return m}});var a,b,h=c(7294),i=c(2984),e=((a=e||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),f=((b=f||{})[b.Unmount=0]="Unmount",b[b.Hidden=1]="Hidden",b);function j({ourProps:g,theirProps:h,slot:b,defaultTag:c,features:e,visible:j=!0,name:d}){let a=l(h,g);if(j)return k(a,b,c,d);let f=null!=e?e:0;if(2&f){let{static:m=!1,...n}=a;if(m)return k(n,b,c,d)}if(1&f){let{unmount:o=!0,...p}=a;return(0,i.E)(o?0:1,{0:()=>null,1:()=>k({...p,hidden:!0,style:{display:"none"}},b,c,d)})}return k(a,b,c,d)}function k(d,f={},j,k){let{as:c=j,children:e,refName:m="ref",...a}=o(d,["unmount","static"]),g=void 0!==d.ref?{[m]:d.ref}:{},b="function"==typeof e?e(f):e;a.className&&"function"==typeof a.className&&(a.className=a.className(f));let i={};if(c===h.Fragment&&Object.keys(n(a)).length>0){if(!(0,h.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${k} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));return(0,h.cloneElement)(b,Object.assign({},l(b.props,n(o(a,["ref"]))),i,g))}return(0,h.createElement)(c,Object.assign({},o(a,["ref"]),c!==h.Fragment&&g,c!==h.Fragment&&i),b)}function l(...d){if(0===d.length)return{};if(1===d.length)return d[0];let b={},c={};for(let e of d)for(let a in e)a.startsWith("on")&&"function"==typeof e[a]?(null!=c[a]||(c[a]=[]),c[a].push(e[a])):b[a]=e[a];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(c).map(a=>[a,void 0])));for(let f in c)Object.assign(b,{[f](a,...b){let d=c[f];for(let e of d){if(a.defaultPrevented)return;e(a,...b)}}});return b}function m(a){var b;return Object.assign((0,h.forwardRef)(a),{displayName:null!=(b=a.displayName)?b:a.name})}function n(c){let a=Object.assign({},c);for(let b in a)void 0===a[b]&&delete a[b];return a}function o(c,d=[]){let a=Object.assign({},c);for(let b of d)b in a&&delete a[b];return a}},1561:function(e,a,b){"use strict";var c=b(7294);let d=c.forwardRef(function(a,b){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:b},a),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"}))});a.Z=d}}])