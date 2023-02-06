"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(f,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},7724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={id:"contributing",slug:"contributing",title:"Contributing",sidebar_label:"Contributing"},s=void 0,u={unversionedId:"contributing",id:"version-19.x/contributing",title:"Contributing",description:"Contributing",source:"@site/versioned_docs/version-19.x/Guide.Contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/Detox/docs/19.x/contributing",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Contributing.md",tags:[],version:"19.x",frontMatter:{id:"contributing",slug:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"tutorialSidebar",previous:{title:"Uninstalling Detox",permalink:"/Detox/docs/19.x/guide/uninstalling"}},d={},p=[{value:"Contributing",id:"contributing",level:2},{value:"Environment",id:"environment",level:3},{value:"Install Homebrew",id:"install-homebrew",level:4},{value:"Install Node.js v12.x or newer",id:"install-nodejs-v12x-or-newer",level:4},{value:"Install <code>npm</code>",id:"install-npm",level:4},{value:"Install the monorepo management tool, <code>lerna</code>",id:"install-the-monorepo-management-tool-lerna",level:4},{value:"Install common React Native dependencies",id:"install-common-react-native-dependencies",level:4},{value:"iOS",id:"ios",level:4},{value:"Android",id:"android",level:4},{value:"Detox",id:"detox",level:3},{value:"Clone Detox and Submodules",id:"clone-detox-and-submodules",level:4},{value:"Installing and Linking Internal Projects",id:"installing-and-linking-internal-projects",level:4},{value:"Building and Testing",id:"building-and-testing",level:4},{value:"Automatically",id:"automatically",level:5},{value:"Manually",id:"manually",level:5},{value:"0. (React Native \u2264 0.55.x) Fixing Compilation Issues in RN Sources",id:"0-react-native--055x-fixing-compilation-issues-in-rn-sources",level:6},{value:"1. Unit Tests and Lint",id:"1-unit-tests-and-lint",level:6},{value:"2. Running Detox E2E Coverage Tests",id:"2-running-detox-e2e-coverage-tests",level:6},{value:"3. Android Native Unit-Tests",id:"3-android-native-unit-tests",level:6},{value:"Detox - Example Projects",id:"detox---example-projects",level:3},{value:"Detox Documentation Website",id:"detox-documentation-website",level:3},{value:"Updating the Website",id:"updating-the-website",level:4},{value:"Website Deployment",id:"website-deployment",level:5},{value:"Update Old Versions",id:"update-old-versions",level:5}],c={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"This guide is about contributing to our codebase."),(0,r.kt)("p",null,"We don\u2019t have any special guidelines - just some setup walk-through!"),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("h4",{id:"install-homebrew"},"Install Homebrew"),(0,r.kt)("p",null,"If you haven\u2019t yet - install ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,r.kt)("inlineCode",{parentName:"a"},"brew")),"."),(0,r.kt)("h4",{id:"install-nodejs-v12x-or-newer"},"Install Node.js v12.x or newer"),(0,r.kt)("p",null,"There\u2019s more than one way to install Node.js:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download from the ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official download page")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm")," - if you need to allow for several versions to be installed on a single machine")),(0,r.kt)("p",null,"The best way is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"nvm"),", but the simplest way is to use Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n")),(0,r.kt)("h4",{id:"install-npm"},"Install ",(0,r.kt)("inlineCode",{parentName:"h4"},"npm")),(0,r.kt)("p",null,"Either install ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or check that you have it installed, using their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"official guide"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE: For Detox, please use the latest ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," version ",(0,r.kt)("inlineCode",{parentName:"strong"},"6.x.x")," (i.e not version 7.0.0 or newer)."))),(0,r.kt)("h4",{id:"install-the-monorepo-management-tool-lerna"},"Install the monorepo management tool, ",(0,r.kt)("inlineCode",{parentName:"h4"},"lerna")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install lerna@3.x.x --global\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add lerna@3.x.x\n")))),(0,r.kt)("p",null,"For all the internal projects (detox, detox-cli, demos, test) ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," will create symbolic links in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," copying the content of the projects. This way, any change you do on any code is there immediately. There is no need to update node modules or copy files between projects."),(0,r.kt)("h4",{id:"install-common-react-native-dependencies"},"Install common React Native dependencies"),(0,r.kt)("p",null,"React-Native CLI:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-cli --global\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add react-native-cli\n")))),(0,r.kt)("p",null,"Watchman:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install watchman\n")),(0,r.kt)("h4",{id:"ios"},"iOS"),(0,r.kt)("p",null,"For iOS, you must install Xcode and related tools. Refer to our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/ios-dev-env"},"Setting Up an iOS Environment")," guide."),(0,r.kt)("p",null,"You must also have ",(0,r.kt)("inlineCode",{parentName:"p"},"xcpretty")," installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gem install xcpretty\n")),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("p",null,"For Android, you need to have Java and the Android SDK properly set up. Refer to our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/android-dev-env"},"Setting Up an Android Development & Testing Environment")," guide."),(0,r.kt)("h3",{id:"detox"},"Detox"),(0,r.kt)("h4",{id:"clone-detox-and-submodules"},"Clone Detox and Submodules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wix/detox.git\ncd detox\ngit submodule update --init --recursive\n")),(0,r.kt)("p",null,"(this makes sure all git submodule dependencies have been properly checked out)"),(0,r.kt)("h4",{id:"installing-and-linking-internal-projects"},"Installing and Linking Internal Projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lerna bootstrap\n")),(0,r.kt)("h4",{id:"building-and-testing"},"Building and Testing"),(0,r.kt)("h5",{id:"automatically"},"Automatically"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.ios.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.android.sh")," are the scripts Detox runs in CI, they will run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap"),", unit tests, and E2E tests. Make sure these scripts pass before submitting a PR, this is exactly what Detox is going to run in CI."),(0,r.kt)("h5",{id:"manually"},"Manually"),(0,r.kt)("p",null,"The following steps can be run manually in order to build / test the various components of Detox."),(0,r.kt)("h6",{id:"0-react-native--055x-fixing-compilation-issues-in-rn-sources"},"0. (React Native \u2264 0.55.x) Fixing Compilation Issues in RN Sources"),(0,r.kt)("p",null,"Detox Android test project uses React Native sources instead of the precompiled AAR. The test project uses React Native 0.51 and 0.53, both have issues with compilation (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/commit/d8bb990abc226e778e2f32c2de3c6661c0aa64e5#diff-f44163238d434a443b56bd27b3ba0578"},"fixed in 0.55"),"). In order to fix this issue, from inside ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/test")," run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv node_modules/react-native/ReactAndroid/release.gradle node_modules/react-native/ReactAndroid/release.gradle.bak\n")),(0,r.kt)("h6",{id:"1-unit-tests-and-lint"},"1. Unit Tests and Lint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lerna run test\n")),(0,r.kt)("p",null,"Detox JS code is 100% test covered and is set to break the build if coverage gets below, so make sure you run unit tests (",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run test"),") locally before pushing."),(0,r.kt)("p",null,"Alternatively, to run only the JS tests, run the following from the ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/detox")," directory:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run unit\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn unit\n")))),(0,r.kt)("p",null,"or"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run unit:watch\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn unit:watch\n")))),(0,r.kt)("p",null,"After running the tests, ",(0,r.kt)("em",{parentName:"p"},"Jest")," will create a coverage report you can examine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd detox\nopen coverage/lcov-report/index.html\n")),(0,r.kt)("h6",{id:"2-running-detox-e2e-coverage-tests"},"2. Running Detox E2E Coverage Tests"),(0,r.kt)("p",null,'Detox has a suite of end-to-end tests to test its own API while developing (and for regression); We maintain a special application that is "tested" against Detox\u2019s API, but essentially, it\u2019s the API that is tested, not the app.'),(0,r.kt)("p",null,"To run the tests, you must first build the native code and then run based on your target of choice (Android / iOS):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iOS:")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nnpm run build:ios\nnpm run e2e:ios\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nyarn build:ios\nyarn e2e:ios\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Android:")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nnpm run build:android\nnpm run e2e:android\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nyarn build:android\nyarn e2e:android\n")))))),(0,r.kt)("p",null,"FYI Android test project includes two flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromBin")," - (",(0,r.kt)("strong",{parentName:"li"},"standard use case"),") utilizes the precompiled ",(0,r.kt)("inlineCode",{parentName:"li"},".aar")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," just like a standard RN project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromSource")," - compiles the project with RN sources from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", this is useful when developing and debugging Espresso idle resource.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/wiki/Building-from-source#android"},"Here")," are the prerequisites to compiling React Native from source.")),(0,r.kt)("p",null,"Each build can be triggered separately by running its Gradle assembling task (under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/test/android/"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew assembleFromSourceDebug\n-or-\n./gradlew assembleFromBinDebug\n")),(0,r.kt)("p",null,"To run from Android Studio, React Native\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"react.gradle")," script may require ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," to be in path.\nOn MacOS, environment variables can be exported to desktop applications by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"launchctl setenv PATH $PATH\n")),(0,r.kt)("h6",{id:"3-android-native-unit-tests"},"3. Android Native Unit-Tests"),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/android"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew testFullRelease\n")),(0,r.kt)("h3",{id:"detox---example-projects"},"Detox - Example Projects"),(0,r.kt)("p",null,"This is in fact a monorepo that also sports some example projects (for usage reference), alongside the main test project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-react-native")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-react-native-jest"),": Demonstrate usage of Detox in React-Native app projects, with ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha.js")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Jest")," as the hosting test-runner frameworks, respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-ios"),": Demonstrates usage of Detox in a pure-native iOS app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-android")," (broken): Demonstrates usage of Detox in a pure-native Android app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-pure-native-android"),": Demonstrates usage of the ",(0,r.kt)("em",{parentName:"li"},"pure")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/detox-native/README.md"},"Detox-Native")," project"),(0,r.kt)("li",{parentName:"ul"},"more...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In order to run E2E tests associated with any of these projects, refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/examples"},"project-specific")," READMEs.")),(0,r.kt)("h3",{id:"detox-documentation-website"},"Detox Documentation Website"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://wix.github.io/Detox"},"documentation website")," is built using ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"."),(0,r.kt)("p",null,"To run the website locally, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd website\nnpm install\nnpm start\n")),(0,r.kt)("h4",{id:"updating-the-website"},"Updating the Website"),(0,r.kt)("p",null,"To update a specific page, edit the corresponding markdown file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/"),". To add a new page, create a new markdown file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/")," and add a link to it in ",(0,r.kt)("inlineCode",{parentName:"p"},"website/sidebars.json"),"."),(0,r.kt)("h5",{id:"website-deployment"},"Website Deployment"),(0,r.kt)("p",null,"While changes to the website are published automatically on every commit to ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," version, tagging and locking docs to a specific version is done automatically on every Detox release."),(0,r.kt)("p",null,"In case you want to update the docs for a specific version, you can change the related files and code under ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-<version>/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_sidebars/version-<version>-sidebars.json"),"."),(0,r.kt)("h5",{id:"update-old-versions"},"Update Old Versions"),(0,r.kt)("p",null,"To update a specific version with the latest changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the version from ",(0,r.kt)("inlineCode",{parentName:"li"},"versions.json"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run docusaurus docs:version <version>"),".")))}k.isMDXComponent=!0}}]);