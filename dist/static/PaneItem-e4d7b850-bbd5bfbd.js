import{g as _,ae as j,af as F,ag as L,r as o,ah as M,a as e,ai as R,Z as P,T as B,aj as E,ak as W,al as z,am as K,j as p,an as N}from"./sanity-48da18b2.js";const O=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(N,{})});function U(t){const{layout:n,value:a}=t;return e(P,{...O(a._id,a._type),layout:n})}function k(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function $(t){const{icon:n,id:a,layout:i="default",pressed:y,schemaType:s,selected:u,title:l,value:c,margin:I,marginBottom:v,marginTop:C}=t,S=_(),d=j(),{ChildLink:m}=F(),f=L(a),h=!!(s&&s.name&&S.get(s.name)),[b,r]=o.useState(!1),w=o.useMemo(()=>c&&M(c)?!s||!h?e(U,{value:c}):e(R,{documentPreviewStore:d,icon:k(n,s,z),layout:i,schemaType:s,value:c,presence:f}):e(P,{status:e(B,{muted:!0,children:e(E,{})}),icon:k(n,s,K),layout:i,title:l}),[d,h,n,i,s,l,c,f]),x=o.useMemo(()=>function(T){return e(m,{...T,childId:a})},[m,a]),D=o.useCallback(g=>{if(g.metaKey){r(!1);return}r(!0)},[]);return o.useEffect(()=>r(!1),[u]),e(W,{__unstable_focusRing:!0,as:x,"data-as":"a","data-ui":"PaneItem",margin:I,marginBottom:v,marginTop:C,onClick:D,padding:2,pressed:y,radius:2,selected:u||b,sizing:"border",tabIndex:-1,tone:"inherit",children:w})}export{$ as P};
