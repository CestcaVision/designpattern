package main

func Mocha(b Beverage) Beverage {

	return &CondimentDecorator{
		beverage:    b,
		description: "Mocha",
		price:       15,
	}
}
