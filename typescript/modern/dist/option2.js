"use strict";
const toLowerOrUpper1 = (str, upper = false) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper1("TypeScript", true));
console.log(toLowerOrUpper1("TypeScript", false));
console.log(toLowerOrUpper1("TypeScript"));
