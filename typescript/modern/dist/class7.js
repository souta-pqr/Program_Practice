"use strict";
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const uhyo = new User();
console.log(uhyo instanceof User);
console.log({} instanceof User);
const john2 = {
    name: "John",
    age: 16,
};
console.log(john2 instanceof User);
