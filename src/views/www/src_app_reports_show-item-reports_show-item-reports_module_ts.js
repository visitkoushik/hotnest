"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_show-item-reports_show-item-reports_module_ts"],{

/***/ 2564:
/*!**************************************************************!*\
  !*** ./src/app/reports/item-profit/item-profit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemProfitComponent": () => (/* binding */ ItemProfitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_profit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-profit.component.html?ngResource */ 9692);
/* harmony import */ var _item_profit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-profit.component.scss?ngResource */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/convert-to-fulldate */ 4879);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);






let ItemProfitComponent = class ItemProfitComponent {
    constructor(util) {
        this.util = util;
        // public allItems: I_Items[] = [];
        this.reportResultBalance = null;
        this.totalProfit = 0;
        this.displayedColumns = ['itemName', 'itemCount', 'total'];
        this.start = null;
        this.end = null;
        this.transform = new src_app_pipe_convert_to_fulldate__WEBPACK_IMPORTED_MODULE_2__.ConvertToFullDate().transform;
    }
    ngOnInit() {
        // this.reportResultBalance = [...this.filter()];
        this.iReportsResp = { ...this.util.iReportsResp };
        this.itemReport = Object.values(this.iReportsResp.items);
        console.log(this.itemReport);
    }
    ngOnChanges(changes) {
        this.iReportsResp = { ...this.util.iReportsResp };
        this.itemReport = Object.values(this.iReportsResp.items);
    }
};
ItemProfitComponent.ctorParameters = () => [
    { type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__.UtilService }
];
ItemProfitComponent.propDecorators = {
    startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectedReport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    filterDateBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ItemProfitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-period-item-profit',
        template: _item_profit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_profit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemProfitComponent);



/***/ }),

/***/ 2132:
/*!*******************************************************************************!*\
  !*** ./src/app/reports/show-item-reports/show-item-reports-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowItemReportsPageRoutingModule": () => (/* binding */ ShowItemReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _show_item_reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-item-reports.page */ 5078);




const routes = [
    {
        path: '',
        component: _show_item_reports_page__WEBPACK_IMPORTED_MODULE_0__.ShowItemReportsPage,
        data: {
            title: 'Reports & Billings',
            displayBackButton: true,
            backTo: 'reports',
        },
    },
];
let ShowItemReportsPageRoutingModule = class ShowItemReportsPageRoutingModule {
};
ShowItemReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowItemReportsPageRoutingModule);



/***/ }),

/***/ 9813:
/*!***********************************************************************!*\
  !*** ./src/app/reports/show-item-reports/show-item-reports.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowItemReportsPageModule": () => (/* binding */ ShowItemReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _show_item_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-item-reports-routing.module */ 2132);
/* harmony import */ var _show_item_reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-item-reports.page */ 5078);
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/pipe.module */ 3493);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _item_profit_item_profit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-profit/item-profit.component */ 2564);










let ShowItemReportsPageModule = class ShowItemReportsPageModule {
};
ShowItemReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _show_item_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowItemReportsPageRoutingModule,
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        ],
        declarations: [_show_item_reports_page__WEBPACK_IMPORTED_MODULE_1__.ShowItemReportsPage, _item_profit_item_profit_component__WEBPACK_IMPORTED_MODULE_4__.ItemProfitComponent],
    })
], ShowItemReportsPageModule);



/***/ }),

/***/ 5078:
/*!*********************************************************************!*\
  !*** ./src/app/reports/show-item-reports/show-item-reports.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowItemReportsPage": () => (/* binding */ ShowItemReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _show_item_reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-item-reports.page.html?ngResource */ 1415);
/* harmony import */ var _show_item_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-item-reports.page.scss?ngResource */ 9157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/short-date.pipe */ 2459);
/* harmony import */ var src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/utilservice.service */ 847);
/* harmony import */ var src_model_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/model/util */ 7699);








let ShowItemReportsPage = class ShowItemReportsPage {
    constructor(activeRoute, util) {
        this.activeRoute = activeRoute;
        this.util = util;
        this.startDate = null;
        this.endDate = null;
        this.selectedReport = '-1';
        this.pageheading = '';
        this.total = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.FILTERBY = src_model_util__WEBPACK_IMPORTED_MODULE_4__.FILTER_BY;
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((p) => {
            this.startDate = p.startDate;
            this.endDate = p.endDate;
            this.selectedReport = p.selectedReport;
            this.filterDateBy = +p.filterDateBy;
            const shortDate = new src_app_pipe_short_date_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortDatePipe();
            const stdt = shortDate.transform(new Date(this.startDate));
            const nddt = shortDate.transform(new Date(this.endDate));
            this.pageheading =
                (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_4__.FILTER_BY.DATE ? stdt : this.startDate) +
                    ' - ' +
                    (this.filterDateBy === src_model_util__WEBPACK_IMPORTED_MODULE_4__.FILTER_BY.DATE ? nddt : this.endDate);
        });
        let itemReport = Object.values(this.util.iReportsResp.items);
        itemReport.forEach((e) => {
            this.total += e.total;
        });
    }
};
ShowItemReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_providers_utilservice_service__WEBPACK_IMPORTED_MODULE_3__.UtilService }
];
ShowItemReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-show-item-reports',
        template: _show_item_reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_show_item_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowItemReportsPage);



/***/ }),

/***/ 3466:
/*!***************************************************************************!*\
  !*** ./src/app/reports/item-profit/item-profit.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "table {\n  width: 100%;\n  box-shadow: none;\n}\n\n.resultstyle {\n  display: block;\n  text-align: right;\n  padding-right: 16px;\n}\n\nth.mat-header-cell {\n  text-align: center;\n  font-weight: bold;\n}\n\nth.mat-header-cell:last-of-type,\nth.mat-header-cell:first-of-type,\ntd.mat-cell:last-of-type,\ntd.mat-cell:first-of-type {\n  padding: 0;\n}\n\nth.mat-header-cell,\nth.mat-header-cell {\n  border-bottom: 1px solid currentColor;\n}\n\n.mat-column-order {\n  width: 10vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-itemCount {\n  width: 15vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-total {\n  width: 25vw;\n  text-align: center;\n  padding: 0;\n  border-right: 1px solid currentColor;\n}\n\n.mat-column-itemName {\n  width: 60vw;\n  padding: 0;\n  text-align: left;\n  padding-left: 5px;\n  border-right: 1px solid currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcHJvZml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBOzs7O0VBSUUsVUFBQTtBQUdGOztBQURBOztFQUVFLHFDQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQU1GIiwiZmlsZSI6Iml0ZW0tcHJvZml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5yZXN1bHRzdHlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nOiAwO1xufVxudGgubWF0LWhlYWRlci1jZWxsLFxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLm1hdC1jb2x1bW4tb3JkZXIge1xuICB3aWR0aDogMTB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4vLyAnaXRlbU5hbWUnLCAnaXRlbUNvdW50JywgJ3RvdGFsJ1xuLm1hdC1jb2x1bW4taXRlbUNvdW50IHtcbiAgd2lkdGg6IDE1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuLm1hdC1jb2x1bW4tdG90YWwge1xuICB3aWR0aDogMjV2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG59XG4ubWF0LWNvbHVtbi1pdGVtTmFtZSB7XG4gIHdpZHRoOiA2MHZ3O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xufVxuIl19 */";

/***/ }),

/***/ 9157:
/*!**********************************************************************************!*\
  !*** ./src/app/reports/show-item-reports/show-item-reports.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWl0ZW0tcmVwb3J0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9692:
/*!***************************************************************************!*\
  !*** ./src/app/reports/item-profit/item-profit.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <table mat-table [dataSource]=\"itemReport\" class=\"mat-elevation-z8\">\n    <!-- Name Column -->\n\n    <ng-container matColumnDef=\"itemName\">\n      <th mat-header-cell *matHeaderCellDef>Name</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.itemName }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"itemCount\">\n      <th mat-header-cell *matHeaderCellDef>Count</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.itemCount }}\n      </td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"total\">\n      <th mat-header-cell *matHeaderCellDef>Value</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.total.toFixed(2) }}\n      </td>\n    </ng-container>\n    <!-- <ng-container matColumnDef=\"profit\">\n        <th mat-header-cell *matHeaderCellDef>P(Rs)</th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{ element.profit.toFixed(2) }}\n        </td>\n      </ng-container> -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</ion-content>\n";

/***/ }),

/***/ 1415:
/*!**********************************************************************************!*\
  !*** ./src/app/reports/show-item-reports/show-item-reports.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-title>{{pageheading}}</ion-title>\n</ion-header>\n<ion-content>\n  <app-period-item-profit\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [selectedReport]=\"selectedReport\"\n    [filterDateBy]=\"filterDateBy\"\n    *ngIf=\"selectedReport==='-1'\"\n  >\n  </app-period-item-profit>\n</ion-content>\n<ion-footer style=\"text-align: end; padding: 1rem\">\n  Total: {{total.toFixed(2)}}\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_show-item-reports_show-item-reports_module_ts.js.map