import{o as h,c as L,r as P,a as N,b as g,d as p,t as _,F as b,e as $,p as k,f as q,g as l,h as I,i as S,j as T}from"./vendor.a1ed760a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:true,subtree:true});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=true;const o=r(n);fetch(n.href,o)}})();const f=(e,s)=>{const r=e.__vccOpts||e;for(const[a,n]of s)r[a]=n;return r},F={};function O(e,s){const r=P("router-view");return h(),L(r)}const B=f(F,[["render",O]]),A="modulepreload",U=function(e){return"/"+e},y={},v=function(s,r,a){if(!r||r.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=U(o),o in y)return;y[o]=true;const c=o.endsWith(".css"),x=c?'[rel="stylesheet"]':"";if(!!a)for(let m=n.length-1;m>=0;m--){const u=n[m];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${x}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":A,c||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),c)return new Promise((m,u)=>{i.addEventListener("load",m),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s()).catch(o=>{const c=new Event("vite:preloadError",{cancelable:true});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o})},C=()=>v(()=>import("./snowfox.2c14b7d8.js"),["_/snowfox.2c14b7d8.js","_/vendor.a1ed760a.js"]),R=[{name:"snowfox",path:"/snowfox",component:C,props:true}],M="/_/logo.8c9f0848.png",V={regular:""},z={__name:"HelloWorld",props:{msg:String},setup(e){const s=N(0);return(r,a)=>(h(),g(b,null,[p("h1",V,_(e.msg),1),p("button",{type:"button",onClick:a[0]||(a[0]=n=>s.value++)},"count: "+_(s.value),1)],64))}};const E=e=>(k("data-v-6c62aa17"),e=e(),q(),e),D={center:""},H=E(()=>p("img",{alt:"logo",src:M},null,-1)),W=E(()=>p("div",{center:"",italic:""},[p("p",null,[l(" Greetings."),p("br"),p("br"),l(" Nothing much here. ")]),p("p",null,[l(" Check out more on GitHub."),p("br"),l(" > "),p("a",{href:"https://github.com/0h7z",target:"_blank"},"github.com/0h7z")]),p("p",{hidden:""},[l(" Also have a look at"),p("br"),p("a",{href:"https://www.heptazhou.com",target:"_blank"},"heptazhou.com"),l(" . ")])],-1)),G={__name:"index",setup(e){return(s,r)=>(h(),g(b,null,[p("div",D,[H,$(z,{msg:"Hello World."})]),W],64))}},j=f(G,[["__scopeId","data-v-6c62aa17"]]);const K={regular:""},J={__name:"Message",props:{msg:String},setup(e){return(s,r)=>(h(),g("div",null,[p("h1",K,_(e.msg),1)]))}},t=f(J,[["__scopeId","data-v-b3b75010"]]),Q=()=>v(()=>import("./b64dec.9c8aa4b6.js"),["_/b64dec.9c8aa4b6.js","_/Base64.min.c2527247.js","_/vendor.a1ed760a.js"]),X=()=>v(()=>import("./b64enc.1dd13a71.js"),["_/b64enc.1dd13a71.js","_/Base64.min.c2527247.js","_/vendor.a1ed760a.js"]);for(const e of R)e.path+="/";const d=(e="/",s="")=>{const r=e.hash;return e=e.fullPath.split("#",1)[0].split("?"),e[0]=e[0].replace(/(^\/*|\/{2,})/g,"/"),s=="d"&&(e[0]=e[0].replace(/\/$/,"")+"/"),s=="f"&&(e[0]=e[0].replace(/\/$/,"")),`${e.join("?")+r}`},Y=[{path:"/:path(/.*|.*//.*)",redirect:e=>d(e)},{path:"/",component:j},{path:"/dec",redirect:e=>d(e,"d")},{path:"/dec/",component:Q},{path:"/enc",redirect:e=>d(e,"d")},{path:"/enc/",component:X},{path:"/snowfox",redirect:e=>d(e,"d")},...R,{path:"/400",component:t,props:{msg:"400 Bad Request"}},{path:"/401",component:t,props:{msg:"401 Unauthorized"}},{path:"/402",component:t,props:{msg:"402 Payment Required"}},{path:"/403",component:t,props:{msg:"403 Forbidden"}},{path:"/404",component:t,props:{msg:"404 Not Found"}},{path:"/405",component:t,props:{msg:"405 Method Not Allowed"}},{path:"/406",component:t,props:{msg:"406 Not Acceptable"}},{path:"/407",component:t,props:{msg:"407 Proxy Authentication Required"}},{path:"/408",component:t,props:{msg:"408 Request Timeout"}},{path:"/409",component:t,props:{msg:"409 Conflict"}},{path:"/410",component:t,props:{msg:"410 Gone"}},{path:"/411",component:t,props:{msg:"411 Length Required"}},{path:"/412",component:t,props:{msg:"412 Precondition Failed"}},{path:"/413",component:t,props:{msg:"413 Payload Too Large"}},{path:"/414",component:t,props:{msg:"414 URI Too Long"}},{path:"/415",component:t,props:{msg:"415 Unsupported Media Type"}},{path:"/416",component:t,props:{msg:"416 Range Not Satisfiable"}},{path:"/417",component:t,props:{msg:"417 Expectation Failed"}},{path:"/418",component:t,props:{msg:"418 I'm a teapot"}},{path:"/421",component:t,props:{msg:"421 Misdirected Request"}},{path:"/422",component:t,props:{msg:"422 Unprocessable Entity"}},{path:"/423",component:t,props:{msg:"423 Locked"}},{path:"/424",component:t,props:{msg:"424 Failed Dependency"}},{path:"/425",component:t,props:{msg:"425 Too Early"}},{path:"/426",component:t,props:{msg:"426 Upgrade Required"}},{path:"/428",component:t,props:{msg:"428 Precondition Required"}},{path:"/429",component:t,props:{msg:"429 Too Many Requests"}},{path:"/431",component:t,props:{msg:"431 Request Header Fields Too Large"}},{path:"/451",component:t,props:{msg:"451 Unavailable For Legal Reasons"}},{path:"/:path(.*)",component:t,props:{msg:"404 Not Found"}}],Z=I({history:S(),routes:Y,strict:true}),w=T(B);w.use(Z);w.mount("#main");export{f as _};
