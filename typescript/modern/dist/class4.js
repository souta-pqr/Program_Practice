"use strict";
class User3 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    isAdult() {
        return this.age >= 20;
    }
}
const uhyo2 = new User3();
const john1 = {
    name: "John",
    age: 15,
    isAdult: () => true
};
console.log(john1.isAdult());
