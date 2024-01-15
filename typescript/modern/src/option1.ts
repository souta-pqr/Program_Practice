type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
}

const obj: MyObj = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

console.log(obj.baz);
console.log(obj2.baz);

if (obj2.baz !== undefined) {
    console.log(obj2.baz * 100);
}