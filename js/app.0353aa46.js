(function(){"use strict";var e={633:function(e,t,l){var a=l(9963),i=l(6252);function n(e,t){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}var o=l(3744);const r={},d=(0,o.Z)(r,[["render",n]]);var u=d,h=l(2201),s=l(3577);const m=e=>((0,i.dD)("data-v-2241f818"),e=e(),(0,i.Cn)(),e),c={class:"SonG"},p={class:"title"},f=["innerHTML"],v={class:"form afterSubmit"},y=["innerHTML"],b=["action"],g=m((()=>(0,i._)("div",{class:"explain"},[(0,i._)("div",{class:"req"},"*"),(0,i._)("div",null,"必填")],-1))),w=["for"],x={key:0,class:"req"},C=["innerHTML"],_=["id","name","type","onUpdate:modelValue"],k=["id","name","type","onUpdate:modelValue"],q={class:"question"},D=m((()=>(0,i._)("label",null,"子女",-1))),G=["name","type"],S=["for"],T=m((()=>(0,i._)("div",{class:"req"},"*",-1))),O=["id","type","onUpdate:modelValue"],U=["for"],B=m((()=>(0,i._)("div",{class:"req"},"*",-1))),j=["id","type","onUpdate:modelValue"],N={class:"childButton"},H=m((()=>(0,i._)("div",{class:"submit"},[(0,i._)("input",{type:"submit",value:"送出"})],-1))),M={name:"nothing"};function V(e,t,l,n,o,r){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",p,[(0,i._)("h1",null,(0,s.zw)(o.Title.title),1),(0,i._)("div",{innerHTML:o.Title.subtitle},null,8,f)]),(0,i.wy)((0,i._)("div",v,[(0,i._)("div",{innerHTML:o.afterSubmit},null,8,y),(0,i._)("a",{href:"/SonG",onClick:t[0]||(t[0]=(...e)=>r.clearForm&&r.clearForm(...e))},"提交另一份表單")],512),[[a.F8,o.Submited]]),(0,i.wy)((0,i._)("form",{class:"form",action:o.PostUrl,method:"post",target:"nothing",onSubmit:t[4]||(t[4]=e=>o.Submited=!0)},[g,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.Datas,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"question",key:t},[(0,i._)("label",{for:t},[(0,i._)("div",null,[(0,i.Uk)((0,s.zw)(t)+" ",1),"true"==e.other.required?((0,i.wg)(),(0,i.iD)("div",x,"*")):(0,i.kq)("",!0)]),""!=e.example?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"example",innerHTML:e.example},null,8,C)):(0,i.kq)("",!0)],8,w),"textarea"!=e.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",(0,i.dG)({key:0,id:t,name:e.name,type:e.type},e.other,{"onUpdate:modelValue":t=>e.value=t}),null,16,_)),[[a.YZ,e.value]]):(0,i.kq)("",!0),"textarea"==e.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",(0,i.dG)({key:1,id:t,name:e.name,type:e.type},e.other,{"onUpdate:modelValue":t=>e.value=t}),null,16,k)),[[a.nr,e.value]]):(0,i.kq)("",!0)])))),128)),(0,i._)("div",q,[D,(0,i.wy)((0,i._)("input",(0,i.dG)({id:"子女",name:o.Child.name,type:o.Child.type},o.Child.other,{"onUpdate:modelValue":t[1]||(t[1]=e=>r.allChilds=e)}),null,16,G),[[a.YZ,r.allChilds]])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.Childs,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"question",key:e},[(0,i._)("label",{for:e.childName.name},[(0,i._)("div",null,[(0,i.Uk)((0,s.zw)(e.childName.label)+" ",1),T])],8,S),(0,i.wy)((0,i._)("input",(0,i.dG)({id:e.childName.name,type:e.childName.type},e.childName.other,{"onUpdate:modelValue":t=>e.childName.value=t}),null,16,O),[[a.YZ,e.childName.value]]),(0,i._)("label",{for:e.childBirth.name},[(0,i._)("div",null,[(0,i.Uk)((0,s.zw)(e.childBirth.label)+" ",1),B])],8,U),(0,i.wy)((0,i._)("input",(0,i.dG)({id:e.childBirth.name,type:e.childBirth.type},e.childBirth.other,{"onUpdate:modelValue":t=>e.childBirth.value=t}),null,16,j),[[a.YZ,e.childBirth.value]])])))),128)),(0,i._)("div",N,[(0,i._)("button",{type:"button",onClick:t[2]||(t[2]=(...e)=>r.addChild&&r.addChild(...e))},"新增"),o.Childs.length?((0,i.wg)(),(0,i.iD)("button",{key:0,type:"button",onClick:t[3]||(t[3]=(...e)=>r.delChild&&r.delChild(...e))}," 刪除 ")):(0,i.kq)("",!0)]),H],40,b),[[a.F8,!o.Submited]]),(0,i.wy)((0,i._)("iframe",M,null,512),[[a.F8,!1]])])}l(7658);var F=l(8433),L=l.p+"img/bg.b3c9555f.jpg";const Z="https://script.google.com/macros/s/AKfycbw_xlSbZXT1F5syqnrGBA-3iNvOdc-Ggf5Gcy4jPGPNwhwjjTLd7WfSfAIOEfMkOaMWfQ/exec";var P={name:"SonG",data(){return{Submited:!1,BGimg:L,Title:{title:"雅歌G小組成員資料",subtitle:"親愛的弟兄姊妹們大家好<br \\>以下表單是個人資料調查表請大家填寫，裡面各項資訊請盡量填寫<br \\>所有資料僅供小組長及小家長們參考，絕不外流，謝謝大家<br \\>"},test:[],PostUrl:Z,Datas:{"姓名":{name:"name",example:"",value:"",type:"text",other:{autocomplete:"name",required:"true"}},"生日":{name:"birth",example:"",value:"",type:"date",other:{autocomplete:"bday",placeholder:"yyyy-mm-dd",required:"true",max:this.today()}},"配偶姓名":{name:"spouse",example:"",value:"",type:"text",other:{autocomplete:"off"}},"電子郵件":{name:"email",example:"",value:"",type:"email",other:{autocomplete:"email",required:"true"}},"手機號碼":{name:"phone",example:"",value:"",type:"tel",other:{autocomplete:"tel",required:"true"}},"住家地址":{name:"address",example:"",value:"",type:"text",other:{autocomplete:"address"}},"住家電話":{name:"telephone",example:"",value:"",type:"tel",other:{autocomplete:"off"}},"服務單位及職稱":{name:"job",example:"",value:"",type:"textarea",other:{autocomplete:"off"}},"服事項目及頻率":{name:"church",example:"",value:"",type:"textarea",other:{autocomplete:"off"}}},Child:{name:"child",example:"",value:"",type:"hidden",other:{autocomplete:"off"}},Childs:[],afterSubmit:"資料調查表已提交，感謝您的填寫"}},computed:{allChilds(){for(var e="",t=0;t<this.Childs.length;t++)e+=this.Childs[t].childName.value+"（"+this.Childs[t].childBirth.value+"）\n";return e||"無"}},methods:{today(){const e=(new Date).toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"});return e.replace(/\//g,"-")},addChild(){this.Childs.push({childName:{name:"childName"+this.Childs.length,label:"小孩姓名 "+(this.Childs.length+1),type:"text",other:{autocomplete:"off",required:"true"},value:""},childBirth:{name:"childBirth"+this.Childs.length,label:"小孩生日 "+(this.Childs.length+1),type:"date",other:{autocomplete:"off",placeholder:"yyyy-mm-dd",required:"true",max:this.today()},value:""}})},delChild(){this.Childs.pop()},clearForm(){for(var e in this.Datas)this.Datas[e].value="";this.Childs=[]}},created(){F.Z.get(Z).then((e=>{const t=e.data;this.test=t,console.log(t);for(var l=0;l<t.length;l++){const e=t[l];console.log(e[0],e[1]),"標題"==e[0]?this.Title.title=e[1]:"副標題"==e[0]?this.Title.subtitle=e[1].replace(/\r?\n/g,"<br \\>"):"傳送後訊息"==e[0]?this.afterSubmit=e[1].replace(/\r?\n/g,"<br \\>"):this.Datas[e[0]].example=e[1].replace(/\r?\n/g,"<br \\>")}}))}};const Y=(0,o.Z)(P,[["render",V],["__scopeId","data-v-2241f818"]]);var z=Y;const A=[{path:"/",name:"Home",component:z,meta:{title:"雅歌G小組成員資料"}},{path:"/SonG",name:"SonG",component:z,meta:{title:"雅歌G小組成員資料"}}],E=(0,h.p7)({history:(0,h.PO)("/forms/"),routes:A});E.beforeEach(((e,t,l)=>{window.document.title=e.meta.title,l()}));var K=E,W=l(3907),I=(0,W.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(u).use(I).use(K).mount("#app")}},t={};function l(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,a,i,n){if(!a){var o=1/0;for(h=0;h<e.length;h++){a=e[h][0],i=e[h][1],n=e[h][2];for(var r=!0,d=0;d<a.length;d++)(!1&n||o>=n)&&Object.keys(l.O).every((function(e){return l.O[e](a[d])}))?a.splice(d--,1):(r=!1,n<o&&(o=n));if(r){e.splice(h--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[a,i,n]}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.p="/forms/"}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,o=a[0],r=a[1],d=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)l.o(r,i)&&(l.m[i]=r[i]);if(d)var h=d(l)}for(t&&t(a);u<o.length;u++)n=o[u],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(h)},a=self["webpackChunkforms"]=self["webpackChunkforms"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(633)}));a=l.O(a)})();
//# sourceMappingURL=app.0353aa46.js.map