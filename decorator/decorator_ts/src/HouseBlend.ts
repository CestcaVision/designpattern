import Beverage from "./beverage"

export default class HouseBlend extends Beverage {
    public desc = "HOUSEBLEND"
    cost() {
        return 22
    }
}