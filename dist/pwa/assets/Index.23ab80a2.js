import{u as L,Q as h,c,e as v,d as k,b as w,f as T}from"./use-quasar.ee3478cd.js";import{r as u,d as S,k as g,m as C,n as l,p as t,L as e,s as f,at as m,q as p,av as V,Q as R}from"./index.aeaedf5f.js";import{Q as B,C as F}from"./ClosePopup.b99c5183.js";import{api as I}from"./axios.00cf310b.js";import"./scroll.40262c0e.js";const q={class:"full-width row justify-between item-center"},P=f("div",{class:"text-h5"},"salidas s/ entrada",-1),U={class:"text-h6"},j={class:"text-subtitle2"},K={__name:"Index",setup(z){const E=L();let o=u({state:!1,row:null,pts:!1}),n=u([]),i=u({cols:[{name:"Salida",label:"Salida",field:"SALIDA"},{name:"Sucursal",label:"Sucursal",field:"CLIENTE"},{name:"Referencia",label:"Referencia",field:"REFERENCIA"}],filter:""}),A=u({cols:[{name:"Salida",label:"Salida",field:"SALIDA"},{name:"Sucursal",label:"Sucursal",field:"CLIENTE"},{name:"Referencia",label:"Referencia",field:"REFERENCIA"},{name:"Entrada",label:"Entrada",field:"ENTRADA"}],filter:""}),N=S(()=>n.value.filter(s=>s.ENTRADA!="")),b=S(()=>n.value.filter(s=>s.ENTRADA==""));const D=async()=>{console.log("Cargando Salidas creadas");const s=await I.get("/salidas");console.log(s),n.value=s.data},x=(s,a)=>{console.log(a.SALIDA),o.value.row=a,o.value.state=!0},Q=async()=>{console.log("se creara la entrada");let s=o.value.row.SALIDA,a=await I.post("/Products/invoiceReceived",{factura:s}).then(r=>r).catch(r=>r);if(a.request.status!=200)console.log(a.request.data),E.notify({message:"No se pudo generar la entrada",icon:"close",color:"negative"});else{let r=a.data.Movimientos.FacturaEntrada,_=n.value.findIndex(y=>y.SALIDA==s);console.log(_),n.value[_].ENTRADA=r,o.value.state=!1,E.notify({message:"Entrada "+r+" realizada",icon:"check_circle",color:"positive"})}console.log(a)};return D(),(s,a)=>(g(),C(h,{padding:""},{default:l(()=>[t(w,{class:"my-card"},{default:l(()=>[t(c,{class:"col"},{default:l(()=>[t(v,{title:"Salidas",rows:e(b),"row-key":"name",columns:e(i).cols,filter:e(i).filter,onRowClick:x},{top:l(()=>[f("div",q,[P,t(k,{modelValue:e(i).filter,"onUpdate:modelValue":a[0]||(a[0]=d=>e(i).filter=d),type:"text",label:"Buscar"},null,8,["modelValue"])])]),_:1},8,["rows","columns","filter"])]),_:1}),t(c,{class:"col"},{default:l(()=>[t(v,{title:"Salidas c/ entradas",rows:e(N),"row-key":"name",columns:e(A).cols,filter:e(A).filter},null,8,["rows","columns","filter"])]),_:1})]),_:1}),t(T,{modelValue:e(o).state,"onUpdate:modelValue":a[1]||(a[1]=d=>e(o).state=d),persistent:""},{default:l(()=>[t(w,{class:"my-card"},{default:l(()=>[t(c,null,{default:l(()=>[f("div",U," SALIDA : "+m(e(o).row.SALIDA),1),f("div",j,m(e(o).row.CLIENTE),1)]),_:1}),t(c,null,{default:l(()=>[p(" REFERENCIA : "+m(e(o).row.REFERENCIA),1)]),_:1}),t(B,{align:"right"},{default:l(()=>[V((g(),C(R,{flat:""},{default:l(()=>[p("Cancelar")]),_:1})),[[F]]),t(R,{flat:"",onClick:Q},{default:l(()=>[p("Crear Entrada")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{K as default};
