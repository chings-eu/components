import{e as d,d as p,b as c}from"./unzipit.module-RGQJWpcx.js";import{a as u,S as w,b}from"./simple-camera-DRqyjNwW.js";import{R as f}from"./index-YoZ91iyq.js";import{W as S,S as y}from"./index-Ct1Nh5V3.js";const g=document.getElementById("container"),t=new u,x=t.get(S),e=x.create();e.scene=new w(t);e.renderer=new y(t,g);e.camera=new b(t);t.init();e.camera.controls.setLookAt(10,10,10,0,0,0);e.scene.setup();const i=new d({color:"#6528D7"}),M=new d({color:"#BCF124"}),l=new p(3,3,3),a=new c(l,i),n=new c(l,i),r=new c(l,i);e.scene.three.add(a,n,r);const h=[a,n,r];n.position.x=5;r.position.x=-5;const o=Math.PI/180;function B(){a.rotation.x+=o,a.rotation.y+=o,n.rotation.x+=o,n.rotation.z+=o,r.rotation.y+=o,r.rotation.z+=o}e.renderer.onBeforeUpdate.add(B);const C=t.get(f),R=C.get(e);let m=null;window.onmousemove=()=>{const s=R.castRay(h);m&&(m.material=i),!(!s||!(s.object instanceof c))&&(s.object.material=M,m=s.object)};
