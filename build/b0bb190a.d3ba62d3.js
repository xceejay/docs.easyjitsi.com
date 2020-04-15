(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),i=r(6),o=(r(0),r(143)),a={id:"gettingstartedjibri",title:"Getting Started With Jibri"},c={id:"gettingstartedjibri",title:"Getting Started With Jibri",description:"In order to record conferences the following are required;",source:"@site/docs/gettingstartedjibri.md",permalink:"/docs/gettingstartedjibri",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/gettingstartedjibri.md",sidebar:"docs",previous:{title:"Installation of Jitsi Meet",permalink:"/docs/installation"},next:{title:"Installing Necessary Dependencies",permalink:"/docs/installingdep"}},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Ubuntu Server Specific Prerequisites",id:"ubuntu-server-specific-prerequisites",children:[]}]},{value:"Setting Up The Server",id:"setting-up-the-server",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to record conferences the following are required;"),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An Ubuntu 18.04 LTS x64 server with an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IPv4"}),"IPv4 address"),".")),Object(o.b)("h3",{id:"ubuntu-server-specific-prerequisites"},"Ubuntu Server Specific Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"%22https://geek-university.com/linux/root-account/%22"}),"root")," user"),Object(o.b)("li",{parentName:"ul"},"A sub domain ",Object(o.b)("strong",{parentName:"li"},"recorder.easyjitsi.com")," being pointed to the server mentioned above.")),Object(o.b)("p",null,"NB: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Our example server will be using 8GB of RAM"))),Object(o.b)("h2",{id:"setting-up-the-server"},"Setting Up The Server"),Object(o.b)("p",null,"On our local system, we login into our Ubuntu server"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ssh root@recorder.easyjitsi.com -p 22\n")),Object(o.b)("p",null,"We then run the following command to setup a hostname, recorder, and an FQDN, recorder.easyjitsi.com, for the machine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," hostnamectl set-hostname recorder\n sed -i 's/^127.0.1.1.*$/127.0.1.1 recorder.example.com recorder/g' /etc/hosts\n")),Object(o.b)("p",null,"To verify it was set properly we run these commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hostname\nhostname -f\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"If you encounted any errors or you found it difficult while following these steps, you can head ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://docs.easyjitsi.com/docs/help"}),"here")," to seek help from us."))))}l.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return r?i.a.createElement(m,c({ref:t},u,{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);