"use strict";
function thrower() {
    throw new Error("This function never returns");
}
const result = thrower();
const str = result;
console.log(str);
