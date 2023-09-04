var x interface{} = 3

i := x.(int)     // => ok
i := x.(float64) // => error: cannot use i (type int) as type float64 in assignment

i, isInt := x.(int)       // i == 3, isInt == true
f, isFloat := x.(float64) // f == 3.0, isFloat64 == false
