import{d as m,a9 as i,b as l}from"./unzipit.module-zU76GtL2.js";import{S as p}from"./stats.min-GTpOrGrX.js";import{C as u,S as f,a as b}from"./simple-camera-DTgrSlth.js";import{W as w,S as y}from"./index-BmMqtw4t.js";import{G as g}from"./index-CEdcpzLw.js";import{C as h}from"./index-RwSthDLf.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C=document.getElementById("container"),o=new u,S=o.get(w),e=S.create();e.scene=new f(o);e.renderer=new y(o,C);e.camera=new b(o);o.init();e.camera.controls.setLookAt(13,13,13,0,0,0);e.scene.setup();const x=o.get(g);x.create(e);const M=new h(o),r=M.create(e);r.threshold=200;r.renderDebugFrame=!0;const s=r.renderer.domElement;document.body.appendChild(s);s.style.position="fixed";s.style.left="0";s.style.bottom="0";s.style.visibility="collapse";function d(n){return Math.random()*n}const c=[],U=new m(2,2,2),v=new i({color:"#6528D7"});function B(){for(const n of c)n.removeFromParent();c.length=0}function E(){B();for(let n=0;n<300;n++){const t=new l(U,v);t.position.x=d(10),t.position.y=d(10),t.position.z=d(10),t.updateMatrix(),e.scene.three.add(t),r.add(t),c.push(t)}}E();r.needsUpdate=!0;e.camera.controls.addEventListener("controlend",()=>{r.needsUpdate=!0});const a=new p;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>a.begin());e.renderer.onAfterUpdate.add(()=>a.end());
