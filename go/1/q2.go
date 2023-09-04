x := 5
if x == 1 {
	fmt.Println("x is 1")
}

if x == 0 {
	fmt.Println("x is 0")
}
else if x > 0 {
	fmt.Println("x is positive")
}
else {
	fmt.Println("x is negative")
}

if x, y := 1, 2; x < y {
	fmt.Println("x is less than y")
}
