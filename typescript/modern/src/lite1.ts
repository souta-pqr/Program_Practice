type FooString = "foo";

const foo: FooString = "foo";
const bar: FooString = "foo"; // OK

// const bar: FooString = "bar"; // Error: Type '"bar"' is not assignable to type '"foo"'.