"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={},r="Dealing With Problems With Running Tests",s={unversionedId:"troubleshooting/running-tests",id:"version-20.x/troubleshooting/running-tests",title:"Dealing With Problems With Running Tests",description:"This page is about issues related to executing your Detox tests, typically triggered when running detox test (and not detox build, for example).",source:"@site/versioned_docs/version-20.x/troubleshooting/running-tests.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/running-tests",permalink:"/Detox/docs/troubleshooting/running-tests",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/troubleshooting/running-tests.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dealing With Problems With Building the App & Detox",permalink:"/Detox/docs/troubleshooting/building-the-app"},next:{title:"Dealing With Synchronization Issues in Tests",permalink:"/Detox/docs/troubleshooting/synchronization"}},l={},p=[{value:"Trace Mode",id:"trace-mode",level:2},{value:"No simulators found (iOS)",id:"no-simulators-found-ios",level:2},{value:"Tests execution hangs",id:"tests-execution-hangs",level:2},{value:"If you do not see your app running on the device",id:"if-you-do-not-see-your-app-running-on-the-device",level:3},{value:"If you <em>do</em> see your app running on the device",id:"if-you-do-see-your-app-running-on-the-device",level:3},{value:"Syntax Error: Unexpected Token",id:"syntax-error-unexpected-token",level:2},{value:"Can\u2019t Find My Component Even Though I Added a <code>testID</code> to Its Props",id:"cant-find-my-component-even-though-i-added-a-testid-to-its-props",level:2},{value:"Test Tries to Find My Component Before It\u2019s Created",id:"test-tries-to-find-my-component-before-its-created",level:2},{value:"Can\u2019t synchronize the test with my app",id:"cant-synchronize-the-test-with-my-app",level:2},{value:"An Element is Not Visible",id:"an-element-is-not-visible",level:2},{value:"Debug View Hierarchy",id:"debug-view-hierarchy",level:2},{value:"Compare to a Working Setup",id:"compare-to-a-working-setup",level:2},{value:"Take a Look at Past Issues",id:"take-a-look-at-past-issues",level:2},{value:"How to Open a New Issue",id:"how-to-open-a-new-issue",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dealing-with-problems-with-running-tests"},"Dealing With Problems With Running Tests"),(0,o.kt)("p",null,"This page is about issues related to executing your Detox tests, typically triggered when running ",(0,o.kt)("inlineCode",{parentName:"p"},"detox test")," (and not ",(0,o.kt)("inlineCode",{parentName:"p"},"detox build"),", for example)."),(0,o.kt)("h2",{id:"trace-mode"},"Trace Mode"),(0,o.kt)("p",null,"It\u2019s a good idea to get as much information as possible about what\u2019s going on. We can enable trace mode during tests by running our tests with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --loglevel trace\n")),(0,o.kt)("h2",{id:"no-simulators-found-ios"},"No simulators found (iOS)"),(0,o.kt)("p",null,"In order to run tests on a simulator, you need to have simulator images installed on your machine. This process is performed by Xcode itself. You can list all available simulators using ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun simctl list")," in terminal."),(0,o.kt)("p",null,"If you\u2019re missing a simulator, make sure Xcode is installed and use it to download the simulator. Take a look at the Preferences screen, some screenshots can be seen ",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/33738113/how-to-install-ios-9-1-simulator-in-xcode-version-7-1-1-7b1005"},"here"),"."),(0,o.kt)("p",null,"Once the desired simulator is installed and returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun simctl list"),", double check its name in the list and make sure this name is found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"detox")," configuration entry in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". The reference for the configuration options is available ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/config/devices"},"here"),"."),(0,o.kt)("h2",{id:"tests-execution-hangs"},"Tests execution hangs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue:")," A while after running Detox, you get a message about failure to connect to the running app, in the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Detox can\u2019t seem to connect to the test app(s)!\n")),(0,o.kt)("p",null,"This can be a result of various reasons. It is generally up to you to debug and find the root cause. In any case, below are the common ones."),(0,o.kt)("h3",{id:"if-you-do-not-see-your-app-running-on-the-device"},"If you do not see your app running on the device"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You might have forgotten to run ",(0,o.kt)("inlineCode",{parentName:"li"},"device.launchApp()")," in the beginning of your test."),(0,o.kt)("li",{parentName:"ul"},"The app might have crashed before Detox has had a chance to connect to it. To get the crash details, you can run Detox tests with ",(0,o.kt)("inlineCode",{parentName:"li"},"--record-logs all")," CLI option and then inspect the device logs in the artifacts' folder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Android"),", there might be a problem with the native test code in the ",(0,o.kt)("inlineCode",{parentName:"li"},"DetoxTest.java")," file. Revisit the ",(0,o.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/project-setup#step-4-additional-android-configuration"},"associated section")," in the setup guide.")),(0,o.kt)("h3",{id:"if-you-do-see-your-app-running-on-the-device"},"If you ",(0,o.kt)("em",{parentName:"h3"},"do")," see your app running on the device"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Android with SDK\u226528"),", the app\u2019s connection to the Detox test server is blocked due to clear-traffic blockage (as reported in issue ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/1450"},"#1450"),").\nThe main step for getting this fixed is to revisit the ",(0,o.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/project-setup#step-4-additional-android-configuration"},"associated section")," in the setup guide, which discusses network-security. Alternatively, the ",(0,o.kt)("inlineCode",{parentName:"li"},'android:usesCleartextTraffic="true"')," attribute can be configured in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<application>")," tag of the app\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),", but ",(0,o.kt)("strong",{parentName:"li"},"that is highly discouraged"),"."),(0,o.kt)("li",{parentName:"ul"},"If you\u2019ve applied the above suggestion but the app fails to connect to the Detox test server, nonetheless: Refer to the device\u2019s logs, which should contain messages about failed connection attempts (get them using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--record-logs all")," argument)"),(0,o.kt)("li",{parentName:"ul"},"The app could be running without Detox native code injected. In this case, first, make sure you\u2019re not trying to run in manual launch mode (where this behavior is valid). If so, examine the logs from the device (get them using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--record-logs all")," argument). If you see a crash related to Detox\u2019s native code, you are welcome to report it on our GitHub tracker."),(0,o.kt)("li",{parentName:"ul"},"If you are in fact debugging your native code integration with Detox, our ",(0,o.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/debugging"},"Debugging tutorial")," may prove helpful.")),(0,o.kt)("h2",{id:"syntax-error-unexpected-token"},"Syntax Error: Unexpected Token"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue:")," Running tests immediately throws the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(async () => {\n                   ^\nSyntaxError: Unexpected token (\n    at Object.exports.runInThisContext (vm.js:76:16)\n    at Module._compile (module.js:545:28)\n    at loader (/Users/builduser/buildAgent/work/34eee2d16ef6c34b/node_modules/babel-register/lib/node.js:144:5)\n    at Object.require.extensions.(anonymous function) [as .js] (/Users/builduser/buildAgent/work/34eee2d16ef6c34b/node_modules/babel-register/lib/node.js:154:7)\n...\nchild_process.js:531\n    throw err;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution:")," This error means that your version of Node does not support ",(0,o.kt)("inlineCode",{parentName:"p"},"async-await")," syntax. You should do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update Node to a version ",(0,o.kt)("strong",{parentName:"li"},"8.3.0 or higher"),".")),(0,o.kt)("h2",{id:"cant-find-my-component-even-though-i-added-a-testid-to-its-props"},"Can\u2019t Find My Component Even Though I Added a ",(0,o.kt)("inlineCode",{parentName:"h2"},"testID")," to Its Props"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue:")," Detox fails to match a component even though it has a ",(0,o.kt)("inlineCode",{parentName:"p"},"testID"),". Detox will throw the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'Error: Cannot find UI Element.\nException with Assertion: {\n  "Assertion Criteria" : "assertWithMatcher: matcherForSufficientlyVisible(>=0.750000)",\n  "Element Matcher" : "(((respondsToSelector(accessibilityIdentifier) && accessibilityID(\'Welcome\')) && !kindOfClass(\'RCTScrollView\')) || (kindOfClass(\'UIScrollView\') && ((kindOfClass(\'UIView\') || respondsToSelector(accessibilityContainer)) && ancestorThatMatches(((respondsToSelector(accessibilityIdentifier) && accessibilityID(\'Welcome\')) && kindOfClass(\'RCTScrollView\'))))))",\n  "Recovery Suggestion" : "Check if element exists in the UI, modify assert criteria, or adjust the matcher"\n}\n\nError Trace: [\n  {\n    "Description" : "Interaction cannot continue because the desired element was not found.",\n    "Domain" : "com.google.earlgrey.ElementInteractionErrorDomain",\n    "Code" : "0",\n    "File Name" : "GREYElementInteraction.m",\n    "Function Name" : "-[GREYElementInteraction matchedElementsWithTimeout:error:]",\n    "Line" : "119"\n  }\n]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution:")," React Native only supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," prop on the native built-in components. If you\u2019ve created a custom composite component, you will have to support this prop yourself. You should probably propagate the ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," prop to one of your rendered children (a built-in component):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export class MyCompositeComponent extends Component {\n  render() {\n    return (\n      <TouchableOpacity testID={this.props.testID}>\n        <View>\n          <Text>Something something</Text>\n        </View>\n      </TouchableOpacity>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Now, adding ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," to your composite component should work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  return <MyCompositeComponent testID='MyUniqueId123' />;\n}\n")),(0,o.kt)("h2",{id:"test-tries-to-find-my-component-before-its-created"},"Test Tries to Find My Component Before It\u2019s Created"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue:")," Due to a synchronization issue, the test tries to perform an expectation and fails because it runs the expectation too soon. Consider this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await element(by.text('Login')).tap();\nawait expect(element(by.text('Welcome'))).toBeVisible();\n")),(0,o.kt)("p",null,"In the test above, after tapping the Login button, the app performs several complex asynchronous operations until the Welcome message is displayed post-login. These can include querying a server, waiting for a response and then running an animated transition to the Welcome screen. Detox attempts to simplify your test code by synchronizing ",(0,o.kt)("em",{parentName:"p"},"automatically")," with these asynchronous operations. What happens if for some reason the automatic synchronization doesn\u2019t work? As a result, Detox will not wait correctly until the Welcome screen appears and instead will continue immediately to the next line and try to run the expectation. Since the screen is not there yet, the test will fail."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution:")," When you suspect that automatic synchronization didn\u2019t work, you have a fail-safe by synchronizing manually with ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor"),". Using ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," will poll until the expectation is met. This isn\u2019t a recommended approach so please use it as a workaround and open and issue to resolve the synchronization issue."),(0,o.kt)("p",null,"This is what the fixed test would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await element(by.text('Login')).tap();\nawait waitFor(element(by.text('Welcome'))).toBeVisible().withTimeout(2000);\n")),(0,o.kt)("h2",{id:"cant-synchronize-the-test-with-my-app"},"Can\u2019t synchronize the test with my app"),(0,o.kt)("p",null,"If you suspect that the test is failing because Detox fails to synchronize the test steps with your app, take a look at this in-depth ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/troubleshooting/synchronization"},"synchronization troubleshooting tutorial"),"."),(0,o.kt)("h2",{id:"an-element-is-not-visible"},"An Element is Not Visible"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On iOS"),", you may run in a situation, when one of the interactions (tap, scroll, etc.) on an element fails with an error like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'Test Failed: View "<RCTScrollView: 0x7f8d32296d70>" is not visible: view does not pass visibility threshold (0% visible of 75% required)\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try retrieving ",(0,o.kt)("inlineCode",{parentName:"p"},"ui.viewhierarchy")," artifact \u2014 sometimes examining the hierarchy visually can give you insights.\nAdd a line ",(0,o.kt)("inlineCode",{parentName:"p"},'"uiHierarchy": "enabled"')," to your artifacts' configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},".detoxrc.js"),", like in an example here: ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/config/artifacts"},"Artifacts Configuration"),". After a rerun, you should find\na ",(0,o.kt)("inlineCode",{parentName:"p"},"ui.viewhierarchy")," in a folder of your failing test. Please mind that you need Xcode 12 at least to open ",(0,o.kt)("inlineCode",{parentName:"p"},"*.viewhierarchy")," files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Besides, you can rerun your iOS app tests with ",(0,o.kt)("inlineCode",{parentName:"p"},"--take-screenshots failing"),". What will happen is, for each view that fails visibility, two images will be saved at ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts/<configuration-timestamp-dir>/<test name>/DETOX_VISIBILITY_<viewType>__<viewID>__SCREEN.png")," (and ",(0,o.kt)("inlineCode",{parentName:"p"},".../DETOX_VISIBILITY_<viewType>__<viewID>__TEST.png")," folder aside) with autogenerated names, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"DETOX_VISIBILITY_RCTTextView__0x7fab7660f3e0__TEST.png"),":"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"in ",(0,o.kt)("inlineCode",{parentName:"th"},"DETOX_*_SCREEN.png")),(0,o.kt)("th",{parentName:"tr",align:"center"},"in ",(0,o.kt)("inlineCode",{parentName:"th"},"DETOX_*_TEST.png")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"visible",src:"https://user-images.githubusercontent.com/2270433/94178906-68872380-fea4-11ea-845c-c55c25b68c0e.png",height:"480"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"internals",src:"https://user-images.githubusercontent.com/2270433/94178919-6c1aaa80-fea4-11ea-8db6-64f1f4b21361.png",height:"480"}))))),(0,o.kt)("p",null,"The first is supposed to show what is seen on screen. The second shows the internal buffer that Detox tests for visibility; if the pixels aren\u2019t transparent enough and less than 75% of tested region is not transparent, the view is not considered visible."),(0,o.kt)("p",null,"If you are developing a React Native app, then the following applies. If, for instance, you see that tapping fails due to a view with ",(0,o.kt)("inlineCode",{parentName:"p"},'pointerEvents="none"')," obscuring your target \u2014 well, the only solutions are: either to make the obscurer a descendant of your target (instead of being a sibling), or to tap on the parent container."),(0,o.kt)("p",null,"If you see that your issue cannot be solved via testID replacement or a simple hierarchy rearrangement, then there\u2019s a chance this is a bug in Detox. Make sure to provide your ",(0,o.kt)("inlineCode",{parentName:"p"},"ui.viewhierarchy")," artifact, the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"DETOX_VISIBILITY_*")," pictures and a comprehensive description of the issue backed up with sound arguments."),(0,o.kt)("h2",{id:"debug-view-hierarchy"},"Debug View Hierarchy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue:")," I added the ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," prop, but I still can\u2019t find the view by id in my tests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution:")," You can investigate the app\u2019s native view hierarchy, this might shed some light on how the app\u2019s view hierarchy is laid out."),(0,o.kt)("p",null,"Do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start a debuggable app (not a release build) in your simulator"),(0,o.kt)("li",{parentName:"ol"},"Open Xcode"),(0,o.kt)("li",{parentName:"ol"},"Attach Xcode to your app\u2019s process\n",(0,o.kt)("img",{alt:"attach to process",src:n(8395).Z,width:"860",height:"506"})),(0,o.kt)("li",{parentName:"ol"},"Press the ",(0,o.kt)("inlineCode",{parentName:"li"},"Debug View Hierarchy")," button\n",(0,o.kt)("img",{alt:"debug view hierarchy",src:n(7436).Z,width:"962",height:"812"})),(0,o.kt)("li",{parentName:"ol"},"This will open the hierarchy viewer, and will show a breakdown of your app\u2019s native view hierarchy. Here you can browse through the views"),(0,o.kt)("li",{parentName:"ol"},"React Native testIDs are manifested as ",(0,o.kt)("em",{parentName:"li"},"accessibility identifiers")," in the native view hierarchy")),(0,o.kt)("p",null,"Let\u2019s see an example. We will find the following view in the native hierarchy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<TouchableOpacity onPress={this.onButtonPress.bind(this, 'ID Working')}>\n  <Text testID='UniqueId345' style={{color: 'blue', marginBottom: 20}}>ID</Text>\n</TouchableOpacity>\n")),(0,o.kt)("p",null,"This is the hierarchy viewer, pointing to the native view just mentioned:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hierarchy viewer",src:n(717).Z,width:"1415",height:"986"})),(0,o.kt)("h2",{id:"compare-to-a-working-setup"},"Compare to a Working Setup"),(0,o.kt)("p",null,"If you feel lost, try starting from a working example for sanity."),(0,o.kt)("p",null,"There are multiple working examples included in this repo, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native"},"demo-react-native"),"."),(0,o.kt)("p",null,"First, install, build and make sure the tests are indeed passing. If they are, try comparing this setup with what you have."),(0,o.kt)("h2",{id:"take-a-look-at-past-issues"},"Take a Look at Past Issues"),(0,o.kt)("p",null,"Before opening a new issue, search the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/detox/issues?utf8=%E2%9C%93%5C&q=is%3Aissue"},"list of issues")," on GitHub. There\u2019s a good chance somebody faced the same problem you are having."),(0,o.kt)("h2",{id:"how-to-open-a-new-issue"},"How to Open a New Issue"),(0,o.kt)("p",null,"Before opening a new issue, please follow the entire troubleshooting guide and go over past issues."),(0,o.kt)("p",null,"General usage questions should be opened on Stack Overflow, where the core Detox team is active and responds to questions:\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/detox"},"https://stackoverflow.com/questions/tagged/detox")),(0,o.kt)("p",null,"If you believe you are seeing a Detox issue, select the correct template from the options, and make sure to fill all requested information in the template. Omitting important information will likely result in a closed issue."))}d.isMDXComponent=!0},8395:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/attach-to-process-e47ced58650b9d7733142a3302fa2a35.jpg"},7436:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debug-view-hierarchy-c086dcbfdc42ee69b1e1043bbe89271d.jpg"},717:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/hierarchy-viewer-0b1843b00b7eb3715f5ffa5ca4da0640.jpg"}}]);