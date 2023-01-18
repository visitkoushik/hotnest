"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_bills_all-bills_existingbill_existingbill_module_ts"],{

/***/ 5048:
/*!*****************************************************************************!*\
  !*** ./src/app/bills/all-bills/existingbill/existingbill-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExistingbillPageRoutingModule": () => (/* binding */ ExistingbillPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _existingbill_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./existingbill.page */ 2786);




const routes = [
    {
        path: '',
        component: _existingbill_page__WEBPACK_IMPORTED_MODULE_0__.ExistingbillPage,
        data: { title: 'Selected Bill', displayBackButton: true },
    }
];
let ExistingbillPageRoutingModule = class ExistingbillPageRoutingModule {
};
ExistingbillPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExistingbillPageRoutingModule);



/***/ }),

/***/ 3682:
/*!*********************************************************************!*\
  !*** ./src/app/bills/all-bills/existingbill/existingbill.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExistingbillPageModule": () => (/* binding */ ExistingbillPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _existingbill_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./existingbill-routing.module */ 5048);
/* harmony import */ var _existingbill_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existingbill.page */ 2786);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _bill_print_details_bill_print_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bill-print-details/bill-print-details.module */ 2267);










let ExistingbillPageModule = class ExistingbillPageModule {
};
ExistingbillPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _existingbill_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExistingbillPageRoutingModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _bill_print_details_bill_print_details_module__WEBPACK_IMPORTED_MODULE_4__.BillPrintDetailsModule
        ],
        declarations: [_existingbill_page__WEBPACK_IMPORTED_MODULE_1__.ExistingbillPage]
    })
], ExistingbillPageModule);



/***/ }),

/***/ 2786:
/*!*******************************************************************!*\
  !*** ./src/app/bills/all-bills/existingbill/existingbill.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExistingbillPage": () => (/* binding */ ExistingbillPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _existingbill_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./existingbill.page.html?ngResource */ 2217);
/* harmony import */ var _existingbill_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existingbill.page.scss?ngResource */ 7187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/cart-service.service */ 4422);
/* harmony import */ var src_model_billClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/billClass */ 4389);







let ExistingbillPage = class ExistingbillPage {
    constructor(router, activeRoute, cartService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.cartService = cartService;
        this.currentBill = null;
        this.currentBillPrint = null;
        this.currentBillPrintStr = null;
        this.displayedColumns = null;
        this.onDelete = ($event) => {
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((p) => {
            const ibill = JSON.parse(p.data);
            this.currentBill = new src_model_billClass__WEBPACK_IMPORTED_MODULE_3__.ClassBill(ibill);
            this.currentBillPrint = this.currentBill.getPrintValue(this.cartService);
            this.currentBillPrintStr = JSON.stringify(this.currentBillPrint);
            this.displayedColumns =
                this.currentBillPrint.Items?.length > 0
                    ? Object.keys(this.currentBillPrint.Items[0])
                    : null;
        });
    }
};
ExistingbillPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
ExistingbillPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-existingbill',
        template: _existingbill_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_existingbill_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExistingbillPage);



/***/ }),

/***/ 7187:
/*!********************************************************************************!*\
  !*** ./src/app/bills/all-bills/existingbill/existingbill.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.label {\n  padding: 1rem;\n  width: 95%;\n}\n\n.label.calc {\n  float: right;\n}\n\n.tabletd {\n  text-align: right;\n  padding: 0 1rem 0 0;\n}\n\nion-content {\n  --background:#fff ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4aXN0aW5nYmlsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGIiwiZmlsZSI6ImV4aXN0aW5nYmlsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubGFiZWwge1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogOTUlO1xufVxuLmxhYmVsLmNhbGMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50YWJsZXRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDA7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZcbn1cbiJdfQ== */";

/***/ }),

/***/ 2217:
/*!********************************************************************************!*\
  !*** ./src/app/bills/all-bills/existingbill/existingbill.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content *ngIf=\"currentBillPrint && displayedColumns\">\n  <app-bill-print-details\n  [data]=\"currentBillPrintStr\"\n  (deleteEvent)=\"onDelete($event)\"\n></app-bill-print-details>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_bills_all-bills_existingbill_existingbill_module_ts.js.map