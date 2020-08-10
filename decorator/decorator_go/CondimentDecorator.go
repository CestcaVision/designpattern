package main

import "fmt"

type CondimentDecorator struct {
	beverage    Beverage
	description string
	price       int
}

func (c *CondimentDecorator) GetDescription() string {
	return fmt.Sprintf("%s, %s", c.beverage.GetDescription(), c.description)
}

func (c *CondimentDecorator) Cost() int {
	return c.beverage.Cost() + c.price
}
