"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7024],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,g=d["".concat(s,".").concat(m)]||d[m]||y[m]||l;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const l={},r="Web Views",o={unversionedId:"api/webviews",id:"api/webviews",title:"Web Views",description:"Web views are native components that render content not natively supported by the platform, like web pages or PDF documents.",source:"@site/../docs/api/webviews.md",sourceDirName:"api",slug:"/api/webviews",permalink:"/Detox/docs/next/api/webviews",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/api/webviews.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Expect",permalink:"/Detox/docs/next/api/expect"},next:{title:"System",permalink:"/Detox/docs/next/api/system"}},s={},p=[{value:"Locating Elements in Web Views",id:"locating-elements-in-web-views",level:2},{value:"<code>web.element(matcher)</code>",id:"webelementmatcher",level:3},{value:"<code>web(nativeMatcher).element(matcher)</code>",id:"webnativematcherelementmatcher",level:3},{value:"<code>web(nativeMatcher).atIndex(index).element(matcher)</code> (iOS only)",id:"webnativematcheratindexindexelementmatcher-ios-only",level:3},{value:"Matchers",id:"matchers",level:2},{value:"<code>by.web.id(id)</code>",id:"bywebidid",level:3},{value:"<code>by.web.className(className)</code>",id:"bywebclassnameclassname",level:3},{value:"<code>by.web.cssSelector(cssSelector)</code>",id:"bywebcssselectorcssselector",level:3},{value:"<code>by.web.name(name)</code>",id:"bywebnamename",level:3},{value:"<code>by.web.xpath(xpath)</code>",id:"bywebxpathxpath",level:3},{value:"<code>by.web.href(href)</code>",id:"bywebhrefhref",level:3},{value:"<code>by.web.hrefContains(href)</code>",id:"bywebhrefcontainshref",level:3},{value:"<code>by.web.tag(tag)</code>",id:"bywebtagtag",level:3},{value:"<code>by.web.value(value)</code>",id:"bywebvaluevalue",level:3},{value:"<code>by.web.label(label)</code>",id:"byweblabellabel",level:3},{value:"<code>by.web.type(accessibilityType)</code>",id:"bywebtypeaccessibilitytype",level:3},{value:"<code>atIndex(index)</code>",id:"atindexindex",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>tap()</code>",id:"tap",level:3},{value:"<code>typeText(text[, isContentEditable])</code>",id:"typetexttext-iscontenteditable",level:3},{value:"<code>replaceText(text)</code>",id:"replacetexttext",level:3},{value:"<code>clearText()</code>",id:"cleartext",level:3},{value:"<code>selectAllText()</code>",id:"selectalltext",level:3},{value:"<code>getText()</code>",id:"gettext",level:3},{value:"<code>scrollToView()</code>",id:"scrolltoview",level:3},{value:"<code>focus()</code>",id:"focus",level:3},{value:"<code>moveCursorToEnd()</code>",id:"movecursortoend",level:3},{value:"<code>runScript(script[, args])</code>",id:"runscriptscript-args",level:3},{value:"<code>getCurrentUrl()</code>",id:"getcurrenturl",level:3},{value:"<code>getTitle()</code>",id:"gettitle",level:3},{value:"Expectations",id:"expectations",level:2},{value:"<code>toHaveText(text)</code>",id:"tohavetexttext",level:3},{value:"<code>toExist()</code>",id:"toexist",level:3},{value:"<code>not</code>",id:"not",level:3},{value:"<code>asSecured()</code>",id:"assecured",level:2},{value:"Why use <code>asSecured()</code>?",id:"why-use-assecured",level:3}],c={toc:p},d="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"web-views"},"Web Views"),(0,i.yg)("p",null,"Web views are native components that render content not natively supported by the platform, like web pages or PDF documents.\nHowever, elements within web views are not native components, making direct interaction through Detox challenging.\nTo address this, Detox offers a suite of matchers, actions, and expectations designed for interacting with content inside web views."),(0,i.yg)("h2",{id:"locating-elements-in-web-views"},"Locating Elements in Web Views"),(0,i.yg)("h3",{id:"webelementmatcher"},(0,i.yg)("inlineCode",{parentName:"h3"},"web.element(matcher)")),(0,i.yg)("p",null,"In cases where there's only one web view present on the screen, you may use the ",(0,i.yg)("inlineCode",{parentName:"p"},"web.element()")," function, paired with ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#matchers"},"web view matchers"),", to reference elements within the web view.\nUpon obtaining the element reference, you can utilize web view actions and expectations on the webView element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const innerElement = web.element(by.web.id('inner_element_identifier'));\nawait expect(innerElement).toHaveText('Hello World!');\n")),(0,i.yg)("p",null,"In the example above, we locate an inner element by its ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," HTML attribute and verify its text content."),(0,i.yg)("h3",{id:"webnativematcherelementmatcher"},(0,i.yg)("inlineCode",{parentName:"h3"},"web(nativeMatcher).element(matcher)")),(0,i.yg)("p",null,"If you have multiple web views on the screen, you must locate a specific web view first by using a ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"native matcher"),", e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const myWebView = web(by.id('webview_identifier'));\n")),(0,i.yg)("p",null,"Following that, you can locate the element within the identified web view:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const innerElement = myWebView.element(by.web.id('inner_element_identifier'));\nawait expect(innerElement).toHaveText('Hello World!');\n")),(0,i.yg)("h3",{id:"webnativematcheratindexindexelementmatcher-ios-only"},(0,i.yg)("inlineCode",{parentName:"h3"},"web(nativeMatcher).atIndex(index).element(matcher)")," (iOS only)"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This matcher is available for iOS only. See ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/4398"},"this GitHub issue")," for more information.")),(0,i.yg)("p",null,"If you have multiple web views on the screen and you want to interact with a specific web view, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"atIndex()")," method to choose the web view at the specified index."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const myWebView = web(by.id('webview_identifier')).atIndex(1);\nconst innerElement = myWebView.element(by.web.id('inner_element_identifier'));\nawait expect(innerElement).toHaveText('Hello World!');\n")),(0,i.yg)("p",null,"In the example above, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"atIndex()")," to select the second web view on the screen (that has the specified accessibility identifier) and then locate an HTML element inside that web view."),(0,i.yg)("h2",{id:"matchers"},"Matchers"),(0,i.yg)("p",null,"Web view matchers are used to find elements within a web view:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebidid"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.id()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebclassnameclassname"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.className()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebcssselectorcssselector"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.cssSelector()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebnamename"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.name()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebxpathxpath"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.xpath()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebhrefhref"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.href()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebhrefcontainshref"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.hrefContains()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebtagtag"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.tag()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebvaluevalue"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.value()"))," (iOS only)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#byweblabellabel"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.label()"))," (iOS only, supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#bywebtypeaccessibilitytype"},(0,i.yg)("inlineCode",{parentName:"a"},"by.web.type()"))," (iOS only, ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," only)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#atindexindex"},(0,i.yg)("inlineCode",{parentName:"a"},"atIndex()")))),(0,i.yg)("h3",{id:"bywebidid"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.id(id)")),(0,i.yg)("p",null,"Match elements with the specified accessibility identifier."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.id('identifier'));\n")),(0,i.yg)("h3",{id:"bywebclassnameclassname"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.className(className)")),(0,i.yg)("p",null,"Match elements with the specified CSS class name."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.className('className'));\n")),(0,i.yg)("h3",{id:"bywebcssselectorcssselector"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.cssSelector(cssSelector)")),(0,i.yg)("p",null,"Match elements with the specified CSS selector."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.cssSelector('#cssSelector'));\n")),(0,i.yg)("h3",{id:"bywebnamename"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.name(name)")),(0,i.yg)("p",null,"Match form input elements with the specified ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#name"},(0,i.yg)("inlineCode",{parentName:"a"},"name")," attribute"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.name('name'));\n")),(0,i.yg)("h3",{id:"bywebxpathxpath"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.xpath(xpath)")),(0,i.yg)("p",null,"Match elements with the specified XPath."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.xpath('//*[@id=\"testingh1-1\"]'));\n")),(0,i.yg)("h3",{id:"bywebhrefhref"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.href(href)")),(0,i.yg)("p",null,"Match elements with the specified ",(0,i.yg)("inlineCode",{parentName:"p"},"href"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.href('https://wix.com'));\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You might face issues with this matcher on Android. Check ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/4398"},"this GitHub issue")," for more information.")),(0,i.yg)("h3",{id:"bywebhrefcontainshref"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.hrefContains(href)")),(0,i.yg)("p",null,"Match elements that contain the specified ",(0,i.yg)("inlineCode",{parentName:"p"},"href"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.hrefContains('wix'));\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You might face issues with this matcher on Android. Check ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/4398"},"this GitHub issue")," for more information.")),(0,i.yg)("h3",{id:"bywebtagtag"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.tag(tag)")),(0,i.yg)("p",null,"Match elements with the specified tag."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.tag('h1'));\n")),(0,i.yg)("h3",{id:"bywebvaluevalue"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.value(value)")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This matcher is available for ",(0,i.yg)("strong",{parentName:"p"},"iOS only")," at the moment.")),(0,i.yg)("p",null,"Match elements with the specified value."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.value('value'));\n")),(0,i.yg)("h3",{id:"byweblabellabel"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.label(label)")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This matcher is available for ",(0,i.yg)("strong",{parentName:"p"},"iOS only")," at the moment and supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),".")),(0,i.yg)("p",null,"Match elements with the specified label."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.label('label'));\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.label('label')).asSecured();\n")),(0,i.yg)("h3",{id:"bywebtypeaccessibilitytype"},(0,i.yg)("inlineCode",{parentName:"h3"},"by.web.type(accessibilityType)")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This matcher is available for ",(0,i.yg)("strong",{parentName:"p"},"iOS only")," at the moment and supported with ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," only.")),(0,i.yg)("p",null,"Match elements with the specified type."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.type('textField')).asSecured();\n")),(0,i.yg)("p",null,"The type value can be any of XCUIElement.ElementType values, such as 'button' or 'textField'. See ",(0,i.yg)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xctest/xcuielement/elementtype"},"XCUIElement.ElementType"),"."),(0,i.yg)("h3",{id:"atindexindex"},(0,i.yg)("inlineCode",{parentName:"h3"},"atIndex(index)")),(0,i.yg)("p",null,"Choose the element at the specified index."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"web.element(by.web.tag('h1')).atIndex(1);\n")),(0,i.yg)("p",null,"Use it sparingly for those rare cases when you cannot make your matcher less ambiguous, so it returns one element only."),(0,i.yg)("h2",{id:"actions"},"Actions"),(0,i.yg)("p",null,"Web view actions are used to interact with elements within a web view:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#tap"},(0,i.yg)("inlineCode",{parentName:"a"},"tap()"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#typetexttext-iscontenteditable"},(0,i.yg)("inlineCode",{parentName:"a"},"typeText()"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#replacetexttext"},(0,i.yg)("inlineCode",{parentName:"a"},"replaceText()"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#cleartext"},(0,i.yg)("inlineCode",{parentName:"a"},"clearText()"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#selectalltext"},(0,i.yg)("inlineCode",{parentName:"a"},"selectAllText()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#gettext"},(0,i.yg)("inlineCode",{parentName:"a"},"getText()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#scrolltoview"},(0,i.yg)("inlineCode",{parentName:"a"},"scrollToView()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#focus"},(0,i.yg)("inlineCode",{parentName:"a"},"focus()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#movecursortoend"},(0,i.yg)("inlineCode",{parentName:"a"},"moveCursorToEnd()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#runscriptscript-args"},(0,i.yg)("inlineCode",{parentName:"a"},"runScript()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#getcurrenturl"},(0,i.yg)("inlineCode",{parentName:"a"},"getCurrentUrl()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#gettitle"},(0,i.yg)("inlineCode",{parentName:"a"},"getTitle()")))),(0,i.yg)("h3",{id:"tap"},(0,i.yg)("inlineCode",{parentName:"h3"},"tap()")),(0,i.yg)("p",null,"Tap the element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).tap();\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.label('Submit')).asSecured().tap();\n")),(0,i.yg)("h3",{id:"typetexttext-iscontenteditable"},(0,i.yg)("inlineCode",{parentName:"h3"},"typeText(text[, isContentEditable])")),(0,i.yg)("p",null,"Type the specified text into the element."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"isContentEditable")," is an optional parameter that indicates whether the element should be a ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable"},"content-editable")," (",(0,i.yg)("inlineCode",{parentName:"p"},"contenteditable"),") element, and defaults to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).typeText('Hello World!');\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.type('textField')).asSecured().typeText('Hello World!');\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"isContentEditable")," parameter is currently necessary for content-editable elements only on Android."),(0,i.yg)("p",{parentName:"admonition"},"On iOS, Detox automatically detects content-editable elements regardless of this parameter.")),(0,i.yg)("h3",{id:"replacetexttext"},(0,i.yg)("inlineCode",{parentName:"h3"},"replaceText(text)")),(0,i.yg)("p",null,"Replace the text of the element with the specified text."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).replaceText('Hello World!');\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.type('textField')).asSecured().replaceText('Hello World!');\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This action is currently not supported for content-editable elements on Android."),(0,i.yg)("p",{parentName:"admonition"},"On iOS, Detox automatically detects content-editable elements and replaces their text.")),(0,i.yg)("h3",{id:"cleartext"},(0,i.yg)("inlineCode",{parentName:"h3"},"clearText()")),(0,i.yg)("p",null,"Clear the text of the element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).clearText();\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.type('textField')).asSecured().clearText();\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This action is currently not supported for content-editable elements on Android."),(0,i.yg)("p",{parentName:"admonition"},"On iOS, Detox automatically detects content-editable elements and clears their text.")),(0,i.yg)("h3",{id:"selectalltext"},(0,i.yg)("inlineCode",{parentName:"h3"},"selectAllText()")),(0,i.yg)("p",null,"Select all the text of the element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).selectAllText();\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This action is currently supported for content-editable elements only on Android."),(0,i.yg)("p",{parentName:"admonition"},"On iOS, Detox can select all the text of any element that supports it (for example, an input element).")),(0,i.yg)("h3",{id:"gettext"},(0,i.yg)("inlineCode",{parentName:"h3"},"getText()")),(0,i.yg)("p",null,"Get the text of the element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const text = await web.element(by.web.id('identifier')).getText();\n")),(0,i.yg)("h3",{id:"scrolltoview"},(0,i.yg)("inlineCode",{parentName:"h3"},"scrollToView()")),(0,i.yg)("p",null,"Scroll to the element until its top is at the top of the viewport."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).scrollToView();\n")),(0,i.yg)("h3",{id:"focus"},(0,i.yg)("inlineCode",{parentName:"h3"},"focus()")),(0,i.yg)("p",null,"Focus on the element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).focus();\n")),(0,i.yg)("h3",{id:"movecursortoend"},(0,i.yg)("inlineCode",{parentName:"h3"},"moveCursorToEnd()")),(0,i.yg)("p",null,"Move the input cursor to the end of the element's content."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.id('identifier')).moveCursorToEnd();\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This action is currently supported for content-editable elements only on Android."),(0,i.yg)("p",{parentName:"admonition"},"On iOS, Detox can move the cursor to the end of any element that supports it (for example, an input element).")),(0,i.yg)("h3",{id:"runscriptscript-args"},(0,i.yg)("inlineCode",{parentName:"h3"},"runScript(script[, args])")),(0,i.yg)("p",null,"Run the specified script on the element.\nThe script should be a string that contains a valid JavaScript function.\nIt will be called with that element as the first argument:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const webElement = web.element(by.web.id('identifier'));\nawait webElement.runScript('(el) => el.click()');\n")),(0,i.yg)("p",null,"For convenience, you can pass a function instead of a string, but please note that this will not work if the function uses any variables from the outer scope:"),(0,i.yg)("p",null,"The script can accept additional arguments and return a value. Make sure the values are primitive types or serializable objects, as they will be converted to JSON and back:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const text = await webElement.runScript(function get(element, property) {\n  return element[property];\n}, ['textContent']);\n")),(0,i.yg)("h3",{id:"getcurrenturl"},(0,i.yg)("inlineCode",{parentName:"h3"},"getCurrentUrl()")),(0,i.yg)("p",null,"Get the current URL of the web view."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const url = await web.element(by.web.id('identifier')).getCurrentUrl();\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Although this action returns the URL of the presented web document, it can be called from an inner element only (for example, an iframe id or the HTML) and not from the root native web view element itself."),(0,i.yg)("p",{parentName:"admonition"},"You might face issues with this action on Android. Check ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/4398"},"this GitHub issue")," for more information.")),(0,i.yg)("h3",{id:"gettitle"},(0,i.yg)("inlineCode",{parentName:"h3"},"getTitle()")),(0,i.yg)("p",null,"Get the title of the web view."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Although this action returns the title of the presented web document, it can be called from an inner element only (for example, an iframe id or the HTML) and not from the root native web view element itself.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const title = await web.element(by.web.id('identifier')).getTitle();\n")),(0,i.yg)("h2",{id:"expectations"},"Expectations"),(0,i.yg)("p",null,"Web view expectations are used to assert the state of elements within a web view:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#tohavetexttext"},(0,i.yg)("inlineCode",{parentName:"a"},"toHaveText()"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#toexist"},(0,i.yg)("inlineCode",{parentName:"a"},"toExist()"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#not"},(0,i.yg)("inlineCode",{parentName:"a"},"not"))," (supports ",(0,i.yg)("a",{parentName:"li",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()")),")")),(0,i.yg)("h3",{id:"tohavetexttext"},(0,i.yg)("inlineCode",{parentName:"h3"},"toHaveText(text)")),(0,i.yg)("p",null,"Assert that the element has the specified text."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await expect(web.element(by.web.id('identifier'))).toHaveText('Hello World!');\n")),(0,i.yg)("h3",{id:"toexist"},(0,i.yg)("inlineCode",{parentName:"h3"},"toExist()")),(0,i.yg)("p",null,"Assert that the element exists."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await expect(web.element(by.web.id('identifier'))).toExist();\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await expect(web.element(by.web.label('Hello World!')).asSecured()).toExist();\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You might face issues with this expectation on Android. Check ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/4398"},"this GitHub issue")," for more information.")),(0,i.yg)("h3",{id:"not"},(0,i.yg)("inlineCode",{parentName:"h3"},"not")),(0,i.yg)("p",null,"Negate the expectation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await expect(web.element(by.web.id('identifier'))).not.toHaveText('Hello World!');\n")),(0,i.yg)("p",null,"Supports ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/webviews#assecured"},(0,i.yg)("inlineCode",{parentName:"a"},"asSecured()"))," on ",(0,i.yg)("strong",{parentName:"p"},"iOS only"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await expect(web.element(by.web.label('Hello World!')).asSecured().atIndex(1)).not.toExist();\n")),(0,i.yg)("h2",{id:"assecured"},(0,i.yg)("inlineCode",{parentName:"h2"},"asSecured()")),(0,i.yg)("admonition",{title:"experimental",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This API is available only on ",(0,i.yg)("strong",{parentName:"p"},"iOS")," and is currently in the experimental phase. It is subject to changes in the near future.")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"asSecured()")," API is designed for interacting with web pages that use secured protocols, such as PCI DSS for payment pages. Use it when the regular API fails to interact with such pages. Detox uses system-level interactions with the webview in these scenarios. This approach is less performant and has fewer APIs."),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"await web.element(by.web.label('Submit')).asSecured().tap();\n")),(0,i.yg)("h3",{id:"why-use-assecured"},"Why use ",(0,i.yg)("inlineCode",{parentName:"h3"},"asSecured()"),"?"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"asSecured()")," for web pages with secured protocols when regular Detox interactions fail. For CORS issues, consider passing the ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/device#12-detoxdisablewebkitsecuritydisable-webkit-security-ios-only"},(0,i.yg)("inlineCode",{parentName:"a"},"detoxDisableWebKitSecurity"))," launch argument to enable less strict security limitations for interacting with secured web views."))}y.isMDXComponent=!0}}]);