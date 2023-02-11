"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_reports_module_ts"],{

/***/ 71564:
/*!**************************************************************************!*\
  !*** ./src/app/custom-mat-picker/month-picker/month-picker.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthPickerComponent": () => (/* binding */ MonthPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _month_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./month-picker.component.html?ngResource */ 94310);
/* harmony import */ var _month_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-picker.component.scss?ngResource */ 57756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/convert-to-fulldate */ 74879);





let MonthPickerComponent = class MonthPickerComponent {
    constructor() {
        this.startMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.endMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.convertFullDate = new src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__.ConvertToFullDate();
        this.mclick = 0;
        this.maxDate = null;
    }
    ngOnInit() {
        this.maxDate = new Date();
    }
    ngAfterViewInit() {
        if (!this.startMonth || !this.endMonth) {
            return;
        }
        setTimeout(() => {
            this.mesIni.nativeElement.value = this.startMonth.trim();
            this.startMonthChange.emit(this.startMonth);
            document
                .getElementsByClassName('monthtoggle')[0]
                .getElementsByTagName('input')[1]
                .focus();
            var inter = setInterval(() => {
                clearInterval(inter);
                setTimeout(() => {
                    if (this.startMonth > this.endMonth) {
                        const startMonth1 = this.startMonth;
                        const endMonth1 = this.endMonth;
                        this.startMonth = endMonth1;
                        this.endMonth = startMonth1;
                        this.mesIni.nativeElement.value = this.startMonth.trim();
                        this.startMonthChange.emit(this.startMonth);
                        this.mesFin.nativeElement.value = this.endMonth.trim();
                        this.endMonthChange.emit(this.endMonth);
                    }
                    this.mesIni.nativeElement.value = this.startMonth.trim();
                    this.mesFin.nativeElement.value = this.endMonth.trim();
                    this.endMonthChange.emit(this.endMonth);
                    this.mclick = 0;
                    document
                        .getElementsByClassName('monthtoggle')[0]
                        .getElementsByTagName('input')[1]
                        .blur();
                }, 0);
            }, 10);
        }, 0);
    }
    chosenHandler(normalizedMonth, datepicker) {
        // console.log(normalizedMonth, datepicker, mesIni);
        this.mclick++;
        if (this.mclick === 1) {
            this.startMonth = `${normalizedMonth.toLocaleDateString('en', {
                month: 'short',
            })}/${normalizedMonth.getFullYear()}`;
            this.mesIni.nativeElement.value = this.startMonth;
            this.startMonthChange.emit(this.startMonth);
            datepicker.close();
            //It can improve
            // eslint-disable-next-line no-var
            var inter = setInterval(() => {
                const htmlElem = document
                    .getElementsByClassName('monthtoggle')[0]
                    .getElementsByClassName('mat-focus-indicator mat-icon-button mat-button-base');
                document
                    .getElementsByClassName('monthtoggle')[0]
                    .getElementsByTagName('input')[1]
                    .focus();
                //Here it is important to put the id of the element that is clicked to open the calendar
                htmlElem[0].click();
                clearInterval(inter);
            }, 50);
        }
        else if (this.mclick === 2) {
            this.endMonth = `${normalizedMonth.toLocaleDateString('en', {
                month: 'short',
            })}/${normalizedMonth.getFullYear()}`;
            const stMon = this.convertFullDate.transform(this.startMonth, [
                'M',
            ]);
            const enMon = this.convertFullDate.transform(this.startMonth, [
                'M',
            ]);
            if (stMon > enMon) {
                const startMonth1 = this.startMonth;
                const endMonth1 = this.endMonth;
                this.startMonth = endMonth1;
                this.endMonth = startMonth1;
                this.mesIni.nativeElement.value = this.startMonth;
                this.startMonthChange.emit(this.startMonth);
                this.mesFin.nativeElement.value = this.startMonth;
                this.endMonthChange.emit(this.endMonth);
            }
            this.mesFin.nativeElement.value = this.endMonth;
            this.endMonthChange.emit(this.endMonth);
            datepicker.close();
            this.mclick = 0;
        }
    }
};
MonthPickerComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    startMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    endMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    startMonthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    endMonthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    mesIni: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mesIni',] }],
    mesFin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mesFin',] }]
};
MonthPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-month-picker',
        template: _month_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_month_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MonthPickerComponent);



/***/ }),

/***/ 80755:
/*!***********************************************************************!*\
  !*** ./src/app/custom-mat-picker/month-picker/month-picker.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthPickerModule": () => (/* binding */ MonthPickerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _month_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./month-picker.component */ 71564);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 23493);






let MonthPickerModule = class MonthPickerModule {
};
MonthPickerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_month_picker_component__WEBPACK_IMPORTED_MODULE_0__.MonthPickerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule],
        exports: [_month_picker_component__WEBPACK_IMPORTED_MODULE_0__.MonthPickerComponent],
    })
], MonthPickerModule);



/***/ }),

/***/ 86874:
/*!************************************************************************!*\
  !*** ./src/app/custom-mat-picker/year-picker/year-picker.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearPickerComponent": () => (/* binding */ YearPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _year_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year-picker.component.html?ngResource */ 78682);
/* harmony import */ var _year_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./year-picker.component.scss?ngResource */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let YearPickerComponent = class YearPickerComponent {
    constructor() {
        this.startYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.endYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.mclick = 0;
        this.maxDate = null;
    }
    ngOnInit() {
        this.maxDate = new Date();
    }
    ngAfterViewInit() {
        if (!this.startYear || !this.endYear) {
            return;
        }
        setTimeout(() => {
            this.edlIni.nativeElement.value = this.startYear.trim();
            this.startYearChange.emit(this.startYear);
            document
                .getElementsByClassName('yeartoggle')[0]
                .getElementsByTagName('input')[1]
                .focus();
            var inter = setInterval(() => {
                clearInterval(inter);
                setTimeout(() => {
                    if (this.startYear > this.endYear) {
                        const startYear1 = this.startYear;
                        const endYear1 = this.endYear;
                        this.startYear = endYear1;
                        this.endYear = startYear1;
                        this.edlIni.nativeElement.value = this.startYear.trim();
                        this.startYearChange.emit(this.startYear);
                        this.edlFin.nativeElement.value = this.endYear.trim();
                        this.endYearChange.emit(this.endYear);
                    }
                    this.edlIni.nativeElement.value = this.startYear.trim();
                    this.edlFin.nativeElement.value = this.endYear.trim();
                    this.endYearChange.emit(this.endYear);
                    this.mclick = 0;
                    document
                        .getElementsByClassName('yeartoggle')[0]
                        .getElementsByTagName('input')[1]
                        .blur();
                }, 0);
            }, 10);
        }, 0);
    }
    chosenHandler(normalizedMonth, datepicker) {
        // console.log(normalizedMonth, datepicker, mesIni);
        this.mclick++;
        if (this.mclick === 1) {
            this.startYear = `${normalizedMonth.getFullYear()}`;
            this.edlIni.nativeElement.value = this.startYear.trim();
            this.startYearChange.emit(this.startYear);
            datepicker.close();
            //It can improve
            // eslint-disable-next-line no-var
            var inter = setInterval(() => {
                const htmlElem = document
                    .getElementsByClassName('yeartoggle')[0]
                    .getElementsByClassName('mat-focus-indicator mat-icon-button mat-button-base');
                document
                    .getElementsByClassName('yeartoggle')[0]
                    .getElementsByTagName('input')[1]
                    .focus();
                //Here it is important to put the id of the element that is clicked to open the calendar
                htmlElem[0].click();
                clearInterval(inter);
            }, 50);
        }
        else if (this.mclick === 2) {
            this.endYear = `${normalizedMonth.getFullYear()}`;
            if (this.startYear > this.endYear) {
                const startYear1 = this.startYear;
                const endYear1 = this.endYear;
                this.startYear = endYear1;
                this.endYear = startYear1;
                this.edlIni.nativeElement.value = this.startYear.trim();
                this.startYearChange.emit(this.startYear);
                this.edlFin.nativeElement.value = this.endYear.trim();
                this.endYearChange.emit(this.endYear);
            }
            this.edlIni.nativeElement.value = this.startYear.trim();
            this.edlFin.nativeElement.value = this.endYear.trim();
            this.endYearChange.emit(this.endYear);
            datepicker.close();
            this.mclick = 0;
        }
    }
};
YearPickerComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    startYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    endYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    startYearChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    endYearChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    edlIni: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mesIni',] }],
    edlFin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['mesFin',] }]
};
YearPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-year-picker',
        template: _year_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_year_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], YearPickerComponent);



/***/ }),

/***/ 83697:
/*!*********************************************************************!*\
  !*** ./src/app/custom-mat-picker/year-picker/year-picker.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearPickerModule": () => (/* binding */ YearPickerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _year_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year-picker.component */ 86874);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material.module */ 63806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipe/pipe.module */ 23493);








let YearPickerModule = class YearPickerModule {
};
YearPickerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_year_picker_component__WEBPACK_IMPORTED_MODULE_0__.YearPickerComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        exports: [_year_picker_component__WEBPACK_IMPORTED_MODULE_0__.YearPickerComponent],
    })
], YearPickerModule);



/***/ }),

/***/ 59021:
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageRoutingModule": () => (/* binding */ ReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page */ 18327);




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_0__.ReportsPage,
        data: { title: 'Reports & Billings' }
    },
    {
        path: 'show-reports',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reports_show-reports_show-reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./show-reports/show-reports.module */ 92007)).then(m => m.ShowReportsPageModule)
    },
    {
        path: 'report-tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_report-tab_report-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report-tab/report-tab.module */ 24129)).then(m => m.ReportTabPageModule)
    },
    {
        path: 'show-item-reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_show-item-reports_show-item-reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./show-item-reports/show-item-reports.module */ 29813)).then(m => m.ShowItemReportsPageModule)
    },
    {
        path: 'itemwise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_itemwise_itemwise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./itemwise/itemwise.module */ 27949)).then(m => m.ItemwisePageModule)
    },
    {
        path: 'overall',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_overall_overall_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./overall/overall.module */ 58495)).then(m => m.OverallPageModule)
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ 33065:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageModule": () => (/* binding */ ReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 59021);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page */ 18327);
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipe/pipe.module */ 23493);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _custom_mat_picker_year_picker_year_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-mat-picker/year-picker/year-picker.module */ 83697);
/* harmony import */ var _custom_mat_picker_month_picker_month_picker_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-mat-picker/month-picker/month-picker.module */ 80755);
/* harmony import */ var _branch_selector_branch_selector_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../branch-selector/branch-selector.module */ 88099);












let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsPageRoutingModule,
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _custom_mat_picker_year_picker_year_picker_module__WEBPACK_IMPORTED_MODULE_4__.YearPickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _custom_mat_picker_month_picker_month_picker_module__WEBPACK_IMPORTED_MODULE_5__.MonthPickerModule,
            _branch_selector_branch_selector_module__WEBPACK_IMPORTED_MODULE_6__.BranchSelectorModule
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_1__.ReportsPage]
    })
], ReportsPageModule);



/***/ }),

/***/ 18327:
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPage": () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page.html?ngResource */ 8479);
/* harmony import */ var _reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page.scss?ngResource */ 93623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 71970);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/cart-service.service */ 94422);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/http.service */ 85030);
/* harmony import */ var _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/snackbar.service */ 40415);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/utilservice.service */ 40847);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/browser */ 18313);












let ReportsPage = class ReportsPage {
    constructor(util, cartServc, activeRoute, router, storage, httpServc, snacBar) {
        this.util = util;
        this.cartServc = cartServc;
        this.activeRoute = activeRoute;
        this.router = router;
        this.storage = storage;
        this.httpServc = httpServc;
        this.snacBar = snacBar;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FILTERBY = src_model_util__WEBPACK_IMPORTED_MODULE_2__.FILTER_BY;
        this.filterDateBy = src_model_util__WEBPACK_IMPORTED_MODULE_2__.FILTER_BY.DATE;
        this.startDate = null;
        this.endDate = null;
        this.startM = '';
        this.endM = '';
        this.startY = '';
        this.endY = '';
        this.selectedReport = '-1';
        this.allItems = [];
        this.maxDate = null;
        this.onNextScreen = () => {
            if (this.selectedReport && this.selectedReport.trim() === '-1') {
                const paramObj = {
                    filterDateBy: this.filterDateBy,
                    startDate: this.filterDateBy === this.FILTERBY.DATE
                        ? this.startDate
                        : this.filterDateBy === this.FILTERBY.MONTH
                            ? this.startM
                            : this.startY,
                    endDate: this.filterDateBy === this.FILTERBY.DATE
                        ? this.endDate
                        : this.filterDateBy === this.FILTERBY.MONTH
                            ? this.endM
                            : this.endY,
                    selectedReport: this.selectedReport,
                };
                // this.router.navigate(['report-tab'], {
                //       relativeTo: this.activeRoute,
                //       queryParams: { ...paramObj },
                // });
                this.fetchFilterBill({
                    startDate: paramObj.startDate,
                    endDate: paramObj.endDate,
                    selectedReport: paramObj.selectedReport,
                    filterDateBy: paramObj.filterDateBy,
                    paged: true,
                    page: 1,
                    count: this.util.maxPageCountReport,
                    branchCode: this.util.branchCode,
                }, () => {
                    this.router.navigate(['report-tab'], {
                        relativeTo: this.activeRoute,
                        queryParams: { ...paramObj },
                    });
                });
            }
            else {
                this.router.navigate(['itemwise'], {
                    relativeTo: this.activeRoute,
                    queryParams: {
                        filterDateBy: this.filterDateBy,
                        startDate: this.filterDateBy === this.FILTERBY.DATE
                            ? this.startDate
                            : this.filterDateBy === this.FILTERBY.MONTH
                                ? this.startM
                                : this.startY,
                        endDate: this.filterDateBy === this.FILTERBY.DATE
                            ? this.endDate
                            : this.filterDateBy === this.FILTERBY.MONTH
                                ? this.endM
                                : this.endY,
                        selectedReport: this.selectedReport,
                    },
                });
            }
        };
        this.onChangeItem = (value) => { };
        this.onChangeDate = (value) => { };
        this.onChangeFilterType = () => {
            this.startDate = null;
            this.endDate = null;
            this.startM = '';
            this.endM = '';
            this.startY = '';
            this.endY = '';
        };
        this.fetchItems = () => {
            this.httpServc
                .get(src_model_util__WEBPACK_IMPORTED_MODULE_2__.ApiEndPoint.ITEM_LIST)
                .then((e) => {
                this.allItems = [...e.responseObject];
            })
                .catch((e) => {
                this.snacBar.openSnackBar('Item list not available this time');
            });
        };
        this.fetchFilterBill = (report, callback) => {
            this.util.isLoading = true;
            this.httpServc
                .post(src_model_util__WEBPACK_IMPORTED_MODULE_2__.ApiEndPoint.REPORT_BILLWISE, { ...report })
                .then((appResp) => {
                this.util.iReportsResp = { ...appResp.responseObject };
                this.util.isLoading = false;
                if (callback) {
                    callback();
                }
            })
                .catch((e) => {
                console.log(e);
                this.util.isLoading = false;
            });
        };
        this.shouldNextDisable = () => {
            let isDisable = true;
            let paramObj = {};
            paramObj = {
                startDate: this.filterDateBy === this.FILTERBY.DATE
                    ? this.startDate
                    : this.filterDateBy === this.FILTERBY.MONTH
                        ? this.startM
                        : this.startY,
                endDate: this.filterDateBy === this.FILTERBY.DATE
                    ? this.endDate
                    : this.filterDateBy === this.FILTERBY.MONTH
                        ? this.endM
                        : this.endY,
            };
            isDisable =
                paramObj?.endDate === null ||
                    paramObj?.startDate === null ||
                    paramObj?.endDate === '' ||
                    paramObj?.startDate === '';
            return isDisable;
        };
        this.openBrowser = () => {
            _capacitor_browser__WEBPACK_IMPORTED_MODULE_8__.Browser.open({ url: this.httpServc.baseUrl + 'reports/' })
                .then((e) => console.log(e))
                .catch((e) => console.log(e));
        };
    }
    overAll() {
        const paramObj = {
            filterDateBy: this.filterDateBy,
            startDate: this.filterDateBy === this.FILTERBY.DATE
                ? this.startDate
                : this.filterDateBy === this.FILTERBY.MONTH
                    ? this.startM
                    : this.startY,
            endDate: this.filterDateBy === this.FILTERBY.DATE
                ? this.endDate
                : this.filterDateBy === this.FILTERBY.MONTH
                    ? this.endM
                    : this.endY,
            selectedReport: this.selectedReport,
        };
        this.httpServc
            .post(src_model_util__WEBPACK_IMPORTED_MODULE_2__.ApiEndPoint.REPORT_OVERALL, {
            startDate: paramObj.startDate,
            endDate: paramObj.endDate,
            selectedReport: paramObj.selectedReport,
            filterDateBy: paramObj.filterDateBy,
            paged: true,
            page: 1,
            count: this.util.maxPageCountReport,
            branchCode: this.util.branchCode,
        })
            .then((e) => {
            console.log(e);
            this.router.navigate(['overall'], {
                relativeTo: this.activeRoute,
                queryParams: { p: JSON.stringify(paramObj), r: JSON.stringify(e) },
            });
        })
            .catch((e) => console.log(e));
    }
    ngOnInit() {
        this.maxDate = new Date();
        this.fetchItems();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationStart &&
                event.url.startsWith('/reports/report-tab')) {
                // this.util.isLoading = true;
                console.log(event);
                this.allItems = [...this.cartServc.mainItems];
                this.fetchItems();
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
ReportsPage.ctorParameters = () => [
    { type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_7__.UtilService },
    { type: _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__.AppStorageService },
    { type: _providers_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService },
    { type: _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService }
];
ReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-reports',
        template: _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsPage);



/***/ }),

/***/ 74687:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 18313:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 74687);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 86998)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 57756:
/*!***************************************************************************************!*\
  !*** ./src/app/custom-mat-picker/month-picker/month-picker.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".monthtoggle {\n  width: 100%;\n}\n\n.newbill-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnRoLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRiIsImZpbGUiOiJtb250aC1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9udGh0b2dnbGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXdiaWxsLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 237:
/*!*************************************************************************************!*\
  !*** ./src/app/custom-mat-picker/year-picker/year-picker.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".yeartoggle {\n  width: 100%;\n}\n\n.newbill-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllYXItcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGIiwiZmlsZSI6InllYXItcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnllYXJ0b2dnbGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXdiaWxsLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 93623:
/*!******************************************************!*\
  !*** ./src/app/reports/reports.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".newbill-full-width {\n  width: 100%;\n}\n\n.myPanelClass {\n  margin-top: 30px !important;\n}\n\n.radiobutton {\n  display: block;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoicmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3YmlsbC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXlQYW5lbENsYXNze1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yYWRpb2J1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFyZW07XG59XG4iXX0= */";

/***/ }),

/***/ 94310:
/*!***************************************************************************************!*\
  !*** ./src/app/custom-mat-picker/month-picker/month-picker.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-form-field appearance=\"fill\" class=\"monthtoggle\">\n  <mat-label>{{ label }}</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\" [max]=\"maxDate\">\n    <input matStartDate placeholder=\"Start Month\" #mesIni readonly />\n\n    <input matEndDate placeholder=\"End Month\" #mesFin readonly />\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker\n    id=\"picker\"\n    #picker\n    disabled=\"false\"\n    startView=\"multi-year\"\n    (monthSelected)=\"chosenHandler($event, picker)\"\n    (click)=\"(true)\"\n  >\n  </mat-date-range-picker>\n</mat-form-field>\n";

/***/ }),

/***/ 78682:
/*!*************************************************************************************!*\
  !*** ./src/app/custom-mat-picker/year-picker/year-picker.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-form-field appearance=\"fill\" class=\"yeartoggle\">\n  <mat-label>{{ label }}</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\" [max]=\"maxDate\">\n    <input matStartDate placeholder=\"Start Year\" #mesIni readonly />\n    <input matEndDate placeholder=\"End Year\" #mesFin readonly />\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker\n    id=\"picker\"\n    #picker\n    disabled=\"false\"\n    startView=\"multi-year\"\n    (yearSelected)=\"chosenHandler($event, picker)\"\n    (click)=\"(true)\"\n  >\n  </mat-date-range-picker>\n</mat-form-field>\n";

/***/ }),

/***/ 8479:
/*!******************************************************!*\
  !*** ./src/app/reports/reports.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <h5 style=\"margin-left: 1rem\">Filter By</h5>\n</ion-header>\n<ion-content>\n  <app-branch-selector\n    *ngIf=\"this.util.metaData.profile.branchCode=='0'\"\n  ></app-branch-selector>\n  <ion-item>\n    <mat-label>Filter Report By</mat-label>\n    <ion-radio-group aria-label=\"\" [(ngModel)]=\"filterDateBy\">\n      <ion-item>\n        <ion-label>Date Range</ion-label>\n        <ion-radio\n          slot=\"start\"\n          id=\"datebby\"\n          name=\"datebby\"\n          [value]=\"FILTERBY.DATE\"\n          class=\"radiobutton\"\n          color=\"primary\"\n          (change)=\"onChangeFilterType()\"\n        >\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Month Range</ion-label>\n        <ion-radio\n          slot=\"start\"\n          id=\"month\"\n          name=\"month\"\n          [value]=\"FILTERBY.MONTH\"\n          class=\"radiobutton\"\n          color=\"primary\"\n          (change)=\"onChangeFilterType()\"\n        ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Year Range</ion-label>\n        <ion-radio\n          slot=\"start\"\n          id=\"year\"\n          name=\"year\"\n          [value]=\"FILTERBY.YEAR\"\n          class=\"radiobutton\"\n          color=\"primary\"\n          (change)=\"onChangeFilterType()\"\n        ></ion-radio\n      ></ion-item>\n    </ion-radio-group>\n  </ion-item>\n  <mat-form-field\n    color=\"primary\"\n    class=\"newbill-full-width\"\n    appearance=\"fill\"\n    *ngIf=\"filterDateBy===FILTERBY.DATE\"\n  >\n    <mat-label>Enter a date range</mat-label>\n    <mat-date-range-input [rangePicker]=\"picker\" [max]=\"maxDate\">\n      <input\n        matStartDate\n        placeholder=\"Start date\"\n        [(ngModel)]=\"startDate\"\n        readonly\n      />\n      <input matEndDate placeholder=\"End date\" [(ngModel)]=\"endDate\" readonly />\n    </mat-date-range-input>\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-date-range-picker #picker disabled=\"false\"></mat-date-range-picker>\n  </mat-form-field>\n\n  <app-year-picker\n    label=\"Select year range\"\n    [(startYear)]=\"startY\"\n    [(endYear)]=\"endY\"\n    *ngIf=\"filterDateBy===FILTERBY.YEAR\"\n  ></app-year-picker>\n\n  <app-month-picker\n    label=\"Select month range\"\n    [(startMonth)]=\"startM\"\n    [(endMonth)]=\"endM\"\n    *ngIf=\"filterDateBy===FILTERBY.MONTH\"\n  ></app-month-picker>\n\n  <mat-form-field class=\"newbill-full-width\" appearance=\"fill\">\n    <mat-label>Choose Item </mat-label>\n    <mat-select\n      [(ngModel)]=\"selectedReport\"\n      name=\"report\"\n      disableOptionCentering\n      panelClass=\"myPanelClass\"\n      (selectionChange)=\"onChangeItem($event.value)\"\n    >\n      <mat-option value=\"-1\" selected>All</mat-option>\n      <mat-option *ngFor=\"let item of allItems\" [value]=\"item.id\">\n        {{item.itemName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"overAll()\"\n    >Over All PnL</ion-button\n  >\n  <div style=\"font-size: '0.6rem'; text-align: 'center'; font-style: italic;\">\n    (Item wise is not applicable for overAll report)\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"block\" color=\"medium\" (click)=\"openBrowser()\"\n    >Advance</ion-button\n  >\n  <mat-divider></mat-divider>\n  <ion-item>\n    <ion-title></ion-title>\n    <ion-button\n      size=\"default\"\n      color=\"primary\"\n      float-right\n      (click)=\"onNextScreen()\"\n      [disabled]=\"shouldNextDisable()\"\n    >\n      Next\n    </ion-button>\n  </ion-item>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_reports_module_ts.js.map