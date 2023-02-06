"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=o,m=s["".concat(p,".").concat(g)]||s[g]||c[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="ProGuard configuration",l={unversionedId:"guide/proguard-configuration",id:"guide/proguard-configuration",title:"ProGuard configuration",description:"You can skip this guide if you are working solely with debug builds (android.emu.debug, etc.),",source:"@site/../docs/guide/proguard-configuration.md",sourceDirName:"guide",slug:"/guide/proguard-configuration",permalink:"/Detox/docs/next/guide/proguard-configuration",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/proguard-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up an Android Development & Testing Environment",permalink:"/Detox/docs/next/guide/android-dev-env"},next:{title:"Uninstalling Detox",permalink:"/Detox/docs/next/guide/uninstalling"}},p={},d=[{value:"Obfuscation",id:"obfuscation",level:2}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proguard-configuration"},"ProGuard configuration"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can skip this guide if you are working solely with debug builds (",(0,o.kt)("inlineCode",{parentName:"p"},"android.emu.debug"),", etc.),\nbut as soon as you move to the ",(0,o.kt)("strong",{parentName:"p"},"release builds"),", where the native code gets minified and obfuscated,\nyou are going to have problems with Detox if you leave your ProGuard rules not configured.")),(0,o.kt)("p",null,"Since Detox relies on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/java/lang/reflect/package-summary"},"Android Reflection API")," to integrate with React Native on Android, you should keep ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/shrink-code"},"ProGuard minification")," under tight control.\nOtherwise, you\u2019ll be seeing Detox crashing or hanging up infinitely upon an attempt to run tests with your app built in ",(0,o.kt)("strong",{parentName:"p"},"release mode"),"."),(0,o.kt)("p",null,"To fix that, you\u2019d need to return to your app build script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/build.gradle"',title:'"app/build.gradle"'},'     buildTypes {\n     \u2026\n// highlight-next-line\n         release { /* (1) */\n             minifyEnabled true\n\n// highlight-next-line\n   /* (2) */ proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n// highlight-next-line\n+  /* (3) */ proguardFile "${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro"\n         }\n     }\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"release")," build type is typically the one to have ProGuard enabled."),(0,o.kt)("li",{parentName:"ol"},"ProGuard files present by default in React Native projects. Check out ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/build/shrink-code"},"Android docs")," to get to know more."),(0,o.kt)("li",{parentName:"ol"},"Detox-specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/blob/master/detox/android/detox/proguard-rules.pro"},"exclude list")," for ProGuard.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In order for Detox to be able to work properly, in ",(0,o.kt)("inlineCode",{parentName:"p"},"proguard-rules-app.pro"),", it effectively declares rules that retain most of React-Native\u2019s code (i.e. keep it unminified, unobfuscated) in your ",(0,o.kt)("strong",{parentName:"p"},"production")," APK.")),(0,o.kt)("h2",{id:"obfuscation"},"Obfuscation"),(0,o.kt)("p",null,"Exempting source files from the obfuscation means that their contents might be restored by unauthorized people,\nbut this should not be an issue for you, because React Native is an open-source project per se."),(0,o.kt)("p",null,"If it nevertheless bothers you, there are workarounds such as defining multiple build flavors: one for running\nend-to-end tests with Detox, and the other one for publishing to the marketplaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="app/build.gradle"',title:'"app/build.gradle"'},"    buildTypes {\n        release {\n            minifyEnabled true\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n\n            signingConfig signingConfigs.release\n        }\n// highlight-start\n        releaseE2E {\n            initWith release\n            setMatchingFallbacks('release')\n\n            proguardFile \"${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro\"\n        }\n    }\n// highlight-end\n")),(0,o.kt)("p",null,"As can be seen above, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setMatchingFallbacks")," to extend the new ",(0,o.kt)("inlineCode",{parentName:"p"},"releaseE2E")," build type from\nthe existing one, and then we add an override to it, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"proguardFile"),"."),(0,o.kt)("p",null,"Following the example, you would then have to adjust your ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"binaryPath")," properties accordingly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"{\n  apps: {\n     'android.release': {\n       type: 'android.apk',\n-      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',\n+      binaryPath: 'android/app/build/outputs/apk/releaseE2E/app-releaseE2E.apk',\n-      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'\n+      build: 'cd android && ./gradlew assembleReleaseE2E assembleAndroidTest -DtestBuildType=release'\n     },`\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your app already contains flavors \u2013 that makes things a bit trickier, but the approach can generally be adjusted to support that as well.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Last but not least:")," If you\u2019re having issue with Detox' ProGuard rules, please report them ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/new/choose"},"here"),"."),(0,o.kt)("p",null,"A special thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GEllickson-Hover"},"@GEllickson-Hover")," for reporting issues related to obfuscation in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/2431"},"#2431"),"."))}c.isMDXComponent=!0}}]);