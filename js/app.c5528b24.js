(function(){"use strict";var t={6550:function(t,e,n){var l=n(9963),i=(n(3060),n(9755)),s=n.n(i),a=(n(7338),n(6252));const o={id:"routerview"};function r(t,e,n,l,i,s){const r=(0,a.up)("navBar"),c=(0,a.up)("RouterView"),u=(0,a.up)("footerSec");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r),(0,a._)("div",o,[(0,a.Wm)(c)]),(0,a.Wm)(u)],64)}var c=n(3577),u=n(2262);const d={class:"navbar navbar-light navbar-expand-md py-3",style:{background:"rgb(89,154,143)",height:"5em"}},m=(0,a.uE)('<a class="navbar-brand d-flex align-items-center" href="/"><span class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><i style="color:var(--bs-navbar-active-color);" class="bi bi-tools"></i></span><span class="text-white">飛翔小工具</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>',2),h={class:"container"},p={class:"collapse navbar-collapse",id:"navcol-2"},f={class:"navbar-nav ms-auto"},b=["href"],g=["href"];var v={__name:"navBar",setup(t){const e=(0,u.iH)([{text:"飛翔部落格",href:"https://sianglife.github.io/blog/",icon:"bi bi-pencil",blanktab:!0},{text:"小工具首頁",href:"/",icon:"bi bi-house-door",blanktab:!1}]);return(t,n)=>((0,a.wg)(),(0,a.iD)("nav",d,[m,(0,a._)("div",h,[(0,a._)("div",p,[(0,a._)("ul",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.value,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"nav-item",key:t.href},[t.blanktab?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"nav-link link-light",href:t.href,target:"_blank"},[(0,a._)("i",{class:(0,c.C_)(t.icon)},null,2),(0,a.Uk)((0,c.zw)(t.text),1)],8,b)):((0,a.wg)(),(0,a.iD)("a",{key:1,class:"nav-link link-light",href:t.href},[(0,a._)("i",{class:(0,c.C_)(t.icon)},null,2),(0,a.Uk)((0,c.zw)(t.text),1)],8,g))])))),128))])])])]))}};const _=v;var y=_;const w={class:"text-center py-4",style:{background:"rgb(89,154,143)",height:"7em"}},x=(0,a.uE)('<div class="container"><div class="row row-cols-1 row-cols-lg-3"><div class="col"><p class="my-2" style="color:#f8f9fa;">Copyright © 2022 Sianglife</p></div><div class="col-lg-4 offset-lg-4"><ul class="list-inline my-2"><li class="list-inline-item me-4"><div class="bs-icon-circle bs-icon-primary bs-icon"><i class="bi bi-github"></i></div></li><li class="list-inline-item me-4"><div class="bs-icon-circle bs-icon-primary bs-icon"><i class="bi bi-pencil"></i></div></li><li class="list-inline-item"><div class="bs-icon-circle bs-icon-primary bs-icon"><i class="bi bi-tools"></i></div></li></ul></div></div></div>',1),k=[x];function D(t,e){return(0,a.wg)(),(0,a.iD)("footer",w,k)}var z=n(3744);const C={},U=(0,z.Z)(C,[["render",D]]);var W=U,S=n(2201),M=n(3934);const O=(0,S.p7)({history:(0,S.PO)(),routes:M.LE.concat(M.mA)});var j=O,R={name:"App",router:j,components:{navBar:y,footerSec:W}};const B=(0,z.Z)(R,[["render",r]]);var P=B;window.$=window.jQuery=s(),(0,l.ri)(P).use(j).mount("#app")},3934:function(t,e,n){n.d(e,{K4:function(){return s},LE:function(){return l},mA:function(){return i}});const l=[{path:"/WebPageTools2.0",title:"首頁",name:"index",component:()=>n(961)},{path:"/WebPageTools2.0/koala",title:"靖哲",name:"index",component:()=>n(1591)}],i=[{CommingSoom:!1,path:"/WebPageTools2.0/math/Factor",title:"質數/因數工具",name:"mathFactor",description:"找質數、因數、質因數與公因數",component:()=>n(9153)},{CommingSoom:!1,path:"/WebPageTools2.0/math/Random",title:"抽籤",name:"mathRandom",description:"隨機抽籤工具",component:()=>n(8687)}],s=[{CommingSoom:!1,path:"/WebPageTools2.0/chemistry/Density",title:"密度工具",name:"chemistryDensity",description:"密度、質量、體積換算",component:()=>n(961)},{CommingSoom:!1,path:"/WebPageTools2.0/chemistry/MoleCular",title:"分子量計算器",name:"chemistryMoleCular",description:"計算化合物分子量",component:()=>n(961)}]},961:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var l=n(6252),i=n(3577),s=n(2262),a=n(3934);const o={class:"container py-4 py-xl-5"},r={class:"row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"},c={class:"text-center d-flex flex-column align-items-center align-items-xl-center"},u={class:"bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"},d={class:"px-3"},m={class:"table-responsive"},h={class:"table"},p={class:"card"},f={class:"card-body"},b={class:"card-title"},g=(0,l._)("br",null,null,-1),v={class:"text-muted card-subtitle mb-2",style:{height:"2em"}},_=(0,l._)("br",null,null,-1),y={key:0,class:"btn btn-primary d-lg-flex align-items-lg-center",type:"button",style:{"text-align":"center",background:"var(--bs-gray-600)"}},w=(0,l._)("span",{class:"text-white-50",style:{"font-size":"12px"}},"敬請期待",-1),x=[w],k=["href"],D=(0,l._)("button",{class:"btn btn-primary d-lg-flex align-items-lg-center",type:"button",style:{"text-align":"center",background:"var(--bs-info)"}},[(0,l._)("i",{class:"bi bi-hand-index-thumb"})],-1),z=[D],C={name:"indexPage"};var U=Object.assign(C,{setup(t){const e=(0,s.iH)([{id:"數學工具",icon:"bi bi-calculator",data:a.mA},{id:"化學工具",icon:"bi bi-boxes",data:a.K4}]);return(t,n)=>((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"col",style:{width:"50%"},key:t.id},[(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("i",{class:(0,i.C_)(t.icon)},null,2)]),(0,l._)("div",d,[(0,l._)("h4",null,(0,i.zw)(t.id),1)])]),(0,l._)("div",m,[(0,l._)("table",h,[(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.name},[(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("div",f,[(0,l._)("h4",b,[(0,l.Uk)((0,i.zw)(t.title),1),g]),(0,l._)("h6",v,[(0,l.Uk)((0,i.zw)(t.description),1),_]),t.CommingSoon?((0,l.wg)(),(0,l.iD)("button",y,x)):((0,l.wg)(),(0,l.iD)("a",{key:1,href:t.path},z,8,k))])])])])))),128))])])])])))),128))])]))}});const W=U;var S=W},1591:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var l=n(6252);const i={class:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom"},s=(0,l._)("div",{class:"me-5 d-none d-lg-block"},[(0,l._)("span",null,"Get connected with us on social networks:")],-1),a={href:"",class:"me-4 text-reset"},o={href:"",class:"me-4 text-reset"},r={href:"",class:"me-4 text-reset"},c={href:"",class:"me-4 text-reset"},u={href:"",class:"me-4 text-reset"},d={href:"",class:"me-4 text-reset"},m={class:""},h=(0,l._)("h6",{class:"text-uppercase fw-bold mb-4"},[(0,l._)("i",{class:"fas fa-gem me-3"}),(0,l.Uk)("Company name ")],-1),p=(0,l._)("p",null," Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",-1),f=(0,l._)("h6",{class:"text-uppercase fw-bold mb-4"},"Products",-1),b=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Angular")],-1),g=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"React")],-1),v=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Vue")],-1),_=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Laravel")],-1),y=(0,l._)("h6",{class:"text-uppercase fw-bold mb-4"},"Useful links",-1),w=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Pricing")],-1),x=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Settings")],-1),k=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Orders")],-1),D=(0,l._)("p",null,[(0,l._)("a",{href:"#!",class:"text-reset"},"Help")],-1),z=(0,l._)("h6",{class:"text-uppercase fw-bold mb-4"},"Contact",-1),C=(0,l._)("p",null,[(0,l._)("i",{class:"fas fa-home me-3"}),(0,l.Uk)(" New York, NY 10012, US ")],-1),U=(0,l._)("p",null,[(0,l._)("i",{class:"fas fa-envelope me-3"}),(0,l.Uk)(" info@example.com ")],-1),W=(0,l._)("div",{class:"text-center p-4",style:{"background-color":"rgba(0, 0, 0, 0.05)"}},[(0,l.Uk)(" Â© 2021 Copyright: "),(0,l._)("a",{class:"text-reset fw-bold",href:"https://mdbootstrap.com/"},"MDBootstrap.com")],-1);function S(t,e,n,S,M,O){const j=(0,l.up)("MDBIcon"),R=(0,l.up)("MDBCol"),B=(0,l.up)("MDBRow"),P=(0,l.up)("MDBContainer"),H=(0,l.up)("MDBFooter");return(0,l.wg)(),(0,l.j4)(H,{bg:t.dark,text:"['center', 'lg-start', 'muted']"},{default:(0,l.w5)((()=>[(0,l._)("section",i,[s,(0,l._)("div",null,[(0,l._)("a",a,[(0,l.Wm)(j,{iconStyle:"fab",icon:"facebook-f"})]),(0,l._)("a",o,[(0,l.Wm)(j,{iconStyle:"fab",icon:"twitter"})]),(0,l._)("a",r,[(0,l.Wm)(j,{iconStyle:"fab",icon:"google"})]),(0,l._)("a",c,[(0,l.Wm)(j,{iconStyle:"fab",icon:"instagram"})]),(0,l._)("a",u,[(0,l.Wm)(j,{iconStyle:"fab",icon:"linkedin"})]),(0,l._)("a",d,[(0,l.Wm)(j,{iconStyle:"fab",icon:"github"})])])]),(0,l._)("section",m,[(0,l.Wm)(P,{class:"text-center text-md-start mt-5"},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{class:"mt-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{md:"3",lg:"4",xl:"3",class:"mx-auto mb-4"},{default:(0,l.w5)((()=>[h,p])),_:1}),(0,l.Wm)(R,{md:"2",lg:"2",xl:"2",class:"mx-auto mb-4"},{default:(0,l.w5)((()=>[f,b,g,v,_])),_:1}),(0,l.Wm)(R,{md:"3",lg:"2",xl:"2",class:"mx-auto mb-4"},{default:(0,l.w5)((()=>[y,w,x,k,D])),_:1}),(0,l.Wm)(R,{md:"4",lg:"3",xl:"3",class:"mx-auto mb-md-0 mb-4"},{default:(0,l.w5)((()=>[z,C,U,(0,l._)("p",null,[(0,l.Wm)(j,{icon:"phone",class:"me-3"}),(0,l.Uk)(" + 01 234 567 88 ")]),(0,l._)("p",null,[(0,l.Wm)(j,{icon:"print",class:"me-3"}),(0,l.Uk)(" + 01 234 567 89 ")])])),_:1})])),_:1})])),_:1})]),W])),_:1},8,["bg"])}var M=n(3567),O={components:{MDBFooter:M.XO,MDBContainer:M.L5,MDBRow:M.uZ,MDBCol:M.TK,MDBIcon:M.vm}},j=n(3744);const R=(0,j.Z)(O,[["render",S]]);var B=R},9153:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var l=n(6252),i=n(3577),s=n(9963);const a={class:"alert alert-warning text-muted",role:"alert"},o={class:"container"},r={class:"row text-start d-xxl-flex justify-content-xxl-start",style:{"border-bottom-style":"dotted"}},c={class:"col",style:{width:"100%","text-align":"center",margin:"1em"}},u=(0,l._)("span",{style:{"font-size":"2em",width:"25%"}},"輸入一個數字: ",-1),d={key:0,class:"container"},m={class:"table-responsive"},h={class:"table"},p=(0,l._)("thead",null,[(0,l._)("tr")],-1),f={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},b={style:{"font-size":"2em"}},g={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},v={style:{"font-size":"2em"}},_=(0,l._)("br",null,null,-1),y={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},w={style:{"font-size":"2em"}},x=(0,l._)("br",null,null,-1);function k(t,e,n,k,D,z){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l._)("div",a,[(0,l._)("span",null,[(0,l._)("strong",null,(0,i.zw)(D.alert[0]),1),(0,l.Uk)((0,i.zw)(D.alert[1]),1)])],512),[[s.F8,void 0!=D.alert[0]]]),(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("div",c,[u,(0,l.wy)((0,l._)("input",{type:"number",onChange:e[0]||(e[0]=(...t)=>z.update&&z.update(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>D.inputnum=t),style:{"font-size":"1.5em",height:"2em",width:"75%"}},null,544),[[s.nr,D.inputnum]])])])]),0!=D.inputnum?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",m,[(0,l._)("table",h,[p,(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",f,(0,i.zw)(D.inputnum)+"的因數",1),(0,l._)("td",b,(0,i.zw)(D.output[0]),1)]),(0,l._)("tr",null,[(0,l._)("td",g,(0,i.zw)(D.inputnum)+"的質因數",1),(0,l._)("td",v,[(0,l.Uk)((0,i.zw)(D.output[1]),1),_])]),(0,l._)("tr",null,[(0,l._)("td",y,(0,i.zw)(D.inputnum)+"以下的質數",1),(0,l._)("td",w,[(0,l.Uk)((0,i.zw)(D.output[2]),1),x])])])])])])):(0,l.kq)("",!0)],64)}n(7658);const D=t=>parseInt(t)==t,z=t=>{let e=[];for(var n=1;n<=t;n++)D(t/n)&&e.push(n);return e};function C(t){return z(t)[1]==t}function U(t){let e=[];for(let n=1;n<=t;n++)C(n)&&e.push(n);return e}const W=t=>{let e="";for(let n of t)e=`${e}, `+n;return e.substring(2,e.length)};var S={name:"mathFactor",data(){return{alert:[void 0,void 0],inputnum:0,output:["","",""]}},methods:{update(){let t=[],e=z(this.inputnum),n=U(this.inputnum);this.output=[W(z(this.inputnum)),"",W(U(this.inputnum))];for(let l of e)for(let e of n)l==e&&t.push(e);console.log(t),this.output[1]=W(t)}}},M=n(3744);const O=(0,M.Z)(S,[["render",k]]);var j=O},8687:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var l=n(6252),i=n(3577),s=n(9963);const a={class:"alert alert-warning text-muted",role:"alert"},o={class:"container"},r={class:"row",style:{height:"16em","border-right-style":"none","border-bottom-style":"dotted","line-height":"28px",margin:"1em"}},c={class:"col",style:{height:"16em","border-color":"var(--bs-gray-500)","border-right-style":"dotted"}},u={class:"row",style:{margin:"0.5em",height:"3em"}},d={class:"col",style:{width:"100%","text-align":"center"}},m=(0,l._)("span",{style:{"font-size":"1.5em",width:"25%"}},"最小: ",-1),h=["max"],p={class:"row",style:{margin:"0.5em",height:"3em"}},f={class:"col",style:{width:"100%","text-align":"center"}},b=(0,l._)("span",{style:{"font-size":"1.5em",width:"25%"}},"最大: ",-1),g=["min"],v={class:"row",style:{margin:"0.5em",height:"3em"}},_={class:"col",style:{width:"100%","text-align":"center"}},y=(0,l._)("span",{style:{"font-size":"1.5em",width:"25%"}},"數量: ",-1),w=["max"],x={class:"row",style:{margin:"0.5em",height:"1.5em"}},k={class:"col text-center d-xxl-flex align-items-xxl-center",style:{width:"100%","text-align":"center"}},D={class:"col-form-label",style:{height:"1.5em","font-size":"1em"}},z={class:"row"},C={class:"col",style:{width:"100%","text-align":"center",height:"34px",margin:"0em"}},U={class:"col overflow-auto",style:{height:"15.5em"}},W={key:0,class:"list-group"},S={class:"form-check"},M=["onUpdate:modelValue"],O={class:"form-label form-check-label",for:"flexSwitchCheckDefault"},j=(0,l._)("div",{style:{"text-align":"center"}},null,-1),R={class:"container overflow-auto",style:{height:"calc(100vh - 12em - 16em)"}},B={key:0,class:"list-group"},P={class:"row"},H={class:"col"},T={style:{"font-size":"1.5em"}},Y={class:"col",style:{"text-align":"right"}},V=["id","onClick"];function F(t,e,n,F,K,L){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l._)("div",a,[(0,l._)("span",null,[(0,l._)("strong",null,(0,i.zw)(K.alert[0]),1),(0,l.Uk)((0,i.zw)(K.alert[1]),1)])],512),[[s.F8,void 0!=K.alert[0]]]),(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("div",d,[m,(0,l.wy)((0,l._)("input",{onChange:e[0]||(e[0]=(...t)=>L.listUpdate&&L.listUpdate(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>K.min=t),type:"number",style:{"font-size":"1.5em",height:"2em",width:"75%"},max:K.max},null,40,h),[[s.nr,K.min]])])]),(0,l._)("div",p,[(0,l._)("div",f,[b,(0,l.wy)((0,l._)("input",{onChange:e[2]||(e[2]=(...t)=>L.listUpdate&&L.listUpdate(...t)),"onUpdate:modelValue":e[3]||(e[3]=t=>K.max=t),type:"number",style:{"font-size":"1.5em",height:"2em",width:"75%"},min:K.min},null,40,g),[[s.nr,K.max]])])]),(0,l._)("div",v,[(0,l._)("div",_,[y,(0,l.wy)((0,l._)("input",{onChange:e[4]||(e[4]=(...t)=>L.checkCount&&L.checkCount(...t)),"onUpdate:modelValue":e[5]||(e[5]=t=>K.count=t),type:"number",style:{"font-size":"1.5em",height:"2em",width:"75%"},min:"1",max:K.max},null,40,w),[[s.nr,K.count]])])]),(0,l._)("div",x,[(0,l._)("div",k,[(0,l._)("label",D,[(0,l.wy)((0,l._)("input",{class:"form-check-input","onUpdate:modelValue":e[6]||(e[6]=t=>K.allowRepeat=t),type:"checkbox"},null,512),[[s.e8,K.allowRepeat]]),(0,l.Uk)("允許重複")])])]),(0,l._)("div",z,[(0,l._)("div",C,[(0,l._)("button",{onClick:e[7]||(e[7]=(...t)=>L.random&&L.random(...t)),class:"btn btn-secondary",type:"button",style:{width:"72%"}},"抽！")])])]),(0,l._)("div",U,[K.list!=[]?((0,l.wg)(),(0,l.iD)("ul",W,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.list,(t=>((0,l.wg)(),(0,l.iD)("li",{class:"list-group-item d-xxl-flex align-items-xxl-center",key:t},[(0,l._)("div",S,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e=>t[1]=e},null,8,M),[[s.e8,t[1]]]),(0,l._)("label",O,(0,i.zw)(t[0]),1)])])))),128))])):(0,l.kq)("",!0)])])]),j,(0,l._)("div",R,[K.result!=[]?((0,l.wg)(),(0,l.iD)("ul",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(K.result,(t=>((0,l.wg)(),(0,l.iD)("li",{class:"list-group-item",key:t},[(0,l._)("div",P,[(0,l._)("div",H,[(0,l._)("span",T,(0,i.zw)(""==t[1]?t[0]:t[1]),1)]),(0,l._)("div",Y,[(0,l._)("button",{class:(0,i.C_)(t[2]?"btn btn-primary":"btn btn-primary disabled"),type:"button",id:`btnRemove${t[0]}`,onClick:e=>L.removeListItem(t)},"從待選名單移除",10,V)])])])))),128))])):(0,l.kq)("",!0)])],64)}n(7658);const K=t=>t[Math.floor(Math.random()*t.length)],L=(t,e)=>{for(let n of t)if(e[0]==n[0])return!0;return!1};var Z={name:"mathRandom",data(){return{max:5,min:1,count:4,alert:[void 0,void 0],allowRepeat:!1,result:[],list:[]}},methods:{removeListItem(t){for(let e of this.list)t[0]==e[0]&&(e[1]=!1,t[2]=!1)},checkCount(){this.list.length<this.count&&0==this.allowRepeat?this.alert=["數量錯誤!","不允許重複時，無法抽出比待抽清單總數多的數量!"]:1>this.count?this.alert=["數量錯誤!","數量不得為負!"]:this.alert=[void 0,void 0]},listUpdate(){this.list=[],this.alert[0]=void 0,this.alert[1]=void 0;for(let t=this.min;t<=this.max;t++)this.list.push([t,!0,""]);return this.list.length<this.count&&0==this.allowRepeat?(this.alert[0]="數量錯誤!",void(this.alert[1]="不允許重複時，無法抽出比待抽清單總數多的數量!")):1>this.count?(this.alert[0]="數量錯誤!",void(this.alert[1]="數量不得為負!")):this.max<this.min?(this.alert[0]="最大值/最小值錯誤!",void(this.alert[1]="最小值大於最大值!")):void 0},random(){let t=[];this.result=[];for(let e of this.list)e[1]&&t.push([e[0],e[2]]);if(t.length<this.count&&0==this.allowRepeat)return this.alert[0]="數量錯誤!",void(this.alert[1]="不允許重複時，無法抽出比待抽清單總數多的數量!");for(let e=0;e<this.count;e++){let e=K(t);while(!this.allowRepeat&&L(this.result,e))e=K(t);this.result.push(e.concat(!0))}}},created(){this.listUpdate()}},A=n(3744);const E=(0,A.Z)(Z,[["render",F]]);var I=E}},e={};function n(l){var i=e[l];if(void 0!==i)return i.exports;var s=e[l]={exports:{}};return t[l].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,l,i,s){if(!l){var a=1/0;for(u=0;u<t.length;u++){l=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,r=0;r<l.length;r++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](l[r])}))?l.splice(r--,1):(o=!1,s<a&&(a=s));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[l,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,s,a=l[0],o=l[1],r=l[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(r)var u=r(n)}for(e&&e(l);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},l=self["webpackChunkwebpagetools2_0"]=self["webpackChunkwebpagetools2_0"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(6550)}));l=n.O(l)})();
//# sourceMappingURL=app.c5528b24.js.map