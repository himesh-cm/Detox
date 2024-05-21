"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8560],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},c="detox build-framework-cache",i={unversionedId:"cli/build-framework-cache",id:"cli/build-framework-cache",title:"detox build-framework-cache",description:"MacOS only.",source:"@site/../docs/cli/build-framework-cache.md",sourceDirName:"cli",slug:"/cli/build-framework-cache",permalink:"/Detox/docs/next/cli/build-framework-cache",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/cli/build-framework-cache.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"detox recorder",permalink:"/Detox/docs/next/cli/recorder"},next:{title:"detox clean-framework-cache",permalink:"/Detox/docs/next/cli/clean-framework-cache"}},l={},s=[{value:"Options",id:"options",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"detox-build-framework-cache"},"detox build-framework-cache"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox build-framework-cache\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"MacOS only."),"\nBuilds cached versions of the Detox framework and XCUITest-runner.\nThis command uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"--detox")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"--xcuitest")," flags to selectively build components. By default, both components are built."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--detox")," - Builds ",(0,a.yg)("strong",{parentName:"li"},"only")," the Detox injected framework. Default is false (build both)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--xcuitest")," - Builds ",(0,a.yg)("strong",{parentName:"li"},"only")," the XCUITest runner. Default is false (build both).")),(0,a.yg)("p",null,"Detox stores a cached version of its framework and XCUITest-runner in ",(0,a.yg)("inlineCode",{parentName:"p"},"~/Library/Detox/ios/*")," in unique folders, where the folder name\nis a hash of Xcode and Detox version combination. This cache is used to speed up the build process and avoid unnecessary recompilations."),(0,a.yg)("p",null,"Here is an example of the cache structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"\u251c\u2500\u2500 ios\n\u2502\xa0\xa0\u251c\u2500\u2500 framework\n\u2502\xa0\xa0\u2502\xa0\xa0 \u251c\u2500\u2500 197a0586bd006583562a5916c969d158133a8c50\n\u2502\xa0\xa0\u2502\xa0\xa0 \u251c\u2500\u2500 \u2026\n\u2502\xa0\xa0\u2502\xa0\xa0 \u2514\u2500\u2500 eddcc1edeffdb3533a977b73b667e1b7f106c38f\n\u2502\xa0\xa0\u251c\u2500\u2500 xcuitest-runner\n|\xa0\xa0\u2502\xa0\xa0 \u251c\u2500\u2500 197a0586bd006583562a5916c969d158133a8c50\n\u2502\xa0\xa0\u2502\xa0\xa0 \u251c\u2500\u2500 \u2026\n\u2502\xa0\xa0\u2502\xa0\xa0 \u2514\u2500\u2500 eddcc1edeffdb3533a977b73b667e1b7f106c38f\n\u2502\u2026\n")))}p.isMDXComponent=!0}}]);