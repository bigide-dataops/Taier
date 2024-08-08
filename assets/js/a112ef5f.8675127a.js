"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[4935],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Flink SQL",sidebar_label:"Flink SQL"},s=void 0,p={unversionedId:"functions/task/flink-sql",id:"functions/task/flink-sql",title:"Flink SQL",description:"Flink SQL \u4efb\u52a1\u63d0\u4f9b\u4e24\u79cd\u6a21\u5f0f\u8fdb\u884c\u9009\u62e9",source:"@site/docs/functions/task/flink-sql.md",sourceDirName:"functions/task",slug:"/functions/task/flink-sql",permalink:"/Taier/docs/functions/task/flink-sql",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/task/flink-sql.md",tags:[],version:"current",frontMatter:{title:"Flink SQL",sidebar_label:"Flink SQL"},sidebar:"docs",previous:{title:"Flink Jar",permalink:"/Taier/docs/functions/task/flink"},next:{title:"Spark SQL",permalink:"/Taier/docs/functions/task/spark-sql"}},c=[{value:"\u5411\u5bfc\u6a21\u5f0f",id:"\u5411\u5bfc\u6a21\u5f0f",children:[{value:"\u65b0\u5efa\u4efb\u52a1",id:"\u65b0\u5efa\u4efb\u52a1",children:[],level:3},{value:"\u914d\u7f6e\u6e90\u8868",id:"\u914d\u7f6e\u6e90\u8868",children:[],level:3},{value:"\u914d\u7f6e\u7ed3\u679c\u8868",id:"\u914d\u7f6e\u7ed3\u679c\u8868",children:[],level:3},{value:"\u7f16\u5199SQL",id:"\u7f16\u5199sql",children:[],level:3}],level:2},{value:"\u811a\u672c\u6a21\u5f0f",id:"\u811a\u672c\u6a21\u5f0f",children:[{value:"\u811a\u672c\u793a\u4f8b",id:"\u811a\u672c\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u8bed\u6cd5\u6821\u9a8c",id:"\u8bed\u6cd5\u6821\u9a8c",children:[],level:2},{value:"\u6a21\u5f0f\u5207\u6362",id:"\u6a21\u5f0f\u5207\u6362",children:[],level:2},{value:"\u4efb\u52a1\u8fd0\u7ef4",id:"\u4efb\u52a1\u8fd0\u7ef4",children:[],level:2},{value:"\u6570\u636e\u6e90\u652f\u6301",id:"\u6570\u636e\u6e90\u652f\u6301",children:[],level:2}],m={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flink SQL \u4efb\u52a1\u63d0\u4f9b\u4e24\u79cd\u6a21\u5f0f\u8fdb\u884c\u9009\u62e9"),(0,r.kt)("h2",{id:"\u5411\u5bfc\u6a21\u5f0f"},"\u5411\u5bfc\u6a21\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b\u5411\u5bfc\u5f0f\u7684\u5f00\u53d1\u5f15\u5bfc\uff0c\u901a\u8fc7\u53ef\u89c6\u5316\u7684\u586b\u5199\u548c\u4e0b\u4e00\u6b65\u7684\u5f15\u5bfc\uff0c\u5e2e\u52a9\u5feb\u901f\u5b8c\u6210\u6570\u636e\u4efb\u52a1\u7684\u914d\u7f6e\u5de5\u4f5c\u3002\u5b66\u4e60\u6210\u672c\u4f4e\uff0c\u4f46\u65e0\u6cd5\u4f7f\u7528\u5230\u4e00\u4e9b\u9ad8\u7ea7\u529f\u80fd")),(0,r.kt)("h3",{id:"\u65b0\u5efa\u4efb\u52a1"},"\u65b0\u5efa\u4efb\u52a1"),(0,r.kt)("p",null,'\u8fdb\u5165"\u5f00\u53d1\u76ee\u5f55"\u83dc\u5355\uff0c\u70b9\u51fb"\u65b0\u5efa\u4efb\u52a1"\u6309\u94ae\uff0c\u5e76\u586b\u5199\u65b0\u5efa\u4efb\u52a1\u5f39\u51fa\u6846\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u914d\u7f6e\u9879\u8bf4\u660e\uff1a'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u540d\u79f0\uff1a\u9700\u8f93\u5165\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c\u4e0d\u8d85\u8fc764\u4e2a\u5b57\u7b26"),(0,r.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u7c7b\u578b\uff1a\u9009\u62e9Flink SQL"),(0,r.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u4f4d\u7f6e\uff1a\u5728\u9875\u9762\u5de6\u4fa7\u7684\u4efb\u52a1\u5b58\u50a8\u7ed3\u6784\u4e2d\u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u63cf\u8ff0\uff1a\u957f\u5ea6\u4e0d\u8d85\u8fc7200\u4e2a\u7684\u4efb\u610f\u5b57\u7b26"),(0,r.kt)("li",{parentName:"ol"},'\u70b9\u51fb"\u4fdd\u5b58"\uff0c\u5f39\u7a97\u5173\u95ed\uff0c\u5373\u5b8c\u6210\u4e86\u65b0\u5efa\u4efb\u52a1')),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6e90\u8868"},"\u914d\u7f6e\u6e90\u8868"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u6dfb\u52a0\u6e90\u8868\uff0c\u82e5\u9700\u8981\u6dfb\u52a0\u591a\u8def",(0,r.kt)("inlineCode",{parentName:"li"},"Kafka"),"\u4f5c\u4e3a\u8f93\u5165\u65f6\uff0c\u53ef\u7ee7\u7eed\u5728\u4e0b\u9762\u7684\u6a21\u5757\u70b9\u51fb\u6dfb\u52a0"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u6570\u636e\u6e90\u7c7b\u578b\uff1a\u76ee\u524d\u53ea\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"Kafka")),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"li"},"Kafka Topic")),(0,r.kt)("li",{parentName:"ol"},"\u6620\u5c04\u8868\uff1a\u7531",(0,r.kt)("inlineCode",{parentName:"li"},"Kafka Topi"),"c\u5185\u7684\u6570\u636e\u6620\u5c04\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"Flink"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u8868"),"\uff0c\u9700\u5728\u6b64\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"Flink"),"\u7684\u8868\u540d,\u4ece\u800c\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"Flink"),"\u4e2d\u4ee5SQL\u7684\u5f62\u5f0f\u5904\u7406\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u65f6\u95f4\u7279\u5f81\uff1aFlink\u5206\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"ProcTime"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTime"),"\u4e24\u79cd\u65f6\u95f4\u7279\u5f81  ",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"ProcTime:\u5904\u7406\u65f6\u95f4\u6307\u6267\u884c\u5bf9\u5e94Operation\u7684\u8bbe\u5907\u7684\u7cfb\u7edf\u65f6\u95f4",(0,r.kt)("br",{parentName:"p"}),"\n","EventTime:\u4e8b\u4ef6\u65f6\u95f4\u662f\u6bcf\u4e2a\u5355\u72ec\u4e8b\u4ef6\u5728\u5b83\u7684\u751f\u4ea7\u8bbe\u5907\u4e0a\u53d1\u751f\u7684\u65f6\u95f4\uff0c\u82e5\u9009\u62e9\u4e86EventTime\uff0c\u5219\u8fd8\u9700\u8865\u5145\u65f6\u95f4\u5217\u3001\u504f\u79fb\u91cf\u548c\u65f6\u533a\u4fe1\u606f\uff0c\u8fd9\u662fFlink Watermark\u673a\u5236\u7684\u8981\u6c42"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"\u65f6\u95f4\u5217\u5fc5\u987b\u662f\u6620\u5c04\u8868\u4e2d\u5df2\u58f0\u660e\u7684\u4e00\u5217\uff08\u5f53\u524d\u4ec5\u652f\u6301\u4e3aTimestamp\u7c7b\u578b\uff09\uff0c\u542b\u4e49\u662f\u57fa\u4e8e\u8be5\u5217\u751f\u6210Watermark\uff0c\u5e76\u4e14\u6807\u8bc6\u8be5\u5217\u4e3aEvent Time\u5217\uff0c\u53ef\u4ee5\u5728\u540e\u7eedQuery\u4e2d\u7528\u6765\u5b9a\u4e49\u7a97\u53e3",(0,r.kt)("br",{parentName:"p"}),"\n","\u504f\u79fb\u91cf\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u542b\u4e49\u4e3aWatermark\u503c\u4e0eEvent time\u503c\u7684\u504f\u79fb\u91cf\u3002\u901a\u5e38\u4e00\u6761\u8bb0\u5f55\u4e2d\u7684\u67d0\u4e2a\u5b57\u6bb5\u5c31\u4ee3\u8868\u4e86\u8be5\u8bb0\u5f55\u7684\u53d1\u751f\u65f6\u95f4",(0,r.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7\u914d\u7f6e\u4f5c\u4e1a\u7684\u65f6\u533a\u8c03\u6574\u65f6\u95f4\u7c7b\u578b\u6570\u636e\u7684\u8f93\u51fa\u7ed3\u679c\u3002\u9ed8\u8ba4\u65f6\u533a\u4e3a\u4e1c\u516b\u533a\uff08Asia/Shanghai)  "))))),(0,r.kt)("li",{parentName:"ol"},"\u5e76\u884c\u5ea6\uff1a\u7b97\u5b50\u7684\u5e76\u53d1\u6570\uff0c\u6307\u7684\u662fFlink\u96c6\u7fa4\u7684Task Slot\u7684\u6570\u91cf")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-source",src:n(7525).Z})),(0,r.kt)("h3",{id:"\u914d\u7f6e\u7ed3\u679c\u8868"},"\u914d\u7f6e\u7ed3\u679c\u8868"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb \u6dfb\u52a0\u7ed3\u679c\u8868 \uff0c\u82e5\u9700\u8981\u6dfb\u52a0\u591a\u8def\u8f93\u51fa\u65f6\uff0c\u53ef\u7ee7\u7eed\u5728\u4e0b\u9762\u7684\u6a21\u5757\u70b9\u51fb \u6dfb\u52a0\u7ed3\u679c\u8868"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b58\u50a8\u7c7b\u578b\uff1a\u76ee\u524d\u53ef\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"li"},"MySQL"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"HBase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"ElasticSearch"),"  ",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"   \u82e5\u9009\u62e9\u4e86MySQL\uff0c\u9700\u9009\u62e9MySQL\u4e2d\u7684\u4e00\u5f20\u8868",(0,r.kt)("br",{parentName:"p"}),"\n","\u82e5\u9009\u62e9\u4e86HBase\uff0c\u9700\u9009\u62e9HBase\u4e2d\u7684\u4e00\u5f20\u8868\u53carowkey",(0,r.kt)("br",{parentName:"p"}),"\n","\u82e5\u9009\u62e9\u4e86ElasticSearch\uff0c\u9700\u9009\u62e9ElasticSearch\u4e2d\u7684\u7d22\u5f15\u3001id  ")))),(0,r.kt)("li",{parentName:"ol"},"\u6620\u5c04\u8868\uff1a\u7531",(0,r.kt)("inlineCode",{parentName:"li"},"Kafka Topic"),"\u5185\u7684\u6570\u636e\u6620\u5c04\u5230Flink\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u8868"),"\uff0c\u9700\u5728\u6b64\u8f93\u5165Flink\u7684\u8868\u540d,\u4ece\u800c\u5728Flink\u4e2d\u4ee5SQL\u7684\u5f62\u5f0f\u5904\u7406\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\u4fe1\u606f\uff1a\u5373Flink\u4e2d\u6b64\u8868\u5bf9\u5e94\u7684\u5b57\u6bb5\u4fe1\u606f\u548c\u7c7b\u578b\u3002\u8f93\u5165\u6a21\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"}," <\u6e90\u8868\u5b57\u6bb5\u540d><\u5b57\u6bb5\u7c7b\u578b>AS <\u6e90\u8868\u6620\u5c04\u5b57\u6bb5\u540d>")," \uff0c\u591a\u5b57\u6bb5\u4fe1\u606f\u901a\u8fc7\u56de\u8f66\u8fdb\u884c\u5206\u5272"),(0,r.kt)("li",{parentName:"ol"},"\u5e76\u884c\u5ea6\uff1a\u7b97\u5b50\u7684\u5e76\u53d1\u6570\uff0c\u6307\u7684\u662fFlink\u96c6\u7fa4\u7684Task Slot\u7684\u6570\u91cf"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u8f93\u51fa\u65f6\u95f4:\u7ed3\u679c\u8868\u8f93\u51fa\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4efb\u52a1\u8fd0\u884c\u540e\u6bcf\u6ee1\u8db3\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u5c31\u8f93\u51fa\u4e00\u6b21\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u8f93\u51fa\u6761\u6570:\u7ed3\u679c\u8868\u8f93\u51fa\u6570\u636e\u7684\u6761\u6570\u95f4\u9694\uff0c\u4efb\u52a1\u8fd0\u884c\u540e\u6bcf\u6ee1\u8db3\u6307\u5b9a\u6761\u6570\u5c31\u8f93\u51fa\u4e00\u6b21\u6570\u636e")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-source",src:n(6151).Z})),(0,r.kt)("h3",{id:"\u7f16\u5199sql"},"\u7f16\u5199SQL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8f91sql \u4fdd\u5b58\uff0c\u53ef\u81f3\u4efb\u52a1\u8fd0\u7ef4\u9875\u9762\u8fdb\u884c\u4efb\u52a1\u64cd\u4f5c")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-source",src:n(7212).Z})),(0,r.kt)("h2",{id:"\u811a\u672c\u6a21\u5f0f"},"\u811a\u672c\u6a21\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u76f4\u63a5\u7f16\u5199SQL\u811a\u672c\u6765\u5b8c\u6210\u6570\u636e\u5f00\u53d1\uff0c\u9002\u5408\u9ad8\u7ea7\u7528\u6237\uff0c\u5b66\u4e60\u6210\u672c\u8f83\u9ad8\u3002\u811a\u672c\u6a21\u5f0f\u53ef\u4ee5\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7075\u6d3b\u7684\u80fd\u529b\uff0c\u505a\u7cbe\u7ec6\u5316\u7684\u914d\u7f6e\u7ba1\u7406")),(0,r.kt)("h3",{id:"\u811a\u672c\u793a\u4f8b"},"\u811a\u672c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE source\n(\n    id        INT,\n    name      STRING,\n    money     DECIMAL(32, 2),\n    dateone   timestamp,\n    age       bigint,\n    datethree timestamp,\n    datesix   timestamp(6),\n    datenigth timestamp(9),\n    dtdate    date,\n    dttime    time\n) WITH (\n      'connector' = 'stream-x',\n      'number-of-rows' = '10', -- \u8f93\u5165\u6761\u6570\uff0c\u9ed8\u8ba4\u65e0\u9650\n      'rows-per-second' = '1' -- \u6bcf\u79d2\u8f93\u5165\u6761\u6570\uff0c\u9ed8\u8ba4\u4e0d\u9650\u5236\n      );\n\nCREATE TABLE sink\n(\n    id        INT,\n    name      STRING,\n    money     DECIMAL(32, 2),\n    dateone   timestamp,\n    age       bigint,\n    datethree timestamp,\n    datesix   timestamp(6),\n    datenigth timestamp(9),\n    dtdate    date,\n    dttime    time\n) WITH (\n      'connector' = 'stream-x',\n      'print' = 'true'\n      );\n\ninsert into sink\nselect *\nfrom source;\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u811a\u672c\u6a21\u5f0fsql\u8bed\u6cd5 \u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/chunjun/blob/master/docs/quickstart.md"},(0,r.kt)("strong",{parentName:"a"},"chunjun"))))),(0,r.kt)("h2",{id:"\u8bed\u6cd5\u6821\u9a8c"},"\u8bed\u6cd5\u6821\u9a8c"),(0,r.kt)("p",null,"\u5728\u4efb\u52a1\u63d0\u4ea4\u8fd0\u884c\u524d \u68c0\u9a8csql\u8bed\u6cd5\u7684\u6b63\u786e\u6027  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-source",src:n(2621).Z})),(0,r.kt)("h2",{id:"\u6a21\u5f0f\u5207\u6362"},"\u6a21\u5f0f\u5207\u6362"),(0,r.kt)("p",null,"\u5f53\u5411\u5bfc\u6a21\u5f0f\u6ee1\u8db3\u4e0d\u4e86\u9700\u6c42\u7684\u65f6\u5019 \u53ef\u4ee5\u8f6c\u6362\u4e3a\u811a\u672c\u6a21\u5f0f  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-source",src:n(6243).Z}),"\n",(0,r.kt)("img",{alt:"add-source",src:n(8701).Z})),(0,r.kt)("h2",{id:"\u4efb\u52a1\u8fd0\u7ef4"},"\u4efb\u52a1\u8fd0\u7ef4"),(0,r.kt)("p",null,"\u5728\u5b9e\u65f6\u8fd0\u7ef4\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u8fdb\u884c\u63d0\u4ea4\u3001\u505c\u6b62\u3001\u7eed\u8dd1\u7b49\u64cd\u4f5c"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7eed\u8dd1\uff1a\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5",(0,r.kt)("br",{parentName:"p"}),"\n","1.\u901a\u8fc7\u6307\u5b9a\u6587\u4ef6\u6062\u590d\u5e76\u7eed\u8dd1",(0,r.kt)("br",{parentName:"p"}),"\n","2.\u9009\u62e9 CheckPoint\u6216SavePoint \u7eed\u8dd1"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u4f1a\u6839\u636e\u73af\u5883\u53c2\u6570\u4e2dexecution.checkpointing.interval\u4fdd\u5b58CheckPoint")))),(0,r.kt)("h2",{id:"\u6570\u636e\u6e90\u652f\u6301"},"\u6570\u636e\u6e90\u652f\u6301"),(0,r.kt)("p",null,"\u76ee\u524d\u5411\u5bfc\u6a21\u5f0f\u4ec5\u652f\u6301",(0,r.kt)("br",{parentName:"p"}),"\n","\u6e90\u8868\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),(0,r.kt)("br",{parentName:"p"}),"\n","\u7ed3\u679c\u8868: ",(0,r.kt)("inlineCode",{parentName:"p"},"hbase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"es"),(0,r.kt)("br",{parentName:"p"}),"\n","\u7ef4\u8868\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),"  "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Flink SQL \u4f9d\u8d56\u63a7\u5236\u53f0 Flink\u7ec4\u4ef6 \u8fd0\u884c\u6570\u636e\u540c\u6b65\u524d\u8bf7\u786e\u4fdd\u5bf9\u5e94\u7ec4\u4ef6\u914d\u7f6e\u6b63\u786e"))))}d.isMDXComponent=!0},8701:function(e,t,n){t.Z=n.p+"assets/images/flink-script-convert-result-e3b25269f3ea53582ab323859ff0fd62.png"},6243:function(e,t,n){t.Z=n.p+"assets/images/flink-script-convert-3d7c4a80b8b99c7caf31fe6cd8187768.png"},2621:function(e,t,n){t.Z=n.p+"assets/images/flink-sql-grammy-check-f8297a2b116396f4db3f6c9ef2df568f.png"},6151:function(e,t,n){t.Z=n.p+"assets/images/flink-sql-sink-table-3f07f0fb76f517ad1c5e92cf72228b76.png"},7525:function(e,t,n){t.Z=n.p+"assets/images/flink-sql-source-table-f8c96486dbdad6404ae9d684deabd003.png"},7212:function(e,t,n){t.Z=n.p+"assets/images/flink-sql-b43f357e690d75d25d96bcd79ebe0ff7.png"}}]);