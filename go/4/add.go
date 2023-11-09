package main

import (
	"fmt"
	"os"
	"strconv"
)

func add(x int, y int) int {
	return x + y
}

func main() {
	if len(os.Args) != 3 {
		fmt.Println("Usage: go run add.go <num1> <num2>")
		os.Exit(1)
	}

	num1, err1 := strconv.Atoi(os.Args[1])
	num2, err2 := strconv.Atoi(os.Args[2])

	if err1 != nil || err2 != nil {
		fmt.Println("Please provide two integers as arguments.")
		os.Exit(1)
	}

	fmt.Println(add(num1, num2))
}
