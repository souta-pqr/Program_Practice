"use strict";
const getName = (u) => u.name;
const users = [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 24
    }
];
const names = users.map(getName);
console.log(names); // [ 'John', 'Jane' ]
