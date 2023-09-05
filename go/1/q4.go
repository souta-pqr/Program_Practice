n := 3
switch n {
case 1, 2:
	fmt.Println("1 or 2")
case 3, 4:
	fmt.Println("3 or 4")
default:
	fmt.Println("default")
}

// 簡易文の使用
switch n := 2; n {
case n > 0 && n < 3:
	fmt.Println("1 or 2")
default:
	fmt.Println("default")
}

