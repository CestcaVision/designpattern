import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class WeatherStation implements Subject {
    public observers: Observer[]
    private temperature: number
    private humidity: number
    private pressure: number
    constructor() {
        this.observers = [];
        this.temperature = 0
        this.humidity = 0
        this.pressure = 0
    }


    registerOberver(o: Observer) {
        this.observers.push(o)
    }
    removeObserver(o: Observer) {

        this.observers = this.observers.filter((v, i, arr) => {
            return v != o
        })
    }
    notifyObserver() {
        for (let item of this.observers) {
            item.update()
        }
    }
    getTemperature() {
        return this.temperature
    }
    getHumidity() {
        return this.humidity
    }
    getPressure() {
        return this.pressure
    }
    public setChange(t: number, h: number, p: number) {
        this.temperature = t
        this.humidity = h
        this.pressure = p
        this.notifyObserver()
    }
}