import{d as r}from"./Base64.min.8c55affc.js";import{k as s,w as n,b as _,t as d,o as i,u as p}from"./vendor.cff577af.js";import{_ as u}from"./index.847bbabf.js";const l={font:"mono",larger:""},f={__name:"b64dec",setup(m){const c=p(),t=s({str:""}),a=o=>{try{const e=r(o);return e&&navigator.clipboard.writeText(e),`${e||"> Nothing to do."}`}catch(e){return console.debug(e),"> Decode failed."}};return n(()=>t.str=a(c.hash.replace(/^#*/,""))),(o,e)=>(i(),_("div",l,d(t.str),1))}},v=u(f,[["__scopeId","data-v-061ea11c"]]);export{v as default};
