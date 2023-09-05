var s1 []int

s2 := make([]int, 3)
s2[0] = 5
fmt.Println(s2) // => [5 0 0]

s3 := []int{1, 2, 3, 4, 5}
s4 := s3[0:2]       // => [1, 2]
s5 := s3[len(s3)-2] // => 4