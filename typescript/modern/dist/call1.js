"use strict";
const getName = (u) => u.name;
const users = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 20 },
    { name: 'Masahiro', age: 30 },
];
const names = users.map(getName);
console.log(names); // => ['Taro', 'Hanako', 'Masahiro']
