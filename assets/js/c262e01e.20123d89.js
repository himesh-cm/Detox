"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},6334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={toc:[]},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Expo integration with Detox is entirely a community-driven effort.\nThere is no special support for Expo projects in Detox, and we do not maintain any Expo-specific code or documentation.")),(0,r.kt)("p",null,"There is a tutorial on how to set up Detox with Expo projects, which you can find on Expo official documentation site: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/build-reference/e2e-tests/"},"Running E2E tests on EAS Build"),". It is a great starting point for projects that are using Expo."),(0,r.kt)("p",null,"For support on how to use Detox with Expo, you should contact the Expo team or the Expo community."),(0,r.kt)("p",null,"If you are experiencing a bug, which you believe is a Detox issue, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues"},"open an issue")," on our GitHub repository."))}u.isMDXComponent=!0;const c={toc:[]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"At the moment, Detox does not support non-React Native apps on ",(0,r.kt)("strong",{parentName:"p"},"Android")," due to the blocking issues:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/2543"},"Restore support for pure-native/hybrid Projects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/1220"},"cannot be cast to com.facebook.react.ReactApplication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/1093"},"native android app Process crashes")))),(0,r.kt)("p",null,"However, native iOS apps are expected to work fine with Detox, and if that's your case, this introduction will help you in equal measure."))}d.isMDXComponent=!0;const m={},h="Environment Setup",f={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Environment Setup",description:"Welcome to Detox!",source:"@site/../docs/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/Detox/docs/next/introduction/getting-started",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/introduction/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Project Setup",permalink:"/Detox/docs/next/introduction/project-setup"}},b={},k=[{value:"React Native CLI Quickstart",id:"react-native-cli-quickstart",level:2},{value:"Detox Prerequisites",id:"detox-prerequisites",level:2},{value:"1. Command Line Tools (<code>detox-cli</code>)",id:"1-command-line-tools-detox-cli",level:3},{value:"2. MacOS Only <code>applesimutils</code>",id:"2-macos-only-applesimutils",level:3}],y={toc:k},v="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(v,(0,a.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Welcome to Detox!")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Introduction section")," walks you through setting up Detox in your project, one step at a time."),(0,r.kt)("p",null,"You will find that some steps are longer than the others: some are a couple of paragraphs, while the others look like a dedicated multistep guide.\nBear with us - it is all necessary, and once set up, it is easy to move forward with writing tests at a high pace."),(0,r.kt)("p",null,"Please select type of your mobile application before you start the tutorial:"),(0,r.kt)(o.Z,{groupId:"appType",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"start-rn",label:"React Native",default:!0,mdxType:"TabItem"}),(0,r.kt)(i.Z,{value:"start-expo",label:"Expo",mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"IntroExpo"})),(0,r.kt)(i.Z,{value:"start-other",label:"Other",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"IntroOther"}))),(0,r.kt)("h2",{id:"react-native-cli-quickstart"},"React Native CLI Quickstart"),(0,r.kt)("p",null,"Your first step would be to complete the\n",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/environment-setup"},"\ud83d\udcda React Native CLI Quickstart Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8354).Z,width:"1116",height:"405"})),(0,r.kt)("p",null,"Open the link above and switch there to ",(0,r.kt)("b",null,"React Native CLI Quickstart")," tab to see the interactive tutorial for ",(0,r.kt)("b",null,"Development OS")," and ",(0,r.kt)("b",null,"Target OS")," of your choice."),(0,r.kt)("p",null,"Follow all the steps ",(0,r.kt)("span",{style:{color:"red"}},"(yes, even if you have a native app!)")," and make sure you can create and run React Native apps on virtual testing devices."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8086).Z,width:"600",height:"780"})),(0,r.kt)("h2",{id:"detox-prerequisites"},"Detox Prerequisites"),(0,r.kt)("p",null,"To complete the environment setup, you still have 2 steps ahead: installing ",(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"applesimutils"),"."),(0,r.kt)("h3",{id:"1-command-line-tools-detox-cli"},"1. Command Line Tools (",(0,r.kt)("inlineCode",{parentName:"h3"},"detox-cli"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," is merely a script that passes commands through to\na local Detox executable located at ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/detox"),",\nmaking it easier to operate Detox from the command line, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test -c ios.sim.debug"),"."),(0,r.kt)("p",null,"It should be installed globally, enabling usage of the command line tools outside your npm scripts:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n")))),(0,r.kt)("p",null,"On the other hand, if you are fine with running Detox commands with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx detox ..."),", you may skip installing ",(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli"),"."),(0,r.kt)("h3",{id:"2-macos-only-applesimutils"},"2. ","[MacOS Only]"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"applesimutils")),(0,r.kt)("p",null,"This tool is ",(0,r.kt)("strong",{parentName:"p"},"required")," by Detox to work with iOS simulators. The recommended way to install\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/AppleSimulatorUtils"},(0,r.kt)("inlineCode",{parentName:"a"},"applesimutils"))," is via ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap wix/brew\nbrew install applesimutils\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to periodically update your version of ",(0,r.kt)("inlineCode",{parentName:"p"},"applesimutils")," to the latest version.")),(0,r.kt)("p",null,"Now, when your environment is ready, let's move to the next section, ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/project-setup"},"Project Setup"),"."))}g.isMDXComponent=!0},8086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rn-env-done-7e6ae38e1abc1558b2c280191a7425a8.png"},8354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rn-env-ff2580ce1cf001d1cad9dd3a507b97ab.png"}}]);