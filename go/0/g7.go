switch x.(type) {
case bool:
	fmt.println("bool")
case int, uint:
	fmt.println("int or uint")
default:
	fmt.println("unknown type")
}