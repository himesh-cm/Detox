"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),i=r(6010),o=r(2466),s=r(6550),l=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=h({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var v=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},6180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(4866),o=r(5162);const s={},l="Third-Party Drivers",c={unversionedId:"articles/third-party-drivers",id:"version-20.x/articles/third-party-drivers",title:"Third-Party Drivers",description:"Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.",source:"@site/versioned_docs/version-20.x/articles/third-party-drivers.md",sourceDirName:"articles",slug:"/articles/third-party-drivers",permalink:"/Detox/docs/articles/third-party-drivers",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/articles/third-party-drivers.md",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"How Detox Works",permalink:"/Detox/docs/articles/how-detox-works"}},u={},p=[{value:"How to Use a Third-party Driver",id:"how-to-use-a-third-party-driver",level:2},{value:"Writing a New Third-party Driver",id:"writing-a-new-third-party-driver",level:2},{value:"Anatomy of the Drivers",id:"anatomy-of-the-drivers",level:3},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Existing Third-party Drivers",id:"existing-third-party-drivers",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-drivers"},"Third-Party Drivers"),(0,a.kt)("p",null,'Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.\nFor example, the following configuration uses the "ios.simulator" driver.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ios.sim": {\n    "type": "ios.simulator",\n    "device": "...",\n    "app": {\n      "type": "ios.app",\n      "binaryPath": "bin/YourApp.app"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"While Detox technically supports Android devices and iOS simulators out of the box, devices running other platforms such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"Web")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-windows"},"Windows")," can be targeted."),(0,a.kt)("p",null,"If your app targets a third-party platform, you may switch to use a ",(0,a.kt)("a",{parentName:"p",href:"#how-to-use-a-third-party-driver"},"third-party driver")," to run your tests on said platform. If one doesn\u2019t already exist, you can ",(0,a.kt)("a",{parentName:"p",href:"#Writing-a-new-third-party-driver"},"write your own"),"."),(0,a.kt)("h2",{id:"how-to-use-a-third-party-driver"},"How to Use a Third-party Driver"),(0,a.kt)("p",null,"Check to see if a ",(0,a.kt)("a",{parentName:"p",href:"#existing-third-party-drivers"},"third-party driver")," already exists for the platform you wish to target. Mostly likely, the driver will have setup instructions."),(0,a.kt)("p",null,"Overall the setup for any third party driver is fairly simple."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the driver to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev detox-driver-package\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev detox-driver-package\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new Detox configuration to your existing configurations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," set to driver\u2019s package name."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+  "thirdparty.driver.config": {\n+    "type": "detox-driver-package",\n+    "app": {\n+      "binaryPath": "bin/YourApp.app",\n+    }\n+  }\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Detox while specifying the name of your new configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration thirdparty.driver.config\n")))),(0,a.kt)("h2",{id:"writing-a-new-third-party-driver"},"Writing a New Third-party Driver"),(0,a.kt)("h3",{id:"anatomy-of-the-drivers"},"Anatomy of the Drivers"),(0,a.kt)("p",null,"The architecture of a driver is split into a few different pieces; Understanding the ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/articles/how-detox-works#Architecture"},"overall architecture of Detox")," will help with this section."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Components running in the context of the test logic execution on the Node.js process on the host computer:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Device Drivers layer:")," The layer contains a collection of drivers, implementing - mostly, though not exclusively, the platform-specific details for the Detox ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/api/device"},(0,a.kt)("inlineCode",{parentName:"a"},"device")," object")," that is exposed in the Detox tests.\nThe implementation is responsible for managing devices your tests will run on, in terms of device allocation, app installation user interactions (e.g. taps) execution and so on."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Matchers:")," code powering the ",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"element"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"waitFor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"by")," globals in your tests.\nIn essence, it translates and sends test-logic commands (such as taps and assertions) over the network to the device on which your tests are running. In turn, the device natively performs these commands.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The component running on the device being tested, injected into the test app:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Native Client:")," The driver client communicates with the server over\nwebsocket where it receives information from the serialized matchers, and expectations, and also sends responses\nback of whether each step of your test succeeds or fails. Typically, a device client will use an underlying library specific\nto the platform at hand to implement the expectations.")),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"In order to introduce a third-party Driver, there is a set of core classes you must implement - each responsible for a different Detox concern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allocation: The process of launching / selecting a device over which the tests would run."),(0,a.kt)("li",{parentName:"ul"},"Pre-validation: The checkup of the execution-environment (e.g. verifying the Android SDK is installed)."),(0,a.kt)("li",{parentName:"ul"},"Artifact handlers registration: The process where platform-based artifacts generation handlers are registered (e.g. handlers for taking screenshots, which are different between the Android and iOS platforms)."),(0,a.kt)("li",{parentName:"ul"},"Runtime: The ",(0,a.kt)("em",{parentName:"li"},"de facto")," execution of test logic."),(0,a.kt)("li",{parentName:"ul"},"Matchers: The matching of visible elements and visibility assertion.")),(0,a.kt)("p",null,"To understand the exact contract of these classes, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/examples/demo-plugin/driver.js"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/demo-plugin/driver.js"))," for a dummy implementation, or to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer")," for an actual implementation of such as driver."),(0,a.kt)("p",null,"Very roughly speaking, this is the expected skeletal implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const DeviceDriverBase = require('detox/src/devices/runtime/drivers/DeviceDriverBase');\n\nclass Cookie {\n  constructor(id) {\n    this.id = id; // hold any info necessary in order to identify the associated device\n  }\n}\n\nclass MyNewAllocationDriver {\n  constructor(deps) {\n    this.emitter = deps.eventEmitter;\n  }\n\n  async allocate(deviceConfig) {\n    // ...\n    return new Cookie(id); // This is where a cookie is formed once for the entire process\n  }\n\n  async free(cookie, options) {\n    // ...\n  }\n}\n\nclass MyNewEnvValidator {\n  validate() {\n    // ...\n  }\n}\n\nclass MyNewArtifactsProvider {\n  declareArtifactPlugins() {\n    // ...\n  }\n}\n\nclass MyNewRuntimeDriver extends DeviceDriverBase {\n  constructor(deps, cookie) {\n    // ...\n  }\n\n  // ...\n}\n\nclass MyExpect {\n  // ...\n}\n\n\nmodule.exports = MyNewDriver;\n")),(0,a.kt)("h2",{id:"existing-third-party-drivers"},"Existing Third-party Drivers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer"))))}h.isMDXComponent=!0}}]);