var ip *int //ポインタ型
var fp *float64
var ap *[3]string

var i int // 値型(int型)
p := &i   // ポインタ型
i = 5
fmt.Println("%T\n", p) // => *int
fmt.Println(*p)        // => 5

a := &[3]int{1, 2, 3}
p := &a
a[1] // => 2