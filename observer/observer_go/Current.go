package main

import "fmt"

// Current is an implement of Observer and Display,
type Current struct {
	temperature float64
	humidity    float64
	subject     Subject
}

func (c *Current) update() {
	c.temperature = c.subject.getTemperature()
	c.humidity = c.subject.getHumidity()
	c.display()
}

func (c *Current) display() {
	fmt.Printf("Current conditions: %f F degrees and %f humidity\n", c.temperature, c.humidity)
}

func (c *Current) setSubject(s Subject) {
	c.subject = s
}
