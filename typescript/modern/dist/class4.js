"use strict";
class User4 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    isAdult() {
        return this.age >= 20;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
const uhyo4 = new User4();
const baby = new User4();
console.log(uhyo4.isAdult());
uhyo4.setAge(26);
console.log(uhyo4.isAdult());
console.log(baby.isAdult());
