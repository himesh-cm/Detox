"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="detox test",l={unversionedId:"cli/test",id:"cli/test",title:"detox test",description:"For the most part, detox test is a convenience method which converts CLI arguments to environment variables and",source:"@site/../docs/cli/test.md",sourceDirName:"cli",slug:"/cli/test",permalink:"/Detox/docs/next/cli/test",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/cli/test.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"detox build",permalink:"/Detox/docs/next/cli/build"},next:{title:"detox recorder",permalink:"/Detox/docs/next/cli/recorder"}},s={},d=[{value:"Options",id:"options",level:2},{value:"<code>DETOX_ARGV_OVERRIDE</code>",id:"detox_argv_override",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detox-test"},"detox test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"detox test [options] <...testFilePaths>\n")),(0,r.kt)("p",null,"For the most part, ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test")," is a convenience method which converts CLI arguments to environment variables and\nruns a third-party test runner one or multiple times (if ",(0,r.kt)("inlineCode",{parentName:"p"},"--retries")," configured). All unknown flags are just\nforwarded as-is to the test runner underneath, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"detox test -c ios.debug --showConfig\n")),(0,r.kt)("p",null,"gets translated to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"DETOX_CONFIGURATION=ios.debug jest --showConfig\n")),(0,r.kt)("p",null,"You can freely take the CLI command it prints and run it independently, without the help of Detox CLI."),(0,r.kt)("p",null,"If there is a name conflict for some option (both the test runner and ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test")," have a CLI argument with the same\nname), you can pass it explicitly after the reserved ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," sequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"detox test -c ios.debug -- --help\n\u2193\nDETOX_CONFIGURATION=ios.debug jest --help\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,r.kt)("inlineCode",{parentName:"td"},"<configPath>")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,r.kt)("inlineCode",{parentName:"td"},"<device config>")),(0,r.kt)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-n, --device-name ","[","name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Override the device name specified in a configuration. Useful for running a single build configuration on multiple devices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-l, --loglevel ","[","value]"),(0,r.kt)("td",{parentName:"tr",align:null},"Log level: fatal, error, warn, info, verbose, trace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --debug-synchronization ",(0,r.kt)("inlineCode",{parentName:"td"},"<value>")),(0,r.kt)("td",{parentName:"tr",align:null},"Customize how long an action/expectation can take to complete before Detox starts querying the app why it is busy. By default, the app status will be printed if the action takes more than 10s to complete.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a, --artifacts-location ",(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:null},"Artifacts (logs, screenshots, etc) root directory.",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-logs ","[","failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save logs during each test to artifacts directory. Pass "failing" to save logs of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--take-screenshots ","[","manual/failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save screenshots before and after each test to artifacts directory. Pass "failing" to save screenshots of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"manual"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-videos ","[","failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save screen recordings of each test to artifacts directory. Pass "failing" to save recordings of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-performance ","[","all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Save Detox Instruments performance recordings of each test to artifacts directory. The default value is ",(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--capture-view-hierarchy ","[","enabled/disabled]"),(0,r.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Capture ",(0,r.kt)("inlineCode",{parentName:"td"},"*.uihierarchy")," snapshots on view action errors and ",(0,r.kt)("inlineCode",{parentName:"td"},"device.captureViewHierarchy()")," calls. The default value is ",(0,r.kt)("strong",{parentName:"td"},"disabled"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-R, --retries"),(0,r.kt)("td",{parentName:"tr",align:null},"Re-spawn the test runner for individual failing suite files until they pass, or ",(0,r.kt)("inlineCode",{parentName:"td"},"<N>")," times at most.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-r, --reuse"),(0,r.kt)("td",{parentName:"tr",align:null},"Reuse existing installed app (do not delete + reinstall) for a faster run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u, --cleanup"),(0,r.kt)("td",{parentName:"tr",align:null},"Shutdown simulator when test is over, useful for CI scripts, to make sure detox exists cleanly with no residue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--jest-report-specs"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Jest Only] Whether to output logs per each running spec, in real-time. By default, disabled with multiple workers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-H, --headless"),(0,r.kt)("td",{parentName:"tr",align:null},"Launch device in headless mode. Useful when running on CI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--device-boot-args"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of passthrough-arguments to use when (if) devices (Android emulator / iOS simulator) are launched by Detox.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: the value must be specified after an equal sign (",(0,r.kt)("inlineCode",{parentName:"strong"},"="),") and inside quotes.")," Usage example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'--device-boot-args="-http-proxy http://1.1.1.1:8000 -no-snapshot-load"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--app-launch-args"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom arguments to pass (through) onto the app every time it is launched. The same ",(0,r.kt)("strong",{parentName:"td"},"note")," applies here, as for ",(0,r.kt)("strong",{parentName:"td"},"--device-boot-args"),".",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/Detox/docs/next/guide/launch-args"},"launch arguments guide")," for complete info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--no-color"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable colors in log output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--use-custom-logger"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Detox' custom console-logging implementation, for logging Detox (non-device) logs. Disabling will fallback to node.js / test runner\u2019s implementation (e.g. Jest).",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--gpu"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Android Only] Launch Emulator with the specific -gpu ","[","gpu mode] parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--force-adb-install"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Android Only] Due to problems with the ",(0,r.kt)("inlineCode",{parentName:"td"},"adb install")," command on Android, Detox resorts to a different scheme for installing APKs. Setting true will disable that and force usage of ",(0,r.kt)("inlineCode",{parentName:"td"},"adb install"),", instead.",(0,r.kt)("br",null),"This flag is temporary until the Detox way proves stable.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--inspect-brk"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#enable-inspector"},"node\u2019s --inspect-brk")," flag to let users debug the test runner ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h2",{id:"detox_argv_override"},(0,r.kt)("inlineCode",{parentName:"h2"},"DETOX_ARGV_OVERRIDE")),(0,r.kt)("p",null,"If you happen to be troubleshooting Detox tests inside a complex script, or a failing CI build\n(e.g., on TeamCity or Jenkins), there is an escape-hatch feature for running Detox with\nsome extra CLI args just by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," environment variable before\nrerunning it again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"> export DETOX_ARGV_OVERRIDE=\"--forceExit -w 1 --testNamePattern='that hanging test' e2e/sanity/login.test.js\"\n> bash scripts/ci.e2e.sh\n  # ... some output ...\n  > detox test -c ios.sim.release -l verbose --maxWorkers 3\n    # ...\n    configuration=ios.sim.release ... jest --maxWorkers 1 --forceExit --testNamePattern='that hanging test' e2e/sanity/login.test.js\n")),(0,r.kt)("p",null,"Consider the example above, where ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," forces Detox to run Jest in a single worker\nmode with a forceful exit (after 1 second) only for a selected test in a specific file."),(0,r.kt)("p",null,"As you might see, the idea of ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," is quite similar to ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},"NODE","_","OPTIONS"),"\nexcept for the fact you use it not for regular flows, but for forced ad-hoc patching of a failing Detox configuration to\nsave your time."),(0,r.kt)("p",null,"Please avoid using it in your regular flows \u2013 instead, use Detox configuration files (",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc.js"),")\nas your primary choice."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"--artifacts-location")," path does not end with a slash (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),") or a backslash, then detox CLI will append to the\npath a subdirectory with configuration name and timestamp (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"artifacts/android.emu.release.2018-06-12 05:52:43Z"),").\nIn other words, the path with a slash at the end assumes you do not want a subdirectory inside.\nFor more details, please check the ",(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/next/config/artifacts#artifacts"},"Enabling artifacts"),".\nThe default value is ",(0,r.kt)("strong",{parentName:"li"},"artifacts")," (plus a subdirectory).",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);