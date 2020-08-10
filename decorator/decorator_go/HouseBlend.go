package main

type HouseBlend struct {
}

func (h *HouseBlend) GetDescription() string {
	return "HouseBlend"
}

func (h *HouseBlend) Cost() int {
	return 3
}
