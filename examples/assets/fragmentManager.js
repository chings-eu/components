import{b as f,d as u}from"./unzipit.module-zU76GtL2.js";import{g as p}from"./lil-gui.module.min-Bc0DeA9g.js";import{C as g,S as w,a as F}from"./simple-camera-DTgrSlth.js";import{W as b,S as x}from"./index-BmMqtw4t.js";import{F as y}from"./index-CDwX07Yd.js";import"./serializer-B7p502p4.js";const h=document.getElementById("container"),a=new g,E=a.get(b),r=E.create();r.scene=new w(a);r.renderer=new x(a,h);r.camera=new F(a);a.init();const L=new f(new u);r.scene.three.add(L);r.camera.controls.setLookAt(12,6,8,0,0,-10);r.scene.setup();const t=new y(a);let m="";async function S(){if(t.groups.size)return;const n=await(await fetch("../../../resources/small.frag")).arrayBuffer(),s=new Uint8Array(n),o=t.load(s);r.scene.three.add(o),m=o.uuid,console.log(o)}function U(e){const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=e.name,document.body.appendChild(n),n.click(),n.remove()}function B(){if(!t.groups.size)return;const e=t.groups.get(m);if(!e)return;const n=t.export(e),s=new Blob([n]),o=new File([s],"small.frag");U(o)}function R(){t.dispose()}function k(){if(t.groups.size)return;const e=document.createElement("input");e.type="file",e.onchange=async()=>{if(!(e.files&&e.files[0]))return;const n=e.files[0];if(n.name.includes(".frag")){const s=URL.createObjectURL(n),d=await(await fetch(s)).arrayBuffer(),l=new Uint8Array(d);t.load(l)}e.remove()},e.click()}const c=new p,i={loadFragments:()=>S(),disposeFragments:()=>R(),exportFragments:()=>B(),importExternalFragment:()=>k()};c.add(i,"loadFragments").name("Load Fragments");c.add(i,"disposeFragments").name("Dispose Fragments");c.add(i,"exportFragments").name("Export Fragments");c.add(i,"importExternalFragment").name("Import External Fragment");
