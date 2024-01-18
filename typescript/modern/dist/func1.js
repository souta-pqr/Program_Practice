"use strict";
function createUser(name, age) {
    return function (message) {
        return `${name} (${age})「${message}」`;
    };
}
const getMessage1 = createUser("Uhyo", 26);
console.log(getMessage1("こんにちは")); // Uhyo (26)「こんにちは」
