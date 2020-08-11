"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Current = void 0;
var Current = /** @class */ (function () {
    function Current(weatherData) {
        this.weatherData = weatherData;
        this.temperature = 0;
        this.humidity = 0;
    }
    Current.prototype.update = function () {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.display();
    };
    Current.prototype.display = function () {
        console.log("Current Conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    };
    return Current;
}());
exports.Current = Current;
