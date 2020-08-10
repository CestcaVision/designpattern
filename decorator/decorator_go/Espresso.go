package main

type Espresso struct {
}

func (e *Espresso) GetDescription() string {
	return "Expresso"
}

func (e *Espresso) Cost() int {
	return 32
}
