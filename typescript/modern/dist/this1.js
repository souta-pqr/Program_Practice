"use strict";
const user6 = {
    name: "uhyo",
    age: 25,
    isAdult() {
        return this.age >= 20;
    }
};
console.log(user6.isAdult());
user6.age = 10;
console.log(user6.isAdult());
