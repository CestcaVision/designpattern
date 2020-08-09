package main

// Observer is the interface who receive the update of subject
type Observer interface {
	update()
	setSubject(s Subject)
}

// Display is the interface to display data
type Display interface {
	display()
}

// Subject is the interface of a observable
type Subject interface {
	addObserver(o Observer)
	removeObserver(o Observer)
	getTemperature() float64
	getHumidity() float64
	getPressure() float64
	getAllTemperatures() []float64
}

// Data is data transfered from subject `to oberserver`
type Data struct {
	temperature  float64
	humidity     float64
	pressure     float64
	temperatures []float64
}
