"use strict";
const getName1 = (u) => {
    console.log("u is", u);
    return u.name;
};
const users1 = [
    { name: "abc", age: 10 },
    { name: "xyz", age: 20 },
];
const names1 = users1.map(getName1);
console.log("names1", names1);
