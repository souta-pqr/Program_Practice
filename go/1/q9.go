func sum(s ...int) int {
	n := 0
	for _, v := range s {
		n += v
	}
	return n
}

sum(1, 2, 3) // => 6
sum(1, 2, 3, 4, 5) // => 15
sum() // => 0

a := []int{1, 2, 3}
sum(a...) // => 6