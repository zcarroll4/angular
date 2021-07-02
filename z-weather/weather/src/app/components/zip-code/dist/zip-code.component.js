"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ZipCodeComponent = void 0;
var core_1 = require("@angular/core");
var axios_1 = require("axios");
var weather_1 = require("src/app/weather");
var ZipCodeComponent = /** @class */ (function () {
    function ZipCodeComponent() {
        this.val = '';
        this.apiKey = '6067074c07a54e73b0e2b33fa76fbe5b';
        this.temp = '';
        this.showRightCol = false;
    }
    ZipCodeComponent.prototype.processKeyup = function (value) {
        this.val = value;
        if (value.length >= 5) {
            this.getWeatherByZip(Number(value));
        }
        else {
            this.showRightCol = false;
        }
    };
    ZipCodeComponent.prototype.getWeatherByZip = function (zip) {
        return __awaiter(this, void 0, void 0, function () {
            var url, weather, iconURL, exception_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (zip.toString().length < 5) {
                            console.error('must enter min. 5 digits');
                            return [2 /*return*/];
                        }
                        url = "https://api.openweathermap.org/data/2.5/weather?" +
                            "zip=" + zip +
                            "&appid=" + this.apiKey +
                            "&units=imperial";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log(this.degToCompass(30));
                        return [4 /*yield*/, axios_1["default"].get(url)];
                    case 2:
                        weather = _a.sent();
                        console.log(weather);
                        this.showRightCol = true;
                        iconURL = "http://openweathermap.org/img/wn/" + weather.data.weather[0].icon + "@2x.png";
                        this.weatherData = new weather_1.Weather(Math.round(weather.data.main.temp), Math.round(weather.data.main.feels_like), weather.data.main.humidity, Math.round(weather.data.main.temp_max), Math.round(weather.data.main.temp_min), weather.data.name, weather.data.sys.country, weather.data.weather[0].main, weather.data.weather[0].description, Math.round(weather.data.wind.speed), weather.data.wind.deg, iconURL);
                        return [3 /*break*/, 4];
                    case 3:
                        exception_1 = _a.sent();
                        console.log(exception_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ZipCodeComponent.prototype.degToCompass = function (num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    };
    ZipCodeComponent = __decorate([
        core_1.Component({
            selector: 'app-zip-code',
            templateUrl: './zip-code.component.html',
            styleUrls: ['./zip-code.component.scss']
        })
    ], ZipCodeComponent);
    return ZipCodeComponent;
}());
exports.ZipCodeComponent = ZipCodeComponent;
