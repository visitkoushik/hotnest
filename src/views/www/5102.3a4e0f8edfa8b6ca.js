"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5102],{5102:(g,l,e)=>{e.r(l),e.d(l,{ReportTabPageModule:()=>d});var h=e(6895),p=e(4006),n=e(2977),s=e(6630),o=e(4650);const u=[{path:"",component:(()=>{class t{constructor(a,i){this.activeRoute=a,this.router=i,this.onOpenItem=m=>{this.router.navigate([`${m}`],{relativeTo:this.activeRoute,queryParams:this.queryP})}}ngOnInit(){this.activeRoute.queryParams.subscribe(a=>{a.filterDateBy&&(this.queryP=a),this.onOpenItem("showreports")})}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(s.gz),o.Y36(s.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-report-tab"]],decls:10,vars:0,consts:[["color","primary"],["slot","bottom"],["tab","showreports"],["name","analytics"],["tab","showreportsbyItem"],["name","list"]],template:function(a,i){1&a&&(o.TgZ(0,"ion-tabs",0)(1,"ion-tab-bar",1)(2,"ion-tab-button",2),o._UZ(3,"ion-icon",3),o.TgZ(4,"ion-label"),o._uU(5,"Billing Report"),o.qZA()(),o.TgZ(6,"ion-tab-button",4),o._UZ(7,"ion-icon",5),o.TgZ(8,"ion-label"),o._uU(9,"Item Report"),o.qZA()()()())},dependencies:[n.gu,n.Q$,n.yq,n.ZU,n.UN]}),t})(),children:[{path:"showreportsbyItem",children:[{path:"",loadChildren:()=>Promise.all([e.e(8592),e.e(1268)]).then(e.bind(e,1268)).then(t=>t.ShowItemReportsPageModule)}]},{path:"showreports",children:[{path:"",loadChildren:()=>Promise.all([e.e(8592),e.e(9872)]).then(e.bind(e,9872)).then(t=>t.ShowReportsPageModule)}]},{path:"",redirectTo:"report-tab/showreports",pathMatch:"full"}]},{path:"",redirectTo:"report-tab/showreports",pathMatch:"full"}];let c=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(u),s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[h.ez,p.u5,n.Pc,c]}),t})()}}]);