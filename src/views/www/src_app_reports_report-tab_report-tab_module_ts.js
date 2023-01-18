"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_report-tab_report-tab_module_ts"],{

/***/ 4555:
/*!*****************************************************************!*\
  !*** ./src/app/reports/report-tab/report-tab-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportTabPageRoutingModule": () => (/* binding */ ReportTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _report_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-tab.page */ 9076);




const routes = [
    {
        path: '',
        component: _report_tab_page__WEBPACK_IMPORTED_MODULE_0__.ReportTabPage,
        children: [
            {
                path: 'showreportsbyItem',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_show-item-reports_show-item-reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../show-item-reports/show-item-reports.module */ 9813)).then(m => m.ShowItemReportsPageModule)
                    },
                ],
            },
            {
                path: 'showreports',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reports_show-reports_show-reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../show-reports/show-reports.module */ 2007)).then(m => m.ShowReportsPageModule)
                    },
                ],
            },
            {
                path: '',
                redirectTo: 'report-tab/showreports',
                pathMatch: 'full',
            },
        ]
    },
    {
        path: '',
        redirectTo: 'report-tab/showreports',
        pathMatch: 'full',
    },
];
let ReportTabPageRoutingModule = class ReportTabPageRoutingModule {
};
ReportTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportTabPageRoutingModule);



/***/ }),

/***/ 4129:
/*!*********************************************************!*\
  !*** ./src/app/reports/report-tab/report-tab.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportTabPageModule": () => (/* binding */ ReportTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _report_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-tab-routing.module */ 4555);
/* harmony import */ var _report_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-tab.page */ 9076);







let ReportTabPageModule = class ReportTabPageModule {
};
ReportTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportTabPageRoutingModule
        ],
        declarations: [_report_tab_page__WEBPACK_IMPORTED_MODULE_1__.ReportTabPage]
    })
], ReportTabPageModule);



/***/ }),

/***/ 9076:
/*!*******************************************************!*\
  !*** ./src/app/reports/report-tab/report-tab.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportTabPage": () => (/* binding */ ReportTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _report_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-tab.page.html?ngResource */ 4093);
/* harmony import */ var _report_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-tab.page.scss?ngResource */ 7091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let ReportTabPage = class ReportTabPage {
    constructor(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.onOpenItem = (param) => {
            this.router.navigate([`${param}`], {
                relativeTo: this.activeRoute,
                queryParams: this.queryP,
            });
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((p) => {
            if (p.filterDateBy) {
                this.queryP = p;
            }
            // this.onOpenItem('showreports');
            this.onOpenItem('showreports');
        });
    }
};
ReportTabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ReportTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-report-tab',
        template: _report_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportTabPage);



/***/ }),

/***/ 7091:
/*!********************************************************************!*\
  !*** ./src/app/reports/report-tab/report-tab.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtdGFiLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4093:
/*!********************************************************************!*\
  !*** ./src/app/reports/report-tab/report-tab.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs color=\"primary\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"showreports\">\n      <ion-icon name=\"analytics\"></ion-icon>\n      <ion-label>Billing Report</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"showreportsbyItem\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>Item Report</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_report-tab_report-tab_module_ts.js.map