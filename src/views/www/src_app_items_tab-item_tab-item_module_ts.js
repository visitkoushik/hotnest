"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_items_tab-item_tab-item_module_ts"],{

/***/ 4026:
/*!***********************************************************!*\
  !*** ./src/app/items/tab-item/tab-item-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabItemPageRoutingModule": () => (/* binding */ TabItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-item.page */ 5839);




const routes = [
    {
        path: '',
        component: _tab_item_page__WEBPACK_IMPORTED_MODULE_0__.TabItemPage,
        children: [
            {
                path: 'add-item',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-item_add-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../add-item/add-item.module */ 5807)).then(m => m.AddItemPageModule)
                    },
                ],
            },
            {
                path: 'item-list',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_item-list_item-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../item-list/item-list.module */ 9784)).then(m => m.ItemListPageModule)
                    },
                ],
            },
            {
                path: 'add-category',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../add-category/add-category.module */ 1233)).then(m => m.AddCategoryPageModule)
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tab-item/add-item',
                pathMatch: 'full',
            },
        ],
    }
];
let TabItemPageRoutingModule = class TabItemPageRoutingModule {
};
TabItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabItemPageRoutingModule);



/***/ }),

/***/ 285:
/*!***************************************************!*\
  !*** ./src/app/items/tab-item/tab-item.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabItemPageModule": () => (/* binding */ TabItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-item-routing.module */ 4026);
/* harmony import */ var _tab_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item.page */ 5839);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);








let TabItemPageModule = class TabItemPageModule {
};
TabItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tab_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabItemPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule
        ],
        declarations: [_tab_item_page__WEBPACK_IMPORTED_MODULE_1__.TabItemPage]
    })
], TabItemPageModule);



/***/ }),

/***/ 5839:
/*!*************************************************!*\
  !*** ./src/app/items/tab-item/tab-item.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabItemPage": () => (/* binding */ TabItemPage)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item.page.html?ngResource */ 6092);
/* harmony import */ var _tab_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-item.page.scss?ngResource */ 3157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-storage/app-storage.service */ 1970);
/* harmony import */ var src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/cart-service.service */ 4422);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);








let TabItemPage = class TabItemPage {
  constructor(cartServc, util, storage) {
    this.cartServc = cartServc;
    this.util = util;
    this.storage = storage;
    this.ITEM_ADD = false;
    this.ITEM_UPDATE = false;
    this.ITEM_READ = false;
    this.CATEGORY_READ = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ITEM_ADD = _this.util.metaData.accessRight.findIndex(e => e === 'ITEM_ADD') > -1;
      _this.ITEM_UPDATE = _this.util.metaData.accessRight.findIndex(e => e === 'ITEM_UPDATE') > -1;
      _this.ITEM_READ = _this.util.metaData.accessRight.findIndex(e => e === 'ITEM_READ') > -1;
      _this.CATEGORY_READ = _this.util.metaData.accessRight.findIndex(e => e === 'CATEGORY_READ') > -1;
    })();
  }

};

TabItemPage.ctorParameters = () => [{
  type: src_app_providers_cart_service_service__WEBPACK_IMPORTED_MODULE_4__.CartService
}, {
  type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_3__.AppStorageService
}];

TabItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tab-item',
  template: _tab_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TabItemPage);


/***/ }),

/***/ 3157:
/*!**************************************************************!*\
  !*** ./src/app/items/tab-item/tab-item.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItaXRlbS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6092:
/*!**************************************************************!*\
  !*** ./src/app/items/tab-item/tab-item.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs color=\"primary\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"add-item\" *ngIf=\"this.ITEM_ADD\">\n      <ion-icon name=\"create\"></ion-icon>\n      <ion-label>Add Item</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"item-list\"  *ngIf=\"this.ITEM_READ\">\n      <ion-icon name=\"basket\"></ion-icon>\n      <ion-label>All Items</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"add-category\" *ngIf=\"this.CATEGORY_READ\">\n      <ion-icon name=\"book\"></ion-icon>\n      <ion-label>Categories</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_items_tab-item_tab-item_module_ts.js.map