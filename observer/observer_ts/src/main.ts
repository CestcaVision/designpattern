import Beverage from "./beverage";
import Espresso from "./Espresso";
import HouseBlend from "./HouseBlend";
import Mocha from "./Mocha";
import Soy from "./Soy";

export default class Main {
    constructor() {
        let b1: Beverage = new Espresso()
        b1 = new Soy(new Mocha(b1))

        console.log(b1.getDescription());
        console.log(b1.cost());
    }
}