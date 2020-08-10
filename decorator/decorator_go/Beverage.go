package main

type Beverage interface {
	GetDescription() string
	Cost() int
}
