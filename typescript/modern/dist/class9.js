"use strict";
const User9 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
};
const user9 = new User9('John', 32);
console.log(user9.isAdult()); // true
console.log(user9.name); // John
