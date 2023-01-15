"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3509],{6693:(z,f,n)=>{n.r(f),n.d(f,{ConfiremedbillPageModule:()=>O});var p=n(6895),m=n(4006),s=n(2977),v=n(1373),P=n(3493),d=n(6630),C=n(5861),h=n(7699),t=n(4650),b=n(4422),S=n(1970),I=n(847),D=n(415),N=n(5412),y=n(5030),L=n(1813);function M(e,u){if(1&e&&t._UZ(0,"app-bill-print-details",5),2&e){const r=t.oxw();t.Q6J("data",r.currentBillPrintStr)}}function A(e,u){1&e&&(t.TgZ(0,"ion-label",6),t._uU(1,"Can not be greater than total amount"),t.qZA())}const Z=[{path:"",component:(()=>{class e{constructor(r,o,g,B,T,J,G,U,x){var a=this;this.router=r,this.activeRoute=o,this.cartService=g,this.storeage=B,this.util=T,this.snack=J,this.alertServc=G,this.altrCtrl=U,this.httpService=x,this.currentBillPrintStr=null,this.currentBillPrint=null,this.onDone=()=>{this.alertServc.presentAlert(this.altrCtrl,"Confirm","Are you sure, you want to confirm the bill?",{ok:"Yes",cancel:"No"},()=>{this.uploadBill()},()=>{})},this.uploadBill=()=>{this.util.isLoading=!0;const l=this.createBill();this.BILLING_ADD?this.httpService.post(h.sY.BILL_ADD,l).then(i=>{this.snack.openSnackBar("Bill is created"),this.cartService.setDefaultBill(),this.router.navigateByUrl("/tab/createbill"),this.util.isLoading=!1}).catch(i=>{this.snack.openSnackBar("Something went wrong"),this.util.isLoading=!1}):this.snack.openSnackBar("Operation not permitted")},this.createBill=()=>{let l={};return l.discount=this.currentBill.discount,l.customer=this.getCustomerInfo(),l.paid=this.currentBill.paid,l.tax=this.currentBill.tax,l.billingItemList=this.currentBill.itemPurchased.map(i=>{const c={};return c.itemCount=i.count,c.itemID=i.items.id,c.itemName=i.items.itemName,c.priceAmount=i.items.itemPrice.priceAmount,c.sellingAmount=i.items.itemPrice.sellingAmount,c.discount=i.items.discount,c.isDiscountInPercentage=i.items.isDiscountInPercentage,c}),l.billNumber=this.currentBill.billnumber+"",l},this.getCustomerInfo=()=>{const l={},i=this.currentBill.customerName.split(" ");return l.firstName=i[0],l.lastName=i.length>1?i[i.length-1]:"",l.middleName=i.length>2?i.slice(1,i.length-1).join(" "):"",l.gender=this.currentBill.gender,l.mobileNumbers=this.currentBill.customerContact,l},this.done=(0,C.Z)(function*(){a.util.isLoading=!0;const l=[...a.cartService.allBiills];l.push({...a.cartService.createBillPageRef.currentBiill,status:!0});const i=new Date,c=`${i.getDay()}-${i.getMonth()}-${i.getFullYear()}`;yield a.storeage.setStorage(h.ZX.ORDER,{key:c,order:a.cartService.globalOrderNumber}),a.storeage.setStorage(h.ZX.BILL,l).then(Q=>{a.snack.openSnackBar("Bill created"),a.cartService.allBiills.push({...a.cartService.createBillPageRef.currentBiill,status:!0}),a.cartService.allBiills=[...l],a.cartService.setDefaultBill(),a.router.navigateByUrl("/tab/createbill"),a.util.isLoading=!1}).catch(Q=>{a.util.isLoading=!1})}),this.onChangePaid=()=>{this.cartService.createBillPageRef.currentBiill.paid=this.currentBill.paid,this.cartService.createBillPageRef.currentBiill.due=this.currentBill.total-this.currentBill.paid}}ngOnInit(){this.BILLING_ADD=this.util.metaData.accessRight.findIndex(r=>"BILLING_ADD"===r)>-1,this.BILLING_READ=this.util.metaData.accessRight.findIndex(r=>"BILLING_READ"===r)>-1,this.activeRoute.queryParams.subscribe(r=>{this.currentBillPrintStr=r.data,this.currentBillPrint=JSON.parse(r.data),this.currentBill=this.cartService.createBillPageRef.currentBiill})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(b.N),t.Y36(S.u),t.Y36(I.f),t.Y36(D.o),t.Y36(N.c),t.Y36(s.Br),t.Y36(y.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:13,vars:4,consts:[[3,"data",4,"ngIf"],["position","floating",2,"color","red"],["placeholder","Ex:20.00","type","number",3,"ngModel","ngModelChange"],["style","margin-left:1rem","color","danger",4,"ngIf"],["color","primary","float-right","","size","default",3,"disabled","click"],[3,"data"],["color","danger",2,"margin-left","1rem"]],template:function(r,o){1&r&&(t.TgZ(0,"ion-content"),t.YNc(1,M,1,1,"app-bill-print-details",0),t.qZA(),t.TgZ(2,"ion-footer"),t._UZ(3,"ion-title"),t.TgZ(4,"ion-item")(5,"ion-label",1),t._uU(6,"Paid*"),t.qZA(),t.TgZ(7,"ion-input",2),t.NdJ("ngModelChange",function(B){return o.currentBill.paid=B})("ngModelChange",function(){return o.onChangePaid()}),t.qZA()(),t.YNc(8,A,2,0,"ion-label",3),t.TgZ(9,"ion-item"),t._UZ(10,"ion-title"),t.TgZ(11,"ion-button",4),t.NdJ("click",function(){return o.onDone()}),t._uU(12," Confirm "),t.qZA()()()),2&r&&(t.xp6(1),t.Q6J("ngIf",o.currentBillPrint),t.xp6(6),t.Q6J("ngModel",o.currentBill.paid),t.xp6(1),t.Q6J("ngIf",o.currentBill.paid>o.currentBill.total),t.xp6(3),t.Q6J("disabled",null==o.currentBill.paid||o.currentBill.paid>o.currentBill.total))},dependencies:[p.O5,m.JJ,m.On,s.YG,s.W2,s.fr,s.pK,s.Ie,s.Q$,s.wd,s.as,L.Z],styles:["table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.label[_ngcontent-%COMP%]{padding:1rem;width:95%}.label.calc[_ngcontent-%COMP%]{float:right}.tabletd[_ngcontent-%COMP%]{text-align:right;padding:0 1rem 0 0}.billtitle[_ngcontent-%COMP%]{text-align:center;margin:1rem 0;font-style:italic;font-weight:700}ion-content[_ngcontent-%COMP%]{--background:#fff }"]}),e})(),data:{title:"Generated Bill",displayBackButton:!0}}];let R=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),e})();var Y=n(2267);let O=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,m.u5,s.Pc,R,v.q,P.d,Y.B]}),e})()}}]);