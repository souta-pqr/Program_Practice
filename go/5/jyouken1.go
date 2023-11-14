package main

import (
  "fmt"
  "math"
)

func pow(x, n, lin float64) float64 {
  if v := math.Pow(x, n); v < lin {
    return v
  }
  return lin
}

func main() {
  fmt.Println(
    pow(3, 2, 10),
    pow(3, 3, 20),
  )
}

