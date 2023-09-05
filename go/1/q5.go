func sub() {
	for {
		fmt.Println("sub loop")
	}
}

func main() {
	go sub() // start goroutine
	for {
		fmt.Println("main loop")
	}
}