package main

import "fmt"

func main() {
	var b1 = new(Espresso)
	des := Mocha(b1).GetDescription()
	price := Mocha(b1).Cost()
	fmt.Println(des)
	fmt.Println(price)
	var b2 = new(HouseBlend)
	des2 := Soy(Mocha(b2)).GetDescription()
	price2 := Soy(Mocha(b2)).Cost()
	fmt.Println(des2)
	fmt.Println(price2)
}
