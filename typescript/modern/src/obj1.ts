const user = {
    name: "john",
    age: 20
}

const obj1 = {
    "foo": 123,
    "foo bar": -500
}

const obj2 = {
    1: "one",
    2.05: "two point 0 five"
}

console.log(obj1["foo"])
console.log(obj2[2.05])

const propName1 = "foo"
const obj3 = {
    [propName1]: 123
};

console.log(obj3.foo);