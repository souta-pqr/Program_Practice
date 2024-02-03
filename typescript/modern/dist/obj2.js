"use strict";
const foo = { num: 1234 };
const bar = { ...foo };
console.log(bar.num);
bar.num = 0;
console.log(foo.num);
