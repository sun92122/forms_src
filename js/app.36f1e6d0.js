(function(){"use strict";var e={8856:function(e,t,a){var l=a(9242),o=a(3396);function i(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var n=a(89);const r={},u=(0,n.Z)(r,[["render",i]]);var d=u,s=a(2483),c=a(7139);const m=e=>((0,o.dD)("data-v-a30a0bea"),e=e(),(0,o.Cn)(),e),h={class:"SonG"},p={class:"title"},v=["innerHTML"],f={class:"form afterSubmit"},g=["innerHTML"],y=["action"],b=m((()=>(0,o._)("div",{class:"explain"},[(0,o._)("div",{class:"req"},"*"),(0,o._)("div",null,"必填")],-1))),_=["for"],w={key:0,class:"req"},D=["innerHTML"],k=["id","name","type","onUpdate:modelValue"],S=["id","name","type","onUpdate:modelValue"],q={class:"question"},x=m((()=>(0,o._)("label",null,"子女",-1))),A=["name","type"],C=["for"],T=m((()=>(0,o._)("div",{class:"req"},"*",-1))),G=["id","type","onUpdate:modelValue"],F=["for"],B=m((()=>(0,o._)("div",{class:"req"},"*",-1))),U=["id","type","onUpdate:modelValue"],H={class:"childButton"},O=m((()=>(0,o._)("div",{class:"submit"},[(0,o._)("input",{type:"submit",value:"送出"})],-1))),V={name:"nothing"};function j(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",p,[(0,o._)("h1",null,(0,c.zw)(n.Title.title),1),(0,o._)("div",{innerHTML:n.Title.subtitle},null,8,v)]),(0,o.wy)((0,o._)("div",f,[(0,o._)("div",{innerHTML:n.afterSubmit},null,8,g),(0,o._)("a",{href:"/forms/SonG",onClick:t[0]||(t[0]=(...e)=>r.clearForm&&r.clearForm(...e))},"提交另一份表單")],512),[[l.F8,n.Submited]]),(0,o.wy)((0,o._)("form",{class:"form",action:n.PostUrl,method:"post",target:"nothing",onSubmit:t[4]||(t[4]=e=>n.Submited=!0)},[b,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.Datas,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"question",key:t},[(0,o._)("label",{for:t},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(t)+" ",1),"true"==e.other.required?((0,o.wg)(),(0,o.iD)("div",w,"*")):(0,o.kq)("",!0)]),""!=e.example?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"example",innerHTML:e.example},null,8,D)):(0,o.kq)("",!0)],8,_),"textarea"!=e.type?(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",(0,o.dG)({key:0,id:t,name:e.name,type:e.type},e.other,{"onUpdate:modelValue":t=>e.value=t}),null,16,k)),[[l.YZ,e.value]]):(0,o.kq)("",!0),"textarea"==e.type?(0,o.wy)(((0,o.wg)(),(0,o.iD)("textarea",(0,o.dG)({key:1,id:t,name:e.name,type:e.type},e.other,{"onUpdate:modelValue":t=>e.value=t}),null,16,S)),[[l.nr,e.value]]):(0,o.kq)("",!0)])))),128)),(0,o._)("div",q,[x,(0,o.wy)((0,o._)("input",(0,o.dG)({id:"子女",name:n.Child.name,type:n.Child.type},n.Child.other,{"onUpdate:modelValue":t[1]||(t[1]=e=>r.allChilds=e)}),null,16,A),[[l.YZ,r.allChilds]])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.Childs,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"question",key:e},[(0,o._)("label",{for:e.childName.name},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(e.childName.label)+" ",1),T])],8,C),(0,o.wy)((0,o._)("input",(0,o.dG)({id:e.childName.name,type:e.childName.type},e.childName.other,{"onUpdate:modelValue":t=>e.childName.value=t}),null,16,G),[[l.YZ,e.childName.value]]),(0,o._)("label",{for:e.childBirth.name},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(e.childBirth.label)+" ",1),B])],8,F),(0,o.wy)((0,o._)("input",(0,o.dG)({id:e.childBirth.name,type:e.childBirth.type},e.childBirth.other,{"onUpdate:modelValue":t=>e.childBirth.value=t}),null,16,U),[[l.YZ,e.childBirth.value]])])))),128)),(0,o._)("div",H,[(0,o._)("button",{type:"button",onClick:t[2]||(t[2]=(...e)=>r.addChild&&r.addChild(...e))},"新增"),n.Childs.length?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",onClick:t[3]||(t[3]=(...e)=>r.delChild&&r.delChild(...e))}," 刪除 ")):(0,o.kq)("",!0)]),O],40,y),[[l.F8,!n.Submited]]),(0,o.wy)((0,o._)("iframe",V,null,512),[[l.F8,!1]])])}a(7658);var Y=a(5939),M=a.p+"img/bg.b3c9555f.jpg";const N="https://script.google.com/macros/s/AKfycbw_xlSbZXT1F5syqnrGBA-3iNvOdc-Ggf5Gcy4jPGPNwhwjjTLd7WfSfAIOEfMkOaMWfQ/exec";var I={name:"SonG",data(){return{Submited:!1,BGimg:M,Title:{title:"雅歌G小組成員資料",subtitle:"親愛的弟兄姊妹們大家好<br />以下表單是個人資料調查表請大家填寫，裡面各項資訊請盡量填寫<br />所有資料僅供小組長及小家長們參考，絕不外流，謝謝大家<br />"},test:[],PostUrl:N,Datas:{"姓名":{name:"name",example:"",value:"",type:"text",other:{autocomplete:"name",required:"true"}},"生日":{name:"birth",example:"",value:"",type:"date",other:{autocomplete:"bday",placeholder:"yyyy-mm-dd",required:"true",max:this.today()}},"配偶姓名":{name:"spouse",example:"",value:"",type:"text",other:{autocomplete:"off"}},"電子郵件":{name:"email",example:"",value:"",type:"email",other:{autocomplete:"email",required:"true"}},"手機號碼":{name:"phone",example:"",value:"",type:"tel",other:{autocomplete:"tel",required:"true"}},"住家地址":{name:"address",example:"",value:"",type:"text",other:{autocomplete:"address"}},"住家電話":{name:"telephone",example:"",value:"",type:"tel",other:{autocomplete:"off"}},"服務單位及職稱":{name:"job",example:"",value:"",type:"textarea",other:{autocomplete:"off"}},"服事項目及頻率":{name:"church",example:"",value:"",type:"textarea",other:{autocomplete:"off"}}},Child:{name:"child",example:"",value:"",type:"hidden",other:{autocomplete:"off"}},Childs:[],afterSubmit:"資料調查表已提交，感謝您的填寫"}},computed:{allChilds(){for(var e="",t=0;t<this.Childs.length;t++)e+=this.Childs[t].childName.value+"（"+this.Childs[t].childBirth.value+"）\n";return e?e.trim():"無"}},methods:{today(){const e=(new Date).toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"});return e.replace(/\//g,"-")},addChild(){this.Childs.push({childName:{name:"childName"+this.Childs.length,label:"小孩姓名 "+(this.Childs.length+1),type:"text",other:{autocomplete:"off",required:"true"},value:""},childBirth:{name:"childBirth"+this.Childs.length,label:"小孩生日 "+(this.Childs.length+1),type:"date",other:{autocomplete:"off",placeholder:"yyyy-mm-dd",required:"true",max:this.today()},value:""}})},delChild(){this.Childs.pop()},clearForm(){for(var e in this.Datas)this.Datas[e].value="";this.Childs=[]}},created(){Y.Z.get(N).then((e=>{const t=e.data;this.test=t,console.log(t);for(var a=0;a<t.length;a++){const e=t[a];console.log(e[0],e[1]),"標題"==e[0]?this.Title.title=e[1]:"副標題"==e[0]?this.Title.subtitle=e[1].replace(/\r?\n/g,"<br />"):"傳送後訊息"==e[0]?this.afterSubmit=e[1].replace(/\r?\n/g,"<br />"):this.Datas[e[0]].example=e[1].replace(/\r?\n/g,"<br />")}}))}};const L=(0,n.Z)(I,[["render",j],["__scopeId","data-v-a30a0bea"]]);var z=L;const P=e=>((0,o.dD)("data-v-616bc0ac"),e=e(),(0,o.Cn)(),e),Z={class:"HomecomingServiceTeam"},K={class:"title"},Q=["src"],E=["innerHTML"],R={class:"form AfterSubmit"},W=["innerHTML"],X=(0,o.uE)('<div data-v-616bc0ac>各種傳送門</div><div data-v-616bc0ac><a href="https://drive.google.com/drive/folders/13AVD27-bc5cBB0gJWY0Y0sq6wuqFgRnn?fbclid=IwAR1tQ6pIdpPpXhxPaSuRx0RyknBi7eaXf7VSJwOzIDzBq-F0LSt8qIOpAP0" target="_blank" data-v-616bc0ac> 重要的作業 </a></div><div data-v-616bc0ac><a href="https://docs.google.com/forms/d/e/1FAIpQLSfjUcHtNB83e4kIF8mjT_xIZnN9aoWoJpdIfqXtWtraCLOYAQ/viewform?usp=sf_link" target="_blank" data-v-616bc0ac> 27返服股長意願 </a></div><div data-v-616bc0ac><a href="https://docs.google.com/forms/d/e/1FAIpQLSc6jOqFRvdzMO4bUT7dce6Zm2vYKz1cN2Rb-g8PltdG3yoNYw/viewform?usp=sf_link" target="_blank" data-v-616bc0ac> 27竹苗幹部意願 </a></div><div data-v-616bc0ac><a href="https://docs.google.com/forms/d/e/1FAIpQLSc1NMSYH7AnI7hYRqalPfgbEtknX8ZnwIa1uxKCMytgX_dCTw/viewform?usp=sf_link" target="_blank" data-v-616bc0ac> 27竹苗會長改選意願 </a></div><div data-v-616bc0ac><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0zeiFpduhwTK-57TpcMP6lkl4FlqDNQ0N8GOxg6Z0SCLhqg/viewform?usp=sf_link" target="_blank" data-v-616bc0ac> 竹苗週招工登記表 </a></div>',6),J=["action"],$=P((()=>(0,o._)("div",{class:"explain"},[(0,o._)("div",{class:"req"},"*"),(0,o._)("div",null,"必填")],-1))),ee=["for"],te=P((()=>(0,o._)("div",{class:"req"},"*",-1))),ae=["id","onUpdate:modelValue","onInput"],le=["name","value"],oe=["value"],ie=["for"],ne=P((()=>(0,o._)("div",{class:"req"},"*",-1))),re=["for"],ue=["id","name","value","onUpdate:modelValue"],de={class:"Anonymous"},se=P((()=>(0,o._)("label",{for:"Anonymous"},[(0,o._)("div",null,"匿名")],-1))),ce={key:0,class:"question Datas"},me=P((()=>(0,o._)("h3",null,"載入中...滿滿的問題馬上就來",-1))),he=[me],pe={key:1,class:"container"},ve=["for"],fe=P((()=>(0,o._)("div",{class:"req"},"*",-1))),ge=["id","name","value"],ye={class:"options"},be=["for"],_e=["id","name","value","onUpdate:modelValue"],we=["for"],De=["id","name","type","onUpdate:modelValue","placeholder"],ke=["for"],Se=["id","name","onUpdate:modelValue"],qe={class:"submit"},xe={name:"nothing"};function Ae(e,t,a,i,n,r){const u=(0,o.up)("Toggle");return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",K,[(0,o._)("h1",null,(0,c.zw)(n.Title.title),1),(0,o.wy)((0,o._)("img",{src:n.Title.image},null,8,Q),[[l.F8,!n.Submited]]),(0,o.wy)((0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.Title.subtitle,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,innerHTML:e},null,8,E)))),128)),(0,o._)("div",{class:"shortcut",onClick:t[0]||(t[0]=e=>n.Submited=!0)}," 只是來找傳送門可以點我 ")],512),[[l.F8,!n.Submited]])]),(0,o.wy)((0,o._)("div",R,[(0,o._)("div",{innerHTML:n.AfterSubmit},null,8,W),(0,o._)("div",null,[X,(0,o._)("div",null,[(0,o._)("a",{href:"/forms/HomecomingServiceTeam",onClick:t[1]||(t[1]=(...e)=>r.clearForm&&r.clearForm(...e))}," 提交另一份表單 ")])])],512),[[l.F8,n.Submited]]),(0,o.wy)((0,o._)("form",{class:"form",action:n.PostUrl,method:"post",target:"nothing",onSubmit:t[5]||(t[5]=e=>n.Submited=!0)},[$,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.BeforeDatas,((e,a)=>((0,o.wg)(),(0,o.iD)("div",{class:"question BeforeDatas",key:a},[(0,o._)("label",{for:a},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(a)+" ",1),te])],8,ee),(0,o.wy)((0,o._)("input",(0,o.dG)({id:a},e.other,{"onUpdate:modelValue":t=>e.value=t,required:"",onInput:t=>r.autoGet(e.value),onKeydown:t[2]||(t[2]=(0,l.D2)((0,l.iM)((()=>{}),["prevent"]),["enter"]))}),null,16,ae),[[l.YZ,e.value]]),(0,o._)("input",{type:"hidden",name:a,value:n.Anonymous?"匿名":e.value},null,8,le)])))),128)),(0,o._)("input",{type:"hidden",name:"record",value:n.BeforeDatas.姓名.value},null,8,oe),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.BeforeDatas2,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"question BeforeDatas",key:t},[(0,o._)("label",{for:t},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(t)+" ",1),ne])],8,ie),(0,o._)("div",{class:"options",style:(0,c.j5)(e.options.length<3?{"justify-content":"flex-start"}:{})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(a=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:"option",key:a},[(0,o._)("label",{for:t+"option"},[(0,o._)("div",null,(0,c.zw)(a),1)],8,re),(0,o.wy)((0,o._)("input",(0,o.dG)({id:t+"option",name:t,required:""},e.other,{value:a,"onUpdate:modelValue":t=>e.value=t}),null,16,ue),[[l.YZ,e.value]])])),[[l.F8,""!=a]]))),128))],4)])))),128)),(0,o._)("div",de,[se,(0,o.Wm)(u,{id:"Anonymous",modelValue:n.Anonymous,"onUpdate:modelValue":t[3]||(t[3]=e=>n.Anonymous=e)},null,8,["modelValue"])]),0==Object.keys(n.Datas).length?((0,o.wg)(),(0,o.iD)("div",ce,he)):(0,o.kq)("",!0),"test"!=n.BeforeDatas.包裝名.value?((0,o.wg)(),(0,o.iD)("div",pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.Datas,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"question Datas",key:t},[(0,o._)("label",{for:t},[(0,o._)("div",null,[(0,o.Uk)((0,c.zw)(t)+" ",1),fe])],8,ve),(0,o._)("input",{id:t,name:t,type:"hidden",value:(e.value+"\n"+e.suggestion).trim()},null,8,ge),(0,o._)("div",ye,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.options,(a=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:"option",key:a},[(0,o._)("label",{for:t+a},[(0,o._)("div",null,(0,c.zw)(a),1)],8,be),(0,o.wy)((0,o._)("input",(0,o.dG)({id:t+a,name:t+"option",required:""},e.other,{value:a,"onUpdate:modelValue":t=>e.value=t}),null,16,_e),[[l.YZ,e.value]])])),[[l.F8,""!=a]]))),128))]),(0,o.wy)((0,o._)("label",{for:t+"suggestion"},[(0,o._)("div",null,(0,c.zw)(t)+"的建議或回饋",1)],8,we),[[l.F8,""!=e.value]]),(0,o.wy)((0,o._)("textarea",(0,o.dG)({id:t+"suggestion",name:t+"suggestion",type:e.type},e.other,{"onUpdate:modelValue":t=>e.suggestion=t,placeholder:"請輸入"+t+"的建議或回饋"}),null,16,De),[[l.nr,e.suggestion],[l.F8,""!=e.value]])])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.AfterDatas,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"question AfterDatas",key:t},[(0,o._)("label",{for:t},[(0,o._)("div",null,(0,c.zw)(t),1)],8,ke),(0,o.wy)((0,o._)("textarea",(0,o.dG)({id:t,name:t},e.other,{"onUpdate:modelValue":t=>e.value=t}),null,16,Se),[[l.nr,e.value]])])))),128))])):(0,o.kq)("",!0),(0,o._)("div",qe,[(0,o._)("input",{type:"submit",value:"送出",onClickCapture:t[4]||(t[4]=(...e)=>r.checkForm&&r.checkForm(...e))},null,32)])],40,J),[[l.F8,!n.Submited]]),(0,o.wy)((0,o._)("iframe",xe,null,512),[[l.F8,!1]])])}var Ce=a(6617),Te=a.p+"img/HomecomingServiceTeamImage.1dd465b8.jpg";const Ge="https://script.google.com/macros/s/AKfycbwB7_d9M9dIO8GrkQGu0tQF4cSF93YfXMEIOzJb25YeD6V1NJphqQheyeFZsre7fC-o_Q/exec";var Fe={name:"HomecomingServiceTeam",components:{Toggle:Ce.Z},data(){return{Submited:!1,Title:{title:"返服工人回饋調查",image:Te,subtitle:["各位早安，這是總籌B倒數第二次跟大家問早","<s>因為結案報告有點空</s>，為了給往後的返服有更多參考資料，希望大家填一下這個很長的調查表","考慮到有些問題需要回憶一下，預計填表時間可能長達半小時以上","我幫大家準備了匿名開關，如果打開它，提交的姓名和包裝名將不會與其他答案連結，只用於紀錄是否填表，不過如果填錯或想修改我就沒辦法幫你從後台刪掉前次提交了","<br /><br />","因為還在測試階段，如果本表單有Bug可以直接通知我","注意：瀏覽器重新整理將清空表單，建議使用電腦作答或先在其他地方打好再複製進來"]},PostUrl:Ge,Anonymous:!1,BeforeDatas:{"姓名":{value:"",other:{type:"text",placeholder:"請輸入姓名"}},"包裝名":{value:"",other:{type:"text",placeholder:"請輸入包裝名"}}},BeforeDatas2:{"股別":{other:{type:"radio"},options:["總籌股","活動股","美輔股","課程股","生器股"],value:""},"股長or股員":{other:{type:"radio"},options:["股長","股員"],value:""}},Datas:{},AfterDatas:{"其他建議或回饋":{value:"",other:{type:"textarea",placeholder:"請輸入其他建議或回饋"}}},AfterSubmit:"",AutoGetDatas:[["黃冠霖","固拉多多綠","總籌股","股長"],["薛皓陽","奶蓋歐卡","總籌股","股長"],["何躍陽","証列空座","總籌股","股長"],["王俞樂","派比比","活動股","股長"],["胡佳君","卡卡派","活動股","股長"],["葉子榕","派特","活動股","股長"],["楊士寬","十八拉","美輔股","股長"],["陳美雯","沙拉","美輔股","股長"],["連奕群","紅燒獅子頭","課程股","股長"],["謝昀軒","","課程股","股長"],["蔡明展","蘿博糕","生器股","股長"],["李承恩","大力士","生器股","股長"],["趙至媛","檸檬派","活動股","股員"],["郭佩宜","揪派","活動股","股員"],["黃裕實","派派隊長","活動股","股員"],["呂卉然","派毛毛","活動股","股員"],["劉子玄","派Apple","活動股","股員"],["陳士祈","奶油超派","活動股","股員"],["沈立寬","Give me 派","活動股","股員"],["林書辰","辰派","活動股","股員"],["王晴","海派甜心","活動股","股員"],["鄧謹祈","蛋黃派","活動股","股員"],["洪鈺晴","蛋餅皮","美輔股","股員"],["林品辰","雙眼皮","美輔股","股員"],["黃馨平","蘋果皮","美輔股","股員"],["陳昱伶","香蕉皮","美輔股","股員"],["黃品元","水餃皮","美輔股","股員"],["林巧翎","揪皮","美輔股","股員"],["廖昱華","耍賴皮","美輔股","股員"],["李宇宸","GD皮","美輔股","股員"],["張禎晏","厚臉皮","美輔股","股員"],["馮貫恩","單眼皮","美輔股","股員"],["賴彥安","海蜇皮","美輔股","股員"],["陶君勤","鼬鼬班班導","課程股","股員"],["姚思辰","鼬香綠茶","課程股","股員"],["梁芝穎","鼬子醬","課程股","股員"],["謝乙宇","鼬柿泥","課程股","股員"],["黃敬倫","鼬鼬man","課程股","股員"],["蘇振誌","鼬鼬點點名","課程股","股員"],["周欣葶","陌生人","生器股","股員"],["白于芳","生煎包","生器股","股員"],["黃昱昇","生笠軍","生器股","股員"],["江名傑","生懶腰","生器股","股員"],["吳閎源","模範生","生器股","股員"],["柯潔蓉","值日生","生器股","股員"]]}},methods:{checkForm(){this.$nextTick((()=>{let e=document.querySelectorAll(":invalid");0!=e.length?e[1].scrollIntoView({block:"center",behavior:"smooth"}):this.$refs.form.submit()}))},clearForm(){var e=void 0;for(e in this.BeforeDatas)this.BeforeDatas[e].value="";for(e in this.AfterDatas)this.AfterDatas[e].value="";for(e in this.Datas)this.Datas[e].value="",this.Datas[e].suggestion=""},autoGet(e){for(var t in this.AutoGetDatas){if(""==e)return;if(this.AutoGetDatas[t][0]==e||this.AutoGetDatas[t][1]==e)return this.BeforeDatas.姓名.value=this.AutoGetDatas[t][0],this.BeforeDatas.包裝名.value=this.AutoGetDatas[t][1],this.BeforeDatas2.股別.value=this.AutoGetDatas[t][2],void(this.BeforeDatas2.股長or股員.value=this.AutoGetDatas[t][3])}}},created(){Y.Z.get(Ge+"?mode=DATA").then((e=>{const t=e.data;for(var a=0;a<t.length;a++){const e=t[a];"傳送後訊息"==e[0]?this.AfterSubmit=e[1].replace(/\r?\n/g,"<br />"):e.filter((e=>""!=e)).length>2&&(this.Datas[e[0]]={other:{type:"radio"},options:e.filter((e=>""!=e)).slice(1),value:"",suggestion:""})}}))}};const Be=(0,n.Z)(Fe,[["render",Ae],["__scopeId","data-v-616bc0ac"]]);var Ue=Be;const He=[{path:"/",name:"Home",component:()=>a.e(490).then(a.bind(a,3490)),meta:{title:"A web form made by magical"}},{path:"/SonG",name:"SonG",component:z,meta:{title:"雅歌G小組成員資料"}},{path:"/HomecomingServiceTeam",name:"HomecomingServiceTeam",component:Ue,meta:{title:"返服意見調查"}}],Oe=(0,s.p7)({history:(0,s.PO)("/forms/"),routes:He});Oe.beforeEach(((e,t,a)=>{window.document.title=e.meta.title,a()}));var Ve=Oe,je=a(65),Ye=(0,je.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,l.ri)(d).use(Ye).use(Ve).mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var i=t[l]={exports:{}};return e[l](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,i){if(!l){var n=1/0;for(s=0;s<e.length;s++){l=e[s][0],o=e[s][1],i=e[s][2];for(var r=!0,u=0;u<l.length;u++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](l[u])}))?l.splice(u--,1):(r=!1,i<n&&(n=i));if(r){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[l,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,l){return a.f[l](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".2510d546.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="forms:";a.l=function(l,o,i,n){if(e[l])e[l].push(o);else{var r,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==t+i){r=c;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+i),r.src=l),e[l]=[o];var m=function(t,a){r.onerror=r.onload=null,clearTimeout(h);var o=e[l];if(delete e[l],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),u&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/forms/"}(),function(){var e={143:0};a.f.j=function(t,l){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)l.push(o[2]);else{var i=new Promise((function(a,l){o=e[t]=[a,l]}));l.push(o[2]=i);var n=a.p+a.u(t),r=new Error,u=function(l){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=l&&("load"===l.type?"missing":l.type),n=l&&l.target&&l.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",r.name="ChunkLoadError",r.type=i,r.request=n,o[1](r)}};a.l(n,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,i,n=l[0],r=l[1],u=l[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(u)var s=u(a)}for(t&&t(l);d<n.length;d++)i=n[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(s)},l=self["webpackChunkforms"]=self["webpackChunkforms"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(8856)}));l=a.O(l)})();
//# sourceMappingURL=app.36f1e6d0.js.map