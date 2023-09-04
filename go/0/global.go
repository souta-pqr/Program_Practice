import "github.com/aws/aws-lambda-go/lambda"

var glbMap map[int]int

func handler() {

}

func main() {
	glbMap = map[int]int{
		1: 2,
		2: 4,
		3: 6,
	}
	lambda.Start(handler)
}