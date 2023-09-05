type  error interface {
	Error() string
}

type MyError struct {
	msg string
	ErrCode int
}

func (e *MyError) Error() string {
	return e.msg
}

func (e *MyError) ErrorCode() int {
	return e.ErrCode
}

func RaiseError error {
	return MyError{msg: "error", ErrCode: 1}
}

err :+ RaiseError()
err.Error() // => error