type FooBar = {
    foo: string;
    bar: number;
}
type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
}

const obj6: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false,
}

const obj7: FooBar = obj6;

type Animal = {
    age: number;
}

type Human = {
    age: number;
    name: string;
}

type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyname: string;
    mother: Human;
    father: Human;
    child: Human;
}