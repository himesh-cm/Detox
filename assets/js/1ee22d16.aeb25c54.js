"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6291],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),y=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=y(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=y(n),u=s,g=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var y=2;y<l;y++)r[y]=n[y];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=n(58168),s=(n(96540),n(15680));const l={},r="System",i={unversionedId:"api/system",id:"version-20.x/api/system",title:"System",description:"System APIs allows you to interact with dialogs in the system-level (e.g. permissions, alerts, etc.).",source:"@site/versioned_docs/version-20.x/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/Detox/docs/api/system",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/api/system.md",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Web Views",permalink:"/Detox/docs/api/webviews"},next:{title:"Logger",permalink:"/Detox/docs/api/logger"}},o={},y=[{value:"Matchers",id:"matchers",level:2},{value:"<code>by.system.label(label)</code>",id:"bysystemlabellabel",level:3},{value:"<code>by.system.type(type)</code>",id:"bysystemtypetype",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>tap()</code>",id:"tap",level:3},{value:"Expectations",id:"expectations",level:2},{value:"<code>toExist()</code>",id:"toexist",level:3},{value:"<code>not</code>",id:"not",level:3}],p={toc:y},m="wrapper";function c(e){let{components:t,...n}=e;return(0,s.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"system"},"System"),(0,s.yg)("p",null,"System APIs allows you to interact with dialogs in the system-level (e.g. permissions, alerts, etc.)."),(0,s.yg)("admonition",{title:"Experimental",type:"caution"},(0,s.yg)("p",{parentName:"admonition"},"System APIs are currently in an experimental phase.\nThis means that the API is not yet final and ",(0,s.yg)("strong",{parentName:"p"},"may change over minor releases."))),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},(0,s.yg)("strong",{parentName:"p"},"System APIs are only available on iOS"),". Android support is coming soon."),(0,s.yg)("p",{parentName:"admonition"},"At the moment, System APIs are limited to system dialogs (e.g. permissions, alerts, etc.).\nWe plan to expand the System APIs to include more system-level interactions in the future,\nsuch as OS browser (Safari / Chrome), interactions with push notifications, photo library, etc.")),(0,s.yg)("h2",{id:"matchers"},"Matchers"),(0,s.yg)("p",null,"System matchers are used to find elements within the system:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#bysystemlabellabel"},(0,s.yg)("inlineCode",{parentName:"a"},"by.system.label(label)"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#bysystemtypetype"},(0,s.yg)("inlineCode",{parentName:"a"},"by.system.type(type)")))),(0,s.yg)("h3",{id:"bysystemlabellabel"},(0,s.yg)("inlineCode",{parentName:"h3"},"by.system.label(label)")),(0,s.yg)("p",null,"Match elements with the specified label."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"system.element(by.system.label('Dismiss'));\n")),(0,s.yg)("h3",{id:"bysystemtypetype"},(0,s.yg)("inlineCode",{parentName:"h3"},"by.system.type(type)")),(0,s.yg)("p",null,"Match elements with the specified type."),(0,s.yg)("p",null,"The type value can be any of ",(0,s.yg)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xctest/xcuielement/elementtype"},(0,s.yg)("inlineCode",{parentName:"a"},"XCUIElement.ElementType"))," values, such as ",(0,s.yg)("inlineCode",{parentName:"p"},"'button'")," or ",(0,s.yg)("inlineCode",{parentName:"p"},"'textField'"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"system.element(by.system.type('button'));\n")),(0,s.yg)("h2",{id:"actions"},"Actions"),(0,s.yg)("p",null,"System actions are used to interact with elements within the system:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#tap"},(0,s.yg)("inlineCode",{parentName:"a"},"tap()")))),(0,s.yg)("h3",{id:"tap"},(0,s.yg)("inlineCode",{parentName:"h3"},"tap()")),(0,s.yg)("p",null,"Tap on the element."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"system.element(by.system.label('Allow')).tap();\n")),(0,s.yg)("h2",{id:"expectations"},"Expectations"),(0,s.yg)("p",null,"System expectations are used to assert the state of elements within the system:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#toexist"},(0,s.yg)("inlineCode",{parentName:"a"},"toExist()"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"#not"},(0,s.yg)("inlineCode",{parentName:"a"},"not")))),(0,s.yg)("h3",{id:"toexist"},(0,s.yg)("inlineCode",{parentName:"h3"},"toExist()")),(0,s.yg)("p",null,"Asserts that the element exists."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"await system.element(by.system.label('Allow')).toExist();\n")),(0,s.yg)("h3",{id:"not"},(0,s.yg)("inlineCode",{parentName:"h3"},"not")),(0,s.yg)("p",null,"Negates the expectation."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"await system.element(by.system.label('Allow')).not.toExist();\n")))}c.isMDXComponent=!0}}]);