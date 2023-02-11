"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_other-expenses_other-expenses_module_ts"],{

/***/ 70878:
/*!*****************************************************************!*\
  !*** ./src/app/other-expenses/other-expenses-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherExpensesPageRoutingModule": () => (/* binding */ OtherExpensesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _other_expenses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-expenses.page */ 77565);




const routes = [
    {
        path: '',
        component: _other_expenses_page__WEBPACK_IMPORTED_MODULE_0__.OtherExpensesPage,
        children: [
            {
                path: 'add',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_other-expenses_add_add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add/add.module */ 82407)).then((m) => m.AddPageModule),
                    },
                ],
            },
            {
                path: 'list',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_other-expenses_list_list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/list.module */ 66592)).then((m) => m.ListPageModule),
                    },
                ],
            },
            {
                path: 'update',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_other-expenses_update_update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./update/update.module */ 59302)).then((m) => m.UpdatePageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/other-expenses/add',
                pathMatch: 'full',
            },
        ],
    },
];
let OtherExpensesPageRoutingModule = class OtherExpensesPageRoutingModule {
};
OtherExpensesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtherExpensesPageRoutingModule);



/***/ }),

/***/ 65883:
/*!*********************************************************!*\
  !*** ./src/app/other-expenses/other-expenses.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherExpensesPageModule": () => (/* binding */ OtherExpensesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _other_expenses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-expenses-routing.module */ 70878);
/* harmony import */ var _other_expenses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-expenses.page */ 77565);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ 63806);








let OtherExpensesPageModule = class OtherExpensesPageModule {
};
OtherExpensesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _other_expenses_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherExpensesPageRoutingModule,
        ],
        declarations: [_other_expenses_page__WEBPACK_IMPORTED_MODULE_1__.OtherExpensesPage],
    })
], OtherExpensesPageModule);



/***/ }),

/***/ 77565:
/*!*******************************************************!*\
  !*** ./src/app/other-expenses/other-expenses.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherExpensesPage": () => (/* binding */ OtherExpensesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _other_expenses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-expenses.page.html?ngResource */ 64064);
/* harmony import */ var _other_expenses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-expenses.page.scss?ngResource */ 38016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let OtherExpensesPage = class OtherExpensesPage {
    constructor() { }
    ngOnInit() {
    }
};
OtherExpensesPage.ctorParameters = () => [];
OtherExpensesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-other-expenses',
        template: _other_expenses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_other_expenses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtherExpensesPage);



/***/ }),

/***/ 38016:
/*!********************************************************************!*\
  !*** ./src/app/other-expenses/other-expenses.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci1leHBlbnNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 64064:
/*!********************************************************************!*\
  !*** ./src/app/other-expenses/other-expenses.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs color=\"primary\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"add\">\n      <ion-icon name=\"create\"></ion-icon>\n      <ion-label>Add Expenses</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"list\">\n      <ion-icon name=\"basket\"></ion-icon>\n      <ion-label>All Expenses</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_other-expenses_other-expenses_module_ts.js.map