"use strict";
const d = new Date();
console.log(d);
const date = new Date("2020-02-03T15:00:00+09:00");
const timeNum = date.getTime();
console.log(timeNum);
const date2 = new Date(timeNum);
console.log(date2);
