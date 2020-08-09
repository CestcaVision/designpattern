package main

import (
	"fmt"
	"math"
)

// Static is an implement of Observer and Display,
type Static struct {
	max     float64
	min     float64
	average float64
	subject Subject
}

func (s *Static) update() {
	ts := s.subject.getAllTemperatures()
	Max := ts[0]
	Min := ts[0]
	var Sum float64
	for _, t := range ts {
		Max = math.Max(Max, t)
		Min = math.Min(Min, t)
		Sum += t
	}
	Average := Sum / float64(len(ts))
	s.average = Average
	s.max = Max
	s.min = Min
	s.display()
}

func (s *Static) display() {
	fmt.Printf("Avg/Max/Min temperature: %f / %f / %f\n", s.average, s.max, s.min)
}

func (s *Static) setSubject(w Subject) {
	s.subject = w
}
