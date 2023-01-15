"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[361],{4879:(F,D,r)=>{r.d(D,{p:()=>C});var M=r(4650);let C=(()=>{class l{transform(m,...t){if(!m)return;if(t&&t[0]){if("Y"===t[0])return"e"===t[1]?new Date(+m,11,31):new Date(+m,0,1);if("M"===t[0]){const Y=+m.split("/")[1];let R=28;Y%4==0&&Y%400!=0&&(R=29);const _=[31,R,31,30,31,30,31,31,30,31,30,31],T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(m.split("/")[0]);return"e"===t[1]?new Date(Y,T,_[T]):new Date(Y,T,1)}}const y=new Date(m);return new Date(y.getFullYear(),y.getMonth(),y.getDate())}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275pipe=M.Yjl({name:"dateconvert",type:l,pure:!0}),l})()},361:(F,D,r)=>{r.r(D),r.d(D,{ReportsPageModule:()=>U});var M=r(6895),C=r(4006),l=r(2977),d=r(6630),m=r(7699),t=r(4650),y=r(847),Y=r(4422),R=r(1970),_=r(5030),E=r(415),T=r(3238),c=r(9602),g=r(9549),A=r(4385);let I=(()=>{class e{constructor(){this.startYearChange=new t.vpe,this.endYearChange=new t.vpe,this.mclick=0,this.maxDate=null}ngOnInit(){this.maxDate=new Date}chosenHandler(n,a,o,s){if(this.mclick++,1===this.mclick){this.startYear=`${n.getFullYear()}`,o.value=this.startYear,this.startYearChange.emit(this.startYear),a.close();var u=setInterval(()=>{const p=document.getElementsByClassName("yeartoggle")[0].getElementsByClassName("mat-focus-indicator mat-icon-button mat-button-base");document.getElementsByClassName("yeartoggle")[0].getElementsByTagName("input")[1].focus(),p[0].click(),clearInterval(u)},50)}else if(2===this.mclick){if(this.endYear=`${n.getFullYear()}`,this.startYear>this.endYear){const p=this.startYear;this.startYear=this.endYear,this.endYear=p,o.value=this.startYear,this.startYearChange.emit(this.startYear),s.value=this.startYear,this.endYearChange.emit(this.endYear)}s.value=this.endYear,this.endYearChange.emit(this.endYear),a.close(),this.mclick=0}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-year-picker"]],inputs:{label:"label",startYear:"startYear",endYear:"endYear"},outputs:{startYearChange:"startYearChange",endYearChange:"endYearChange"},decls:11,vars:4,consts:[["appearance","fill",1,"yeartoggle"],[3,"rangePicker","max"],["matStartDate","","placeholder","Start Year","formControlName","mesIni"],["mesIni",""],["matEndDate","","placeholder","End Year","formControlName","mesFin"],["mesFin",""],["matSuffix","",3,"for"],["id","picker","disabled","false","startView","multi-year",3,"yearSelected","click"],["picker",""]],template:function(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-date-range-input",1),t._UZ(4,"input",2,3)(6,"input",4,5),t.qZA(),t._UZ(8,"mat-datepicker-toggle",6),t.TgZ(9,"mat-date-range-picker",7,8),t.NdJ("yearSelected",function(u){t.CHM(o);const p=t.MAs(10),f=t.MAs(5),h=t.MAs(7);return t.KtG(a.chosenHandler(u,p,f,h))})("click",function(){return!0}),t.qZA()()}if(2&n){const o=t.MAs(10);t.xp6(2),t.Oqu(a.label),t.xp6(1),t.Q6J("rangePicker",o)("max",a.maxDate),t.xp6(5),t.Q6J("for",o)}},dependencies:[c.nW,c.wx,c.zY,c.By,c._g,g.KE,g.hX,g.R9],styles:[".yeartoggle[_ngcontent-%COMP%], .newbill-full-width[_ngcontent-%COMP%]{width:100%}"]}),e})();var k=r(4879);let x=(()=>{class e{constructor(){this.startMonthChange=new t.vpe,this.endMonthChange=new t.vpe,this.convertFullDate=new k.p,this.mclick=0,this.maxDate=null}ngOnInit(){this.maxDate=new Date}chosenHandler(n,a,o,s){if(this.mclick++,1===this.mclick){this.startMonth=`${n.toLocaleDateString("en",{month:"short"})}/${n.getFullYear()}`,o.value=this.startMonth,this.startMonthChange.emit(this.startMonth),a.close();var u=setInterval(()=>{const p=document.getElementsByClassName("monthtoggle")[0].getElementsByClassName("mat-focus-indicator mat-icon-button mat-button-base");document.getElementsByClassName("monthtoggle")[0].getElementsByTagName("input")[1].focus(),p[0].click(),clearInterval(u)},50)}else if(2===this.mclick){if(this.endMonth=`${n.toLocaleDateString("en",{month:"short"})}/${n.getFullYear()}`,this.convertFullDate.transform(this.startMonth,["M"])>this.convertFullDate.transform(this.startMonth,["M"])){const h=this.startMonth;this.startMonth=this.endMonth,this.endMonth=h,o.value=this.startMonth,this.startMonthChange.emit(this.startMonth),s.value=this.startMonth,this.endMonthChange.emit(this.endMonth)}s.value=this.endMonth,this.endMonthChange.emit(this.endMonth),a.close(),this.mclick=0}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-month-picker"]],inputs:{label:"label",startMonth:"startMonth",endMonth:"endMonth"},outputs:{startMonthChange:"startMonthChange",endMonthChange:"endMonthChange"},decls:11,vars:4,consts:[["appearance","fill",1,"monthtoggle"],[3,"rangePicker","max"],["matStartDate","","placeholder","Start Month","formControlName","mesIni"],["mesIni",""],["matEndDate","","placeholder","End Month","formControlName","mesFin"],["mesFin",""],["matSuffix","",3,"for"],["id","picker","disabled","false","startView","multi-year",3,"monthSelected","click"],["picker",""]],template:function(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-date-range-input",1),t._UZ(4,"input",2,3)(6,"input",4,5),t.qZA(),t._UZ(8,"mat-datepicker-toggle",6),t.TgZ(9,"mat-date-range-picker",7,8),t.NdJ("monthSelected",function(u){t.CHM(o);const p=t.MAs(10),f=t.MAs(5),h=t.MAs(7);return t.KtG(a.chosenHandler(u,p,f,h))})("click",function(){return!0}),t.qZA()()}if(2&n){const o=t.MAs(10);t.xp6(2),t.Oqu(a.label),t.xp6(1),t.Q6J("rangePicker",o)("max",a.maxDate),t.xp6(5),t.Q6J("for",o)}},dependencies:[c.nW,c.wx,c.zY,c.By,c._g,g.KE,g.hX,g.R9],styles:[".monthtoggle[_ngcontent-%COMP%], .newbill-full-width[_ngcontent-%COMP%]{width:100%}"]}),e})();function J(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-form-field",13)(1,"mat-label"),t._uU(2,"Enter a date range"),t.qZA(),t.TgZ(3,"mat-date-range-input",14)(4,"input",15),t.NdJ("ngModelChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.startDate=o)}),t.qZA(),t.TgZ(5,"input",16),t.NdJ("ngModelChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.endDate=o)}),t.qZA()(),t._UZ(6,"mat-datepicker-toggle",17)(7,"mat-date-range-picker",18,19),t.qZA()}if(2&e){const n=t.MAs(8),a=t.oxw();t.xp6(3),t.Q6J("rangePicker",n)("max",a.maxDate),t.xp6(1),t.Q6J("ngModel",a.startDate),t.xp6(1),t.Q6J("ngModel",a.endDate),t.xp6(1),t.Q6J("for",n)}}function N(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-year-picker",20),t.NdJ("startYearChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.startY=o)})("endYearChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.endY=o)}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("startYear",n.startY)("endYear",n.endY)}}function S(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-month-picker",21),t.NdJ("startMonthChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.startM=o)})("endMonthChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.endM=o)}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("startMonth",n.startM)("endMonth",n.endM)}}function O(e,i){if(1&e&&(t.TgZ(0,"mat-option",22),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",n.itemName," ")}}const b=[{path:"",component:(()=>{class e{constructor(n,a,o,s,u,p,f){this.util=n,this.cartServc=a,this.activeRoute=o,this.router=s,this.storage=u,this.httpServc=p,this.snacBar=f,this.FILTERBY=m.pA,this.filterDateBy=m.pA.DATE,this.startDate=null,this.endDate=null,this.startM="",this.endM="",this.startY="",this.endY="",this.selectedReport="-1",this.allItems=[],this.maxDate=null,this.onNextScreen=()=>{if(this.selectedReport&&"-1"===this.selectedReport.trim()){const h={filterDateBy:this.filterDateBy,startDate:this.filterDateBy===this.FILTERBY.DATE?this.startDate:this.filterDateBy===this.FILTERBY.MONTH?this.startM:this.startY,endDate:this.filterDateBy===this.FILTERBY.DATE?this.endDate:this.filterDateBy===this.FILTERBY.MONTH?this.endM:this.endY,selectedReport:this.selectedReport};this.fetchFilterBill({startDate:h.startDate,endDate:h.endDate,selectedReport:h.selectedReport,filterDateBy:h.filterDateBy,paged:!0,page:1,count:this.util.maxPageCountReport},()=>{this.router.navigate(["report-tab"],{relativeTo:this.activeRoute,queryParams:{...h}})})}else this.router.navigate(["itemwise"],{relativeTo:this.activeRoute,queryParams:{filterDateBy:this.filterDateBy,startDate:this.filterDateBy===this.FILTERBY.DATE?this.startDate:this.filterDateBy===this.FILTERBY.MONTH?this.startM:this.startY,endDate:this.filterDateBy===this.FILTERBY.DATE?this.endDate:this.filterDateBy===this.FILTERBY.MONTH?this.endM:this.endY,selectedReport:this.selectedReport}})},this.onChangeItem=h=>{},this.onChangeDate=h=>{},this.onChangeFilterType=()=>{this.startDate=null,this.endDate=null,this.startM="",this.endM="",this.startY="",this.endY=""},this.fetchItems=()=>{this.httpServc.get(m.sY.ITEM_LIST).then(h=>{this.allItems=[...h.responseObject]}).catch(h=>{this.snacBar.openSnackBar("Item list not available this time")})},this.fetchFilterBill=(h,v)=>{this.util.isLoading=!0,this.httpServc.post(m.sY.REPORT_BILLWISE,{...h}).then(P=>{console.log(P.responseObject),this.util.iReportsResp={...P.responseObject},this.util.isLoading=!1,v&&v()}).catch(P=>{console.log(P),this.util.isLoading=!1})}}ngOnInit(){this.fetchItems(),this.router.events.subscribe(n=>{n instanceof d.OD&&(this.allItems=[...this.cartServc.mainItems],this.fetchItems()),n instanceof d.Q3&&console.log(n.error)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y.f),t.Y36(Y.N),t.Y36(d.gz),t.Y36(d.F0),t.Y36(R.u),t.Y36(_.O),t.Y36(E.o))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reports"]],decls:35,vars:9,consts:[[2,"margin-left","1rem"],["aria-label","",3,"ngModel","ngModelChange"],["slot","start","id","datebby","name","datebby","color","primary",1,"radiobutton",3,"value","change"],["slot","start","id","month","name","month","color","primary",1,"radiobutton",3,"value","change"],["slot","start","id","year","name","year","color","primary",1,"radiobutton",3,"value","change"],["color","primary","class","newbill-full-width","appearance","fill",4,"ngIf"],["label","Select year range",3,"startYear","endYear","startYearChange","endYearChange",4,"ngIf"],["label","Select month range",3,"startMonth","endMonth","startMonthChange","endMonthChange",4,"ngIf"],["appearance","fill",1,"newbill-full-width"],["name","report","disableOptionCentering","","panelClass","myPanelClass",3,"ngModel","ngModelChange","selectionChange"],["value","-1","selected",""],[3,"value",4,"ngFor","ngForOf"],["size","default","color","primary","float-right","",3,"click"],["color","primary","appearance","fill",1,"newbill-full-width"],[3,"rangePicker","max"],["matStartDate","","placeholder","Start date",3,"ngModel","ngModelChange"],["matEndDate","","placeholder","End date",3,"ngModel","ngModelChange"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],["label","Select year range",3,"startYear","endYear","startYearChange","endYearChange"],["label","Select month range",3,"startMonth","endMonth","startMonthChange","endMonthChange"],[3,"value"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header")(1,"h5",0),t._uU(2,"Filter By"),t.qZA()(),t.TgZ(3,"ion-content")(4,"ion-item")(5,"mat-label"),t._uU(6,"Filter Report By"),t.qZA(),t.TgZ(7,"ion-radio-group",1),t.NdJ("ngModelChange",function(s){return a.filterDateBy=s}),t.TgZ(8,"ion-item")(9,"ion-label"),t._uU(10,"Date Range"),t.qZA(),t.TgZ(11,"ion-radio",2),t.NdJ("change",function(){return a.onChangeFilterType()}),t.qZA()(),t.TgZ(12,"ion-item")(13,"ion-label"),t._uU(14,"Month Range"),t.qZA(),t.TgZ(15,"ion-radio",3),t.NdJ("change",function(){return a.onChangeFilterType()}),t.qZA()(),t.TgZ(16,"ion-item")(17,"ion-label"),t._uU(18,"Year Range"),t.qZA(),t.TgZ(19,"ion-radio",4),t.NdJ("change",function(){return a.onChangeFilterType()}),t.qZA()()()(),t.YNc(20,J,9,5,"mat-form-field",5),t.YNc(21,N,1,2,"app-year-picker",6),t.YNc(22,S,1,2,"app-month-picker",7),t.TgZ(23,"mat-form-field",8)(24,"mat-label"),t._uU(25,"Choose Item "),t.qZA(),t.TgZ(26,"mat-select",9),t.NdJ("ngModelChange",function(s){return a.selectedReport=s})("selectionChange",function(s){return a.onChangeItem(s.value)}),t.TgZ(27,"mat-option",10),t._uU(28,"All"),t.qZA(),t.YNc(29,O,2,2,"mat-option",11),t.qZA()()(),t.TgZ(30,"ion-footer")(31,"ion-item"),t._UZ(32,"ion-title"),t.TgZ(33,"ion-button",12),t.NdJ("click",function(){return a.onNextScreen()}),t._uU(34," Next "),t.qZA()()()),2&n&&(t.xp6(7),t.Q6J("ngModel",a.filterDateBy),t.xp6(4),t.Q6J("value",a.FILTERBY.DATE),t.xp6(4),t.Q6J("value",a.FILTERBY.MONTH),t.xp6(4),t.Q6J("value",a.FILTERBY.YEAR),t.xp6(1),t.Q6J("ngIf",a.filterDateBy===a.FILTERBY.DATE),t.xp6(1),t.Q6J("ngIf",a.filterDateBy===a.FILTERBY.YEAR),t.xp6(1),t.Q6J("ngIf",a.filterDateBy===a.FILTERBY.MONTH),t.xp6(4),t.Q6J("ngModel",a.selectedReport),t.xp6(3),t.Q6J("ngForOf",a.allItems))},dependencies:[M.sg,M.O5,C.Fj,C.JJ,C.On,l.YG,l.W2,l.fr,l.Gu,l.Ie,l.Q$,l.B7,l.se,l.wd,l.U5,l.QI,T.ey,c.nW,c.wx,c.zY,c.By,c._g,g.KE,g.hX,g.R9,A.gD,I,x],styles:[".newbill-full-width[_ngcontent-%COMP%]{width:100%}.myPanelClass[_ngcontent-%COMP%]{margin-top:30px!important}.radiobutton[_ngcontent-%COMP%]{display:block;margin:1rem}"]}),e})(),data:{title:"Reports & Billings"}},{path:"show-reports",loadChildren:()=>Promise.all([r.e(8592),r.e(9872)]).then(r.bind(r,9872)).then(e=>e.ShowReportsPageModule)},{path:"report-tab",loadChildren:()=>r.e(5102).then(r.bind(r,5102)).then(e=>e.ReportTabPageModule)},{path:"show-item-reports",loadChildren:()=>Promise.all([r.e(8592),r.e(1268)]).then(r.bind(r,1268)).then(e=>e.ShowItemReportsPageModule)},{path:"itemwise",loadChildren:()=>Promise.all([r.e(8592),r.e(3206)]).then(r.bind(r,3206)).then(e=>e.ItemwisePageModule)}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(b),d.Bz]}),e})();var B=r(3493),Z=r(1373);let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.ez,Z.q,B.d]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.ez,Z.q,B.d]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.ez,C.u5,l.Pc,w,B.d,Z.q,L,Q]}),e})()}}]);