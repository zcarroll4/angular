"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_nav_component_1 = require("./components/header-nav/header-nav.component");
var home_component_1 = require("./components/home/home.component");
var zip_code_component_1 = require("./components/zip-code/zip-code.component");
var retirement_income_component_1 = require("./components/retirement-income/retirement-income.component");
var calculator_component_1 = require("./components/calculator/calculator.component");
var ngx_spinner_1 = require("ngx-spinner");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_nav_component_1.HeaderNavComponent, home_component_1.HomeComponent, zip_code_component_1.ZipCodeComponent, retirement_income_component_1.RetirementIncomeComponent, calculator_component_1.CalculatorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ngx_spinner_1.NgxSpinnerModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
