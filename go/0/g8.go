func plus(x, y int) int {
	return x + y
}
plus(1, 2) // => 3

// 戻り値のない関数
func hello() {
	fmt.Println("hello")
	return
}

// 複数の戻り値
func div(a, b int) (int, int) {
	q := a / b
	r := a % b
	return q, r
}
q, r = div(10, 3) // => (3, 1)
q, _ = div(10, 3) // 戻り値の破棄
_, r = div(10, 3) // 戻り値の破棄
