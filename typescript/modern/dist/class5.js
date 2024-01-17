"use strict";
class User5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    iidAdult() {
        return this.age >= 20;
    }
}
const uhyo5 = new User5('uhyo', 26);
console.log(uhyo5.iidAdult());
console.log(uhyo5.name);
