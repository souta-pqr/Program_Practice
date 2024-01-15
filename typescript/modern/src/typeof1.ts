const num: number = 0;

type T = typeof num;
const foo: T = 123

const obj3 = {
    foo: 123,
    bar: 'hi'
};

type U = typeof obj3;
const obj4: U = {
    foo: 393,
    bar: ''
};