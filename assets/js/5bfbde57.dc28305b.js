"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(7462),a=n(7294),r=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=c(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:o}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),k=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),o=u[n].value;o!==i&&(p(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},a.createElement(b,(0,o.Z)({},e,t)),a.createElement(v,(0,o.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return a.createElement(y,(0,o.Z)({key:String(t)},e))}},30:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(4866),l=n(5162);const i={title:"Getting Started"},s=void 0,u={unversionedId:"introduction/getting-started",id:"version-19.x/introduction/getting-started",title:"Getting Started",description:"Getting Started",source:"@site/versioned_docs/version-19.x/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/Detox/docs/19.x/introduction/getting-started",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/introduction/getting-started.md",tags:[],version:"19.x",frontMatter:{title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Setting Up an iOS Development & Testing Environment",permalink:"/Detox/docs/19.x/introduction/ios-dev-env"}},d={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Environment Setup",id:"step-1-environment-setup",level:2},{value:"Install Node.js",id:"install-nodejs",level:3},{value:"Install Detox Command Line Tools (<code>detox-cli</code>)",id:"install-detox-command-line-tools-detox-cli",level:3},{value:"Install Platform-specific Dependencies, Tools and SDKs",id:"install-platform-specific-dependencies-tools-and-sdks",level:3},{value:"Step 2: Add Detox to Your Project",id:"step-2-add-detox-to-your-project",level:2},{value:"Install the Detox Node-module",id:"install-the-detox-node-module",level:3},{value:"Set Up a Test Runner",id:"set-up-a-test-runner",level:3},{value:"Apply Detox Configuration",id:"apply-detox-configuration",level:3},{value:"Step 3: Build Your App and Run Detox Tests",id:"step-3-build-your-app-and-run-detox-tests",level:2},{value:"1. Build Your App",id:"1-build-your-app",level:3},{value:"2. Run the Tests",id:"2-run-the-tests",level:3}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome to Detox!")),(0,a.kt)("p",null,"In this guide, we will walk you through setting Detox up in your project, one step at a time."),(0,a.kt)("p",null,"You will find that some steps are longer than the others: some are just one-paragraph long, while for others we have a dedicated multistep guide worked out. Bear with us - it is all necessary, and once set-up, it is easy to move forward with writing tests very rapidly."),(0,a.kt)("h2",{id:"step-1-environment-setup"},"Step 1: Environment Setup"),(0,a.kt)("h3",{id:"install-nodejs"},"Install ",(0,a.kt)("a",{parentName:"h3",href:"https://nodejs.org/en/"},"Node.js")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")," is the JavaScript runtime Detox will run on. ",(0,a.kt)("strong",{parentName:"p"},"Install Node.js ",(0,a.kt)("inlineCode",{parentName:"strong"},"v12.0")," or above"),"."),(0,a.kt)("p",null,"There\u2019s more than one way to install Node.js:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download from the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official download page")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"nvm")," - if you need to allow for several versions to be installed on a single machine")),(0,a.kt)("p",null,"The simplest way is to use Homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tip: Verify installation succeeded by typing in ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v")," in the terminal to output current node version.")),(0,a.kt)("h3",{id:"install-detox-command-line-tools-detox-cli"},"Install Detox Command Line Tools (",(0,a.kt)("inlineCode",{parentName:"h3"},"detox-cli"),")"),(0,a.kt)("p",null,"This package makes it easier to operate Detox from the command line. ",(0,a.kt)("inlineCode",{parentName:"p"},"detox-cli")," should be installed globally, enabling usage of the command line tools outside your npm scripts. ",(0,a.kt)("inlineCode",{parentName:"p"},"detox-cli")," is merely a script that passes commands through to a command line tool shipped inside ",(0,a.kt)("inlineCode",{parentName:"p"},"detox")," package (in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/detox"),")."),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n")))),(0,a.kt)("h3",{id:"install-platform-specific-dependencies-tools-and-sdks"},"Install Platform-specific Dependencies, Tools and SDKs"),(0,a.kt)("p",null,"Depending on the platform/s you\u2019re aiming at (iOS, Android), take the time to run through these environment setup guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/introduction/android-dev-env"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/introduction/ios-dev-env"},"iOS"))),(0,a.kt)("h2",{id:"step-2-add-detox-to-your-project"},"Step 2: Add Detox to Your Project"),(0,a.kt)("h3",{id:"install-the-detox-node-module"},"Install the Detox Node-module"),(0,a.kt)("p",null,"If you have a React Native project, go to its root folder (where ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is found) and type the following command:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev\n")))),(0,a.kt)("p",null,"If you have a project without Node integration (such as a native project), add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file to the root folder of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "<your_project_name>",\n  "version": "0.0.1"\n}\n')),(0,a.kt)("p",null,"Name your project in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and then run the following command:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev --no-package-lock\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev --no-lockfile\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You should now have Detox available in ",(0,a.kt)("inlineCode",{parentName:"strong"},"node_modules/detox"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," Remember to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to your git ignore file (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),").")),(0,a.kt)("h3",{id:"set-up-a-test-runner"},"Set Up a Test Runner"),(0,a.kt)("p",null,"Detox delegates the actual JavaScript test-code execution to a dedicated test-runner. It supports the popular ",(0,a.kt)("inlineCode",{parentName:"p"},"Jest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocha")," out of the box. You need to choose and set up one of them now, but it ",(0,a.kt)("em",{parentName:"p"},"is")," possible to switch later on, should you change your mind."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"Jest")," is the recommended test runner for use with Detox"),", since it provides parallel test execution and a complete lifecycle integration with Detox. To set up, follow ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/guide/jest"},"our comprehensive guide for Jest"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mochajs.org/"},"Mocha"),", albeit its integration is less complete, is still lightweight, and a bit easier to set up. To set up, follow ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/guide/mocha"},"our guide for Mocha"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Detox is coupled to neither Mocha or Jest, nor with a specific directory structure. Both runners are just a recommendation \u2014 with some effort, they can be replaced without touching the internal implementation of Detox itself.")),(0,a.kt)("h3",{id:"apply-detox-configuration"},"Apply Detox Configuration"),(0,a.kt)("p",null,"If you\u2019ve completed the test-runner setup successfully using ",(0,a.kt)("inlineCode",{parentName:"p"},"detox init"),", you should have a ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc.json")," file containing a skeletal configuration for Detox to use. This configuration is only half-baked and needs to be set up properly. You now need to either create or edit that file, and apply the actual configuration suitable for your specific project."),(0,a.kt)("p",null,"Detox scans for a configuration through multiple files. It starts from the current working directory, and runs over the following options, in this order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc.js")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc.json")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"detox.config.js")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"detox.config.json")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," (",(0,a.kt)("inlineCode",{parentName:"li"},'"detox"')," section)")),(0,a.kt)("p",null,"If you prefer to use something other than ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc.json"),"\u2014for example, would like to keep all project configs in one place\u2014you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"detox")," section in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". If you otherwise prefer separating configs, all of the other options are valid."),(0,a.kt)("p",null,"For specific configuration options for each supported platform, see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/introduction/android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/introduction/ios"},"iOS"))),(0,a.kt)("h2",{id:"step-3-build-your-app-and-run-detox-tests"},"Step 3: Build Your App and Run Detox Tests"),(0,a.kt)("h3",{id:"1-build-your-app"},"1. Build Your App"),(0,a.kt)("p",null,"Use a convenience method in Detox command line tools to build your project easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration <your configuration name>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Detox executes the build command you specified in your Detox configuration. If your build fails, make sure to provide the correct build command.")),(0,a.kt)("h3",{id:"2-run-the-tests"},"2. Run the Tests"),(0,a.kt)("p",null,"Use the Detox command line tools to test your project easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --configuration <your configuration name>\n")),(0,a.kt)("p",null,"That\u2019s it. Your first failing Detox test is running!"),(0,a.kt)("p",null,"Next, we\u2019ll go over usage and how to make this test ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/writing-first-test"},"actually pass"),"."))}h.isMDXComponent=!0}}]);