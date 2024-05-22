var T=Object.defineProperty;var b=(h,e,s)=>e in h?T(h,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[e]=s;var o=(h,e,s)=>(b(h,typeof e!="symbol"?e+"":e,s),s);import{z as F,f as G,V as f,c as I,e as O,af as x,ag as z}from"./web-ifc-api-BiYij3qq.js";import{U as B}from"./index-B3b_h8A8.js";import{a as d,L as E,b as M}from"./Line2-Bd8FUlMY.js";const m=class m{constructor(e,s){o(this,"scene");o(this,"onSelect",new B);o(this,"type");o(this,"selectCurve");o(this,"selectPoints");o(this,"hoverCurve");o(this,"hoverPoints");o(this,"caster",new F);this.scene=e,this.type=s,this.hoverCurve=this.newCurve(.003,4473924,!1),this.hoverPoints=this.newPoints(5,4473924),this.selectCurve=this.newCurve(.005,16777215,!0),this.selectPoints=this.newPoints(7,16777215)}dispose(){this.selectCurve&&this.scene.remove(this.selectCurve),this.selectCurve.material.dispose(),this.selectCurve.geometry.dispose(),this.selectCurve=null,this.hoverCurve.material.dispose(),this.hoverCurve.geometry.dispose(),this.hoverCurve=null,this.hoverPoints.material.dispose(),this.hoverPoints.geometry.dispose(),this.selectPoints.material.dispose(),this.selectPoints.geometry.dispose(),this.scene=null}castRay(e,s,i,r){const n=new G,t=i.getBoundingClientRect();n.x=(e.clientX-t.left)/t.width*2-1,n.y=-((e.clientY-t.top)/t.height)*2+1,this.caster.setFromCamera(n,s);const a=this.caster.intersectObjects(r);return a.length?a[0]:null}select(e){this.highlight(e,this.selectCurve,this.selectPoints,!0),this.onSelect.trigger(e)}unSelect(){this.selectCurve.removeFromParent(),this.selectPoints.removeFromParent()}hover(e){this.highlight(e,this.hoverCurve,this.hoverPoints,!1)}unHover(){this.hoverCurve.removeFromParent(),this.hoverPoints.removeFromParent()}highlight(e,s,i,r){const{alignment:n}=e.curve;this.scene.add(s),this.scene.add(i);const t=[],a=[],v=[];for(const l of n[this.type]){const p=l.mesh.geometry.attributes.position;for(const c of p.array)t.push(c);if(r){let c;if(this.type==="absolute"){const{horizontal:u}=l.alignment;c=u[l.index].data.TYPE}else c=l.data.TYPE;const L=m.settings.colors[c]||[1,1,1];for(let u=0;u<p.count;u++)a.push(...L)}const[w,A,R]=p.array;v.push(new f(w,A,R))}const g=t[t.length-3],y=t[t.length-2],P=t[t.length-1];v.push(new f(g,y,P)),t.length/3>s.geometry.attributes.position.count&&(s.geometry.dispose(),s.geometry=new d),s.geometry.setPositions(t),r&&s.geometry.setColors(a),i.geometry.setFromPoints(v)}newCurve(e,s,i){const r=new d,n=new E({color:s,linewidth:e,vertexColors:i,worldUnits:!1,depthTest:!1}),t=new M(r,n);return this.scene.add(t),t}newPoints(e,s){const i=new I,r=new O(new Float32Array,3);i.setAttribute("position",r);const n=new x({size:e,color:s,sizeAttenuation:!1,depthTest:!1}),t=new z(i,n);return t.frustumCulled=!1,this.scene.add(t),t}};o(m,"settings",{colors:{LINE:[213/255,0/255,255/255],CIRCULARARC:[0/255,46,255/255],CLOTHOID:[0/255,255/255,0/255],PARABOLICARC:[0/255,255/255,72/255],CONSTANTGRADIENT:[213/255,0/255,255/255]}});let C=m;export{C};