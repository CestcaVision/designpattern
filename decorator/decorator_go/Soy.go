package main

func Soy(b Beverage) Beverage {

	return &CondimentDecorator{
		beverage:    b,
		description: "Soy",
		price:       16,
	}
}
