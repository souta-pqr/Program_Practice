package main

import (
	"fmt"
	"os"
	"strconv"
)

func add(numbers []int) int {
	sum := 0
	for _, num := range numbers {
		sum += num
	}
	return sum
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run add.go <num1> <num2> ...")
		os.Exit(1)
	}

	numbers := make([]int, len(os.Args)-1)
	for i, arg := range os.Args[1:] {
		num, err := strconv.Atoi(arg)
		if err != nil {
			fmt.Printf("Invalid number: %s\n", arg)
			os.Exit(1)
		}
		numbers[i] = num
	}

	fmt.Println(add(numbers))
}
