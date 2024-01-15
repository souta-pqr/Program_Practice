type fooBar = {
    foo: string;
    bar: number;
};

type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
};

const obj5: FooBarBaz = {
    foo: "h1",
    bar: 1,
    baz: false
};

const obj6: fooBar = obj5;

console.log(obj6);