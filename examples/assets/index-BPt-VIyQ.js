var l=Object.defineProperty;var m=(e,s,t)=>s in e?l(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>(m(e,typeof s!="symbol"?s+"":s,t),t);import{aj as S,ak as F,al as L,i as T,ab as h}from"./web-ifc-api-BC8YMRiS.js";import{G as E}from"./ifc-geometry-types-C3SKrzrZ.js";import{C as D}from"./index-BZiAUaTo.js";const o=class o extends D{constructor(t){super(t);r(this,"enabled",!0);t.add(o.uuid,this)}async export(t,i,f=!1,I=!0){const n={},c=new Set(t.GetIfcEntityList(i)),p=new Set([S,F,L,T,h]);for(const a of p)c.add(a);for(const a of c){if(E.has(a))continue;const C=p.has(a)&&I,y=t.GetLineIDsWithType(i,a);for(const G of y){const u=t.GetLine(0,G,C,f);n[u.expressID]=u}}return n}};r(o,"uuid","b32c4332-cd67-436e-ba7f-196646c7a635");let d=o;export{d as I};