const names = ["uhyo", "John", "Taro"] as const;
type Name = (typeof names)[number];