import { Current } from "./Current"
import { WeatherStation } from "./WeatherStation"


export default class Main {
    constructor() {
        let w = new WeatherStation()
        let c = new Current(w)
        w.registerOberver(c)
        w.setChange(11, 33, 32)
        w.setChange(13, 55, 3)
        w.setChange(223, 45, 123)
    }
}