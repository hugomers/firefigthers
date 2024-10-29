import{f as b,c as K,at as W,au as X,r as h,k,m as C,n as a,p as t,N as l,q as m,av as c,aw as Y,Q as g,ax as P,d as I,s as u,R}from"./index.991b573f.js";import{Q as V,a as p}from"./QCard.7e9739bf.js";import{u as ee,r as z,Q as B}from"./use-quasar.2f956a97.js";import{Q as $}from"./QInput.04f97084.js";import{Q as D}from"./QTable.4f92d824.js";import{Q as te}from"./QTooltip.bd7486b4.js";import{Q as E,C as M}from"./ClosePopup.ed7d7924.js";import{Q as le}from"./QPage.abfca986.js";import{api as Q}from"./axios.966b62b8.js";import{Q as ae,a as v}from"./QTr.6b09cd37.js";const se=[b("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[b("circle",{cx:"5",cy:"50",r:"5"},[b("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"27",cy:"5",r:"5"},[b("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"49",cy:"50",r:"5"},[b("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),b("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})])])];var oe=K({name:"QSpinnerBall",props:W,setup(T){const{cSize:f,classes:r}=X(T);return()=>b("svg",{class:r.value,stroke:"currentColor",width:f.value,height:f.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg"},se)}});const ie={__name:"QuotesArchive",props:{quotes:{default:[],type:Array}},emits:["restore","destroy"],setup(T,{emit:f}){const r=T;let s={0:{label:"Nueva",color:"text-pink"},1:{label:"Aprobada",color:"text-light-green-10"},2:{label:"Rechazada",color:"text-red-14"}},w=h({cols:[{name:"id",label:"ID"},{name:"client",label:"Cliente"},{name:"address",label:"Domicilio",field:d=>`${d.street}, ${d.num_ext}`},{name:"celphone",label:"Telefono"},{name:"email",label:"Correo"},{name:"price",label:"Precio"},{name:"tickets",label:"Ticket"},{name:"status",label:"Estado",field:d=>s[d._status].label,classes:d=>s[d._status].color},{name:"store",label:"Sucursal"},{name:"actions",label:"Actions"}]});const N=d=>{f("restore",d)},x=d=>{f("destroy",d)};return(d,S)=>(k(),C(p,{class:"col"},{default:a(()=>[t(D,{title:"Rechazadas",rows:l(r).quotes,"row-key":"name",columns:l(w).cols},{body:a(n=>[t(ae,{props:n},{default:a(()=>[t(v,{key:"id",props:n},{default:a(()=>[m(c(n.row.id),1)]),_:2},1032,["props"]),t(v,{key:"client",props:n},{default:a(()=>[m(c(n.row.nom_cli),1)]),_:2},1032,["props"]),t(v,{key:"address",props:n},{default:a(()=>[m(c(`${n.row.street}, ${n.row.num_ext}`),1)]),_:2},1032,["props"]),t(v,{key:"celphone",props:n},{default:a(()=>[m(c(n.row.celphone),1)]),_:2},1032,["props"]),t(v,{key:"email",props:n},{default:a(()=>[m(c(n.row.email),1)]),_:2},1032,["props"]),t(v,{key:"price",props:n},{default:a(()=>[m(c(n.row.price),1)]),_:2},1032,["props"]),t(v,{key:"tickets",props:n},{default:a(()=>[m(c(n.row.tickets),1)]),_:2},1032,["props"]),t(v,{key:"status",props:n,class:Y(l(s)[n.row._status].color)},{default:a(()=>[m(c(l(s)[n.row._status].label),1)]),_:2},1032,["props","class"]),t(v,{key:"store",props:n},{default:a(()=>[m(c(n.row.sucursal),1)]),_:2},1032,["props"]),t(v,{key:"actions",props:n},{default:a(()=>[t(g,{flat:"",round:"",icon:"settings_backup_restore",color:"primary",onClick:q=>N(n.row.id),title:"Restaurar"},null,8,["onClick"]),t(g,{flat:"",round:"",icon:"delete_forever",color:"negative",onClick:q=>x(n.row.id),title:"Eliminar permanentemente"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),t(V,{class:"my-card"},{default:a(()=>[t(p,null,{default:a(()=>[t(E,null,{default:a(()=>[P(t(g,{flat:"",label:"Cancelar"},null,512),[[M]])]),_:1})]),_:1})]),_:1})]),_:1}))}},ne={class:"full-width row justify-between item-center"},re=u("div",{class:"text-h5"},"Pendientes",-1),ce={class:"full-width row justify-between item-center"},de=u("div",{class:"text-h5"},"Aceptadas",-1),ue={class:"full-width row justify-between item-center"},me=u("div",{class:"text-h5"},"En Sucursales",-1),fe={class:"text-h6 text-center"},pe=u("div",{class:"text-h5 text-left"},"Cliente",-1),_e={class:"text-h5 text-left"},be={class:"text-subtitle2 text-left"},ve={class:"text-subtitle2 text-left"},we={class:"text-subtitle2 text-left"},ye={class:"text-subtitle2 text-left"},ge={class:"text-subtitle2 text-left"},De={__name:"History",setup(T){const f=ee();let r=h([]),s=h({state:!1,row:null,pts:!1}),w={0:{label:"Nueva",color:"text-pink"},1:{label:"Aprobada",color:"text-light-green-10"},2:{label:"Rechazada",color:"text-red-14"},3:{label:"Sincronizadas",color:"text-deep-orange-10"},4:{label:"Eliminadas",color:"text-deep-orange-10"}},N=h({state:!1,row:null}),x=h({vcolumns:["client","celphone","price","status"],cols:[{name:"id",label:"ID",field:"id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>w[e._status].label,classes:e=>w[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"}],filter:""}),d=h({vcolumns:["client","celphone","price","status","idfs","ReplyStore"],cols:[{name:"id",label:"ID",field:"id"},{name:"idfs",label:"Factusol",field:"fs_id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>w[e._status].label,classes:e=>w[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"},{name:"ReplyStore",label:"ReplicadoEn:",field:"Stores"}],filter:""}),S=h({vcolumns:["client","celphone","price","status","idfs"],cols:[{name:"id",label:"ID",field:"id"},{name:"idfs",label:"Factusol",field:"fs_id"},{name:"client",label:"Cliente",field:"nom_cli"},{name:"address",label:"Domicilio",field:e=>`${e.street}, ${e.num_ext}`},{name:"celphone",label:"Telefono",field:"celphone"},{name:"email",label:"Correo",field:"email"},{name:"price",label:"Precio",field:"price"},{name:"tickets",label:"Ticket",field:"tickets"},{name:"status",label:"Estado",field:e=>w[e._status].label,classes:e=>w[e._status].color},{name:"store",label:"Sucursal",field:"sucursal"}],filter:""}),n=I(()=>r.value.filter(e=>e._status==0)),q=I(()=>r.value.filter(e=>e._status==2)),A=I(()=>r.value.filter(e=>e._status==1)),U=I(()=>r.value.filter(e=>e._status==3));const O=async()=>{console.log("Traiendo solicitudes creadas");const e=await Q.get("/admincli/solicitudes");console.log(e),r.value=e.data.solicitudes},j=(e,i)=>{console.log(i._status),s.value.row=i,s.value.state=!0},F=async()=>{s.value.pts=!0;let e=await Q.post("/admincli/addClient",s.value.row).then(o=>o).catch(o=>o);if(console.log(e),e.request.status!=201){console.log("error brou"),console.log(e);let o=e.response.data.error.msg;s.value.pts=!1,f.notify({message:o,icon:"close",color:"negative"})}else{let o=e.data.id,_=r.value.findIndex(y=>y.id==o);r.value[_]._status=e.data._status,r.value[_].fs_id=e.data.fs_id,s.value.state=!1,s.value.pts=!1,f.notify({message:"Cliente Creado",icon:"check_circle",color:"positive"}),console.log(e)}},L=async()=>{s.value.pts=!0;let e=await Q.patch("/admincli/ignoredClient",s.value.row),i=e.data.id,o=r.value.findIndex(_=>_.id==i);r.value[o]._status=e.data._status,s.value.state=!1,s.value.pts=!1,console.log(o),f.notify({message:"Cliente Ignorado",icon:"close",color:"danger"}),console.log(e)},Z=async e=>{let i=await Q.patch("/admincli/Restore",{id:e}),o=i.data.id,_=r.value.findIndex(y=>y.id==o);r.value[_]._status=i.data._status,f.notify({message:"Restaurado",icon:"check",color:"primary"}),console.log(i)},H=async e=>{console.log("amo a destruira "+e);let i=await Q.patch("/admincli/Delete",{id:e}),o=i.data.id,_=r.value.findIndex(y=>y.id==o);r.value[_]._status=i.data._status,f.notify({message:"Eliminado",icon:"close",color:"negative"}),console.log(i)},G=async()=>{s.value.state=!0,s.value.pts=!0,console.log("SINCRONIZANDO CLIENTES");let e=await Q.get("/admincli/syncClient").then(o=>o).catch(o=>o);console.log(e),e.request.status!=200?f.notify({message:"hubo problemas con la replicacion",icon:"close",color:"negative"}):(e.data.forEach(_=>{let y=r.value.findIndex(J=>J.id==_.id);r.value[y]._status=_._status,r.value[y].Stores=_.Stores}),s.value.state=!1,s.value.pts=!1,f.notify({message:"CLIENTES SINCRONIZADOS",icon:"check_circle",color:"positive"}))};return O(),(e,i)=>(k(),C(le,{padding:""},{default:a(()=>[t(V,{class:"my-card"},{default:a(()=>[t(p,{class:"text-right"},{default:a(()=>[t(g,{color:"negative",icon:"archive",label:"",onClick:i[0]||(i[0]=o=>l(N).state=!0)})]),_:1}),t(z),t(p,{horizontal:""},{default:a(()=>[t(p,{class:"col"},{default:a(()=>[t(D,{title:"Solicitudes",rows:l(n),"row-key":"name",columns:l(x).cols,onRowClick:j,filter:l(x).filter,"visible-columns":l(x).vcolumns},{top:a(()=>[u("div",ne,[re,t($,{modelValue:l(x).filter,"onUpdate:modelValue":i[1]||(i[1]=o=>l(x).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1}),t(p,{class:"col"},{default:a(()=>[t(D,{title:"Aceptados",rows:l(A),columns:l(d).cols,"row-key":"name",filter:l(d).filter,"visible-columns":l(d).vcolumns},{top:a(()=>[u("div",ce,[u("div",null,[t(g,{color:"positive",icon:"sync",onClick:G,disabled:l(A)<=0},null,8,["disabled"])]),de,t($,{modelValue:l(d).filter,"onUpdate:modelValue":i[2]||(i[2]=o=>l(d).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1})]),_:1})]),_:1}),t(V,{class:"my-card"},{default:a(()=>[t(p,{class:"text-right"}),t(z),t(p,{horizontal:""},{default:a(()=>[t(p,{class:"col"},{default:a(()=>[t(D,{title:"Terminadas",rows:l(U),"row-key":"name",columns:l(S).cols,filter:l(S).filter,"visible-columns":l(S).vcolumns},{top:a(()=>[u("div",ue,[me,t($,{modelValue:l(S).filter,"onUpdate:modelValue":i[3]||(i[3]=o=>l(S).filter=o),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter","visible-columns"])]),_:1})]),_:1})]),_:1}),t(B,{modelValue:l(s).state,"onUpdate:modelValue":i[4]||(i[4]=o=>l(s).state=o),persistent:l(s).pts},{default:a(()=>[l(s).pts?(k(),C(V,{key:0},{default:a(()=>[t(p,null,{default:a(()=>[t(oe,{color:"primary",size:"md"}),t(te,{offset:[0,8]},{default:a(()=>[m("Dando de alta en sucursales :)")]),_:1})]),_:1})]),_:1})):(k(),C(V,{key:1},{default:a(()=>[l(s).row._status==0?(k(),C(p,{key:0},{default:a(()=>[u("div",fe,"Solicitud: "+c(l(s).row.id),1),pe,u("div",_e,c(l(s).row.nom_cli),1),u("div",be,"Sucursal: "+c(l(s).row.sucursal),1),u("div",ve,"Precio: "+c(l(s).row.price),1),u("div",we,"Telefono: "+c(l(s).row.celphone),1),u("div",ye,"Correo: "+c(l(s).row.email),1),u("div",ge,"Solicitado: "+c(l(s).row.created_at),1)]),_:1})):R("",!0),t(E,{align:"right"},{default:a(()=>[t(g,{flat:"",onClick:L,color:"negative"},{default:a(()=>[m("Rechazar")]),_:1}),t(g,{flat:"",onClick:F,color:"positive"},{default:a(()=>[m("Aprobar")]),_:1})]),_:1}),l(s).row._status==1?(k(),C(p,{key:1},{default:a(()=>[m(c(l(s).row)+" - 1 ",1)]),_:1})):R("",!0),l(s).row._status==2?(k(),C(p,{key:2},{default:a(()=>[m(c(l(s).row)+" - 2 ",1)]),_:1})):R("",!0),t(E,null,{default:a(()=>[P(t(g,{flat:"",label:"Cancelar"},null,512),[[M]])]),_:1})]),_:1}))]),_:1},8,["modelValue","persistent"]),t(B,{modelValue:l(N).state,"onUpdate:modelValue":i[5]||(i[5]=o=>l(N).state=o),persistent:""},{default:a(()=>[t(ie,{quotes:l(q),onRestore:Z,onDestroy:H},null,8,["quotes"])]),_:1},8,["modelValue"])]),_:1}))}};export{De as default};