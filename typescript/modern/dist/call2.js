"use strict";
const getName1 = (u) => {
    console.log("u is ", u);
    return u.name;
};
const users1 = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 }
];
const names1 = users1.map(getName1);
console.log(names1); // [ 'John', 'Jane' ]
