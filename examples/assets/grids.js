import{M as o,B as s}from"./web-ifc-api-BC8YMRiS.js";import{f as r,p as a,s as d,i as c,k as i,N as m}from"./index-b4ozRbQy.js";const l=document.getElementById("container"),n=new r,p=n.get(a),e=p.create();e.scene=new d(n);e.renderer=new c(n,l);e.camera=new i(n);n.init();const w=new o(new s);e.scene.three.add(w);e.scene.three.background=null;const g=n.get(m),f=g.create(e);console.log(f);const t=new Stats;t.showPanel(2);document.body.append(t.dom);t.dom.style.left="0px";t.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>t.begin());e.renderer.onAfterUpdate.add(()=>t.end());
