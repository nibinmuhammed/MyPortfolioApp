(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-skills-skills-module"],{

/***/ "5Z8y":
/*!***********************************************!*\
  !*** ./src/app/core/providers/skills-mock.ts ***!
  \***********************************************/
/*! exports provided: SKILLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
const SKILLS = [
    { id: 1, name: 'assets/images/html5.png', altText: 'HTML5' },
    { id: 2, name: 'assets/images/css3.png', altText: 'CSS' },
    { id: 3, name: 'assets/images/angular.png', altText: 'ANGULAR' },
    { id: 4, name: 'assets/images/javascript.png', altText: 'JAVASCRIPT' },
    { id: 5, name: 'assets/images/sass.png', altText: 'SASS' },
    { id: 6, name: 'assets/images/bootstrap.png', altText: 'BOOTSTRAP' },
    { id: 7, name: 'assets/images/github.png', altText: 'GITHUB' },
    { id: 8, name: 'assets/images/spring.png', altText: 'SPRING' },
];


/***/ }),

/***/ "9Gk9":
/*!************************************************************!*\
  !*** ./src/app/components/skills/skills-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SkillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsRoutingModule", function() { return SkillsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "A9VX");





const routes = [
    {
        path: '',
        component: _skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]
    }
];
class SkillsRoutingModule {
}
SkillsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkillsRoutingModule });
SkillsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkillsRoutingModule_Factory(t) { return new (t || SkillsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkillsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "A9VX":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_providers_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/providers/common-service */ "KmwF");



class SkillsComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.subscription = this.commonService.getSkills().subscribe(data => {
            this.skills = data;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_providers_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 8, vars: 0, consts: [[1, "container-fluid", "padding", "skills-section"], [1, "container"], [1, "row", "my-5"], [1, "col-md-4", "my-4"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "skills works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html'
            }]
    }], function () { return [{ type: _core_providers_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "KmwF":
/*!**************************************************!*\
  !*** ./src/app/core/providers/common-service.ts ***!
  \**************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _skills_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills-mock */ "5Z8y");




class CommonService {
    constructor() { }
    getSkills() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_skills_mock__WEBPACK_IMPORTED_MODULE_2__["SKILLS"]);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hfGs":
/*!****************************************************!*\
  !*** ./src/app/components/skills/skills.module.ts ***!
  \****************************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "A9VX");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills-routing.module */ "9Gk9");





class SkillsModule {
}
SkillsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SkillsModule });
SkillsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SkillsModule_Factory(t) { return new (t || SkillsModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SkillsModule, { declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SkillsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _skills_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillsRoutingModule"]
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-skills-skills-module.js.map