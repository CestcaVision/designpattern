"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Current_1 = require("./Current");
var WeatherStation_1 = require("./WeatherStation");
var Main = /** @class */ (function () {
    function Main() {
        var w = new WeatherStation_1.WeatherStation();
        var c = new Current_1.Current(w);
        // w.registerOberver(c)
        w.setChange(11, 33, 32);
        w.setChange(13, 55, 3);
        w.setChange(223, 45, 123);
    }
    return Main;
}());
exports.default = Main;
