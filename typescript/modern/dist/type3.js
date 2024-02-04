"use strict";
const arr1 = [false, true];
const arr2 = [
    { name: "山田さん" },
    { name: "鈴木さん" },
    { name: "佐藤さん" }
];
console.log(arr1);
console.log(arr2);
const arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3);
const arr4 = ["a", "b", "c"];
arr4.push("d");
console.log(arr4);
let tuple = ["a", 1, true];
tuple = ["b", 2, false];
const [a, b, c] = tuple;
console.log(a);
console.log(b);
const u1 = ["uhyo", 26];
console.log(u1[1]);
