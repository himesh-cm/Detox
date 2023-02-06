"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,u=m["".concat(s,".").concat(c)]||m[c]||g[c]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Logger",l={unversionedId:"api/logger",id:"api/logger",title:"Logger",description:"Detox Logger API allows you to save your custom messages and events alongside the built-in ones.",source:"@site/../docs/api/logger.mdx",sourceDirName:"api",slug:"/api/logger",permalink:"/Detox/docs/next/api/logger",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/api/logger.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Web views",permalink:"/Detox/docs/next/api/webviews"},next:{title:"Internals API",permalink:"/Detox/docs/next/api/internals"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>log.level</code> [enum]",id:"loglevel-enum",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>log.*([event,] ...msg)</code>",id:"logevent-msg",level:3},{value:"<code>log.*.begin([event,] msg)</code>",id:"logbeginevent-msg",level:3},{value:"<code>log.*.end([event, msg])</code>",id:"logendevent-msg",level:3},{value:"<code>log.*.complete([event,] msg, functionOrPromise)</code>",id:"logcompleteevent-msg-functionorpromise",level:3},{value:"Event metadata",id:"event-metadata",level:2},{value:"<code>id</code> [string | number]",id:"id-string--number",level:3},{value:"<code>cat</code> [string | string[]]",id:"cat-string--string",level:3},{value:"<code>cname</code> [string]",id:"cname-string",level:3},{value:"<code>*</code> [string | number | boolean]",id:"-string--number--boolean",level:3},{value:"Artifacts",id:"artifacts",level:2},{value:"<code>detox.log</code>",id:"detoxlog",level:3},{value:"<code>detox.trace.json</code>",id:"detoxtracejson",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logger"},"Logger"),(0,o.kt)("p",null,"Detox Logger API allows you to save your custom messages and events alongside the built-in ones.\nIn addition to being formatted and printed to the console, they can be preserved as log artifacts if you enable them via ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/test"},(0,o.kt)("inlineCode",{parentName:"a"},"--record-logs"))," CLI option or ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/artifacts#example"},(0,o.kt)("inlineCode",{parentName:"a"},"artifacts.plugins.log.enabled"))," in the config:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<artifacts-location>/detox.log")," \u2013 plain text log;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<artifacts-location>/detox.trace.json")," \u2013 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview"},"Trace Event format")," file, viewable via ",(0,o.kt)("a",{parentName:"li",href:"https://ui.perfetto.dev"},"Perfetto")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://tracing"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1894).Z,width:"1176",height:"218"})),(0,o.kt)("p",null,"Below we\u2019ll be listing all the public properties and methods of the logger."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"loglevel-enum"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.level")," ","[","enum]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read-only.")," Returns the current ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/logger#loggerlevel-enum"},"log level"),", one of values:\n",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),"."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"logevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*([event,] ...msg)")),(0,o.kt)("p",null,"Logs an instant message with an optional ",(0,o.kt)("a",{parentName:"p",href:"#event-metadata"},"event metadata"),".\nThere are six methods for producing log messages varying by log level:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.fatal([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.error([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.warn([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.info([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.debug([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.trace([event,] ...msg)"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { log } = require('detox');\n\nlog.info('Some message');\n// detox[2020] i Some message\n\nlog.error({ err: new Error('Test') }, 'An error message');\n// detox[2020] i An error message\n//   err: Test\n")),(0,o.kt)("h3",{id:"logbeginevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.begin([event,] msg)")),(0,o.kt)("p",null,"Logs a beginning of a ",(0,o.kt)("em",{parentName:"p"},"duration event")," with an optional ",(0,o.kt)("a",{parentName:"p",href:"#event-metadata"},"event metadata"),".\nDuration events are displayed as continuous colorful segments on the timeline and can be stacked if you\ncall the method multiple times, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info.begin({ data: { email } }, 'Login Flow');\n// detox[2020] B Login Flow\n//   data: { email: 'tester@example.com' }\nlog.info.begin('Nested sub-flow');\n// detox[2020] B Nested sub-flow\n")),(0,o.kt)("p",null,"Make sure you always end your events so that they don't get marked as unfinished, like shown on the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5653).Z,width:"660",height:"632"})),(0,o.kt)("h3",{id:"logendevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.end([event, msg])")),(0,o.kt)("p",null,"Logs an end of a duration event with an optional ",(0,o.kt)("a",{parentName:"p",href:"#event-metadata"},"event metadata")," and a message. If the message is omitted,\nthe logger prints the corresponding message from the duration begin event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info.end();\n// detox[2020] E Nested sub-flow\nlog.info.end({ success: true }, 'Login Flow (custom end message)');\n// detox[2020] E Login Flow (custom end message)\n")),(0,o.kt)("h3",{id:"logcompleteevent-msg-functionorpromise"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.complete([event,] msg, functionOrPromise)")),(0,o.kt)("p",null,"A convenience method to wrap functions and promises with ",(0,o.kt)("a",{parentName:"p",href:"#logbeginevent-msg"},(0,o.kt)("inlineCode",{parentName:"a"},"log.*.begin"))," and ",(0,o.kt)("a",{parentName:"p",href:"#logendevent-msg"},(0,o.kt)("inlineCode",{parentName:"a"},"log.*.end")),", e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await log.info.complete('Login Flow', async () => {\n  // \u2026\n});\n// detox[2020] B Login Flow\n// detox[2020] E Login Flow\n")),(0,o.kt)("p",null,"As a bonus, this wrapper also adds ",(0,o.kt)("inlineCode",{parentName:"p"},"{ success: true }")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"{ success: false, error }")," metadata to\nthe end event."),(0,o.kt)("p",null,"Effectively, ",(0,o.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," can even be called in two complete different places - such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach"),", but that is discouraged."),(0,o.kt)("p",null,"In fact, ",(0,o.kt)("inlineCode",{parentName:"p"},"log.*.complete()")," is the recommended way of tracing things, e.g.:"),(0,o.kt)("h2",{id:"event-metadata"},"Event metadata"),(0,o.kt)("p",null,"All the log methods accept an optional first argument which can contain some custom\nmetadata: numbers, strings and booleans:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"detox.log.info({ /* metadata */ }, message);\ndetox.log.trace.begin({ /* metadata */ }, message);\ndetox.log.trace.end({ /* metadata */ });\n")),(0,o.kt)("p",null,"Aside from custom user properties, there are a few meaningful properties that affect the timeline representation."),(0,o.kt)("h3",{id:"id-string--number"},(0,o.kt)("inlineCode",{parentName:"h3"},"id")," ","[","string ","|"," number]"),(0,o.kt)("p",null,"Use arbitrary IDs when you have a risk of overlapping concurrent events, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n  await detox.log.complete({ id: 1 }, 'Do this', async () => { /* \u2026 */ }),\n  await detox.log.complete({ id: 2 }, 'Do that', async () => { /* \u2026 */ }),\n]);\n")),(0,o.kt)("p",null,"Using IDs will prevent situations like this, where the nested event outlasts its parent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"B               E\n|-- event 1 ----|\n   B                E\n   |-- event 2 -----|\n")),(0,o.kt)("p",null,"In the example above, the actual sequence of calls will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info.begin('event 1');\nlog.info.begin('event 2');\nlog.info.end(); // from event 1\nlog.info.end(); // from event 2\n")),(0,o.kt)("p",null,"Therefore, it will be interpreted erroneously on the timeline, as if the second event has ended before the first one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"B                   E\n|-- event 1 --------|\n   B            E\n   |-- event 2 -|\n")),(0,o.kt)("p",null,"When you begin an event with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),' while there\'s already some other duration event, the logger allocates another "lane" for that event by assigning a distinct ',(0,o.kt)("inlineCode",{parentName:"p"},"tid")," (thread ID) to it:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5587).Z,width:"574",height:"321"})),(0,o.kt)("h3",{id:"cat-string--string"},(0,o.kt)("inlineCode",{parentName:"h3"},"cat")," ","[","string ","|"," string","[","]]"),(0,o.kt)("p",null,"Event category. Helpful for filtering specific events."),(0,o.kt)("p",null,"Pass either a string of comma-separated values or a string array, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info({ cat: 'login,login-email' }, 'Starting e-mail login flow...');\n// is identical to:\nlog.info({ cat: ['login', 'login-email'] }, 'Starting e-mail login flow...');\n")),(0,o.kt)("h3",{id:"cname-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"cname")," ","[","string]"),(0,o.kt)("p",null,"Custom event color. See the available color names ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catapult-project/catapult/blob/main/tracing/tracing/base/color_scheme.html"},"here"),"."),(0,o.kt)("h3",{id:"-string--number--boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"*")," ","[","string ","|"," number ","|"," boolean]"),(0,o.kt)("p",null,"Your custom properties, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"detox.log.info({ login: 'test@example.com' }, 'Entering credentials...');\n")),(0,o.kt)("p",null,"Custom properties are not printed to the terminal logs, but there are a few reserved names which have\nan extra formatting due to our default ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/logger#loggeroptions-bunyandebugstreamoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"logger.options.stringifiers"))," \u2014 these are: ",(0,o.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stack"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"origin"),"."),(0,o.kt)("p",null,"Also, there are a few reserved properties which cannot be logged:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pid")," \u2014 process ID,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tid")," \u2014 thread ID,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ts")," \u2014 timestamp,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ph")," \u2014 phase: ",(0,o.kt)("em",{parentName:"li"},"begin")," (B), ",(0,o.kt)("em",{parentName:"li"},"end")," (E), ",(0,o.kt)("em",{parentName:"li"},"instant")," (i) event.")),(0,o.kt)("h2",{id:"artifacts"},"Artifacts"),(0,o.kt)("p",null,"The logger subsystem produces two artifacts when ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/test"},(0,o.kt)("inlineCode",{parentName:"a"},"--record-logs"))," CLI option is enabled or ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/artifacts#example"},(0,o.kt)("inlineCode",{parentName:"a"},"artifacts.plugins.log.enabled"))," config is set to true."),(0,o.kt)("h3",{id:"detoxlog"},(0,o.kt)("inlineCode",{parentName:"h3"},"detox.log")),(0,o.kt)("p",null,"This file contains all the log messages you could see in the terminal window, except that there are messages of all the log levels, from ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),"."),(0,o.kt)("h3",{id:"detoxtracejson"},(0,o.kt)("inlineCode",{parentName:"h3"},"detox.trace.json")),(0,o.kt)("p",null,"JSON file, which, if loaded into ",(0,o.kt)("a",{parentName:"p",href:"https://ui.perfetto.dev"},"Perfetto")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"chrome://tracing")," (internal address in Google Chrome browser), would look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Timeline artifact example",src:n(6806).Z,width:"1760",height:"523"})),(0,o.kt)("p",null,"The tracing view provides a visual, hierarchical representation of the various processes that took place during the execution of the testing session, over the execution\u2019s ",(0,o.kt)("em",{parentName:"p"},"time-line"),". These processes appear as hierarchical ",(0,o.kt)("em",{parentName:"p"},"sections")," \u2013 sometimes visually ordered in a parent-child way, depending on their formation time and context."))}g.isMDXComponent=!0},1894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/log-example-07a2afd13f5a9c00f864226c5694c431.png"},5653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timeline-artifact-unfinished-08dd500d605b4fd3b02f4c8e9c32b5ad.png"},6806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timeline-artifact-330d8f1de5146484a15c9f5c9f4d9709.png"},5587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timeline-tid-83e361d5657a544fcc397f62686a8624.png"}}]);