var D=Object.defineProperty;var S=(d,c,e)=>c in d?D(d,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[c]=e;var o=(d,c,e)=>(S(d,typeof c!="symbol"?c+"":c,e),e);import{L as K,V as v,b as _,I as z,C as I}from"./unzipit.module-zU76GtL2.js";import{S as B}from"./stats.min-GTpOrGrX.js";import{i as U,D as O,k as V,t as P}from"./N8AO-B1xyQodp.js";import{S as j}from"./index-CdwXZj95.js";import{L as m}from"./index-B1tUKpYs.js";import{P as F}from"./index-COtLVqZs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./serializer-B7p502p4.js";import"./stream-serializer-BX3dyAH0.js";import"./types-BHr6GdIp.js";import"./mark-CVC6oroB.js";const b=class b extends U{constructor(e){super(e);o(this,"preview");o(this,"tolerance",.3);o(this,"world");o(this,"onDisposed",new O);o(this,"_enabled",!1);o(this,"_lineMaterial",new K({color:"#DC2626",linewidth:2,depthTest:!1,transparent:!0}));o(this,"create",async()=>{if(!this.preview||!this.enabled||!this.preview.visible)return;const e=this.components.get(m),s=this.preview.startPoint.clone(),t=this.preview.endPoint.clone();e.createOnPoints(s,t)});o(this,"onMouseMove",()=>{if(!this.preview)return;if(!this.world)throw new Error("The edge measurement needs a world to work!");if(!this.enabled){this.preview.visible=!1;return}const t=this.components.get(V).get(this.world).castRay();if(!t||!t.object){this.preview.visible=!1;return}const{object:r,faceIndex:i,point:a}=t;if(i===void 0){this.preview.visible=!1;return}r instanceof _||r instanceof z?this.updateSelection(r,a,i,t.instanceId):this.preview.visible=!1});o(this,"onKeydown",e=>{});this.components.add(b.uuid,this)}set enabled(e){if(this._enabled=e,this.setupEvents(e),e){if(!this.world)throw new Error("The edge measurement needs a world to work!");if(!this.preview){const s=document.createElement("div");s.className="w-2 h-2 bg-red-600 rounded-full",this.preview=new j(this.components,this.world,{start:new v,end:new v,lineMaterial:this._lineMaterial,endpointElement:s}),this.preview.visible=!1}}else this.cancelCreation()}get enabled(){return this._enabled}dispose(){this.preview&&this.preview.dispose(),this._lineMaterial.dispose(),this.setupEvents(!1),this.onDisposed.trigger(),this.onDisposed.reset(),this.components=null}delete(){if(!this.enabled)return;const e=this.components.get(m),s=e.enabled;e.enabled=!0,e.delete(),e.enabled=s}async deleteAll(){await this.components.get(m).deleteAll()}endCreation(){}cancelCreation(){}get(){const s=this.components.get(m).list,t=[];for(const r of s){const i=r.startPoint,a=r.endPoint,l=[i.x,i.y,i.z,a.x,a.y,a.z];t.push(l)}return t}set(e){const s=this.components.get(m);for(const t of e){const[r,i,a,l,w,g]=t,y=new v(r,i,a),u=new v(l,w,g);s.createOnPoints(y,u)}}setupEvents(e){if(!this.world)throw new Error("The edge measurement needs a world to work!");if(!this.world.renderer)throw new Error("The world of the edge measurement needs a renderer!");const t=this.world.renderer.three.domElement.parentElement;e?(t.addEventListener("click",this.create),t.addEventListener("mousemove",this.onMouseMove),window.addEventListener("keydown",this.onKeydown)):(t.removeEventListener("click",this.create),t.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("keydown",this.onKeydown))}updateSelection(e,s,t,r){if(!this.preview||!e.geometry.index)return;const i=P.getFace(e,t,r);if(!i)return;const{edges:a}=i;let l=Number.MAX_VALUE,w=[];for(const u of a){const[T,A]=u.points,E=P.distanceFromPointToLine(s,T,A,!0);E<this.tolerance&&E<l&&(l=E,w=u.points)}if(!w.length){this.preview.visible=!1;return}const[g,y]=w;this.preview.startPoint=g,this.preview.endPoint=y,this.preview.visible=!0}};o(b,"uuid","e7be5749-89df-4514-8d25-83aa38ce12d8");let M=b;const N=document.getElementById("container"),n=new(void 0),k=new(void 0)(n);k.setup();n.scene=k;const h=new F(n,N);n.renderer=h;const C=new(void 0)(n);n.camera=C;n.raycaster=new(void 0)(n);n.init();h.postproduction.enabled=!0;n.scene.get();C.controls.setLookAt(10,10,10,0,0,0);const R=new(void 0)(n,new I(6710886)),X=h.postproduction.customEffects;X.excludedMeshes.push(R.get());const p=new M(n),q=new(void 0)(n),G=await fetch("../../../resources/small.frag"),H=await G.arrayBuffer(),J=new Uint8Array(H);q.load(J);let L;window.addEventListener("keydown",d=>{d.code==="KeyO"?p.delete():d.code==="KeyS"?(L=p.get(),p.deleteAll()):d.code==="KeyL"&&L&&p.set(L)});const x=new(void 0)(n,{name:"Main Toolbar",position:"bottom"});x.addChild(p.uiElement.get("main"));n.ui.addToolbar(x);const f=new B;f.showPanel(2);document.body.append(f.dom);f.dom.style.left="0px";h.onBeforeUpdate.add(()=>f.begin());h.onAfterUpdate.add(()=>f.end());
