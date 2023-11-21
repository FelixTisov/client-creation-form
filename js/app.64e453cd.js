(function(){"use strict";var t={189:function(t,e,r){var o=r(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("ClientForm")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"form-container"},[e("form",{staticClass:"client-form",on:{submit:function(e){return e.preventDefault(),t.createClient.apply(null,arguments)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.currentIndex,expression:"currentIndex === 0"}],staticClass:"curentPageContainer",attrs:{"keep-alive":!0}},[e("MainInformation",{ref:"mainInformation"})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentIndex,expression:"currentIndex === 1"}],staticClass:"curentPageContainer",attrs:{"keep-alive":!0}},[e("AdressInformation",{ref:"addressInformation"})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.currentIndex,expression:"currentIndex === 2"}],staticClass:"curentPageContainer",attrs:{"keep-alive":!0}},[e("PassportInformation",{ref:"passportInformation"})],1),3===t.currentIndex?e("div",{staticClass:"curentPageContainer"},[e("p",{staticClass:"success-message"},[t._v("Клиент успешно создан!")])]):t._e(),t.currentIndex<3?e("div",{staticClass:"comment-container"},[e("p",[t._v("* - обязательное поле")])]):t._e(),e("div",{staticClass:"buttons-container"},[t.currentIndex>0&&t.currentIndex<3?e("button",{on:{click:t.navigatePrevious}},[t._v(" Назад ")]):t._e(),t.currentIndex<2?e("button",{on:{click:t.navigateNext}},[t._v("Далее")]):t._e(),2===t.currentIndex?e("button",{attrs:{type:"submit"}},[t._v("Создать")]):t._e()]),t.isSuccess?e("p",[t._v("Клиент успешно создан!")]):t._e()])])])},s=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-information"},[e("div",{staticClass:"client-name-container"},[e("label",[t._v("ФИО клиента")]),e("div",{staticClass:"client-name"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.v$.mainInformation.lastName.$model,expression:"v$.mainInformation.lastName.$model"}],attrs:{type:"text",id:"lastName",placeholder:"Фамилия*"},domProps:{value:t.v$.mainInformation.lastName.$model},on:{blur:t.v$.mainInformation.lastName.$touch,input:function(e){e.target.composing||t.$set(t.v$.mainInformation.lastName,"$model",e.target.value)}}}),e("div",{staticClass:"form-group-footer"},[t.v$.mainInformation.lastName.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.v$.mainInformation.firstName.$model,expression:"v$.mainInformation.firstName.$model"}],attrs:{type:"text",id:"firstName",placeholder:"Имя*"},domProps:{value:t.v$.mainInformation.firstName.$model},on:{blur:t.v$.mainInformation.firstName.$touch,input:function(e){e.target.composing||t.$set(t.v$.mainInformation.firstName,"$model",e.target.value)}}}),e("div",{staticClass:"form-group-footer"},[t.v$.mainInformation.firstName.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainInformation.middleName,expression:"mainInformation.middleName"}],attrs:{type:"text",id:"middleName",placeholder:"Отчество"},domProps:{value:t.mainInformation.middleName},on:{input:function(e){e.target.composing||t.$set(t.mainInformation,"middleName",e.target.value)}}}),e("div",{staticClass:"form-group-footer"})])])]),e("div",{staticClass:"form-group"},[e("label",[t._v("Дата рождения*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.v$.mainInformation.birthDate.$model,expression:"v$.mainInformation.birthDate.$model"}],attrs:{type:"date",id:"birthdate",onfocus:"(this.type='date')"},domProps:{value:t.v$.mainInformation.birthDate.$model},on:{blur:t.v$.mainInformation.birthDate.$touch,input:function(e){e.target.composing||t.$set(t.v$.mainInformation.birthDate,"$model",e.target.value)}}}),e("div",{staticClass:"form-group-footer"},[t.v$.mainInformation.birthDate.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("label",[t._v("Номер телефона*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedPhoneNumber,expression:"formattedPhoneNumber"}],attrs:{type:"tel",id:"phoneNumber",placeholder:"+7 (___) ___ - ___"},domProps:{value:t.formattedPhoneNumber},on:{blur:t.v$.mainInformation.phoneNumber.$touch,input:function(e){e.target.composing||(t.formattedPhoneNumber=e.target.value)}}}),e("div",{staticClass:"form-group-footer"},[t.v$.mainInformation.phoneNumber.$error?e("span",{staticClass:"error-message"},[t._v("Номер телефона должен начинаться с 7 и содержать 11 цифр")]):t._e()])]),e("div",{staticClass:"form-group"},[e("label",[t._v("Пол")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainInformation.gender,expression:"mainInformation.gender"}],attrs:{type:"text",id:"gender",placeholder:"Мужской"},domProps:{value:t.mainInformation.gender},on:{input:function(e){e.target.composing||t.$set(t.mainInformation,"gender",e.target.value)}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Группа клиентов*")]),e("div",{staticClass:"dropdown-container"},[e("DropDown",{attrs:{type:"multiple",currentValue:t.mainInformation.clientGroup},on:{optionChanged:t.changeClientGroup},scopedSlots:t._u([{key:"dropdown-items",fn:function({clickOption:{changeOption:t},option:{currentOption:r}}){return[e("DropdownItem",{attrs:{type:"multiple",title:"VIP",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{type:"multiple",title:"Проблемные",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{type:"multiple",title:"ОМС",option:r},on:{clickOption:t}})]}}])})],1),e("div",{staticClass:"form-group-footer"},[t.v$.mainInformation.clientGroup.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("label",[t._v("Лечащий врач")]),e("div",{staticClass:"dropdown-container"},[e("DropDown",{on:{optionChanged:t.changeAttendingDoctor},scopedSlots:t._u([{key:"dropdown-items",fn:function({clickOption:{changeOption:t},option:{currentOption:r}}){return[e("DropdownItem",{attrs:{title:"Иванов",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{title:"Захаров",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{title:"Чернышева",option:r},on:{clickOption:t}})]}}])})],1),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group checkbox-group"},[e("div",{staticClass:"checkbox-container"},[e("div",{staticClass:"circle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainInformation.doNotSendSMS,expression:"mainInformation.doNotSendSMS"}],attrs:{type:"checkbox",id:"checkbox-18"},domProps:{checked:Array.isArray(t.mainInformation.doNotSendSMS)?t._i(t.mainInformation.doNotSendSMS,null)>-1:t.mainInformation.doNotSendSMS},on:{change:function(e){var r=t.mainInformation.doNotSendSMS,o=e.target,n=!!o.checked;if(Array.isArray(r)){var i=null,a=t._i(r,i);o.checked?a<0&&t.$set(t.mainInformation,"doNotSendSMS",r.concat([i])):a>-1&&t.$set(t.mainInformation,"doNotSendSMS",r.slice(0,a).concat(r.slice(a+1)))}else t.$set(t.mainInformation,"doNotSendSMS",n)}}}),e("label",{attrs:{for:"checkbox-18"}})])]),e("label",{staticClass:"checkbox-title",attrs:{for:"doNotSendSMS"}},[t._v("Не отправлять СМС")])])])},d=[],u=(r(560),r(4219)),c=r(5420),l=function(){var t=this,e=t._self._c;return e("div",{ref:"mydropdown",staticClass:"dropdown"},[e("div",{staticClass:"dropdown_header",on:{click:t.dropdownHandler}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentOption,expression:"currentOption"}],attrs:{type:"text",id:"attendingDoctor",readonly:""},domProps:{value:t.currentOption},on:{input:function(e){e.target.composing||(t.currentOption=e.target.value)}}}),e("img",{staticClass:"dropdown-icon",attrs:{src:r(492),alt:"dropdown icon"}})]),t.isDropdown?e("div",{staticClass:"dropdown_body"},[t._t("dropdown-items",null,{option:{currentOption:t.currentOption},clickOption:{changeOption:t.changeOption}})],2):t._e()])},p=[],f={name:"DropDown",data(){return{currentOption:"",isDropdown:!1}},mounted(){window.addEventListener("click",this.close)},beforeUnmount(){window.removeEventListener("click",this.close)},methods:{close(t){this.$refs.mydropdown?.contains(t.target)||(this.isDropdown=!1)},dropdownHandler(){this.isDropdown=!this.isDropdown},changeOption(t){this.currentOption=t,this.$emit("optionChanged",t),"multiple"!==this.type&&this.dropdownHandler()}},props:{type:String,currentValue:Array},watch:{currentValue(t){this.currentOption=t.toString()}}},v=f,g=r(1001),h=(0,g.Z)(v,l,p,!1,null,"5fd744ec",null),I=h.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"drop-item",class:{"drop-item_current":t.option===t.title&&"multiple"!==t.type||!0===t.isSelected&&"multiple"===t.type},on:{click:function(e){return t.changeOption(t.title)}}},[e("p",[t._v(t._s(t.title))])])},$=[],b={name:"DropdownItem",data(){return{isSelected:!1}},methods:{changeOption(t){this.$emit("clickOption",t),"multiple"===this.type&&(this.isSelected=!this.isSelected)}},props:{title:String,option:String,type:String}},w=b,x=(0,g.Z)(w,C,$,!1,null,"2eeea7c8",null),_=x.exports,y={name:"MainInformation",setup(){return{v$:(0,u.Xw)()}},components:{DropDown:I,DropdownItem:_},data(){return{mainInformation:{lastName:"",firstName:"",middleName:"",birthDate:"",phoneNumber:"",gender:"",clientGroup:[],attendingDoctor:"",doNotSendSMS:!1}}},validations(){return{mainInformation:{lastName:{required:c.C1},firstName:{required:c.C1},birthDate:{required:c.C1},phoneNumber:{required:c.C1,minLength:(0,c.Ei)(18),maxLength:(0,c.BS)(18)},clientGroup:{required:c.C1}}}},methods:{changeAttendingDoctor(t){this.mainInformation.attendingDoctor=t},changeClientGroup(t){const e=this.mainInformation.clientGroup.indexOf(t);-1===e?this.mainInformation.clientGroup.push(t):this.mainInformation.clientGroup.splice(e,1)}},computed:{formattedPhoneNumber:{get(){return this.mainInformation.phoneNumber},set(t){if(this.mainInformation.phoneNumber.length<18){const e=t.replace(/[^\d]/g,"");let r="+7 ("+e.substring(1,4);e.length>3&&(r+=") "+e.substring(4,7)),e.length>6&&(r+=" "+e.substring(7,9)),e.length>8&&(r+="-"+e.substring(9)),this.mainInformation.phoneNumber=r}}}}},N=y,D=(0,g.Z)(N,m,d,!1,null,null,null),S=D.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"adress-information"},[t._m(0),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.index,expression:"adress.index",modifiers:{trim:!0}}],attrs:{type:"text",id:"index",placeholder:"Индекс"},domProps:{value:t.adress.index},on:{input:function(e){e.target.composing||t.$set(t.adress,"index",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.country,expression:"adress.country",modifiers:{trim:!0}}],attrs:{type:"text",id:"country",placeholder:"Страна"},domProps:{value:t.adress.country},on:{input:function(e){e.target.composing||t.$set(t.adress,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.region,expression:"adress.region",modifiers:{trim:!0}}],attrs:{type:"text",id:"region",placeholder:"Область"},domProps:{value:t.adress.region},on:{input:function(e){e.target.composing||t.$set(t.adress,"region",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.city,expression:"adress.city",modifiers:{trim:!0}}],attrs:{type:"text",id:"city",placeholder:"Город*"},domProps:{value:t.adress.city},on:{input:function(e){e.target.composing||t.$set(t.adress,"city",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"},[t.v$.adress.city.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.street,expression:"adress.street",modifiers:{trim:!0}}],attrs:{type:"text",id:"street",placeholder:"Улица"},domProps:{value:t.adress.street},on:{input:function(e){e.target.composing||t.$set(t.adress,"street",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.adress.house,expression:"adress.house",modifiers:{trim:!0}}],attrs:{type:"text",id:"house",placeholder:"Дом"},domProps:{value:t.adress.house},on:{input:function(e){e.target.composing||t.$set(t.adress,"house",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})])])},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group label-group"},[e("label",[t._v("Адрес клиента")])])}],P={name:"AdressInformation",setup(){return{v$:(0,u.Xw)()}},data(){return{adress:{index:"",country:"",region:"",city:"",street:"",house:""},isSuccess:!1}},validations(){return{adress:{city:{required:c.C1}}}}},M=P,A=(0,g.Z)(M,O,k,!1,null,null,null),U=A.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"passport-information"},[t._m(0),e("div",{staticClass:"form-group"},[e("div",{staticClass:"dropdown-container"},[e("DropDown",{on:{optionChanged:t.changeDocumentType},scopedSlots:t._u([{key:"dropdown-items",fn:function({clickOption:{changeOption:t},option:{currentOption:r}}){return[e("DropdownItem",{attrs:{title:"Паспорт",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{title:"Свидетельство о рождении",option:r},on:{clickOption:t}}),e("DropdownItem",{attrs:{title:"Вод. удостоверение",option:r},on:{clickOption:t}})]}}])})],1),e("div",{staticClass:"form-group-footer"},[t.v$.passport.documentType.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.series,expression:"passport.series",modifiers:{trim:!0}}],attrs:{type:"text",id:"series",placeholder:"Серия"},domProps:{value:t.passport.series},on:{input:function(e){e.target.composing||t.$set(t.passport,"series",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.number,expression:"passport.number",modifiers:{trim:!0}}],attrs:{type:"text",id:"number",placeholder:"Номер"},domProps:{value:t.passport.number},on:{input:function(e){e.target.composing||t.$set(t.passport,"number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.issuedBy,expression:"passport.issuedBy",modifiers:{trim:!0}}],attrs:{type:"text",id:"issuedBy",placeholder:"Кем выдан"},domProps:{value:t.passport.issuedBy},on:{input:function(e){e.target.composing||t.$set(t.passport,"issuedBy",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Дата выдачи*")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passport.issueDate,expression:"passport.issueDate",modifiers:{trim:!0}}],attrs:{type:"date",id:"birthdate",onfocus:"(this.type='date')"},domProps:{value:t.passport.issueDate},on:{input:function(e){e.target.composing||t.$set(t.passport,"issueDate",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"form-group-footer"},[t.v$.passport.issueDate.$error?e("span",{staticClass:"error-message"},[t._v("Обязательное поле")]):t._e()])])])},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group label-group"},[e("label",[t._v("Тип документа*")])])}],Z={name:"PassportInformation",components:{DropDown:I,DropdownItem:_},setup(){return{v$:(0,u.Xw)()}},data(){return{passport:{documentType:"",series:"",number:"",issuedBy:"",issueDate:""},isSuccess:!1}},validations(){return{passport:{documentType:{required:c.C1},issueDate:{required:c.C1}}}},methods:{changeDocumentType(t){this.passport.documentType=t}}},q=Z,B=(0,g.Z)(q,G,T,!1,null,"7d91454e",null),j=B.exports,E={name:"ClientForm",components:{MainInformation:S,AdressInformation:U,PassportInformation:j},data(){return{clientData:{mainInformation:{lastName:"",firstName:"",middleName:"",birthDate:"",phoneNumber:"",gender:"",clientGroup:[],attendingDoctor:"",doNotSendSMS:!1},address:{index:"",country:"",region:"",city:"",street:"",house:""},passport:{documentType:"",series:"",number:"",issuedBy:"",issueDate:""}},currentIndex:0,isSuccess:!1}},methods:{async navigateNext(){let t=!1;switch(this.currentIndex){case 0:t=await this.$refs.mainInformation.v$.$validate(),this.clientData.mainInformation=this.$refs.mainInformation.$data.mainInformation;break;case 1:t=await this.$refs.addressInformation.v$.$validate(),this.clientData.address=this.$refs.addressInformation.$data.adress;break;default:break}t&&this.currentIndex<2&&this.currentIndex++,console.log(this.currentIndex)},navigatePrevious(){this.currentIndex>0&&this.currentIndex--,console.log(this.currentIndex)},async createClient(){if(2===this.currentIndex){let t=await this.$refs.passportInformation.v$.$validate();t&&(this.clientData.passport=this.$refs.passportInformation.$data.passport,this.currentIndex++)}}}},F=E,L=(0,g.Z)(F,a,s,!1,null,null,null),V=L.exports,H={name:"App",components:{ClientForm:V}},X=H,z=(0,g.Z)(X,n,i,!1,null,null,null),J=z.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(J)}).$mount("#app")},492:function(t,e,r){t.exports=r.p+"img/arrow-down.89054a9a.svg"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,m=0;m<o.length;m++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[m])}))?o.splice(m--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/client-creation-form/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],s=o[1],m=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(m)var u=m(r)}for(e&&e(o);d<a.length;d++)i=a[d],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},o=self["webpackChunkclient_creation_form"]=self["webpackChunkclient_creation_form"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(189)}));o=r.O(o)})();
//# sourceMappingURL=app.64e453cd.js.map