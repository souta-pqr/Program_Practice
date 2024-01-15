"use strict";
const obj9 = { arr: [1, 2, 3] };
const { arr: [foo4] } = obj9;
console.log(foo4); // Output: 1
const arr10 = [1, 2, 3, 4, 5, 10, 10];
const [, , , , , foo5, bar5] = arr10;
console.log(foo5); // Output: 10
console.log(bar5); // Output: 10
