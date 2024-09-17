import{f as c,c as M,W as ee,X as ae,r as b,d as y,O as w,h as le,t as oe,g as X,Y as J,L as G,k as m,m as C,n as l,s as p,p as a,Q as E,P as B,aD as R,aE as z,ax as A,q as D,av as L,ac as U}from"./index.2b9c583f.js";import{k as Y,d as te,l as H,p as ne,u as se,r as $,Q as K,o as j,P,R as q}from"./use-quasar.1fa7be86.js";import{o as re,u as ie,a as ue,b as ce,c as de,d as ve,Q as fe}from"./QTable.39c9bcc8.js";import{Q as me}from"./QInput.45b3ed35.js";import{Q as W,a as S}from"./QCard.d556a2fa.js";import{Q as be}from"./QPage.87b84d22.js";import{api as T}from"./axios.b46645df.js";import"./QTr.ed5ad53b.js";import"./ClosePopup.16acfa53.js";const ge=c("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[c("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),c("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var ye=M({name:"QRadio",props:{...Y,...ee,...te,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:f,emit:d}){const{proxy:k}=X(),g=H(e,k.$q),i=ae(e,re),_=b(null),{refocusTargetEl:x,refocusTarget:h}=ie(e,_),u=y(()=>J(e.modelValue)===J(e.val)),o=y(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(g.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),I=y(()=>{const n=e.color!==void 0&&(e.keepColor===!0||u.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${u.value===!0?"truthy":"falsy"}${n}`}),Q=y(()=>(u.value===!0?e.checkedIcon:e.uncheckedIcon)||null),O=y(()=>e.disable===!0?-1:e.tabindex||0),N=y(()=>{const n={type:"radio"};return e.name!==void 0&&Object.assign(n,{".checked":u.value===!0,"^checked":u.value===!0?"checked":void 0,name:e.name,value:e.val}),n}),r=ne(N);function t(n){n!==void 0&&(G(n),h(n)),e.disable!==!0&&u.value!==!0&&d("update:modelValue",e.val,n)}function s(n){(n.keyCode===13||n.keyCode===32)&&G(n)}function v(n){(n.keyCode===13||n.keyCode===32)&&t(n)}return Object.assign(k,{set:t}),()=>{const n=Q.value!==null?[c("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[c(w,{class:"q-radio__icon",name:Q.value})])]:[ge];e.disable!==!0&&r(n,"unshift"," q-radio__native q-ma-none q-pa-none");const V=[c("div",{class:I.value,style:i.value,"aria-hidden":"true"},n)];x.value!==null&&V.push(x.value);const F=e.label!==void 0?le(f.default,[e.label]):oe(f.default);return F!==void 0&&V.push(c("div",{class:"q-radio__label q-anchor--skip"},F)),c("div",{ref:_,class:o.value,tabindex:O.value,role:"radio","aria-label":e.label,"aria-checked":u.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:t,onKeydown:s,onKeyup:v},V)}}}),ke=M({name:"QToggle",props:{...ue,icon:String,iconColor:String},emits:ce,setup(e){function f(d,k){const g=y(()=>(d.value===!0?e.checkedIcon:k.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),i=y(()=>d.value===!0?e.iconColor:null);return()=>[c("div",{class:"q-toggle__track"}),c("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},g.value!==void 0?[c(w,{name:g.value,color:i.value})]:void 0)]}return de("toggle",f)}});const Z={radio:ye,checkbox:ve,toggle:ke},_e=Object.keys(Z);var he=M({name:"QOptionGroup",props:{...Y,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(f=>"value"in f&&"label"in f)},name:String,type:{default:"radio",validator:e=>_e.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:f,slots:d}){const{proxy:{$q:k}}=X(),g=Array.isArray(e.modelValue);e.type==="radio"?g===!0&&console.error("q-option-group: model should not be array"):g===!1&&console.error("q-option-group: model should be array in your case");const i=H(e,k),_=y(()=>Z[e.type]),x=y(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),h=y(()=>{const o={role:"group"};return e.type==="radio"&&(o.role="radiogroup",e.disable===!0&&(o["aria-disabled"]="true")),o});function u(o){f("update:modelValue",o)}return()=>c("div",{class:x.value,...h.value},e.options.map((o,I)=>{const Q=d["label-"+I]!==void 0?()=>d["label-"+I](o):d.label!==void 0?()=>d.label(o):void 0;return c("div",[c(_.value,{modelValue:e.modelValue,val:o.value,name:o.name===void 0?e.name:o.name,disable:e.disable||o.disable,label:Q===void 0?o.label:null,leftLabel:o.leftLabel===void 0?e.leftLabel:o.leftLabel,color:o.color===void 0?e.color:o.color,checkedIcon:o.checkedIcon,uncheckedIcon:o.uncheckedIcon,dark:o.dark||i.value,size:o.size===void 0?e.size:o.size,dense:e.dense,keepColor:o.keepColor===void 0?e.keepColor:o.keepColor,"onUpdate:modelValue":u},Q)])}))}});const pe=c("div",{class:"q-space"});var xe=M({name:"QSpace",setup(){return()=>pe}});const Ce={class:"q-pa-sm q-gutter-sm flex justify-center"},qe={class:"row items-center"},Se=p("div",{class:"col"},"Reporte de Asistencias",-1),Qe=p("div",{class:"text-h6"},"Con Conexion",-1),Ve=p("div",{class:"text-h6"},"Sin Conexion",-1),we=p("div",{class:"text-h6"},"Correctos",-1),Ie=p("div",{class:"text-h6"},"Errores",-1),Te={__name:"Index",setup(e){const f=se(),d=b(!1),k=b(!1),g=b(!1);b(!1),b(!1);const i=b(!1),_=b({state:!1,body:null}),x=b({state:!1,body:null});b({state:!1,body:null});const h=b({reporte:[],filter:null}),u=b({opts:[],val:"All"});b();const o=y(()=>u.value.val==="All"?h.value.reporte:h.value.reporte.filter(r=>r.SUCURSAL==u.value.val)),I=()=>{console.log("Descargando Archivo");const r=new Date,t=r.getDate()+"-"+(r.getMonth()+1);d.value=!0,i.value=!0;const s=f.notify({type:"ongoing",message:"Descargando Reporte...",position:"center"});T.get("/assist/report",{responseType:"blob"}).then(v=>{const n=window.URL.createObjectURL(new Blob([v.data])),V=document.createElement("a");V.href=n,V.download="reporte del"+t+".xlsx",V.click(),s({type:"positive",message:"Descarga completa"}),d.value=!1,i.value=!1}).catch(v=>{s({type:"negative",message:v.data}),console.log(v),d.value=!1,i.value=!1})},Q=async()=>{console.log("Sincronizando Checadas"),g.value=!0,i.value=!0;const r=f.notify({type:"ongoing",message:"Sincronizando Ult. Checadas...",position:"center"});T.get("/zkt/Reportcomplete").then(t=>{r({type:"positive",message:"Proseso terminado"}),g.value=!1,i.value=!1,_.value.body=t.data,_.value.state=!0}).catch(t=>{r({type:"negative",message:t.data}),g.value=!1,i.value=!1})},O=async()=>{console.log("Sincronizando Justificaciones"),k.value=!0,i.value=!0;const r=f.notify({type:"ongoing",message:"Sincronizando Justificaciones...",position:"center"});T.get("/Monday/justification").then(t=>{r({type:"positive",message:t.data}),k.value=!1,i.value=!1}).catch(t=>{r({type:"negative",message:t.data}),k.value=!1,i.value=!1})};return(async()=>{console.log("obtenirnedo reporte"),T.get("/getResourses").then(r=>{h.value.reporte=r.data.reporte,u.value.opts=r.data.sucursal,console.log(r.data),u.value.opts.push({label:"All",value:"All"})}).catch(r=>{console.log(r)})})(),(r,t)=>(m(),C(be,{padding:""},{default:l(()=>[p("div",Ce,[a(E,{loading:k.value,onClick:O,color:"primary",icon:"warning",label:"Replicar Justificaciones",style:{width:"300px"},disable:i.value},null,8,["loading","disable"]),a(E,{loading:g.value,onClick:Q,color:"primary",icon:"sync",label:"Replicar Ultimas Checadas",style:{width:"300px"},disable:i.value},null,8,["loading","disable"])]),p("div",null,[a(he,{modelValue:u.value.val,"onUpdate:modelValue":t[0]||(t[0]=s=>u.value.val=s),inline:"",class:"q-mb-md",options:u.value.opts},null,8,["modelValue","options"]),a(fe,{title:"Asistencias",rows:o.value,"row-key":"ID",flat:"",bordered:"",separator:"cell",dense:"",filter:h.value.filter,"no-data-label":"No hay nada Aun"},{top:l(()=>[a($,{spaced:"",inset:"",vertical:"",dark:""}),p("div",qe,[a(E,{loading:d.value,onClick:I,color:"primary",icon:"cloud_download",disable:i.value,flat:""},null,8,["loading","disable"]),Se]),a(xe),a(me,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:h.value.filter,"onUpdate:modelValue":t[1]||(t[1]=s=>h.value.filter=s)},{append:l(()=>[a(w,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter"])]),a(K,{modelValue:x.value.state,"onUpdate:modelValue":t[2]||(t[2]=s=>x.value.state=s)},{default:l(()=>[p("div",null,[a(W,{class:"my-card row"},{default:l(()=>[a(S,{class:"col"},{default:l(()=>[a(S,null,{default:l(()=>[Qe]),_:1}),(m(!0),B(z,null,R(x.value.body.goal,(s,v)=>(m(),C(j,{bordered:"",key:v},{default:l(()=>[A((m(),C(P,{clickable:""},{default:l(()=>[a(q,{avatar:""},{default:l(()=>[a(w,{color:"primary",name:"store"})]),_:1}),a(q,null,{default:l(()=>[D(L(s),1)]),_:2},1024)]),_:2},1024)),[[U]])]),_:2},1024))),128))]),_:1}),a($,{spaced:"",inset:"",vertical:"",dark:""}),a(S,{class:"col"},{default:l(()=>[a(S,null,{default:l(()=>[Ve]),_:1}),(m(!0),B(z,null,R(x.value.body.fail,(s,v)=>(m(),C(j,{bordered:"",key:v},{default:l(()=>[A((m(),C(P,{clickable:""},{default:l(()=>[a(q,{avatar:""},{default:l(()=>[a(w,{color:"primary",name:"store"})]),_:1}),a(q,null,{default:l(()=>[D(L(s),1)]),_:2},1024)]),_:2},1024)),[[U]])]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),a(K,{modelValue:_.value.state,"onUpdate:modelValue":t[3]||(t[3]=s=>_.value.state=s)},{default:l(()=>[p("div",null,[a(W,{class:"my-card row"},{default:l(()=>[a(S,{class:"col"},{default:l(()=>[a(S,null,{default:l(()=>[we]),_:1}),(m(!0),B(z,null,R(_.value.body.goals,(s,v)=>(m(),C(j,{bordered:"",key:v},{default:l(()=>[A((m(),C(P,{clickable:""},{default:l(()=>[a(q,{avatar:""},{default:l(()=>[a(w,{color:"primary",name:"check"})]),_:1}),a(q,null,{default:l(()=>[D(L(s),1)]),_:2},1024)]),_:2},1024)),[[U]])]),_:2},1024))),128))]),_:1}),a($,{spaced:"",inset:"",vertical:"",dark:""}),a(S,{class:"col"},{default:l(()=>[a(S,null,{default:l(()=>[Ie]),_:1}),(m(!0),B(z,null,R(_.value.body.fails,(s,v)=>(m(),C(j,{bordered:"",key:v},{default:l(()=>[A((m(),C(P,{clickable:""},{default:l(()=>[a(q,{avatar:""},{default:l(()=>[a(w,{color:"primary",name:"close"})]),_:1}),a(q,null,{default:l(()=>[D(L(s),1)]),_:2},1024)]),_:2},1024)),[[U]])]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1}))}};export{Te as default};