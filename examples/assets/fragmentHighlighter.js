import{D as b,A as y,C,M}from"./unzipit.module-zU76GtL2.js";import{S as E}from"./stats.min-GTpOrGrX.js";import{g as B}from"./lil-gui.module.min-Bc0DeA9g.js";import"./N8AO-B1xyQodp.js";import{P as D}from"./index-COtLVqZs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./serializer-B7p502p4.js";import"./stream-serializer-BX3dyAH0.js";const s=document.getElementById("container"),e=new(void 0),c=new(void 0)(e);c.setup();e.scene=c;const o=new D(e,s);e.renderer=o;const r=new(void 0)(e);e.camera=r;e.raycaster=new(void 0)(e);e.init();o.postproduction.enabled=!0;const m=e.scene.get();r.controls.setLookAt(10,10,10,0,0,0);const l=new b;l.position.set(5,10,3);l.intensity=.5;m.add(l);const u=new y;u.intensity=.5;m.add(u);const O=new(void 0)(e,new C(6710886)),S=O.get(),I=o.postproduction.customEffects;I.excludedMeshes.push(S);const L=new(void 0)(e),t=new(void 0)(e),v=await fetch("../../../resources/small.frag"),A=await v.arrayBuffer(),k=new Uint8Array(A);L.load(k);t.updateHighlight();o.postproduction.customEffects.outlineEnabled=!0;t.outlineEnabled=!0;const h=new M({color:"#BCF124",depthTest:!1,opacity:.8,transparent:!0});t.add("default",[h]);t.outlineMaterial.color.set(15794042);let a;const f={value:!0};async function x(){const d=await t.highlight("default",f.value);if(d){a={};for(const p of d.fragments){const w=p.id;a[w]=[d.id]}}}s.addEventListener("click",()=>x());function F(){a!==void 0&&t.highlightByID("default",a)}const i=new E;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";o.onBeforeUpdate.add(()=>i.begin());o.onAfterUpdate.add(()=>i.end());const g={highlight:"Click",highlightOnID:()=>F()},n=new B;n.add(g,"highlight");n.add(g,"highlightOnID").name("Select last selection");n.add(f,"value").name("Single selection");n.add(t,"zoomToSelection").name("Zoom to selection");n.add(t,"fillEnabled").name("Fill enabled");n.add(t,"outlineEnabled").name("Outline enabled");n.addColor(h,"color").name("Fill color");n.addColor(t.outlineMaterial,"color").name("Outline color");n.add(t.outlineMaterial,"opacity").name("Outline width").min(.3).max(1).step(.05);
