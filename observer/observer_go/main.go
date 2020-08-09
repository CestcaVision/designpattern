package main

func main() {
	w := new(WeatherStation)
	c := new(Current)
	s := new(Static)
	w.addObserver(c)
	w.addObserver(s)
	w.setChange(32, 2, 111)
	w.setChange(36, 232, 111)
	w.setChange(102, 32, 111)
}
