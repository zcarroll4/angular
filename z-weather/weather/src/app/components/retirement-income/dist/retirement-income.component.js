"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RetirementIncomeComponent = void 0;
var core_1 = require("@angular/core");
var retire_1 = require("./retire");
var RetirementIncomeComponent = /** @class */ (function () {
    function RetirementIncomeComponent() {
        this.balance = 0;
        this.income = 0;
    }
    RetirementIncomeComponent.prototype.ngOnInit = function () {
    };
    RetirementIncomeComponent.prototype.processKeyup = function (startAge, retireAge, monthlyContributions, expReturn, retirementYield) {
        if (startAge != '' && retireAge != '' && monthlyContributions != '' && expReturn != '') {
            console.log('has-value');
            var duration = Number(retireAge) - Number(startAge);
            this.balance = this.calculateValues(Number(monthlyContributions) * 12, Number(duration), Number(expReturn));
            this.income = this.getIncome(this.balance, Number(retirementYield));
        }
        else {
            console.log('missing values');
        }
    };
    RetirementIncomeComponent.prototype.onKey = function (event) {
        if (Number(document.getElementById('startAge').value) != null && Number(document.getElementById('retireAge').value) != null && Number(document.getElementById('monthlyContributions').value) != null
            && Number(document.getElementById('expReturns').value) != null) {
            var duration = Number(document.getElementById('startAge').value) - Number(document.getElementById('retireAge').value);
            this.balance = this.calculateValues(Number(document.getElementById('monthlyContributions').value) * 12, Number(duration), Number(document.getElementById('expReturn').value));
            this.income = this.getIncome(this.balance, 4); //estimated 4% yield 
        }
        else {
            console.log('missing values');
        }
    };
    RetirementIncomeComponent.prototype.onClick = function (event) {
        if (Number(document.getElementById('startAge').value) != null && Number(document.getElementById('retireAge').value) != null && Number(document.getElementById('monthlyContributions').value) != null
            && Number(document.getElementById('expReturns').value) != null) {
            var duration = Number(document.getElementById('startAge').value) - Number(document.getElementById('retireAge').value);
            this.balance = this.calculateValues(Number(document.getElementById('monthlyContributions').value) * 12, Number(duration), Number(document.getElementById('expReturn').value));
            this.income = this.getIncome(this.balance, 4); //estimated 4% yield 
        }
        else {
            console.log('missing values');
        }
    };
    RetirementIncomeComponent.prototype.calculateValues = function (contributions, duration, rate) {
        this.retirementInfo = new retire_1.Retire(contributions, duration, rate);
        var accumulated = 0;
        if (duration > 1) {
            accumulated = this.calculateValues(contributions, duration - 1, rate);
        }
        accumulated += contributions;
        accumulated = accumulated * (Math.pow(1 + rate / (100 * 1), 1));
        console.log(accumulated);
        return Number(accumulated);
    };
    RetirementIncomeComponent.prototype.getIncome = function (balance, yieldPct) {
        var income = balance * (yieldPct / 100);
        return Number(income);
    };
    RetirementIncomeComponent = __decorate([
        core_1.Component({
            selector: 'app-retirement-income',
            templateUrl: './retirement-income.component.html',
            styleUrls: ['./retirement-income.component.scss']
        })
    ], RetirementIncomeComponent);
    return RetirementIncomeComponent;
}());
exports.RetirementIncomeComponent = RetirementIncomeComponent;
