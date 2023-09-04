// 無名関数
f := func(x, y int) int { return x + y }
f(1, 2) // => 3

// 名前付関数と無名関数
func plus(x, y int) int {
	return x + y
}
var plusAlias = plus
plusAlias(10, 4) // => 14

// 関数を返す関数
func returnFunc() func() {
	return func() {
		fmt.Println("I'm a function")
	}
}
f := returnFunc()
f() // => I'm a function
returnFunc() // => I'm a function

// 関数を引数に取る関数
func callFunction(func() {
	fmt.Println("I'm a function")
}) // => I'm a function