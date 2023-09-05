type User struct {
	Id int
	Name string
}

func NewUser(id int, name string) *User {
	u := new(User)
	u.Id = id
	u.Name = name
	return u
}

user := NewUser(1, "Taro") // => &{1 Taro}