import{d as m,ac as i,b as l}from"./unzipit.module-RGQJWpcx.js";import{S as p}from"./stats.min-GTpOrGrX.js";import{a as u,S as f,b}from"./simple-camera-DRqyjNwW.js";import{W as w,S as y}from"./index-Ct1Nh5V3.js";import{G as g}from"./index-B5YESdpL.js";import{C as h}from"./index-Bs1Wt2-n.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=document.getElementById("container"),o=new u,C=o.get(w),e=C.create();e.scene=new f(o);e.renderer=new y(o,S);e.camera=new b(o);o.init();e.camera.controls.setLookAt(13,13,13,0,0,0);e.scene.setup();const x=o.get(g);x.create(e);const M=new h(o),r=M.create(e);r.threshold=200;r.renderDebugFrame=!0;const s=r.renderer.domElement;document.body.appendChild(s);s.style.position="fixed";s.style.left="0";s.style.bottom="0";s.style.visibility="collapse";function d(n){return Math.random()*n}const c=[],U=new m(2,2,2),v=new i({color:"#6528D7"});function B(){for(const n of c)n.removeFromParent();c.length=0}function E(){B();for(let n=0;n<300;n++){const t=new l(U,v);t.position.x=d(10),t.position.y=d(10),t.position.z=d(10),t.updateMatrix(),e.scene.three.add(t),r.add(t),c.push(t)}}E();r.needsUpdate=!0;e.camera.controls.addEventListener("controlend",()=>{r.needsUpdate=!0});const a=new p;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>a.begin());e.renderer.onAfterUpdate.add(()=>a.end());
