"use strict";
const r = /ab+c/;
console.log(r.test("abbc"));
console.log(r.test("Hello, world!"));
const r1 = /^abc/;
console.log(r1.test("abcdef"));
console.log(r1.test("defabc"));
