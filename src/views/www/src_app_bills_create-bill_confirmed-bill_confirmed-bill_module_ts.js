"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_bills_create-bill_confirmed-bill_confirmed-bill_module_ts"],{

/***/ 6152:
/*!***************************************************************************!*\
  !*** ./src/app/bills/create-bill/confirmed-bill/confirmed-bill.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiremedbillPageModule": () => (/* binding */ ConfiremedbillPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);
/* harmony import */ var _confirmed_bill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmed-bill */ 2031);
/* harmony import */ var _confirmed_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmed-routing.module */ 5088);
/* harmony import */ var _bill_print_details_bill_print_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bill-print-details/bill-print-details.module */ 2267);










let ConfiremedbillPageModule = class ConfiremedbillPageModule {
};
ConfiremedbillPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _confirmed_routing_module__WEBPACK_IMPORTED_MODULE_3__.ConfiremedbillPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule,
            _bill_print_details_bill_print_details_module__WEBPACK_IMPORTED_MODULE_4__.BillPrintDetailsModule
        ],
        declarations: [_confirmed_bill__WEBPACK_IMPORTED_MODULE_2__.ConfiremdBillPage]
    })
], ConfiremedbillPageModule);



/***/ }),

/***/ 2031:
/*!********************************************************************!*\
  !*** ./src/app/bills/create-bill/confirmed-bill/confirmed-bill.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiremdBillPage": () => (/* binding */ ConfiremdBillPage)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _confirmed_bill_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmed-bill.html?ngResource */ 9475);
/* harmony import */ var _confiremd_bill_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confiremd-bill.scss?ngResource */ 7943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-storage/app-storage.service */ 1970);
/* harmony import */ var src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/alert.service */ 5412);
/* harmony import */ var src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/cart-service.service */ 4422);
/* harmony import */ var src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/http.service */ 5030);
/* harmony import */ var src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/snackbar.service */ 415);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/model/util */ 7699);














let ConfiremdBillPage = class ConfiremdBillPage {
  constructor(router, activeRoute, cartService, storeage, util, snack, alertServc, altrCtrl, httpService) {
    var _this = this;

    this.router = router;
    this.activeRoute = activeRoute;
    this.cartService = cartService;
    this.storeage = storeage;
    this.util = util;
    this.snack = snack;
    this.alertServc = alertServc;
    this.altrCtrl = altrCtrl;
    this.httpService = httpService;
    this.currentBillPrintStr = null;
    this.currentBillPrint = null;

    this.onDone = () => {
      this.alertServc.presentAlert(this.altrCtrl, 'Confirm', 'Are you sure, you want to confirm the bill?', {
        ok: 'Yes',
        cancel: 'No'
      }, () => {
        // eslint-disable-next-line no-underscore-dangle
        this.uploadBill(); // this.done();
      }, () => {});
    };

    this.uploadBill = () => {
      this.util.isLoading = true;
      const billReq = this.createBill();

      if (this.BILLING_ADD) {
        this.httpService.post(src_model_util__WEBPACK_IMPORTED_MODULE_9__.ApiEndPoint.BILL_ADD, billReq).then(e => {
          this.snack.openSnackBar('Bill is created');
          this.cartService.setDefaultBill();
          this.router.navigateByUrl('/tab/createbill');
          this.util.isLoading = false;
        }).catch(e => {
          this.snack.openSnackBar('Something went wrong');
          this.util.isLoading = false;
        });
      } else {
        this.snack.openSnackBar('Operation not permitted');
      }
    };

    this.createBill = () => {
      let billReq = {};
      billReq.discount = this.currentBill.discount;
      billReq.customer = this.getCustomerInfo();
      billReq.paid = this.currentBill.paid;
      billReq.tax = this.currentBill.tax;
      billReq.billingItemList = this.currentBill.itemPurchased.map(cart => {
        const billingItem = {};
        billingItem.itemCount = cart.count;
        billingItem.itemID = cart.items.id;
        billingItem.itemName = cart.items.itemName;
        billingItem.priceAmount = cart.items.itemPrice.priceAmount;
        billingItem.sellingAmount = cart.items.itemPrice.sellingAmount;
        billingItem.discount = cart.items.discount;
        billingItem.isDiscountInPercentage = cart.items.isDiscountInPercentage;
        return billingItem;
      });
      billReq.billNumber = this.currentBill.billnumber + '';
      return billReq;
    };

    this.getCustomerInfo = () => {
      const castomerInfo = {};
      const cName = this.currentBill.customerName.split(' ');
      castomerInfo.firstName = cName[0];
      castomerInfo.lastName = cName.length > 1 ? cName[cName.length - 1] : '';
      castomerInfo.middleName = cName.length > 2 ? cName.slice(1, cName.length - 1).join(' ') : '';
      castomerInfo.gender = this.currentBill.gender;
      castomerInfo.mobileNumbers = this.currentBill.customerContact;
      return castomerInfo;
    };

    this.done = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.util.isLoading = true;
      const allbills = [..._this.cartService.allBiills];
      allbills.push({ ..._this.cartService.createBillPageRef.currentBiill,
        status: true
      });
      const dt = new Date();
      const key = `${dt.getDay()}-${dt.getMonth()}-${dt.getFullYear()}`;
      yield _this.storeage.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_9__.StoreName.ORDER, {
        key,
        order: _this.cartService.globalOrderNumber
      });

      _this.storeage.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_9__.StoreName.BILL, allbills).then(e => {
        _this.snack.openSnackBar('Bill created');

        _this.cartService.allBiills.push({ ..._this.cartService.createBillPageRef.currentBiill,
          status: true
        });

        _this.cartService.allBiills = [...allbills];

        _this.cartService.setDefaultBill();

        _this.router.navigateByUrl('/tab/createbill');

        _this.util.isLoading = false;
      }).catch(ex => {
        _this.util.isLoading = false;
      });
    });

    this.onChangePaid = () => {
      this.cartService.createBillPageRef.currentBiill.paid = this.currentBill.paid;
      this.cartService.createBillPageRef.currentBiill.due = this.currentBill.total - this.currentBill.paid;
    };
  }

  ngOnInit() {
    this.BILLING_ADD = this.util.metaData.accessRight.findIndex(e => e === 'BILLING_ADD') > -1;
    this.BILLING_READ = this.util.metaData.accessRight.findIndex(e => e === 'BILLING_READ') > -1;
    this.activeRoute.queryParams.subscribe(p => {
      this.currentBillPrintStr = p.data;
      this.currentBillPrint = JSON.parse(p.data);
      this.currentBill = this.cartService.createBillPageRef.currentBiill;
    });
  }

};

ConfiremdBillPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_5__.CartService
}, {
  type: src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__.AppStorageService
}, {
  type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_8__.UtilService
}, {
  type: src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService
}, {
  type: src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService
}];

ConfiremdBillPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  template: _confirmed_bill_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_confiremd_bill_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ConfiremdBillPage);


/***/ }),

/***/ 5088:
/*!******************************************************************************!*\
  !*** ./src/app/bills/create-bill/confirmed-bill/confirmed-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiremedbillPageRoutingModule": () => (/* binding */ ConfiremedbillPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _confirmed_bill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmed-bill */ 2031);




const routes = [
    {
        path: '',
        component: _confirmed_bill__WEBPACK_IMPORTED_MODULE_0__.ConfiremdBillPage,
        data: { title: 'Generated Bill', displayBackButton: true },
    },
];
let ConfiremedbillPageRoutingModule = class ConfiremedbillPageRoutingModule {
};
ConfiremedbillPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfiremedbillPageRoutingModule);



/***/ }),

/***/ 7943:
/*!*********************************************************************************!*\
  !*** ./src/app/bills/create-bill/confirmed-bill/confiremd-bill.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.label {\n  padding: 1rem;\n  width: 95%;\n}\n\n.label.calc {\n  float: right;\n}\n\n.tabletd {\n  text-align: right;\n  padding: 0 1rem 0 0;\n}\n\n.billtitle {\n  text-align: center;\n  margin: 1rem 0;\n  font-style: italic;\n  font-weight: bold;\n}\n\nion-content {\n  --background:#fff ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcmVtZC1iaWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGIiwiZmlsZSI6ImNvbmZpcmVtZC1iaWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubGFiZWwge1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogOTUlO1xufVxuLmxhYmVsLmNhbGMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50YWJsZXRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDA7XG59XG5cbi5iaWxsdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZcbn1cblxuIl19 */";

/***/ }),

/***/ 9475:
/*!*********************************************************************************!*\
  !*** ./src/app/bills/create-bill/confirmed-bill/confirmed-bill.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <app-bill-print-details\n    [data]=\"currentBillPrintStr\"\n    *ngIf=\"currentBillPrint\"\n  ></app-bill-print-details>\n</ion-content>\n<ion-footer>\n  <ion-title></ion-title>\n  <ion-item>\n    <ion-label position=\"floating\" style=\"color: red\">Paid*</ion-label>\n    <ion-input\n      placeholder=\"Ex:20.00\"\n      type=\"number\"\n      [(ngModel)]=\"currentBill.paid\"\n      (ngModelChange)=\"onChangePaid()\"\n    ></ion-input>\n  </ion-item>\n  <ion-label style=\"margin-left:1rem\" color=\"danger\" *ngIf=\"currentBill.paid>currentBill.total\">Can not be greater than total amount</ion-label>\n  <ion-item>\n    <ion-title></ion-title>\n    <ion-button color=\"primary\" float-right (click)=\"onDone()\"  size=\"default\"\n    [disabled]=\"currentBill.paid === undefined || currentBill.paid === null || currentBill.paid>currentBill.total\">\n      Confirm\n    </ion-button>\n  </ion-item>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bills_create-bill_confirmed-bill_confirmed-bill_module_ts.js.map