"use strict";(self["webpackChunkwebpagetools2_0"]=self["webpackChunkwebpagetools2_0"]||[]).push([[127],{9127:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var l=n(6252),u=n(3577),s=n(9963);const i={class:"alert alert-warning text-muted",role:"alert"},o={class:"container"},r={class:"row text-start d-xxl-flex justify-content-xxl-start",style:{"border-bottom-style":"dotted"}},a={class:"col",style:{width:"100%","text-align":"center",margin:"1em"}},d=(0,l._)("span",{style:{"font-size":"2em",width:"25%"}},"輸入一個數字: ",-1),p={key:0,class:"container"},m={class:"table-responsive"},w={class:"table"},h=(0,l._)("thead",null,[(0,l._)("tr")],-1),f={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},y={key:0,style:{"font-size":"2em"}},_={key:1,style:{"font-size":"2em"}},c=(0,l._)("h5",null,"載入中...",-1),g=[c],z={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},b={key:0,style:{"font-size":"2em"}},k=(0,l._)("br",null,null,-1),v={key:1,style:{"font-size":"2em"}},x=(0,l._)("h5",null,"載入中...",-1),D=[x],U={style:{"font-size":"1.5em","font-weight":"bold",width:"10em"}},C={key:0,style:{"font-size":"2em"}},F=(0,l._)("br",null,null,-1),I={key:1,style:{"font-size":"2em"}},j=(0,l._)("h5",null,"載入中...",-1),q=[j];function H(t,e,n,c,x,j){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l._)("div",i,[(0,l._)("span",null,[(0,l._)("strong",null,(0,u.zw)(x.alert[0]),1),(0,l.Uk)((0,u.zw)(x.alert[1]),1)])],512),[[s.F8,void 0!=x.alert[0]]]),(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("div",a,[d,(0,l.wy)((0,l._)("input",{type:"number",onChange:e[0]||(e[0]=(...t)=>j.update&&j.update(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>x.inputnum=t),style:{"font-size":"1.5em",height:"2em",width:"75%"},min:"0",onInput:e[2]||(e[2]=t=>this.output=["","",""])},null,544),[[s.nr,x.inputnum]])])])]),0!=x.inputnum?((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",m,[(0,l._)("table",w,[h,(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",f,(0,u.zw)(x.inputnum)+"的因數",1),""!=x.output[0]?((0,l.wg)(),(0,l.iD)("td",y,(0,u.zw)(x.output[0]),1)):((0,l.wg)(),(0,l.iD)("td",_,g))]),(0,l._)("tr",null,[(0,l._)("td",z,(0,u.zw)(x.inputnum)+"的質因數",1),""!=x.output[1]?((0,l.wg)(),(0,l.iD)("td",b,[(0,l.Uk)((0,u.zw)(x.output[1]),1),k])):((0,l.wg)(),(0,l.iD)("td",v,D))]),(0,l._)("tr",null,[(0,l._)("td",U,(0,u.zw)(x.inputnum)+"以下的質數",1),""!=x.output[2]?((0,l.wg)(),(0,l.iD)("td",C,[(0,l.Uk)((0,u.zw)(x.output[2]),1),F])):((0,l.wg)(),(0,l.iD)("td",I,q))])])])])])):(0,l.kq)("",!0)],64)}n(7658);const V=t=>parseInt(t)==t,Y=t=>{let e=[];for(var n=1;n<=t;n++)V(t/n)&&e.push(n);return e},Z=t=>Y(t)[1]==t,$=t=>{let e=[];for(let n=1;n<=t;n++)Z(n)&&e.push(n);return e},A=t=>{let e="";for(let n of t)e=`${e}, `+n;return e.substring(2,e.length)};var B={name:"mathFactor",data(){return{alert:[void 0,void 0],inputnum:0,output:["","",""]}},methods:{update(){let t=[],e=Y(this.inputnum),n=$(this.inputnum);this.output=[A(Y(this.inputnum)),"",A($(this.inputnum))];for(let l of e)for(let e of n)l==e&&t.push(e);console.log(t),this.output[1]=A(t)}}},E=n(3744);const G=(0,E.Z)(B,[["render",H]]);var J=G}}]);
//# sourceMappingURL=127.f310a689.js.map