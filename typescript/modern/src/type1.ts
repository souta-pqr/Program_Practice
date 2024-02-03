const obj4 = {
    foo: 123,
    bar: "hi"
}

type T = typeof obj4;

const obj5: T = {
    foo: 456,
    bar: "hello"
}