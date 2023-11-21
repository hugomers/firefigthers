import{Q as Y}from"./QBadge.3bd02123.js";import{u as Z,b as m,e as $,Q as O,c as I,d as N}from"./use-quasar.d978fe8b.js";import{r as p,d as Q,k as w,m as h,n as o,p as l,s as g,q as A,L as t,at as C,O as y,Q as _,N as U,M as B,av as E,az as R}from"./index.2599a239.js";import{Q as ee,a as L}from"./QPage.d9514c95.js";import{Q as x,C as q}from"./ClosePopup.3ebbfe47.js";import{Q as le}from"./QSpinnerDots.91dd088a.js";import{Q as te}from"./QTooltip.c904d386.js";import{api as k}from"./axios.b00cf2c6.js";import"./scroll.447e74c3.js";const ae={class:"text-h4"},oe={class:"q-pa-md"},se={key:0},ne={class:"q-pa-md"},ue={key:0},re={class:"text-h6"},ie={class:"text-subtitle2"},de={class:"text-h6"},ce={class:"text-subtitle2"},Ce={__name:"Index",setup(fe){const b=Z();let c=p({val:null,opts:[]}),S=p([]),u=p(!1),n=p({state:!1,cols:[],filter:""}),i=p({state:!1,row:null}),V=p(!1),v=p({state:!1,row:null}),P=Q(()=>n.value.cols.filter(a=>a.ABONO.includes("-"))),T=Q(()=>n.value.cols.filter(a=>a.ABONO==""||a.ABONO=="''")),M=Q(()=>n.value.cols.filter(a=>a.ABONO=="No se creara Abono"));const F=async()=>{console.log("Cargando Sucursales");const a=await k.get("/abonos/getSuc").then(e=>e).catch(e=>e);a.request.status!=200?console.log(a.response.data):(console.log(a),S.value=a.data,c.value.opts=a.data)},z=async a=>{console.log(a.id);let e=a.id,s=await k.post("/abonos/getDev",{id:e});n.value.cols=s.data,n.value.state=!0,console.log(s.data)},G=(a,e)=>{i.value.state=!0,i.value.row=e},j=async()=>{u.value=!0,console.log("ignorando");let a=i.value.row.DEVOLUCION,e=c.value.val.id,s="No se creara Abono",f={devol:a,idsuc:e,mssg:s},r=await k.post("/Products/updev",f).then(d=>d).catch(d=>d);if(r.request.status!=200)console.log(r.request),b.notify({message:"status: "+r.request.status+" mssg: "+r.request.statusText,icon:"close",color:"negative"});else{console.log(r.data);let d=n.value.cols.findIndex(D=>D.DEVOLUCION==a);n.value.cols[d].ABONO=s,b.notify({message:"Devolucion "+a+" Ignorada",icon:"check",color:"positive"}),i.value.state=!1,u.value=!1}},H=async()=>{console.log("Generando Abono"),u.value=!0;let a={idsuc:c.value.val.id,devolucion:i.value.row.DEVOLUCION,observacion:i.value.row.REFERENCIA},e=await k.post("/Products/trapasAbo",a).then(f=>f).catch(f=>f);if(e.request.status!=200)console.log(e.request),b.notify({message:"status: "+e.request.status+" mssg: "+e.request.statusText,icon:"close",color:"negative"});else{console.log(e.data);let f=n.value.cols.findIndex(r=>r.DEVOLUCION==e.data.Movimientos.Devolucion);n.value.cols[f].ABONO=e.data.Movimientos.Abono,b.notify({message:"Abono "+e.data.Movimientos.Abono+" creado",icon:"check",color:"positive"}),i.value.state=!1,u.value=!1}};let J=()=>{console.log("Mostrando Ignorados"),V.value=!0},K=async(a,e)=>{console.log(e),v.value.state=!0,v.value.row=e},W=async()=>{console.log("se va a restaurar"),u.value=!0;let a=v.value.row.DEVOLUCION,e=c.value.val.id,s="''",f={devol:a,idsuc:e,mssg:s},r=await k.post("/Products/updev",f).then(d=>d).catch(d=>d);if(r.request.status!=200)console.log(r.request),b.notify({message:"status: "+r.request.status+" mssg: "+r.request.statusText,icon:"close",color:"negative"});else{console.log(r.data);let d=n.value.cols.findIndex(D=>D.DEVOLUCION==a);n.value.cols[d].ABONO=s,b.notify({message:"Devolucion "+a+" restaurada",icon:"check",color:"positive"}),v.value.state=!1,u.value=!1}};return F(),(a,e)=>(w(),h(ee,{padding:""},{default:o(()=>[l(O,{class:"my-card row"},{default:o(()=>[l(m,null,{default:o(()=>[g("div",ae,[A(" Devoluciones "),t(c).val?(w(),h(Y,{key:0,align:"top"},{default:o(()=>[A(C(t(c).val.name),1)]),_:1})):y("",!0)])]),_:1}),l(m,null,{default:o(()=>[l($,{filled:"",modelValue:t(c).val,"onUpdate:modelValue":[e[0]||(e[0]=s=>t(c).val=s),z],"option-label":"name","input-debounce":"0",label:"Sucursal",options:t(c).opts,style:{width:"250px"},behavior:"menu"},null,8,["modelValue","options"])]),_:1}),t(n).state?(w(),h(m,{key:0},{default:o(()=>[l(_,{color:"negative",icon:"archive",onClick:t(J)},null,8,["onClick"])]),_:1})):y("",!0)]),_:1}),g("div",oe,[t(n).state?(w(),U("div",se,[l(I,{title:"Devoluciones Pendientes",rows:t(T),"row-key":"name",filter:t(n).filter,onRowClick:G},{"top-right":o(()=>[l(L,{borderless:"",dense:"",debounce:"300",modelValue:t(n).filter,"onUpdate:modelValue":e[1]||(e[1]=s=>t(n).filter=s),placeholder:"Buscar"},{append:o(()=>[l(B,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter"])])):y("",!0)]),g("div",ne,[t(n).state?(w(),U("div",ue,[l(I,{title:"Devoluciones con Abono",rows:t(P),"row-key":"name",filter:t(n).filter},{"top-right":o(()=>[l(L,{borderless:"",dense:"",debounce:"300",modelValue:t(n).filter,"onUpdate:modelValue":e[2]||(e[2]=s=>t(n).filter=s),placeholder:"Buscar"},{append:o(()=>[l(B,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter"])])):y("",!0)]),l(N,{modelValue:t(V),"onUpdate:modelValue":e[3]||(e[3]=s=>R(V)?V.value=s:V=s),persistent:""},{default:o(()=>[l(O,null,{default:o(()=>[l(m,null,{default:o(()=>[l(x,{vertical:"",align:"left"},{default:o(()=>[E(l(_,{flat:"",icon:"arrow_back"},null,512),[[q]])]),_:1})]),_:1}),l(I,{rows:t(M),"row-key":"name",onRowClick:t(K)},null,8,["rows","onRowClick"])]),_:1})]),_:1},8,["modelValue"]),l(N,{modelValue:t(v).state,"onUpdate:modelValue":e[4]||(e[4]=s=>t(v).state=s),persistent:""},{default:o(()=>[l(O,{class:"my-card"},{default:o(()=>[l(m,null,{default:o(()=>[g("div",re," DEVOLUCION : "+C(t(v).row.DEVOLUCION),1),g("div",ie," REF : "+C(t(v).row.REFERENCIA),1)]),_:1}),l(x,{align:"right"},{default:o(()=>[E(l(_,{flat:"",label:"Cerrar",color:"primary"},null,512),[[q]]),l(_,{flat:"",label:"Restaurar",color:"primary",onClick:t(W)},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(N,{modelValue:t(i).state,"onUpdate:modelValue":e[5]||(e[5]=s=>t(i).state=s),persistent:""},{default:o(()=>[l(O,{class:"my-card"},{default:o(()=>[l(m,null,{default:o(()=>[g("div",de,"Devolucion: ("+C(t(i).row.DEVOLUCION)+")",1),g("div",ce,"Referencia: "+C(t(i).row.REFERENCIA),1)]),_:1}),l(m,null,{default:o(()=>[l(x,null,{default:o(()=>[l(_,{flat:"",label:"Ignorar",onClick:j}),l(_,{flat:"",label:"Generar Abono",onClick:H,disable:t(u)},null,8,["disable"])]),_:1})]),_:1}),l(x,null,{default:o(()=>[E(l(_,{flat:"",label:"Cerrar"},null,512),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(N,{modelValue:t(u),"onUpdate:modelValue":e[6]||(e[6]=s=>R(u)?u.value=s:u=s),persistent:t(u)},{default:o(()=>[t(u)?(w(),h(O,{key:0},{default:o(()=>[l(m,{class:"row items-center"},{default:o(()=>[l(le,{color:"secondary",size:"2em"}),l(te,{offset:[0,8]},{default:o(()=>[A("creando..")]),_:1})]),_:1})]),_:1})):y("",!0)]),_:1},8,["modelValue","persistent"])]),_:1}))}};export{Ce as default};
