import{b as u,B as p,M as i}from"./web-ifc-api-BC8YMRiS.js";import{S as w}from"./stats.min-GTpOrGrX.js";import{f as b,p as f,s as y,i as g,k as x,H as M}from"./index-b4ozRbQy.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h=document.getElementById("container"),o=new b,B=o.get(f),e=B.create();e.scene=new y(o);e.renderer=new g(o,h);e.camera=new x(o);o.init();e.camera.controls.setLookAt(10,10,10,0,0,0);e.scene.setup();e.scene.three.background=null;const d=new u({color:"#6528D7"}),k=new u({color:"#BCF124"}),m=new p(3,3,3),c=new i(m,d),r=new i(m,d),s=new i(m,d);e.scene.three.add(c,r,s);const S=[c,r,s];r.position.x=5;s.position.x=-5;const t=Math.PI/180;function j(){c.rotation.x+=t,c.rotation.y+=t,r.rotation.x+=t,r.rotation.z+=t,s.rotation.y+=t,s.rotation.z+=t}e.renderer.onBeforeUpdate.add(j);const z=o.get(M),I=z.get(e);let l=null;window.onmousemove=()=>{const a=I.castRay(S);l&&(l.material=d),!(!a||!(a.object instanceof i))&&(a.object.material=k,l=a.object)};const n=new w;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
