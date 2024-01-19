"use strict";
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
function numberWithSign(num, type) {
    if (type === "none") {
        return 0;
    }
    else {
        return num * signNumber(type);
    }
}
console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));
