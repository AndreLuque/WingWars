(this["webpackJsonpwingwars-frontend"]=this["webpackJsonpwingwars-frontend"]||[]).push([[0],{418:function(e,t){},420:function(e,t){},424:function(e,t){},425:function(e,t){},450:function(e,t){},452:function(e,t){},462:function(e,t){},464:function(e,t){},475:function(e,t){},477:function(e,t){},493:function(e,t){},526:function(e,t){},527:function(e,t){},595:function(e,t){},597:function(e,t){},602:function(e,t){},604:function(e,t){},611:function(e,t){},623:function(e,t){},626:function(e,t){},631:function(e,t){},710:function(e,t){},743:function(e,t){},828:function(e,t){},834:function(e,t,s){},835:function(e,t,s){},836:function(e,t,s){},837:function(e,t,s){},838:function(e,t,s){},839:function(e,t,s){},840:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),l=s(12),n=s(848),i=s(4),r=s.n(i),o=s(2),d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"loader",children:Object(o.jsxs)("div",{className:"sk-cube-grid",children:[Object(o.jsx)("div",{className:"sk-cube sk-cube1"}),Object(o.jsx)("div",{className:"sk-cube sk-cube2"}),Object(o.jsx)("div",{className:"sk-cube sk-cube3"}),Object(o.jsx)("div",{className:"sk-cube sk-cube4"}),Object(o.jsx)("div",{className:"sk-cube sk-cube5"}),Object(o.jsx)("div",{className:"sk-cube sk-cube6"}),Object(o.jsx)("div",{className:"sk-cube sk-cube7"}),Object(o.jsx)("div",{className:"sk-cube sk-cube8"}),Object(o.jsx)("div",{className:"sk-cube sk-cube9"})]})})})},x=s(27),u=s(210),j=function(e){var t=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i.Suspense,{fallback:Object(o.jsx)(d,{}),children:Object(o.jsx)(x.a,{render:function(e){var s=e.location;return Object(o.jsx)(u.TransitionGroup,{className:"fade",children:Object(o.jsx)(u.CSSTransition,{classNames:"transition",timeout:200,children:Object(o.jsx)("div",{children:Object(o.jsx)(x.c,{children:t})})},s.key)})}})})})},m=s(16);s(70);var b=s(153);function f(e,t){e.preventDefault(),window.open(t)}var h,p,g=s(128),O=s.n(g),w=s(849),v=s(126),N=s.n(v),y=function(){var e=r.a.createContext(void 0);return[function(){var t=r.a.useContext(e);if(!t)throw new Error("useCtx must be inside a Provider with a value");return t},e.Provider]}(),C=Object(m.a)(y,2),k=C[0],S=C[1],T=function(e){var t=e.children,s=window.ethereum,a=Object(i.useState)(localStorage.getItem("gnomes-address")||""),n=Object(m.a)(a,2),r=n[0],d=n[1],x=Object(i.useState)(!1),u=Object(m.a)(x,1)[0],j=Object(i.useState)(0),b=Object(m.a)(j,2),f=b[0],h=b[1],p=Object(i.useState)(),g=Object(m.a)(p,1)[0],v=Object(i.useState)(O.a.duration(0,"milliseconds")),y=Object(m.a)(v,2),C=y[0],k=y[1],T=Object(i.useState)(!1),E=Object(m.a)(T,2),L=E[0],F=E[1],P=Object(i.useState)(window.location.pathname),R=Object(m.a)(P,2),H=R[0],A=R[1],D=Object(i.useState)(!!parseInt(null!=="0"?"0":"")),I=Object(m.a)(D,1)[0],W=Object(w.a)(["auth"]),B=Object(m.a)(W,1)[0],M=Object(i.useState)(new N.a(s)),V=Object(m.a)(M,1)[0],G=Object(i.useState)(!0),z=Object(m.a)(G,1)[0],_=Object(i.useState)(1e3),J=Object(m.a)(_,1)[0],K=Object(i.useState)(O.a.tz("2022-02-02 20:22","Europe/Amsterdam").valueOf()-O()().valueOf()),Y=Object(m.a)(K,2),Z=Y[0],U=Y[1],q=Object(i.useState)(Math.floor(Z/1e3)<0),Q=Object(m.a)(q,2),X=Q[0],$=Q[1];Object(i.useEffect)((function(){Math.floor(Z/1e3)>=0?k(O.a.duration(Z,"milliseconds")):$(!0),F(!1)}),[Z]),Object(i.useEffect)((function(){!function(e){localStorage.setItem("gnomes-address",e),Promise.resolve()}(r)}),[r]),Object(i.useEffect)((function(){ee()}),[V]),function(e,t){var s=Object(i.useRef)(e);Object(i.useEffect)((function(){s.current=e}),[e]),Object(i.useEffect)((function(){if(null!==t){var e=setInterval((function(){return s.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){U(Z-J)}),1e3);var ee=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(S,{value:{address:r,authenticated:u,balance:f,contract:g,duration:C,loading:L,path:H,ready:X,route:I,token:B,web3:V,whitelist:z,setAddress:d,setBalance:h,setPath:A},children:t})})},E=s(76),L="/",F="https://instagram.com/wingwarsclub ",P="#",R="https://twitter.com/wing_wars",H="https://discord.com/invite/bB5RVrNrpm",A="/documents/privacy_policy.pdf",D="/documents/terms_of_service.pdf",I=s.p+"static/media/icon.0af3984b.png",W=["title","titleId"];function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var s,a,c=function(e,t){if(null==e)return{};var s,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)s=l[a],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)s=l[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}function V(e,t){var s=e.title,a=e.titleId,c=M(e,W);return i.createElement("svg",B({width:22,height:23,viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),s?i.createElement("title",{id:a},s):null,h||(h=i.createElement("path",{d:"M3.40554 12.1885L3.46823 12.0912L7.24904 6.25142C7.3043 6.16589 7.4342 6.17476 7.47602 6.26762C8.10763 7.6653 8.65268 9.40352 8.39733 10.4857C8.28833 10.9309 7.98968 11.5339 7.65369 12.0912C7.61041 12.1723 7.56261 12.2519 7.51184 12.3286C7.48797 12.3639 7.44763 12.3846 7.40432 12.3846H3.51603C3.41148 12.3846 3.35028 12.2725 3.40554 12.1885Z"})),p||(p=i.createElement("path",{d:"M20.3078 13.3968V14.3725C20.3078 14.4285 20.2736 14.4784 20.224 14.5001C19.92 14.6309 18.879 15.1102 18.4462 15.714C17.3417 17.2563 16.4978 19.4615 14.6115 19.4615H6.74179C3.9526 19.4615 1.69238 17.1863 1.69238 14.3788V14.2885C1.69238 14.2138 1.75288 14.1531 1.82733 14.1531H6.21436C6.30123 14.1531 6.36485 14.234 6.3571 14.3196C6.32606 14.606 6.37881 14.8986 6.51376 15.1647C6.77437 15.6954 7.31424 16.0268 7.8975 16.0268H10.0693V14.3258H7.92233C7.81217 14.3258 7.74705 14.1982 7.81063 14.108C7.83392 14.0722 7.86029 14.0348 7.88821 13.9928C8.0914 13.7034 8.38151 13.2536 8.67003 12.7416C8.86706 12.3961 9.05787 12.0272 9.21145 11.6569C9.24248 11.5899 9.26728 11.5215 9.29211 11.4545C9.33398 11.3363 9.37744 11.2258 9.40844 11.1153C9.43948 11.0219 9.46431 10.9238 9.48913 10.832C9.56205 10.5177 9.59305 10.1846 9.59305 9.83912C9.59305 9.70373 9.58684 9.56212 9.57443 9.4267C9.56825 9.27886 9.54963 9.13102 9.53101 8.98318C9.51859 8.85244 9.49534 8.72328 9.47051 8.5879C9.43948 8.39024 9.39606 8.19416 9.3464 7.99651L9.32935 7.92181C9.29211 7.78643 9.26107 7.65723 9.21766 7.52185C9.09508 7.09698 8.95393 6.68301 8.80502 6.29551C8.75073 6.14144 8.68865 5.9936 8.62661 5.84576C8.53508 5.62319 8.442 5.42089 8.35668 5.22946C8.31326 5.14231 8.27601 5.06293 8.2388 4.98201C8.1969 4.89019 8.15348 4.79839 8.11003 4.71121C8.07902 4.64429 8.04332 4.58205 8.01849 4.51981L7.75325 4.02802C7.71601 3.9611 7.77805 3.88173 7.85096 3.90196L9.51084 4.35329H9.51551C9.51859 4.35329 9.52014 4.35484 9.52172 4.35484L9.74042 4.41553L9.98089 4.484L10.0693 4.50891V3.51913C10.0693 3.04135 10.4509 2.65384 10.9225 2.65384C11.1583 2.65384 11.3724 2.75031 11.526 2.90751C11.6795 3.06471 11.7757 3.27947 11.7757 3.51913V4.98824L11.9526 5.03803C11.9665 5.0427 11.9805 5.04893 11.9929 5.05826C12.0363 5.09094 12.0984 5.13921 12.1775 5.19832C12.2395 5.24814 12.3062 5.30883 12.3869 5.37107C12.5467 5.50026 12.7375 5.66678 12.9469 5.85818C13.0028 5.90645 13.0571 5.95623 13.1067 6.00605C13.3766 6.25814 13.6791 6.55385 13.9677 6.88067C14.0483 6.97247 14.1274 7.06584 14.2081 7.1639C14.2888 7.2635 14.3741 7.36155 14.4486 7.45961C14.5463 7.59032 14.6518 7.7257 14.7433 7.86735C14.7867 7.93427 14.8364 8.00273 14.8783 8.06965C14.9962 8.24863 15.1001 8.43383 15.1994 8.619C15.2413 8.7046 15.2847 8.79798 15.3219 8.88981C15.4321 9.13725 15.519 9.38937 15.5748 9.64149C15.5919 9.69596 15.6043 9.7551 15.6105 9.80801V9.82044C15.6291 9.89516 15.6353 9.97454 15.6415 10.0555C15.6663 10.3138 15.6539 10.5721 15.5981 10.832C15.5748 10.9425 15.5438 11.0468 15.5066 11.1573C15.4693 11.2631 15.4321 11.3736 15.384 11.4779C15.2909 11.6942 15.1808 11.9105 15.0505 12.1128C15.0086 12.1875 14.9589 12.2669 14.9093 12.3416C14.855 12.421 14.7991 12.4957 14.7495 12.5688C14.6813 12.6622 14.6084 12.7602 14.5339 12.8474C14.4672 12.9392 14.3989 13.031 14.3245 13.112C14.2205 13.2349 14.1212 13.3516 14.0173 13.4637C13.9552 13.5368 13.8885 13.6115 13.8203 13.6784C13.7536 13.7531 13.6853 13.8201 13.6233 13.8823C13.5194 13.9866 13.4325 14.0675 13.3596 14.1344L13.1889 14.2916C13.1641 14.3134 13.1315 14.3258 13.0974 14.3258H11.7757V16.0268H13.4387C13.811 16.0268 14.1647 15.8946 14.4501 15.6518C14.5478 15.5662 14.9745 15.1958 15.4786 14.6371C15.4957 14.6184 15.5174 14.6044 15.5422 14.5982L20.1356 13.266C20.2209 13.2411 20.3078 13.3065 20.3078 13.3968Z"})))}var G,z,_=i.forwardRef(V),J=(s.p,function(e){var t=e.url,s=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{onClick:function(e){return f(e,t)},className:"w-full group text-left",children:Object(o.jsx)("span",{className:"text-14 sm:text-16 md:text-18 font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue",children:s})})})}),K=function(e){var t=e.url,s=e.icon;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{onClick:function(e){return f(e,t)},className:"w-50 h-50 rounded-full bg-white-10 hover:bg-white flex items-center justify-center transition duration-200 group",children:s})})},Y=s(35),Z=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"w-full bg-green relative",children:Object(o.jsx)("div",{className:"w-full pb-30 sm:pb-40 pt-30 sm:pt-40 xl:pt-60 justify-center flex px-20 sm:px-30",children:Object(o.jsxs)("div",{className:"w-full max-w-screen-2xl grid grid-cols-1 gap-20 sm:gap-30 md:gap-40",children:[Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 xl:grid-cols-[1fr,auto] items-start gap-20 sm:gap-40 justify-between",children:[Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 gap-30",children:[Object(o.jsx)("div",{className:"w-full flex justify-start",children:Object(o.jsx)(E.b,{to:L,className:"grid flow items-center justify-center gap-12",children:Object(o.jsx)("img",{src:I,alt:"",className:"h-30 sm:h-50"})})}),Object(o.jsx)("div",{className:"w-full flex justify-start",children:Object(o.jsx)("div",{className:"w-[400px] max-w-full text-14 sm:text-16 md:text-18 text-white-60",children:"Chickens and Pigeons vie for the absolute control of the planet, and the title of the deadliest beasts."})})]}),Object(o.jsx)("div",{className:"w-full flex items-start",children:Object(o.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-40 sm:gap-60 xl:gap-80 items-start",children:[Object(o.jsx)("div",{className:"w-full flex items-start",children:Object(o.jsxs)("div",{className:"grid grid-cols-1 gap-30",children:[Object(o.jsx)("div",{className:"w-full font-bold text-24 text-white",children:"Links"}),Object(o.jsxs)("div",{className:"w-[210px] grid grid-cols-1 gap-20",children:[Object(o.jsx)(J,{url:L,title:"Home"}),Object(o.jsx)(J,{url:H,title:"Contact"}),Object(o.jsx)(J,{url:A,title:"Privacy Policy"}),Object(o.jsx)(J,{url:D,title:"Terms of Service"})]})]})}),Object(o.jsx)("div",{className:"w-full flex items-start",children:Object(o.jsxs)("div",{className:"grid grid-cols-1 gap-30",children:[Object(o.jsx)("div",{className:"w-full font-bold text-24 text-white",children:"Our social media"}),Object(o.jsxs)("div",{className:"w-full grid grid-cols-4 justify-start gap-20",children:[Object(o.jsx)(K,{url:R,icon:Object(o.jsx)(Y.d,{className:"text-22 text-white group-hover:text-grey transition-all duration-200"})}),Object(o.jsx)(K,{url:H,icon:Object(o.jsx)(Y.a,{className:"text-22 text-white group-hover:text-grey transition-all duration-200"})}),Object(o.jsx)(K,{url:F,icon:Object(o.jsx)(Y.b,{className:"text-22 text-white group-hover:text-grey transition-all duration-200"})}),Object(o.jsx)(K,{url:P,icon:Object(o.jsx)(_,{className:"fill-current text-22 text-white group-hover:text-grey transition-all duration-200"})})]})]})})]})})]}),Object(o.jsx)("div",{className:"w-full border-b-1 border-white opacity-5"}),Object(o.jsxs)("div",{className:"w-full text-14 sm:text-16 md:text-18 text-white-60 text-center",children:["Copyright \xa9 Wing Wars ",(new Date).getFullYear()]})]})})})})},U=s.p+"static/media/wanted.a21e110f.png",q=s.p+"static/media/1.5ff916f3.jpg",Q=s.p+"static/media/10.e84fa0d7.png",X=s.p+"static/media/11.46c48575.png",$=s.p+"static/media/12.f9cba2e2.png",ee=s.p+"static/media/13.54eec350.png",te=s.p+"static/media/14.29e1fd2d.png",se=s.p+"static/media/15.e38e0c8d.png",ae=s.p+"static/media/16.23733621.png",ce=s.p+"static/media/2.d42b44ca.jpg",le=s.p+"static/media/3.d6622f2c.jpg",ne=s.p+"static/media/4.74a634c1.jpg",ie=s.p+"static/media/5.7984dae7.png",re=s.p+"static/media/6.1be4141d.png",oe=s.p+"static/media/7.773bd899.png",de=s.p+"static/media/8.d6afe3f7.png",xe=s.p+"static/media/9.97edb2fe.png",ue=function(e){var t=e.image;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:t,alt:"",className:"w-180 sm:w-250 h-180 sm:h-250"})})},je=function(){var e=Object(i.useState)([q,xe,ce,Q,le,X,ne,$]),t=Object(m.a)(e,1)[0],s=Object(i.useState)([ie,ee,re,te,oe,se,de,ae]),a=Object(m.a)(s,1)[0],c=Object(i.useState)(0),l=Object(m.a)(c,2),n=l[0],r=l[1];Object(i.useEffect)((function(){return d(),window.addEventListener("scroll",d,{passive:!0}),function(){window.removeEventListener("scroll",d)}}),[]);var d=function(){var e=window.scrollY;r(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsxs)("div",{className:"w-[590px] grid grid-cols-1",children:[Object(o.jsxs)("div",{className:"w-full mb-24 text-28 sm:text-36 md:text-[48px] text-white font-black text-center",children:["That the greatest killers in nature are"," ",Object(o.jsx)("span",{className:"text-28 sm:text-36 md:text-[48px] text-red font-black",children:"chickens"})," and"," ",Object(o.jsx)("span",{className:"text-28 sm:text-36 md:text-[48px] text-blue font-black",children:"pigeons"})]}),Object(o.jsx)("div",{className:"w-full mb-32 text-center text-14 sm:text-16 md:text-18 text-white-60",children:"They trained, bred and enhanced us, the natural sons of Valhalla, the offspring of Mars, the hordes of Kalli. They took our killer instincts and amped them to eleven."}),Object(o.jsx)("div",{className:"w-full mb-32 flex justify-center",children:Object(o.jsxs)("button",{onClick:function(e){return f(e,H)},className:"h-[56px] rounded-full bg-blue flex items-center justify-center px-32 gap-12",children:[Object(o.jsx)(Y.a,{className:"text-white"}),Object(o.jsx)("span",{className:"text-white font-bold",children:"Join discord"})]})})]})}),Object(o.jsxs)("div",{className:"w-full relative h-[360px] sm:h-[770px] mt-[60px]",children:[Object(o.jsxs)("div",{className:"hidden sm:flex absolute top-0 w-screen left-[50%] transform translate-x-[-50%] z-20",children:[Object(o.jsx)("div",{className:"absolute top-[-80px] sm:top-0 w-full h-[200px] bg-gradient-to-b from-grey to-transparent"}),Object(o.jsx)("img",{src:U,alt:"",className:"max-w-[210%] absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[-20%]"})]}),Object(o.jsx)("div",{className:"w-[calc(100vw+200px)] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] mb-0 sm:mb-30 flex justify-center",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 gap-10",children:[Object(o.jsx)("div",{className:"w-full overflow-x-hidden h-180 sm:h-[250px] relative",children:Object(o.jsx)("div",{style:{left:"".concat(-n,"px")},className:"absolute top-0 flex space-x-10 w-max",children:new Array(3).fill(1).map((function(e,s){return Object(o.jsx)("div",{className:"flex space-x-10",children:t.map((function(e,t){return Object(o.jsx)(ue,{image:e},t)}))},s)}))})}),Object(o.jsx)("div",{className:"w-full overflow-x-hidden h-180 sm:h-[250px] relative",children:Object(o.jsx)("div",{style:{right:"".concat(-n,"px")},className:"absolute top-0 flex space-x-[10px] w-max",children:new Array(3).fill(1).map((function(e,t){return Object(o.jsx)("div",{className:"flex space-x-[10px]",children:a.map((function(e,t){return Object(o.jsx)(ue,{image:e},t)}))},t)}))})}),Object(o.jsx)("div",{className:"w-full overflow-x-hidden h-180 sm:h-[250px] relative",children:Object(o.jsx)("div",{style:{left:"".concat(-n,"px")},className:"absolute top-0 flex space-x-[10px] w-max",children:new Array(3).fill(1).map((function(e,s){return Object(o.jsx)("div",{className:"flex space-x-[10px]",children:t.map((function(e,t){return Object(o.jsx)(ue,{image:e},t)}))},s)}))})})]})})]})]})},me=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),s=Object(i.useRef)(null),a=Object(i.useRef)(null),c=Object(i.useRef)(null),l=Object(i.useState)(0),n=Object(m.a)(l,2),r=n[0],d=n[1],x=Object(i.useState)(0),u=Object(m.a)(x,2),j=u[0],b=u[1],f=Object(i.useState)([!1,!1,!1,!1]),h=Object(m.a)(f,2),p=h[0],g=h[1],O=Object(i.useState)([{title:"SO, IT BEGINS",sub:"The awakening",text:"Wing wars will be built from the grounds up, just like Rome. During this phase we will start recruiting soldiers for the Wing Wars army, these first soldiers will be the base of what will someday be the strongest community in the metaverse."},{title:"STRETCH FOR THE SUMMIT",sub:"Conquest of the Metaverse",text:"We are not here to take part; we are here to take over. A lot of money will be spent to make sure everyone in crypto knows about us and the right people join. We will create a community of 100,000 people."},{title:"THE ALMIGHTY SALE",sub:"Prepare your wallet",text:"Private and public mint will take place during this phase. Release date will be announced one week before mint, stay tuned... Check the benefits of owning a Wing Wars NFT below."},{title:"THE ULTIMATE BATTLE",sub:"Prepare for war",text:"Start staking your NFTs to earn the Wing Wars token and wait for the most epic game in crypto gaming to be developed. The war is about to begin."}]),w=Object(m.a)(O,1)[0];Object(i.useEffect)((function(){v()}),[]),Object(i.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]),Object(i.useEffect)((function(){b((function(e){return Math.max(e,-r+window.innerHeight/2)}))}),[r]);var v=function(){e.current?d(e.current.getBoundingClientRect().top):d(0),N()},N=function(){g((function(e){return e.map((function(e,t){return e||C(t)}))}))},y=function(e){switch(e){case 0:return t;case 1:return s;case 2:return a;case 3:return c;default:return t}},C=function(e){var t=y(e);return!!t.current&&t.current.getBoundingClientRect().top<window.innerHeight/2};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"#roadmap",className:"w-full flex justify-center",children:Object(o.jsxs)("div",{className:"w-[900px] max-w-full relative",children:[Object(o.jsxs)("div",{className:"absolute w-6 top-0 bottom-0 left-[16px] sm:left-[139px] md:left-[155px] lg:left-[195px] bg-[#3d3d3d] overflow-hidden",children:[Object(o.jsx)("div",{ref:e,style:{height:"".concat(j,"px")},className:"absolute top-0 w-6 bg-red overflow-hidden"}),Object(o.jsxs)("div",{className:"absolute top-0 bottom-0 right-0 w-6 ",children:[Object(o.jsx)("div",{className:"absolute top-0 left-0 w-6 h-40 bg-gradient-to-b from-grey to-transparent"}),Object(o.jsx)("div",{className:"absolute bottom-0 left-0 w-6 h-40 bg-gradient-to-t from-grey to-transparent"})]})]}),Object(o.jsx)("div",{className:"w-full grid grid-cols-1 gap-40 sm:gap-60 md:gap-80 2xl:gap-[140px]",children:w.map((function(e,t){return Object(o.jsxs)("div",{className:"relative w-full grid grid-cols-[auto,1fr] sm:grid-cols-[auto,auto,1fr] gap-24 md:gap-40 lg:gap-80 py-40 lg:py-80",children:[Object(o.jsx)("div",{className:"hidden w-[80px] sm:w-[100px] sm:flex justify-end items-center",children:Object(o.jsxs)("span",{className:"text-24 md:text-36 lg:text-48 font-bold ".concat(p[t]?"text-transparent bg-clip-text bg-gradient-to-r from-red to-blue":"text-white"),children:[25*(t+1),"%"]})}),Object(o.jsx)("div",{className:"w-36 flex items-center",children:Object(o.jsx)("div",{ref:y(t),className:"w-36 h-36 rounded-full flex items-center justify-center ".concat(p[t]?"bg-gradient-to-r from-red to-blue":"bg-[#3d3d3d]"),children:Object(o.jsx)("div",{className:"w-24 h-24 rounded-full bg-white"})})}),Object(o.jsxs)("div",{className:"w-full grid grid-col-1 transition-all transform duration-500 ".concat(p[t]?"opacity-1 translate-y-[0px]":"opacity-0 translate-y-[-100px]"),children:[Object(o.jsx)("div",{className:"w-full mb-10 text-16 sm:text-18 font-black ".concat(t%2===0?"text-red":"text-blue"),children:e.title}),Object(o.jsx)("div",{className:"w-full mb-24 text-24 md:text-[36px] font-black ".concat(p[t]?"text-white":"text-white-60"),children:e.sub}),Object(o.jsx)("div",{className:"w-full font-regular text-white-60 text-14 sm:text-16 md:text-20",children:e.text})]})]},t)}))})]})}),Object(o.jsx)("div",{className:"w-full text-center text-36 sm:text-48 md:text-[64px] lg:text-96px font-black text-transparent bg-clip-text bg-gradient-to-b from-white-60 to-white-10",children:"THE START OF A NEW ERA..."})]})},be=s(13),fe=s.p+"static/media/testament.ef536e97.png",he=s.p+"static/media/world_big.c9a83dd9.png";!function(e){e[e.Twitter=0]="Twitter",e[e.Instagram=1]="Instagram",e[e.Linkedin=2]="Linkedin"}(G||(G={})),function(e){e[e.Alien=0]="Alien",e[e.Normal=1]="Normal",e[e.Robot=2]="Robot",e[e.Special=3]="Special",e[e.Zombie=4]="Zombie"}(z||(z={}));var pe=function(){var e=Object(i.useState)([{name:"FALCON",title:"Pulling the strings behind the scene. The north star of the Team. Project Manager & bird tamer.",avatar:$,socials:[{type:G.Linkedin,link:"https://www.linkedin.com/in/i%C3%B1igo-peralta-57a313163/"}]},{name:"WOODPECKER",title:"The Architect, the Creator, the Oracle. Loving father of the birds. 3D Design Team leader.",avatar:X,socials:[]},{name:"WISE OWL",title:"Born in the Metaverse, Satoshi's mate. Blockchain Guru.",avatar:ne,socials:[{type:G.Linkedin,link:"https://www.linkedin.com/in/andre-queiroz-costa-b5abb31b6"}]},{name:"GOLDEN EAGLE",title:"Elegant and well-looking. PR Team.",avatar:le,socials:[{type:G.Linkedin,link:"https://www.linkedin.com/in/ignacio-vivas-hernando-99596b196/"}]},{name:"HAWK",title:"Silent, precise and deadly. 3D Design Team.",avatar:q,socials:[]},{name:"THE DODO",title:"Dont mistake his cuteness. He is a dangerous bloke. 3D Design Team.",avatar:ce,socials:[]},{name:"CUCKOO",title:"No one really knows this guy. JK - Epic design skills. Game Designer.",avatar:ee,socials:[]},{name:"DONALD",title:"He looks like a duck. The God of social media. PR Team.",avatar:te,socials:[]}]),t=Object(m.a)(e,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"w-full py-[200px] sm:py-[300px] md:py-[400px] relative",children:[Object(o.jsx)("img",{src:he,alt:"",className:"max-w-[5000px] max-h-[5000px] h-full absolute top-0 bottom-0 left-[50%] transform translate-x-[-50%]"}),Object(o.jsx)("div",{className:"w-full relative grid grid-cols-1 gap-[60px] sm:gap-80 md:gap-100 lg:gap-[200px]",children:Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsx)("img",{src:fe,alt:"",className:"max-w-[820px] w-full"})})})]}),Object(o.jsx)("div",{id:"#team",className:"w-full relative my-40 sm:my-60",children:Object(o.jsxs)("div",{className:"w-full relative grid grid-cols-1 gap-40 md:gap-80 lg:gap-120",children:[Object(o.jsx)("div",{className:"w-full flex justify-start",children:Object(o.jsxs)("div",{className:"w-[530px] max-w-full grid grid-cols-1 gap-30",children:[Object(o.jsx)("div",{className:"w-full text-white font-bold text-24 sm:text-36 md:text-42 lg:text-[48px] leading-[110%]",children:"Meet the team"}),Object(o.jsx)("div",{className:"w-full text-14 sm:text-16 md:text-18 text-white-60",children:"They trained, bred and enhanced us, the natural sons of Valhalla, the offspring of Mars, the hordes of Kalli. They took our killer instincts and amped them to eleven."})]})}),Object(o.jsx)("div",{className:"w-full justify-center",children:Object(o.jsx)("div",{className:"w-full max-w-full grid grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-30 2xl:gap-x-70 2xl:gap-y-40",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"w-full",children:[Object(o.jsx)("div",{className:"w-full flex justify-center mb-24",children:Object(o.jsx)("div",{className:"w-[200px] max-w-full",children:Object(o.jsx)("img",{src:e.avatar,alt:"",className:"w-full rounded-full"})})}),Object(o.jsx)("div",{className:"w-full mb-16 text-center text-18 sm:text-24 text-white font-bold",children:e.name}),Object(o.jsx)("div",{className:"w-full text-center text-14 sm:text-18 font-regular text-white-60 mb-24",children:e.title}),Object(o.jsx)("div",{className:"w-full flex items-center justify-center gap-12",children:e.socials.map((function(e,t){var s;return Object(o.jsx)("button",{onClick:function(t){return f(t,e.link)},className:"w-50 h-50 flex group items-center justify-center rounded-full bg-white-10 hover:bg-white transition-all duration-300",children:(s={},Object(be.a)(s,G.Instagram,Object(o.jsx)(Y.b,{className:"transition-all duration-300 text-white group-hover:text-grey text-18"})),Object(be.a)(s,G.Linkedin,Object(o.jsx)(Y.c,{className:"transition-all duration-300 text-white group-hover:text-grey text-18"})),Object(be.a)(s,G.Twitter,Object(o.jsx)(Y.d,{className:"transition-all duration-300 text-white group-hover:text-grey text-18"})),s)[e.type]},t)}))})]},t)}))})})]})})]})},ge=s.p+"static/media/banner.6c61c5c9.png",Oe=s.p+"static/media/banner_mobile.84a19fde.png",we=s.p+"static/media/shadow.30c91a3e.png",ve=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"#home",className:"w-full min-h-[100vh] grid grid-cols-1 pt-[120px] sm:pt-[130px] xl:pt-[140px] relative",children:[Object(o.jsx)("div",{className:"absolute w-screen bg-gradient-to-r from-blue to-red top-0 bottom-0 transform left-[50%] translate-x-[-50%]"}),Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 relative",children:[Object(o.jsx)("div",{className:"w-full flex justify-center items-start z-20",children:Object(o.jsxs)("div",{className:"w-[640px] max-w-full grid grid-cols-1",children:[Object(o.jsx)("div",{className:"w-full mb-16 sm:mb-30 text-24 sm:text-[48px] md:text-[64px] text-white text-center font-black leading-[110%]",children:"The Rise of the Birds"}),Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsx)("div",{className:"w-[530px] max-w-full mb-20 sm:mb-30 text-14 sm:text-16 text-white-60 text-center",children:"Chickens and Pigeons vie for the absolute control of the planet, and the title of the deadliest beasts."})}),Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsxs)("div",{className:"w-[124px] sm:w-[500px] max-w-full grid grid-cols-2 gap-12 sm:gap-24",children:[Object(o.jsxs)("button",{onClick:function(e){return f(e,P)},className:"h-[56px] sm:px-28 rounded-full flex items-center justify-center gap-12 bg-red",children:[Object(o.jsx)("div",{className:"w-22 h-22 rounded-full bg-white flex items-center justify-center",children:Object(o.jsx)(_,{className:"fill-current text-red w-14 h-14"})}),Object(o.jsx)("span",{className:"hidden sm:flex text-white font-bold text-14 md:text-18",children:"Connect wallet"})]}),Object(o.jsxs)("button",{onClick:function(e){return f(e,H)},className:"h-[56px] rounded-full bg-blue flex items-center justify-center sm:px-28 gap-12",children:[Object(o.jsx)(Y.a,{className:"text-white"}),Object(o.jsx)("span",{className:"hidden sm:flex text-white font-bold text-14 md:text-18",children:"Join discord"})]})]})})]})}),Object(o.jsxs)("div",{className:"w-full aspect-w-16 aspect-h-6 relative",children:[Object(o.jsx)("img",{src:ge,alt:"",className:"hidden sm:flex w-screen max-w-[100vw] h-auto absolute top-[100%] left-[50%] transform translate-x-[-50%] translate-y-[-99%]"}),Object(o.jsx)("img",{src:Oe,alt:"",className:"flex sm:hidden w-screen max-w-[100vw] h-auto absolute top-[100%] left-[50%] transform translate-x-[-50%] translate-y-[-99%]"})]})]})]}),Object(o.jsxs)("div",{className:"w-full relative",children:[Object(o.jsx)("img",{src:we,alt:"",className:"w-[1900px] max-w-full"}),Object(o.jsx)("div",{className:"absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[66%] max-w-full",children:Object(o.jsx)("div",{className:"w-full text-16 md:text-24 xl:text-36 text-white text-center",children:"After years of war and hunger, humans finally discovered what had always been in front of their eyes..."})})]})]})},Ne=s.p+"static/media/accessoires_bottom.7df70b87.png",ye=s.p+"static/media/accessoires_top.63f5a630.png",Ce=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"w-full relative py-40 sm:py-60 md:py-80 lg:py-[120px]",children:[Object(o.jsx)("div",{className:"absolute top-0 bottom-0 left-[50%] transform translate-x-[-50%] bg-white w-screen"}),Object(o.jsxs)("div",{id:"#traits",className:"w-full grid grid-cols-1 xl:grid-cols-[1fr,500px] gap-40 sm:gap-60 md:gap-80 lg:gap-[120px] relative",children:[Object(o.jsx)("div",{className:"w-full flex items-start",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 gap-24",children:[Object(o.jsx)("div",{className:"w-full text-24 sm:text-36 md:text-48 font-black text-grey",children:"Different accessories for each section"}),Object(o.jsxs)("div",{className:"w-full text-14 sm:text-16 md:text-18 text-grey-60",children:["These accessories increase the birds\u2019 stats: Breeding, Strength, Defense, and Egg Production. These stats are very relevant to the Wing Wars game.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," Stay tuned for the whitepaper where we will describe the game in depth.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," Just a small heads up: the better the stats, the better the bird\u2026 In this first drop, birds will only have common accessories, however, in the game there will be 4 tiers of accessories: Common, Rare, Special & Legendary (you will be able to purchase these accessories in the game and in future drops!)"]}),Object(o.jsx)("div",{className:"w-full flex justify-start",children:Object(o.jsxs)("button",{onClick:function(e){return f(e,P)},className:"h-[56px] px-32 rounded-full flex items-center justify-center gap-12 bg-red",children:[Object(o.jsx)("div",{className:"w-22 h-22 rounded-full bg-white flex items-center justify-center",children:Object(o.jsx)(_,{className:"fill-current text-red w-14 h-14"})}),Object(o.jsx)("span",{className:"text-white font-bold text-16 sm:text-18",children:"Buy on OpenSea"})]})})]})}),Object(o.jsx)("div",{className:"w-full flex items-start",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 gap-30",children:[Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsx)("img",{src:ye,alt:"",className:"w-[500px] max-w-full"})}),Object(o.jsx)("div",{className:"w-full flex justify-center",children:Object(o.jsx)("img",{src:Ne,alt:"",className:"w-[500px] max-w-full"})})]})})]})]})})},ke=s.p+"static/media/logo.85708439.png",Se=function(e){var t=e.url,s=e.icon;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{onClick:function(e){return f(e,t)},className:"w-50 h-50 rounded-full bg-grey-10 hover:bg-grey flex items-center justify-center transition duration-200 group",children:s})})},Te=s(155),Ee=s(212),Le=function(e){var t=e.children,s=e.open;return Object(o.jsx)(o.Fragment,{children:s?t:""})},Fe=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)(0),l=Object(m.a)(c,2),n=l[0],r=l[1],d=Object(i.useState)([{title:"Home",link:"#home"},{title:"Traits",link:"#traits"},{title:"Roadmap",link:"#roadmap"},{title:"Team",link:"#team"}]),x=Object(m.a)(d,1)[0],u=Object(i.useState)([{title:"Twitter",icon:Object(o.jsx)(Y.d,{className:"text-grey text-18"}),link:R},{title:"Discord",icon:Object(o.jsx)(Y.a,{className:"text-grey text-18"}),link:H},{title:"Instagram",icon:Object(o.jsx)(Y.b,{className:"text-grey text-18"}),link:F}]),j=Object(m.a)(u,1)[0];Object(i.useEffect)((function(){return b(),window.addEventListener("scroll",b,{passive:!0}),function(){window.removeEventListener("scroll",b)}}),[]);var b=function(){var e=window.pageYOffset;r(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"fixed w-full z-40 min-w-[300px] h-80 lg:h-[100px] top-0 left-0 right-0 flex items-center transition ".concat(n>0?"bg-white":""),children:Object(o.jsx)("div",{className:"relative w-full flex justify-center px-20 sm:px-30",children:Object(o.jsxs)("div",{className:"flex w-full max-w-screen-2xl flex-wrap gap-10 sm:gap-16 justify-between items-center",children:[Object(o.jsx)(E.b,{to:L,className:"grid flow items-center justify-center gap-6",children:Object(o.jsx)("img",{src:ke,alt:"",className:"h-40 lg:h-60"})}),Object(o.jsx)("div",{className:"hidden lg:flex items-center justify-center gap-40",children:x.map((function(e,t){return Object(o.jsx)(Ee.Link,{to:e.link,offset:-120,className:"cursor-pointer text-18 text-grey font-bold",children:e.title},t)}))}),Object(o.jsxs)("div",{className:"flex items-center justify-center gap-12 sm:gap-24",children:[Object(o.jsxs)("div",{className:"hidden w-full lg:grid grid-cols-4 justify-start gap-20",children:[Object(o.jsx)(Se,{url:R,icon:Object(o.jsx)(Y.d,{className:"text-22 text-grey group-hover:text-white transition-all duration-200"})}),Object(o.jsx)(Se,{url:H,icon:Object(o.jsx)(Y.a,{className:"text-22 text-grey group-hover:text-white transition-all duration-200"})}),Object(o.jsx)(Se,{url:F,icon:Object(o.jsx)(Y.b,{className:"text-22 text-grey group-hover:text-white transition-all duration-200"})}),Object(o.jsx)(Se,{url:P,icon:Object(o.jsx)(_,{className:"fill-current text-22 text-grey group-hover:text-white transition-all duration-200"})})]}),Object(o.jsx)("button",{onClick:function(){return a(!s)},className:"w-40 h-40 flex lg:hidden justify-center items-center",children:Object(o.jsx)(Te.c,{className:"text-grey text-28"})})]})]})})}),Object(o.jsx)(Le,{open:s,children:Object(o.jsx)("div",{className:"z-40 fixed min-w-[300px] top-0 left-0 w-full h-[100vh] bg-white-90 py-18",children:Object(o.jsxs)("div",{className:"z-20 w-full grid grid-cols-1 relative",children:[Object(o.jsxs)("div",{className:"w-full flex justify-between items-center mb-20 px-20 md:px-30",children:[Object(o.jsxs)(E.b,{to:L,className:"grid flow items-center justify-center gap-6",children:[Object(o.jsx)("img",{src:I,alt:"",className:"h-40 lg:h-60"}),Object(o.jsx)("div",{className:"hidden lg:flex font-bold text-white text-24",children:"Ape Gorilla"})]}),Object(o.jsx)("button",{onClick:function(){return a(!s)},className:"w-40 h-20 sm:h-30 md:h-40 flex justify-center items-center",children:Object(o.jsx)(Te.a,{className:"text-grey text-32"})})]}),Object(o.jsx)("div",{className:"w-full flex items-center h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] lg:h-[calc(100vh-180px)] py-30",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 items-center justify-center gap-4 max-h-full overflow-scroll",children:[x.map((function(e,t){return Object(o.jsxs)(Ee.Link,{to:e.link,onClick:function(){return a(!s)},offset:-120,className:"w-full cursor-pointer flex items-center justify-between group font-bold px-20 md:px-30 py-12 hover:bg-[rgba(196,196,196,.2)]",children:[Object(o.jsx)("span",{className:"text-18 font-bold text-grey group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue",children:e.title}),Object(o.jsx)(Te.b,{className:"hidden group-hover:flex text-grey text-24"})]},t)})),j.map((function(e,t){return Object(o.jsxs)("button",{onClick:function(t){return f(t,e.link)},className:"w-full flex items-center justify-between cursor-pointer group font-bold px-20 md:px-30 py-12 hover:bg-[rgba(196,196,196,.2)]",children:[Object(o.jsx)("span",{className:"text-18 font-bold text-grey group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue",children:e.title}),e.icon]},t)}))]})}),Object(o.jsx)("div",{className:"w-full px-20 md:px-30",children:Object(o.jsxs)("div",{className:"w-full text-grey-60 text-14 pt-20 sm:pt-30 border-t-1 border-grey-10",children:["Copyright \xa9 Wing Wars ",(new Date).getFullYear()]})})]})})})]})},Pe=function(e){var t=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"w-full justify-center flex px-20 sm:px-30",children:Object(o.jsx)("div",{className:"w-full max-w-screen-2xl",children:t})})})},Re=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Fe,{}),Object(o.jsx)(Pe,{children:Object(o.jsxs)("div",{className:"w-full flex justify-center pb-[120px] lg:pb-[160px] relative",children:[Object(o.jsx)("div",{className:"absolute bottom-0 left-[50%] transform translate-x-[-50%] w-screen h-[1200px] bg-gradient-to-t from-green-light-60 to-transparent"}),Object(o.jsxs)("div",{className:"w-full grid grid-cols-1 gap-[140px] lg:gap-[240px] relative",children:[Object(o.jsx)(ve,{}),Object(o.jsx)(je,{}),Object(o.jsx)(Ce,{}),Object(o.jsx)(me,{}),Object(o.jsx)(pe,{})]})]})}),Object(o.jsx)(Z,{})]})},He=[{component:Object(o.jsx)(x.a,{exact:!0,path:L,children:Object(o.jsx)(Re,{})},0)}],Ae=function(){var e=Object(x.f)(),t=k().setPath;return Object(i.useEffect)((function(){e.listen((function(){window.scrollTo(0,0),t(window.location.pathname)}))}),[]),Object(o.jsx)(o.Fragment,{})},De=function(){return k().loading?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"w-full min-w-[300px]",children:[Object(o.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-grey"}),Object(o.jsx)("div",{className:"w-full relative overflow-hidden",children:Object(o.jsxs)(E.a,{children:[Object(o.jsx)(Ae,{}),Object(o.jsx)(j,{children:He.map((function(e){return e.component}))})]})})]})})},Ie=s(847),We=s(377),Be=s(75),Me=s.n(Be),Ve=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,850)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),l(e),n(e)}))},Ge=(s(833),s(834),s(835),s(836),s(837),s(838),s(839),function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Me.a.render(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(n.a,{config:{},children:Object(o.jsx)(We.a,{children:Object(o.jsx)(Ie.a,{children:Object(o.jsx)(T,{children:Object(o.jsx)(De,{})})})})}),Object(o.jsx)(b.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,className:"z-50"})]}),document.getElementById("app"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Ve(),Ge()}},[[840,1,2]]]);
//# sourceMappingURL=main.74e50c4f.chunk.js.map