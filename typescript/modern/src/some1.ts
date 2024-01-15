type UserId = string;
const id: UserId = 'uhyo';

console.log(id);

type FooObj = { foo: number };
type MyObj = FooObj;

const obj9: MyObj = { foo: 123 };

console.log(obj9.foo);