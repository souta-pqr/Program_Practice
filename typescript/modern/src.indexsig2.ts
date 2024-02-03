type Myobj = { [key: string]: number };
const obj: Myobj = { foo: 123 };
const num: number = obj.bar;

console.log(num); // undefined

const propName: string = "foo";

const obj1 = {
    [propName]: 123
}

console.log(obj1.foo); // 123