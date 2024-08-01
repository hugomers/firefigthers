import{Q as L,a as R}from"./QToolbar.2110d20e.js";import{Q as N}from"./QHeader.cfd27692.js";import{Q as T,a as $,b as k}from"./QLayout.f7201ae9.js";import{c as O,i as P,e as m,r as _,a as S,d as l,w as i,o as j,h as I,f as g,l as M,g as K,_ as U,j as A,k as D,m as E,n as c,p as f,q as G,s as J}from"./index.06736d69.js";var W=O({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:y,emit:d}){const{proxy:{$q:v}}=K(),t=P(M,m);if(t===m)return console.error("QFooter needs to be child of QLayout"),m;const u=_(parseInt(a.heightHint,10)),n=_(!0),w=_(S.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=l(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||v.platform.is.ios&&t.isContainer.value===!0),b=l(()=>t.isContainer.value===!0?t.containerHeight.value:w.value),x=l(()=>{if(a.modelValue!==!0)return 0;if(h.value===!0)return n.value===!0?u.value:0;const e=t.scroll.value.position+b.value+u.value-t.height.value;return e>0?e:0}),Q=l(()=>a.modelValue!==!0||h.value===!0&&n.value!==!0),F=l(()=>a.modelValue===!0&&Q.value===!0&&a.reveal===!0),p=l(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(Q.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),z=l(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[v.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[v.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function r(e,o){t.update("footer",e,o)}function s(e,o){e.value!==o&&(e.value=o)}function C({height:e}){s(u,e),r("size",e)}function H(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:B}=t.scroll.value;s(n,e==="up"||o-B<100||t.height.value-b.value-o-u.value<300)}function q(e){F.value===!0&&s(n,!0),d("focusin",e)}i(()=>a.modelValue,e=>{r("space",e),s(n,!0),t.animate()}),i(x,e=>{r("offset",e)}),i(()=>a.reveal,e=>{e===!1&&s(n,a.modelValue)}),i(n,e=>{t.animate(),d("reveal",e)}),i([u,t.scroll,t.height],H),i(()=>v.screen.height,e=>{t.isContainer.value!==!0&&s(w,e)});const V={};return t.instances.footer=V,a.modelValue===!0&&r("size",u.value),r("space",a.modelValue),r("offset",x.value),j(()=>{t.instances.footer===V&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=I(y.default,[g(T,{debounce:0,onResize:C})]);return a.elevated===!0&&e.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:p.value,style:z.value,onFocusin:q},e)}}});const X={},Y=J("div",null,"FireFighters\u{1F525}",-1);function Z(a,y){const d=A("router-view");return D(),E($,{view:"lHh Lpr lFf"},{default:c(()=>[f(N,{elevated:""},{default:c(()=>[f(L,null,{default:c(()=>[f(R,{class:"text-center"},{default:c(()=>[G(" Form Viz ")]),_:1})]),_:1})]),_:1}),f(k,null,{default:c(()=>[f(d)]),_:1}),f(W,{class:"text-center"},{default:c(()=>[Y]),_:1})]),_:1})}var re=U(X,[["render",Z]]);export{re as default};
