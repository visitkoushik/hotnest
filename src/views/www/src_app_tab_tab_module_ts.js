"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab_tab_module_ts"],{

/***/ 3807:
/*!*******************************************!*\
  !*** ./src/app/tab/tab-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageRoutingModule": () => (/* binding */ TabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page */ 9078);




const routes = [
    {
        path: '',
        component: _tab_page__WEBPACK_IMPORTED_MODULE_0__.TabPage,
        children: [
            {
                path: 'createbill',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bills_create-bill_create-bill_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../bills/create-bill/create-bill.module */ 7668)).then(m => m.CreateBillPageModule)
                    },
                ],
            },
            {
                path: 'allbills',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bills_all-bills_all-bills_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bills/all-bills/all-bills.module */ 1579)).then(m => m.AllBillsPageModule)
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tab/createbill',
                pathMatch: 'full',
            },
        ],
    },
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabPageRoutingModule);



/***/ }),

/***/ 1659:
/*!***********************************!*\
  !*** ./src/app/tab/tab.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageModule": () => (/* binding */ TabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-routing.module */ 3807);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page */ 9078);







let TabPageModule = class TabPageModule {
};
TabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabPageRoutingModule
        ],
        declarations: [_tab_page__WEBPACK_IMPORTED_MODULE_1__.TabPage]
    })
], TabPageModule);



/***/ }),

/***/ 9078:
/*!*********************************!*\
  !*** ./src/app/tab/tab.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPage": () => (/* binding */ TabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page.html?ngResource */ 1922);
/* harmony import */ var _tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page.scss?ngResource */ 9021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TabPage = class TabPage {
    constructor() { }
    ngOnInit() {
    }
};
TabPage.ctorParameters = () => [];
TabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab',
        template: _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabPage);



/***/ }),

/***/ 9021:
/*!**********************************************!*\
  !*** ./src/app/tab/tab.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1922:
/*!**********************************************!*\
  !*** ./src/app/tab/tab.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-tabs color=\"primary\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"createbill\">\n      <ion-icon name=\"create\"></ion-icon>\n      <ion-label>Create Bill</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"allbills\">\n      <ion-icon name=\"cart\"></ion-icon>\n      <ion-label>All Bills</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab_tab_module_ts.js.map