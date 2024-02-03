"use strict";
const foo1 = { obj: { num: 1234 } };
const bar1 = { ...foo1 };
bar1.obj.num = 0;
console.log(foo1.obj.num);
