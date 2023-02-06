"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9617],{1787:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(7462),i=(t(7294),t(3905)),s=t(814);const a={toc:[]},r="wrapper";function l(e){let{components:n,...t}=e;return(0,i.kt)(r,(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can define the ",(0,i.kt)("code",null,t.sectionName)," config section in two ways: ",(0,i.kt)("i",null,"globally")," and ",(0,i.kt)("i",null,"locally")," (per a configuration):"),(0,i.kt)(s.Z,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {","// highlight-start",`  ${t.sectionName}: {`,"    /* global section */","  },","// highlight-end","  devices: { /* \u2026 */ },","  apps: { /* \u2026 */ },","  configurations: {","    'ios.sim.debug': {","      device: 'iphone',","      app: 'ios.debug',","// highlight-start",`      ${t.sectionName}: {`,"        /* local (per-configuration) section */","      },","// highlight-end","    },","  },","};"].join("\n")))}l.isMDXComponent=!0},9271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),i=(t(7294),t(3905)),s=t(1787);const a={},r="Session",l={unversionedId:"config/session",id:"config/session",title:"Session",description:"It is not recommended to customize this section unless you are debugging native code",source:"@site/../docs/config/session.mdx",sourceDirName:"config",slug:"/config/session",permalink:"/Detox/docs/next/config/session",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/config/session.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Logger",permalink:"/Detox/docs/next/config/logger"},next:{title:"Test runner",permalink:"/Detox/docs/next/config/testRunner"}},d={},p=[{value:"Location",id:"location",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>session.server</code> [string]",id:"sessionserver-string",level:3},{value:"<code>session.sessionId</code> [string]",id:"sessionsessionid-string",level:3},{value:"<code>session.autoStart</code> [boolean]",id:"sessionautostart-boolean",level:3},{value:"<code>session.debugSynchronization</code> [number]",id:"sessiondebugsynchronization-number",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"session"},"Session"),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is not recommended to customize this section unless ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/debugging"},"you are debugging native code"),"\nor contributing to the native iOS/Android code of Detox.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," section tells Detox how to set up its web socket server and client. They are used to forward the JSON-serialized expectations and element interactions to the native implementation of Detox side-loaded with the app."),(0,i.kt)("h2",{id:"location"},"Location"),(0,i.kt)(s.ZP,{sectionName:"session",mdxType:"Location"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"There is one important thing to note when you\u2019ll be defining a session config, e.g.:"),(0,i.kt)("h3",{id:"sessionserver-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"session.server")," ","[","string]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://localhost:{randomPort}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n// highlight-next-line\n    "server": "ws://localhost:8099"\n  }\n}\n')),(0,i.kt)("p",null,"When you define a URL for ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),", it automatically sets ",(0,i.kt)("a",{parentName:"p",href:"#sessionautostart-boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"session.autoStart"))," to ",(0,i.kt)("em",{parentName:"p"},"false")," (mainly due to backward compatibility reasons), so make sure to override it back if you didn\u2019t intend that."),(0,i.kt)("h3",{id:"sessionsessionid-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"session.sessionId")," ","[","string]"),(0,i.kt)("p",null,"Default: a random UUID, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"7731871e-2f07-46bb-acbc-cb0eb6a0ace7"),"."),(0,i.kt)("p",null,"Since the Detox server is a single entity, but there can be multiple test workers running multiple devices and apps,\nit needs to understand which connection belongs to which app."),(0,i.kt)("p",null,"Detox forwards ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionId")," to the app as a launch argument, so the app immediately knows where to connect to."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Defining an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionId")," means you cannot use ",(0,i.kt)("strong",{parentName:"p"},"multiple workers"),",\nsince the specified session will become busy for any test worker next to the first one to occupy it."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "server": "ws://localhost:8099",\n// highlight-next-line\n    "sessionId": "YourProjectSessionId"\n  }\n}\n'))),(0,i.kt)("h3",{id:"sessionautostart-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"session.autoStart")," ","[","boolean]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for undefined ",(0,i.kt)("inlineCode",{parentName:"p"},"session.server"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for defined."),(0,i.kt)("p",null,"Controls whether Detox web socket server will be starting automatically.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", it is assumed that you will be running it independently via ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/cli/run-server"},(0,i.kt)("inlineCode",{parentName:"a"},"detox run-server"))," CLI command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'   "session": {\n+    "autoStart": true,\n     "server": "ws://localhost:8099",\n     "sessionId": "YourProjectSessionId"\n')),(0,i.kt)("h3",{id:"sessiondebugsynchronization-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"session.debugSynchronization")," ","[","number]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),"."),(0,i.kt)("p",null,"Tells Detox how long to wait for the app to become idle until it starts querying it for more details.\nDetox will be printing the list of busy idling resources every time an action takes more than the specified period:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "debugSynchronization": 20000\n  }\n}\n')),(0,i.kt)("p",null,"To disable this behavior (i.e. querying the app periodically), set the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."))}m.isMDXComponent=!0}}]);