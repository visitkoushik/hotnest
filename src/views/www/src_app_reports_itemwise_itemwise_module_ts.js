"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_itemwise_itemwise_module_ts"],{

/***/ 5813:
/*!*************************************************************!*\
  !*** ./src/app/reports/itemwise/itemwise-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemwisePageRoutingModule": () => (/* binding */ ItemwisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _itemwise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemwise.page */ 8533);




const routes = [
    {
        path: '',
        component: _itemwise_page__WEBPACK_IMPORTED_MODULE_0__.ItemwisePage,
        data: { title: 'Report & Billings', displayBackButton: true },
    }
];
let ItemwisePageRoutingModule = class ItemwisePageRoutingModule {
};
ItemwisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemwisePageRoutingModule);



/***/ }),

/***/ 7949:
/*!*****************************************************!*\
  !*** ./src/app/reports/itemwise/itemwise.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemwisePageModule": () => (/* binding */ ItemwisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _itemwise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemwise-routing.module */ 5813);
/* harmony import */ var _itemwise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemwise.page */ 8533);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 3806);









let ItemwisePageModule = class ItemwisePageModule {
};
ItemwisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _itemwise_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemwisePageRoutingModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        declarations: [_itemwise_page__WEBPACK_IMPORTED_MODULE_1__.ItemwisePage]
    })
], ItemwisePageModule);



/***/ }),

/***/ 8533:
/*!***************************************************!*\
  !*** ./src/app/reports/itemwise/itemwise.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemwisePage": () => (/* binding */ ItemwisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _itemwise_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemwise.page.html?ngResource */ 3901);
/* harmony import */ var _itemwise_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemwise.page.scss?ngResource */ 6094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/convert-to-fulldate */ 4879);
/* harmony import */ var src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipe/short-date.pipe */ 2459);
/* harmony import */ var src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/cart-service.service */ 4422);
/* harmony import */ var src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/http.service */ 5030);
/* harmony import */ var src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/snackbar.service */ 415);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/model/util */ 7699);












let ItemwisePage = class ItemwisePage {
    constructor(cartServc, activeRoute, util, httpService, snackBar, router) {
        this.cartServc = cartServc;
        this.activeRoute = activeRoute;
        this.util = util;
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.router = router;
        this.startDate = null;
        this.endDate = null;
        this.selectedReport = '-1';
        this.pageheading = '';
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FILTERBY = src_model_util__WEBPACK_IMPORTED_MODULE_8__.FILTER_BY;
        this.itemName = '';
        // public allItems: I_Items[] = [];
        this.reportResultBalance = null;
        this.totalProfit = 0;
        this.displayedColumns = [
            'order',
            'date',
            'itemCount',
            'sellingAmount',
            'total',
        ];
        this.start = null;
        this.end = null;
        this.currentMaxPage = this.util.maxPageCountReport;
        this.transform = new src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__.ConvertToFullDate().transform;
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
        this.handlePageEvent = (ev) => {
            this.fetchData(ev.pageIndex);
        };
        this.fetchFilterBill = (report) => {
            this.util.isLoading = true;
            this.httpService
                .post(src_model_util__WEBPACK_IMPORTED_MODULE_8__.ApiEndPoint.REPORT_ITEMWISE, { ...report })
                .then((appResp) => {
                this.iReportsResp = { ...appResp.responseObject };
                this.totalProfit = 0;
                this.reportResultBalance = this.iReportsResp.billList.map((e, inx) => {
                    this.itemName = e.itemName;
                    this.totalProfit += e.total;
                    return { ...e, order: inx + 1 };
                });
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
            const shortDate = new src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_3__.ShortDatePipe();
            const stdt = shortDate.transform(new Date(this.startDate));
            const nddt = shortDate.transform(new Date(this.endDate));
            this.pageheading =
                (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_8__.FILTER_BY.DATE ? stdt : this.startDate) +
                    ' - ' +
                    (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_8__.FILTER_BY.DATE ? nddt : this.endDate);
            this.fetchData();
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationStart) {
                // this.fetchData();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
};
ItemwisePage.ctorParameters = () => [
    { type: src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_7__.UtilService },
    { type: src_app_providers_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService },
    { type: src_app_providers_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
ItemwisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-itemwise',
        template: _itemwise_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_itemwise_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemwisePage);



/***/ }),

/***/ 6094:
/*!****************************************************************!*\
  !*** ./src/app/reports/itemwise/itemwise.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n\nth.mat-header-cell {\n  text-align: center;\n  font-weight: bold;\n}\n\nth.mat-header-cell:last-of-type,\nth.mat-header-cell:first-of-type,\ntd.mat-cell:last-of-type,\ntd.mat-cell:first-of-type {\n  padding: 0;\n}\n\nth.mat-header-cell,\nth.mat-header-cell {\n  border-bottom: 1px solid currentColor;\n}\n\n.mat-column-order {\n  width: 10vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-itemCount, .mat-column-date {\n  width: 15vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-sellingAmount, .mat-column-total {\n  width: 25vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-item {\n  width: 50vw;\n  padding: 0;\n  text-align: left;\n  border-right: 1px solid currentColor;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW13aXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTs7OztFQUlFLFVBQUE7QUFHRjs7QUFEQTs7RUFFRSxxQ0FBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVNGIiwiZmlsZSI6Iml0ZW13aXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucmVzdWx0c3R5bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG50ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZzogMDtcbn1cbnRoLm1hdC1oZWFkZXItY2VsbCAsXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuLm1hdC1jb2x1bW4tb3JkZXIge1xuICB3aWR0aDogMTB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4ubWF0LWNvbHVtbi1pdGVtQ291bnQsLm1hdC1jb2x1bW4tZGF0ZSB7XG4gIHdpZHRoOiAxNXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cbi5tYXQtY29sdW1uLXNlbGxpbmdBbW91bnQsIC5tYXQtY29sdW1uLXRvdGFse1xuICB3aWR0aDogMjV2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4ubWF0LWNvbHVtbi1pdGVtIHtcbiAgd2lkdGg6IDUwdnc7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cbi5yZXN1bHRzdHlsZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OjE2cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 3901:
/*!****************************************************************!*\
  !*** ./src/app/reports/itemwise/itemwise.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageheading}}</ion-title>\n  </ion-toolbar>\n  <ion-label>{{itemName}}</ion-label>\n</ion-header>\n\n<ion-content>\n  <table mat-table [dataSource]=\"reportResultBalance\" class=\"mat-elevation-z8\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"order\">\n      <th mat-header-cell *matHeaderCellDef>#</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.order }}</td>\n    </ng-container>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef>Date</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.date }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"itemCount\">\n      <th mat-header-cell *matHeaderCellDef>Count</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.itemCount }}</td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"sellingAmount\">\n      <th mat-header-cell *matHeaderCellDef>S(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.sellingAmount.toFixed(2) }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"total\">\n      <th mat-header-cell *matHeaderCellDef>P(Rs)</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.total.toFixed(2) }}</td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</ion-content>\n<ion-footer>\n  <h5 class=\"resultstyle\">Total Profit: {{totalProfit.toFixed(2)}}</h5>\n\n  <mat-paginator\n    *ngIf=\"iReportsResp?.totalPage\"\n    #paginator\n    class=\"demo-paginator\"\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"iReportsResp?.totalPage\"\n    [pageSize]=\"this.currentMaxPage\"\n    [showFirstLastButtons]=\"true\"\n    [hidePageSize]=\"true\"\n    [pageIndex]=\"0\"\n    aria-label=\"Select page\"\n  >\n  </mat-paginator>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_itemwise_itemwise_module_ts.js.map