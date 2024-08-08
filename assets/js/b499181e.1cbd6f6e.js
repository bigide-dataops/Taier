"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[8706],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),k=a,d=f["".concat(c,".").concat(k)]||f[k]||p[k]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5820:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Flink Jar",sidebar_label:"Flink Jar"},c=void 0,u={unversionedId:"functions/task/flink",id:"functions/task/flink",title:"Flink Jar",description:"\u65b0\u5efa\u4efb\u52a1",source:"@site/docs/functions/task/flink.md",sourceDirName:"functions/task",slug:"/functions/task/flink",permalink:"/Taier/docs/functions/task/flink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/task/flink.md",tags:[],version:"current",frontMatter:{title:"Flink Jar",sidebar_label:"Flink Jar"},sidebar:"docs",previous:{title:"\u865a\u8282\u70b9",permalink:"/Taier/docs/functions/task/virtual"},next:{title:"Flink SQL",permalink:"/Taier/docs/functions/task/flink-sql"}},s=[{value:"\u65b0\u5efa\u4efb\u52a1",id:"\u65b0\u5efa\u4efb\u52a1",children:[],level:3},{value:"sidebar_label: Spark Jar",id:"sidebar_label-spark-jar",children:[{value:"\u65b0\u5efa\u4efb\u52a1",id:"\u65b0\u5efa\u4efb\u52a1-1",children:[],level:3}],level:2}],p={toc:s};function f(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u65b0\u5efa\u4efb\u52a1"},"\u65b0\u5efa\u4efb\u52a1"),(0,i.kt)("p",null,"\u9700\u8865\u5145\u5982\u4e0b\u4fe1\u606f\uff1a "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90\uff1a\u57fa\u4e8e\u539f\u751fFlink Java API\u7f16\u5199\u7684Jar\u5305\uff0c\u9700\u8981\u7528\u6237\u63d0\u524d\u4e0a\u4f20\uff08\u4e0a\u4f20\u65b9\u5f0f\u53ef\u53c2\u8003\u8d44\u6e90\u7ba1\u7406\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"mainClass\uff1a\u7528\u6237jar\u5305\u7684\u5165\u53e3\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u53c2\u6570\uff1a\u8bf7\u8f93\u5165\u5bf9\u5e94MainClass\u7684\u5165\u53e3\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u4f8b\u5982 String[] args\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"add-flink-jar",src:r(5956).Z})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"title: Spark Jar"),(0,i.kt)("h2",{id:"sidebar_label-spark-jar"},"sidebar_label: Spark Jar"),(0,i.kt)("h3",{id:"\u65b0\u5efa\u4efb\u52a1-1"},"\u65b0\u5efa\u4efb\u52a1"),(0,i.kt)("p",null,"\u4ea4\u4e92\u65b9\u5f0f\u4e0e\u65b0\u5efaFlink Jar\u4efb\u52a1\u7c7b\u4f3c,Spark\u4efb\u52a1\u9700\u5f15\u7528\u7684\u8d44\u6e90\u5305\uff0c\u9700\u63d0\u524d\u7ecf\u300c\u8d44\u6e90\u7ba1\u7406\u300d\u4e0a\u4f20\u81f3\u5e73\u53f0\u3002\u4e00\u4e2a\u4efb\u52a1\u53ea\u80fd\u5f15\u7528\u4e00\u4e2a\u8d44\u6e90\u5305\u3002\n\uff0c\u4f46\u8fd8\u9700\u8865\u5145\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8d44\u6e90\uff1a\u57fa\u4e8eSpark\u7684MapReduce\u7f16\u7a0b\u63a5\u53e3\uff08Java API\u6216Scala API\uff09\uff0c\u5e76\u6253\u4e3aJar\u5305\uff0c\u63d0\u524d\u5c06\u8d44\u6e90\u5305\u901a\u8fc7\u300c\u8d44\u6e90\u7ba1\u7406\u300d\u6a21\u5757\u4e0a\u4f20\u81f3\u5e73\u53f0\uff0c\u4e4b\u540e\u521b\u5efaSpark\u4efb\u52a1\u65f6\u5f15\u7528\u6b64\u8d44\u6e90\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"mainClass\uff1aJar\u5305\u7684\u5165\u53e3\u7c7b\uff0c\u683c\u5f0f\u4e3a\uff1a org.apache.hadoop.examples \u9700\u586b\u5199\u5b8c\u6574\u7c7b\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u547d\u4ee4\u884c\u53c2\u6570\uff1a\u8bf7\u8f93\u5165\u5bf9\u5e94MainClass\u7684\u5165\u53e3\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u4f8b\u5982 String[] args\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\u79bb\u7ebf\u5f00\u53d1\u5e95\u5c42\u96c6\u6210\u7684Spark\u7248\u672c\u4e3a2.1\uff0c\u9700\u6309\u7167\u6b64\u7248\u672c\u7684Spark API\u7f16\u5199\u4ee3\u7801Spark\u7c7b\u578b\u4efb\u52a1\u652f\u6301\u7f16\u5199Java\u6216Scala\u4ee3\u7801")))))}f.isMDXComponent=!0},5956:function(e,t,r){t.Z=r.p+"assets/images/flink-jar-120584e53f6b8efaee2ba8da3acc2c18.png"}}]);