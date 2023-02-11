"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_appsetting_appsetting_module_ts"],{

/***/ 86586:
/*!*********************************************************!*\
  !*** ./src/app/appsetting/appsetting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsettingPageRoutingModule": () => (/* binding */ AppsettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _appsetting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appsetting.page */ 36378);




const routes = [
    {
        path: '',
        component: _appsetting_page__WEBPACK_IMPORTED_MODULE_0__.AppsettingPage,
        data: { title: 'App Settings' },
    },
];
let AppsettingPageRoutingModule = class AppsettingPageRoutingModule {
};
AppsettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppsettingPageRoutingModule);



/***/ }),

/***/ 21294:
/*!*************************************************!*\
  !*** ./src/app/appsetting/appsetting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsettingPageModule": () => (/* binding */ AppsettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appsetting-routing.module */ 86586);
/* harmony import */ var _appsetting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appsetting.page */ 36378);







let AppsettingPageModule = class AppsettingPageModule {
};
AppsettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsettingPageRoutingModule
        ],
        declarations: [_appsetting_page__WEBPACK_IMPORTED_MODULE_1__.AppsettingPage]
    })
], AppsettingPageModule);



/***/ }),

/***/ 36378:
/*!***********************************************!*\
  !*** ./src/app/appsetting/appsetting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsettingPage": () => (/* binding */ AppsettingPage)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appsetting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appsetting.page.html?ngResource */ 78710);
/* harmony import */ var _appsetting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appsetting.page.scss?ngResource */ 3314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/util */ 17699);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 71970);
/* harmony import */ var _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/utilservice.service */ 40847);
/* harmony import */ var _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/bluetooth-le */ 70695);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/alert.service */ 75412);
/* harmony import */ var _providers_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/theme.service */ 9609);
/* harmony import */ var _providers_printer_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/printer-service.service */ 3573);













let AppsettingPage = class AppsettingPage {
  constructor(theme, store, util, alert, alertCtrl, printerService) {
    var _this = this;

    this.theme = theme;
    this.store = store;
    this.util = util;
    this.alert = alert;
    this.alertCtrl = alertCtrl;
    this.printerService = printerService;
    this.thermalPrinter = null;
    this.numberOfRecipt = 1;
    this.themeColor = [{
      name: 'Default',
      class: 'default'
    }, {
      name: 'Dark',
      class: 'dark-theme'
    }, {
      name: 'Grapes',
      class: 'green'
    }, {
      name: 'Orange',
      class: 'orange'
    }, {
      name: 'Strawberry',
      class: 'crimson'
    }, {
      name: 'Blueberry',
      class: 'purple'
    }];
    this.pageSettingBill = [{
      name: '1',
      value: 1
    }, {
      name: '5',
      value: 5
    }, {
      name: '10',
      value: 10
    }, {
      name: '20',
      value: 20
    }, {
      name: '30',
      value: 30
    }];
    this.pageSettingReport = [{
      name: '1',
      value: 1
    }, {
      name: '5',
      value: 5
    }, {
      name: '10',
      value: 10
    }, {
      name: '20',
      value: 20
    }, {
      name: '30',
      value: 30
    }];
    this.allPrinter = [];
    this.selectedPrinter = null;

    this.dynamicTheme = () => {
      this.selectTheme = this.theme.selectTheme || this.themeColor[0].class;
      this.theme.activeTheme(this.selectTheme);
    };

    this.onThemeChange = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.store.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.THEME, _this.selectTheme).catch(er => {});
      _this.theme.selectTheme = _this.selectTheme;

      _this.dynamicTheme();
    });
    this.onBillChange = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.store.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PAGEBILL, _this.selectPageSettingBill).catch(er => {});
      _this.util.maxPageCount = _this.selectPageSettingBill;
    });
    this.onReportChange = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.store.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PAGEREPORT, _this.selectPageSettingReport).catch(er => {});
      _this.util.maxPageCountReport = _this.selectPageSettingReport;
    });

    this.onClickPrinterSetup = () => {
      // this.setUpBleClient();
      this.fetchPrinter();
    };

    this.fetchPrinter = () => {
      this.util.isLoading = true;
      this.printerService.getListOfPrinter().then(e => {
        this.util.isLoading = false;
        this.allPrinter = e;
      }).catch(e => {
        this.util.isLoading = false;
        this.alert.presentAlert(this.alertCtrl, 'Printer Error', e);
      });
    };

    this.connectToPrinter = () => {
      this.printerService.print(`[C]<u><font size='small'>${this.getTestText()}</font></u>`, this.util.printer);
    };

    this.getTestText = () => {
      const message = ['The first casualty when war comes is truth, -Hiram W Johnson. But who decide what truth is', 'Keep Your Blood In, You`ll Need Every Drop.-Ghost', 'Terrorism Is Good For Business. It`s Insurance.- Valeria', 'When the power of love overcomes the love of power the world will know peace. -Jimi Hendrix', 'Every new day begins with possibilities. It`s up to us to fill it with the things that move us toward progress and peace. -Ronald Reagan', 'War does not determine who is right - only who is left. -Bertrand Russell', 'Older men declare war. But it is the youth that must fight and die. -Herbert Hoover', 'Before you embark on a journey of revenge, dig two graves. -Confucius', 'The truth of the matter is that you always know the right thing to do. The hard part is doing it. -Robert H. Schuller', 'Patriotism is your conviction that this country is superior to all others because you were born in it. -George Bernard Shaw', 'A leader leads by example not by force. -Sun Tzu', 'A citizen will cross the ocean to fight for democracy, but won`t cross the street to vote in a national election.', 'Whether you like it or not, history is on our side. We will bury you!, -Nikita Khrushchev', 'Principle is OK up to a certain point, but principle doesn`t do any good if you lose. -Dick Cheney', 'I think the human race needs to think about killing. How much evil must we do to do good? -Robert McNamara', 'If the enemy is in range, so are you.', 'War is delightful to those who have not yet experienced it.', `Nearly all men can stand adversity, but if you want to test a man's character, give him power.`, `Never forget that your weapon was made by the lowest bidder.`, `Heroes may not be braver than anyone else. They're just brave five minutes longer.`];
      const index = this.generateRangom(0, message.length);
      return message[index] || message[0];
    };

    this.generateRangom = (low, up) => {
      const u = Math.max(low, up);
      const l = Math.min(low, up);
      const diff = u - l;
      const r = Math.floor(Math.random() * (diff + 1)); //'+1' because Math.random() returns 0..0.99, it does not include 'diff' value, so we do +1, so 'diff + 1' won't be included, but just 'diff' value will be.

      return l + r; //add the random number that was selected within distance between low and up to the lower limit.
    };

    this.onDeviceChange = /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.util.printer = _this.selectedPrinter;
      yield _this.store.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.PRINTER, _this.selectedPrinter);
    });

    this.test = () => {
      this.connectToPrinter();
    };

    this.onChange = ev => {
      this.util.numberOfRecipt = this.numberOfRecipt;
      this.store.setStorage(src_model_util__WEBPACK_IMPORTED_MODULE_3__.StoreName.RECIPTNUMBER, this.numberOfRecipt);
    };

    this.dynamicTheme();
    this.selectPageSettingBill = this.util.maxPageCount;
    this.selectPageSettingReport = this.util.maxPageCountReport;
    this.selectedPrinter = this.util.printer;
    if (this.selectedPrinter) this.allPrinter = [this.selectedPrinter];
    this.thermalPrinter = this.printerService.checkPrinterDriver();
    this.numberOfRecipt = this.util.numberOfRecipt === undefined ? 1 : this.util.numberOfRecipt;
  }

  ngOnInit() {
    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_6__.BleClient.initialize({
        androidNeverForLocation: true
      });
    })();
  }

};

AppsettingPage.ctorParameters = () => [{
  type: _providers_theme_service__WEBPACK_IMPORTED_MODULE_8__.ThemeService
}, {
  type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__.AppStorageService
}, {
  type: _providers_utilservice_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: _providers_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _providers_printer_service_service__WEBPACK_IMPORTED_MODULE_9__.PrinterService
}];

AppsettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-appsetting',
  template: _appsetting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_appsetting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppsettingPage);


/***/ }),

/***/ 47654:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/bleClient.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BleClient": () => (/* binding */ BleClient)
/* harmony export */ });
/* harmony import */ var _Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion */ 1193);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ 90391);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queue */ 83013);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators */ 65762);







class BleClientClass {
  constructor() {
    this.scanListener = null;
    this.eventListeners = new Map();
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(true);
  }

  enableQueue() {
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(true);
  }

  disableQueue() {
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(false);
  }

  initialize(options) {
    var _this = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.initialize(options);
      }));
    })();
  }
  /**
   * Reports whether BLE is enabled on this device.
   * Always returns `true` on **web**.
   * @deprecated Use `isEnabled` instead.
   */


  getEnabled() {
    var _this2 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.isEnabled();
    })();
  }

  isEnabled() {
    var _this3 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const enabled = yield _this3.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isEnabled();
        return result.value;
      }));
      return enabled;
    })();
  }

  enable() {
    var _this4 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.enable();
      }));
    })();
  }

  disable() {
    var _this5 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.disable();
      }));
    })();
  }

  startEnabledNotifications(callback) {
    var _this6 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `onEnabledChanged`;
        yield (_a = _this6.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
        const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, result => {
          callback(result.value);
        });

        _this6.eventListeners.set(key, listener);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.startEnabledNotifications();
      }));
    })();
  }

  stopEnabledNotifications() {
    var _this7 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `onEnabledChanged`;
        yield (_a = _this7.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();

        _this7.eventListeners.delete(key);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopEnabledNotifications();
      }));
    })();
  }

  isLocationEnabled() {
    var _this8 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const enabled = yield _this8.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isLocationEnabled();
        return result.value;
      }));
      return enabled;
    })();
  }

  openLocationSettings() {
    var _this9 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openLocationSettings();
      }));
    })();
  }

  openBluetoothSettings() {
    var _this10 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openBluetoothSettings();
      }));
    })();
  }

  openAppSettings() {
    var _this11 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openAppSettings();
      }));
    })();
  }

  setDisplayStrings(displayStrings) {
    var _this12 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this12.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.setDisplayStrings(displayStrings);
      }));
    })();
  }

  requestDevice(options) {
    var _this13 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      options = options ? _this13.validateRequestBleDeviceOptions(options) : undefined;
      const result = yield _this13.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const device = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.requestDevice(options);
        return device;
      }));
      return result;
    })();
  }

  requestLEScan(options, callback) {
    var _this14 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      options = _this14.validateRequestBleDeviceOptions(options);
      yield _this14.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        yield (_a = _this14.scanListener) === null || _a === void 0 ? void 0 : _a.remove();
        _this14.scanListener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener('onScanResult', resultInternal => {
          const result = Object.assign(Object.assign({}, resultInternal), {
            manufacturerData: _this14.convertObject(resultInternal.manufacturerData),
            serviceData: _this14.convertObject(resultInternal.serviceData),
            rawAdvertisement: resultInternal.rawAdvertisement ? _this14.convertValue(resultInternal.rawAdvertisement) : undefined
          });
          callback(result);
        });
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.requestLEScan(options);
      }));
    })();
  }

  stopLEScan() {
    var _this15 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        yield (_a = _this15.scanListener) === null || _a === void 0 ? void 0 : _a.remove();
        _this15.scanListener = null;
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopLEScan();
      }));
    })();
  }

  getDevices(deviceIds) {
    var _this16 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this16.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getDevices({
          deviceIds
        });
        return result.devices;
      }));
    })();
  }

  getConnectedDevices(services) {
    var _this17 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this17.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getConnectedDevices({
          services
        });
        return result.devices;
      }));
    })();
  }

  connect(deviceId, onDisconnect, options) {
    var _this18 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        if (onDisconnect) {
          const key = `disconnected|${deviceId}`;
          yield (_a = _this18.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
          const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, () => {
            onDisconnect(deviceId);
          });

          _this18.eventListeners.set(key, listener);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.connect(Object.assign({
          deviceId
        }, options));
      }));
    })();
  }

  createBond(deviceId) {
    var _this19 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this19.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.createBond({
          deviceId
        });
      }));
    })();
  }

  isBonded(deviceId) {
    var _this20 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isBonded = yield _this20.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isBonded({
          deviceId
        });
        return result.value;
      }));
      return isBonded;
    })();
  }

  disconnect(deviceId) {
    var _this21 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this21.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.disconnect({
          deviceId
        });
      }));
    })();
  }

  getServices(deviceId) {
    var _this22 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const services = yield _this22.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getServices({
          deviceId
        });
        return result.services;
      }));
      return services;
    })();
  }

  discoverServices(deviceId) {
    var _this23 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this23.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.discoverServices({
          deviceId
        });
      }));
    })();
  }

  readRssi(deviceId) {
    var _this24 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = yield _this24.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.readRssi({
          deviceId
        });
        return parseFloat(result.value);
      }));
      return value;
    })();
  }

  read(deviceId, service, characteristic, options) {
    var _this25 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      const value = yield _this25.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.read(Object.assign({
          deviceId,
          service,
          characteristic
        }, options));
        return _this25.convertValue(result.value);
      }));
      return value;
    })();
  }

  write(deviceId, service, characteristic, value, options) {
    var _this26 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      return _this26.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.write(Object.assign({
          deviceId,
          service,
          characteristic,
          value: writeValue
        }, options));
      }));
    })();
  }

  writeWithoutResponse(deviceId, service, characteristic, value, options) {
    var _this27 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this27.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.writeWithoutResponse(Object.assign({
          deviceId,
          service,
          characteristic,
          value: writeValue
        }, options));
      }));
    })();
  }

  readDescriptor(deviceId, service, characteristic, descriptor, options) {
    var _this28 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      descriptor = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(descriptor);
      const value = yield _this28.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.readDescriptor(Object.assign({
          deviceId,
          service,
          characteristic,
          descriptor
        }, options));
        return _this28.convertValue(result.value);
      }));
      return value;
    })();
  }

  writeDescriptor(deviceId, service, characteristic, descriptor, value, options) {
    var _this29 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      descriptor = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(descriptor);
      return _this29.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.writeDescriptor(Object.assign({
          deviceId,
          service,
          characteristic,
          descriptor,
          value: writeValue
        }, options));
      }));
    })();
  }

  startNotifications(deviceId, service, characteristic, callback) {
    var _this30 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this30.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `notification|${deviceId}|${service}|${characteristic}`;
        yield (_a = _this30.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
        const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, event => {
          callback(_this30.convertValue(event === null || event === void 0 ? void 0 : event.value));
        });

        _this30.eventListeners.set(key, listener);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.startNotifications({
          deviceId,
          service,
          characteristic
        });
      }));
    })();
  }

  stopNotifications(deviceId, service, characteristic) {
    var _this31 = this;

    return (0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this31.queue( /*#__PURE__*/(0,_Users_koushik_Development_chataBook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `notification|${deviceId}|${service}|${characteristic}`;
        yield (_a = _this31.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();

        _this31.eventListeners.delete(key);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopNotifications({
          deviceId,
          service,
          characteristic
        });
      }));
    })();
  }

  validateRequestBleDeviceOptions(options) {
    if (options.services) {
      options.services = options.services.map(_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID);
    }

    if (options.optionalServices) {
      options.optionalServices = options.optionalServices.map(_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID);
    }

    return options;
  }

  convertValue(value) {
    if (typeof value === 'string') {
      return (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.hexStringToDataView)(value);
    } else if (value === undefined) {
      return new DataView(new ArrayBuffer(0));
    }

    return value;
  }

  convertObject(obj) {
    if (obj === undefined) {
      return undefined;
    }

    const result = {};

    for (const key of Object.keys(obj)) {
      result[key] = this.convertValue(obj[key]);
    }

    return result;
  }

}

const BleClient = new BleClientClass();

/***/ }),

/***/ 93052:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/config.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1193:
/*!*******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/conversion.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataViewToHexString": () => (/* binding */ dataViewToHexString),
/* harmony export */   "dataViewToNumbers": () => (/* binding */ dataViewToNumbers),
/* harmony export */   "dataViewToText": () => (/* binding */ dataViewToText),
/* harmony export */   "hexStringToDataView": () => (/* binding */ hexStringToDataView),
/* harmony export */   "mapToObject": () => (/* binding */ mapToObject),
/* harmony export */   "numberToUUID": () => (/* binding */ numberToUUID),
/* harmony export */   "numbersToDataView": () => (/* binding */ numbersToDataView),
/* harmony export */   "textToDataView": () => (/* binding */ textToDataView),
/* harmony export */   "webUUIDToString": () => (/* binding */ webUUIDToString)
/* harmony export */ });
/**
 * Convert an array of numbers into a DataView.
 */
function numbersToDataView(value) {
  return new DataView(Uint8Array.from(value).buffer);
}
/**
 * Convert a DataView into an array of numbers.
 */

function dataViewToNumbers(value) {
  return Array.from(new Uint8Array(value.buffer));
}
/**
 * Convert a string into a DataView.
 */

function textToDataView(value) {
  return numbersToDataView(value.split('').map(s => s.charCodeAt(0)));
}
/**
 * Convert a DataView into a string.
 */

function dataViewToText(value) {
  return String.fromCharCode(...dataViewToNumbers(value));
}
/**
 * Convert a 16 bit UUID into a 128 bit UUID string
 * @param value number, e.g. 0x180d
 * @return string, e.g. '0000180d-0000-1000-8000-00805f9b34fb'
 */

function numberToUUID(value) {
  return `0000${value.toString(16).padStart(4, '0')}-0000-1000-8000-00805f9b34fb`;
}
function hexStringToDataView(value) {
  const numbers = value.trim().split(' ').filter(e => e !== '').map(s => parseInt(s, 16));
  return numbersToDataView(numbers);
}
function dataViewToHexString(value) {
  return dataViewToNumbers(value).map(n => {
    let s = n.toString(16);

    if (s.length == 1) {
      s = '0' + s;
    }

    return s;
  }).join(' ');
}
function webUUIDToString(uuid) {
  if (typeof uuid === 'string') {
    return uuid;
  } else if (typeof uuid === 'number') {
    return numberToUUID(uuid);
  } else {
    throw new Error('Invalid UUID');
  }
}
function mapToObject(map) {
  const obj = {};

  if (!map) {
    return undefined;
  }

  map.forEach((value, key) => {
    obj[key.toString()] = value;
  });
  return obj;
}

/***/ }),

/***/ 48121:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/definitions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanMode": () => (/* binding */ ScanMode)
/* harmony export */ });
/**
 * Android scan mode
 */
var ScanMode;

(function (ScanMode) {
  /**
   * Perform Bluetooth LE scan in low power mode. This mode is enforced if the scanning application is not in foreground.
   * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_LOW_POWER
   */
  ScanMode[ScanMode["SCAN_MODE_LOW_POWER"] = 0] = "SCAN_MODE_LOW_POWER";
  /**
   * Perform Bluetooth LE scan in balanced power mode. (default) Scan results are returned at a rate that provides a good trade-off between scan frequency and power consumption.
   * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_BALANCED
   */

  ScanMode[ScanMode["SCAN_MODE_BALANCED"] = 1] = "SCAN_MODE_BALANCED";
  /**
   * Scan using highest duty cycle. It's recommended to only use this mode when the application is running in the foreground.
   * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_LOW_LATENCY
   */

  ScanMode[ScanMode["SCAN_MODE_LOW_LATENCY"] = 2] = "SCAN_MODE_LOW_LATENCY";
})(ScanMode || (ScanMode = {}));

/***/ }),

/***/ 70695:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BleClient": () => (/* reexport safe */ _bleClient__WEBPACK_IMPORTED_MODULE_1__.BleClient),
/* harmony export */   "BluetoothLe": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe),
/* harmony export */   "ScanMode": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.ScanMode),
/* harmony export */   "dataViewToHexString": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString),
/* harmony export */   "dataViewToNumbers": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToNumbers),
/* harmony export */   "dataViewToText": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToText),
/* harmony export */   "hexStringToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.hexStringToDataView),
/* harmony export */   "mapToObject": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.mapToObject),
/* harmony export */   "numberToUUID": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.numberToUUID),
/* harmony export */   "numbersToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.numbersToDataView),
/* harmony export */   "textToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.textToDataView),
/* harmony export */   "webUUIDToString": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.webUUIDToString)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 48121);
/* harmony import */ var _bleClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bleClient */ 47654);
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion */ 1193);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ 90391);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 93052);






/***/ }),

/***/ 90391:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/plugin.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BluetoothLe": () => (/* binding */ BluetoothLe)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);

const BluetoothLe = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BluetoothLe', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_bluetooth-le_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 22366)).then(m => new m.BluetoothLeWeb())
});

/***/ }),

/***/ 83013:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/queue.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueue": () => (/* binding */ getQueue)
/* harmony export */ });
/* harmony import */ var throat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throat */ 47270);
/* harmony import */ var throat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throat__WEBPACK_IMPORTED_MODULE_0__);

function getQueue(enabled) {
  if (enabled) {
    return throat__WEBPACK_IMPORTED_MODULE_0___default()(1);
  } else {
    return fn => fn();
  }
}

/***/ }),

/***/ 65762:
/*!*******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/validators.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateUUID": () => (/* binding */ validateUUID)
/* harmony export */ });
function validateUUID(uuid) {
  if (typeof uuid !== 'string') {
    throw new Error(`Invalid UUID type ${typeof uuid}. Expected string.`);
  }

  uuid = uuid.toLowerCase();
  const is128BitUuid = uuid.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/) >= 0;

  if (!is128BitUuid) {
    throw new Error(`Invalid UUID format ${uuid}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);
  }

  return uuid;
}

/***/ }),

/***/ 47270:
/*!**************************************!*\
  !*** ./node_modules/throat/index.js ***!
  \**************************************/
/***/ ((module) => {



function throatInternal(size) {
  var queue = new Queue();
  var s = size | 0;

  function run(fn, self, args) {
    if ((s | 0) !== 0) {
      s = (s | 0) - 1;
      return new Promise(function (resolve) {
        resolve(fn.apply(self, args));
      }).then(onFulfill, onReject);
    }

    return new Promise(function (resolve) {
      queue.push(new Delayed(resolve, fn, self, args));
    }).then(runDelayed);
  }

  function runDelayed(d) {
    try {
      return Promise.resolve(d.fn.apply(d.self, d.args)).then(onFulfill, onReject);
    } catch (ex) {
      onReject(ex);
    }
  }

  function onFulfill(result) {
    release();
    return result;
  }

  function onReject(error) {
    release();
    throw error;
  }

  function release() {
    var next = queue.shift();

    if (next) {
      next.resolve(next);
    } else {
      s = (s | 0) + 1;
    }
  }

  return run;
}

function earlyBound(size, fn) {
  const run = throatInternal(size | 0);
  return function () {
    var args = new Array(arguments.length);

    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    return run(fn, this, args);
  };
}

function lateBound(size) {
  const run = throatInternal(size | 0);
  return function (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('Expected throat fn to be a function but got ' + typeof fn);
    }

    var args = new Array(arguments.length - 1);

    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }

    return run(fn, this, args);
  };
}

module.exports = function throat(size, fn) {
  if (typeof size === 'function') {
    var temp = fn;
    fn = size;
    size = temp;
  }

  if (typeof size !== 'number') {
    throw new TypeError('Expected throat size to be a number but got ' + typeof size);
  }

  if (fn !== undefined && typeof fn !== 'function') {
    throw new TypeError('Expected throat fn to be a function but got ' + typeof fn);
  }

  if (typeof fn === 'function') {
    return earlyBound(size | 0, fn);
  } else {
    return lateBound(size | 0);
  }
};

module.exports["default"] = module.exports;

function Delayed(resolve, fn, self, args) {
  this.resolve = resolve;
  this.fn = fn;
  this.self = self || null;
  this.args = args;
}

var blockSize = 64;

function Queue() {
  this._s1 = [];
  this._s2 = [];
  this._shiftBlock = this._pushBlock = new Array(blockSize);
  this._pushIndex = 0;
  this._shiftIndex = 0;
}

Queue.prototype.push = function (value) {
  if (this._pushIndex === blockSize) {
    this._pushIndex = 0;
    this._s1[this._s1.length] = this._pushBlock = new Array(blockSize);
  }

  this._pushBlock[this._pushIndex++] = value;
};

Queue.prototype.shift = function () {
  if (this._shiftIndex === blockSize) {
    var s2 = this._s2;

    if (s2.length === 0) {
      var s1 = this._s1;

      if (s1.length === 0) {
        return undefined;
      }

      this._s1 = s2;
      s2 = this._s2 = s1.reverse();
    }

    this._shiftIndex = 0;
    this._shiftBlock = s2.pop();
  }

  if (this._pushBlock === this._shiftBlock && this._pushIndex === this._shiftIndex) {
    return undefined;
  }

  var result = this._shiftBlock[this._shiftIndex];
  this._shiftBlock[this._shiftIndex++] = null;
  return result;
};

/***/ }),

/***/ 3314:
/*!************************************************************!*\
  !*** ./src/app/appsetting/appsetting.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n/**\n * Card style modal needs additional padding on the\n * top of the header. We accomplish this by targeting\n * the first toolbar in the header.\n * Footer also needs this. We do not adjust the bottom\n * padding though because of the safe area.\n */\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal ion-footer ion-toolbar:first-of-type {\n  padding-top: 6px;\n}\n/**\n* Card style modal needs additional padding on the\n* bottom of the header. We accomplish this by targeting\n* the last toolbar in the header.\n*/\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {\n  padding-bottom: 6px;\n}\n/**\n* Add padding on the left and right\n* of toolbars while accounting for\n* safe area values when in landscape.\n*/\nhtml.ios ion-modal ion-toolbar {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n/**\n * Card style modal on iPadOS\n * should only have backdrop on first instance.\n */\n@media screen and (min-width: 768px) {\n  html.ios ion-modal.modal-card:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n/**\n * Subsequent modals should not have a backdrop/box shadow\n * as it will cause the screen to appear to get progressively\n * darker. With Ionic 6, declarative modals made it\n * possible to have multiple non-presented modals in the DOM,\n * so we could no longer rely on ion-modal:first-of-type.\n * Here we disable the opacity/box-shadow for every modal\n * that comes after the first presented modal.\n *\n * Note: ion-modal:not(.overlay-hidden):first-of-type\n * does not match the first modal to not have\n * the .overlay-hidden class, it will match the\n * first modal in general only if it does not\n * have the .overlay-hidden class.\n * The :nth-child() pseudo-class has support\n * for selectors which would help us here. At the\n * time of writing it does not have great cross browser\n * support.\n *\n * Note 2: This should only apply to non-card and\n * non-sheet modals. Card and sheet modals have their\n * own criteria for displaying backdrops/box shadows.\n */\nion-modal.modal-default:not(.overlay-hidden) ~ ion-modal.modal-default {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n/**\n * This works around a bug in WebKit where the\n * content will overflow outside of the bottom border\n * radius when re-painting. As long as a single\n * border radius value is set on .ion-page, this\n * issue does not happen. We set the top left radius\n * here because the top left corner will always have a\n * radius no matter the platform.\n * This behavior only applies to card modals.\n */\nhtml.ios ion-modal.modal-card .ion-page {\n  border-top-left-radius: var(--border-radius);\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n/**\n * When making custom dialogs, using\n * ion-content is not required. As a result,\n * some developers may wish to have dialogs\n * that are automatically sized by the browser.\n * These changes allow certain dimension values\n * such as fit-content to work correctly.\n */\nion-modal .ion-page:not(ion-nav .ion-page) {\n  position: relative;\n  contain: layout style;\n  height: 100%;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-accordion-group > ion-accordion:last-of-type ion-item[slot=header] {\n  --border-width: 0px;\n}\nion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion .ion-accordion-toggle-icon {\n    /* stylelint-disable declaration-no-important */\n    transition: none !important;\n  }\n}\n/**\n * The > [slot=\"header\"] selector ensures that we do\n * not modify toggle icons for any nested accordions. The state\n * of one accordion should not affect any accordions inside\n * of a nested accordion group.\n */\nion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,\nion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon {\n  transform: rotate(180deg);\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type {\n  margin-top: 0;\n}\nion-input input::-webkit-date-and-time-value {\n  text-align: start;\n}\n/**\n * The .ion-datetime-button-overlay class contains\n * styles that allow any modal/popover to be\n * sized according to the dimensions of the datetime\n * when used with ion-datetime-button.\n */\n.ion-datetime-button-overlay {\n  --width: fit-content;\n  --height: fit-content;\n}\n/**\n * The grid variant can scale down when inline.\n * When used in a `fit-content` overlay, this causes\n * the overlay to shrink when the month/year picker is open.\n * Explicitly setting the dimensions lets us have a consistently\n * sized grid interface.\n */\n.ion-datetime-button-overlay ion-datetime.datetime-grid {\n  width: 320px;\n  min-height: 320px;\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.ion-ce body {\n  display: block;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  /**\n   * Because body has position: fixed,\n   * it should be promoted to its own\n   * layer.\n   *\n   * WebKit does not always promote\n   * the body to its own layer on page\n   * load in Ionic apps. Once scrolling on\n   * ion-content starts, WebKit will promote\n   * body. Unfortunately, this causes a re-paint\n   * which results in scrolling being halted\n   * until the next user gesture.\n   *\n   * This impacts the Custom Elements build.\n   * The lazy loaded build causes the browser to\n   * re-paint during hydration which causes WebKit\n   * to promote body to its own layer.\n   * In the CE Build, this hydration does not\n   * happen, so the additional re-paint does not occur.\n   */\n  transform: translateZ(0);\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\nion-content {\n  --background: url('bg.jpeg') center center fixed;\n  background-size: 100vw 100vh;\n}\nion-item,\nion-toolbar,\nion-footer {\n  --background: transparent;\n}\nmat-card,\nmat-list,\nion-list {\n  background: transparent;\n}\n.mat-table, .searchbar-input.sc-ion-searchbar-md,\n.searchbar-input.sc-ion-searchbar-md {\n  background: rgba(255, 255, 255, 0.4549019608);\n}\n.fullwidth {\n  width: 100%;\n}\n.ion-label,\n.item.sc-ion-label-md-h,\n.item .sc-ion-label-md-h {\n  font-size: 1.2rem;\n}\n.dangercolor {\n  color: var(--ion-color-danger);\n}\n.primarycolor {\n  color: var(--ion-color-primary);\n}\n.fullwidth {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2dsb2JhbC5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFycy5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdHlwb2dyYXBoeS5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiLCJhcHBzZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0VBQUE7QUFXQSw0REFBQTtBQ0hBO0VBQ0UsNkZBQUE7QUNQRjtBRFNBO0VBQ0UsMERBQUE7QUNORjtBRFNBO0VBQ0UsMENBQUE7QUNORjtBRFNBO0VBQ0UsdUNBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRGdCQTs7Ozs7O0VBQUE7QUFPQTs7O0VBR0UsZ0JBQUE7QUNiRjtBRGdCQTs7OztDQUFBO0FBS0E7O0VBRUUsbUJBQUE7QUNiRjtBRGdCQTs7OztDQUFBO0FBS0E7RUFDRSxxREFBQTtFQUNBLG1EQUFBO0FDYkY7QURnQkE7OztFQUFBO0FBSUE7RUFDRTtJQUNFLHdCQUFBO0VDYkY7QUFDRjtBRGdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBdUJBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ2RGO0FEaUJBOzs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0UsNENBQUE7QUNkRjtBRHVDRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQzFCRjtBRDhCRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ2pCRjtBRHFCRTtFQVRBLCtEQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ1JGO0FEWUU7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNDRjtBREdFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDVUY7QURORTtFQVRBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ21CRjtBRGZFO0VBVEEsNERBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FDNEJGO0FEeEJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDcUNGO0FEakNFO0VBVEEsMkRBQUE7RUFDQSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0ZBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0FDOENGO0FEakNBO0VFZ0xNLE9GL0t1QjtFRWdMdkIsUUZoTGlCO0VFeU1yQixNRnpNa0I7RUUwTWxCLFNGMU13QjtFQUV4QixhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHL0crQjtBRm1KakM7QURqQ0E7Ozs7Ozs7RUFBQTtBQVFBO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUVBLFlBQUE7QUNrQ0Y7QUQvQkE7RUFDRSxrQkFBQTtBQ2tDRjtBRC9CQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQ2tDRjtBRC9CQTtFQUNFLFVBQUE7QUNrQ0Y7QUQvQkE7RUFDRSxjQUFBO0FDa0NGO0FEM0JBO0VBQ0UsNkJBQUE7QUM4QkY7QUQzQkE7RUFDRTtJQUNFLGlEQUFBO0VDOEJGO0FBQ0Y7QUQxQkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDNEJGO0FBQ0Y7QUR6QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDMkJGO0FBQ0Y7QURwQkE7O0VBRUUsY0FBQTtBQ3NCRjtBRGRBO0VFMlFNLGlDQUFBO0FEelBOO0FEZEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFJQSxvQkFBQTtBQ2NGO0FEWEE7RUFDRSwyQ0lwUStCO0FIa1JqQztBRFhBO0VBQ0UsMENJclErQjtBSG1SakM7QURQQTtFQUNFLDRDS25SOEI7QUo2UmhDO0FEUEE7RUFDRSw0Q0t2UjhCO0FKaVNoQztBRE5BO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ1NGO0FEUEE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDVUY7QURSQTtFQUNFLG1CQUFBO0FDV0Y7QURSQTtFQUNFLDJEQUFBO0FDV0Y7QURSQTtFQUNFO0lBQ0UsK0NBQUE7SUFDQSwyQkFBQTtFQ1dGO0FBQ0Y7QURUQTs7Ozs7RUFBQTtBQU1BOztFQUVFLHlCQUFBO0FDV0Y7QURSQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNXRjtBRFJBOztFQUVFLGFBQUE7QUNXRjtBRExBO0VBQ0UsaUJBQUE7QUNRRjtBRExBOzs7OztFQUFBO0FBTUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDUUY7QURMQTs7Ozs7O0VBQUE7QUFPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1FGO0FGcFdBLHdDQUFBO0FPUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7QUR5REE7RUFDRSxlQUFBO0FDdERGO0FEMERBOzs7RUFHRSxlQUFBO0FDdkRGO0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGO0FEK0RBOztFQUVFLFVBQUE7RUFFQSxzQkFBQTtBQzdERjtBRG1FQTs7RUFFRSxZQUFBO0FDaEVGO0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGO0FEMkVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ3hFRjtBRDJFQTs7RUFFRSxVQUFBO0FDeEVGO0FDeEpBO0VBQ0Usc0JBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7QURhQTtFQUNFLGFBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTnlDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBb0tFLGNNNU1jO0VONk1kLGVNN01jO0VOaVBoQixhTWpQZ0I7RU5rUGhCLGdCTWxQZ0I7RU40TWQsZU0zTWU7RU40TWYsZ0JNNU1lO0VOZ1BqQixjTWhQaUI7RU5pUGpCLGlCTWpQaUI7RUFFakIsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtFQW9CQSx3QkFBQTtFQUVBLGtDQUFBO0VBRUEsZ0JBQUE7RUFFQSwwQkFBQTtFQUVBLHVCQUFBO0VBRUEseUJBQUE7RUFFQSxxQkFBQTtFQUVBLDJCQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQ2RGO0FDdkNBO0VBQ0UsbUNBQUE7QUM5QkY7QURpQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDOUJGO0FEaUNBOzs7Ozs7RVIrT0UsZ0JRek9nQjtFUjBPaEIsbUJRMU80QjtFQUU1QixnQkF4QzZCO0VBMEM3QixnQkF2QzZCO0FDUS9CO0FEa0NBO0VSa09FLGdCUWpPZ0I7RUFFaEIsZUExQzZCO0FDUy9CO0FEb0NBO0VSNE5FLGdCUTNOZ0I7RUFFaEIsZUE3QzZCO0FDVS9CO0FEc0NBO0VBQ0UsZUE5QzZCO0FDVS9CO0FEdUNBO0VBQ0UsZUEvQzZCO0FDVy9CO0FEdUNBO0VBQ0UsZUFoRDZCO0FDWS9CO0FEdUNBO0VBQ0UsZUFqRDZCO0FDYS9CO0FEdUNBO0VBQ0UsY0FBQTtBQ3BDRjtBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxXQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3ZDRjtBQ3REQTtFQUNFLHdCQUFBO0FDUEY7QURpQkk7RUFDRSx3QkFBQTtBQ2ROO0FEcUJJO0VBQ0Usd0JBQUE7QUNsQk47QVhzSEk7RVU3R0E7SUFDRSx3QkFBQTtFQ0xKO0FBQ0Y7QVh5Skk7RVU5SUE7SUFDRSx3QkFBQTtFQ1JKO0FBQ0Y7QVgyR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ0tKO0FBQ0Y7QVgrSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ0VKO0FBQ0Y7QVhpR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ2VKO0FBQ0Y7QVhxSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ1lKO0FBQ0Y7QVh1Rkk7RVU3R0E7SUFDRSx3QkFBQTtFQ3lCSjtBQUNGO0FYMkhJO0VVOUlBO0lBQ0Usd0JBQUE7RUNzQko7QUFDRjtBZC9CQSxpREFBQTtBZUpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVo4TkUsZVk1TmU7RVo2TmYsZ0JZN05lO0VaaVFqQixjWWpRaUI7RVprUWpCLGlCWWxRaUI7QUNibkI7QURnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFWnlORSxzQ1k1T007RVo2T04sdUNZN09NO0VaNlFSLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUNVVjtBYnNPTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUlGLDhDWTFQQTtJWjRQQSw0Q1k1UEE7RUNtQlI7QUFDRjtBRElBO0VBQ0UsdUNBQUE7RVpvUEEscUNZN1FRO0FDeUJWO0FES0E7RUFDRSx5Q0FBQTtFWjZNRSxzQ1k1T007QUM2QlY7QWJtTk07RUFDRTtJQUVJLG1CQUFBO0lBT0YsOENZMVBBO0VDbUNSO0FBQ0Y7QURBQTtFQUNFLHVDQUFBO0Vad01FLHVDWTdPTTtBQ3lDVjtBYnVNTTtFQUNFO0lBS0ksb0JBQUE7SUFNRiw0Q1k1UEE7RUMrQ1I7QUFDRjtBRE5BO0VBQ0UsMENBQUE7RVptT0Esd0NZOVFRO0FDcURWO0FETEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VaMk5BLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUMyRFY7QURKQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RVptTEUsc0NZNU9NO0VaNk9OLHVDWTdPTTtBQ2lFVjtBYitLTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUlGLDhDWTFQQTtJWjRQQSw0Q1k1UEE7RUMwRVI7QUFDRjtBRFRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0Vaa0tFLGNZaEtjO0VaaUtkLGVZaktjO0VacU1oQixhWXJNZ0I7RVpzTWhCLGdCWXRNZ0I7QUNjbEI7QURYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VaNkpFLG9DWTNPSztFWjRPTCxxQ1k1T0s7RVo0UVAsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2dHVDtBYitJTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDWXpQRDtJWjJQQywwQ1kzUEQ7RUN5R1A7QUFDRjtBRHZCQTtFQUNFLHFDQUFBO0Vad0xBLG1DWTVRTztBQytHVDtBRHRCQTtFQUNFLHVDQUFBO0VaaUpFLG9DWTNPSztBQ21IVDtBYjRITTtFQUNFO0lBRUksa0JBQUE7SUFPRiw0Q1l6UEQ7RUN5SFA7QUFDRjtBRDNCQTtFQUNFLHFDQUFBO0VaNElFLHFDWTVPSztBQytIVDtBYmdITTtFQUNFO0lBS0ksbUJBQUE7SUFNRiwwQ1kzUEQ7RUNxSVA7QUFDRjtBRGpDQTtFQUNFLHdDQUFBO0VadUtBLHNDWTdRTztBQzJJVDtBRGhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RVorSkEsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2lKVDtBRC9CQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RVp1SEUsb0NZM09LO0VaNE9MLHFDWTVPSztBQ3VKVDtBYndGTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDWXpQRDtJWjJQQywwQ1kzUEQ7RUNnS1A7QUFDRjtBQzlKSTtFZG1hRSxzQkFBQTtBZS9hTjtBRGdCSTtFZCtaRSx1QkFBQTtBZTNhTjtBRGdCSTtFZDZZRSxzQkFBQTtBZXpaTjtBZjRMVztFQWdPTCx1QkFBQTtBZXpaTjtBRGFJO0VkZ1pFLHVCQUFBO0FlelpOO0FmcUxXO0VBdU9MLHNCQUFBO0FlelpOO0FmNEdJO0VjbEhBO0lkbWFFLHNCQUFBO0VleFpKOztFRFBFO0lkK1pFLHVCQUFBO0VlcFpKOztFRFBFO0lkNllFLHNCQUFBO0VlbFlKO0VmcUtTO0lBZ09MLHVCQUFBO0VlbFlKOztFRFZFO0lkZ1pFLHVCQUFBO0VlbFlKO0VmOEpTO0lBdU9MLHNCQUFBO0VlbFlKO0FBQ0Y7QWZvRkk7RWNsSEE7SWRtYUUsc0JBQUE7RWVqWUo7O0VEOUJFO0lkK1pFLHVCQUFBO0VlN1hKOztFRDlCRTtJZDZZRSxzQkFBQTtFZTNXSjtFZjhJUztJQWdPTCx1QkFBQTtFZTNXSjs7RURqQ0U7SWRnWkUsdUJBQUE7RWUzV0o7RWZ1SVM7SUF1T0wsc0JBQUE7RWUzV0o7QUFDRjtBZjZESTtFY2xIQTtJZG1hRSxzQkFBQTtFZTFXSjs7RURyREU7SWQrWkUsdUJBQUE7RWV0V0o7O0VEckRFO0lkNllFLHNCQUFBO0VlcFZKO0VmdUhTO0lBZ09MLHVCQUFBO0VlcFZKOztFRHhERTtJZGdaRSx1QkFBQTtFZXBWSjtFZmdIUztJQXVPTCxzQkFBQTtFZXBWSjtBQUNGO0Fmc0NJO0VjbEhBO0lkbWFFLHNCQUFBO0VlblZKOztFRDVFRTtJZCtaRSx1QkFBQTtFZS9VSjs7RUQ1RUU7SWQ2WUUsc0JBQUE7RWU3VEo7RWZnR1M7SUFnT0wsdUJBQUE7RWU3VEo7O0VEL0VFO0lkZ1pFLHVCQUFBO0VlN1RKO0VmeUZTO0lBdU9MLHNCQUFBO0VlN1RKO0FBQ0Y7QUNuR0k7RUFDRSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMkJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBakJrR0k7RWdCbEhBO0lBQ0UsNkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7QUFDRjtBakJnRUk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjtBakIrQkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7QUFDRjtBakJGSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw0QkFBQTtFQ3VISjs7RURwSEU7SUFDRSwwQkFBQTtFQ3VISjs7RURwSEU7SUFDRSwyQkFBQTtFQ3VISjs7RURwSEU7SUFDRSw0QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjtBQUNGO0FDckpJO0VBQ0UseURBQUE7RUFDQSxvQ0FBQTtBQ2JOO0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxvQ0FBQTtBQ2JOO0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxxQ0FBQTtBQ2JOO0FuQm1ISTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDR0o7O0VEQUU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDR0o7O0VEQUU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDR0o7QUFDRjtBbkJrR0k7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUJKOztFRGhCRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQko7QUFDRjtBbkJrRkk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQ0o7QUFDRjtBbkJrRUk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21ESjs7RURoREU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtREo7QUFDRjtBQ3RFQTtFQUNFLGlDQUFBO0FDUEY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLDZCQUFBO0FDUEY7QURVQTtFQUNFLDhCQUFBO0FDUEY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLDJCQUFBO0FDUEY7QURjQTtFQUNFLDBCQUFBO0FDWEY7QURjQTtFQUNFLDRCQUFBO0FDWEY7QURjQTtFQUNFLGtDQUFBO0FDWEY7QURrQkE7RUFDRSxzQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usa0NBQUE7QUNmRjtBRGtCQTtFQUNFLG9DQUFBO0FDZkY7QURrQkE7RUFDRSx3Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0UseUNBQUE7QUNmRjtBRGtCQTtFQUNFLHdDQUFBO0FDZkY7QURzQkE7RUFDRSxrQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLDhCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZ0NBQUE7QUNuQkY7QURzQkE7RUFDRSwrQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGdDQUFBO0FDbkJGO0F4QjNDQTtFQUNFLGdEQUFBO0VBQ0EsNEJBQUE7QXlCWEY7QXpCYUE7OztFQUdFLHlCQUFBO0F5QlZGO0F6QmFBOzs7RUFHRSx1QkFBQTtBeUJWRjtBekJhQTs7RUFFRSw2Q0FBQTtBeUJWRjtBekJhQTtFQUNFLFdBQUE7QXlCVkY7QXpCYUE7OztFQUdFLGlCQUFBO0F5QlZGO0FBcERBO0VBQ0UsOEJ6QitCTztBeUJ3QlQ7QUFyREE7RUFDRSwrQnpCMkJRO0F5QjZCVjtBQXREQTtFQUNFLFdBQUE7QUF5REYiLCJmaWxlIjoiYXBwc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cblxuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcblxuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzc1wiO1xuXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcblxuLy8gJGNvbG9yLXBybWFyeTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAkY29sb3Itd2Fybjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblxuLy8gQGltcG9ydCBcIi4vdGhlbWUvbGlnaHQuc2Nzc1wiO1xuXG4kcHJpbWFyeTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuJGRhbmdlcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9iZy5qcGVnXCIpIGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwdncgMTAwdmg7XG59XG5pb24taXRlbSxcbmlvbi10b29sYmFyLFxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vIC0tYmFja2dyb3VuZDogI2ZmZmZmZjc0O1xufVxubWF0LWNhcmQsXG5tYXQtbGlzdCAsXG5pb24tbGlzdHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vIGJhY2tncm91bmQ6ICNmZmZmZmY3NDtcbn1cbi5tYXQtdGFibGUsLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kLFxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kICAge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzQ7XG59XG5cbi5mdWxsd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlvbi1sYWJlbCxcbi5pdGVtLnNjLWlvbi1sYWJlbC1tZC1oLFxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFyc1wiO1xuQGltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnNcIjtcblxuLy8gSW9uaWMgRm9udCBGYW1pbHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBUT0RPOiBCbG9jayBzY3JvbGxpbmcgaW4gaW9uLWNvbnRlbnQsIGJyZWFrcyBpbnNpZGUgaW9uLW1vZGFsXG4vLyBib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCAuaW9uLXBhZ2UgPiBpb24tY29udGVudCB7XG4vLyAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gTW9kYWwgLSBDYXJkIFN0eWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiAqIHRvcCBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4gKiB0aGUgZmlyc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuICogRm9vdGVyIGFsc28gbmVlZHMgdGhpcy4gV2UgZG8gbm90IGFkanVzdCB0aGUgYm90dG9tXG4gKiBwYWRkaW5nIHRob3VnaCBiZWNhdXNlIG9mIHRoZSBzYWZlIGFyZWEuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLWZvb3RlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLyoqXG4qIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuKiBib3R0b20gb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuKiB0aGUgbGFzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4vKipcbiogQWRkIHBhZGRpbmcgb24gdGhlIGxlZnQgYW5kIHJpZ2h0XG4qIG9mIHRvb2xiYXJzIHdoaWxlIGFjY291bnRpbmcgZm9yXG4qIHNhZmUgYXJlYSB2YWx1ZXMgd2hlbiBpbiBsYW5kc2NhcGUuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArIDhweCk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgOHB4KTtcbn1cblxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG9uIGlQYWRPU1xuICogc2hvdWxkIG9ubHkgaGF2ZSBiYWNrZHJvcCBvbiBmaXJzdCBpbnN0YW5jZS5cbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjE4O1xuICB9XG59XG5cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICovXG5pb24tbW9kYWwubW9kYWwtZGVmYXVsdDpub3QoLm92ZXJsYXktaGlkZGVuKSB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUpIHtcbiAgJHZhbHVlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcblxuICAkYmFzZTogbWFwLWdldCgkdmFsdWUsIGJhc2UpO1xuICAkY29udHJhc3Q6IG1hcC1nZXQoJHZhbHVlLCBjb250cmFzdCk7XG4gICRzaGFkZTogbWFwLWdldCgkdmFsdWUsIHNoYWRlKTtcbiAgJHRpbnQ6IG1hcC1nZXQoJHZhbHVlLCB0aW50KTtcblxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0sICN7JGJhc2V9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYiwgI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LCAjeyRjb250cmFzdH0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYiwgI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSwgI3skc2hhZGV9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCwgI3skdGludH0pICFpbXBvcnRhbnQ7XG59XG5cbkBlYWNoICRjb2xvci1uYW1lLCAkdmFsdWUgaW4gJGNvbG9ycyB7XG4gIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lKTtcbiAgfVxufVxuXG5cbi8vIFBhZ2UgQ29udGFpbmVyIFN0cnVjdHVyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1wYWdlIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogJHotaW5kZXgtcGFnZS1jb250YWluZXI7XG59XG5cbi8qKlxuICogV2hlbiBtYWtpbmcgY3VzdG9tIGRpYWxvZ3MsIHVzaW5nXG4gKiBpb24tY29udGVudCBpcyBub3QgcmVxdWlyZWQuIEFzIGEgcmVzdWx0LFxuICogc29tZSBkZXZlbG9wZXJzIG1heSB3aXNoIHRvIGhhdmUgZGlhbG9nc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBzaXplZCBieSB0aGUgYnJvd3Nlci5cbiAqIFRoZXNlIGNoYW5nZXMgYWxsb3cgY2VydGFpbiBkaW1lbnNpb24gdmFsdWVzXG4gKiBzdWNoIGFzIGZpdC1jb250ZW50IHRvIHdvcmsgY29ycmVjdGx5LlxuICovXG5pb24tbW9kYWwgLmlvbi1wYWdlOm5vdChpb24tbmF2IC5pb24tcGFnZSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgY29udGFpbjogbGF5b3V0IHN0eWxlO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5pb24tcGFnZS5zcGxpdC1wYW5lLW1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1yb3V0ZSxcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcbmlvbi1yb3V0ZXIsXG5pb24tc2VsZWN0LW9wdGlvbixcbmlvbi1uYXYtY29udHJvbGxlcixcbmlvbi1tZW51LWNvbnRyb2xsZXIsXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXG5pb24tYWxlcnQtY29udHJvbGxlcixcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXG5pb24tbW9kYWwtY29udHJvbGxlcixcbmlvbi1waWNrZXItY29udHJvbGxlcixcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXG5pb24tdG9hc3QtY29udHJvbGxlcixcbi5pb24tcGFnZS1oaWRkZW4sXG5baGlkZGVuXSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vLyBJb25pYyBTYWZlIE1hcmdpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG9uY2UgU2FmYXJpIDExLjIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5cbi8vIEdsb2JhbCBDYXJkIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cblxuLy8gTWVudSBTdHlsZXNcbi8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgbG9uZyB0ZXJtIHNvbHV0aW9uIGZvciB0aGlzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubWVudS1jb250ZW50IHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKDAsIDAsIDApKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblxuICAvLyB0aGUgY29udGFpbmluZyBlbGVtZW50IGl0c2VsZiBzaG91bGQgYmUgY2xpY2thYmxlIGJ1dFxuICAvLyBldmVyeXRoaW5nIGluc2lkZSBvZiBpdCBzaG91bGQgbm90IGNsaWNrYWJsZSB3aGVuIG1lbnUgaXMgb3BlblxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LW1kLWJveC1zaGFkb3c7XG59XG5cbi8vIEFjY29yZGlvbiBTdHlsZXNcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbn1cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1hbmltYXRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tcHJldmlvdXMgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8vIFNhZmFyaS9pT1MgMTUgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmcm9tIElvbmljIDUvU2FmYXJpIDE0IGRlc2lnbnMsXG4vLyB3ZSBvdmVycmlkZSB0aGUgYXBwZWFyYW5jZSBvbmx5IHdoZW4gdXNpbmcgd2l0aGluIGFuIGlvbi1pbnB1dC5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qKlxuICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAqIHN0eWxlcyB0aGF0IGFsbG93IGFueSBtb2RhbC9wb3BvdmVyIHRvIGJlXG4gKiBzaXplZCBhY2NvcmRpbmcgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRhdGV0aW1lXG4gKiB3aGVuIHVzZWQgd2l0aCBpb24tZGF0ZXRpbWUtYnV0dG9uLlxuICovXG4uaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IHtcbiAgLS13aWR0aDogZml0LWNvbnRlbnQ7XG4gIC0taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLyoqXG4gKiBUaGUgZ3JpZCB2YXJpYW50IGNhbiBzY2FsZSBkb3duIHdoZW4gaW5saW5lLlxuICogV2hlbiB1c2VkIGluIGEgYGZpdC1jb250ZW50YCBvdmVybGF5LCB0aGlzIGNhdXNlc1xuICogdGhlIG92ZXJsYXkgdG8gc2hyaW5rIHdoZW4gdGhlIG1vbnRoL3llYXIgcGlja2VyIGlzIG9wZW4uXG4gKiBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIGRpbWVuc2lvbnMgbGV0cyB1cyBoYXZlIGEgY29uc2lzdGVudGx5XG4gKiBzaXplZCBncmlkIGludGVyZmFjZS5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSBpb24tZGF0ZXRpbWUuZGF0ZXRpbWUtZ3JpZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMzIwcHg7XG59XG4iLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICovXG5pb24tbW9kYWwubW9kYWwtZGVmYXVsdDpub3QoLm92ZXJsYXktaGlkZGVuKSB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qKlxuICogV2hlbiBtYWtpbmcgY3VzdG9tIGRpYWxvZ3MsIHVzaW5nXG4gKiBpb24tY29udGVudCBpcyBub3QgcmVxdWlyZWQuIEFzIGEgcmVzdWx0LFxuICogc29tZSBkZXZlbG9wZXJzIG1heSB3aXNoIHRvIGhhdmUgZGlhbG9nc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBzaXplZCBieSB0aGUgYnJvd3Nlci5cbiAqIFRoZXNlIGNoYW5nZXMgYWxsb3cgY2VydGFpbiBkaW1lbnNpb24gdmFsdWVzXG4gKiBzdWNoIGFzIGZpdC1jb250ZW50IHRvIHdvcmsgY29ycmVjdGx5LlxuICovXG5pb24tbW9kYWwgLmlvbi1wYWdlOm5vdChpb24tbmF2IC5pb24tcGFnZSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbnRhaW46IGxheW91dCBzdHlsZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWFuaW1hdGVkID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zaXRpb246IDMwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBpb24tYWNjb3JkaW9uIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKlxuICogVGhlID4gW3Nsb3Q9XCJoZWFkZXJcIl0gc2VsZWN0b3IgZW5zdXJlcyB0aGF0IHdlIGRvXG4gKiBub3QgbW9kaWZ5IHRvZ2dsZSBpY29ucyBmb3IgYW55IG5lc3RlZCBhY2NvcmRpb25zLiBUaGUgc3RhdGVcbiAqIG9mIG9uZSBhY2NvcmRpb24gc2hvdWxkIG5vdCBhZmZlY3QgYW55IGFjY29yZGlvbnMgaW5zaWRlXG4gKiBvZiBhIG5lc3RlZCBhY2NvcmRpb24gZ3JvdXAuXG4gKi9cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1wcmV2aW91cyBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmc6Zmlyc3Qtb2YtdHlwZSxcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taW5wdXQgaW5wdXQ6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4vKipcbiAqIFRoZSAuaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IGNsYXNzIGNvbnRhaW5zXG4gKiBzdHlsZXMgdGhhdCBhbGxvdyBhbnkgbW9kYWwvcG9wb3ZlciB0byBiZVxuICogc2l6ZWQgYWNjb3JkaW5nIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBkYXRldGltZVxuICogd2hlbiB1c2VkIHdpdGggaW9uLWRhdGV0aW1lLWJ1dHRvbi5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSB7XG4gIC0td2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi8qKlxuICogVGhlIGdyaWQgdmFyaWFudCBjYW4gc2NhbGUgZG93biB3aGVuIGlubGluZS5cbiAqIFdoZW4gdXNlZCBpbiBhIGBmaXQtY29udGVudGAgb3ZlcmxheSwgdGhpcyBjYXVzZXNcbiAqIHRoZSBvdmVybGF5IHRvIHNocmluayB3aGVuIHRoZSBtb250aC95ZWFyIHBpY2tlciBpcyBvcGVuLlxuICogRXhwbGljaXRseSBzZXR0aW5nIHRoZSBkaW1lbnNpb25zIGxldHMgdXMgaGF2ZSBhIGNvbnNpc3RlbnRseVxuICogc2l6ZWQgZ3JpZCBpbnRlcmZhY2UuXG4gKi9cbi5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgaW9uLWRhdGV0aW1lLmRhdGV0aW1lLWdyaWQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuL2lvbmljLmRlcHJlY2F0aW9uXCI7XG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiXG4vLyBHbG9iYWwgVXRpbGl0eSBGdW5jdGlvbnNcbkBpbXBvcnQgXCIuL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmdcIjtcblxuLy8gR2xvYmFsIENvbG9yIEZ1bmN0aW9uc1xuQGltcG9ydCBcIi4vaW9uaWMuZnVuY3Rpb25zLmNvbG9yXCI7XG5cbi8vIEdsb2JhbCBNaXhpbnNcbkBpbXBvcnQgXCIuL2lvbmljLm1peGluc1wiO1xuXG4vLyBEZWZhdWx0IFRoZW1lXG5AaW1wb3J0IFwiLi9pb25pYy50aGVtZS5kZWZhdWx0XCI7XG5cblxuLy8gRGVmYXVsdCBHZW5lcmFsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgICAgICAgdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGFwcCBkaXJlY3Rpb25cbiRhcHAtZGlyZWN0aW9uOiBudWxsICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgZm9udCBwYXRoXG4kZm9udC1wYXRoOiBcIi9kaXN0L2ZvbnRzXCIgIWRlZmF1bHQ7XG5cbi8vIEhhaXJsaW5lcyB3aWR0aFxuJGhhaXJsaW5lcy13aWR0aDogLjU1cHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cblxuLy8gWi1JbmRleFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdyb3VwZWQgYnkgZWxlbWVudHMgd2hpY2ggd291bGQgYmUgc2libGluZ3NcblxuJHotaW5kZXgtbWVudS1vdmVybGF5OiAgICAgICAgICAgMTAwMDtcbiR6LWluZGV4LW92ZXJsYXk6ICAgICAgICAgICAgICAgIDEwMDE7XG4kei1pbmRleC1jbGljay1ibG9jazogICAgICAgICAgICA5OTk5OTtcblxuJHotaW5kZXgtZml4ZWQtY29udGVudDogICAgICAgICAgOTk5O1xuJHotaW5kZXgtc2Nyb2xsLWNvbnRlbnQ6ICAgICAgICAgMTtcbiR6LWluZGV4LXJlZnJlc2hlcjogICAgICAgICAgICAgIC0xO1xuXG4kei1pbmRleC1wYWdlLWNvbnRhaW5lcjogICAgICAgICAwO1xuJHotaW5kZXgtdG9vbGJhcjogICAgICAgICAgICAgICAgMTA7XG4kei1pbmRleC10b29sYmFyLWJhY2tncm91bmQ6ICAgICAtMTtcbiR6LWluZGV4LXRvb2xiYXItYnV0dG9uczogICAgICAgIDk5O1xuXG4kei1pbmRleC1iYWNrZHJvcDogICAgICAgICAgICAgICAyO1xuJHotaW5kZXgtb3ZlcmxheS13cmFwcGVyOiAgICAgICAgMTA7XG5cbiR6LWluZGV4LWl0ZW0tb3B0aW9uczogICAgICAgICAgIDE7XG4kei1pbmRleC1pdGVtLWlucHV0OiAgICAgICAgICAgICAyO1xuJHotaW5kZXgtaXRlbS1kaXZpZGVyOiAgICAgICAgICAgMTAwO1xuXG4kei1pbmRleC1yZW9yZGVyLXNlbGVjdGVkOiAgICAgICAxMDA7XG4iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWVzL2lvbmljLmdsb2JhbHMuaW9zXCI7XG5cbi8vIGlPUyBNZW51XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBCYWNrZ3JvdW5kIG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYmFja2dyb3VuZDogICAgICAgICAgICAkYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBjb2xvciBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3I6ICAgICAgcmdiYSgwLCAwLCAwLCAuMDgpICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdzogICAgICAgICAgICAtOHB4IDAgNDJweCAkbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudSBpbiBydGwgbW9kZVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcnRsOiAgICAgICAgOHB4IDAgNDJweCAkbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcmV2ZWFsIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDogICAgICRtZW51LWlvcy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSByZXZlYWwgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsLXJ0bDogJG1lbnUtaW9zLWJveC1zaGFkb3ctcnRsICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBwdXNoIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXB1c2g6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG92ZXJsYXkgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctb3ZlcmxheTogICAgbnVsbCAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZXMvaW9uaWMuZ2xvYmFscy5tZFwiO1xuXG4vLyBNYXRlcmlhbCBEZXNpZ24gTWVudVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gQmFja2dyb3VuZCBvZiB0aGUgbWVudVxuJG1lbnUtbWQtYmFja2dyb3VuZDogICAgICAgICAgICAkYmFja2dyb3VuZC1jb2xvciAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudVxuJG1lbnUtbWQtYm94LXNoYWRvdzogICAgICAgICAgICA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KSAhZGVmYXVsdDtcbiIsIi8vICEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzXG5cblxuLy8gSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gMS4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAxXG59XG5cbi8vIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4vLyBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBoZWlnaHQ6IDA7XG59XG5cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4vLyBFbWJlZGRlZCBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICBib3JkZXI6IDA7XG59XG5cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi8vIEdyb3VwaW5nIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcblxuICBib3JkZXItd2lkdGg6IDA7XG5cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8vIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuXG4vLyBGb3Jtc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbi8vIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cblxuLy8gMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4vLyAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcblxuICBoZWlnaHQ6IGF1dG87XG5cbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDsgLy8gM1xuXG4gIGZvbnQ6IGluaGVyaXQ7IC8vIDJcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbn1cblxuLy8gMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2Bcbi8vICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuLy8gMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuLy8gMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbi8vICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gM1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG59XG5cbi8vIHJlbW92ZSAzMDBtcyBkZWxheVxuYSxcbmEgZGl2LFxuYSBzcGFuLFxuYSBpb24taWNvbixcbmEgaW9uLWxhYmVsLFxuYnV0dG9uLFxuYnV0dG9uIGRpdixcbmJ1dHRvbiBzcGFuLFxuYnV0dG9uIGlvbi1pY29uLFxuYnV0dG9uIGlvbi1sYWJlbCxcbi5pb24tdGFwcGFibGUsXG5bdGFwcGFibGVdLFxuW3RhcHBhYmxlXSBkaXYsXG5bdGFwcGFibGVdIHNwYW4sXG5bdGFwcGFibGVdIGlvbi1pY29uLFxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmEgaW9uLWxhYmVsLFxuYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuYVtkaXNhYmxlZF0sXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG59XG5cbi8vIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXG4vLyAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxuLy8gMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBhZGRpbmc6IDA7IC8vIDJcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyAxXG59XG5cbi8vIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXG4vLyBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxuLy8gZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cblxuLy8gVGFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXG5cbi8vIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG5cbi8vIFN0cnVjdHVyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFkZHMgc3RydWN0dXJhbCBjc3MgdG8gdGhlIG5hdGl2ZSBodG1sIGVsZW1lbnRzXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLmlvbi1jZSBib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBAaW5jbHVkZSBmb250LXNtb290aGluZygpO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG4gIEBpbmNsdWRlIHBhZGRpbmcoMCk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcblxuICAvKipcbiAgICogQmVjYXVzZSBib2R5IGhhcyBwb3NpdGlvbjogZml4ZWQsXG4gICAqIGl0IHNob3VsZCBiZSBwcm9tb3RlZCB0byBpdHMgb3duXG4gICAqIGxheWVyLlxuICAgKlxuICAgKiBXZWJLaXQgZG9lcyBub3QgYWx3YXlzIHByb21vdGVcbiAgICogdGhlIGJvZHkgdG8gaXRzIG93biBsYXllciBvbiBwYWdlXG4gICAqIGxvYWQgaW4gSW9uaWMgYXBwcy4gT25jZSBzY3JvbGxpbmcgb25cbiAgICogaW9uLWNvbnRlbnQgc3RhcnRzLCBXZWJLaXQgd2lsbCBwcm9tb3RlXG4gICAqIGJvZHkuIFVuZm9ydHVuYXRlbHksIHRoaXMgY2F1c2VzIGEgcmUtcGFpbnRcbiAgICogd2hpY2ggcmVzdWx0cyBpbiBzY3JvbGxpbmcgYmVpbmcgaGFsdGVkXG4gICAqIHVudGlsIHRoZSBuZXh0IHVzZXIgZ2VzdHVyZS5cbiAgICpcbiAgICogVGhpcyBpbXBhY3RzIHRoZSBDdXN0b20gRWxlbWVudHMgYnVpbGQuXG4gICAqIFRoZSBsYXp5IGxvYWRlZCBidWlsZCBjYXVzZXMgdGhlIGJyb3dzZXIgdG9cbiAgICogcmUtcGFpbnQgZHVyaW5nIGh5ZHJhdGlvbiB3aGljaCBjYXVzZXMgV2ViS2l0XG4gICAqIHRvIHByb21vdGUgYm9keSB0byBpdHMgb3duIGxheWVyLlxuICAgKiBJbiB0aGUgQ0UgQnVpbGQsIHRoaXMgaHlkcmF0aW9uIGRvZXMgbm90XG4gICAqIGhhcHBlbiwgc28gdGhlIGFkZGl0aW9uYWwgcmUtcGFpbnQgZG9lcyBub3Qgb2NjdXIuXG4gICAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG5cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcblxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5pb24tY2UgYm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgLyoqXG4gICAqIEJlY2F1c2UgYm9keSBoYXMgcG9zaXRpb246IGZpeGVkLFxuICAgKiBpdCBzaG91bGQgYmUgcHJvbW90ZWQgdG8gaXRzIG93blxuICAgKiBsYXllci5cbiAgICpcbiAgICogV2ViS2l0IGRvZXMgbm90IGFsd2F5cyBwcm9tb3RlXG4gICAqIHRoZSBib2R5IHRvIGl0cyBvd24gbGF5ZXIgb24gcGFnZVxuICAgKiBsb2FkIGluIElvbmljIGFwcHMuIE9uY2Ugc2Nyb2xsaW5nIG9uXG4gICAqIGlvbi1jb250ZW50IHN0YXJ0cywgV2ViS2l0IHdpbGwgcHJvbW90ZVxuICAgKiBib2R5LiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGNhdXNlcyBhIHJlLXBhaW50XG4gICAqIHdoaWNoIHJlc3VsdHMgaW4gc2Nyb2xsaW5nIGJlaW5nIGhhbHRlZFxuICAgKiB1bnRpbCB0aGUgbmV4dCB1c2VyIGdlc3R1cmUuXG4gICAqXG4gICAqIFRoaXMgaW1wYWN0cyB0aGUgQ3VzdG9tIEVsZW1lbnRzIGJ1aWxkLlxuICAgKiBUaGUgbGF6eSBsb2FkZWQgYnVpbGQgY2F1c2VzIHRoZSBicm93c2VyIHRvXG4gICAqIHJlLXBhaW50IGR1cmluZyBoeWRyYXRpb24gd2hpY2ggY2F1c2VzIFdlYktpdFxuICAgKiB0byBwcm9tb3RlIGJvZHkgdG8gaXRzIG93biBsYXllci5cbiAgICogSW4gdGhlIENFIEJ1aWxkLCB0aGlzIGh5ZHJhdGlvbiBkb2VzIG5vdFxuICAgKiBoYXBwZW4sIHNvIHRoZSBhZGRpdGlvbmFsIHJlLXBhaW50IGRvZXMgbm90IG9jY3VyLlxuICAgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHJ1Y3R1cmUuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gRm9udCB3ZWlnaHQgb2YgYWxsIGhlYWRpbmdzXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAgNTAwICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBMaW5lIGhlaWdodCBvZiBhbGwgaGVhZGluZ3NcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgICAxLjIgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDFcbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyNnB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAyXG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjRweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgM1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDRcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA1XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMThweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNlxuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBAaW5jbHVkZSBtYXJnaW4oMTZweCwgbnVsbCwgMTBweCwgbnVsbCk7XG5cbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcblxuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xufVxuXG5oMSB7XG4gIEBpbmNsdWRlIG1hcmdpbigyMHB4LCBudWxsLCBudWxsLCBudWxsKTtcblxuICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XG59XG5cbmgyIHtcbiAgQGluY2x1ZGUgbWFyZ2luKDE4cHgsIG51bGwsIG51bGwsIG51bGwpO1xuXG4gIGZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6ICRoMy1mb250LXNpemU7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAkaDQtZm9udC1zaXplO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogJGg1LWZvbnQtc2l6ZTtcbn1cblxuaDYge1xuICBmb250LXNpemU6ICRoNi1mb250LXNpemU7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmb250LXNpemU6IDc1JTtcblxuICBsaW5lLWhlaWdodDogMDtcblxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLS41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLS4yNWVtO1xufVxuIiwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuaDMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gRGlzcGxheVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZGlmaWVzIGRpc3BsYXkgb2YgYSBwYXJ0aWN1bGFyIGVsZW1lbnQgYmFzZWQgb24gdGhlIGdpdmVuIGNsYXNzZXNcblxuLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGRzIGhpZGRlbiBjbGFzc2VzXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYGlvbi1oaWRlLXticH0tdXBgIGNsYXNzZXMgZm9yIGhpZGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi1oaWRlI3skaW5maXh9LXVwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGBpb24taGlkZS17YnB9LWRvd25gIGNsYXNzZXMgZm9yIGhpZGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi1oaWRlI3skaW5maXh9LWRvd24ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtdXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS1kb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1oaWRlLXNtLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuaW9uLWhpZGUtc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1oaWRlLWxnLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuaW9uLWhpZGUtbGctZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pb24taGlkZS14bC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG5cbi8vIEVsZW1lbnQgU3BhY2Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHBhZGRpbmcgYW5kIG1hcmdpbiBhdHRyaWJ1dGVzIHRvIGJlIHVzZWQgb25cbi8vIGFueSBlbGVtZW50XG5cbiRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4kbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcblxuLy8gUGFkZGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoMCk7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1lbmQ6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nLCBudWxsLCBudWxsLCBudWxsKTtcbn1cblxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKG51bGwsICRwYWRkaW5nKTtcbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcobnVsbCwgbnVsbCwgJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICAtLXBhZGRpbmctdG9wOiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZywgbnVsbCwgJHBhZGRpbmcsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIC0tcGFkZGluZy1zdGFydDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1lbmQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkcGFkZGluZyk7XG59XG5cblxuLy8gTWFyZ2luXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLW5vLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuXG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi10b3A6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWJvdHRvbTogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbik7XG59XG5cbi5pb24tbWFyZ2luLXRvcCB7XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbiwgbnVsbCwgbnVsbCwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJG1hcmdpbiwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLWVuZCB7XG4gIC0tbWFyZ2luLWVuZDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAkbWFyZ2luKTtcbn1cblxuLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbihudWxsLCBudWxsLCAkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWJvdHRvbTogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4oJG1hcmdpbiwgbnVsbCwgJG1hcmdpbiwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRtYXJnaW4pO1xufSIsIi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctc3RhcnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctZW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1zdGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tZW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBGbG9hdCBFbGVtZW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgZmxvYXQgY2xhc3NlcyBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYC5pb24tZmxvYXQte2JwfS17c2lkZX1gIGNsYXNzZXMgZm9yIGZsb2F0aW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnQgYW5kIHNpZGVcbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LWxlZnQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQobGVmdCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1yaWdodCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChyaWdodCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1zdGFydCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChzdGFydCwgIWltcG9ydGFudCk7XG4gICAgfVxuXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1lbmQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQoZW5kLCAhaW1wb3J0YW50KTtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUZXh0IEFsaWdubWVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgdGV4dCBhbGlnbm1lbnQgYXR0cmlidXRlcyBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYC5pb24tdGV4dC17YnB9YCBjbGFzc2VzIGZvciBhbGlnbmluZyB0aGUgdGV4dCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tanVzdGlmeSB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXN0YXJ0IHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWVuZCB7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXJpZ2h0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LW5vd3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXdyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20td3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LWFsaWdubWVudC5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUZXh0IFRyYW5zZm9ybWF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyB0ZXh0IHRyYW5zZm9ybSBhdHRyaWJ1dGVzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi10ZXh0LXticH1gIGNsYXNzZXMgZm9yIHRyYW5zZm9ybWluZyB0aGUgdGV4dCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50XG4gICAgLmlvbi10ZXh0I3skaW5maXh9LXVwcGVyY2FzZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWxvd2VyY2FzZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWNhcGl0YWxpemUge1xuICAgICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tdGV4dC11cHBlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxvd2VyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtY2FwaXRhbGl6ZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcy5tYXAgKi9cbiIsIi8vIEZsZXggVXRpbGl0aWVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBmbGV4IGNsYXNzZXMgdG8gYWxpZ24gZmxleCBjb250YWluZXJzXG4vLyBhbmQgaXRlbXNcblxuLy8gQWxpZ24gU2VsZlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gRmxleCBXcmFwXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gSnVzdGlmeSBDb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuXG4vLyBBbGlnbiBJdGVtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG4iLCIuaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsZXgtdXRpbHMuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCAnLi4vLi4vZ2xvYmFsLnNjc3MnO1xuLmRhbmdlcmNvbG9ye1xuICBjb2xvcjokZGFuZ2VyO1xufVxuLnByaW1hcnljb2xvcntcbiAgY29sb3I6JHByaW1hcnk7XG59XG4uZnVsbHdpZHRoe1xuICB3aWR0aDoxMDAlXG59XG4iXX0= */";

/***/ }),

/***/ 78710:
/*!************************************************************!*\
  !*** ./src/app/appsetting/appsetting.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <ion-item>\n    <ion-label>Select Theme:</ion-label>\n    <ion-select\n      color=\"primary\"\n      class=\"fullwidth\"\n      interface=\"popover\"\n      [(ngModel)]=\"selectTheme\"\n      (ionChange)=\"onThemeChange()\"\n    >\n      <ion-select-option\n        color=\"primary\"\n        [value]=\"theme.class\"\n        *ngFor=\"let theme of themeColor; \"\n      >\n        {{theme.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Per page record in Bill:</ion-label>\n    <ion-select\n      color=\"primary\"\n      class=\"fullwidth\"\n      interface=\"popover\"\n      [(ngModel)]=\"selectPageSettingBill\"\n      (ionChange)=\"onBillChange()\"\n    >\n      <ion-select-option\n        color=\"primary\"\n        [value]=\"pb.value\"\n        *ngFor=\"let pb of pageSettingBill; \"\n      >\n        {{pb.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Per page record in Report:</ion-label>\n    <ion-select\n      color=\"primary\"\n      class=\"fullwidth\"\n      interface=\"popover\"\n      [(ngModel)]=\"selectPageSettingReport\"\n      (ionChange)=\"onReportChange()\"\n    >\n      <ion-select-option\n        color=\"primary\"\n        [value]=\"pr.value\"\n        *ngFor=\"let pr of pageSettingReport; \"\n      >\n        {{pr.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-label>Printer Setup</ion-label>\n      <ion-button\n        expand=\"block\"\n        color=\"primary\"\n        (click)=\"onClickPrinterSetup()\"\n        [disabled]=\"!thermalPrinter\"\n        >Search</ion-button\n      >\n\n      <ion-select\n        *ngIf=\"allPrinter.length>0\"\n        color=\"primary\"\n        class=\"fullwidth\"\n        interface=\"popover\"\n        [(ngModel)]=\"selectedPrinter\"\n        (ionChange)=\"onDeviceChange()\"\n        placeholder=\"Select Printer\"\n      >\n        <ion-select-option\n          color=\"primary\"\n          [value]=\"printer\"\n          *ngFor=\"let printer of allPrinter; \"\n        >\n          {{printer.name}}\n        </ion-select-option>\n      </ion-select>\n      <ion-button [disabled]=\"!util.printer\" (click)=\"test()\">Test</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-label>Copies of Bill to print</ion-label>\n      <ion-radio-group  [(ngModel)]=\"numberOfRecipt\" (ionChange)=\"onChange($event)\">\n        <ion-item no-padding>\n          <ion-label>Do not Print</ion-label>\n          <ion-radio\n            slot=\"start\"\n            id=\"mrgndr\"\n            name=\"gender-male\"\n            [value]=\"0\"\n            class=\"radiobutton\"\n            color=\"primary\"\n          ></ion-radio>\n        </ion-item>\n        <ion-item no-padding>\n          <ion-label>One</ion-label>\n          <ion-radio\n            slot=\"start\"\n            id=\"mrgndr\"\n            name=\"gender-male\"\n            [value]=\"1\"\n            class=\"radiobutton\"\n            color=\"primary\"\n          ></ion-radio>\n        </ion-item>\n\n        <ion-item no-padding>\n          <ion-label>Two</ion-label>\n          <ion-radio\n            slot=\"start\"\n            id=\"mrgndr\"\n            name=\"gender-male\"\n            [value]=\"2\"\n            class=\"radiobutton\"\n            color=\"primary\"\n          ></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-item>\n  </ion-list>\n</ion-list>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_appsetting_appsetting_module_ts.js.map