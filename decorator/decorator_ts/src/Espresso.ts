import Beverage from "./beverage"

export default class Espresso extends Beverage {
    public desc = "ESPRESSO"
    cost() {
        return 15
    }
}