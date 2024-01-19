"use strict";
function isStringOrNumber(value) {
    return typeof value === "string" || typeof value === "number";
}
const something = 123;
if (isStringOrNumber(something)) {
    console.log(something.toString());
}
