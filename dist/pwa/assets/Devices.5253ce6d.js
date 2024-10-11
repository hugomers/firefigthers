import{aF as I,r as f,k as N,m as $,n,p as l,O as z,s as a,aG as E,q as r,av as c,N as w,Q as v,ax as U}from"./index.36a95705.js";import{Q as m}from"./QInput.bb7d484a.js";import{Q as x,a as _}from"./QCard.234caef2.js";import{u as B,r as d,Q as H}from"./use-quasar.621e75c0.js";import{Q as T}from"./QTable.38f8726f.js";import{Q as A,C as q}from"./ClosePopup.73569904.js";import{Q as O}from"./QPage.dccbe14c.js";import{api as p}from"./axios.28e13745.js";import{d as y}from"./dayjs.min.d7cc11dc.js";const G={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},j={class:"row"},F={class:"col"},L=a("br",null,null,-1),M={class:"col"},J=a("br",null,null,-1),K={class:"row"},W={class:"col"},X=a("br",null,null,-1),Y={class:"col"},Z=a("br",null,null,-1),ee={class:"row"},le={class:"col"},te=a("br",null,null,-1),ae={class:"col"},se=a("br",null,null,-1),oe={class:"row"},ie={class:"col"},ne=a("br",null,null,-1),de={class:"col"},re=a("br",null,null,-1),ce={class:"text-center"},ue={class:"text-center"},me={class:"text-center"},pe={class:"text-centert"},ve={class:"text-center"},_e={class:"text-center"},De={__name:"Devices",setup(ge){const i=B();I();const h=f([]);f(null);const o=f([]),b=f(!1),g=f({columns:[{name:"id",label:"id",field:t=>t.id},{name:"name",label:"Dispositivo",field:t=>t.name},{name:"nick_name",label:"Nombre",field:t=>t.nick_name},{name:"id",label:"Numero de Serie",field:t=>t.serial_number},{name:"ip",label:"Direccion Ip",field:t=>t.ip},{name:"store",label:"Sucursal",field:t=>t.store.name}],filter:"",pagination:{rowsPerPage:[0]}}),k=async()=>{const t=await p.get("/zkt/Index");console.log(t.status),t.status!=200?console.log(t.data):(console.log(t.data),h.value=t.data,C(h.value))},C=t=>{t.forEach((e,s)=>{setTimeout(()=>{p.get(`/zkt/Ping/${e.ip_address}`).then(u=>{console.log(u.data),e._status=u.data.connect,e._att=u.data.register,e._time=u.data.date,e._curret=u.data.current}).catch(u=>{console.error(`Error pinging ${e.ip_address}:`,u)})},s*1e3)})},D=async t=>{i.loading.show({message:"Haciendo Pin :P"});const e=await p.get(`/zkt/Ping/${t}`);if(e.status!=200)console.log(e);else{let s=e.data?"Con Conexion":"Sin Conexion",u=e.data?"positive":"negative";i.notify({message:s,type:u,position:"center"}),i.loading.hide()}},Q=async t=>{console.log(t),i.loading.show({message:"Editando"});const e=await p.post("/zkt/Edit",t);e.status!=200?console.log(e.data):(console.log(e.data),b.value=!1,i.notify({message:"Dispositivo Actualizado",type:"positive",position:"center"}),i.loading.hide(),k())},P=t=>{b.value=!0,o.value=t},V=async()=>{const t=o.value.id;console.log(t),i.loading.show({message:"Impotando Registros :P"});const e=await p.get(`/zkt/getRegisDevice/${t}`);e.status!=200?console.log(e):(console.log(e.data),i.notify({message:e.data.goals,type:"positive",position:"center"}),i.loading.hide())},R=async()=>{const t=o.value.id;console.log(t),i.loading.show({message:"Cambiando Horario :P"});const e=await p.get(`/zkt/changeDate/${t}`);e.status!=200?console.log(e):(console.log(e.data),o.value._time=e.data.date,o.value._curret=e.data.date,i.notify({message:"Cambio Realizado :)",type:"positive",position:"center"}),i.loading.hide())},S=async()=>{V();const t=o.value.id;console.log(t),i.loading.show({message:"ELIMINANDO REGISTROS :P"});const e=await p.delete(`/zkt/deleteAttendance/${t}`);e.status!=200?console.log(e):(console.log(e.data),i.notify({message:"Registros Eliminados :)",type:"positive",position:"center"}),i.loading.hide())};return k(),(t,e)=>(N(),$(O,{padding:""},{default:n(()=>[l(T,{"hide-bottom":"",rows:h.value,columns:g.value.columns,"row-key":"name",grid:"",filter:g.value.filter,pagination:g.value.pagination},{"top-right":n(()=>[l(m,{borderless:"",dense:"",debounce:"300",modelValue:g.value.filter,"onUpdate:modelValue":e[0]||(e[0]=s=>g.value.filter=s),placeholder:"Buscar"},{append:n(()=>[l(z,{name:"search"})]),_:1},8,["modelValue"])]),item:n(s=>[a("div",G,[l(x,{flat:"",bordered:"",style:E(`border: 3px solid ${s.row._status?"#03C988":"#B80000"};`),onClick:u=>P(s.row)},{default:n(()=>[l(_,{class:"text-center"},{default:n(()=>[a("div",j,[a("div",F,[r(" Sucursal "),L,a("strong",null,c(s.row.store.name),1)]),a("div",M,[r(" Dispositivo "),J,a("strong",null,c(s.row.name),1)])])]),_:2},1024),l(d),l(_,{class:"text-center"},{default:n(()=>[a("div",K,[a("div",W,[r(" Direccion Ip "),X,a("strong",null,c(s.row.ip_address),1)]),a("div",Y,[r(" Numero de Serie "),Z,a("strong",null,c(s.row.serial_number),1)])])]),_:2},1024),l(d),l(_,{class:"text-center"},{default:n(()=>[a("div",ee,[a("div",le,[r(" Horario "),te,a("strong",null,c(s.row._curret),1)]),a("div",ae,[r(" Dispositivo "),se,a("strong",null,c(s.row._time),1)])])]),_:2},1024),l(d),l(_,{class:"text-center"},{default:n(()=>[a("div",oe,[a("div",ie,[r(" Registros "),ne,a("strong",null,c(s.row._att),1)]),a("div",de,[r(" Diferencia Tiempo "),re,a("strong",null,c(w(y)(s.row._time).diff(w(y)(s.row._curret),"second",!0))+" s",1)])])]),_:2},1024),l(d)]),_:2},1032,["style","onClick"])])]),_:1},8,["rows","columns","filter","pagination"]),l(H,{modelValue:b.value,"onUpdate:modelValue":e[9]||(e[9]=s=>b.value=s),persistent:""},{default:n(()=>[l(x,null,{default:n(()=>[l(_,{class:"items-center"},{default:n(()=>[l(m,{modelValue:o.value.store.name,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.store.name=s),type:"text",label:"Sucursal",filled:"",disable:""},null,8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(m,{modelValue:o.value.id,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.id=s),type:"text",label:"Id",filled:"",disable:""},null,8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(m,{modelValue:o.value.serial_number,"onUpdate:modelValue":e[3]||(e[3]=s=>o.value.serial_number=s),type:"text",label:"Numero de serie",filled:"",disable:""},null,8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(m,{modelValue:o.value.name,"onUpdate:modelValue":e[4]||(e[4]=s=>o.value.name=s),type:"text",label:"Dispositivo",filled:"",disable:""},null,8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(m,{modelValue:o.value.nick_name,"onUpdate:modelValue":e[5]||(e[5]=s=>o.value.nick_name=s),type:"text",label:"Nombre",filled:""},null,8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(m,{modelValue:o.value.ip_address,"onUpdate:modelValue":e[7]||(e[7]=s=>o.value.ip_address=s),type:"text",label:"IP",filled:""},{append:n(()=>[l(v,{color:"primary",icon:"sensors",onClick:e[6]||(e[6]=s=>D(o.value.ip_address)),flat:""})]),_:1},8,["modelValue"]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),a("div",ce,[r("Dispositivo: "),a("div",ue,c(o.value._time),1)]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),a("div",me,[r(" Horario: "),a("div",pe,c(o.value._curret),1)]),l(d,{spaced:"",inset:"",vertical:"",dark:""}),a("div",ve,[r("Diferencia: "),a("div",_e,c(w(y)(o.value._time).diff(w(y)(o.value._curret),"second",!0)),1)])]),_:1}),l(_,null,{default:n(()=>[l(v,{color:"primary",label:"Registros",onClick:V,outline:"",class:"full-width"}),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(v,{color:"primary",label:"Cambiar Horario",onClick:R,outline:"",class:"full-width"}),l(d,{spaced:"",inset:"",vertical:"",dark:""}),l(v,{color:"primary",label:"Eliminar Registros",onClick:S,outline:"",class:"full-width"})]),_:1}),l(A,{align:"center"},{default:n(()=>[U(l(v,{flat:"",label:"Cancel",color:"negative"},null,512),[[q]]),l(v,{flat:"",label:"Editar",color:"positive",onClick:e[8]||(e[8]=s=>Q(o.value))})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{De as default};
