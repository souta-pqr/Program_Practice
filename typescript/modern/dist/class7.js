"use strict";
class User7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
const uhyo7 = new User7("uhyo", 26);
console.log(uhyo7.name);
console.log(uhyo7.isAdult());
// console.log(uhyo7.age);
