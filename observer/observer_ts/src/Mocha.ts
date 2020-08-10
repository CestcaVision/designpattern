import Beverage from "./beverage"
import CondimentDecorator from "./Condiment";

export default class Mocha extends CondimentDecorator {

    constructor(public beverage: Beverage) {
        super()
    }
    getDescription() {
        return this.beverage.getDescription() + " Mocha"
    }
    cost() {
        return this.beverage.cost() + 11
    }
}