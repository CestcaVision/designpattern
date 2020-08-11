import { Observer } from "./Observer";
import { Display } from "./Display";
import { WeatherStation } from "./WeatherStation";

export class Current implements Observer, Display {
    private temperature: number
    private humidity: number
    constructor(private weatherData: WeatherStation) {
        this.temperature = 0
        this.humidity = 0
    }
    update() {
        this.temperature = this.weatherData.getTemperature()
        this.humidity = this.weatherData.getHumidity()
        this.display()
    }
    display() {
        console.log(`Current Conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}