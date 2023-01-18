"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_employee_employee-tab_employee-tab_module_ts"],{

/***/ 3687:
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-tab/employee-tab-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTabPageRoutingModule": () => (/* binding */ EmployeeTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _employee_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-tab.page */ 2765);




const routes = [
    {
        path: '',
        component: _employee_tab_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeTabPage,
        children: [
            {
                path: 'add',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_employee_addEmployee_employee-add-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../addEmployee/employee-add-routing.module */ 5908)).then((m) => m.EmployeeAddPageRoutingModule),
                    },
                ],
            },
            {
                path: 'list',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_employee_employee-list_employee-list-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../employee-list/employee-list-routing.module */ 2220)).then((m) => m.EmployeeListPageRoutingModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/employee-tab/list',
                pathMatch: 'full',
            },
        ],
    },
];
let EmployeeTabPageRoutingModule = class EmployeeTabPageRoutingModule {
};
EmployeeTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeTabPageRoutingModule);



/***/ }),

/***/ 5749:
/*!**************************************************************!*\
  !*** ./src/app/employee/employee-tab/employee-tab.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTabPageModule": () => (/* binding */ EmployeeTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _employee_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-tab-routing.module */ 3687);
/* harmony import */ var _employee_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-tab.page */ 2765);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);









let EmployeeTabPageModule = class EmployeeTabPageModule {
};
EmployeeTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
            _employee_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeTabPageRoutingModule,
        ],
        declarations: [_employee_tab_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeTabPage]
    })
], EmployeeTabPageModule);



/***/ }),

/***/ 2765:
/*!************************************************************!*\
  !*** ./src/app/employee/employee-tab/employee-tab.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTabPage": () => (/* binding */ EmployeeTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _employee_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-tab.page.html?ngResource */ 4147);
/* harmony import */ var _employee_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-tab.page.scss?ngResource */ 6875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EmployeeTabPage = class EmployeeTabPage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeTabPage.ctorParameters = () => [];
EmployeeTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee-tab',
        template: _employee_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeTabPage);



/***/ }),

/***/ 6875:
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-tab/employee-tab.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS10YWIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4147:
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-tab/employee-tab.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs color=\"primary\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"list\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>List All</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"add\">\n      <ion-icon name=\"add\"></ion-icon>\n      <ion-label>Add</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_employee_employee-tab_employee-tab_module_ts.js.map