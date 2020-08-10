import Beverage from "./beverage"
import CondimentDecorator from "./Condiment";

export default class Soy extends CondimentDecorator {

    constructor(public beverage: Beverage) {
        super()
    }
    getDescription() {
        return this.beverage.getDescription() + " Soy"
    }
    cost() {
        return this.beverage.cost() + 2
    }
}