import{e as a}from"./Base64.min.8c55affc.js";import{k as n,w as s,b as _,t as p,o as i,u as l}from"./vendor.cff577af.js";import{_ as d}from"./index.847bbabf.js";const f={font:"mono",larger:""},u={__name:"b64enc",setup(m){const c=l(),t=n({str:""}),r=o=>{try{const e=a(o).replace(/=*$/,"").replace(/\+/g,"-").replace(/\//g,"_");return e&&navigator.clipboard.writeText(`${location.origin}/dec/#${e}`),`${e||"> Nothing to do."}`}catch(e){return console.debug(e),"> Encode failed."}};return s(()=>t.str=r(c.hash.replace(/^#*/,"")||prompt())),(o,e)=>(i(),_("div",f,p(t.str),1))}},v=d(u,[["__scopeId","data-v-f3807419"]]);export{v as default};
