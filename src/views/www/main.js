(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _employee_ownergurd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee/ownergurd.service */ 7725);
/* harmony import */ var _providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/auth/auth-gaurd.service */ 2335);





const routes = [
    {
        path: '',
        redirectTo: 'tab',
        pathMatch: 'full',
    },
    {
        path: 'tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab/tab.module */ 1659)).then((m) => m.TabPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'allbills',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bills_all-bills_all-bills_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bills/all-bills/all-bills.module */ 1579)).then((m) => m.AllBillsPageModule),
    },
    {
        path: 'createbill',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bills_create-bill_create-bill_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bills/create-bill/create-bill.module */ 7668)).then((m) => m.CreateBillPageModule),
    },
    {
        path: 'configure',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_configure_configure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configure/configure.module */ 6950)).then((m) => m.ConfigurePageModule),
    },
    {
        path: 'configures',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_configure_configure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configure/configure.module */ 6950)).then((m) => m.ConfigurePageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 3065)).then((m) => m.ReportsPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'appsetting',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_appsetting_appsetting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./appsetting/appsetting.module */ 9258)).then((m) => m.AppsettingPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
        canLoad: [_employee_ownergurd_service__WEBPACK_IMPORTED_MODULE_0__.OwnerGaurdService],
    },
    {
        path: 'tab-item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_tab-item_tab-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/tab-item/tab-item.module */ 285)).then((m) => m.TabItemPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'add-item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-item_add-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/add-item/add-item.module */ 5807)).then((m) => m.AddItemPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'item-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_item-list_item-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/item-list/item-list.module */ 9784)).then((m) => m.ItemListPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'add-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_items_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/add-category/add-category.module */ 1233)).then((m) => m.AddCategoryPageModule),
    },
    {
        path: 'employee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_employee_addEmployee_employee-add-routing_module_ts"), __webpack_require__.e("src_app_employee_addEmployee_employee-add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/addEmployee/employee-add.module */ 5869)).then((m) => m.EmployeeAddPageModule),
    },
    {
        path: 'employee-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_employee_employee-list_employee-list-routing_module_ts"), __webpack_require__.e("src_app_employee_employee-list_employee-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee-list/employee-list.module */ 6954)).then((m) => m.EmployeeListPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then((m) => m.ProfilePageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'employee-tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_employee_employee-tab_employee-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee-tab/employee-tab.module */ 5749)).then(m => m.EmployeeTabPageModule),
        canLoad: [_providers_auth_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_1__.AuthGaurdService],
    },
    {
        path: 'update-employee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_employee_update-employee_update-employee-routing_module_ts"), __webpack_require__.e("src_app_employee_update-employee_update-employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/update-employee/update-employee.module */ 4552)).then(m => m.UpdateEmployeePageModule)
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

/***/ 3676:
/*!***************************************************!*\
  !*** ./src/app/app-storage/app-storage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStorageModule": () => (/* binding */ AppStorageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage-cordovasqlitedriver */ 7878);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-storage.service */ 1970);







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

/***/ 1970:
/*!****************************************************!*\
  !*** ./src/app/app-storage/app-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStorageService": () => (/* binding */ AppStorageService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
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

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-storage/app-storage.service */ 1970);
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/auth/auth.service */ 6240);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/cart-service.service */ 4422);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/http.service */ 5030);
/* harmony import */ var _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/snackbar.service */ 415);
/* harmony import */ var _providers_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/theme.service */ 9609);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/utilservice.service */ 847);

















let AppComponent = class AppComponent {
  constructor(router, activatedRoute, location, auth, util, storage, snackbar, cart, theme, platform, httpClient) {
    var _this = this;

    this.router = router;
    this.activatedRoute = activatedRoute;
    this.location = location;
    this.auth = auth;
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

    this.onBack = () => {
      if (this.pageEvent.backTo) {
        this.router.navigateByUrl(`/${this.pageEvent.backTo}`);
      } else {
        this.location.back();
      }
    };

    this.appLogout = () => {
      // this.auth.isLoggedIn = false;
      // this.auth.redirectUrl = '';
      this.util.isLoading = true;
      this.httpClient.post(src_model_util__WEBPACK_IMPORTED_MODULE_3__.ApiEndPoint.LOGOUT, {}).then(e => {
        this.util.isLoading = false;
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      }).catch(e => {
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

    this.fetchTenantInfo = () => {
      this.util.isLoading = true;
      this.storage.getStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.TENANT).then( /*#__PURE__*/function () {
        var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          _this.util.tenantDetail = { ...e
          };
          yield _this.fetchBills();
          _this.util.isLoading = true;

          if (_this.util.tenantDetail?.tan?.trim().length > 0 || _this.util.tenantDetail?.pan?.trim().length > 0) {
            _this.router.navigateByUrl('/tab');
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
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
  type: _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_10__.UtilService
}, {
  type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__.AppStorageService
}, {
  type: _providers_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService
}, {
  type: _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_6__.CartService
}, {
  type: _providers_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
}, {
  type: _providers_http_service__WEBPACK_IMPORTED_MODULE_7__.HttpService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/cart-service.service */ 4422);
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/pipe.module */ 3493);
/* harmony import */ var _providers_save_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/save.service */ 1357);
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/auth/auth.service */ 6240);
/* harmony import */ var _app_storage_app_storage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-storage/app-storage.module */ 3676);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule,
            _app_storage_app_storage_module__WEBPACK_IMPORTED_MODULE_7__.AppStorageModule,
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.PlatformModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_3__.CartService,
            _providers_save_service__WEBPACK_IMPORTED_MODULE_5__.SaveService,
            _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7725:
/*!***********************************************!*\
  !*** ./src/app/employee/ownergurd.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwnerGaurdService": () => (/* binding */ OwnerGaurdService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/http.service */ 5030);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/utilservice.service */ 847);







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
      const metadataResp = yield _this.httpClient.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.METADATA);
      _this.utilsrvc.isLoading = !true;

      if (metadataResp.status == 1) {
        _this.utilsrvc.metaData = metadataResp.responseObject;
      }

      return new Promise((res, rej) => {
        if (_this.utilsrvc.metaData?.ownerNeedtocreate) {
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
  type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__.UtilService
}, {
  type: _providers_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

OwnerGaurdService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], OwnerGaurdService);


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/menu */ 5397);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/dialog */ 2529);
















































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

/***/ 7386:
/*!**************************************!*\
  !*** ./src/app/pipe/balance.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetPipe": () => (/* binding */ BalanceSheetPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 4879:
/*!*********************************************!*\
  !*** ./src/app/pipe/convert-to-fulldate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertToFullDate": () => (/* binding */ ConvertToFullDate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 5993:
/*!*****************************************!*\
  !*** ./src/app/pipe/dateformat.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateformatPipe": () => (/* binding */ DateformatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 1041:
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/cart-service.service */ 4422);



let FilterPipe = class FilterPipe {
    constructor(cartsrvc) {
        this.cartsrvc = cartsrvc;
    }
    transform(value, ...args) {
        if (Array.isArray(value) && args && args[0]?.trim()) {
            if (!('itemName' in value[0])) {
                return (value.filter((e) => e.items?.itemName ||
                    ''.toLowerCase().includes(args[0].toLowerCase())) || [...value]);
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

/***/ 5992:
/*!**************************************!*\
  !*** ./src/app/pipe/genderFormat.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatGenderPipe": () => (/* binding */ FormatGenderPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 7699);



let FormatGenderPipe = class FormatGenderPipe {
    transform(value, ...args) {
        switch (value) {
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

/***/ 1793:
/*!***********************************!*\
  !*** ./src/app/pipe/menu.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPipe": () => (/* binding */ MenuPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 3493:
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.pipe */ 1041);
/* harmony import */ var _genderFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genderFormat */ 5992);
/* harmony import */ var _subtotal_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtotal.pipe */ 4823);
/* harmony import */ var _dateformat_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateformat.pipe */ 5993);
/* harmony import */ var _balance_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance.pipe */ 7386);
/* harmony import */ var _convert_to_fulldate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convert-to-fulldate */ 4879);
/* harmony import */ var _short_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./short-date.pipe */ 2459);
/* harmony import */ var _menu_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.pipe */ 1793);
/* harmony import */ var _profitCalulator_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profitCalulator.pipe */ 9792);











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

/***/ 9792:
/*!**********************************************!*\
  !*** ./src/app/pipe/profitCalulator.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitCalculator": () => (/* binding */ ProfitCalculator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 2459:
/*!*****************************************!*\
  !*** ./src/app/pipe/short-date.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortDatePipe": () => (/* binding */ ShortDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _providers_cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/cart-service.service */ 4422);




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

/***/ 2335:
/*!******************************************************!*\
  !*** ./src/app/providers/auth/auth-gaurd.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurdService": () => (/* binding */ AuthGaurdService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6240);




let AuthGaurdService = class AuthGaurdService {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canLoad(route) {
        const url = route.path;
        if (this.auth.isLoggedIn) {
            return true;
        }
        this.auth.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGaurdService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthGaurdService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthGaurdService);



/***/ }),

/***/ 6240:
/*!************************************************!*\
  !*** ./src/app/providers/auth/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ 5030);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilservice.service */ 847);







let AuthService = class AuthService {
  constructor(router, util, httpClient) {
    var _this = this;

    this.router = router;
    this.util = util;
    this.httpClient = httpClient;
    this.isLoggedIn = false;
    this.url = ''; // public login = (username, passcode): Promise<string> =>
    //   new Promise((resolve, reject) => {
    //     if (
    //       username === this.util.tenantDetail?.username &&
    //       passcode === this.util.tenantDetail?.password
    //     ) {
    //       this.isLoggedIn = true;
    //       resolve('Login success');
    //     } else {
    //       this.isLoggedIn = false;
    //       reject('Login failed');
    //     }
    //   });

    this.login = (username, password) => {
      return new Promise((resolve, reject) => {
        this.httpClient.post(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.LOGIN, {
          username,
          password
        }).then( /*#__PURE__*/function () {
          var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
            console.log(e);

            if (e.status == 1) {
              _this.util.userLogin = { ...e.responseObject
              };
              yield _this.httpClient.fetchMetaData();
              _this.isLoggedIn = true;
              resolve('Login success');
            }

            reject('Login failed');
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(e => {
          const apperr = e.error;
          this.isLoggedIn = false;
          reject(apperr.error);
        });
      });
    };
  }

  get redirectUrl() {
    return this.url;
  }

  set redirectUrl(url) {
    this.url = url;
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _utilservice_service__WEBPACK_IMPORTED_MODULE_3__.UtilService
}, {
  type: _http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 4422:
/*!***************************************************!*\
  !*** ./src/app/providers/cart-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 1970);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 5030);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilservice.service */ 847);







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

    this.getAllItem = (availableStatus, onSuccess, onFail) => {
      let promise;
      this.utilService.isLoading = true;

      if (availableStatus === null || availableStatus === undefined || availableStatus === true) {
        promise = this.httpService.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.ITEM_LIST, 'available=true');
      } else {
        promise = this.httpService.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.ITEM_LIST);
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

/***/ 5030:
/*!*******************************************!*\
  !*** ./src/app/providers/http.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _utilservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilservice.service */ 847);


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

      return this.http.get(_url, this.getCustomHeaders()).toPromise();
    };

    this.post = (api, body) => {
      const _url = this.baseUrl + api;

      return this.http.post(_url, body, this.getCustomHeaders()).toPromise();
    };

    this.put = (api, id, body) => {
      const _url = this.baseUrl + api.replace(':id', id);

      return this.http.put(_url, body, this.getCustomHeaders()).toPromise();
    };

    this.delete = (api, id) => {
      const _url = this.baseUrl + api.replace(':id', id);

      return this.http.delete(_url, this.getCustomHeaders()).toPromise();
    };

    this.fetchMetaData = /*#__PURE__*/function () {
      var _ref = (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (onfail) {
        _this.util.isLoading = true;
        const metadataResp = yield _this.get(src_model_util__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.METADATA);
        _this.util.isLoading = !true;

        if (metadataResp.status == 1) {
          _this.util.metaData = metadataResp.responseObject;
        }

        return new Promise((res, rej) => {
          if (_this.util.metaData?.ownerNeedtocreate) {
            onfail ? onfail() : () => {};
            rej(false);
          } else {
            res(true);
          }
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
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

/***/ 1357:
/*!*******************************************!*\
  !*** ./src/app/providers/save.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveService": () => (/* binding */ SaveService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 415:
/*!***********************************************!*\
  !*** ./src/app/providers/snackbar.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/util */ 7699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 1970);





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

/***/ 847:
/*!**************************************************!*\
  !*** ./src/app/providers/utilservice.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let UtilService = class UtilService {
    constructor() {
        this.gvtTax = 0;
        this.isLoading = false;
    }
};
UtilService.ctorParameters = () => [];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], UtilService);



/***/ }),

/***/ 2340:
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 7699:
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
    GENDER[GENDER["FEMALE"] = 0] = "FEMALE";
    GENDER[GENDER["MALE"] = 1] = "MALE";
    GENDER[GENDER["OTHERS"] = 2] = "OTHERS";
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
    StoreName["PAGEBILL"] = "pageBill";
    StoreName["PAGEREPORT"] = "pageReport";
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
    ApiEndPoint["METADATA"] = "metadata";
    ApiEndPoint["BILL_ADD"] = "billing";
    ApiEndPoint["BILL_UPDATE"] = "billing/:id";
    ApiEndPoint["BILL_UPDATE_PAYDUE"] = "billing/paydue/:id";
    ApiEndPoint["BILL_LIST"] = "billing";
    ApiEndPoint["BILL_DELETE"] = "billing/:id";
    ApiEndPoint["RESETPASSWORD"] = "employee/resetpassword";
    ApiEndPoint["CHANGEASSWORD"] = "employee/changepassword";
    ApiEndPoint["LOGIN"] = "auth/login";
    ApiEndPoint["LOGOUT"] = "auth/logout";
    ApiEndPoint["REPORT_BILLWISE"] = "reports/billwise";
    ApiEndPoint["REPORT_ITEMWISE"] = "reports/itemwise";
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

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
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
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n/**\n * Card style modal needs additional padding on the\n * top of the header. We accomplish this by targeting\n * the first toolbar in the header.\n * Footer also needs this. We do not adjust the bottom\n * padding though because of the safe area.\n */\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal ion-footer ion-toolbar:first-of-type {\n  padding-top: 6px;\n}\n/**\n* Card style modal needs additional padding on the\n* bottom of the header. We accomplish this by targeting\n* the last toolbar in the header.\n*/\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {\n  padding-bottom: 6px;\n}\n/**\n* Add padding on the left and right\n* of toolbars while accounting for\n* safe area values when in landscape.\n*/\nhtml.ios ion-modal ion-toolbar {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n/**\n * Card style modal on iPadOS\n * should only have backdrop on first instance.\n */\n@media screen and (min-width: 768px) {\n  html.ios ion-modal.modal-card:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n/**\n * Subsequent modals should not have a backdrop/box shadow\n * as it will cause the screen to appear to get progressively\n * darker. With Ionic 6, declarative modals made it\n * possible to have multiple non-presented modals in the DOM,\n * so we could no longer rely on ion-modal:first-of-type.\n * Here we disable the opacity/box-shadow for every modal\n * that comes after the first presented modal.\n *\n * Note: ion-modal:not(.overlay-hidden):first-of-type\n * does not match the first modal to not have\n * the .overlay-hidden class, it will match the\n * first modal in general only if it does not\n * have the .overlay-hidden class.\n * The :nth-child() pseudo-class has support\n * for selectors which would help us here. At the\n * time of writing it does not have great cross browser\n * support.\n *\n * Note 2: This should only apply to non-card and\n * non-sheet modals. Card and sheet modals have their\n * own criteria for displaying backdrops/box shadows.\n */\nion-modal.modal-default:not(.overlay-hidden) ~ ion-modal.modal-default {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n/**\n * This works around a bug in WebKit where the\n * content will overflow outside of the bottom border\n * radius when re-painting. As long as a single\n * border radius value is set on .ion-page, this\n * issue does not happen. We set the top left radius\n * here because the top left corner will always have a\n * radius no matter the platform.\n * This behavior only applies to card modals.\n */\nhtml.ios ion-modal.modal-card .ion-page {\n  border-top-left-radius: var(--border-radius);\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n/**\n * When making custom dialogs, using\n * ion-content is not required. As a result,\n * some developers may wish to have dialogs\n * that are automatically sized by the browser.\n * These changes allow certain dimension values\n * such as fit-content to work correctly.\n */\nion-modal .ion-page:not(ion-nav .ion-page) {\n  position: relative;\n  contain: layout style;\n  height: 100%;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-accordion-group > ion-accordion:last-of-type ion-item[slot=header] {\n  --border-width: 0px;\n}\nion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion .ion-accordion-toggle-icon {\n    /* stylelint-disable declaration-no-important */\n    transition: none !important;\n  }\n}\n/**\n * The > [slot=\"header\"] selector ensures that we do\n * not modify toggle icons for any nested accordions. The state\n * of one accordion should not affect any accordions inside\n * of a nested accordion group.\n */\nion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,\nion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon {\n  transform: rotate(180deg);\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type {\n  margin-top: 0;\n}\nion-input input::-webkit-date-and-time-value {\n  text-align: start;\n}\n/**\n * The .ion-datetime-button-overlay class contains\n * styles that allow any modal/popover to be\n * sized according to the dimensions of the datetime\n * when used with ion-datetime-button.\n */\n.ion-datetime-button-overlay {\n  --width: fit-content;\n  --height: fit-content;\n}\n/**\n * The grid variant can scale down when inline.\n * When used in a `fit-content` overlay, this causes\n * the overlay to shrink when the month/year picker is open.\n * Explicitly setting the dimensions lets us have a consistently\n * sized grid interface.\n */\n.ion-datetime-button-overlay ion-datetime.datetime-grid {\n  width: 320px;\n  min-height: 320px;\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.ion-ce body {\n  display: block;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  /**\n   * Because body has position: fixed,\n   * it should be promoted to its own\n   * layer.\n   *\n   * WebKit does not always promote\n   * the body to its own layer on page\n   * load in Ionic apps. Once scrolling on\n   * ion-content starts, WebKit will promote\n   * body. Unfortunately, this causes a re-paint\n   * which results in scrolling being halted\n   * until the next user gesture.\n   *\n   * This impacts the Custom Elements build.\n   * The lazy loaded build causes the browser to\n   * re-paint during hydration which causes WebKit\n   * to promote body to its own layer.\n   * In the CE Build, this hydration does not\n   * happen, so the additional re-paint does not occur.\n   */\n  transform: translateZ(0);\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\nion-content {\n  --background: url('bg.jpeg') center center fixed;\n  background-size: 100vw 100vh;\n}\nion-item,\nion-toolbar,\nion-footer {\n  --background: transparent;\n}\nmat-card,\nmat-list,\nion-list {\n  background: transparent;\n}\n.mat-table, .searchbar-input.sc-ion-searchbar-md,\n.searchbar-input.sc-ion-searchbar-md {\n  background: rgba(255, 255, 255, 0.4549019608);\n}\n.active {\n  border-left: 5px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n  padding-left: 1rem;\n}\n.menuheader {\n  height: 31%;\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  border-radius: 10px 10px 10px 50px;\n  box-shadow: 0px 1px 10px var(--ion-color-primary);\n  transform: rotate(-18deg);\n  margin-left: -2%;\n  margin-top: -39%;\n  margin-bottom: 34%;\n  width: 150%;\n}\n.menuList {\n  margin: 0;\n}\n.menuList mat-icon {\n  margin-right: 2rem;\n}\nion-menu ion-content {\n  --background: #fff;\n}\n.searchbar-input.sc-ion-searchbar-md {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 55px;\n  padding-inline-end: 55px;\n  background: transparent;\n  box-shadow: 2px 2px 2px 2px;\n}\n.menuheadercontent {\n  position: absolute;\n  z-index: 1;\n  top: 8.1%;\n  left: 7.2%;\n}\nimg {\n  position: absolute;\n  bottom: 0;\n  transform: rotate(20deg);\n}\n.drop {\n  display: inline-block;\n  transform: rotate(-45deg);\n  border: 5px solid green;\n  width: 100px;\n  height: 100px;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.imgtext {\n  top: 18px;\n  left: 12%;\n  transform: rotate(0deg);\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dsb2JhbC5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFycy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdHlwb2dyYXBoeS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQUFBO0FBV0EsNERBQUE7QUNIQTtFQUNFLDZGQUFBO0FDUEY7QURTQTtFQUNFLDBEQUFBO0FDTkY7QURTQTtFQUNFLDBDQUFBO0FDTkY7QURTQTtFQUNFLHVDQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0FDTkY7QURnQkE7Ozs7OztFQUFBO0FBT0E7OztFQUdFLGdCQUFBO0FDYkY7QURnQkE7Ozs7Q0FBQTtBQUtBOztFQUVFLG1CQUFBO0FDYkY7QURnQkE7Ozs7Q0FBQTtBQUtBO0VBQ0UscURBQUE7RUFDQSxtREFBQTtBQ2JGO0FEZ0JBOzs7RUFBQTtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQ2JGO0FBQ0Y7QURnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQXVCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGlCQTs7Ozs7Ozs7O0VBQUE7QUFVQTtFQUNFLDRDQUFBO0FDZEY7QUR1Q0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUMxQkY7QUQ4QkU7RUFUQSxnRUFBQTtFQUNBLDZFQUFBO0VBQ0EsMEVBQUE7RUFDQSwyRkFBQTtFQUNBLHVFQUFBO0VBQ0EscUVBQUE7QUNqQkY7QURxQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNSRjtBRFlFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDQ0Y7QURHRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ1VGO0FETkU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNtQkY7QURmRTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQzRCRjtBRHhCRTtFQVRBLDZEQUFBO0VBQ0EsMkVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ3FDRjtBRGpDRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQzhDRjtBRGpDQTtFRWdMTSxPRi9LdUI7RUVnTHZCLFFGaExpQjtFRXlNckIsTUZ6TWtCO0VFME1sQixTRjFNd0I7RUFFeEIsYUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVRy9HK0I7QUZtSmpDO0FEakNBOzs7Ozs7O0VBQUE7QUFRQTtFQUNFLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxZQUFBO0FDa0NGO0FEL0JBO0VBQ0Usa0JBQUE7QUNrQ0Y7QUQvQkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFLHlEQUFBO0VBQ0Esd0JBQUE7QUNrQ0Y7QUQvQkE7RUFDRSxVQUFBO0FDa0NGO0FEL0JBO0VBQ0UsY0FBQTtBQ2tDRjtBRDNCQTtFQUNFLDZCQUFBO0FDOEJGO0FEM0JBO0VBQ0U7SUFDRSxpREFBQTtFQzhCRjtBQUNGO0FEMUJBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLHdEQUFBO0lBQ0Esb0RBQUE7SUFDQSxzREFBQTtFQzRCRjtBQUNGO0FEekJBO0VBQ0U7SUFDRSw2Q0FBQTtJQUNBLG1EQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtFQzJCRjtBQUNGO0FEcEJBOztFQUVFLGNBQUE7QUNzQkY7QURkQTtFRTJRTSxpQ0FBQTtBRHpQTjtBRGRBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBSUEsb0JBQUE7QUNjRjtBRFhBO0VBQ0UsMkNJcFErQjtBSGtSakM7QURYQTtFQUNFLDBDSXJRK0I7QUhtUmpDO0FEUEE7RUFDRSw0Q0tuUjhCO0FKNlJoQztBRFBBO0VBQ0UsNENLdlI4QjtBSmlTaEM7QUROQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNTRjtBRFBBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ1VGO0FEUkE7RUFDRSxtQkFBQTtBQ1dGO0FEUkE7RUFDRSwyREFBQTtBQ1dGO0FEUkE7RUFDRTtJQUNFLCtDQUFBO0lBQ0EsMkJBQUE7RUNXRjtBQUNGO0FEVEE7Ozs7O0VBQUE7QUFNQTs7RUFFRSx5QkFBQTtBQ1dGO0FEUkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDV0Y7QURSQTs7RUFFRSxhQUFBO0FDV0Y7QURMQTtFQUNFLGlCQUFBO0FDUUY7QURMQTs7Ozs7RUFBQTtBQU1BO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ1FGO0FETEE7Ozs7OztFQUFBO0FBT0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRnBXQSx3Q0FBQTtBT1BBOzs7O0VBSUUsd0JBQUE7QUNORjtBRFdBO0VBQ0UsYUFBQTtFQUVBLFNBQUE7QUNURjtBRGlCQTs7RUFFRSxpQkFBQTtBQ2RGO0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRDZCQTtFQUNFLGdCQUFBO0FDMUJGO0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjtBRGdDQTtFQUNFLGNBQUE7QUM3QkY7QURpQ0E7Ozs7RUFJRSxpQ0FBQTtFQUNBLGNBQUE7QUM5QkY7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGO0FEOENBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQzdDRjtBRGdEQTtFQUNFLGlCQUFBO0FDN0NGO0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGO0FEc0RBOzs7RUFHRSxlQUFBO0VBRUEsMEJBQUE7QUNwREY7QUR3REE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSwwQkFBQTtBQ3JERjtBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjtBRHdEQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RU55Q0Usa0NBQUE7RUFDQSxtQ0FBQTtFQW9LRSxjTTVNYztFTjZNZCxlTTdNYztFTmlQaEIsYU1qUGdCO0VOa1BoQixnQk1sUGdCO0VONE1kLGVNM01lO0VONE1mLGdCTTVNZTtFTmdQakIsY01oUGlCO0VOaVBqQixpQk1qUGlCO0VBRWpCLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7RUFvQkEsd0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7QUNkRjtBQ3ZDQTtFQUNFLG1DQUFBO0FDOUJGO0FEaUNBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQzlCRjtBRGlDQTs7Ozs7O0VSK09FLGdCUXpPZ0I7RVIwT2hCLG1CUTFPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjtBRGtDQTtFUmtPRSxnQlFqT2dCO0VBRWhCLGVBMUM2QjtBQ1MvQjtBRG9DQTtFUjRORSxnQlEzTmdCO0VBRWhCLGVBN0M2QjtBQ1UvQjtBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjtBRHVDQTtFQUNFLGVBL0M2QjtBQ1cvQjtBRHVDQTtFQUNFLGVBaEQ2QjtBQ1kvQjtBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjtBRHVDQTtFQUNFLGNBQUE7QUNwQ0Y7QUR1Q0E7O0VBRUUsa0JBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0FDdkNGO0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN2Q0Y7QUN0REE7RUFDRSx3QkFBQTtBQ1BGO0FEaUJJO0VBQ0Usd0JBQUE7QUNkTjtBRHFCSTtFQUNFLHdCQUFBO0FDbEJOO0FYc0hJO0VVN0dBO0lBQ0Usd0JBQUE7RUNMSjtBQUNGO0FYeUpJO0VVOUlBO0lBQ0Usd0JBQUE7RUNSSjtBQUNGO0FYMkdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNLSjtBQUNGO0FYK0lJO0VVOUlBO0lBQ0Usd0JBQUE7RUNFSjtBQUNGO0FYaUdJO0VVN0dBO0lBQ0Usd0JBQUE7RUNlSjtBQUNGO0FYcUlJO0VVOUlBO0lBQ0Usd0JBQUE7RUNZSjtBQUNGO0FYdUZJO0VVN0dBO0lBQ0Usd0JBQUE7RUN5Qko7QUFDRjtBWDJISTtFVTlJQTtJQUNFLHdCQUFBO0VDc0JKO0FBQ0Y7QWQvQkEsaURBQUE7QWVKQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VaOE5FLGVZNU5lO0VaNk5mLGdCWTdOZTtFWmlRakIsY1lqUWlCO0Vaa1FqQixpQllsUWlCO0FDYm5CO0FEZ0JBO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RVp5TkUsc0NZNU9NO0VaNk9OLHVDWTdPTTtFWjZRUixxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDVVY7QWJzT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDbUJSO0FBQ0Y7QURJQTtFQUNFLHVDQUFBO0Vab1BBLHFDWTdRUTtBQ3lCVjtBREtBO0VBQ0UseUNBQUE7RVo2TUUsc0NZNU9NO0FDNkJWO0FibU5NO0VBQ0U7SUFFSSxtQkFBQTtJQU9GLDhDWTFQQTtFQ21DUjtBQUNGO0FEQUE7RUFDRSx1Q0FBQTtFWndNRSx1Q1k3T007QUN5Q1Y7QWJ1TU07RUFDRTtJQUtJLG9CQUFBO0lBTUYsNENZNVBBO0VDK0NSO0FBQ0Y7QUROQTtFQUNFLDBDQUFBO0VabU9BLHdDWTlRUTtBQ3FEVjtBRExBO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFWjJOQSxxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDMkRWO0FESkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VabUxFLHNDWTVPTTtFWjZPTix1Q1k3T007QUNpRVY7QWIrS007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q1kxUEE7SVo0UEEsNENZNVBBO0VDMEVSO0FBQ0Y7QURUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFWmtLRSxjWWhLYztFWmlLZCxlWWpLYztFWnFNaEIsYVlyTWdCO0Vac01oQixnQll0TWdCO0FDY2xCO0FEWEE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFWjZKRSxvQ1kzT0s7RVo0T0wscUNZNU9LO0VaNFFQLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNnR1Q7QWIrSU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDeUdQO0FBQ0Y7QUR2QkE7RUFDRSxxQ0FBQTtFWndMQSxtQ1k1UU87QUMrR1Q7QUR0QkE7RUFDRSx1Q0FBQTtFWmlKRSxvQ1kzT0s7QUNtSFQ7QWI0SE07RUFDRTtJQUVJLGtCQUFBO0lBT0YsNENZelBEO0VDeUhQO0FBQ0Y7QUQzQkE7RUFDRSxxQ0FBQTtFWjRJRSxxQ1k1T0s7QUMrSFQ7QWJnSE07RUFDRTtJQUtJLG1CQUFBO0lBTUYsMENZM1BEO0VDcUlQO0FBQ0Y7QURqQ0E7RUFDRSx3Q0FBQTtFWnVLQSxzQ1k3UU87QUMySVQ7QURoQ0E7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VaK0pBLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNpSlQ7QUQvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VadUhFLG9DWTNPSztFWjRPTCxxQ1k1T0s7QUN1SlQ7QWJ3Rk07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFJRiw0Q1l6UEQ7SVoyUEMsMENZM1BEO0VDZ0tQO0FBQ0Y7QUM5Skk7RWRtYUUsc0JBQUE7QWUvYU47QURnQkk7RWQrWkUsdUJBQUE7QWUzYU47QURnQkk7RWQ2WUUsc0JBQUE7QWV6Wk47QWY0TFc7RUFnT0wsdUJBQUE7QWV6Wk47QURhSTtFZGdaRSx1QkFBQTtBZXpaTjtBZnFMVztFQXVPTCxzQkFBQTtBZXpaTjtBZjRHSTtFY2xIQTtJZG1hRSxzQkFBQTtFZXhaSjs7RURQRTtJZCtaRSx1QkFBQTtFZXBaSjs7RURQRTtJZDZZRSxzQkFBQTtFZWxZSjtFZnFLUztJQWdPTCx1QkFBQTtFZWxZSjs7RURWRTtJZGdaRSx1QkFBQTtFZWxZSjtFZjhKUztJQXVPTCxzQkFBQTtFZWxZSjtBQUNGO0Fmb0ZJO0VjbEhBO0lkbWFFLHNCQUFBO0VlallKOztFRDlCRTtJZCtaRSx1QkFBQTtFZTdYSjs7RUQ5QkU7SWQ2WUUsc0JBQUE7RWUzV0o7RWY4SVM7SUFnT0wsdUJBQUE7RWUzV0o7O0VEakNFO0lkZ1pFLHVCQUFBO0VlM1dKO0VmdUlTO0lBdU9MLHNCQUFBO0VlM1dKO0FBQ0Y7QWY2REk7RWNsSEE7SWRtYUUsc0JBQUE7RWUxV0o7O0VEckRFO0lkK1pFLHVCQUFBO0VldFdKOztFRHJERTtJZDZZRSxzQkFBQTtFZXBWSjtFZnVIUztJQWdPTCx1QkFBQTtFZXBWSjs7RUR4REU7SWRnWkUsdUJBQUE7RWVwVko7RWZnSFM7SUF1T0wsc0JBQUE7RWVwVko7QUFDRjtBZnNDSTtFY2xIQTtJZG1hRSxzQkFBQTtFZW5WSjs7RUQ1RUU7SWQrWkUsdUJBQUE7RWUvVUo7O0VENUVFO0lkNllFLHNCQUFBO0VlN1RKO0VmZ0dTO0lBZ09MLHVCQUFBO0VlN1RKOztFRC9FRTtJZGdaRSx1QkFBQTtFZTdUSjtFZnlGUztJQXVPTCxzQkFBQTtFZTdUSjtBQUNGO0FDbkdJO0VBQ0UsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMEJBQUE7QUNiTjtBRGdCSTtFQUNFLDJCQUFBO0FDYk47QURnQkk7RUFDRSw0QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QWpCa0dJO0VnQmxIQTtJQUNFLDZCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDBCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDJCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKO0FBQ0Y7QWpCZ0VJO0VnQmxIQTtJQUNFLDZCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDBCQUFBO0VDcURKOztFRGxERTtJQUNFLDJCQUFBO0VDcURKOztFRGxERTtJQUNFLDRCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKOztFRGxERTtJQUNFLDhCQUFBO0VDcURKO0FBQ0Y7QWpCK0JJO0VnQmxIQTtJQUNFLDZCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDBCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDJCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDRCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKOztFRG5GRTtJQUNFLDhCQUFBO0VDc0ZKO0FBQ0Y7QWpCRkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7QUFDRjtBQ3JKSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjtBRGdCSTtFQUNFLHlEQUFBO0VBQ0EscUNBQUE7QUNiTjtBbkJtSEk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ0dKOztFREFFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ0dKO0FBQ0Y7QW5Ca0dJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUJKO0FBQ0Y7QW5Ca0ZJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUNKO0FBQ0Y7QW5Ca0VJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21ESjs7RURoREU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbURKO0FBQ0Y7QUN0RUE7RUFDRSxpQ0FBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSw2QkFBQTtBQ1BGO0FEVUE7RUFDRSw4QkFBQTtBQ1BGO0FEVUE7RUFDRSwrQkFBQTtBQ1BGO0FEVUE7RUFDRSwyQkFBQTtBQ1BGO0FEY0E7RUFDRSwwQkFBQTtBQ1hGO0FEY0E7RUFDRSw0QkFBQTtBQ1hGO0FEY0E7RUFDRSxrQ0FBQTtBQ1hGO0FEa0JBO0VBQ0Usc0NBQUE7QUNmRjtBRGtCQTtFQUNFLGtDQUFBO0FDZkY7QURrQkE7RUFDRSxvQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjtBRGtCQTtFQUNFLHlDQUFBO0FDZkY7QURrQkE7RUFDRSx3Q0FBQTtBQ2ZGO0FEc0JBO0VBQ0Usa0NBQUE7QUNuQkY7QURzQkE7RUFDRSw4QkFBQTtBQ25CRjtBRHNCQTtFQUNFLGdDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsK0JBQUE7QUNuQkY7QURzQkE7RUFDRSxnQ0FBQTtBQ25CRjtBeEIzQ0E7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0F5QlhGO0F6QmFBOzs7RUFHRSx5QkFBQTtBeUJWRjtBekJhQTs7O0VBR0UsdUJBQUE7QXlCVkY7QXpCYUE7O0VBRUUsNkNBQUE7QXlCVkY7QUF6Q0E7RUFDRSwrQ0FBQTtFQUNBLCtCekI0QlE7RXlCMUJSLGtCQUFBO0FBMkNGO0FBeENBO0VBQ0UsV0FBQTtFQUNBLDhGQUFBO0VBS0Esa0NBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXVDRjtBQXJDQTtFQUNFLFNBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxrQkFBQTtBQXlDSjtBQXJDRTtFQUNFLGtCQUFBO0FBd0NKO0FBN0JBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUVBLDBCQUFBO0VBRUEsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBZ0NKO0FBN0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFnQ0Y7QUE1QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQStCRjtBQTVCQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBK0JGO0FBM0JBO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUE4QkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG5cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG5cbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3NcIjtcblxuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XG5cbi8vICRjb2xvci1wcm1hcnk6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gJGNvbG9yLXdhcm46dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG5cbi8vIEBpbXBvcnQgXCIuL3RoZW1lL2xpZ2h0LnNjc3NcIjtcblxuJHByaW1hcnk6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiRkYW5nZXI6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvYmcuanBlZ1wiKSBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xufVxuaW9uLWl0ZW0sXG5pb24tdG9vbGJhcixcbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvLyAtLWJhY2tncm91bmQ6ICNmZmZmZmY3NDtcbn1cbm1hdC1jYXJkLFxubWF0LWxpc3QgLFxuaW9uLWxpc3R7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmNzQ7XG59XG4ubWF0LXRhYmxlLC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCxcbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCAgIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjc0O1xufVxuXG5cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFyc1wiO1xuQGltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnNcIjtcblxuLy8gSW9uaWMgRm9udCBGYW1pbHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBUT0RPOiBCbG9jayBzY3JvbGxpbmcgaW4gaW9uLWNvbnRlbnQsIGJyZWFrcyBpbnNpZGUgaW9uLW1vZGFsXG4vLyBib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCAuaW9uLXBhZ2UgPiBpb24tY29udGVudCB7XG4vLyAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gTW9kYWwgLSBDYXJkIFN0eWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiAqIHRvcCBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4gKiB0aGUgZmlyc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuICogRm9vdGVyIGFsc28gbmVlZHMgdGhpcy4gV2UgZG8gbm90IGFkanVzdCB0aGUgYm90dG9tXG4gKiBwYWRkaW5nIHRob3VnaCBiZWNhdXNlIG9mIHRoZSBzYWZlIGFyZWEuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLWZvb3RlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLyoqXG4qIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuKiBib3R0b20gb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuKiB0aGUgbGFzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4vKipcbiogQWRkIHBhZGRpbmcgb24gdGhlIGxlZnQgYW5kIHJpZ2h0XG4qIG9mIHRvb2xiYXJzIHdoaWxlIGFjY291bnRpbmcgZm9yXG4qIHNhZmUgYXJlYSB2YWx1ZXMgd2hlbiBpbiBsYW5kc2NhcGUuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArIDhweCk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgOHB4KTtcbn1cblxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG9uIGlQYWRPU1xuICogc2hvdWxkIG9ubHkgaGF2ZSBiYWNrZHJvcCBvbiBmaXJzdCBpbnN0YW5jZS5cbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjE4O1xuICB9XG59XG5cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICovXG5pb24tbW9kYWwubW9kYWwtZGVmYXVsdDpub3QoLm92ZXJsYXktaGlkZGVuKSB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUpIHtcbiAgJHZhbHVlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcblxuICAkYmFzZTogbWFwLWdldCgkdmFsdWUsIGJhc2UpO1xuICAkY29udHJhc3Q6IG1hcC1nZXQoJHZhbHVlLCBjb250cmFzdCk7XG4gICRzaGFkZTogbWFwLWdldCgkdmFsdWUsIHNoYWRlKTtcbiAgJHRpbnQ6IG1hcC1nZXQoJHZhbHVlLCB0aW50KTtcblxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0sICN7JGJhc2V9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYiwgI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LCAjeyRjb250cmFzdH0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYiwgI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSwgI3skc2hhZGV9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCwgI3skdGludH0pICFpbXBvcnRhbnQ7XG59XG5cbkBlYWNoICRjb2xvci1uYW1lLCAkdmFsdWUgaW4gJGNvbG9ycyB7XG4gIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lKTtcbiAgfVxufVxuXG5cbi8vIFBhZ2UgQ29udGFpbmVyIFN0cnVjdHVyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1wYWdlIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogJHotaW5kZXgtcGFnZS1jb250YWluZXI7XG59XG5cbi8qKlxuICogV2hlbiBtYWtpbmcgY3VzdG9tIGRpYWxvZ3MsIHVzaW5nXG4gKiBpb24tY29udGVudCBpcyBub3QgcmVxdWlyZWQuIEFzIGEgcmVzdWx0LFxuICogc29tZSBkZXZlbG9wZXJzIG1heSB3aXNoIHRvIGhhdmUgZGlhbG9nc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBzaXplZCBieSB0aGUgYnJvd3Nlci5cbiAqIFRoZXNlIGNoYW5nZXMgYWxsb3cgY2VydGFpbiBkaW1lbnNpb24gdmFsdWVzXG4gKiBzdWNoIGFzIGZpdC1jb250ZW50IHRvIHdvcmsgY29ycmVjdGx5LlxuICovXG5pb24tbW9kYWwgLmlvbi1wYWdlOm5vdChpb24tbmF2IC5pb24tcGFnZSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgY29udGFpbjogbGF5b3V0IHN0eWxlO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5pb24tcGFnZS5zcGxpdC1wYW5lLW1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1yb3V0ZSxcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcbmlvbi1yb3V0ZXIsXG5pb24tc2VsZWN0LW9wdGlvbixcbmlvbi1uYXYtY29udHJvbGxlcixcbmlvbi1tZW51LWNvbnRyb2xsZXIsXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXG5pb24tYWxlcnQtY29udHJvbGxlcixcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXG5pb24tbW9kYWwtY29udHJvbGxlcixcbmlvbi1waWNrZXItY29udHJvbGxlcixcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXG5pb24tdG9hc3QtY29udHJvbGxlcixcbi5pb24tcGFnZS1oaWRkZW4sXG5baGlkZGVuXSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vLyBJb25pYyBTYWZlIE1hcmdpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG9uY2UgU2FmYXJpIDExLjIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5cbi8vIEdsb2JhbCBDYXJkIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cblxuLy8gTWVudSBTdHlsZXNcbi8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgbG9uZyB0ZXJtIHNvbHV0aW9uIGZvciB0aGlzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubWVudS1jb250ZW50IHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKDAsIDAsIDApKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblxuICAvLyB0aGUgY29udGFpbmluZyBlbGVtZW50IGl0c2VsZiBzaG91bGQgYmUgY2xpY2thYmxlIGJ1dFxuICAvLyBldmVyeXRoaW5nIGluc2lkZSBvZiBpdCBzaG91bGQgbm90IGNsaWNrYWJsZSB3aGVuIG1lbnUgaXMgb3BlblxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LW1kLWJveC1zaGFkb3c7XG59XG5cbi8vIEFjY29yZGlvbiBTdHlsZXNcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbn1cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1hbmltYXRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tcHJldmlvdXMgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8vIFNhZmFyaS9pT1MgMTUgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmcm9tIElvbmljIDUvU2FmYXJpIDE0IGRlc2lnbnMsXG4vLyB3ZSBvdmVycmlkZSB0aGUgYXBwZWFyYW5jZSBvbmx5IHdoZW4gdXNpbmcgd2l0aGluIGFuIGlvbi1pbnB1dC5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qKlxuICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAqIHN0eWxlcyB0aGF0IGFsbG93IGFueSBtb2RhbC9wb3BvdmVyIHRvIGJlXG4gKiBzaXplZCBhY2NvcmRpbmcgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRhdGV0aW1lXG4gKiB3aGVuIHVzZWQgd2l0aCBpb24tZGF0ZXRpbWUtYnV0dG9uLlxuICovXG4uaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IHtcbiAgLS13aWR0aDogZml0LWNvbnRlbnQ7XG4gIC0taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLyoqXG4gKiBUaGUgZ3JpZCB2YXJpYW50IGNhbiBzY2FsZSBkb3duIHdoZW4gaW5saW5lLlxuICogV2hlbiB1c2VkIGluIGEgYGZpdC1jb250ZW50YCBvdmVybGF5LCB0aGlzIGNhdXNlc1xuICogdGhlIG92ZXJsYXkgdG8gc2hyaW5rIHdoZW4gdGhlIG1vbnRoL3llYXIgcGlja2VyIGlzIG9wZW4uXG4gKiBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIGRpbWVuc2lvbnMgbGV0cyB1cyBoYXZlIGEgY29uc2lzdGVudGx5XG4gKiBzaXplZCBncmlkIGludGVyZmFjZS5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSBpb24tZGF0ZXRpbWUuZGF0ZXRpbWUtZ3JpZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMzIwcHg7XG59XG4iLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICovXG5pb24tbW9kYWwubW9kYWwtZGVmYXVsdDpub3QoLm92ZXJsYXktaGlkZGVuKSB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qKlxuICogV2hlbiBtYWtpbmcgY3VzdG9tIGRpYWxvZ3MsIHVzaW5nXG4gKiBpb24tY29udGVudCBpcyBub3QgcmVxdWlyZWQuIEFzIGEgcmVzdWx0LFxuICogc29tZSBkZXZlbG9wZXJzIG1heSB3aXNoIHRvIGhhdmUgZGlhbG9nc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBzaXplZCBieSB0aGUgYnJvd3Nlci5cbiAqIFRoZXNlIGNoYW5nZXMgYWxsb3cgY2VydGFpbiBkaW1lbnNpb24gdmFsdWVzXG4gKiBzdWNoIGFzIGZpdC1jb250ZW50IHRvIHdvcmsgY29ycmVjdGx5LlxuICovXG5pb24tbW9kYWwgLmlvbi1wYWdlOm5vdChpb24tbmF2IC5pb24tcGFnZSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbnRhaW46IGxheW91dCBzdHlsZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWFuaW1hdGVkID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zaXRpb246IDMwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBpb24tYWNjb3JkaW9uIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKlxuICogVGhlID4gW3Nsb3Q9XCJoZWFkZXJcIl0gc2VsZWN0b3IgZW5zdXJlcyB0aGF0IHdlIGRvXG4gKiBub3QgbW9kaWZ5IHRvZ2dsZSBpY29ucyBmb3IgYW55IG5lc3RlZCBhY2NvcmRpb25zLiBUaGUgc3RhdGVcbiAqIG9mIG9uZSBhY2NvcmRpb24gc2hvdWxkIG5vdCBhZmZlY3QgYW55IGFjY29yZGlvbnMgaW5zaWRlXG4gKiBvZiBhIG5lc3RlZCBhY2NvcmRpb24gZ3JvdXAuXG4gKi9cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1wcmV2aW91cyBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmc6Zmlyc3Qtb2YtdHlwZSxcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taW5wdXQgaW5wdXQ6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4vKipcbiAqIFRoZSAuaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IGNsYXNzIGNvbnRhaW5zXG4gKiBzdHlsZXMgdGhhdCBhbGxvdyBhbnkgbW9kYWwvcG9wb3ZlciB0byBiZVxuICogc2l6ZWQgYWNjb3JkaW5nIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBkYXRldGltZVxuICogd2hlbiB1c2VkIHdpdGggaW9uLWRhdGV0aW1lLWJ1dHRvbi5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSB7XG4gIC0td2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi8qKlxuICogVGhlIGdyaWQgdmFyaWFudCBjYW4gc2NhbGUgZG93biB3aGVuIGlubGluZS5cbiAqIFdoZW4gdXNlZCBpbiBhIGBmaXQtY29udGVudGAgb3ZlcmxheSwgdGhpcyBjYXVzZXNcbiAqIHRoZSBvdmVybGF5IHRvIHNocmluayB3aGVuIHRoZSBtb250aC95ZWFyIHBpY2tlciBpcyBvcGVuLlxuICogRXhwbGljaXRseSBzZXR0aW5nIHRoZSBkaW1lbnNpb25zIGxldHMgdXMgaGF2ZSBhIGNvbnNpc3RlbnRseVxuICogc2l6ZWQgZ3JpZCBpbnRlcmZhY2UuXG4gKi9cbi5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgaW9uLWRhdGV0aW1lLmRhdGV0aW1lLWdyaWQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuL2lvbmljLmRlcHJlY2F0aW9uXCI7XG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiXG4vLyBHbG9iYWwgVXRpbGl0eSBGdW5jdGlvbnNcbkBpbXBvcnQgXCIuL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmdcIjtcblxuLy8gR2xvYmFsIENvbG9yIEZ1bmN0aW9uc1xuQGltcG9ydCBcIi4vaW9uaWMuZnVuY3Rpb25zLmNvbG9yXCI7XG5cbi8vIEdsb2JhbCBNaXhpbnNcbkBpbXBvcnQgXCIuL2lvbmljLm1peGluc1wiO1xuXG4vLyBEZWZhdWx0IFRoZW1lXG5AaW1wb3J0IFwiLi9pb25pYy50aGVtZS5kZWZhdWx0XCI7XG5cblxuLy8gRGVmYXVsdCBHZW5lcmFsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgICAgICAgdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGFwcCBkaXJlY3Rpb25cbiRhcHAtZGlyZWN0aW9uOiBudWxsICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgZm9udCBwYXRoXG4kZm9udC1wYXRoOiBcIi9kaXN0L2ZvbnRzXCIgIWRlZmF1bHQ7XG5cbi8vIEhhaXJsaW5lcyB3aWR0aFxuJGhhaXJsaW5lcy13aWR0aDogLjU1cHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cblxuLy8gWi1JbmRleFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdyb3VwZWQgYnkgZWxlbWVudHMgd2hpY2ggd291bGQgYmUgc2libGluZ3NcblxuJHotaW5kZXgtbWVudS1vdmVybGF5OiAgICAgICAgICAgMTAwMDtcbiR6LWluZGV4LW92ZXJsYXk6ICAgICAgICAgICAgICAgIDEwMDE7XG4kei1pbmRleC1jbGljay1ibG9jazogICAgICAgICAgICA5OTk5OTtcblxuJHotaW5kZXgtZml4ZWQtY29udGVudDogICAgICAgICAgOTk5O1xuJHotaW5kZXgtc2Nyb2xsLWNvbnRlbnQ6ICAgICAgICAgMTtcbiR6LWluZGV4LXJlZnJlc2hlcjogICAgICAgICAgICAgIC0xO1xuXG4kei1pbmRleC1wYWdlLWNvbnRhaW5lcjogICAgICAgICAwO1xuJHotaW5kZXgtdG9vbGJhcjogICAgICAgICAgICAgICAgMTA7XG4kei1pbmRleC10b29sYmFyLWJhY2tncm91bmQ6ICAgICAtMTtcbiR6LWluZGV4LXRvb2xiYXItYnV0dG9uczogICAgICAgIDk5O1xuXG4kei1pbmRleC1iYWNrZHJvcDogICAgICAgICAgICAgICAyO1xuJHotaW5kZXgtb3ZlcmxheS13cmFwcGVyOiAgICAgICAgMTA7XG5cbiR6LWluZGV4LWl0ZW0tb3B0aW9uczogICAgICAgICAgIDE7XG4kei1pbmRleC1pdGVtLWlucHV0OiAgICAgICAgICAgICAyO1xuJHotaW5kZXgtaXRlbS1kaXZpZGVyOiAgICAgICAgICAgMTAwO1xuXG4kei1pbmRleC1yZW9yZGVyLXNlbGVjdGVkOiAgICAgICAxMDA7XG4iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWVzL2lvbmljLmdsb2JhbHMuaW9zXCI7XG5cbi8vIGlPUyBNZW51XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBCYWNrZ3JvdW5kIG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYmFja2dyb3VuZDogICAgICAgICAgICAkYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBjb2xvciBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3I6ICAgICAgcmdiYSgwLCAwLCAwLCAuMDgpICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdzogICAgICAgICAgICAtOHB4IDAgNDJweCAkbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudSBpbiBydGwgbW9kZVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcnRsOiAgICAgICAgOHB4IDAgNDJweCAkbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcmV2ZWFsIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDogICAgICRtZW51LWlvcy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSByZXZlYWwgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsLXJ0bDogJG1lbnUtaW9zLWJveC1zaGFkb3ctcnRsICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBwdXNoIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXB1c2g6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG92ZXJsYXkgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctb3ZlcmxheTogICAgbnVsbCAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZXMvaW9uaWMuZ2xvYmFscy5tZFwiO1xuXG4vLyBNYXRlcmlhbCBEZXNpZ24gTWVudVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gQmFja2dyb3VuZCBvZiB0aGUgbWVudVxuJG1lbnUtbWQtYmFja2dyb3VuZDogICAgICAgICAgICAkYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudVxuJG1lbnUtbWQtYm94LXNoYWRvdzogICAgICAgICAgICA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KSAhZGVmYXVsdDtcbiIsIi8vICEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzXG5cblxuLy8gSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gMS4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAxXG59XG5cbi8vIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4vLyBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBoZWlnaHQ6IDA7XG59XG5cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4vLyBFbWJlZGRlZCBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICBib3JkZXI6IDA7XG59XG5cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi8vIEdyb3VwaW5nIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcblxuICBib3JkZXItd2lkdGg6IDA7XG5cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8vIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuXG4vLyBGb3Jtc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbi8vIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cblxuLy8gMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4vLyAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcblxuICBoZWlnaHQ6IGF1dG87XG5cbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDsgLy8gM1xuXG4gIGZvbnQ6IGluaGVyaXQ7IC8vIDJcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbn1cblxuLy8gMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2Bcbi8vICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuLy8gMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuLy8gMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbi8vICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gM1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG59XG5cbi8vIHJlbW92ZSAzMDBtcyBkZWxheVxuYSxcbmEgZGl2LFxuYSBzcGFuLFxuYSBpb24taWNvbixcbmEgaW9uLWxhYmVsLFxuYnV0dG9uLFxuYnV0dG9uIGRpdixcbmJ1dHRvbiBzcGFuLFxuYnV0dG9uIGlvbi1pY29uLFxuYnV0dG9uIGlvbi1sYWJlbCxcbi5pb24tdGFwcGFibGUsXG5bdGFwcGFibGVdLFxuW3RhcHBhYmxlXSBkaXYsXG5bdGFwcGFibGVdIHNwYW4sXG5bdGFwcGFibGVdIGlvbi1pY29uLFxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmEgaW9uLWxhYmVsLFxuYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuYVtkaXNhYmxlZF0sXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG59XG5cbi8vIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXG4vLyAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxuLy8gMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBhZGRpbmc6IDA7IC8vIDJcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyAxXG59XG5cbi8vIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXG4vLyBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxuLy8gZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cblxuLy8gVGFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXG5cbi8vIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG5cbi8vIFN0cnVjdHVyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFkZHMgc3RydWN0dXJhbCBjc3MgdG8gdGhlIG5hdGl2ZSBodG1sIGVsZW1lbnRzXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLmlvbi1jZSBib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBAaW5jbHVkZSBmb250LXNtb290aGluZygpO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG4gIEBpbmNsdWRlIHBhZGRpbmcoMCk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcblxuICAvKipcbiAgICogQmVjYXVzZSBib2R5IGhhcyBwb3NpdGlvbjogZml4ZWQsXG4gICAqIGl0IHNob3VsZCBiZSBwcm9tb3RlZCB0byBpdHMgb3duXG4gICAqIGxheWVyLlxuICAgKlxuICAgKiBXZWJLaXQgZG9lcyBub3QgYWx3YXlzIHByb21vdGVcbiAgICogdGhlIGJvZHkgdG8gaXRzIG93biBsYXllciBvbiBwYWdlXG4gICAqIGxvYWQgaW4gSW9uaWMgYXBwcy4gT25jZSBzY3JvbGxpbmcgb25cbiAgICogaW9uLWNvbnRlbnQgc3RhcnRzLCBXZWJLaXQgd2lsbCBwcm9tb3RlXG4gICAqIGJvZHkuIFVuZm9ydHVuYXRlbHksIHRoaXMgY2F1c2VzIGEgcmUtcGFpbnRcbiAgICogd2hpY2ggcmVzdWx0cyBpbiBzY3JvbGxpbmcgYmVpbmcgaGFsdGVkXG4gICAqIHVudGlsIHRoZSBuZXh0IHVzZXIgZ2VzdHVyZS5cbiAgICpcbiAgICogVGhpcyBpbXBhY3RzIHRoZSBDdXN0b20gRWxlbWVudHMgYnVpbGQuXG4gICAqIFRoZSBsYXp5IGxvYWRlZCBidWlsZCBjYXVzZXMgdGhlIGJyb3dzZXIgdG9cbiAgICogcmUtcGFpbnQgZHVyaW5nIGh5ZHJhdGlvbiB3aGljaCBjYXVzZXMgV2ViS2l0XG4gICAqIHRvIHByb21vdGUgYm9keSB0byBpdHMgb3duIGxheWVyLlxuICAgKiBJbiB0aGUgQ0UgQnVpbGQsIHRoaXMgaHlkcmF0aW9uIGRvZXMgbm90XG4gICAqIGhhcHBlbiwgc28gdGhlIGFkZGl0aW9uYWwgcmUtcGFpbnQgZG9lcyBub3Qgb2NjdXIuXG4gICAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG5cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcblxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5pb24tY2UgYm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgLyoqXG4gICAqIEJlY2F1c2UgYm9keSBoYXMgcG9zaXRpb246IGZpeGVkLFxuICAgKiBpdCBzaG91bGQgYmUgcHJvbW90ZWQgdG8gaXRzIG93blxuICAgKiBsYXllci5cbiAgICpcbiAgICogV2ViS2l0IGRvZXMgbm90IGFsd2F5cyBwcm9tb3RlXG4gICAqIHRoZSBib2R5IHRvIGl0cyBvd24gbGF5ZXIgb24gcGFnZVxuICAgKiBsb2FkIGluIElvbmljIGFwcHMuIE9uY2Ugc2Nyb2xsaW5nIG9uXG4gICAqIGlvbi1jb250ZW50IHN0YXJ0cywgV2ViS2l0IHdpbGwgcHJvbW90ZVxuICAgKiBib2R5LiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGNhdXNlcyBhIHJlLXBhaW50XG4gICAqIHdoaWNoIHJlc3VsdHMgaW4gc2Nyb2xsaW5nIGJlaW5nIGhhbHRlZFxuICAgKiB1bnRpbCB0aGUgbmV4dCB1c2VyIGdlc3R1cmUuXG4gICAqXG4gICAqIFRoaXMgaW1wYWN0cyB0aGUgQ3VzdG9tIEVsZW1lbnRzIGJ1aWxkLlxuICAgKiBUaGUgbGF6eSBsb2FkZWQgYnVpbGQgY2F1c2VzIHRoZSBicm93c2VyIHRvXG4gICAqIHJlLXBhaW50IGR1cmluZyBoeWRyYXRpb24gd2hpY2ggY2F1c2VzIFdlYktpdFxuICAgKiB0byBwcm9tb3RlIGJvZHkgdG8gaXRzIG93biBsYXllci5cbiAgICogSW4gdGhlIENFIEJ1aWxkLCB0aGlzIGh5ZHJhdGlvbiBkb2VzIG5vdFxuICAgKiBoYXBwZW4sIHNvIHRoZSBhZGRpdGlvbmFsIHJlLXBhaW50IGRvZXMgbm90IG9jY3VyLlxuICAgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHJ1Y3R1cmUuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gRm9udCB3ZWlnaHQgb2YgYWxsIGhlYWRpbmdzXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAgNTAwICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBMaW5lIGhlaWdodCBvZiBhbGwgaGVhZGluZ3NcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgICAxLjIgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDFcbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyNnB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAyXG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjRweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgM1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDRcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA1XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMThweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNlxuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBAaW5jbHVkZSBtYXJnaW4oMTZweCwgbnVsbCwgMTBweCwgbnVsbCk7XG5cbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcblxuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xufVxuXG5oMSB7XG4gIEBpbmNsdWRlIG1hcmdpbigyMHB4LCBudWxsLCBudWxsLCBudWxsKTtcblxuICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XG59XG5cbmgyIHtcbiAgQGluY2x1ZGUgbWFyZ2luKDE4cHgsIG51bGwsIG51bGwsIG51bGwpO1xuXG4gIGZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6ICRoMy1mb250LXNpemU7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAkaDQtZm9udC1zaXplO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogJGg1LWZvbnQtc2l6ZTtcbn1cblxuaDYge1xuICBmb250LXNpemU6ICRoNi1mb250LXNpemU7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmb250LXNpemU6IDc1JTtcblxuICBsaW5lLWhlaWdodDogMDtcblxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLS41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLS4yNWVtO1xufVxuIiwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuaDMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gRGlzcGxheVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZGlmaWVzIGRpc3BsYXkgb2YgYSBwYXJ0aWN1bGFyIGVsZW1lbnQgYmFzZWQgb24gdGhlIGdpdmVuIGNsYXNzZXNcblxuLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGRzIGhpZGRlbiBjbGFzc2VzXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYGlvbi1oaWRlLXticH0tdXBgIGNsYXNzZXMgZm9yIGhpZGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi1oaWRlI3skaW5maXh9LXVwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGBpb24taGlkZS17YnB9LWRvd25gIGNsYXNzZXMgZm9yIGhpZGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi1oaWRlI3skaW5maXh9LWRvd24ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtdXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS1kb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1oaWRlLXNtLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuaW9uLWhpZGUtc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1oaWRlLWxnLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuaW9uLWhpZGUtbGctZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pb24taGlkZS14bC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG5cbi8vIEVsZW1lbnQgU3BhY2Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHBhZGRpbmcgYW5kIG1hcmdpbiBhdHRyaWJ1dGVzIHRvIGJlIHVzZWQgb25cbi8vIGFueSBlbGVtZW50XG5cbiRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4kbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcblxuLy8gUGFkZGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoMCk7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1lbmQ6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nLCBudWxsLCBudWxsLCBudWxsKTtcbn1cblxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKG51bGwsICRwYWRkaW5nKTtcbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcobnVsbCwgbnVsbCwgJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZywgbnVsbCwgJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIC0tcGFkZGluZy1zdGFydDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1lbmQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkcGFkZGluZyk7XG59XG5cblxuLy8gTWFyZ2luXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLW5vLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuXG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi10b3A6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWJvdHRvbTogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbik7XG59XG5cbi5pb24tbWFyZ2luLXRvcCB7XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbiwgbnVsbCwgbnVsbCwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJG1hcmdpbiwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLWVuZCB7XG4gIC0tbWFyZ2luLWVuZDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAkbWFyZ2luKTtcbn1cblxuLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbihudWxsLCBudWxsLCAkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWJvdHRvbTogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbiwgbnVsbCwgJG1hcmdpbiwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRtYXJnaW4pO1xufSIsIi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctc3RhcnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctZW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1zdGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tZW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBGbG9hdCBFbGVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgZmxvYXQgY2xhc3NlcyBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYC5pb24tZmxvYXQte2JwfS17c2lkZX1gIGNsYXNzZXMgZm9yIGZsb2F0aW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnQgYW5kIHNpZGVcbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LWxlZnQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQobGVmdCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1yaWdodCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChyaWdodCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1zdGFydCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChzdGFydCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1lbmQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQoZW5kLCAhaW1wb3J0YW50KTtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUZXh0IEFsaWdubWVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgdGV4dCBhbGlnbm1lbnQgYXR0cmlidXRlcyBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYC5pb24tdGV4dC17YnB9YCBjbGFzc2VzIGZvciBhbGlnbmluZyB0aGUgdGV4dCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tanVzdGlmeSB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXN0YXJ0IHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWVuZCB7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXJpZ2h0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LW5vd3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXdyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20td3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LWFsaWdubWVudC5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUZXh0IFRyYW5zZm9ybWF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyB0ZXh0IHRyYW5zZm9ybSBhdHRyaWJ1dGVzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi10ZXh0LXticH1gIGNsYXNzZXMgZm9yIHRyYW5zZm9ybWluZyB0aGUgdGV4dCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXVwcGVyY2FzZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWxvd2VyY2FzZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWNhcGl0YWxpemUge1xuICAgICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tdGV4dC11cHBlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxvd2VyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtY2FwaXRhbGl6ZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcy5tYXAgKi9cbiIsIi8vIEZsZXggVXRpbGl0aWVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBmbGV4IGNsYXNzZXMgdG8gYWxpZ24gZmxleCBjb250YWluZXJzXG4vLyBhbmQgaXRlbXNcblxuLy8gQWxpZ24gU2VsZlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gRmxleCBXcmFwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gSnVzdGlmeSBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuXG4vLyBBbGlnbiBJdGVtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG4iLCIuaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsZXgtdXRpbHMuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL2dsb2JhbC5zY3NzXCI7XG5cbi5hY3RpdmUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRwcmltYXJ5O1xuICBjb2xvcjogJHByaW1hcnk7XG5cbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4ubWVudWhlYWRlciB7XG4gIGhlaWdodDogMzElO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlXG4gICk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG4gIG1hcmdpbi10b3A6IC0zOSU7XG4gIG1hcmdpbi1ib3R0b206IDM0JTtcbiAgd2lkdGg6IDE1MCU7XG59XG4ubWVudUxpc3Qge1xuICBtYXJnaW46IDA7XG4gIG1hdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cbn1cbmlvbi1tZW51IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuLy8gYXBwLXJvb3R7XG4vLyAgIC8vIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9iZy5qcGVnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4vLyB9XG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1NXB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDU1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1NXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweDtcbn1cblxuLm1lbnVoZWFkZXJjb250ZW50e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogOC4xJTtcbiAgbGVmdDogNy4yJTtcblxufVxuXG5pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG59XG5cbi5kcm9we1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xufVxuXG5cbi5pbWd0ZXh0e1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDEyJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHdpZHRoOiA4MCU7XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-header mode=\"ios\">\n    <ion-toolbar class=\"app-toolbar\" color=\"primary\">\n      <ion-button\n        size=\"small\"\n        class=\"menuicon\"\n        (click)=\"onBack()\"\n        *ngIf=\"pageEvent?.displayBackButton\"\n      >\n        <mat-icon end>arrow_back_ios</mat-icon>\n      </ion-button>\n      <ion-title>{{ pageEvent?.title || \"\" }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          class=\"menuicon\"\n          *ngIf=\"!auth.isLoggedIn && pageEvent?.hideLogin !== true\"\n          routerLink=\"/login\"\n        >\n          <mat-icon end>lock</mat-icon>\n        </ion-button>\n        <ion-button\n          class=\"menuicon\"\n          *ngIf=\"auth.isLoggedIn && pageEvent?.hideLogin !== true\"\n        >\n          <mat-icon end>lock_open</mat-icon>\n        </ion-button>\n        <ion-menu-button\n          menu=\"main-menu\"\n          *ngIf=\"pageEvent?.hideMenu !== true\"\n        ></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <mat-progress-bar\n      mode=\"indeterminate\"\n      *ngIf=\"util.isLoading\"\n    ></mat-progress-bar>\n  </ion-header>\n  <ion-menu menuId=\"main-menu\" contentId=\"main\" side=\"end\">\n    <ion-content>\n      <div class=\"menuheader\">\n        <!-- <div class=\"menuheadercontent\"> -->\n        <img src=\"./assets/icon.png\" />\n        <!-- </div> -->\n      </div>\n      <img src=\"./assets/name.png\" class=\"imgtext\" />\n\n      <div class=\"menu-item\">\n        <ion-list class=\"menuList\">\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'bill'\">\n            <ion-item routerLink=\"/tab\" routerLinkActive=\"active\">\n              <mat-icon>create</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"bill\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'item'\">\n            <ion-item routerLink=\"/tab-item\" routerLinkActive=\"active\">\n              <mat-icon>view_list</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"item\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'config'\">\n            <ion-item routerLink=\"/configures\" routerLinkActive=\"active\">\n              <mat-icon>view_module</mat-icon>\n              <span> {{ util.metaData?.menuItems | menu : \"config\" : \"true\" }}</span>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'reports'\">\n            <ion-item routerLink=\"/reports\" routerLinkActive=\"active\">\n              <mat-icon>report</mat-icon>\n              <span>{{ util.metaData?.menuItems | menu : \"reports\" : \"true\" }}</span>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle\n            *ngIf=\"util.metaData?.menuItems | menu : 'appsettings'\"\n          >\n            <ion-item routerLink=\"/appsetting\" routerLinkActive=\"active\">\n              <mat-icon>settings</mat-icon>\n              <span>{{ util.metaData?.menuItems | menu : \"appsettings\" : \"true\" }}</span>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'emp'\">\n            <ion-item routerLink=\"/employee-tab\" routerLinkActive=\"active\">\n              <mat-icon>create</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"emp\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"util.metaData?.menuItems | menu : 'profile'\">\n            <mat-divider></mat-divider>\n            <ion-item routerLink=\"/profile\" routerLinkActive=\"active\">\n              <mat-icon>person</mat-icon>\n              {{ util.metaData?.menuItems | menu : \"profile\" : \"true\" }}\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n            <mat-divider></mat-divider>\n            <ion-item (click)=\"appLogout()\" [disabled]=\"!auth.isLoggedIn\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>LogOut</span>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </div>\n    </ion-content>\n  </ion-menu>\n\n  <ion-content> <ion-router-outlet id=\"main\"></ion-router-outlet></ion-content>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map