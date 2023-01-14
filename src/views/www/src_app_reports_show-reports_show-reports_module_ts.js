"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_show-reports_show-reports_module_ts"],{

/***/ 6460:
/*!******************************************************************************!*\
  !*** ./src/app/reports/billwise-profitloss/billwise-profitloss.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillWiseProfitlossComponent": () => (/* binding */ BillWiseProfitlossComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _billwise_profitloss_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billwise-profitloss.component.html?ngResource */ 7486);
/* harmony import */ var _billwise_profitloss_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billwise-profitloss.component.scss?ngResource */ 1800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/cart-service.service */ 4422);
/* harmony import */ var src_model_ClassBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/ClassBalance */ 3555);






let BillWiseProfitlossComponent = class BillWiseProfitlossComponent {
    constructor(cartServc) {
        this.cartServc = cartServc;
        // public allItems: I_Items[] = [];
        this.reportResultBalance = null;
        this.totalProfit = 0;
        this.displayedColumns = [
            'ordernumber',
            'orderDate',
            'allPurchaseValue',
            'allSellValue',
            'profit',
        ];
        this.filter = () => {
            let allBills = [];
            if (this.selectedReport && this.selectedReport !== '-1') {
                allBills =
                    this.cartServc.allBiills.filter((bill) => bill.itemPurchased.findIndex((e) => e.items.id === this.selectedReport) > -1) || [];
            }
            else {
                allBills = [...this.cartServc.allBiills].filter(b => b.status);
            }
            if (this.endDate && this.startDate) {
                allBills = allBills.filter((bill) => this.startDate <= bill.billDate && this.endDate >= bill.billDate);
            }
            return new src_model_ClassBalance__WEBPACK_IMPORTED_MODULE_3__.ReportBalance(allBills).getTheBalance(this.cartServc);
        };
    }
    ngOnInit() {
        // this.reportResultBalance = [...this.filter()];
    }
    ngOnChanges(val) {
        console.log(val);
        this.startDate = new Date(val.startDate?.currentValue);
        this.endDate = new Date(val.endDate?.currentValue);
        this.selectedReport = val.selectedReport?.currentValue;
        this.reportResultBalance = [...this.filter()];
    }
};
BillWiseProfitlossComponent.ctorParameters = () => [
    { type: src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
BillWiseProfitlossComponent.propDecorators = {
    startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectedReport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
BillWiseProfitlossComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profitloss-daterange',
        template: _billwise_profitloss_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_billwise_profitloss_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BillWiseProfitlossComponent);



/***/ }),

/***/ 4185:
/*!**************************************************************************!*\
  !*** ./src/app/reports/period-profitloss/period-profitloss.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodProfitlossComponent": () => (/* binding */ PeriodProfitlossComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _period_profitloss_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./period-profitloss.component.html?ngResource */ 1743);
/* harmony import */ var _period_profitloss_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./period-profitloss.component.scss?ngResource */ 829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/convert-to-fulldate */ 4879);





let PeriodProfitlossComponent = class PeriodProfitlossComponent {
    constructor() {
        this.reportResultBalance = null;
        this.totalProfit = 0;
        this.displayedColumns = [
            'billNumber',
            'billingDate',
            'Ptotal',
            'Stotal',
            'profit',
        ];
        this.start = null;
        this.end = null;
        this.transform = new src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__.ConvertToFullDate().transform;
        this.listArrayBill = [];
    }
    ngOnInit() {
    }
    ngOnChanges(val) {
        this.startDate = val.startDate?.currentValue;
        this.endDate = val.endDate?.currentValue;
        this.selectedReport = val.selectedReport?.currentValue;
        this.filterDateBy = val.filterDateBy?.currentValue;
    }
};
PeriodProfitlossComponent.ctorParameters = () => [];
PeriodProfitlossComponent.propDecorators = {
    startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedReport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    filterDateBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    iReportsResp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PeriodProfitlossComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-period-profitloss',
        template: _period_profitloss_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_period_profitloss_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeriodProfitlossComponent);



/***/ }),

/***/ 4606:
/*!*********************************************************************!*\
  !*** ./src/app/reports/show-reports/show-reports-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowReportsPageRoutingModule": () => (/* binding */ ShowReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _show_reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-reports.page */ 2681);




const routes = [
    {
        path: '',
        component: _show_reports_page__WEBPACK_IMPORTED_MODULE_0__.ShowReportsPage,
        data: {
            title: 'Reports & Billings',
            displayBackButton: true,
            backTo: 'reports',
        },
    },
];
let ShowReportsPageRoutingModule = class ShowReportsPageRoutingModule {
};
ShowReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowReportsPageRoutingModule);



/***/ }),

/***/ 2007:
/*!*************************************************************!*\
  !*** ./src/app/reports/show-reports/show-reports.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowReportsPageModule": () => (/* binding */ ShowReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _show_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-reports-routing.module */ 4606);
/* harmony import */ var _show_reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-reports.page */ 2681);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _period_profitloss_period_profitloss_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../period-profitloss/period-profitloss.component */ 4185);
/* harmony import */ var _billwise_profitloss_billwise_profitloss_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../billwise-profitloss/billwise-profitloss.component */ 6460);











let ShowReportsPageModule = class ShowReportsPageModule {
};
ShowReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _show_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowReportsPageRoutingModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        ],
        declarations: [_show_reports_page__WEBPACK_IMPORTED_MODULE_1__.ShowReportsPage, _period_profitloss_period_profitloss_component__WEBPACK_IMPORTED_MODULE_4__.PeriodProfitlossComponent, _billwise_profitloss_billwise_profitloss_component__WEBPACK_IMPORTED_MODULE_5__.BillWiseProfitlossComponent],
    })
], ShowReportsPageModule);



/***/ }),

/***/ 2681:
/*!***********************************************************!*\
  !*** ./src/app/reports/show-reports/show-reports.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowReportsPage": () => (/* binding */ ShowReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _show_reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-reports.page.html?ngResource */ 8858);
/* harmony import */ var _show_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-reports.page.scss?ngResource */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/short-date.pipe */ 2459);
/* harmony import */ var src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http.service */ 5030);
/* harmony import */ var src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/snackbar.service */ 415);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/model/util */ 7699);











let ShowReportsPage = class ShowReportsPage {
    constructor(activeRoute, httpServc, util, snackBar, alertCtrl) {
        this.activeRoute = activeRoute;
        this.httpServc = httpServc;
        this.util = util;
        this.snackBar = snackBar;
        this.alertCtrl = alertCtrl;
        this.startDate = null;
        this.endDate = null;
        this.selectedReport = '-1';
        this.pageheading = '';
        this.currentMaxPage = this.util.maxPageCountReport;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FILTERBY = src_model_util__WEBPACK_IMPORTED_MODULE_6__.FILTER_BY;
        this.handlePageEvent = (ev) => {
            this.fetchData(ev.pageIndex);
        };
        this.fetchData = (pageIndex) => {
            this.fetchFilterBill({
                startDate: this.startDate,
                endDate: this.endDate,
                selectedReport: this.selectedReport,
                filterDateBy: this.filterDateBy,
                paged: true,
                page: pageIndex ? pageIndex + 1 : 1,
                count: this.currentMaxPage,
            });
        };
        this.fetchFilterBill = (report) => {
            this.util.isLoading = true;
            this.httpServc
                .post(src_model_util__WEBPACK_IMPORTED_MODULE_6__.ApiEndPoint.REPORT_BILLWISE, { ...report })
                .then((appResp) => {
                console.log(appResp.responseObject);
                debugger;
                this.iReportsResp = { ...appResp.responseObject };
                this.util.isLoading = false;
            })
                .catch((e) => {
                console.log(e);
                this.util.isLoading = false;
            });
        };
        this.currentMaxPage = this.util.maxPageCountReport;
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((p) => {
            this.startDate = p.startDate;
            this.endDate = p.endDate;
            this.selectedReport = p.selectedReport;
            this.filterDateBy = +p.filterDateBy;
            this.currentMaxPage = this.util.maxPageCountReport;
            const shortDate = new src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortDatePipe();
            const stdt = shortDate.transform(new Date(this.startDate));
            const nddt = shortDate.transform(new Date(this.endDate));
            this.pageheading =
                (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_6__.FILTER_BY.DATE ? stdt : this.startDate) +
                    ' - ' +
                    (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_6__.FILTER_BY.DATE ? nddt : this.endDate);
            // this.fetchData();
            this.iReportsResp = this.util.iReportsResp;
        });
    }
};
ShowReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
ShowReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-show-reports',
        template: _show_reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_show_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowReportsPage);



/***/ }),

/***/ 3555:
/*!***********************************!*\
  !*** ./src/model/ClassBalance.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportBalance": () => (/* binding */ ReportBalance)
/* harmony export */ });
/* harmony import */ var _billClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billClass */ 4389);

// eslint-disable-next-line @typescript-eslint/naming-convention
class ReportBalance {
    constructor(billlist) {
        this.bills = [];
        this.getTheBalance = (cartsrvc) => this.bills.map((b) => {
            const cb = new _billClass__WEBPACK_IMPORTED_MODULE_0__.ClassBill(b);
            const purchase = cb.getPurchaseCost(cartsrvc);
            const sell = (cb.getTotal(cartsrvc) - b.discount) * (1 + b.tax / 100);
            return {
                ordernumber: b.billnumber,
                orderDate: b.billDate,
                allPurchaseValue: purchase,
                allSellValue: sell,
                profit: sell - purchase,
            };
        });
        this.bills = [...billlist];
    }
}


/***/ }),

/***/ 1800:
/*!*******************************************************************************************!*\
  !*** ./src/app/reports/billwise-profitloss/billwise-profitloss.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGx3aXNlLXByb2ZpdGxvc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUYiLCJmaWxlIjoiYmlsbHdpc2UtcHJvZml0bG9zcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucmVzdWx0c3R5bGV7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDoxNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 829:
/*!***************************************************************************************!*\
  !*** ./src/app/reports/period-profitloss/period-profitloss.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n\nth.mat-header-cell {\n  text-align: center;\n  font-weight: bold;\n  text-align: center;\n  border-right: 1px solid black;\n}\n\ntd.mat-cell {\n  text-align: center;\n  border-right: 1px solid black;\n}\n\nth.mat-header-cell:last-of-type,\nth.mat-header-cell:first-of-type,\ntd.mat-cell:last-of-type,\ntd.mat-cell:first-of-type {\n  padding: 0;\n}\n\nth.mat-header-cell,\nth.mat-header-cell {\n  border-bottom: 1px solid currentColor;\n}\n\n.mat-column-ordernumber {\n  width: 10vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-orderDate {\n  width: 30vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-profit,\n.mat-column-allSellValue,\n.mat-column-allPurchaseValue {\n  width: 20vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlvZC1wcm9maXRsb3NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7QUFHRjs7QUFEQTs7OztFQUlFLFVBQUE7QUFJRjs7QUFGQTs7RUFFRSxxQ0FBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUFLRjs7QUFIQTs7O0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBTUYiLCJmaWxlIjoicGVyaW9kLXByb2ZpdGxvc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnJlc3VsdHN0eWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxudGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLFxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLFxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmc6IDA7XG59XG50aC5tYXQtaGVhZGVyLWNlbGwsXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuXG4ubWF0LWNvbHVtbi1vcmRlcm51bWJlciB7XG4gIHdpZHRoOiAxMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLm1hdC1jb2x1bW4tb3JkZXJEYXRlIHtcbiAgd2lkdGg6IDMwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuLm1hdC1jb2x1bW4tcHJvZml0LFxuLm1hdC1jb2x1bW4tYWxsU2VsbFZhbHVlLFxuLm1hdC1jb2x1bW4tYWxsUHVyY2hhc2VWYWx1ZSB7XG4gIHdpZHRoOiAyMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3825:
/*!************************************************************************!*\
  !*** ./src/app/reports/show-reports/show-reports.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "h6 {\n  padding: 0;\n  margin: 0;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctcmVwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJzaG93LXJlcG9ydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDYge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ucmVzdWx0c3R5bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 7486:
/*!*******************************************************************************************!*\
  !*** ./src/app/reports/billwise-profitloss/billwise-profitloss.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- <ion-list *ngIf=\"allBills.length>0\">\n    <ion-item *ngFor=\"let bill of allBills\">\n      Bill No. {{bill.billnumber}}\n    </ion-item>\n  </ion-list> -->\n  <table mat-table [dataSource]=\"reportResultBalance\" class=\"mat-elevation-z8\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"orderDate\">\n      <th mat-header-cell *matHeaderCellDef>Date.</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.orderDate|dateformat:'date'}}\n      </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"ordernumber\">\n      <th mat-header-cell *matHeaderCellDef>Bill No.</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.ordernumber}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"allPurchaseValue\">\n      <th mat-header-cell *matHeaderCellDef>C(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.allPurchaseValue.toFixed(2)}}\n      </td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"allSellValue\">\n      <th mat-header-cell *matHeaderCellDef>S(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.allSellValue.toFixed(2)}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"profit\">\n      <th mat-header-cell *matHeaderCellDef>P(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.profit.toFixed(2)}}</td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <h5 class=\"resultstyle\">Total Sell: {{(reportResultBalance|checkbalance).sell.toFixed(2)}}</h5>\n  <h4 class=\"resultstyle\">Total Profit: {{(reportResultBalance|checkbalance).profit.toFixed(2)}}</h4>\n</ion-content>\n";

/***/ }),

/***/ 1743:
/*!***************************************************************************************!*\
  !*** ./src/app/reports/period-profitloss/period-profitloss.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <table\n    mat-table\n    [dataSource]=\"iReportsResp?.billList\"\n    class=\"mat-elevation-z8\"\n  >\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"billNumber\">\n      <th mat-header-cell *matHeaderCellDef>#</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.billNumber }}</td>\n    </ng-container>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"billingDate\">\n      <th mat-header-cell *matHeaderCellDef>Date.</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.billingDate.toString().split(\"T\")[0] }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Ptotal\">\n      <th mat-header-cell *matHeaderCellDef>C(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.Ptotal.toFixed(2) }}\n      </td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"Stotal\">\n      <th mat-header-cell *matHeaderCellDef>S(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.Stotal.toFixed(2) }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"profit\">\n      <th mat-header-cell *matHeaderCellDef>P(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ (+element.Stotal - +element.Ptotal).toFixed(2) }}\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n\n</ion-content>\n\n";

/***/ }),

/***/ 8858:
/*!************************************************************************!*\
  !*** ./src/app/reports/show-reports/show-reports.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-title> {{pageheading}} </ion-title>\n</ion-header>\n<ion-content>\n  <app-period-profitloss\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [selectedReport]=\"selectedReport\"\n    [filterDateBy]=\"filterDateBy\"\n    [iReportsResp]=\"iReportsResp\"\n    *ngIf=\"selectedReport==='-1'\"\n  ></app-period-profitloss>\n</ion-content>\n<ion-footer>\n\n  <h6 class=\"resultstyle\">\n    Total Sell: {{ iReportsResp?.totalSell.toFixed(2) }}\n  </h6>\n  <h6 class=\"resultstyle\">\n    Total Cost: {{ iReportsResp?.totalCost.toFixed(2) }}\n  </h6>\n  <h6 class=\"resultstyle\">\n    UnPaid Amount: {{ iReportsResp?.unPaid.toFixed(2) }}\n  </h6>\n  <h5 class=\"resultstyle\">\n    Total Profit: {{ iReportsResp?.profit.toFixed(2) }}\n  </h5>\n\n  <mat-paginator\n    *ngIf=\"iReportsResp?.totalPage\"\n    #paginator\n    class=\"demo-paginator\"\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"iReportsResp?.totalPage\"\n    [pageSize]=\"this.currentMaxPage\"\n    [showFirstLastButtons]=\"true\"\n    [hidePageSize]=\"true\"\n    [pageIndex]=\"0\"\n    aria-label=\"Select page\"\n  >\n  </mat-paginator>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_show-reports_show-reports_module_ts.js.map