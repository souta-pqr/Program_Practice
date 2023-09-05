func pow_a(a [3]int) {
	for i, v := range a {
		a[i] = v * v
	}
	return
}

func pow_s(s []int) {
	for i, v := range s {
		s[i] = v * v
	}
	return
}

a := [3]int{1, 2, 3}
s := []int{1, 2, 3}
pow_a(a)
pow_s(s)

a // => [1 4 9]
s //=> [1 4 9]