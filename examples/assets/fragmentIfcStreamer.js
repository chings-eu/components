var Ee=Object.defineProperty;var _e=(d,e,t)=>e in d?Ee(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var w=(d,e,t)=>(_e(d,typeof e!="symbol"?e+"":e,t),t);import{V as x,v as Te,j as De,T as Ge,x as V,f as B,y as be,z as Pe,E as Ae,w as Ce,H as Ve}from"./unzipit.module-RGQJWpcx.js";import{S as Le}from"./stats.min-GTpOrGrX.js";import{g as ke}from"./lil-gui.module.min-Bc0DeA9g.js";import{C as Ne,E as H,a as Ue,S as qe,b as Be}from"./simple-camera-DRqyjNwW.js";import{W as He,S as je}from"./index-Ct1Nh5V3.js";import{G as Oe}from"./index-B5YESdpL.js";import{S as Re,F as We}from"./serializer-1xMmy3Qo.js";import{S as $e}from"./stream-serializer-CZnUXd9N.js";import{I as Je,S as Xe,a as Ke,C as Qe}from"./ifc-metadata-reader-BLTgeUo2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee=0,Ye=1,Ze=new x,Se=new Te,re=new De,ve=new x,Z=new Ge;class et{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fe,this.unassigned=new Fe,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.vertices.push(new tt(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(s){const i=s.geometry;if(i!==void 0){const n=i.attributes.position;if(n!==void 0)for(let a=0,o=n.count;a<o;a++){const c=new x;c.fromBufferAttribute(n,a).applyMatrix4(s.matrixWorld),t.push(c)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let s=0,i=t.length;s<i;s++)if(t[s].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const s=this.faces;let i=-1/0,n=1/0;for(let a=0,o=s.length;a<o;a++){const c=s[a],r=c.distanceToPoint(e.origin),f=c.normal.dot(e.direction);if(r>0&&f>=0)return null;const u=f!==0?-r/f:0;if(!(u<=0)&&(f>0?n=Math.min(u,n):i=Math.max(u,i),i>n))return null}return i!==-1/0?e.at(i,t):e.at(n,t),t}intersectsRay(e){return this.intersectRay(e,Ze)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let s=e.outside;for(;s.next!==null&&s.next.face===e;)s=s.next;return this.assigned.removeSubList(t,s),t.prev=s.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const s=this.removeAllVerticesFromFace(e);if(s!==void 0)if(t===void 0)this.unassigned.appendChain(s);else{let i=s;do{const n=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=n}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const s=t.next;let i=this.tolerance,n=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===ee){const c=o.distanceToPoint(t.point);if(c>i&&(i=c,n=o),i>1e3*this.tolerance)break}}n!==null&&this.addVertexToFace(t,n),t=s}while(t!==null)}return this}computeExtremes(){const e=new x,t=new x,s=[],i=[];for(let n=0;n<3;n++)s[n]=i[n]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let n=0,a=this.vertices.length;n<a;n++){const o=this.vertices[n],c=o.point;for(let r=0;r<3;r++)c.getComponent(r)<e.getComponent(r)&&(e.setComponent(r,c.getComponent(r)),s[r]=o);for(let r=0;r<3;r++)c.getComponent(r)>t.getComponent(r)&&(t.setComponent(r,c.getComponent(r)),i[r]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:s,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),s=t.min,i=t.max;let n=0,a=0;for(let h=0;h<3;h++){const l=i[h].point.getComponent(h)-s[h].point.getComponent(h);l>n&&(n=l,a=h)}const o=s[a],c=i[a];let r,f;n=0,Se.set(o.point,c.point);for(let h=0,l=this.vertices.length;h<l;h++){const m=e[h];if(m!==o&&m!==c){Se.closestPointToPoint(m.point,!0,ve);const p=ve.distanceToSquared(m.point);p>n&&(n=p,r=m)}}n=-1,re.setFromCoplanarPoints(o.point,c.point,r.point);for(let h=0,l=this.vertices.length;h<l;h++){const m=e[h];if(m!==o&&m!==c&&m!==r){const p=Math.abs(re.distanceToPoint(m.point));p>n&&(n=p,f=m)}}const u=[];if(re.distanceToPoint(f.point)<0){u.push(E.create(o,c,r),E.create(f,c,o),E.create(f,r,c),E.create(f,o,r));for(let h=0;h<3;h++){const l=(h+1)%3;u[h+1].getEdge(2).setTwin(u[0].getEdge(l)),u[h+1].getEdge(1).setTwin(u[l+1].getEdge(0))}}else{u.push(E.create(o,r,c),E.create(f,o,c),E.create(f,c,r),E.create(f,r,o));for(let h=0;h<3;h++){const l=(h+1)%3;u[h+1].getEdge(2).setTwin(u[0].getEdge((3-h)%3)),u[h+1].getEdge(0).setTwin(u[l+1].getEdge(1))}}for(let h=0;h<4;h++)this.faces.push(u[h]);for(let h=0,l=e.length;h<l;h++){const m=e[h];if(m!==o&&m!==c&&m!==r&&m!==f){n=this.tolerance;let p=null;for(let v=0;v<4;v++){const F=this.faces[v].distanceToPoint(m.point);F>n&&(n=F,p=this.faces[v])}p!==null&&this.addVertexToFace(m,p)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const s=this.faces[t];s.mark===ee&&e.push(s)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const s=this.assigned.first().face;let i=s.outside;do{const n=s.distanceToPoint(i.point);n>t&&(t=n,e=i),i=i.next}while(i!==null&&i.face===s);return e}}computeHorizon(e,t,s,i){this.deleteFaceVertices(s),s.mark=Ye;let n;t===null?n=t=s.getEdge(0):n=t.next;do{const a=n.twin,o=a.face;o.mark===ee&&(o.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,a,o,i):i.push(n)),n=n.next}while(n!==t);return this}addAdjoiningFace(e,t){const s=E.create(e,t.tail(),t.head());return this.faces.push(s),s.getEdge(-1).setTwin(t.twin),s.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let s=null,i=null;for(let n=0;n<t.length;n++){const a=t[n],o=this.addAdjoiningFace(e,a);s===null?s=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return s.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class E{constructor(){this.normal=new x,this.midpoint=new x,this.area=0,this.constant=0,this.outside=null,this.mark=ee,this.edge=null}static create(e,t,s){const i=new E,n=new ce(e,i),a=new ce(t,i),o=new ce(s,i);return n.next=o.prev=a,a.next=n.prev=o,o.next=a.prev=n,i.edge=n,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),s=this.edge.next.head();return Z.set(e.point,t.point,s.point),Z.getNormal(this.normal),Z.getMidpoint(this.midpoint),this.area=Z.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class ce{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class tt{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Fe{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}const le=[2,2,1],he=[1,0,0];function _(d,e){return d*3+e}function st(d){const e=d.elements;let t=0;for(let s=0;s<9;s++)t+=e[s]*e[s];return Math.sqrt(t)}function nt(d){const e=d.elements;let t=0;for(let s=0;s<3;s++){const i=e[_(le[s],he[s])];t+=2*i*i}return Math.sqrt(t)}function it(d,e){let t=0,s=1;const i=d.elements;for(let r=0;r<3;r++){const f=Math.abs(i[_(le[r],he[r])]);f>t&&(t=f,s=r)}let n=1,a=0;const o=he[s],c=le[s];if(Math.abs(i[_(c,o)])>Number.EPSILON){const r=i[_(c,c)],f=i[_(o,o)],u=i[_(c,o)],h=(r-f)/2/u;let l;h<0?l=-1/(-h+Math.sqrt(1+h*h)):l=1/(h+Math.sqrt(1+h*h)),n=1/Math.sqrt(1+l*l),a=l*n}return e.identity(),e.elements[_(o,o)]=n,e.elements[_(c,c)]=n,e.elements[_(c,o)]=a,e.elements[_(o,c)]=-a,e}function ot(d,e){let t=0,s=0;const i=10;e.unitary.identity(),e.diagonal.copy(d);const n=e.unitary,a=e.diagonal,o=new V,c=new V,r=Number.EPSILON*st(a);for(;s<i&&nt(a)>r;)it(a,o),c.copy(o).transpose(),a.multiply(o),a.premultiply(c),n.multiply(o),++t>2&&(s++,t=0);return e}function at(d){const e=[];for(let b=0;b<d.length-2;b+=3){const D=d[b],y=d[b+1],C=d[b+2];e.push(new x(D,y,C))}const t=new et;t.setFromPoints(e);const s={unitary:new V,diagonal:new V},i=t.faces,n=[],a=[];for(let b=0,D=i.length;b<D;b++){const y=i[b];let C=y.edge;n.length=0;do n.push(C),C=C.next;while(C!==y.edge);const ze=n.length-2;for(let Y=1,Me=ze;Y<=Me;Y++){const ie=n[0].vertex,oe=n[Y+0].vertex,ae=n[Y+1].vertex;a.push(ie.point.x,ie.point.y,ie.point.z),a.push(oe.point.x,oe.point.y,oe.point.z),a.push(ae.point.x,ae.point.y,ae.point.z)}}const o=new x,c=new x,r=new x,f=new x,u=new x,h=new x,l=new x,m=new x;let p=0,v=0,F=0,g=0,I=0,z=0,M=0;for(let b=0,D=a.length;b<D;b+=9){o.fromArray(a,b),c.fromArray(a,b+3),r.fromArray(a,b+6),l.set(0,0,0),l.add(o).add(c).add(r).divideScalar(3),f.subVectors(c,o),u.subVectors(r,o);const y=h.crossVectors(f,u).length()/2;m.add(h.copy(l).multiplyScalar(y)),p+=y,v+=(9*l.x*l.x+o.x*o.x+c.x*c.x+r.x*r.x)*(y/12),F+=(9*l.x*l.y+o.x*o.y+c.x*c.y+r.x*r.y)*(y/12),g+=(9*l.x*l.z+o.x*o.z+c.x*c.z+r.x*r.z)*(y/12),I+=(9*l.y*l.y+o.y*o.y+c.y*c.y+r.y*r.y)*(y/12),z+=(9*l.y*l.z+o.y*o.z+c.y*c.z+r.y*r.z)*(y/12),M+=(9*l.z*l.z+o.z*o.z+c.z*c.z+r.z*r.z)*(y/12)}m.divideScalar(p),v/=p,F/=p,g/=p,I/=p,z/=p,M/=p,v-=m.x*m.x,F-=m.x*m.y,g-=m.x*m.z,I-=m.y*m.y,z-=m.y*m.z,M-=m.z*m.z;const S=new V;S.elements[0]=v,S.elements[1]=F,S.elements[2]=g,S.elements[3]=F,S.elements[4]=I,S.elements[5]=z,S.elements[6]=g,S.elements[7]=z,S.elements[8]=M,ot(S,s);const R=s.unitary,L=new x,k=new x,N=new x;R.extractBasis(L,k,N);let W=-1/0,$=-1/0,J=-1/0,X=1/0,K=1/0,Q=1/0;for(let b=0,D=e.length;b<D;b++){const y=e[b];W=Math.max(L.dot(y),W),$=Math.max(k.dot(y),$),J=Math.max(N.dot(y),J),X=Math.min(L.dot(y),X),K=Math.min(k.dot(y),K),Q=Math.min(N.dot(y),Q)}L.multiplyScalar(.5*(X+W)),k.multiplyScalar(.5*(K+$)),N.multiplyScalar(.5*(Q+J));const U=new x,A=new x,ne=new V;U.add(L).add(k).add(N),A.x=W-X,A.y=$-K,A.z=J-Q,A.multiplyScalar(.5),ne.copy(R);const{x:ue,y:pe,z:ge}=A,we=new B;we.makeScale(ue*2,pe*2,ge*2);const xe=new B;xe.makeTranslation(-ue,-pe,-ge);const ye=new B;ye.makeTranslation(U.x,U.y,U.z);const Ie=new B;Ie.setFromMatrix3(ne);const q=new B;return q.multiply(ye),q.multiply(Ie),q.multiply(xe),q.multiply(we),{center:U,halfSizes:A,rotation:ne,transformation:q}}function rt(d,e,t){const s=[d[0]-e[0],d[1]-e[1],d[2]-e[2]];return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]>0}class ct extends Je{constructor(){super(...arguments);w(this,"minGeometrySize",10);w(this,"minAssetsSize",1e3)}}const se=class se extends Ne{constructor(t){super(t);w(this,"onGeometryStreamed",new H);w(this,"onAssetStreamed",new H);w(this,"onProgress",new H);w(this,"onIfcLoaded",new H);w(this,"onDisposed",new H);w(this,"settings",new ct);w(this,"enabled",!0);w(this,"webIfc",new be);w(this,"_spatialTree",new Xe);w(this,"_metaData",new Ke);w(this,"_visitedGeometries",new Map);w(this,"_streamSerializer",new $e);w(this,"_geometries",new Map);w(this,"_geometryCount",0);w(this,"_civil",new Qe);w(this,"_groupSerializer",new Re);w(this,"_assets",[]);w(this,"_meshesWithHoles",new Set);this.components.add(se.uuid,this),this.settings.excludedCategories.add(Pe)}dispose(){this.onIfcLoaded.reset(),this.onGeometryStreamed.reset(),this.onAssetStreamed.reset(),this.webIfc=null,this.onDisposed.trigger(),this.onDisposed.reset()}async streamFromBuffer(t){const s=performance.now();await this.readIfcFile(t),await this.streamAllGeometries(),this.cleanUp(),console.log(`Streaming the IFC took ${performance.now()-s} ms!`)}async streamFromCallBack(t){const s=performance.now();await this.streamIfcFile(t),await this.streamAllGeometries(),this.cleanUp(),console.log(`Streaming the IFC took ${performance.now()-s} ms!`)}async readIfcFile(t){const{path:s,absolute:i,logLevel:n}=this.settings.wasm;this.webIfc.SetWasmPath(s,i),await this.webIfc.Init(),n&&this.webIfc.SetLogLevel(n),this.webIfc.OpenModel(t,this.settings.webIfc)}async streamIfcFile(t){const{path:s,absolute:i,logLevel:n}=this.settings.wasm;this.webIfc.SetWasmPath(s,i),await this.webIfc.Init(),n&&this.webIfc.SetLogLevel(n),this.webIfc.OpenModelFromCallback(t,this.settings.webIfc)}async streamAllGeometries(){const{minGeometrySize:t,minAssetsSize:s}=this.settings;this._spatialTree.setUp(this.webIfc);const i=this.webIfc.GetIfcEntityList(0),n=[[]],a=new We,{FILE_NAME:o,FILE_DESCRIPTION:c}=Ve;a.ifcMetadata={name:this._metaData.get(this.webIfc,o),description:this._metaData.get(this.webIfc,c),schema:this.webIfc.GetModelSchema(0)||"IFC2X3",maxExpressID:this.webIfc.GetMaxExpressID(0)};let r=0,f=0;for(const g of i){if(!this.webIfc.IsIfcElement(g)&&g!==Ae||this.settings.excludedCategories.has(g))continue;const I=this.webIfc.GetLineIDsWithType(0,g),z=I.size();for(let M=0;M<z;M++){r>t&&(r=0,f++,n.push([]));const S=I.get(M);n[f].push(S);const R=this._spatialTree.itemsByFloor[S]||0;a.data.set(S,[[],[R,g]]),r++}}this._spatialTree.cleanUp();let u=.01,h=0;for(const g of n){h++,this.webIfc.StreamMeshes(0,g,z=>{this.getMesh(this.webIfc,z,a)}),this._geometryCount>t&&await this.streamGeometries(),this._assets.length>s&&await this.streamAssets();const I=h/n.length;I>u&&(u+=.01,u=Math.max(u,I),this.onProgress.trigger(Math.round(u*100)/100))}this._geometryCount&&await this.streamGeometries(),this._assets.length&&await this.streamAssets();const{opaque:l,transparent:m}=a.geometryIDs;for(const[g,{index:I,uuid:z}]of this._visitedGeometries)a.keyFragments.set(I,z),(g>1?l:m).set(g,I);const p=a.data.keys();for(const g of p){const[I]=a.data.get(g);I.length||a.data.delete(g)}const v=this.webIfc.GetCoordinationMatrix(0);a.coordinationMatrix.fromArray(v),a.civilData=this._civil.read(this.webIfc);const F=this._groupSerializer.export(a);this.onIfcLoaded.trigger(F),a.dispose(!0)}cleanUp(){this.webIfc=null,this.webIfc=new be,this._visitedGeometries.clear(),this._geometries.clear(),this._assets=[],this._meshesWithHoles.clear()}getMesh(t,s,i){const n=s.geometries.size(),a=s.expressID,o={id:a,geometries:[]};for(let c=0;c<n;c++){const r=s.geometries.get(c),f=r.geometryExpressID,u=r.color.w===1?1:-1,h=f*u;if(!this._visitedGeometries.has(h)){this._visitedGeometries.has(f)||this.getGeometry(t,f);const M=this._visitedGeometries.size,S=Ce.generateUUID();this._visitedGeometries.set(h,{uuid:S,index:M})}const l=this._visitedGeometries.get(h);if(l===void 0)throw new Error("Error getting geometry data for streaming!");const m=i.data.get(a);if(!m)throw new Error("Data not found!");m[0].push(l.index);const{x:p,y:v,z:F,w:g}=r.color,I=[p,v,F,g],z=r.flatTransformation;o.geometries.push({color:I,geometryID:f,transformation:z})}this._assets.push(o)}getGeometry(t,s){const i=t.GetGeometry(0,s),n=t.GetIndexArray(i.GetIndexData(),i.GetIndexDataSize()),a=t.GetVertexArray(i.GetVertexData(),i.GetVertexDataSize()),o=new Float32Array(a.length/2),c=new Float32Array(a.length/2);for(let l=0;l<a.length;l+=6)o[l/2]=a[l],o[l/2+1]=a[l+1],o[l/2+2]=a[l+2],c[l/2]=a[l+3],c[l/2+1]=a[l+4],c[l/2+2]=a[l+5];const r=at(o),f=new Float32Array(r.transformation.elements),u=[r.center.x,r.center.y,r.center.z];let h=!1;for(let l=0;l<o.length-2;l+=3){const m=o[l],p=o[l+1],v=o[l+2],F=c[l],g=c[l+1],I=c[l+2];if(rt(u,[m,p,v],[F,g,I])){h=!0;break}}this._geometries.set(s,{position:o,normal:c,index:n,boundingBox:f,hasHoles:h}),i.delete(),this._geometryCount++}async streamAssets(){await this.onAssetStreamed.trigger(this._assets),this._assets=null,this._assets=[]}async streamGeometries(){let t=this._streamSerializer.export(this._geometries),s={};for(const[i,{boundingBox:n,hasHoles:a}]of this._geometries)s[i]={boundingBox:n,hasHoles:a};this.onGeometryStreamed.trigger({data:s,buffer:t}),s=null,t=null,this._geometries.clear(),this._geometryCount=0}};w(se,"uuid","d9999a00-e1f5-4d3f-8cfe-c56e08609764");let de=se;const lt=document.getElementById("container"),G=new Ue,ht=G.get(He),P=ht.create();P.scene=new qe(G);P.renderer=new je(G,lt);P.camera=new Be(G);G.init();P.camera.controls.setLookAt(12,6,8,0,0,-10);const dt=G.get(Oe);dt.create(P);const mt={path:"https://unpkg.com/web-ifc@0.0.53/",absolute:!0},T=new de(G);T.settings.wasm=mt;T.settings.minGeometrySize=20;T.settings.minAssetsSize=1e3;let j=[],me={},fe=1;T.onGeometryStreamed.add(d=>{const{buffer:e,data:t}=d,s=`small.ifc-processed-geometries-${fe}`;for(const i in t){const n=t[i];n.geometryFile=s,me[i]=n}j.push({name:s,bits:[e]}),fe++});let te=[];T.onAssetStreamed.add(d=>{te=[...te,...d]});T.onIfcLoaded.add(d=>{j.push({name:"small.ifc-processed-global",bits:[d]})});function ft(d,...e){const t=new File(e,d),s=document.createElement("a"),i=URL.createObjectURL(t);s.href=i,s.download=t.name,s.click(),URL.revokeObjectURL(i)}async function ut(d){for(const{name:e,bits:t}of d)ft(e,...t),await new Promise(s=>{setTimeout(s,100)})}T.onProgress.add(d=>{d===1&&setTimeout(async()=>{const e={geometries:me,assets:te,globalDataFileId:"small.ifc-processed-global"};j.push({name:"small.ifc-processed.json",bits:[JSON.stringify(e)]}),await ut(j),te=[],me={},j=[],fe=1})});async function pt(){const e=await(await fetch("../../../../../resources/small.ifc")).arrayBuffer(),t=new Uint8Array(e);await T.streamFromBuffer(t)}const gt={processFile:pt},wt=new ke;wt.add(gt,"processFile").name("Process file");const O=new Le;O.showPanel(2);document.body.append(O.dom);O.dom.style.left="0px";P.renderer.onBeforeUpdate.add(()=>O.begin());P.renderer.onAfterUpdate.add(()=>O.end());
