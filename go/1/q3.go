for {
	fmt.Println("infinite loop")
}

i := 0
for {
	i++
	if i == 100 {
		break
	}
}
 // 条件付きfor
i : = 0
for i < 100 {
	fmt.Println(i)
	i++
}

// 古典的for
for i := 0; i < 100; i++ {
	fmt.Println(i)
	i++
}

// 次のループにスキップするためのcontinue
for i := 0; i < 100; i++ {
	if i%2 == 0 {
		continue
	}
	fmt.Println(i)
	i++
}

fruits := [3]string{"apple", "banana", "orange"}
for i, fruit := range fruits {
	fmt.Println(i, fruit)
}

LOOP:
	for {
		for {
			for {
				fmt.Println("start")
				break LOOP
			}
		}
	}
	fmt.Println("end")
	