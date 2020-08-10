"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Espresso_1 = __importDefault(require("./Espresso"));
var Mocha_1 = __importDefault(require("./Mocha"));
var Soy_1 = __importDefault(require("./Soy"));
var Main = /** @class */ (function () {
    function Main() {
        var b1 = new Espresso_1.default();
        b1 = new Soy_1.default(new Mocha_1.default(b1));
        console.log(b1.getDescription());
        console.log(b1.cost());
    }
    return Main;
}());
exports.default = Main;
