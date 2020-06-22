(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_configurator_product_configurator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-configurator/product-configurator.component */ "./src/app/product-configurator/product-configurator.component.ts");
/* harmony import */ var _canvas_samples_canvas_samples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-samples/canvas-samples.component */ "./src/app/canvas-samples/canvas-samples.component.ts");






const routes = [
    {
        path: '', component: _product_configurator_product_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ProductConfiguratorComponent"]
    },
    { path: 'canvas', component: _canvas_samples_canvas_samples_component__WEBPACK_IMPORTED_MODULE_3__["CanvasSamplesComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return [""]; };
const _c1 = function () { return ["/canvas"]; };
class AppComponent {
    constructor() {
        this.title = 'product-configurator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Configurator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Canvas Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_configurator_product_configurator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-configurator/product-configurator.component */ "./src/app/product-configurator/product-configurator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _canvas_samples_canvas_samples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas-samples/canvas-samples.component */ "./src/app/canvas-samples/canvas-samples.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _product_configurator_product_configurator_component__WEBPACK_IMPORTED_MODULE_4__["ProductConfiguratorComponent"],
        _canvas_samples_canvas_samples_component__WEBPACK_IMPORTED_MODULE_6__["CanvasSamplesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _product_configurator_product_configurator_component__WEBPACK_IMPORTED_MODULE_4__["ProductConfiguratorComponent"],
                    _canvas_samples_canvas_samples_component__WEBPACK_IMPORTED_MODULE_6__["CanvasSamplesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/canvas-samples/canvas-samples.component.ts":
/*!************************************************************!*\
  !*** ./src/app/canvas-samples/canvas-samples.component.ts ***!
  \************************************************************/
/*! exports provided: CanvasSamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSamplesComponent", function() { return CanvasSamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.assets */ "./src/app/config.assets.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["canvas"];
function CanvasSamplesComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Line Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_53_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.config.lineWidth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.config.lineWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.config.lineWidth);
} }
function CanvasSamplesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stroke Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_54_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.config.strokeStyle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.config.strokeStyle);
} }
function CanvasSamplesComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_55_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.config.x = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_55_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.config.y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.config.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.config.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.config.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.config.y);
} }
function CanvasSamplesComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_56_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.config.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_56_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.config.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.config.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.config.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.config.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.config.height);
} }
function CanvasSamplesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_57_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.config.x1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Y1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_57_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.config.y1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "X2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_57_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.config.x2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Y2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_57_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.config.y2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.config.x1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.config.y1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.config.x2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.config.y2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.config.y1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.config.x2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.config.y2);
} }
function CanvasSamplesComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Radius");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_div_58_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.config.radius = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.config.radius);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.config.radius);
} }
class CanvasSamplesComponent {
    constructor() {
        this.config = {
            source: 'arc',
            style: '#00AA00',
            x: 50,
            y: 50,
            width: 30,
            height: 30,
            text: '',
            font: '',
            startAngle: 0,
            endAngle: Math.PI * 2,
            clockwise: false,
            lineWidth: 5,
            strokeStyle: 'blue',
            radius: 30,
            x1: 50,
            y1: 50,
            x2: 100,
            y2: 100,
        };
    }
    ngAfterViewInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
    }
    fillRect() {
        this.context.beginPath();
        this.context.fillStyle = this.config.style;
        this.context.rect(this.config.x, this.config.y, this.config.width, this.config.height);
        if (this.config.stroke) {
            this.context.lineWidth = this.config.lineWidth;
            this.context.strokeStyle = this.config.strokeStyle;
            this.context.stroke();
        }
        this.context.fill();
        this.context.closePath();
    }
    fillArc() {
        this.context.fillStyle = this.config.style;
        this.context.beginPath();
        this.context.arc(this.config.x, this.config.y, this.config.radius, this.config.startAngle, this.config.endAngle, this.config.clockwise);
        if (this.config.stroke) {
            this.context.lineWidth = this.config.lineWidth;
            this.context.strokeStyle = this.config.strokeStyle;
            this.context.stroke();
        }
        this.context.fill();
        this.context.closePath();
    }
    drawLine() {
        this.context.beginPath();
        this.context.lineWidth = this.config.lineWidth;
        this.context.fillStyle = this.config.style;
        this.context.strokeStyle = this.config.strokeStyle;
        this.context.moveTo(this.config.x1, this.config.y1);
        this.context.lineTo(this.config.x2, this.config.y2);
        this.context.stroke();
        this.context.lineCap = 'round';
        // this.context.closePath();
    }
    drawImg() {
        const img = new Image();
        img.src = Object(_config_assets__WEBPACK_IMPORTED_MODULE_1__["getImg"])('wallet-brown.jpg');
        img.onload = () => {
            const x = 0;
            const y = 0;
            this.context.drawImage(img, 0, 0, 200, 200);
            this.context.font = `14pt ${this.config.font}`;
            this.context.fillStyle = this.config.style;
            this.context.fillText(this.config.text, this.config.x, this.config.y);
            this.context.closePath();
        };
    }
    ngOnInit() {
    }
    render() {
        switch (this.config.source) {
            case 'arc':
                this.fillArc();
                break;
            case 'rect':
                this.fillRect();
                break;
            case 'line':
                this.drawLine();
                break;
            case 'img':
                this.drawImg();
                break;
        }
    }
    closePath() {
        this.context.closePath();
    }
    beginPath() {
        this.context.beginPath();
    }
    clear() {
        this.context.clearRect(0, 0, 200, 200);
    }
}
CanvasSamplesComponent.ɵfac = function CanvasSamplesComponent_Factory(t) { return new (t || CanvasSamplesComponent)(); };
CanvasSamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasSamplesComponent, selectors: [["app-canvas-samples"]], viewQuery: function CanvasSamplesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 69, vars: 14, consts: [["href", "https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Flavors&family=Indie+Flower&family=Miltonian+Tattoo&family=Plaster&display=swap", "rel", "stylesheet"], [1, "container"], [1, "canvas-container"], ["width", "200", "height", "200"], ["canvas", ""], [1, "tool-bar"], [1, "form-control"], ["name", "source", "id", "source", 3, "ngModel", "ngModelChange"], ["value", "arc", "selected", ""], ["value", "rect"], ["value", "line"], ["value", "img"], ["value", "video"], ["type", "color", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "'Bungee Outline', cursive", "selected", "", 2, "font-family", "'Bungee Outline', cursive"], ["value", "'Flavors', cursive", 2, "font-family", "'Flavors', cursive"], ["value", "'Indie Flower', cursive", 2, "font-family", "'Indie Flower', cursive"], ["value", "'Miltonian Tattoo', cursive", 2, "font-family", "'Miltonian Tattoo', cursive"], ["value", "'Plaster', cursive", 2, "font-family", "'Plaster', cursive"], [1, "checkbox-group"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "stroke-group"], ["class", "form-control", 4, "ngIf"], ["class", "location-group", 4, "ngIf"], ["class", "size-group", 4, "ngIf"], ["class", "line-group", 4, "ngIf"], [1, "button-group"], [3, "click"], ["type", "range", "max", "50", "min", "0", 3, "ngModel", "ngModelChange"], [1, "badge"], [1, "location-group"], ["type", "range", "max", "200", "min", "0", 3, "ngModel", "ngModelChange"], [1, "size-group"], ["type", "range", "max", "150", "min", "0", 3, "ngModel", "ngModelChange"], [1, "line-group"], [1, "form-control", "line-input"], [1, "point"], ["type", "text", "max", "100", "min", "0", 3, "ngModel", "ngModelChange"], ["type", "range", "max", "100", "min", "0", 3, "ngModel", "ngModelChange"]], template: function CanvasSamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tool Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_Template_select_ngModelChange_14_listener($event) { return ctx.config.source = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Arc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fill Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_Template_input_ngModelChange_28_listener($event) { return ctx.config.style = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_Template_input_ngModelChange_32_listener($event) { return ctx.config.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Font Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_Template_select_ngModelChange_36_listener($event) { return ctx.config.font = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Stroke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasSamplesComponent_Template_input_ngModelChange_51_listener($event) { return ctx.config.stroke = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CanvasSamplesComponent_div_53_Template, 6, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CanvasSamplesComponent_div_54_Template, 4, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CanvasSamplesComponent_div_55_Template, 13, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CanvasSamplesComponent_div_56_Template, 13, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CanvasSamplesComponent_div_57_Template, 27, 7, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CanvasSamplesComponent_div_58_Template, 6, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasSamplesComponent_Template_button_click_61_listener() { return ctx.render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Render");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasSamplesComponent_Template_button_click_63_listener() { return ctx.closePath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Close Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasSamplesComponent_Template_button_click_65_listener() { return ctx.beginPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Begin Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasSamplesComponent_Template_button_click_67_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("font-family:", ctx.config.font, "; font-size:20pt; color:black;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.font);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.config.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.source != "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.source == "rect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.source == "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.source == "arc");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 70%;\n  margin: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 15pt;\n}\n\ninput[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.form-control[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  letter-spacing: 2px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.tool-bar[_ngcontent-%COMP%] {\n  max-width: 400px;\n  min-width: 300px;\n  padding: 10px;\n}\n\n.button-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.button-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n\n.button-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 60px;\n  height: 25px;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  font-size: 11pt;\n}\n\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n[type=checkbox][_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  box-shadow: 0px 0px 3px black;\n}\n\n.form-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.point[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  overflow: hidden;\n}\n\n.point[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  font-family: \"Shadows Into Light\", cursive;\n  font-size: 40pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLXNhbXBsZXMvQzpcXFVzZXJzXFxhaG1ldFxcc291cmNlXFxyZXBvc1xccHJvZHVjdC1jb25maWd1cmF0b3Ivc3JjXFxhcHBcXGNhbnZhcy1zYW1wbGVzXFxjYW52YXMtc2FtcGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FudmFzLXNhbXBsZXMvY2FudmFzLXNhbXBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBRUEsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY2FudmFzLXNhbXBsZXMvY2FudmFzLXNhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wgKiB7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b29sLWJhciB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWdyb3VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAgKiB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5idXR0b24tZ3JvdXAgKjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbn1cclxuXHJcbi5jaGVja2JveC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHNwYW4ge1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvaW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wb2ludCBpbnB1dCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA0MHB0O1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wgKiB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvb2wtYmFyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmJ1dHRvbi1ncm91cCAqIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ1dHRvbi1ncm91cCAqOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuXG4uY2hlY2tib3gtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuW3R5cGU9Y2hlY2tib3hdIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XG59XG5cbi5mb3JtLWNvbnRyb2wgc3BhbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvaW50IHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBvaW50IGlucHV0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LWZhbWlseTogXCJTaGFkb3dzIEludG8gTGlnaHRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA0MHB0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasSamplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canvas-samples',
                templateUrl: './canvas-samples.component.html',
                styleUrls: ['./canvas-samples.component.scss']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }] }); })();


/***/ }),

/***/ "./src/app/config.assets.ts":
/*!**********************************!*\
  !*** ./src/app/config.assets.ts ***!
  \**********************************/
/*! exports provided: getImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImg", function() { return getImg; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

const ASSETS = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? '/product-configurator/assets' : 'assets';
const getImg = (name) => {
    return ASSETS.concat(`/imgs/${name}`);
};


/***/ }),

/***/ "./src/app/product-configurator/product-configurator.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product-configurator/product-configurator.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductConfiguratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConfiguratorComponent", function() { return ProductConfiguratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.assets */ "./src/app/config.assets.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["imgCanvas"];
const _c1 = ["imgContainer"];
function ProductConfiguratorComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductConfiguratorComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.select(product_r3.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](product_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-color", ctx_r1.currentProduct == product_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, product_r3.color), " ");
} }
class ProductConfiguratorComponent {
    constructor() {
        this.currentProduct = Object(_config_assets__WEBPACK_IMPORTED_MODULE_1__["getImg"])('wallet-black.jpg');
        this.products = [Object(_config_assets__WEBPACK_IMPORTED_MODULE_1__["getImg"])('wallet-black.jpg'), Object(_config_assets__WEBPACK_IMPORTED_MODULE_1__["getImg"])('wallet-brown.jpg')];
        this.productLabel = {
            top: 20,
            left: 20,
            color: 'white',
            text: 'Name',
            size: 14,
            font: `\'Bungee Outline\', cursive`,
            letterSpacing: 0,
            transform: 0
        };
    }
    ngAfterViewInit() {
        const context = this.canvas.nativeElement.getContext('2d');
        this.imgContainer.nativeElement.addEventListener('click', () => {
            window.open('', this.canvas.nativeElement.toDataURL());
        });
    }
    ngOnInit() {
    }
    select(path) {
        this.currentProduct = path;
    }
    productDetails() {
        return this.products.map(p => {
            return {
                color: p.split('.')[0].split('-')[1],
                path: p
            };
        });
    }
    clearFont() {
        this.productLabel.font = '';
    }
}
ProductConfiguratorComponent.ɵfac = function ProductConfiguratorComponent_Factory(t) { return new (t || ProductConfiguratorComponent)(); };
ProductConfiguratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductConfiguratorComponent, selectors: [["app-product-configurator"]], viewQuery: function ProductConfiguratorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, decls: 62, vars: 23, consts: [["href", "https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Flavors&family=Indie+Flower&family=Miltonian+Tattoo&family=Plaster&display=swap", "rel", "stylesheet"], [1, "container"], [1, "col"], [1, "img-container"], ["imgContainer", ""], [3, "src"], [1, "img-mask"], [1, "product-label"], [1, "product-colors"], [3, "class", "active-color", "click", 4, "ngFor", "ngForOf"], [1, "form-control"], ["type", "text", "placeholder", "ENTER NAME OR MESSAGE", 3, "ngModel", "ngModelChange"], ["type", "range", "max", "300", "min", "-30", 3, "ngModel", "ngModelChange"], ["type", "color", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "'Bungee Outline', cursive", "selected", "", 2, "font-family", "'Bungee Outline', cursive"], ["value", "'Flavors', cursive", 2, "font-family", "'Flavors', cursive"], ["value", "'Indie Flower', cursive", 2, "font-family", "'Indie Flower', cursive"], ["value", "'Miltonian Tattoo', cursive", 2, "font-family", "'Miltonian Tattoo', cursive"], ["value", "'Plaster', cursive", 2, "font-family", "'Plaster', cursive"], ["type", "range", "min", "4", "max", "100", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "100", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "500", 3, "ngModel", "ngModelChange"], ["width", "400", "height", "400"], ["imgCanvas", ""], [3, "click"]], template: function ProductConfiguratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Product Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductConfiguratorComponent_div_13_Template, 3, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configure Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_19_listener($event) { return ctx.productLabel.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verticle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_23_listener($event) { return ctx.productLabel.top = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.productLabel.left = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Text Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_31_listener($event) { return ctx.productLabel.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Font Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_select_ngModelChange_35_listener($event) { return ctx.productLabel.font = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Font ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_49_listener($event) { return ctx.productLabel.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Letter Spacing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_53_listener($event) { return ctx.productLabel.letterSpacing = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Text Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductConfiguratorComponent_Template_input_ngModelChange_57_listener($event) { return ctx.productLabel.transform = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "canvas", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Hello there");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentProduct, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate7"]("position: absolute; margin-left:", ctx.productLabel.left, "px; top:", ctx.productLabel.top, "px; z-index:3; color:", ctx.productLabel.color, "; font-size:", ctx.productLabel.size, "pt; font-family:", ctx.productLabel.font, "; letter-spacing:", ctx.productLabel.letterSpacing, "px; transform: rotate(", ctx.productLabel.transform, "deg);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productLabel.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.top);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("font-family:", ctx.productLabel.font, "; font-size:20pt; color:black;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.font);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.letterSpacing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productLabel.transform);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1%;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  width: 30%;\n  padding: 1%;\n}\n\n.col[_ngcontent-%COMP%]:nth-child(2) {\n  width: 65%;\n  padding: 3%;\n  z-index: 5;\n  background-color: #e9e9e9;\n  border-radius: 20px;\n  box-shadow: 0px 0px 5px black;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.img-mask[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 0px;\n  left: 0px;\n  width: 250px;\n  height: 250px;\n}\n\n.product-colors[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding: 4px;\n  margin: 2px;\n  height: 40px;\n  width: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border: 6px solid white;\n}\n\n.active-color[_ngcontent-%COMP%] {\n  border: 3px solid white;\n  outline: 3px solid gray;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: black;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.brown[_ngcontent-%COMP%] {\n  background-color: brown;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.product-label[_ngcontent-%COMP%] {\n  text-align: center;\n  text-shadow: inset 0px 0px 3px black;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 70px;\n  border: none;\n}\n\ninput[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover {\n  border: none;\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:hover {\n  border: none;\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%]::after {\n  margin-left: 100px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n}\n\n.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jb25maWd1cmF0b3IvQzpcXFVzZXJzXFxhaG1ldFxcc291cmNlXFxyZXBvc1xccHJvZHVjdC1jb25maWd1cmF0b3Ivc3JjXFxhcHBcXHByb2R1Y3QtY29uZmlndXJhdG9yXFxwcm9kdWN0LWNvbmZpZ3VyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1jb25maWd1cmF0b3IvcHJvZHVjdC1jb25maWd1cmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBRUEsdUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7OztFQUdJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7OztFQUdJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1jb25maWd1cmF0b3IvcHJvZHVjdC1jb25maWd1cmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuLmNvbDpudGgtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmltZy1tYXNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbG9ycyAqIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYWN0aXZlLWNvbG9yIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnJvd24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuaW5wdXQ6YWN0aXZlLFxyXG5pbnB1dDpmb2N1cyxcclxuaW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0OmFjdGl2ZSxcclxuc2VsZWN0OmZvY3VzLFxyXG5zZWxlY3Q6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0OjphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wgaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uY29sOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMSU7XG59XG5cbi5jb2w6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMyU7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmltZy1tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5wcm9kdWN0LWNvbG9ycyAqIHtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XG59XG5cbi5hY3RpdmUtY29sb3Ige1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgb3V0bGluZTogM3B4IHNvbGlkIGdyYXk7XG59XG5cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnJvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCBibGFjaztcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0OmFjdGl2ZSxcbmlucHV0OmZvY3VzLFxuaW5wdXQ6aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlbGVjdDphY3RpdmUsXG5zZWxlY3Q6Zm9jdXMsXG5zZWxlY3Q6aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlbGVjdDo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uZm9ybS1jb250cm9sIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductConfiguratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-configurator',
                templateUrl: './product-configurator.component.html',
                styleUrls: ['./product-configurator.component.scss']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgCanvas']
        }], imgContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgContainer']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ahmet\source\repos\product-configurator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map