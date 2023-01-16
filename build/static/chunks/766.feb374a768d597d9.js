"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{2766:function(g,c,a){a.r(c),a.d(c,{default:function(){return t},headerID:function(){return p}});var h=a(5893),i=a(3587),j=a(1),k=a(1561),e=a(4184),l=a.n(e),f=a(1664),m=a.n(f),b=a(7294),n=a(6863),o=function(a,c){(0,b.useEffect)(function(){var b=document.querySelectorAll(a),d=Array.from(b),e=document.getElementById(p),f=new IntersectionObserver(function(a){a.forEach(function(b){var g=b.boundingClientRect.y,h=b.target.getAttribute("id");if(e){var f,a={id:h,currentIndex:d.findIndex(function(a){return a.getAttribute("id")===h}),isIntersecting:b.isIntersecting,currentRatio:b.intersectionRatio,aboveToc:g<e.getBoundingClientRect().y,belowToc:!(g<e.getBoundingClientRect().y)};a.isIntersecting?c(a.id):!a.isIntersecting&&a.currentRatio<1&&a.currentRatio>0&&a.belowToc&&c(null===(f=d[a.currentIndex-1])|| void 0===f?void 0:f.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return b.forEach(function(a){f.observe(a)}),function(){f.disconnect()}},[])},p="headerNav",d=(0,b.memo)(function(){var c=(0,b.useState)(null),d=c[0],f=c[1],a=(0,b.useMemo)(function(){return[n._h.About,n._h.Resume,n._h.Portfolio,n._h.Testimonials,n._h.Contact,]},[]),e=(0,b.useCallback)(function(a){a&&f(a)},[]);return o(a.map(function(a){return"#".concat(a)}).join(","),e),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{currentSection:d,navSections:a}),(0,h.jsx)(q,{currentSection:d,navSections:a})]})}),q=(0,b.memo)(function(a){var c=a.navSections,d=a.currentSection,b="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",e=l()(b,"text-orange-500"),f=l()(b,"text-neutral-100");return(0,h.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:p,children:(0,h.jsx)("nav",{className:"flex justify-center gap-x-8",children:c.map(function(a){return(0,h.jsx)(s,{activeClass:e,current:a===d,inactiveClass:f,section:a},a)})})})}),r=(0,b.memo)(function(a){var g=a.navSections,m=a.currentSection,c=(0,b.useState)(!1),d=c[0],n=c[1],e=(0,b.useCallback)(function(){n(!d)},[d]),f="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",o=l()(f,"bg-neutral-900 text-white font-bold"),p=l()(f,"text-neutral-200 font-medium");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{"aria-label":"Menu Button",className:"fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:e,children:[(0,h.jsx)(k.Z,{className:"h-8 w-8 text-white"}),(0,h.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,h.jsx)(i.u.Root,{as:b.Fragment,show:d,children:(0,h.jsxs)(j.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:e,children:[(0,h.jsx)(i.u.Child,{as:b.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)(j.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,h.jsx)(i.u.Child,{as:b.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,h.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,h.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:g.map(function(a){return(0,h.jsx)(s,{activeClass:o,current:a===m,inactiveClass:p,onClick:e,section:a},a)})})})})]})})]})}),s=(0,b.memo)(function(a){var b=a.section,c=a.current,d=a.inactiveClass,e=a.activeClass,f=a.onClick;return(0,h.jsx)(m(),{href:"/#".concat(b),passHref:!0,children:(0,h.jsx)("a",{className:l()(c?e:d),onClick:f,children:b},b)})});d.displayName="Header";var t=d}}])