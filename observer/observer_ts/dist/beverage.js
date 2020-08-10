"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.desc = "unknown";
    }
    Beverage.prototype.getDescription = function () {
        return this.desc;
    };
    return Beverage;
}());
exports.default = Beverage;
