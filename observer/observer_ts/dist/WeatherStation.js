"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    WeatherStation.prototype.registerOberver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (v, i, arr) {
            return v != o;
        });
    };
    WeatherStation.prototype.notifyObserver = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var item = _a[_i];
            item.update();
        }
    };
    WeatherStation.prototype.getTemperature = function () {
        return this.temperature;
    };
    WeatherStation.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherStation.prototype.getPressure = function () {
        return this.pressure;
    };
    WeatherStation.prototype.setChange = function (t, h, p) {
        this.temperature = t;
        this.humidity = h;
        this.pressure = p;
        this.notifyObserver();
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
