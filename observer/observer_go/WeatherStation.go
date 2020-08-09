package main

// WeatherStation is the implement of the subjet
type WeatherStation struct {
	data      Data
	observers []Observer
}

func (w *WeatherStation) addObserver(o Observer) {
	for _, v := range w.observers {
		if v == o {
			return
		}
	}
	w.observers = append(w.observers, o)
	o.setSubject(w)

}
func (w *WeatherStation) removeObserver(o Observer) {
	for i, v := range w.observers {
		if v == o {
			w.observers = append(w.observers[:i], w.observers[i+1:]...)
		}

	}
}

//getter
func (w *WeatherStation) getTemperature() float64 {
	return w.data.temperature
}
func (w *WeatherStation) getHumidity() float64 {
	return w.data.humidity
}
func (w *WeatherStation) getPressure() float64 {
	return w.data.pressure
}

func (w *WeatherStation) getAllTemperatures() []float64 {
	return w.data.temperatures
}

func (w *WeatherStation) notifiyObserver() {

	for _, o := range w.observers {
		o.update()
	}
}

func (w *WeatherStation) setChange(t float64, h float64, p float64) {
	w.data.temperature = t
	w.data.humidity = h
	w.data.pressure = p
	w.data.temperatures = append(w.data.temperatures, t)
	w.notifiyObserver()
}
