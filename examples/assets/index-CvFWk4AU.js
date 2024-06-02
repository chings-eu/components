var R=Object.defineProperty;var N=(p,i,t)=>i in p?R(p,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[i]=t;var f=(p,i,t)=>(N(p,typeof i!="symbol"?i+"":i,t),t);import{az as O,a as L,a7 as U,ab as A,a0 as z,an as P,L as j,ao as B,e as E,ap as k,aq as W,a8 as x,k as C,a9 as V,aa as $,N as H,C as J,c as q,ac as X}from"./web-ifc-api-BffFJDIm.js";import{F as Z}from"./index-EnshWEFz.js";import{C as K,E as b,a as Q}from"./index-BSAL1QGz.js";import{I as Y}from"./index-DCGuIamj.js";class tt{constructor(){f(this,"factor",1);f(this,"complement",1)}apply(i){const e=this.getScaleMatrix().multiply(i);i.copy(e)}setUp(i){var s;this.factor=1;const t=this.getLengthUnits(i);if(!t)return;const e=t==null,a=t.Name===void 0||t.Name===null;e||a||(t.Name.value==="FOOT"?this.factor=.3048:((s=t.Prefix)==null?void 0:s.value)==="MILLI"&&(this.complement=.001))}getLengthUnits(i){try{const e=i.GetLineIDsWithType(0,O).get(0),a=i.GetLine(0,e);for(const s of a.Units){if(!s||s.value===null||s.value===void 0)continue;const l=i.GetLine(0,s.value);if(l.UnitType&&l.UnitType.value==="LENGTHUNIT")return l}return null}catch{return console.log("Could not get units"),null}}getScaleMatrix(){const i=this.factor;return new L().fromArray([i,0,0,0,0,i,0,0,0,0,i,0,0,0,0,1])}}class et{constructor(){f(this,"itemsByFloor",{});f(this,"_units",new tt)}setUp(i){this._units.setUp(i),this.cleanUp();try{const t=i.GetLineIDsWithType(0,U),e=new Set,a=i.GetLineIDsWithType(0,A);for(let o=0;o<a.size();o++)e.add(a.get(o));const s=i.GetLineIDsWithType(0,z),l=s.size();for(let o=0;o<l;o++){const m=s.get(o),c=i.GetLine(0,m);if(!c||!c.RelatingObject||!c.RelatedObjects)continue;const n=c.RelatingObject.value,h=c.RelatedObjects;for(const u of h){const d=u.value;e.has(d)&&(this.itemsByFloor[d]=n)}}const g={},r=t.size();for(let o=0;o<r;o++){const m=t.get(o),c=i.GetLine(0,m);if(!c||!c.RelatingStructure||!c.RelatedElements)continue;const n=c.RelatingStructure.value,h=c.RelatedElements;if(e.has(n))for(const u of h){g[n]||(g[n]=[]);const d=u.value;g[n].push(d)}else for(const u of h){const d=u.value;this.itemsByFloor[d]=n}}for(const o in g){const m=this.itemsByFloor[o];if(m!==void 0){const c=g[o];for(const n of c)this.itemsByFloor[n]=m}}for(let o=0;o<l;o++){const m=s.get(o),c=i.GetLine(0,m);if(!c||!c.RelatingObject||!c.RelatedObjects)continue;const n=c.RelatingObject.value,h=c.RelatedObjects;for(const u of h){const d=u.value,I=this.itemsByFloor[n];I!==void 0&&(this.itemsByFloor[d]=I)}}}catch{console.log("Could not get floors.")}}cleanUp(){this.itemsByFloor={}}}class st{constructor(){f(this,"includeProperties",!0);f(this,"optionalCategories",[A]);f(this,"coordinate",!0);f(this,"wasm",{path:"",absolute:!1,logLevel:P.LOG_LEVEL_OFF});f(this,"excludedCategories",new Set);f(this,"saveLocations",!1);f(this,"webIfc",{COORDINATE_TO_ORIGIN:!0,OPTIMIZE_PROFILES:!0});f(this,"autoSetWasm",!0);f(this,"customLocateFileHandler",null)}}class nt{constructor(){f(this,"defLineMat",new j({color:16777215}))}read(i){const t=i.GetAllAlignments(0),e=i.GetAllCrossSections2D(0),a=i.GetAllCrossSections3D(0),s={IfcAlignment:t,IfcCrossSection2D:e,IfcCrossSection3D:a};return this.get(s)}get(i){if(i.IfcAlignment){const t=new Map;for(const e of i.IfcAlignment){const a=new B;a.absolute=this.getCurves(e.curve3D,a),a.horizontal=this.getCurves(e.horizontal,a),a.vertical=this.getCurves(e.vertical,a),t.set(t.size,a)}return{alignments:t,coordinationMatrix:new L}}}getCurves(i,t){const e=[];let a=0;for(const s of i){const l={};if(s.data)for(const n of s.data){const[h,u]=n.split(": "),d=parseFloat(u);l[h]=d||u}const{points:g}=s,r=new Float32Array(g.length*3);for(let n=0;n<g.length;n++){const{x:h,y:u,z:d}=g[n];r[n*3]=h,r[n*3+1]=u,r[n*3+2]=d||0}const o=new E(r,3),m=new k;m.setAttribute("position",o);const c=new W(a,l,t,m,this.defLineMat);e.push(c.curve),a++}return e}}class ot{get(i,t){let e="";const a=i.GetHeaderLine(0,t)||"";if(!a)return e;for(const s of a.arguments)if(s!=null)if(Array.isArray(s))for(const l of s)e+=`${l.value}|`;else e+=`${s.value}|`;return e}}const y=class y extends K{constructor(t){super(t);f(this,"onIfcStartedLoading",new b);f(this,"onSetup",new b);f(this,"onDisposed",new b);f(this,"settings",new st);f(this,"enabled",!0);f(this,"webIfc",new x);f(this,"_material",new C);f(this,"_spatialTree",new et);f(this,"_metaData",new ot);f(this,"_fragmentInstances",new Map);f(this,"_civil",new nt);f(this,"_visitedFragments",new Map);f(this,"_materialT",new C({transparent:!0,opacity:.5}));this.components.add(y.uuid,this),this.settings.excludedCategories.add(V)}dispose(){this.webIfc=null,this.onDisposed.trigger(y.uuid),this.onDisposed.reset()}async setup(t){this.settings={...this.settings,...t},this.settings.autoSetWasm&&await this.autoSetWasm(),this.onSetup.trigger()}async load(t,e=!0){const a=performance.now();this.onIfcStartedLoading.trigger(),await this.readIfcFile(t);const s=await this.getAllGeometries(),g=await this.components.get(Y).export(this.webIfc,0);s.setLocalProperties(g),this.cleanUp();const r=this.components.get(Z);r.groups.set(s.uuid,s);for(const o of s.items)r.list.set(o.id,o),o.mesh.uuid=o.id,o.group=s;return r.onFragmentsLoaded.trigger(s),e&&r.coordinate([s]),console.log(`Streaming the IFC took ${performance.now()-a} ms!`),s}async readIfcFile(t){const{path:e,absolute:a,logLevel:s}=this.settings.wasm;return this.webIfc.SetWasmPath(e,a),await this.webIfc.Init(),s&&this.webIfc.SetLogLevel(s),this.webIfc.OpenModel(t,this.settings.webIfc)}async getAllGeometries(){this._spatialTree.setUp(this.webIfc);const t=this.webIfc.GetIfcEntityList(0),e=new $,{FILE_NAME:a,FILE_DESCRIPTION:s}=X;e.ifcMetadata={name:this._metaData.get(this.webIfc,a),description:this._metaData.get(this.webIfc,s),schema:this.webIfc.GetModelSchema(0)||"IFC2X3",maxExpressID:this.webIfc.GetMaxExpressID(0)};const l=[];for(const r of t){if(!this.webIfc.IsIfcElement(r)&&r!==A||this.settings.excludedCategories.has(r))continue;const o=this.webIfc.GetLineIDsWithType(0,r),m=o.size();for(let c=0;c<m;c++){const n=o.get(c);l.push(n);const h=this._spatialTree.itemsByFloor[n]||0;e.data.set(n,[[],[h,r]])}}this._spatialTree.cleanUp(),this.webIfc.StreamMeshes(0,l,r=>{this.getMesh(r,e)});for(const r of this._visitedFragments){const{index:o,fragment:m}=r[1];e.keyFragments.set(o,m.id)}for(const r of e.items){const o=this._fragmentInstances.get(r.id);if(!o)throw new Error("Fragment not found!");const m=[];for(const[c,n]of o)m.push(n);r.add(m)}const g=this.webIfc.GetCoordinationMatrix(0);return e.coordinationMatrix.fromArray(g),e.civilData=this._civil.read(this.webIfc),e}cleanUp(){this.webIfc=null,this.webIfc=new x,this._visitedFragments.clear(),this._fragmentInstances.clear()}getMesh(t,e){const a=t.geometries.size(),s=t.expressID;for(let l=0;l<a;l++){const g=t.geometries.get(l),{x:r,y:o,z:m,w:c}=g.color,n=c!==1,{geometryExpressID:h}=g,u=`${h}-${n}`;if(!this._visitedFragments.has(u)){const w=this.getGeometry(this.webIfc,h),M=n?this._materialT:this._material,G=new H(w,M,1);e.add(G.mesh),e.items.push(G);const T=this._visitedFragments.size;this._visitedFragments.set(u,{index:T,fragment:G})}const d=new J().setRGB(r,o,m,"srgb"),I=new L;I.fromArray(g.flatTransformation);const D=this._visitedFragments.get(u);if(D===void 0)throw new Error("Error getting geometry data for streaming!");const S=e.data.get(s);if(!S)throw new Error("Data not found!");S[0].push(D.index);const{fragment:F}=D;this._fragmentInstances.has(F.id)||this._fragmentInstances.set(F.id,new Map);const v=this._fragmentInstances.get(F.id);if(!v)throw new Error("Instances not found!");if(v.has(s)){const w=v.get(s);if(!w)throw new Error("Instance not found!");w.transforms.push(I),w.colors&&w.colors.push(d)}else v.set(s,{id:s,transforms:[I],colors:[d]})}}getGeometry(t,e){const a=t.GetGeometry(0,e),s=t.GetIndexArray(a.GetIndexData(),a.GetIndexDataSize()),l=t.GetVertexArray(a.GetVertexData(),a.GetVertexDataSize()),g=new Float32Array(l.length/2),r=new Float32Array(l.length/2);for(let n=0;n<l.length;n+=6)g[n/2]=l[n],g[n/2+1]=l[n+1],g[n/2+2]=l[n+2],r[n/2]=l[n+3],r[n/2+1]=l[n+4],r[n/2+2]=l[n+5];const o=new q,m=new E(g,3),c=new E(r,3);return o.setAttribute("position",m),o.setAttribute("normal",c),o.setIndex(Array.from(s)),a.delete(),o}async autoSetWasm(){const t=await fetch(`https://unpkg.com/openbim-components@${Q.release}/package.json`);if(!t.ok){console.warn("Couldn't get openbim-components package.json. Set wasm settings manually.");return}const e=await t.json();if(!("web-ifc"in e.peerDependencies))console.warn("Couldn't get web-ifc from peer dependencies in openbim-components. Set wasm settings manually.");else{const a=e.peerDependencies["web-ifc"];this.settings.wasm.path=`https://unpkg.com/web-ifc@${a}/`,this.settings.wasm.absolute=!0}}};f(y,"uuid","a659add7-1418-4771-a0d6-7d4d438e4624");let _=y;export{_ as I};
