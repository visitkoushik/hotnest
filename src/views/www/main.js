(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _employee_ownergurd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee/ownergurd.service */ 37725);
/* harmony import */ var _providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/auth/auth-gaurd.service */ 72335);





const routes = [
    {
        path: '',
        redirectTo: 'tab',
        pathMatch: 'full',
    },
    {
        path: 'tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab/tab.module */ 64714)).then((m) => m.TabPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'allbills',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_bills_all-bills_all-bills_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bills/all-bills/all-bills.module */ 21579)).then((m) => m.AllBillsPageModule),
    },
    {
        path: 'createbill',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_bills_create-bill_create-bill_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bills/create-bill/create-bill.module */ 7668)).then((m) => m.CreateBillPageModule),
    },
    {
        path: 'configure',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_configure_configure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configure/configure.module */ 76950)).then((m) => m.ConfigurePageModule),
    },
    {
        path: 'configures',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_configure_configure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configure/configure.module */ 76950)).then((m) => m.ConfigurePageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'reports',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 33065)).then((m) => m.ReportsPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'appsetting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_appsetting_appsetting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./appsetting/appsetting.module */ 21294)).then((m) => m.AppsettingPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then((m) => m.LoginPageModule),
        canLoad: [_employee_ownergurd_service__WEBPACK_IMPORTED_MODULE_0__.OwnerGaurdService],
    },
    {
        path: 'tab-item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_tab-item_tab-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/tab-item/tab-item.module */ 285)).then((m) => m.TabItemPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'add-item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-item_add-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/add-item/add-item.module */ 65807)).then((m) => m.AddItemPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'item-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_items_item-list_item-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./items/item-list/item-list.module */ 79784)).then((m) => m.ItemListPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'add-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/add-category/add-category.module */ 21233)).then((m) => m.AddCategoryPageModule),
    },
    {
        path: 'employee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("default-src_app_employee_addEmployee_employee-add-routing_module_ts"), __webpack_require__.e("src_app_employee_addEmployee_employee-add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/addEmployee/employee-add.module */ 5869)).then((m) => m.EmployeeAddPageModule),
    },
    {
        path: 'employee-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("default-src_app_employee_employee-list_employee-list-routing_module_ts"), __webpack_require__.e("src_app_employee_employee-list_employee-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee-list/employee-list.module */ 16954)).then((m) => m.EmployeeListPageModule),
    },
    {
        path: 'employee-update',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("default-src_app_employee_update-employee_update-employee-routing_module_ts"), __webpack_require__.e("src_app_employee_update-employee_update-employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/update-employee/update-employee.module */ 64552)).then((m) => m.UpdateEmployeePageModule),
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then((m) => m.ProfilePageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'employee-tab',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("src_app_employee_employee-tab_employee-tab_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee-tab/employee-tab.module */ 65749)).then((m) => m.EmployeeTabPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'update-employee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch-selector_branch-selector_module_ts"), __webpack_require__.e("default-src_app_employee_update-employee_update-employee-routing_module_ts"), __webpack_require__.e("src_app_employee_update-employee_update-employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/update-employee/update-employee.module */ 64552)).then((m) => m.UpdateEmployeePageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'branch-tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_branch_branch-tab_branch-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./branch/branch-tab/branch-tab.module */ 14799)).then((m) => m.BranchTabPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'add-branch',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch_add-branch_add-branch-routing_module_ts"), __webpack_require__.e("src_app_branch_add-branch_add-branch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./branch/add-branch/add-branch.module */ 21202)).then((m) => m.AddBranchPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'branch-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_branch_branch-list_branch-list-routing_module_ts"), __webpack_require__.e("src_app_branch_branch-list_branch-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./branch/branch-list/branch-list.module */ 68949)).then((m) => m.BranchListPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'update-branch',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_branch_update-branch_update-branch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./branch/update-branch/update-branch.module */ 99101)).then((m) => m.UpdateBranchPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'other-expenses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_other-expenses_other-expenses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./other-expenses/other-expenses.module */ 65883)).then((m) => m.OtherExpensesPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 73676:
/*!***************************************************!*\
  !*** ./src/app/app-storage/app-storage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStorageModule": () => (/* binding */ AppStorageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage-cordovasqlitedriver */ 7878);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-storage.service */ 71970);







let AppStorageModule = class AppStorageModule {
};
AppStorageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [],
        imports: [
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.IonicStorageModule.forRoot({
                name: '___chataDB',
                // eslint-disable-next-line no-underscore-dangle
                driverOrder: [localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__._driver, _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Drivers.LocalStorage]
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        ],
        providers: [_app_storage_service__WEBPACK_IMPORTED_MODULE_2__.AppStorageService]
    })
], AppStorageModule);



/***/ }),

/***/ 71970:
/*!****************************************************!*\
  !*** ./src/app/app-storage/app-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStorageService": () => (/* binding */ AppStorageService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage-cordovasqlitedriver */ 7878);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable no-underscore-dangle */




let AppStorageService = class AppStorageService {
  constructor(storage) {
    var _this = this;

    this.storage = storage;
    this._storage = null;

    this.getStorage = /*#__PURE__*/function () {
      var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (col) {
        if (!_this._storage) {
          yield _this.init();
        }

        return _this._storage.get(col);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.setStorage = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (col, val) {
        if (!_this._storage) {
          _this.init();
        }

        return _this._storage.set(col, val);
      });

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.init();
  }

  init() {
    var _this2 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      yield _this2.storage.defineDriver(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);
      const storage = yield _this2.storage.create();
      _this2._storage = storage;
    })();
  }

};

AppStorageService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage
}];

AppStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AppStorageService);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-storage/app-storage.service */ 71970);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/cart-service.service */ 94422);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/http.service */ 85030);
/* harmony import */ var _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/snackbar.service */ 40415);
/* harmony import */ var _providers_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/theme.service */ 9609);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/utilservice.service */ 40847);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/network */ 54984);

















let AppComponent = class AppComponent {
  constructor(router, activatedRoute, location, util, storage, snackbar, cart, theme, platform, httpClient) {
    var _this = this;

    this.router = router;
    this.activatedRoute = activatedRoute;
    this.location = location;
    this.util = util;
    this.storage = storage;
    this.snackbar = snackbar;
    this.cart = cart;
    this.theme = theme;
    this.platform = platform;
    this.httpClient = httpClient;
    this.pageEvent = null;
    this.isLoggedIn = false;
    this.metaData = null;
    this.showNetworkStatus = false;
    this.networkStatus = false;
    this.networkStatusTime = null;
    this.networkMessage = '';

    this.onBack = () => {
      if (this.pageEvent.backTo) {
        this.router.navigateByUrl(`/${this.pageEvent.backTo}`);
      } else {
        this.location.back();
      }
    };

    this.appLogout = () => {
      // this.util.isLoggedIn = false;
      // this.util.redirectUrl = '';
      this.util.isLoading = true;
      this.httpClient.post(src_model_util__WEBPACK_IMPORTED_MODULE_3__.ApiEndPoint.LOGOUT, {}).then( /*#__PURE__*/function () {
        var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          _this.util.isLoading = false;

          _this.util.onAppLogout(); // this.router.navigate(['/login']);

        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(e => {
        this.util.isLoading = false;
      });
    };

    this.fetchBills = () => {
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.BILL).then(e => {
        this.util.isLoading = !true;
        [...this.cart.allBiills] = [...e];
      }).catch(e => {
        this.util.isLoading = !true;
      });
    };

    this.logCurrentNetworkStatus = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_10__.Network.getStatus();
      _this.networkStatus = status.connected;

      if (_this.networkStatus) {
        return;
      }

      if (_this.networkStatusTime) {
        _this.showNetworkStatus = false;
        clearTimeout(_this.networkStatusTime);
      }

      _this.networkStatusTime = setTimeout(() => {
        _this.showNetworkStatus = false;
      }, 5000);
      _this.networkMessage = status.connected ? 'We are online' : 'Check internet connection';
      _this.showNetworkStatus = true;
    });

    this.fetchTenantInfo = () => {
      this.util.isLoading = true;
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.TENANT).then( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          _this.util.tenantDetail = { ...e
          };
          yield _this.fetchBills();
          _this.util.isLoading = true;

          if (_this.util.tenantDetail?.tan?.trim().length > 0 || _this.util.tenantDetail?.pan?.trim().length > 0) {
            _this.router.navigateByUrl('/tab');
          }
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }()).catch(e => {
        this.util.isLoading = true;
        this.snackbar.openSnackBar('Please set Tenant detail');
      });
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PAGEBILL).then(e => {
        this.util.maxPageCount = +e;
      }).catch(e => {
        this.util.maxPageCount = 10;
      });
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PAGEREPORT).then(e => {
        this.util.maxPageCountReport = +e;
      }).catch(e => {
        this.util.maxPageCountReport = 20;
      });
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PRINTER).then(e => {
        this.util.printer = e;
      }).catch(e => {
        this.util.printer = null;
      });
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.RECIPTNUMBER).then(e => {
        this.util.numberOfRecipt = +e;
      }).catch(e => {
        this.util.numberOfRecipt = 1;
      });
    };

    this.platform.ready().then(e => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', event => {
          event.preventDefault();
          event.stopPropagation();
        }, false);
      });
    }).catch(e => {});
  }

  ngOnChanges(changes) {}

  ngOnInit() {
    this.logCurrentNetworkStatus();
    _capacitor_network__WEBPACK_IMPORTED_MODULE_10__.Network.addListener('networkStatusChange', status => {
      this.networkStatus = status.connected;

      if (this.networkStatusTime) {
        this.showNetworkStatus = false;
        clearTimeout(this.networkStatusTime);
      }

      this.networkStatusTime = setTimeout(() => {
        this.showNetworkStatus = false;
      }, 5000);
      this.networkMessage = status.connected ? 'We are online' : 'Check internet connection';
      this.showNetworkStatus = true;
    });
    this.metaData = this.util.metaData;
    this.theme.activeTheme('default'); // this.fetchMetaData();

    this.fetchTenantInfo();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(route => route.outlet === 'primary'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(route => route.data)).subscribe(event => {
      this.pageEvent = event;
    });
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location
}, {
  type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_9__.UtilService
}, {
  type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__.AppStorageService
}, {
  type: _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService
}, {
  type: _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_5__.CartService
}, {
  type: _providers_theme_service__WEBPACK_IMPORTED_MODULE_8__.ThemeService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
}, {
  type: _providers_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 63806);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/cart-service.service */ 94422);
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/pipe.module */ 23493);
/* harmony import */ var _providers_save_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/save.service */ 11357);
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/auth/auth.service */ 56240);
/* harmony import */ var _app_storage_app_storage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-storage/app-storage.module */ 73676);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule,
            _app_storage_app_storage_module__WEBPACK_IMPORTED_MODULE_7__.AppStorageModule,
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.PlatformModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_3__.CartService,
            _providers_save_service__WEBPACK_IMPORTED_MODULE_5__.SaveService,
            _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 37725:
/*!***********************************************!*\
  !*** ./src/app/employee/ownergurd.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerGaurdService": () => (/* binding */ OwnerGaurdService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/http.service */ 85030);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/utilservice.service */ 40847);






let OwnerGaurdService = class OwnerGaurdService {
  constructor(utilsrvc, httpClient, router) {
    var _this = this;

    this.utilsrvc = utilsrvc;
    this.httpClient = httpClient;
    this.router = router;

    this.onfail = () => {
      this.router.navigate(['/employee']);
    };

    this.fetchMetaData = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.utilsrvc.isLoading = true;
      const isMetadatFind = yield _this.httpClient.fetchMetaData();
      _this.utilsrvc.isLoading = !true;
      return new Promise((res, rej) => {
        if (!isMetadatFind || _this.utilsrvc.metaData?.ownerNeedtocreate) {
          _this.onfail();

          rej(false);
        } else {
          res(true);
        }
      });
    });
  }

  canLoad(route, segments) {
    return this.fetchMetaData();
  }

};

OwnerGaurdService.ctorParameters = () => [{
  type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_2__.UtilService
}, {
  type: _providers_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];

OwnerGaurdService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], OwnerGaurdService);


/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ 17520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ 41861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 15183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/menu */ 65397);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/dialog */ 62529);
















































let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule,
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__.CdkAccordionModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule,
            _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__.CdkMenuModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule,
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__.PortalModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule,
            _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__.DialogModule
        ], providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MAT_DATE_LOCALE, useValue: 'en-GB' }
        ]
    })
], MaterialModule);



/***/ }),

/***/ 57386:
/*!**************************************!*\
  !*** ./src/app/pipe/balance.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetPipe": () => (/* binding */ BalanceSheetPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let BalanceSheetPipe = class BalanceSheetPipe {
    transform(value, ...args) {
        let profit = 0;
        let sell = 0;
        if (value && Array.isArray(value)) {
            value.forEach((p) => {
                profit += p.profit;
                sell += p.allSellValue;
            });
        }
        return { sell, profit };
    }
};
BalanceSheetPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'checkbalance',
    })
], BalanceSheetPipe);



/***/ }),

/***/ 74879:
/*!*********************************************!*\
  !*** ./src/app/pipe/convert-to-fulldate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertToFullDate": () => (/* binding */ ConvertToFullDate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ConvertToFullDate = class ConvertToFullDate {
    transform(value, ...args) {
        if (!value) {
            return undefined;
        }
        if (args && args[0]) {
            if (args[0] === 'Y') {
                if (args[1] === 'e') {
                    return new Date(+value, 11, 31);
                }
                return new Date(+value, 0, 1);
            }
            else if (args[0] === 'M') {
                const year = +value.split('/')[1];
                let febDateofLeapyear = 28;
                if (year % 4 === 0 && year % 400 !== 0) {
                    febDateofLeapyear = 29;
                }
                const datescope = [
                    31,
                    febDateofLeapyear,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31,
                ];
                const MMM = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ];
                const monthindex = MMM.indexOf(value.split('/')[0]);
                if (args[1] === 'e') {
                    return new Date(year, monthindex, datescope[monthindex]);
                }
                return new Date(year, monthindex, 1);
            }
        }
        const v = new Date(value);
        return new Date(v.getFullYear(), v.getMonth(), v.getDate());
    }
};
ConvertToFullDate = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateconvert',
    })
], ConvertToFullDate);



/***/ }),

/***/ 25993:
/*!*****************************************!*\
  !*** ./src/app/pipe/dateformat.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateformatPipe": () => (/* binding */ DateformatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let DateformatPipe = class DateformatPipe {
    transform(value, ...args) {
        if (value) {
            value = new Date(value);
            if (args[0] && args[0] === 'date') {
                return value.toLocaleDateString();
            }
            else if (args[0] && args[0] === 'time') {
                return value.toLocaleTimeString();
            }
            return {
                date: `${value.toLocaleDateString()}`,
                time: `${value.toLocaleTimeString()}`,
            };
        }
        return '';
    }
};
DateformatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateformat',
    })
], DateformatPipe);



/***/ }),

/***/ 81041:
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/cart-service.service */ 94422);



let FilterPipe = class FilterPipe {
    constructor(cartsrvc) {
        this.cartsrvc = cartsrvc;
    }
    transform(value, ...args) {
        if (Array.isArray(value) && args && args[0]?.trim()) {
            if (!('itemName' in value[0])) {
                return (value.filter((e) => (e.items?.itemName || '')
                    .toLowerCase()
                    .includes(args[0].toLowerCase())) || [...value]);
            }
            else if ('itemName' in value[0]) {
                return (value.filter((e) => e.itemName.toLowerCase().includes(args[0].toLowerCase())) || [...value]);
            }
        }
        return Array.isArray(value) ? [...value] : [];
    }
};
FilterPipe.ctorParameters = () => [
    { type: _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_0__.CartService }
];
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'filter',
    })
], FilterPipe);



/***/ }),

/***/ 55992:
/*!**************************************!*\
  !*** ./src/app/pipe/genderFormat.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatGenderPipe": () => (/* binding */ FormatGenderPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 17699);



let FormatGenderPipe = class FormatGenderPipe {
    transform(value, ...args) {
        switch (src_model_util__WEBPACK_IMPORTED_MODULE_0__.GENDER[value.toString().toUpperCase()]) {
            case src_model_util__WEBPACK_IMPORTED_MODULE_0__.GENDER.FEMALE:
                return 'Ms.';
            case src_model_util__WEBPACK_IMPORTED_MODULE_0__.GENDER.MALE:
                return 'Mr.';
            case src_model_util__WEBPACK_IMPORTED_MODULE_0__.GENDER.OTHERS:
                return 'Mx.';
            default:
                return '';
        }
    }
};
FormatGenderPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'formatgender',
    })
], FormatGenderPipe);



/***/ }),

/***/ 11793:
/*!***********************************!*\
  !*** ./src/app/pipe/menu.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPipe": () => (/* binding */ MenuPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let MenuPipe = class MenuPipe {
    transform(value, ...args) {
        if (Array.isArray(value) && args && args[0]?.trim() && !args[1]) {
            return value.findIndex((v) => v.name == args[0]) > -1;
        }
        else if (Array.isArray(value) &&
            args &&
            args[0]?.trim() &&
            args[1]?.trim() === 'true') {
            return value.find((v) => v.name == args[0]).value;
        }
        return false;
    }
};
MenuPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'menu',
    })
], MenuPipe);



/***/ }),

/***/ 23493:
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.pipe */ 81041);
/* harmony import */ var _genderFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genderFormat */ 55992);
/* harmony import */ var _subtotal_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtotal.pipe */ 4823);
/* harmony import */ var _dateformat_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateformat.pipe */ 25993);
/* harmony import */ var _balance_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance.pipe */ 57386);
/* harmony import */ var _convert_to_fulldate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convert-to-fulldate */ 74879);
/* harmony import */ var _short_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./short-date.pipe */ 92459);
/* harmony import */ var _menu_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.pipe */ 11793);
/* harmony import */ var _profitCalulator_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profitCalulator.pipe */ 20537);











let PipeModule = class PipeModule {
};
PipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _subtotal_pipe__WEBPACK_IMPORTED_MODULE_2__.SubtotalPipe,
            _filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _genderFormat__WEBPACK_IMPORTED_MODULE_1__.FormatGenderPipe,
            _dateformat_pipe__WEBPACK_IMPORTED_MODULE_3__.DateformatPipe,
            _balance_pipe__WEBPACK_IMPORTED_MODULE_4__.BalanceSheetPipe,
            _convert_to_fulldate__WEBPACK_IMPORTED_MODULE_5__.ConvertToFullDate,
            _short_date_pipe__WEBPACK_IMPORTED_MODULE_6__.ShortDatePipe,
            _profitCalulator_pipe__WEBPACK_IMPORTED_MODULE_8__.ProfitCalculator,
            _menu_pipe__WEBPACK_IMPORTED_MODULE_7__.MenuPipe,
        ],
        exports: [
            _subtotal_pipe__WEBPACK_IMPORTED_MODULE_2__.SubtotalPipe,
            _filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _genderFormat__WEBPACK_IMPORTED_MODULE_1__.FormatGenderPipe,
            _dateformat_pipe__WEBPACK_IMPORTED_MODULE_3__.DateformatPipe,
            _balance_pipe__WEBPACK_IMPORTED_MODULE_4__.BalanceSheetPipe,
            _convert_to_fulldate__WEBPACK_IMPORTED_MODULE_5__.ConvertToFullDate,
            _short_date_pipe__WEBPACK_IMPORTED_MODULE_6__.ShortDatePipe,
            _profitCalulator_pipe__WEBPACK_IMPORTED_MODULE_8__.ProfitCalculator,
            _menu_pipe__WEBPACK_IMPORTED_MODULE_7__.MenuPipe,
        ],
    })
], PipeModule);



/***/ }),

/***/ 20537:
/*!**********************************************!*\
  !*** ./src/app/pipe/profitCalulator.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitCalculator": () => (/* binding */ ProfitCalculator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ProfitCalculator = class ProfitCalculator {
    transform(iBillsReq, ...args) {
        // let price = 0;
        let price = 0;
        iBillsReq.forEach((iB) => {
            price += iB.Stotal - iB.Ptotal - iB.discount;
        });
        return price + "";
    }
};
ProfitCalculator = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'profitcalc',
    })
], ProfitCalculator);



/***/ }),

/***/ 92459:
/*!*****************************************!*\
  !*** ./src/app/pipe/short-date.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortDatePipe": () => (/* binding */ ShortDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ShortDatePipe = class ShortDatePipe {
    transform(value, ...args) {
        if (value instanceof (Date)) {
            return `${(value.getDate().toString().padStart(2, '0'))}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`;
        }
        else {
            return value;
        }
    }
};
ShortDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'shortDate'
    })
], ShortDatePipe);



/***/ }),

/***/ 4823:
/*!***************************************!*\
  !*** ./src/app/pipe/subtotal.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubtotalPipe": () => (/* binding */ SubtotalPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/cart-service.service */ 94422);




let SubtotalPipe = class SubtotalPipe {
    constructor(cartsrvc) {
        this.cartsrvc = cartsrvc;
    }
    transform(value, ...args) {
        // let price = 0;
        let adjust = 0;
        adjust = args[1] ? +args[1] : 0;
        const price = args[0] === 'count'
            ? src_model_util__WEBPACK_IMPORTED_MODULE_0__.UtilClass.Get_Item_Count(value) + ''
            : args[0] === 'discount'
                ? src_model_util__WEBPACK_IMPORTED_MODULE_0__.UtilClass.Get_Total(this.cartsrvc, value).totalDiscount + adjust + ''
                : src_model_util__WEBPACK_IMPORTED_MODULE_0__.UtilClass.Get_Total(this.cartsrvc, value).price - adjust + '';
        return price;
    }
};
SubtotalPipe.ctorParameters = () => [
    { type: _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_1__.CartService }
];
SubtotalPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({
        name: 'subtotal',
    })
], SubtotalPipe);



/***/ }),

/***/ 72335:
/*!******************************************************!*\
  !*** ./src/app/providers/auth/auth-gaurd.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurdService": () => (/* binding */ AuthGaurdService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-storage/app-storage.service */ 71970);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ 85030);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilservice.service */ 40847);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ 56240);









let AuthGaurdService = class AuthGaurdService {
  constructor(router, auth, storage, util, httpClient) {
    var _this = this;

    this.router = router;
    this.auth = auth;
    this.storage = storage;
    this.util = util;
    this.httpClient = httpClient;
    this.fetchMetaData = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.util.isLoading = true;
      _this.util.metaData = null;
      const metadataResp = yield _this.httpClient.fetchMetaData();
      _this.util.isLoading = false;
      return new Promise((res, rej) => {
        if (!metadataResp || _this.util.metaData?.ownerNeedtocreate) {
          rej(false);
        } else {
          res(true);
        }
      });
    });
  }

  canLoad(route) {
    var _this2 = this;

    const url = route.path;

    if (this.util.isLoggedIn) {
      if (!this.util.metaData) {
        this.fetchMetaData();
      }

      return true;
    }

    return new Promise((res, rej) => {
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_2__.StoreName.LOGIN).then( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          _this2.util.userLogin = e.userLogin;
          _this2.util.isLoggedIn = e.isLoggedIn;

          if (!_this2.util.isLoggedIn) {
            _this2.util.redirectUrl = url;

            _this2.router.navigate(['/login']);
          } else {
            yield _this2.fetchMetaData();
          }

          res(_this2.util.isLoggedIn);
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(e => {
        this.util.userLogin = null;
        this.util.isLoggedIn = false;
        this.util.redirectUrl = url;
        this.router.navigate(['/login']);
        res(this.util.isLoggedIn);
      });
    });
  }

};

AuthGaurdService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__.AppStorageService
}, {
  type: _utilservice_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: _http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
}];

AuthGaurdService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], AuthGaurdService);


/***/ }),

/***/ 56240:
/*!************************************************!*\
  !*** ./src/app/providers/auth/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-storage/app-storage.service */ 71970);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ 85030);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilservice.service */ 40847);








let AuthService = class AuthService {
  constructor(router, util, httpClient, storage) {
    var _this = this;

    this.router = router;
    this.util = util;
    this.httpClient = httpClient;
    this.storage = storage;

    this.login = (username, password) => {
      return new Promise((resolve, reject) => {
        this.httpClient.post(src_model_util__WEBPACK_IMPORTED_MODULE_2__.ApiEndPoint.LOGIN, {
          username,
          password
        }).then( /*#__PURE__*/function () {
          var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
            console.log(e);

            if (e.status == 1) {
              _this.util.userLogin = { ...e.responseObject
              };
              _this.util.isLoggedIn = true;
              yield _this.storage.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_2__.StoreName.LOGIN, {
                userLogin: { ...e.responseObject
                },
                isLoggedIn: _this.util.isLoggedIn
              });
              yield _this.httpClient.fetchMetaData();
              resolve('Login success');
            }

            reject('Login failed');
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(e => {
          const apperr = e.error;
          this.util.isLoggedIn = false;
          reject(apperr.error);
        });
      });
    };
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _utilservice_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: _http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
}, {
  type: src_app_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__.AppStorageService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 94422:
/*!***************************************************!*\
  !*** ./src/app/providers/cart-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 71970);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 85030);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilservice.service */ 40847);







let CartService = class CartService {
  constructor(store, httpService, utilService) {
    var _this = this;

    this.store = store;
    this.httpService = httpService;
    this.utilService = utilService;
    this.createBillPageRef = null;
    this.mainItems = [];
    this.allBiills = []; // public categoryList: I_Category[] = [] as I_Category[];

    this.globalOrderNumber = 0;
    this.getOrderNumber = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dt = new Date();
      const key = `${dt.getDay()}-${dt.getMonth()}-${dt.getFullYear()}`;
      const eKey = yield _this.store.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_1__.StoreName.ORDER).catch(e => {});
      _this.globalOrderNumber = eKey && eKey.key === key ? eKey.order : 0;
      _this.globalOrderNumber++;
      return new Promise(res => {
        res(_this.globalOrderNumber);
      });
    });

    this.setDefaultBill = () => {
      const icreatPage = {}; // icreatPage.cartElement = [];

      icreatPage.currentBiill = {};
      icreatPage.currentBiill.gender = src_model_util__WEBPACK_IMPORTED_MODULE_1__.GENDER.MALE;
      icreatPage.currentBiill.customerName = '';
      icreatPage.currentBiill.customerContact = '';
      icreatPage.currentBiill.due = 0;
      icreatPage.currentBiill.discount = 0;
      icreatPage.listOfCartItem = this.mainItems.filter(e => e.available).map((itm, inx) => ({
        id: itm.id,
        items: { ...itm
        },
        count: 0
      }));
      icreatPage.filterTerm = '';
      this.createBillPageRef = { ...icreatPage
      };
    };

    this.updateDefaultBill = () => {
      const listOfCartItem = this.mainItems.filter(e => e.available).map((itm, inx) => {
        const cartItem = this.createBillPageRef.listOfCartItem.find(e => e.items.id === itm.id);
        return cartItem ? { ...cartItem,
          items: { ...itm
          }
        } : {
          id: inx + 1 + '',
          items: { ...itm
          },
          count: 0
        };
      });
      this.createBillPageRef = { ...this.createBillPageRef,
        listOfCartItem: [...listOfCartItem]
      };
    };

    this.getAllItem = (branchCode, availableStatus, onSuccess, onFail) => {
      let promise;
      this.utilService.isLoading = true;

      if (availableStatus === null || availableStatus === undefined || availableStatus === true) {
        promise = this.httpService.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.ITEM_LIST, 'available=true&branchCode=' + branchCode);
      } else {
        promise = this.httpService.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.ITEM_LIST, 'branchCode=' + branchCode);
      }

      promise.then(e => {
        this.mainItems = [...e.responseObject];

        if (onSuccess) {
          onSuccess();
        }

        this.utilService.isLoading = false;
      }).catch(e => {
        this.mainItems = [];

        if (onFail) {
          onFail();
        }

        this.utilService.isLoading = false;
      });
    };

    this.maxDate = new Date();
  }

};

CartService.ctorParameters = () => [{
  type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__.AppStorageService
}, {
  type: _http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
}, {
  type: _utilservice_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}];

CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], CartService);


/***/ }),

/***/ 85030:
/*!*******************************************!*\
  !*** ./src/app/providers/http.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilservice.service */ 40847);


/* eslint-disable @typescript-eslint/no-inferrable-types */





let HttpService = class HttpService {
  // public baseUrl: string = 'http://localhost:8010/';
  constructor(http, util) {
    var _this = this;

    this.http = http;
    this.util = util;
    this.baseUrl = 'https://hot.cyclic.app/';

    this.get = (api, query, id) => {
      const idToFetch = id ? '/' + id : '';

      const _url = this.baseUrl + api.replace(':id', idToFetch) + (query ? '?' + query : '');

      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      headers.set('content-type', 'application/json');

      if (this.util.userLogin && this.util.userLogin.authCode) {
        headers.set('auth-code', this.util.userLogin.authCode);
      }

      return new Promise((res, rej) => {
        this.http.get(_url, this.getCustomHeaders()).toPromise().then(e => res(e)).catch(e => {
          if (e.status === 401) {
            this.util.onAppLogout();
          }

          rej(e);
        });
      });
    };

    this.post = (api, body) => {
      const _url = this.baseUrl + api;

      return new Promise((res, rej) => {
        this.http.post(_url, body, this.getCustomHeaders()).toPromise().then(e => res(e)).catch(e => {
          if (e.status === 401) {
            this.util.onAppLogout();
          }

          rej(e);
        });
      });
    };

    this.put = (api, id, body) => {
      const _url = this.baseUrl + api.replace(':id', id);

      return new Promise((res, rej) => {
        this.http.put(_url, body, this.getCustomHeaders()).toPromise().then(e => res(e)).catch(e => {
          if (e.status === 401) {
            this.util.onAppLogout();
          }

          rej(e);
        });
      });
    };

    this.delete = (api, id) => {
      const _url = this.baseUrl + api.replace(':id', id);

      return new Promise((res, rej) => {
        this.http.delete(_url, this.getCustomHeaders()).toPromise().then(e => res(e)).catch(e => {
          if (e.status === 401) {
            this.util.onAppLogout();
          }

          rej(e);
        });
      });
    };

    this.fetchMetaData = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.util.isLoading = true;
      const metadataResp = yield _this.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.METADATA);
      _this.util.isLoading = !true;

      if (metadataResp.status == 1) {
        _this.util.metaData = metadataResp.responseObject;

        if (_this.util.metaData.profile && _this.util.metaData.profile.branchCode && _this.util.metaData.profile.branchCode !== '0') {
          _this.util.branchCode = _this.util.metaData.profile.branchCode;
        }
      }

      return new Promise((res, rej) => {
        if (_this.util.metaData?.ownerNeedtocreate) {
          rej(false);
        } else {
          res(true);
        }
      });
    });

    this.fetchBranch = () => {
      let status = 0;
      this.util.isLoading = true;
      this.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.BRANCH_LIST).then(e => {
        this.util.allBranches = [...e.responseObject];
        this.util.isLoading = false;
        status = e.status;
      }).catch(e => {
        status = e.status;
        this.util.isLoading = false;
      });
      return new Promise((res, rej) => {
        if (status == 0) {
          rej('Failed to load branch list. Restart app if required');
        } else {
          res(this.util.allBranches);
        }
      });
    };
  }

  getCustomHeaders() {
    if (this.util.userLogin && this.util.userLogin.authCode) {
      const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('content-type', 'application/json').set('auth-code', this.util.userLogin.authCode);
      return {
        headers: header
      };
    }

    const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('content-type', 'application/json');
    return {
      headers: header
    };
  }

};

HttpService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _utilservice_service__WEBPACK_IMPORTED_MODULE_2__.UtilService
}];

HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], HttpService);


/***/ }),

/***/ 3573:
/*!******************************************************!*\
  !*** ./src/app/providers/printer-service.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterService": () => (/* binding */ PrinterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let PrinterService = class PrinterService {
    constructor() {
        this.checkPrinterDriver = () => {
            try {
                this.thermalPrinter = ThermalPrinter;
                return true;
            }
            catch {
                this.thermalPrinter = null;
                return false;
            }
        };
        this.getListOfPrinter = () => {
            return new Promise((res, rej) => {
                const printerType = 'bluetooth';
                try {
                    this.thermalPrinter = ThermalPrinter;
                }
                catch {
                    this.thermalPrinter = null;
                }
                if (!this.thermalPrinter) {
                    rej('Printer Driver Error');
                    return;
                }
                this.thermalPrinter.listPrinters({ type: printerType }, (printers) => {
                    printers = printers.filter((p) => p.majorDeviceClass === 1536);
                    if (printers.length > 0) {
                        res(printers);
                    }
                    else {
                        rej('No Printer Found');
                    }
                }, function (error) {
                    rej('Ups, we cant list the printers! ' + error.toString());
                });
            });
        };
        this.print = (textToPrint, printer) => {
            const thermalPrinter = ThermalPrinter;
            return new Promise((res, rej) => {
                if (printer === null || !thermalPrinter) {
                    rej('Printer not set yet. Please goto App Setting and set the printer');
                    return;
                }
                ThermalPrinter.printFormattedTextAndCut({
                    type: 'bluetooth',
                    id: printer.address,
                    text: textToPrint,
                }, function () {
                    res('Successfully printed!');
                }, function (error) {
                    rej(error.toString());
                });
            });
        };
    }
};
PrinterService.ctorParameters = () => [];
PrinterService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], PrinterService);



/***/ }),

/***/ 11357:
/*!*******************************************!*\
  !*** ./src/app/providers/save.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveService": () => (/* binding */ SaveService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let SaveService = class SaveService {
    constructor() { }
};
SaveService.ctorParameters = () => [];
SaveService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SaveService);



/***/ }),

/***/ 40415:
/*!***********************************************!*\
  !*** ./src/app/providers/snackbar.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);



let SnackbarService = class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    openSnackBar(message, duration = 3000) {
        this.snackbar.open(message, undefined, { duration });
    }
    openActionSnackBar(message, action, duration = 3000) {
        this.snackbar.open(message, action, { duration });
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar }
];
SnackbarService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], SnackbarService);



/***/ }),

/***/ 9609:
/*!********************************************!*\
  !*** ./src/app/providers/theme.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 71970);





let ThemeService = class ThemeService {
    constructor(rendererFactory, document, store) {
        this.rendererFactory = rendererFactory;
        this.document = document;
        this.store = store;
        this.selectTheme = 'default';
        this.store
            .getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_0__.StoreName.THEME)
            .then((thm) => {
            this.selectTheme = thm ? thm : this.selectTheme;
            this.activeTheme(this.selectTheme);
        })
            .catch((er) => { });
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    activeTheme(item) {
        this.renderer.removeClass(this.document.body, this.currentTheme);
        this.currentTheme = item;
        this.renderer.addClass(this.document.body, item);
    }
};
ThemeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2 },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] },
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__.AppStorageService }
];
ThemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ThemeService);



/***/ }),

/***/ 40847:
/*!**************************************************!*\
  !*** ./src/app/providers/utilservice.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 71970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _printer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printer-service.service */ 3573);







let UtilService = class UtilService {
  constructor(storage, router, printerSrvc) {
    var _this = this;

    this.storage = storage;
    this.router = router;
    this.printerSrvc = printerSrvc;
    this.url = '';
    this.gvtTax = 0;
    this.isLoading = false;
    this.metaData = null;
    this.allBranches = [];
    this.branchCode = '0';
    this.isLoggedIn = false;
    this.onAppLogout = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_1__.StoreName.LOGIN, {
        userLogin: null,
        isLoggedIn: false
      });
      _this.userLogin = null;
      _this.isLoggedIn = false; // this.redirectUrl = '/';

      _this.router.navigate(['/login']);
    });

    this.printBill = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bill, alertCtrl, alertSrvc) {
        _this.isLoading = true;
        let num = _this.numberOfRecipt;

        while (num--) {
          if (num == 0 && _this.numberOfRecipt == 2) {
            alertSrvc.presentAlert(alertCtrl, '', 'Printing client receipt', {
              ok: 'OK'
            }, /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this.printRecipt(bill);
            }));
          } else {
            yield _this.printRecipt(bill);
          }
        }

        _this.isLoading = false;
      });

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.printRecipt = /*#__PURE__*/function () {
      var _ref4 = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (billing) {
        let billText = `[C]<font size='big'><u>House Of Tea</u></font>\n\n\n`;
        billText += `[L]<b>ORDER NO: </b>${billing.billNumber}
[L]<b>Date: </b>${new Date(billing.billingDate).toLocaleDateString()} ${new Date(billing.billingDate).toLocaleTimeString()}
[L]<b>Customer Name: </b>${billing.customer.firstName} ${billing.customer.lastName}`;
        billText += `\n\n[L]<b>Item(Qty) </b>[C] Dsc [R] Price`;
        billText += `\n--------------------------------\n`;

        for (let i = 0; i < billing.billingItemList.length; i++) {
          const bit = billing.billingItemList[i];
          billText += `[L]<b>${bit.itemName}(${bit.itemCount})</b>[C]${bit.discount != 0 ? bit.discount : ''}${bit.isDiscountInPercentage ? '%' : ''}[R]${bit.sellingAmount * bit.itemCount - (bit.isDiscountInPercentage ? bit.sellingAmount * bit.itemCount * bit.discount / 100 : bit.discount)}\n`;
        }

        billText += `\n\n[C]<font >TOTAL</font>[R]<font size='normal'> ${billing.Stotal}</font>\n`;
        billText += `[C]<font >Discount</font>[R]<font size='normal'>-${billing.discount}</font>\n`;
        billText += `[C]<font >Tax(%)</font>[R]<font size='normal'>-${billing.tax}</font>\n`;
        billText += billing.Stotal - billing.discount - billing.tax === billing.paid ? `` : `[C]<font >Due</font>[R]<font size='normal'>-${billing.tax}</font>\n`;
        billText += `[C]<font color='bg-black'>GRAND TOTAL</font>[R]<font size='normal'> ${billing.Stotal - billing.discount - billing.tax}</font>\n\n--------------------------------\n\n`;
        yield _this.printerSrvc.print(billText, _this.printer);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
  }

  get redirectUrl() {
    return this.url;
  }

  set redirectUrl(url) {
    this.url = url;
  }

};

UtilService.ctorParameters = () => [{
  type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__.AppStorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _printer_service_service__WEBPACK_IMPORTED_MODULE_3__.PrinterService
}];

UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], UtilService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 17699:
/*!***************************!*\
  !*** ./src/model/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiEndPoint": () => (/* binding */ ApiEndPoint),
/* harmony export */   "FILTER_BY": () => (/* binding */ FILTER_BY),
/* harmony export */   "GENDER": () => (/* binding */ GENDER),
/* harmony export */   "StoreName": () => (/* binding */ StoreName),
/* harmony export */   "UtilClass": () => (/* binding */ UtilClass)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "MALE";
    GENDER["FEMALE"] = "FEMALE";
    GENDER["OTHERS"] = "OTHERS";
})(GENDER || (GENDER = {}));
var FILTER_BY;
(function (FILTER_BY) {
    FILTER_BY[FILTER_BY["DATE"] = 1] = "DATE";
    FILTER_BY[FILTER_BY["MONTH"] = 2] = "MONTH";
    FILTER_BY[FILTER_BY["YEAR"] = 3] = "YEAR";
})(FILTER_BY || (FILTER_BY = {}));
var StoreName;
(function (StoreName) {
    StoreName["ITEM"] = "items";
    StoreName["CATEGORY"] = "category";
    StoreName["BILL"] = "bills";
    StoreName["TENANT"] = "tenant";
    StoreName["ORDER"] = "order";
    StoreName["THEME"] = "selectedTheme";
    StoreName["PRINTER"] = "selectedPrinter";
    StoreName["PAGEBILL"] = "pageBill";
    StoreName["PAGEREPORT"] = "pageReport";
    StoreName["LOGIN"] = "loginstore";
    StoreName["RECIPTNUMBER"] = "RECIPTNUMBER";
})(StoreName || (StoreName = {}));
var ApiEndPoint;
(function (ApiEndPoint) {
    ApiEndPoint["ITEM_ADD"] = "item";
    ApiEndPoint["ITEM_UPDATE"] = "item/:id";
    ApiEndPoint["EMPLOYEE_ADD"] = "employee";
    ApiEndPoint["EMPLOYEE_UPDATE"] = "employee/:id";
    ApiEndPoint["EMPLOYEE_PROFILE"] = "employee/profile";
    ApiEndPoint["EMPLOYEE_LIST"] = "employee/:id";
    ApiEndPoint["ITEM_LIST"] = "item";
    ApiEndPoint["CATEGORY_ADD"] = "category";
    ApiEndPoint["CATEGORY_UPDATE"] = "category/:id";
    ApiEndPoint["CATEGORY_LIST"] = "category";
    ApiEndPoint["BRANCH_ADD"] = "chain";
    ApiEndPoint["BRANCH_UPDATE"] = "chain/:id";
    ApiEndPoint["BRANCH_LIST"] = "chain";
    ApiEndPoint["BRANCH_CODE"] = "chain/code";
    ApiEndPoint["BRANCH_DELETE"] = "billing/:id";
    ApiEndPoint["METADATA"] = "metadata";
    ApiEndPoint["BILL_ADD"] = "billing";
    ApiEndPoint["BILL_UPDATE_ITEMADD"] = "billing/itemadd/:id";
    ApiEndPoint["BILL_UPDATE_PAYDUE"] = "billing/paydue/:id";
    ApiEndPoint["BILL_LIST"] = "billing";
    ApiEndPoint["BILL_DELETE"] = "billing/:id";
    ApiEndPoint["RESETPASSWORD"] = "employee/resetpassword";
    ApiEndPoint["CHANGEASSWORD"] = "employee/changepassword";
    ApiEndPoint["LOGIN"] = "auth/login";
    ApiEndPoint["LOGOUT"] = "auth/logout";
    ApiEndPoint["REPORT_BILLWISE"] = "reports/billwise";
    ApiEndPoint["REPORT_ITEMWISE"] = "reports/itemwise";
    ApiEndPoint["REPORT_OVERALL"] = "reports/overall";
    ApiEndPoint["TRANSACTION_ADD"] = "transaction";
    ApiEndPoint["TRANSACTION_READ"] = "transaction";
    ApiEndPoint["TRANSACTION_UPDATE"] = "transaction/:id";
    ApiEndPoint["TRANSACTION_DELETE"] = "transaction/:id";
})(ApiEndPoint || (ApiEndPoint = {}));
class UtilClass {
}
UtilClass.Get_Total = (cartsrvc, itemPurchased) => {
    let price = 0;
    let totalDiscount = 0;
    if (!Array.isArray(itemPurchased)) {
        return { price, totalDiscount };
    }
    itemPurchased
        .filter((e) => e.count > 0)
        .forEach((e) => {
        const item = e.items;
        if (item) {
            item.discount = item.discount || 0;
            item.isDiscountInPercentage = item.isDiscountInPercentage == true;
            totalDiscount =
                totalDiscount +
                    e.count *
                        (item.isDiscountInPercentage
                            ? (item.itemPrice.sellingAmount * item.discount) / 100
                            : item.discount);
            price =
                price +
                    e.count *
                        (item.isDiscountInPercentage
                            ? (item.itemPrice.sellingAmount * (100 - item.discount)) / 100
                            : item.itemPrice.sellingAmount - item.discount);
        }
    });
    return {
        price: +price.toFixed(2),
        totalDiscount: +totalDiscount.toFixed(2),
    };
};
UtilClass.Get_Item_Count = (itemPurchased) => {
    let count = 0;
    if (!Array.isArray(itemPurchased)) {
        return count;
    }
    itemPurchased.forEach((e) => {
        count = count + e.count;
    });
    return +count.toFixed(0);
};


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n/**\n * Card style modal needs additional padding on the\n * top of the header. We accomplish this by targeting\n * the first toolbar in the header.\n * Footer also needs this. We do not adjust the bottom\n * padding though because of the safe area.\n */\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal ion-footer ion-toolbar:first-of-type {\n  padding-top: 6px;\n}\n/**\n* Card style modal needs additional padding on the\n* bottom of the header. We accomplish this by targeting\n* the last toolbar in the header.\n*/\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {\n  padding-bottom: 6px;\n}\n/**\n* Add padding on the left and right\n* of toolbars while accounting for\n* safe area values when in landscape.\n*/\nhtml.ios ion-modal ion-toolbar {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n/**\n * Card style modal on iPadOS\n * should only have backdrop on first instance.\n */\n@media screen and (min-width: 768px) {\n  html.ios ion-modal.modal-card:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n/**\n * Subsequent modals should not have a backdrop/box shadow\n * as it will cause the screen to appear to get progressively\n * darker. With Ionic 6, declarative modals made it\n * possible to have multiple non-presented modals in the DOM,\n * so we could no longer rely on ion-modal:first-of-type.\n * Here we disable the opacity/box-shadow for every modal\n * that comes after the first presented modal.\n *\n * Note: ion-modal:not(.overlay-hidden):first-of-type\n * does not match the first modal to not have\n * the .overlay-hidden class, it will match the\n * first modal in general only if it does not\n * have the .overlay-hidden class.\n * The :nth-child() pseudo-class has support\n * for selectors which would help us here. At the\n * time of writing it does not have great cross browser\n * support.\n *\n * Note 2: This should only apply to non-card and\n * non-sheet modals. Card and sheet modals have their\n * own criteria for displaying backdrops/box shadows.\n */\nion-modal.modal-default:not(.overlay-hidden) ~ ion-modal.modal-default {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n/**\n * This works around a bug in WebKit where the\n * content will overflow outside of the bottom border\n * radius when re-painting. As long as a single\n * border radius value is set on .ion-page, this\n * issue does not happen. We set the top left radius\n * here because the top left corner will always have a\n * radius no matter the platform.\n * This behavior only applies to card modals.\n */\nhtml.ios ion-modal.modal-card .ion-page {\n  border-top-left-radius: var(--border-radius);\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n/**\n * When making custom dialogs, using\n * ion-content is not required. As a result,\n * some developers may wish to have dialogs\n * that are automatically sized by the browser.\n * These changes allow certain dimension values\n * such as fit-content to work correctly.\n */\nion-modal .ion-page:not(ion-nav .ion-page) {\n  position: relative;\n  contain: layout style;\n  height: 100%;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-accordion-group > ion-accordion:last-of-type ion-item[slot=header] {\n  --border-width: 0px;\n}\nion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion .ion-accordion-toggle-icon {\n    /* stylelint-disable declaration-no-important */\n    transition: none !important;\n  }\n}\n/**\n * The > [slot=\"header\"] selector ensures that we do\n * not modify toggle icons for any nested accordions. The state\n * of one accordion should not affect any accordions inside\n * of a nested accordion group.\n */\nion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,\nion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon {\n  transform: rotate(180deg);\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type {\n  margin-top: 0;\n}\nion-input input::-webkit-date-and-time-value {\n  text-align: start;\n}\n/**\n * The .ion-datetime-button-overlay class contains\n * styles that allow any modal/popover to be\n * sized according to the dimensions of the datetime\n * when used with ion-datetime-button.\n */\n.ion-datetime-button-overlay {\n  --width: fit-content;\n  --height: fit-content;\n}\n/**\n * The grid variant can scale down when inline.\n * When used in a `fit-content` overlay, this causes\n * the overlay to shrink when the month/year picker is open.\n * Explicitly setting the dimensions lets us have a consistently\n * sized grid interface.\n */\n.ion-datetime-button-overlay ion-datetime.datetime-grid {\n  width: 320px;\n  min-height: 320px;\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.ion-ce body {\n  display: block;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  /**\n   * Because body has position: fixed,\n   * it should be promoted to its own\n   * layer.\n   *\n   * WebKit does not always promote\n   * the body to its own layer on page\n   * load in Ionic apps. Once scrolling on\n   * ion-content starts, WebKit will promote\n   * body. Unfortunately, this causes a re-paint\n   * which results in scrolling being halted\n   * until the next user gesture.\n   *\n   * This impacts the Custom Elements build.\n   * The lazy loaded build causes the browser to\n   * re-paint during hydration which causes WebKit\n   * to promote body to its own layer.\n   * In the CE Build, this hydration does not\n   * happen, so the additional re-paint does not occur.\n   */\n  transform: translateZ(0);\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\nion-content {\n  --background: url('bg.jpeg') center center fixed;\n  background-size: 100vw 100vh;\n}\nion-item,\nion-toolbar,\nion-footer {\n  --background: transparent;\n}\nmat-card,\nmat-list,\nion-list {\n  background: transparent;\n}\n.mat-table, .searchbar-input.sc-ion-searchbar-md,\n.searchbar-input.sc-ion-searchbar-md {\n  background: rgba(255, 255, 255, 0.4549019608);\n}\n.fullwidth {\n  width: 100%;\n}\n.ion-label,\n.item.sc-ion-label-md-h,\n.item .sc-ion-label-md-h {\n  font-size: 1.2rem;\n}\n.active {\n  border-left: 5px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n  padding-left: 1rem;\n}\n.header {\n  text-align: center;\n}\n.menuheader {\n  height: 31%;\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  border-radius: 10px 10px 10px 50px;\n  box-shadow: 0px 1px 10px var(--ion-color-primary);\n  transform: rotate(-18deg);\n  margin-left: -2%;\n  margin-top: -39%;\n  margin-bottom: 34%;\n  width: 150%;\n}\n.menuList {\n  margin: 0;\n}\n.menuList mat-icon {\n  margin-right: 2rem;\n}\nion-menu ion-content {\n  --background: #fff;\n}\n.searchbar-input.sc-ion-searchbar-md {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 55px;\n  padding-inline-end: 55px;\n  background: transparent;\n  box-shadow: 2px 2px 2px 2px;\n}\n.menuheadercontent {\n  position: absolute;\n  z-index: 1;\n  top: 8.1%;\n  left: 7.2%;\n}\nimg {\n  position: absolute;\n  bottom: 0;\n  transform: rotate(20deg);\n}\n.drop {\n  display: inline-block;\n  transform: rotate(-45deg);\n  border: 5px solid green;\n  width: 100px;\n  height: 100px;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.imgtext {\n  top: 18px;\n  left: 12%;\n  transform: rotate(0deg);\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dsb2JhbC5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFycy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdHlwb2dyYXBoeS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQUFBO0FBV0EsNERBQUE7QUNIQTtFQUNFLDZGQUFBO0FDUEY7QURTQTtFQUNFLDBEQUFBO0FDTkY7QURTQTtFQUNFLDBDQUFBO0FDTkY7QURTQTtFQUNFLHVDQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0FDTkY7QURnQkE7Ozs7OztFQUFBO0FBT0E7OztFQUdFLGdCQUFBO0FDYkY7QURnQkE7Ozs7Q0FBQTtBQUtBOztFQUVFLG1CQUFBO0FDYkY7QURnQkE7Ozs7Q0FBQTtBQUtBO0VBQ0UscURBQUE7RUFDQSxtREFBQTtBQ2JGO0FEZ0JBOzs7RUFBQTtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQ2JGO0FBQ0Y7QURnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQXVCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGlCQTs7Ozs7Ozs7O0VBQUE7QUFVQTtFQUNFLDRDQUFBO0FDZEY7QUR1Q0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUMxQkY7QUQ4QkU7RUFUQSxnRUFBQTtFQUNBLDZFQUFBO0VBQ0EsMEVBQUE7RUFDQSwyRkFBQTtFQUNBLHVFQUFBO0VBQ0EscUVBQUE7QUNqQkY7QURxQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNSRjtBRFlFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDQ0Y7QURHRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ1VGO0FETkU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNtQkY7QURmRTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQzRCRjtBRHhCRTtFQVRBLDZEQUFBO0VBQ0EsMkVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ3FDRjtBRGpDRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQzhDRjtBRGpDQTtFRWdMTSxPRi9LdUI7RUVnTHZCLFFGaExpQjtFRXlNckIsTUZ6TWtCO0VFME1sQixTRjFNd0I7RUFFeEIsYUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVRy9HK0I7QUZtSmpDO0FEakNBOzs7Ozs7O0VBQUE7QUFRQTtFQUNFLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxZQUFBO0FDa0NGO0FEL0JBO0VBQ0Usa0JBQUE7QUNrQ0Y7QUQvQkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFLHlEQUFBO0VBQ0Esd0JBQUE7QUNrQ0Y7QUQvQkE7RUFDRSxVQUFBO0FDa0NGO0FEL0JBO0VBQ0UsY0FBQTtBQ2tDRjtBRDNCQTtFQUNFLDZCQUFBO0FDOEJGO0FEM0JBO0VBQ0U7SUFDRSxpREFBQTtFQzhCRjtBQUNGO0FEMUJBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLHdEQUFBO0lBQ0Esb0RBQUE7SUFDQSxzREFBQTtFQzRCRjtBQUNGO0FEekJBO0VBQ0U7SUFDRSw2Q0FBQTtJQUNBLG1EQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtFQzJCRjtBQUNGO0FEcEJBOztFQUVFLGNBQUE7QUNzQkY7QURkQTtFRTJRTSxpQ0FBQTtBRHpQTjtBRGRBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBSUEsb0JBQUE7QUNjRjtBRFhBO0VBQ0UsMkNJcFErQjtBSGtSakM7QURYQTtFQUNFLDBDSXJRK0I7QUhtUmpDO0FEUEE7RUFDRSw0Q0tuUjhCO0FKNlJoQztBRFBBO0VBQ0UsNENLdlI4QjtBSmlTaEM7QUROQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNTRjtBRFBBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ1VGO0FEUkE7RUFDRSxtQkFBQTtBQ1dGO0FEUkE7RUFDRSwyREFBQTtBQ1dGO0FEUkE7RUFDRTtJQUNFLCtDQUFBO0lBQ0EsMkJBQUE7RUNXRjtBQUNGO0FEVEE7Ozs7O0VBQUE7QUFNQTs7RUFFRSx5QkFBQTtBQ1dGO0FEUkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDV0Y7QURSQTs7RUFFRSxhQUFBO0FDV0Y7QURMQTtFQUNFLGlCQUFBO0FDUUY7QURMQTs7Ozs7RUFBQTtBQU1BO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ1FGO0FETEE7Ozs7OztFQUFBO0FBT0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRnBXQSx3Q0FBQTtBT1BBOzs7O0VBSUUsd0JBQUE7QUNORjtBRFdBO0VBQ0UsYUFBQTtFQUVBLFNBQUE7QUNURjtBRGlCQTs7RUFFRSxpQkFBQTtBQ2RGO0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRDZCQTtFQUNFLGdCQUFBO0FDMUJGO0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjtBRGdDQTtFQUNFLGNBQUE7QUM3QkY7QURpQ0E7Ozs7RUFJRSxpQ0FBQTtFQUNBLGNBQUE7QUM5QkY7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGO0FEOENBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQzdDRjtBRGdEQTtFQUNFLGlCQUFBO0FDN0NGO0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGO0FEc0RBOzs7RUFHRSxlQUFBO0VBRUEsMEJBQUE7QUNwREY7QUR3REE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSwwQkFBQTtBQ3JERjtBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjtBRHdEQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RU55Q0Usa0NBQUE7RUFDQSxtQ0FBQTtFQW9LRSxjTTVNYztFTjZNZCxlTTdNYztFTmlQaEIsYU1qUGdCO0VOa1BoQixnQk1sUGdCO0VONE1kLGVNM01lO0VONE1mLGdCTTVNZTtFTmdQakIsY01oUGlCO0VOaVBqQixpQk1qUGlCO0VBRWpCLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7RUFvQkEsd0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7QUNkRjtBQ3ZDQTtFQUNFLG1DQUFBO0FDOUJGO0FEaUNBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQzlCRjtBRGlDQTs7Ozs7O0VSK09FLGdCUXpPZ0I7RVIwT2hCLG1CUTFPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjtBRGtDQTtFUmtPRSxnQlFqT2dCO0VBRWhCLGVBMUM2QjtBQ1MvQjtBRG9DQTtFUjRORSxnQlEzTmdCO0VBRWhCLGVBN0M2QjtBQ1UvQjtBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjtBRHVDQTtFQUNFLGVBL0M2QjtBQ1cvQjtBRHVDQTtFQUNFLGVBaEQ2QjtBQ1kvQjtBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjtBRHVDQTtFQUNFLGNBQUE7QUNwQ0Y7QUR1Q0E7O0VBRUUsa0JBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0FDdkNGO0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN2Q0Y7QUN0REE7RUFDRSx3QkFBQTtBQ1BGO0FEaUJJO0VBQ0Usd0JBQUE7QUNkTjtBRHFCSTtFQUNFLHdCQUFBO0FDbEJOO0FYc0hJO0VVN0dBO0lBQ0Usd0JBQUE7RUNMSjtBQUNGO0FYeUpJO0VVOUlBO0lBQ0Usd0JBQUE7RUNSSjtBQUNGO0FYMkdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNLSjtBQUNGO0FYK0lJO0VVOUlBO0lBQ0Usd0JBQUE7RUNFSjtBQUNGO0FYaUdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNlSjtBQUNGO0FYcUlJO0VVOUlBO0lBQ0Usd0JBQUE7RUNZSjtBQUNGO0FYdUZJO0VVN0dBO0lBQ0Usd0JBQUE7RUN5Qko7QUFDRjtBWDJISTtFVTlJQTtJQUNFLHdCQUFBO0VDc0JKO0FBQ0Y7QWQvQkEsaURBQUE7QWVKQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VaOE5FLGVZNU5lO0VaNk5mLGdCWTdOZTtFWmlRakIsY1lqUWlCO0Vaa1FqQixpQllsUWlCO0FDYm5CO0FEZ0JBO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RVp5TkUsc0NZNU9NO0VaNk9OLHVDWTdPTTtFWjZRUixxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDVVY7QWJzT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDbUJSO0FBQ0Y7QURJQTtFQUNFLHVDQUFBO0Vab1BBLHFDWTdRUTtBQ3lCVjtBREtBO0VBQ0UseUNBQUE7RVo2TUUsc0NZNU9NO0FDNkJWO0FibU5NO0VBQ0U7SUFFSSxtQkFBQTtJQU9GLDhDWTFQQTtFQ21DUjtBQUNGO0FEQUE7RUFDRSx1Q0FBQTtFWndNRSx1Q1k3T007QUN5Q1Y7QWJ1TU07RUFDRTtJQUtJLG9CQUFBO0lBTUYsNENZNVBBO0VDK0NSO0FBQ0Y7QUROQTtFQUNFLDBDQUFBO0VabU9BLHdDWTlRUTtBQ3FEVjtBRExBO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFWjJOQSxxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDMkRWO0FESkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VabUxFLHNDWTVPTTtFWjZPTix1Q1k3T007QUNpRVY7QWIrS007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDMEVSO0FBQ0Y7QURUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFWmtLRSxjWWhLYztFWmlLZCxlWWpLYztFWnFNaEIsYVlyTWdCO0Vac01oQixnQll0TWdCO0FDY2xCO0FEWEE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFWjZKRSxvQ1kzT0s7RVo0T0wscUNZNU9LO0VaNFFQLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNnR1Q7QWIrSU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDeUdQO0FBQ0Y7QUR2QkE7RUFDRSxxQ0FBQTtFWndMQSxtQ1k1UU87QUMrR1Q7QUR0QkE7RUFDRSx1Q0FBQTtFWmlKRSxvQ1kzT0s7QUNtSFQ7QWI0SE07RUFDRTtJQUVJLGtCQUFBO0lBT0YsNENZelBEO0VDeUhQO0FBQ0Y7QUQzQkE7RUFDRSxxQ0FBQTtFWjRJRSxxQ1k1T0s7QUMrSFQ7QWJnSE07RUFDRTtJQUtJLG1CQUFBO0lBTUYsMENZM1BEO0VDcUlQO0FBQ0Y7QURqQ0E7RUFDRSx3Q0FBQTtFWnVLQSxzQ1k3UU87QUMySVQ7QURoQ0E7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VaK0pBLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNpSlQ7QUQvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VadUhFLG9DWTNPSztFWjRPTCxxQ1k1T0s7QUN1SlQ7QWJ3Rk07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDZ0tQO0FBQ0Y7QUM5Skk7RWRtYUUsc0JBQUE7QWUvYU47QURnQkk7RWQrWkUsdUJBQUE7QWUzYU47QURnQkk7RWQ2WUUsc0JBQUE7QWV6Wk47QWY0TFc7RUFnT0wsdUJBQUE7QWV6Wk47QURhSTtFZGdaRSx1QkFBQTtBZXpaTjtBZnFMVztFQXVPTCxzQkFBQTtBZXpaTjtBZjRHSTtFY2xIQTtJZG1hRSxzQkFBQTtFZXhaSjs7RURQRTtJZCtaRSx1QkFBQTtFZXBaSjs7RURQRTtJZDZZRSxzQkFBQTtFZWxZSjtFZnFLUztJQWdPTCx1QkFBQTtFZWxZSjs7RURWRTtJZGdaRSx1QkFBQTtFZWxZSjtFZjhKUztJQXVPTCxzQkFBQTtFZWxZSjtBQUNGO0Fmb0ZJO0VjbEhBO0lkbWFFLHNCQUFBO0VlallKOztFRDlCRTtJZCtaRSx1QkFBQTtFZTdYSjs7RUQ5QkU7SWQ2WUUsc0JBQUE7RWUzV0o7RWY4SVM7SUFnT0wsdUJBQUE7RWUzV0o7O0VEakNFO0lkZ1pFLHVCQUFBO0VlM1dKO0VmdUlTO0lBdU9MLHNCQUFBO0VlM1dKO0FBQ0Y7QWY2REk7RWNsSEE7SWRtYUUsc0JBQUE7RWUxV0o7O0VEckRFO0lkK1pFLHVCQUFBO0VldFdKOztFRHJERTtJZDZZRSxzQkFBQTtFZXBWSjtFZnVIUztJQWdPTCx1QkFBQTtFZXBWSjs7RUR4REU7SWRnWkUsdUJBQUE7RWVwVko7RWZnSFM7SUF1T0wsc0JBQUE7RWVwVko7QUFDRjtBZnNDSTtFY2xIQTtJZG1hRSxzQkFBQTtFZW5WSjs7RUQ1RUU7SWQrWkUsdUJBQUE7RWUvVUo7O0VENUVFO0lkNllFLHNCQUFBO0VlN1RKO0VmZ0dTO0lBZ09MLHVCQUFBO0VlN1RKOztFRC9FRTtJZGdaRSx1QkFBQTtFZTdUSjtFZnlGUztJQXVPTCxzQkFBQTtFZTdUSjtBQUNGO0FDbkdJO0VBQ0UsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMEJBQUE7QUNiTjtBRGdCSTtFQUNFLDJCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QWpCa0dJO0VnQmxIQTtJQUNFLDZCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDBCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDJCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKO0FBQ0Y7QWpCZ0VJO0VnQmxIQTtJQUNFLDZCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDBCQUFBO0VDcURKOztFRGxERTtJQUNFLDJCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKO0FBQ0Y7QWpCK0JJO0VnQmxIQTtJQUNFLDZCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDBCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDJCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKO0FBQ0Y7QWpCRkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7QUFDRjtBQ3JKSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0EscUNBQUE7QUNiTjtBbkJtSEk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ0dKO0FBQ0Y7QW5Ca0dJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUJKO0FBQ0Y7QW5Ca0ZJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUNKO0FBQ0Y7QW5Ca0VJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21ESjs7RURoREU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbURKO0FBQ0Y7QUN0RUE7RUFDRSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSw2QkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSwyQkFBQTtBQ1BGO0FEY0E7RUFDRSwwQkFBQTtBQ1hGO0FEY0E7RUFDRSw0QkFBQTtBQ1hGO0FEY0E7RUFDRSxrQ0FBQTtBQ1hGO0FEa0JBO0VBQ0Usc0NBQUE7QUNmRjtBRGtCQTtFQUNFLGtDQUFBO0FDZkY7QURrQkE7RUFDRSxvQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjtBRGtCQTtFQUNFLHlDQUFBO0FDZkY7QURrQkE7RUFDRSx3Q0FBQTtBQ2ZGO0FEc0JBO0VBQ0Usa0NBQUE7QUNuQkY7QURzQkE7RUFDRSw4QkFBQTtBQ25CRjtBRHNCQTtFQUNFLGdDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsK0JBQUE7QUNuQkY7QURzQkE7RUFDRSxnQ0FBQTtBQ25CRjtBeEIzQ0E7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0F5QlhGO0F6QmFBOzs7RUFHRSx5QkFBQTtBeUJWRjtBekJhQTs7O0VBR0UsdUJBQUE7QXlCVkY7QXpCYUE7O0VBRUUsNkNBQUE7QXlCVkY7QXpCYUE7RUFDRSxXQUFBO0F5QlZGO0F6QmFBOzs7RUFHRSxpQkFBQTtBeUJWRjtBQW5EQTtFQUNFLCtDQUFBO0VBQ0EsK0J6QjRCUTtFeUIxQlIsa0JBQUE7QUFxREY7QUFuREE7RUFDRSxrQkFBQTtBQXNERjtBQXBEQTtFQUNFLFdBQUE7RUFDQSw4RkFBQTtFQUtBLGtDQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFtREY7QUFqREE7RUFDRSxTQUFBO0FBb0RGO0FBbkRFO0VBQ0Usa0JBQUE7QUFxREo7QUFqREU7RUFDRSxrQkFBQTtBQW9ESjtBQXpDQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSwwQkFBQTtFQUVBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQTRDRjtBQXpDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBNENGO0FBekNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUE0Q0Y7QUF6Q0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQTRDRjtBQXpDQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBNENGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIENTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0IENTUy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcbiAqL1xuXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG4vLyAkY29sb3ItcHJtYXJ5OnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICRjb2xvci13YXJuOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuXG4vLyBAaW1wb3J0IFwiLi90aGVtZS9saWdodC5zY3NzXCI7XG5cbiRwcmltYXJ5OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4kZGFuZ2VyOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2JnLmpwZWdcIikgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyAxMDB2aDtcbn1cbmlvbi1pdGVtLFxuaW9uLXRvb2xiYXIsXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjZmZmZmZmNzQ7XG59XG5tYXQtY2FyZCxcbm1hdC1saXN0ICxcbmlvbi1saXN0e1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZmZmZjc0O1xufVxuLm1hdC10YWJsZSwuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQsXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQgICB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY3NDtcbn1cblxuLmZ1bGx3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWxhYmVsLFxuLml0ZW0uc2MtaW9uLWxhYmVsLW1kLWgsXG4uaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzXCI7XG5AaW1wb3J0IFwiLi4vY29tcG9uZW50cy9tZW51L21lbnUubWQudmFyc1wiO1xuXG4vLyBJb25pYyBGb250IEZhbWlseVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaHRtbC5pb3Mge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIFRPRE86IEJsb2NrIHNjcm9sbGluZyBpbiBpb24tY29udGVudCwgYnJlYWtzIGluc2lkZSBpb24tbW9kYWxcbi8vIGJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIC5pb24tcGFnZSA+IGlvbi1jb250ZW50IHtcbi8vICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyBNb2RhbCAtIENhcmQgU3R5bGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cblxuLyoqXG4gKiBTdWJzZXF1ZW50IG1vZGFscyBzaG91bGQgbm90IGhhdmUgYSBiYWNrZHJvcC9ib3ggc2hhZG93XG4gKiBhcyBpdCB3aWxsIGNhdXNlIHRoZSBzY3JlZW4gdG8gYXBwZWFyIHRvIGdldCBwcm9ncmVzc2l2ZWx5XG4gKiBkYXJrZXIuIFdpdGggSW9uaWMgNiwgZGVjbGFyYXRpdmUgbW9kYWxzIG1hZGUgaXRcbiAqIHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgbm9uLXByZXNlbnRlZCBtb2RhbHMgaW4gdGhlIERPTSxcbiAqIHNvIHdlIGNvdWxkIG5vIGxvbmdlciByZWx5IG9uIGlvbi1tb2RhbDpmaXJzdC1vZi10eXBlLlxuICogSGVyZSB3ZSBkaXNhYmxlIHRoZSBvcGFjaXR5L2JveC1zaGFkb3cgZm9yIGV2ZXJ5IG1vZGFsXG4gKiB0aGF0IGNvbWVzIGFmdGVyIHRoZSBmaXJzdCBwcmVzZW50ZWQgbW9kYWwuXG4gKlxuICogTm90ZTogaW9uLW1vZGFsOm5vdCgub3ZlcmxheS1oaWRkZW4pOmZpcnN0LW9mLXR5cGVcbiAqIGRvZXMgbm90IG1hdGNoIHRoZSBmaXJzdCBtb2RhbCB0byBub3QgaGF2ZVxuICogdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcywgaXQgd2lsbCBtYXRjaCB0aGVcbiAqIGZpcnN0IG1vZGFsIGluIGdlbmVyYWwgb25seSBpZiBpdCBkb2VzIG5vdFxuICogaGF2ZSB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLlxuICogVGhlIDpudGgtY2hpbGQoKSBwc2V1ZG8tY2xhc3MgaGFzIHN1cHBvcnRcbiAqIGZvciBzZWxlY3RvcnMgd2hpY2ggd291bGQgaGVscCB1cyBoZXJlLiBBdCB0aGVcbiAqIHRpbWUgb2Ygd3JpdGluZyBpdCBkb2VzIG5vdCBoYXZlIGdyZWF0IGNyb3NzIGJyb3dzZXJcbiAqIHN1cHBvcnQuXG4gKlxuICogTm90ZSAyOiBUaGlzIHNob3VsZCBvbmx5IGFwcGx5IHRvIG5vbi1jYXJkIGFuZFxuICogbm9uLXNoZWV0IG1vZGFscy4gQ2FyZCBhbmQgc2hlZXQgbW9kYWxzIGhhdmUgdGhlaXJcbiAqIG93biBjcml0ZXJpYSBmb3IgZGlzcGxheWluZyBiYWNrZHJvcHMvYm94IHNoYWRvd3MuXG4gKi9cbmlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0Om5vdCgub3ZlcmxheS1oaWRkZW4pIH4gaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyoqXG4gKiBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBXZWJLaXQgd2hlcmUgdGhlXG4gKiBjb250ZW50IHdpbGwgb3ZlcmZsb3cgb3V0c2lkZSBvZiB0aGUgYm90dG9tIGJvcmRlclxuICogcmFkaXVzIHdoZW4gcmUtcGFpbnRpbmcuIEFzIGxvbmcgYXMgYSBzaW5nbGVcbiAqIGJvcmRlciByYWRpdXMgdmFsdWUgaXMgc2V0IG9uIC5pb24tcGFnZSwgdGhpc1xuICogaXNzdWUgZG9lcyBub3QgaGFwcGVuLiBXZSBzZXQgdGhlIHRvcCBsZWZ0IHJhZGl1c1xuICogaGVyZSBiZWNhdXNlIHRoZSB0b3AgbGVmdCBjb3JuZXIgd2lsbCBhbHdheXMgaGF2ZSBhXG4gKiByYWRpdXMgbm8gbWF0dGVyIHRoZSBwbGF0Zm9ybS5cbiAqIFRoaXMgYmVoYXZpb3Igb25seSBhcHBsaWVzIHRvIGNhcmQgbW9kYWxzLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2Uge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLy8gSW9uaWMgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4vLyBjb2xvcnMgbWFwXG5cbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSkge1xuICAkdmFsdWU6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuXG4gICRiYXNlOiBtYXAtZ2V0KCR2YWx1ZSwgYmFzZSk7XG4gICRjb250cmFzdDogbWFwLWdldCgkdmFsdWUsIGNvbnRyYXN0KTtcbiAgJHNoYWRlOiBtYXAtZ2V0KCR2YWx1ZSwgc2hhZGUpO1xuICAkdGludDogbWFwLWdldCgkdmFsdWUsIHRpbnQpO1xuXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSwgI3skYmFzZX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiLCAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QsICN7JGNvbnRyYXN0fSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiLCAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlLCAjeyRzaGFkZX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50LCAjeyR0aW50fSkgIWltcG9ydGFudDtcbn1cblxuQGVhY2ggJGNvbG9yLW5hbWUsICR2YWx1ZSBpbiAkY29sb3JzIHtcbiAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUpO1xuICB9XG59XG5cblxuLy8gUGFnZSBDb250YWluZXIgU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLXBhZ2Uge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAkei1pbmRleC1wYWdlLWNvbnRhaW5lcjtcbn1cblxuLyoqXG4gKiBXaGVuIG1ha2luZyBjdXN0b20gZGlhbG9ncywgdXNpbmdcbiAqIGlvbi1jb250ZW50IGlzIG5vdCByZXF1aXJlZC4gQXMgYSByZXN1bHQsXG4gKiBzb21lIGRldmVsb3BlcnMgbWF5IHdpc2ggdG8gaGF2ZSBkaWFsb2dzXG4gKiB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IHNpemVkIGJ5IHRoZSBicm93c2VyLlxuICogVGhlc2UgY2hhbmdlcyBhbGxvdyBjZXJ0YWluIGRpbWVuc2lvbiB2YWx1ZXNcbiAqIHN1Y2ggYXMgZml0LWNvbnRlbnQgdG8gd29yayBjb3JyZWN0bHkuXG4gKi9cbmlvbi1tb2RhbCAuaW9uLXBhZ2U6bm90KGlvbi1uYXYgLmlvbi1wYWdlKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBjb250YWluOiBsYXlvdXQgc3R5bGU7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8vIElvbmljIFNhZmUgTWFyZ2luc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsIGh0bWwucGx0LWlvcy5wbHQtcHdhIHtcbiAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgb25jZSBTYWZhcmkgMTEuMiBpcyBubyBsb25nZXIgc3VwcG9ydGVkXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cblxuLy8gR2xvYmFsIENhcmQgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuXG4vLyBNZW51IFN0eWxlc1xuLy8gVE9ETzogRmluZCBhIGJldHRlciBsb25nIHRlcm0gc29sdXRpb24gZm9yIHRoaXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5tZW51LWNvbnRlbnQge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoMCwgMCwgMCkpO1xufVxuXG4ubWVudS1jb250ZW50LW9wZW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXG4gIC8vIHRoZSBjb250YWluaW5nIGVsZW1lbnQgaXRzZWxmIHNob3VsZCBiZSBjbGlja2FibGUgYnV0XG4gIC8vIGV2ZXJ5dGhpbmcgaW5zaWRlIG9mIGl0IHNob3VsZCBub3QgY2xpY2thYmxlIHdoZW4gbWVudSBpcyBvcGVuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsLXJ0bDtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiAkbWVudS1pb3MtYm94LXNoYWRvdy1wdXNoO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAkbWVudS1tZC1ib3gtc2hhZG93O1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLy8gQWNjb3JkaW9uIFN0eWxlc1xuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5pb24tYWNjb3JkaW9uLWdyb3VwID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWFuaW1hdGVkID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2l0aW9uOiAzMDBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaW9uLWFjY29yZGlvbiAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4vKipcbiAqIFRoZSA+IFtzbG90PVwiaGVhZGVyXCJdIHNlbGVjdG9yIGVuc3VyZXMgdGhhdCB3ZSBkb1xuICogbm90IG1vZGlmeSB0b2dnbGUgaWNvbnMgZm9yIGFueSBuZXN0ZWQgYWNjb3JkaW9ucy4gVGhlIHN0YXRlXG4gKiBvZiBvbmUgYWNjb3JkaW9uIHNob3VsZCBub3QgYWZmZWN0IGFueSBhY2NvcmRpb25zIGluc2lkZVxuICogb2YgYSBuZXN0ZWQgYWNjb3JkaW9uIGdyb3VwLlxuICovXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgPiBbc2xvdD1cImhlYWRlclwiXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbixcbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1wcmV2aW91cyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nOmZpcnN0LW9mLXR5cGUsXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLy8gU2FmYXJpL2lPUyAxNSBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIGlucHV0W3R5cGU9XCJkYXRlXCJdLlxuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZyb20gSW9uaWMgNS9TYWZhcmkgMTQgZGVzaWducyxcbi8vIHdlIG92ZXJyaWRlIHRoZSBhcHBlYXJhbmNlIG9ubHkgd2hlbiB1c2luZyB3aXRoaW4gYW4gaW9uLWlucHV0LlxuaW9uLWlucHV0IGlucHV0Ojotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLyoqXG4gKiBUaGUgLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSBjbGFzcyBjb250YWluc1xuICogc3R5bGVzIHRoYXQgYWxsb3cgYW55IG1vZGFsL3BvcG92ZXIgdG8gYmVcbiAqIHNpemVkIGFjY29yZGluZyB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZGF0ZXRpbWVcbiAqIHdoZW4gdXNlZCB3aXRoIGlvbi1kYXRldGltZS1idXR0b24uXG4gKi9cbi5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkge1xuICAtLXdpZHRoOiBmaXQtY29udGVudDtcbiAgLS1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4vKipcbiAqIFRoZSBncmlkIHZhcmlhbnQgY2FuIHNjYWxlIGRvd24gd2hlbiBpbmxpbmUuXG4gKiBXaGVuIHVzZWQgaW4gYSBgZml0LWNvbnRlbnRgIG92ZXJsYXksIHRoaXMgY2F1c2VzXG4gKiB0aGUgb3ZlcmxheSB0byBzaHJpbmsgd2hlbiB0aGUgbW9udGgveWVhciBwaWNrZXIgaXMgb3Blbi5cbiAqIEV4cGxpY2l0bHkgc2V0dGluZyB0aGUgZGltZW5zaW9ucyBsZXRzIHVzIGhhdmUgYSBjb25zaXN0ZW50bHlcbiAqIHNpemVkIGdyaWQgaW50ZXJmYWNlLlxuICovXG4uaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IGlvbi1kYXRldGltZS5kYXRldGltZS1ncmlkIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbn1cbiIsImh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4gKiB0b3Agb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuICogdGhlIGZpcnN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiAqIEZvb3RlciBhbHNvIG5lZWRzIHRoaXMuIFdlIGRvIG5vdCBhZGp1c3QgdGhlIGJvdHRvbVxuICogcGFkZGluZyB0aG91Z2ggYmVjYXVzZSBvZiB0aGUgc2FmZSBhcmVhLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi1mb290ZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi8qKlxuKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiogYm90dG9tIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiogdGhlIGxhc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLyoqXG4qIEFkZCBwYWRkaW5nIG9uIHRoZSBsZWZ0IGFuZCByaWdodFxuKiBvZiB0b29sYmFycyB3aGlsZSBhY2NvdW50aW5nIGZvclxuKiBzYWZlIGFyZWEgdmFsdWVzIHdoZW4gaW4gbGFuZHNjYXBlLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyA4cHgpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArIDhweCk7XG59XG5cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBvbiBpUGFkT1NcbiAqIHNob3VsZCBvbmx5IGhhdmUgYmFja2Ryb3Agb24gZmlyc3QgaW5zdGFuY2UuXG4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkOmZpcnN0LW9mLXR5cGUge1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogMC4xODtcbiAgfVxufVxuLyoqXG4gKiBTdWJzZXF1ZW50IG1vZGFscyBzaG91bGQgbm90IGhhdmUgYSBiYWNrZHJvcC9ib3ggc2hhZG93XG4gKiBhcyBpdCB3aWxsIGNhdXNlIHRoZSBzY3JlZW4gdG8gYXBwZWFyIHRvIGdldCBwcm9ncmVzc2l2ZWx5XG4gKiBkYXJrZXIuIFdpdGggSW9uaWMgNiwgZGVjbGFyYXRpdmUgbW9kYWxzIG1hZGUgaXRcbiAqIHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgbm9uLXByZXNlbnRlZCBtb2RhbHMgaW4gdGhlIERPTSxcbiAqIHNvIHdlIGNvdWxkIG5vIGxvbmdlciByZWx5IG9uIGlvbi1tb2RhbDpmaXJzdC1vZi10eXBlLlxuICogSGVyZSB3ZSBkaXNhYmxlIHRoZSBvcGFjaXR5L2JveC1zaGFkb3cgZm9yIGV2ZXJ5IG1vZGFsXG4gKiB0aGF0IGNvbWVzIGFmdGVyIHRoZSBmaXJzdCBwcmVzZW50ZWQgbW9kYWwuXG4gKlxuICogTm90ZTogaW9uLW1vZGFsOm5vdCgub3ZlcmxheS1oaWRkZW4pOmZpcnN0LW9mLXR5cGVcbiAqIGRvZXMgbm90IG1hdGNoIHRoZSBmaXJzdCBtb2RhbCB0byBub3QgaGF2ZVxuICogdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcywgaXQgd2lsbCBtYXRjaCB0aGVcbiAqIGZpcnN0IG1vZGFsIGluIGdlbmVyYWwgb25seSBpZiBpdCBkb2VzIG5vdFxuICogaGF2ZSB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLlxuICogVGhlIDpudGgtY2hpbGQoKSBwc2V1ZG8tY2xhc3MgaGFzIHN1cHBvcnRcbiAqIGZvciBzZWxlY3RvcnMgd2hpY2ggd291bGQgaGVscCB1cyBoZXJlLiBBdCB0aGVcbiAqIHRpbWUgb2Ygd3JpdGluZyBpdCBkb2VzIG5vdCBoYXZlIGdyZWF0IGNyb3NzIGJyb3dzZXJcbiAqIHN1cHBvcnQuXG4gKlxuICogTm90ZSAyOiBUaGlzIHNob3VsZCBvbmx5IGFwcGx5IHRvIG5vbi1jYXJkIGFuZFxuICogbm9uLXNoZWV0IG1vZGFscy4gQ2FyZCBhbmQgc2hlZXQgbW9kYWxzIGhhdmUgdGhlaXJcbiAqIG93biBjcml0ZXJpYSBmb3IgZGlzcGxheWluZyBiYWNrZHJvcHMvYm94IHNoYWRvd3MuXG4gKi9cbmlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0Om5vdCgub3ZlcmxheS1oaWRkZW4pIH4gaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyoqXG4gKiBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBXZWJLaXQgd2hlcmUgdGhlXG4gKiBjb250ZW50IHdpbGwgb3ZlcmZsb3cgb3V0c2lkZSBvZiB0aGUgYm90dG9tIGJvcmRlclxuICogcmFkaXVzIHdoZW4gcmUtcGFpbnRpbmcuIEFzIGxvbmcgYXMgYSBzaW5nbGVcbiAqIGJvcmRlciByYWRpdXMgdmFsdWUgaXMgc2V0IG9uIC5pb24tcGFnZSwgdGhpc1xuICogaXNzdWUgZG9lcyBub3QgaGFwcGVuLiBXZSBzZXQgdGhlIHRvcCBsZWZ0IHJhZGl1c1xuICogaGVyZSBiZWNhdXNlIHRoZSB0b3AgbGVmdCBjb3JuZXIgd2lsbCBhbHdheXMgaGF2ZSBhXG4gKiByYWRpdXMgbm8gbWF0dGVyIHRoZSBwbGF0Zm9ybS5cbiAqIFRoaXMgYmVoYXZpb3Igb25seSBhcHBsaWVzIHRvIGNhcmQgbW9kYWxzLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2Uge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMzZGMyZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgNjEsIDE5NCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMzNmFiZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzUwYzhmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci10ZXJ0aWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzUyNjBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDgyLCA5NiwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM0ODU0ZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjNjM3MGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzJkZDM2ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgNDUsIDIxMSwgMTExKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMyOGJhNjIpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itd2FybmluZyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjNDA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiLCAyNTUsIDE5NiwgOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBhYzA4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy10aW50LCAjZmZjYTIyKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhbmdlciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNlYjQ0NWEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjM1LCA2OCwgOTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2NmM2M0ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50LCAjZWQ1NzZiKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1tZWRpdW0ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE0NiwgMTQ4LCAxNTYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzgwODI4OSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjOWQ5ZmE2KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhcmsge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsIDM2LCA0MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCAjMzgzYTNlKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2Uge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbn1cblxuLyoqXG4gKiBXaGVuIG1ha2luZyBjdXN0b20gZGlhbG9ncywgdXNpbmdcbiAqIGlvbi1jb250ZW50IGlzIG5vdCByZXF1aXJlZC4gQXMgYSByZXN1bHQsXG4gKiBzb21lIGRldmVsb3BlcnMgbWF5IHdpc2ggdG8gaGF2ZSBkaWFsb2dzXG4gKiB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IHNpemVkIGJ5IHRoZSBicm93c2VyLlxuICogVGhlc2UgY2hhbmdlcyBhbGxvdyBjZXJ0YWluIGRpbWVuc2lvbiB2YWx1ZXNcbiAqIHN1Y2ggYXMgZml0LWNvbnRlbnQgdG8gd29yayBjb3JyZWN0bHkuXG4gKi9cbmlvbi1tb2RhbCAuaW9uLXBhZ2U6bm90KGlvbi1uYXYgLmlvbi1wYWdlKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29udGFpbjogbGF5b3V0IHN0eWxlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgIDAsICAwKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tYW5pbWF0ZWQgPiBbc2xvdD1oZWFkZXJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbixcbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLXByZXZpb3VzIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qKlxuICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAqIHN0eWxlcyB0aGF0IGFsbG93IGFueSBtb2RhbC9wb3BvdmVyIHRvIGJlXG4gKiBzaXplZCBhY2NvcmRpbmcgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRhdGV0aW1lXG4gKiB3aGVuIHVzZWQgd2l0aCBpb24tZGF0ZXRpbWUtYnV0dG9uLlxuICovXG4uaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IHtcbiAgLS13aWR0aDogZml0LWNvbnRlbnQ7XG4gIC0taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLyoqXG4gKiBUaGUgZ3JpZCB2YXJpYW50IGNhbiBzY2FsZSBkb3duIHdoZW4gaW5saW5lLlxuICogV2hlbiB1c2VkIGluIGEgYGZpdC1jb250ZW50YCBvdmVybGF5LCB0aGlzIGNhdXNlc1xuICogdGhlIG92ZXJsYXkgdG8gc2hyaW5rIHdoZW4gdGhlIG1vbnRoL3llYXIgcGlja2VyIGlzIG9wZW4uXG4gKiBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIGRpbWVuc2lvbnMgbGV0cyB1cyBoYXZlIGEgY29uc2lzdGVudGx5XG4gKiBzaXplZCBncmlkIGludGVyZmFjZS5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSBpb24tZGF0ZXRpbWUuZGF0ZXRpbWUtZ3JpZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMzIwcHg7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4vaW9uaWMuZGVwcmVjYXRpb25cIjtcblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iLCJcbi8vIEdsb2JhbCBVdGlsaXR5IEZ1bmN0aW9uc1xuQGltcG9ydCBcIi4vaW9uaWMuZnVuY3Rpb25zLnN0cmluZ1wiO1xuXG4vLyBHbG9iYWwgQ29sb3IgRnVuY3Rpb25zXG5AaW1wb3J0IFwiLi9pb25pYy5mdW5jdGlvbnMuY29sb3JcIjtcblxuLy8gR2xvYmFsIE1peGluc1xuQGltcG9ydCBcIi4vaW9uaWMubWl4aW5zXCI7XG5cbi8vIERlZmF1bHQgVGhlbWVcbkBpbXBvcnQgXCIuL2lvbmljLnRoZW1lLmRlZmF1bHRcIjtcblxuXG4vLyBEZWZhdWx0IEdlbmVyYWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAgICAgICB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgYXBwIGRpcmVjdGlvblxuJGFwcC1kaXJlY3Rpb246IG51bGwgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBmb250IHBhdGhcbiRmb250LXBhdGg6IFwiL2Rpc3QvZm9udHNcIiAhZGVmYXVsdDtcblxuLy8gSGFpcmxpbmVzIHdpZHRoXG4kaGFpcmxpbmVzLXdpZHRoOiAuNTVweCAhZGVmYXVsdDtcblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBaLUluZGV4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR3JvdXBlZCBieSBlbGVtZW50cyB3aGljaCB3b3VsZCBiZSBzaWJsaW5nc1xuXG4kei1pbmRleC1tZW51LW92ZXJsYXk6ICAgICAgICAgICAxMDAwO1xuJHotaW5kZXgtb3ZlcmxheTogICAgICAgICAgICAgICAgMTAwMTtcbiR6LWluZGV4LWNsaWNrLWJsb2NrOiAgICAgICAgICAgIDk5OTk5O1xuXG4kei1pbmRleC1maXhlZC1jb250ZW50OiAgICAgICAgICA5OTk7XG4kei1pbmRleC1zY3JvbGwtY29udGVudDogICAgICAgICAxO1xuJHotaW5kZXgtcmVmcmVzaGVyOiAgICAgICAgICAgICAgLTE7XG5cbiR6LWluZGV4LXBhZ2UtY29udGFpbmVyOiAgICAgICAgIDA7XG4kei1pbmRleC10b29sYmFyOiAgICAgICAgICAgICAgICAxMDtcbiR6LWluZGV4LXRvb2xiYXItYmFja2dyb3VuZDogICAgIC0xO1xuJHotaW5kZXgtdG9vbGJhci1idXR0b25zOiAgICAgICAgOTk7XG5cbiR6LWluZGV4LWJhY2tkcm9wOiAgICAgICAgICAgICAgIDI7XG4kei1pbmRleC1vdmVybGF5LXdyYXBwZXI6ICAgICAgICAxMDtcblxuJHotaW5kZXgtaXRlbS1vcHRpb25zOiAgICAgICAgICAgMTtcbiR6LWluZGV4LWl0ZW0taW5wdXQ6ICAgICAgICAgICAgIDI7XG4kei1pbmRleC1pdGVtLWRpdmlkZXI6ICAgICAgICAgICAxMDA7XG5cbiR6LWluZGV4LXJlb3JkZXItc2VsZWN0ZWQ6ICAgICAgIDEwMDtcbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZXMvaW9uaWMuZ2xvYmFscy5pb3NcIjtcblxuLy8gaU9TIE1lbnVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vLyBAcHJvcCAtIEJhY2tncm91bmQgb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1iYWNrZ3JvdW5kOiAgICAgICAgICAgICRiYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IGNvbG9yIG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvcjogICAgICByZ2JhKDAsIDAsIDAsIC4wOCkgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93OiAgICAgICAgICAgIC04cHggMCA0MnB4ICRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51IGluIHJ0bCBtb2RlXG4kbWVudS1pb3MtYm94LXNoYWRvdy1ydGw6ICAgICAgICA4cHggMCA0MnB4ICRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSByZXZlYWwgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsOiAgICAgJG1lbnUtaW9zLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHJldmVhbCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1yZXZlYWwtcnRsOiAkbWVudS1pb3MtYm94LXNoYWRvdy1ydGwgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHB1c2ggbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDogICAgICAgbnVsbCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgb3ZlcmxheSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1vdmVybGF5OiAgICBudWxsICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lcy9pb25pYy5nbG9iYWxzLm1kXCI7XG5cbi8vIE1hdGVyaWFsIERlc2lnbiBNZW51XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBCYWNrZ3JvdW5kIG9mIHRoZSBtZW51XG4kbWVudS1tZC1iYWNrZ3JvdW5kOiAgICAgICAgICAgICRiYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51XG4kbWVudS1tZC1ib3gtc2hhZG93OiAgICAgICAgICAgIDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpICFkZWZhdWx0O1xuIiwiLy8gISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3NcblxuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAxLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8vIDFcbn1cblxuLy8gUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbi8vIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuXG4gIGhlaWdodDogMDtcbn1cblxuXG4vLyBUZXh0LWxldmVsIHNlbWFudGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbn1cblxuLy8gQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLy8gR3JvdXBpbmcgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuXG4gIGJvcmRlci13aWR0aDogMDtcblxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLy8gQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy8gQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5cbi8vIEZvcm1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuLy8gc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxuXG4vLyAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbi8vIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIGhlaWdodDogYXV0bztcblxuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwOyAvLyAzXG5cbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBjb2xvcjogaW5oZXJpdDsgLy8gMVxufVxuXG4vLyAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuLy8gICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4vLyAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4vLyAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuLy8gICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvLyAxXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyOyAvLyAzXG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcbn1cblxuLy8gcmVtb3ZlIDMwMG1zIGRlbGF5XG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbn1cblxuLy8gRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbi8vIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXG4vLyAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgcGFkZGluZzogMDsgLy8gMlxuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIDFcbn1cblxuLy8gRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbi8vIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXG4vLyBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXG4vLyBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXG4vLyBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuXG4vLyBUYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cblxuLy8gUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCJhdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBzdHJ1Y3R1cmFsIGNzcyB0byB0aGUgbmF0aXZlIGh0bWwgZWxlbWVudHNcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwuaW9uLWNlIGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIEBpbmNsdWRlIGZvbnQtc21vb3RoaW5nKCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gIC8qKlxuICAgKiBCZWNhdXNlIGJvZHkgaGFzIHBvc2l0aW9uOiBmaXhlZCxcbiAgICogaXQgc2hvdWxkIGJlIHByb21vdGVkIHRvIGl0cyBvd25cbiAgICogbGF5ZXIuXG4gICAqXG4gICAqIFdlYktpdCBkb2VzIG5vdCBhbHdheXMgcHJvbW90ZVxuICAgKiB0aGUgYm9keSB0byBpdHMgb3duIGxheWVyIG9uIHBhZ2VcbiAgICogbG9hZCBpbiBJb25pYyBhcHBzLiBPbmNlIHNjcm9sbGluZyBvblxuICAgKiBpb24tY29udGVudCBzdGFydHMsIFdlYktpdCB3aWxsIHByb21vdGVcbiAgICogYm9keS4gVW5mb3J0dW5hdGVseSwgdGhpcyBjYXVzZXMgYSByZS1wYWludFxuICAgKiB3aGljaCByZXN1bHRzIGluIHNjcm9sbGluZyBiZWluZyBoYWx0ZWRcbiAgICogdW50aWwgdGhlIG5leHQgdXNlciBnZXN0dXJlLlxuICAgKlxuICAgKiBUaGlzIGltcGFjdHMgdGhlIEN1c3RvbSBFbGVtZW50cyBidWlsZC5cbiAgICogVGhlIGxhenkgbG9hZGVkIGJ1aWxkIGNhdXNlcyB0aGUgYnJvd3NlciB0b1xuICAgKiByZS1wYWludCBkdXJpbmcgaHlkcmF0aW9uIHdoaWNoIGNhdXNlcyBXZWJLaXRcbiAgICogdG8gcHJvbW90ZSBib2R5IHRvIGl0cyBvd24gbGF5ZXIuXG4gICAqIEluIHRoZSBDRSBCdWlsZCwgdGhpcyBoeWRyYXRpb24gZG9lcyBub3RcbiAgICogaGFwcGVuLCBzbyB0aGUgYWRkaXRpb25hbCByZS1wYWludCBkb2VzIG5vdCBvY2N1ci5cbiAgICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG5cbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcblxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLmlvbi1jZSBib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAvKipcbiAgICogQmVjYXVzZSBib2R5IGhhcyBwb3NpdGlvbjogZml4ZWQsXG4gICAqIGl0IHNob3VsZCBiZSBwcm9tb3RlZCB0byBpdHMgb3duXG4gICAqIGxheWVyLlxuICAgKlxuICAgKiBXZWJLaXQgZG9lcyBub3QgYWx3YXlzIHByb21vdGVcbiAgICogdGhlIGJvZHkgdG8gaXRzIG93biBsYXllciBvbiBwYWdlXG4gICAqIGxvYWQgaW4gSW9uaWMgYXBwcy4gT25jZSBzY3JvbGxpbmcgb25cbiAgICogaW9uLWNvbnRlbnQgc3RhcnRzLCBXZWJLaXQgd2lsbCBwcm9tb3RlXG4gICAqIGJvZHkuIFVuZm9ydHVuYXRlbHksIHRoaXMgY2F1c2VzIGEgcmUtcGFpbnRcbiAgICogd2hpY2ggcmVzdWx0cyBpbiBzY3JvbGxpbmcgYmVpbmcgaGFsdGVkXG4gICAqIHVudGlsIHRoZSBuZXh0IHVzZXIgZ2VzdHVyZS5cbiAgICpcbiAgICogVGhpcyBpbXBhY3RzIHRoZSBDdXN0b20gRWxlbWVudHMgYnVpbGQuXG4gICAqIFRoZSBsYXp5IGxvYWRlZCBidWlsZCBjYXVzZXMgdGhlIGJyb3dzZXIgdG9cbiAgICogcmUtcGFpbnQgZHVyaW5nIGh5ZHJhdGlvbiB3aGljaCBjYXVzZXMgV2ViS2l0XG4gICAqIHRvIHByb21vdGUgYm9keSB0byBpdHMgb3duIGxheWVyLlxuICAgKiBJbiB0aGUgQ0UgQnVpbGQsIHRoaXMgaHlkcmF0aW9uIGRvZXMgbm90XG4gICAqIGhhcHBlbiwgc28gdGhlIGFkZGl0aW9uYWwgcmUtcGFpbnQgZG9lcyBub3Qgb2NjdXIuXG4gICAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBGb250IHdlaWdodCBvZiBhbGwgaGVhZGluZ3NcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICA1MDAgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIExpbmUgaGVpZ2h0IG9mIGFsbCBoZWFkaW5nc1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgIDEuMiAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgMVxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDI2cHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDJcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyNHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAzXG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjJweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNFxuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDVcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA2XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpb24tY29sb3IocHJpbWFyeSwgYmFzZSk7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIEBpbmNsdWRlIG1hcmdpbigxNnB4LCBudWxsLCAxMHB4LCBudWxsKTtcblxuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuXG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG59XG5cbmgxIHtcbiAgQGluY2x1ZGUgbWFyZ2luKDIwcHgsIG51bGwsIG51bGwsIG51bGwpO1xuXG4gIGZvbnQtc2l6ZTogJGgxLWZvbnQtc2l6ZTtcbn1cblxuaDIge1xuICBAaW5jbHVkZSBtYXJnaW4oMThweCwgbnVsbCwgbnVsbCwgbnVsbCk7XG5cbiAgZm9udC1zaXplOiAkaDItZm9udC1zaXplO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogJGgzLWZvbnQtc2l6ZTtcbn1cblxuaDQge1xuICBmb250LXNpemU6ICRoNC1mb250LXNpemU7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAkaDUtZm9udC1zaXplO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogJGg2LWZvbnQtc2l6ZTtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGZvbnQtc2l6ZTogNzUlO1xuXG4gIGxpbmUtaGVpZ2h0OiAwO1xuXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtLjI1ZW07XG59XG4iLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBEaXNwbGF5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kaWZpZXMgZGlzcGxheSBvZiBhIHBhcnRpY3VsYXIgZWxlbWVudCBiYXNlZCBvbiB0aGUgZ2l2ZW4gY2xhc3Nlc1xuXG4uaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZHMgaGlkZGVuIGNsYXNzZXNcbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgaW9uLWhpZGUte2JwfS11cGAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tdXAge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYGlvbi1oaWRlLXticH0tZG93bmAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tZG93biB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS11cCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLWRvd24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5pb24taGlkZS1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5pb24taGlkZS1tZC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5pb24taGlkZS1sZy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXhsLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gRWxlbWVudCBTcGFjZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgcGFkZGluZyBhbmQgbWFyZ2luIGF0dHJpYnV0ZXMgdG8gYmUgdXNlZCBvblxuLy8gYW55IGVsZW1lbnRcblxuJHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuXG4vLyBQYWRkaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcsIG51bGwsIG51bGwsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwobnVsbCwgJHBhZGRpbmcpO1xufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZyhudWxsLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRwYWRkaW5nKTtcbn1cblxuXG4vLyBNYXJnaW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luKTtcbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCBudWxsLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsICRtYXJnaW4pO1xufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKG51bGwsIG51bGwsICRtYXJnaW4sIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCAkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJG1hcmdpbik7XG59IiwiLmlvbi1uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1zdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1zdGFydCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1lbmQge1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW5vLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLXRvcCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWVuZCB7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1lbmQge1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIEZsb2F0IEVsZW1lbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBmbG9hdCBjbGFzc2VzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi1mbG9hdC17YnB9LXtzaWRlfWAgY2xhc3NlcyBmb3IgZmxvYXRpbmcgdGhlIGVsZW1lbnQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludCBhbmQgc2lkZVxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tbGVmdCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChsZWZ0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LXJpZ2h0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KHJpZ2h0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LXN0YXJ0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KHN0YXJ0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LWVuZCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChlbmQsICFpbXBvcnRhbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi1mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1mbG9hdC1zbS1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWZsb2F0LW1kLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tZmxvYXQtbGctbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tZmxvYXQteGwtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0LWVsZW1lbnRzLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFRleHQgQWxpZ25tZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyB0ZXh0IGFsaWdubWVudCBhdHRyaWJ1dGVzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi10ZXh0LXticH1gIGNsYXNzZXMgZm9yIGFsaWduaW5nIHRoZSB0ZXh0IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1qdXN0aWZ5IHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tc3RhcnQge1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tZW5kIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbm93cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0td3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtYWxpZ25tZW50LmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFRleHQgVHJhbnNmb3JtYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHRleHQgdHJhbnNmb3JtIGF0dHJpYnV0ZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLXRleHQte2JwfWAgY2xhc3NlcyBmb3IgdHJhbnNmb3JtaW5nIHRoZSB0ZXh0IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tdXBwZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbG93ZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tY2FwaXRhbGl6ZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbG93ZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xuIiwiLy8gRmxleCBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGZsZXggY2xhc3NlcyB0byBhbGlnbiBmbGV4IGNvbnRhaW5lcnNcbi8vIGFuZCBpdGVtc1xuXG4vLyBBbGlnbiBTZWxmXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuXG4vLyBGbGV4IFdyYXBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24td3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuXG4vLyBKdXN0aWZ5IENvbnRlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEFsaWduIEl0ZW1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cbiIsIi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vZ2xvYmFsLnNjc3NcIjtcblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJHByaW1hcnk7XG4gIGNvbG9yOiAkcHJpbWFyeTtcblxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnVoZWFkZXIge1xuICBoZWlnaHQ6IDMxJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcbiAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJVxuICApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMThkZWcpO1xuICBtYXJnaW4tbGVmdDogLTIlO1xuICBtYXJnaW4tdG9wOiAtMzklO1xuICBtYXJnaW4tYm90dG9tOiAzNCU7XG4gIHdpZHRoOiAxNTAlO1xufVxuLm1lbnVMaXN0IHtcbiAgbWFyZ2luOiAwO1xuICBtYXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB9XG59XG5pb24tbWVudSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cbi8vIGFwcC1yb290e1xuLy8gICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvYmcuanBlZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuLy8gICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuLy8gfVxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDU1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDU1cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogNTVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweDtcbn1cblxuLm1lbnVoZWFkZXJjb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDguMSU7XG4gIGxlZnQ6IDcuMiU7XG59XG5cbmltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG59XG5cbi5kcm9wIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbn1cblxuLmltZ3RleHQge1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDEyJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHdpZHRoOiA4MCU7XG59XG4iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-header\n    mode=\"ios\"\n    [ngStyle]=\"{ 'background-color': networkStatus ? 'green' : 'red' }\"\n  >\n    <ion-toolbar class=\"app-toolbar\" color=\"primary\">\n      <ion-button\n        size=\"small\"\n        class=\"menuicon\"\n        (click)=\"onBack()\"\n        *ngIf=\"pageEvent?.displayBackButton\"\n      >\n        <mat-icon end>arrow_back_ios</mat-icon>\n      </ion-button>\n      <ion-title>{{ pageEvent?.title || \"\" }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          class=\"menuicon\"\n          *ngIf=\"!util.isLoggedIn && pageEvent?.hideLogin !== true\"\n          routerLink=\"/login\"\n        >\n          <mat-icon end>lock</mat-icon>\n        </ion-button>\n        <ion-button\n          class=\"menuicon\"\n          *ngIf=\"util.isLoggedIn && pageEvent?.hideLogin !== true\"\n        >\n          <mat-icon end>lock_open</mat-icon>\n        </ion-button>\n        <ion-menu-button\n          menu=\"main-menu\"\n          *ngIf=\"pageEvent?.hideMenu !== true\"\n        ></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <mat-progress-bar\n      mode=\"indeterminate\"\n      *ngIf=\"util.isLoading\"\n    ></mat-progress-bar>\n    <div *ngIf=\"showNetworkStatus\" class=\"header\">{{ networkMessage }}</div>\n  </ion-header>\n  <ion-menu menuId=\"main-menu\" contentId=\"main\" side=\"end\">\n    <ion-content>\n      <div class=\"menuheader\">\n        <!-- <div class=\"menuheadercontent\"> -->\n        <img src=\"./assets/icon.png\" />\n        <!-- </div> -->\n      </div>\n      <img src=\"./assets/name.png\" class=\"imgtext\" />\n\n      <div class=\"menu-item\">\n        <ion-list class=\"menuList\">\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'bill'\">\n            <ion-item routerLink=\"/tab\" routerLinkActive=\"active\">\n              <mat-icon>create</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"bill\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'transaction'\">\n            <ion-item routerLink=\"/other-expenses\" routerLinkActive=\"active\">\n              <mat-icon>view_list</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"transaction\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'item'\">\n            <ion-item routerLink=\"/tab-item\" routerLinkActive=\"active\">\n              <mat-icon>view_list</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"item\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'config'\">\n            <ion-item routerLink=\"/configures\" routerLinkActive=\"active\">\n              <mat-icon>view_module</mat-icon>\n              <span>\n                {{ util.metaData?.menuItems | menu : \"config\" : \"true\" }}</span\n              >\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'reports'\">\n            <ion-item routerLink=\"/reports\" routerLinkActive=\"active\">\n              <mat-icon>report</mat-icon>\n              <span>{{\n                util.metaData?.menuItems | menu : \"reports\" : \"true\"\n              }}</span>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle\n            *ngIf=\"util.metaData?.menuItems | menu : 'appsettings'\"\n          >\n            <ion-item routerLink=\"/appsetting\" routerLinkActive=\"active\">\n              <mat-icon>settings</mat-icon>\n              <span>{{\n                util.metaData?.menuItems | menu : \"appsettings\" : \"true\"\n              }}</span>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'emp'\">\n            <ion-item routerLink=\"/employee-tab\" routerLinkActive=\"active\">\n              <mat-icon>create</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"emp\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'profile'\">\n            <mat-divider></mat-divider>\n            <ion-item routerLink=\"/profile\" routerLinkActive=\"active\">\n              <mat-icon>person</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"profile\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'branch'\">\n            <mat-divider></mat-divider>\n            <ion-item routerLink=\"/branch-tab\" routerLinkActive=\"active\">\n              <mat-icon>table_chart</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"branch\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n            <mat-divider></mat-divider>\n            <ion-item (click)=\"appLogout()\" [disabled]=\"!util.isLoggedIn\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>LogOut</span>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </div>\n    </ion-content>\n    <ion-footer>\n      <ion-item *ngIf=\"this.util.metaData?.profile\"\n        >{{ this.util.metaData.profile.gender | formatgender }}\n        {{ this.util.metaData.profile.firstName.charAt(0) }}.{{\n          this.util.metaData.profile.middleName\n            ? this.util.metaData.profile.middleName.charAt(0) + \".\"\n            : \"\"\n        }}\n        {{ this.util.metaData.profile.lastName }}</ion-item\n      >\n    </ion-footer>\n  </ion-menu>\n\n  <ion-content> <ion-router-outlet id=\"main\"></ion-router-outlet></ion-content>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map