"use strict";
const users3 = [
    { name: "abc", age: 10 },
    { name: "xyz", age: 20 },
];
const adultUsers = users3.filter((u) => u.age >= 18);
const AllAdult = users3.every((u) => u.age >= 18);
const seniorExists = users3.some((u) => u.age >= 60);
const abc = users3.find((u) => u.name === "abc");
console.log(adultUsers);
console.log(AllAdult);
console.log(seniorExists);
console.log(abc);
