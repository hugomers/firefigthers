import{f as _,c as K,ar as W,as as X,r as k,k as x,m as C,n as t,p as l,L as a,q as d,at as u,au as Y,Q as g,av as P,d as T,s as b,O as $}from"./index.2599a239.js";import{c as q,Q as V,b as f,u as ee,n as B,d as z}from"./use-quasar.d978fe8b.js";import{Q as le,a as E}from"./QPage.d9514c95.js";import{Q as te}from"./QTooltip.c904d386.js";import{Q as R,C as M}from"./ClosePopup.3ebbfe47.js";import{api as Q}from"./axios.b00cf2c6.js";import{Q as ae,a as v}from"./QTr.d1660dd9.js";import"./scroll.447e74c3.js";const se=[_("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[_("circle",{cx:"5",cy:"50",r:"5"},[_("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),_("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]),_("circle",{cx:"27",cy:"5",r:"5"},[_("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),_("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]),_("circle",{cx:"49",cy:"50",r:"5"},[_("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),_("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})])])];var oe=K({name:"QSpinnerBall",props:W,setup(I){const{cSize:m,classes:r}=X(I);return()=>_("svg",{class:r.value,stroke:"currentColor",width:m.value,height:m.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg"},se)}});const ie={__name:"QuotesArchive",props:{quotes:{default:[],type:Array}},emits:["restore","destroy"],setup(I,{emit:m}){const r=I;let s={0:{label:"Nueva",color:"text-pink"},1:{label:"Aprobada",color:"text-light-green-10"},2:{label:"Rechazada",color:"text-red-14"}},y=k({cols:[{name:"id",label:"ID"},{name:"client",label:"Cliente"},{name:"address",label:"Domicilio",field:c=>`${c.street}, ${c.num_ext}`},{name:"celphone",label:"Telefono"},{name:"email",label:"Correo"},{name:"price",label:"Precio"},{name:"tickets",label:"Ticket"},{name:"status",label:"Estado",field:c=>s[c._status].label,classes:c=>s[c._status].color},{name:"store",label:"Sucursal"},{name:"actions",label:"Actions"}]});const N=c=>{m("restore",c)},h=c=>{m("destroy",c)};return(c,S)=>(x(),C(f,{class:"col"},{default:t(()=>[l(q,{title:"Rechazadas",rows:a(r).quotes,"row-key":"name",columns:a(y).cols},{body:t(n=>[l(ae,{props:n},{default:t(()=>[l(v,{key:"id",props:n},{default:t(()=>[d(u(n.row.id),1)]),_:2},1032,["props"]),l(v,{key:"client",props:n},{default:t(()=>[d(u(n.row.nom_cli),1)]),_:2},1032,["props"]),l(v,{key:"address",props:n},{default:t(()=>[d(u(`${n.row.street}, ${n.row.num_ext}`),1)]),_:2},1032,["props"]),l(v,{key:"celphone",props:n},{default:t(()=>[d(u(n.row.celphone),1)]),_:2},1032,["props"]),l(v,{key:"email",props:n},{default:t(()=>[d(u(n.row.email),1)]),_:2},1032,["props"]),l(v,{key:"price",props:n},{default:t(()=>[d(u(n.row.price),1)]),_:2},1032,["props"]),l(v,{key:"tickets",props:n},{default:t(()=>[d(u(n.row.tickets),1)]),_:2},1032,["props"]),l(v,{key:"status",props:n,class:Y(a(s)[n.row._status].color)},{default:t(()=>[d(u(a(s)[n.row._status].label),1)]),_:2},1032,["props","class"]),l(v,{key:"store",props:n},{default:t(()=>[d(u(n.row.sucursal),1)]),_:2},1032,["props"]),l(v,{key:"actions",props:n},{default:t(()=>[l(g,{flat:"",round:"",icon:"settings_backup_restore",color:"primary",onClick:D=>N(n.row.id),title:"Restaurar"},null,8,["onClick"]),l(g,{flat:"",round:"",icon:"delete_forever",color:"negative",onClick:D=>h(n.row.id),title:"Eliminar permanentemente"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),l(V,{class:"my-card"},{default:t(()=>[l(f,null,{default:t(()=>[l(R,null,{default:t(()=>[P(l(g,{flat:"",label:"Cancelar"},null,512),[[M]])]),_:1})]),_:1})]),_:1})]),_:1}))}},ne={class:"full-width row justify-between item-center"},re=b("div",{class:"text-h5"},"Pendientes",-1),ce={class:"full-width row justify-between item-center"},de=b("div",{class:"text-h5"},"Aceptadas",-1),ue={class:"full-width row justify-between item-center"},me=b("div",{class:"text-h5"},"En Sucursales",-1),fe={class:"text-h6"},pe=b("div",{class:"text-h5 text-center"},"Cliente",-1),_e={class:"text-h4 text-center"},be={class:"text-subtitle2 text-center"},Se={__name:"History",setup(I){const m=ee();let r=k([]),s=k({state:!1,row:null,pts:!1}),y={0:{label:"Nueva",color:"text-pink"},1:{label:"Aprobada",color:"text-light-green-10"},2:{label:"Rechazada",color:"text-red-14"},3:{label:"Sincronizadas",color:"text-deep-orange-10"},4:{label:"Eliminadas",color:"text-deep-orange-10"}},N=k({state:!1,row:null}),h=k({vcolumns:["client","celphone","price","status"],cols:[{name:"id",label:"ID",field:"id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>y[e._status].label,classes:e=>y[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"}],filter:""}),c=k({vcolumns:["client","celphone","price","status","idfs","ReplyStore"],cols:[{name:"id",label:"ID",field:"id"},{name:"idfs",label:"Factusol",field:"fs_id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>y[e._status].label,classes:e=>y[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"},{name:"ReplyStore",label:"ReplicadoEn:",field:"Stores"}],filter:""}),S=k({vcolumns:["client","celphone","price","status","idfs"],cols:[{name:"id",label:"ID",field:"id"},{name:"idfs",label:"Factusol",field:"fs_id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>y[e._status].label,classes:e=>y[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"}],filter:""}),n=T(()=>r.value.filter(e=>e._status==0)),D=T(()=>r.value.filter(e=>e._status==2)),A=T(()=>r.value.filter(e=>e._status==1)),O=T(()=>r.value.filter(e=>e._status==3));const U=async()=>{console.log("Traiendo solicitudes creadas");const e=await Q.get("/admincli/solicitudes");console.log(e),r.value=e.data.solicitudes},j=(e,i)=>{console.log(i._status),s.value.row=i,s.value.state=!0},L=async()=>{s.value.pts=!0;let e=await Q.post("/admincli/addClient",s.value.row).then(o=>o).catch(o=>o);if(console.log(e),e.request.status!=201){console.log("error brou"),console.log(e);let o=e.response.data.error.msg;s.value.pts=!1,m.notify({message:o,icon:"close",color:"negative"})}else{let o=e.data.id,p=r.value.findIndex(w=>w.id==o);r.value[p]._status=e.data._status,r.value[p].fs_id=e.data.fs_id,s.value.state=!1,s.value.pts=!1,m.notify({message:"Cliente Creado",icon:"check_circle",color:"positive"}),console.log(e)}},F=async()=>{s.value.pts=!0;let e=await Q.patch("/admincli/ignoredClient",s.value.row),i=e.data.id,o=r.value.findIndex(p=>p.id==i);r.value[o]._status=e.data._status,s.value.state=!1,s.value.pts=!1,console.log(o),m.notify({message:"Cliente Ignorado",icon:"close",color:"danger"}),console.log(e)},Z=async e=>{let i=await Q.patch("/admincli/Restore",{id:e}),o=i.data.id,p=r.value.findIndex(w=>w.id==o);r.value[p]._status=i.data._status,m.notify({message:"Restaurado",icon:"check",color:"primary"}),console.log(i)},H=async e=>{console.log("amo a destruira "+e);let i=await Q.patch("/admincli/Delete",{id:e}),o=i.data.id,p=r.value.findIndex(w=>w.id==o);r.value[p]._status=i.data._status,m.notify({message:"Eliminado",icon:"close",color:"negative"}),console.log(i)},G=async()=>{s.value.state=!0,s.value.pts=!0,console.log("SINCRONIZANDO CLIENTES");let e=await Q.get("/admincli/syncClient").then(o=>o).catch(o=>o);console.log(e),e.request.status!=200?m.notify({message:"hubo problemas con la replicacion",icon:"close",color:"negative"}):(e.data.forEach(p=>{let w=r.value.findIndex(J=>J.id==p.id);r.value[w]._status=p._status,r.value[w].Stores=p.Stores}),s.value.state=!1,s.value.pts=!1,m.notify({message:"CLIENTES SINCRONIZADOS",icon:"check_circle",color:"positive"}))};return U(),(e,i)=>(x(),C(le,{padding:""},{default:t(()=>[l(V,{class:"my-card"},{default:t(()=>[l(f,{class:"text-right"},{default:t(()=>[l(g,{color:"negative",icon:"archive",label:"",onClick:i[0]||(i[0]=o=>a(N).state=!0)})]),_:1}),l(B),l(f,{horizontal:""},{default:t(()=>[l(f,{class:"col"},{default:t(()=>[l(q,{title:"Solicitudes",rows:a(n),"row-key":"name",columns:a(h).cols,onRowClick:j,filter:a(h).filter,"visible-columns":a(h).vcolumns},{top:t(()=>[b("div",ne,[re,l(E,{modelValue:a(h).filter,"onUpdate:modelValue":i[1]||(i[1]=o=>a(h).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1}),l(f,{class:"col"},{default:t(()=>[l(q,{title:"Aceptados",rows:a(A),columns:a(c).cols,"row-key":"name",filter:a(c).filter,"visible-columns":a(c).vcolumns},{top:t(()=>[b("div",ce,[b("div",null,[l(g,{color:"positive",icon:"sync",onClick:G,disabled:a(A)<=0},null,8,["disabled"])]),de,l(E,{modelValue:a(c).filter,"onUpdate:modelValue":i[2]||(i[2]=o=>a(c).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1})]),_:1})]),_:1}),l(V,{class:"my-card"},{default:t(()=>[l(f,{class:"text-right"}),l(B),l(f,{horizontal:""},{default:t(()=>[l(f,{class:"col"},{default:t(()=>[l(q,{title:"Terminadas",rows:a(O),"row-key":"name",columns:a(S).cols,filter:a(S).filter,"visible-columns":a(S).vcolumns},{top:t(()=>[b("div",ue,[me,l(E,{modelValue:a(S).filter,"onUpdate:modelValue":i[3]||(i[3]=o=>a(S).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1})]),_:1})]),_:1}),l(z,{modelValue:a(s).state,"onUpdate:modelValue":i[4]||(i[4]=o=>a(s).state=o),persistent:a(s).pts},{default:t(()=>[a(s).pts?(x(),C(V,{key:0},{default:t(()=>[l(f,null,{default:t(()=>[l(oe,{color:"primary",size:"md"}),l(te,{offset:[0,8]},{default:t(()=>[d("QSpinnerBall")]),_:1})]),_:1})]),_:1})):(x(),C(V,{key:1},{default:t(()=>[a(s).row._status==0?(x(),C(f,{key:0},{default:t(()=>[b("div",fe,"Solicitud: "+u(a(s).row.id),1),pe,b("div",_e,u(a(s).row.nom_cli),1),b("div",be,"Sucursal: "+u(a(s).row.sucursal),1),l(R,{align:"right"},{default:t(()=>[l(g,{flat:"",onClick:F},{default:t(()=>[d("Rechazar")]),_:1}),l(g,{flat:"",onClick:L},{default:t(()=>[d("Aprobar")]),_:1})]),_:1})]),_:1})):$("",!0),a(s).row._status==1?(x(),C(f,{key:1},{default:t(()=>[d(u(a(s).row)+" - 1 ",1)]),_:1})):$("",!0),a(s).row._status==2?(x(),C(f,{key:2},{default:t(()=>[d(u(a(s).row)+" - 2 ",1)]),_:1})):$("",!0),l(R,null,{default:t(()=>[P(l(g,{flat:"",label:"Cancelar"},null,512),[[M]])]),_:1})]),_:1}))]),_:1},8,["modelValue","persistent"]),l(z,{modelValue:a(N).state,"onUpdate:modelValue":i[5]||(i[5]=o=>a(N).state=o),persistent:""},{default:t(()=>[l(ie,{quotes:a(D),onRestore:Z,onDestroy:H},null,8,["quotes"])]),_:1},8,["modelValue"])]),_:1}))}};export{Se as default};