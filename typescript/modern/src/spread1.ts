const obj_spread1 = {
    foo: 123,
    bar: 456,
    baz: 789
};

const obj_spread2 = {
    ...obj_spread1,
    foo: 999
};

console.log(obj_spread2);