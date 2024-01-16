"use strict";
const toLowerOrUpper = (str, upper) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("TypeScript", true));
console.log(toLowerOrUpper("TypeScript", false));
