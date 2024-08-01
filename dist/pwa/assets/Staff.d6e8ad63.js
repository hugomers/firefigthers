import{aF as _,r as n,d as r,k as y,m as b,n as w,s as c,p as s,Q as h}from"./index.06736d69.js";import{u as k,r as m}from"./use-quasar.57584d06.js";import{Q as d}from"./QTable.a3fcfed3.js";import{Q}from"./QPage.10017b19.js";import{api as u}from"./axios.83a8dca4.js";import"./dayjs.min.d7cc11dc.js";const S={class:"row"},I={__name:"Staff",setup(P){const a=k();_();const t=n([]),l=n([]),i=n({columns:[{name:"Nombre",label:"Nombre",align:"left",field:e=>e.complete_name},{name:"rc",label:"Id Checador",align:"center",field:e=>e.id_rc},{name:"Sucursal",label:"Sucursal",align:"left",field:e=>e.stores.name},{name:"Position",label:"Puesto",align:"left",field:e=>e.position.name},{name:"Ingreso",label:"Ingreso",align:"left",field:e=>e.ingress},{name:"activo",label:"Status",align:"center",field:e=>e.acitve}]}),f=r(()=>t.value.filter(e=>l.value.some(o=>o.id_rc==e.id_rc))),p=r(()=>t.value.filter(e=>l.value.every(o=>o.id_rc!=e.id_rc))),g=async()=>{a.loading.show({message:"Obteniendo Datos :)"});const e=await u.get("/staff");e.status!=200?console.log(e.data):(console.log(e.data),a.loading.hide(),t.value=e.data.mon,l.value=e.data.mysq)},v=async()=>{a.loading.show({message:"Actualizando Personal"});const e=await u.get("/staff/staffReply");e.status!=200?(console.log(e.data),a.notify({message:"Ocurrio un problema con la sincronizacion",position:"center",type:"negative"})):(console.log(e.data),a.loading.hide(),a.notify({message:"Personal Actualizado",position:"center",type:"positive"}))};return g(),(e,o)=>(y(),b(Q,{padding:""},{default:w(()=>[c("div",null,[s(h,{color:"primary",outline:"",icon:"sync",label:"Sincronizar",onClick:v})]),s(m,{spaced:"",inset:"",vertical:"",dark:""}),c("div",S,[s(d,{title:"Staff",rows:f.value,columns:i.value.columns,"row-key":"name",class:"col"},null,8,["rows","columns"]),s(m,{spaced:"",inset:"",vertical:"",dark:""}),s(d,{title:"Faltantes",rows:p.value,columns:i.value.columns,"row-key":"name",class:"col"},null,8,["rows","columns"])])]),_:1}))}};export{I as default};