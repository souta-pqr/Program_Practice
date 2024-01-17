"use strict";
class User4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._isAdult = age >= 20;
    }
    isAdult() {
        return this._isAdult;
    }
}
class PremiumUser5 extends User4 {
    setAge(newAge) {
        this.age = newAge;
    }
}
const john3 = new PremiumUser5("John", 20);
console.log(john3.isAdult());
john3.setAge(10);
console.log(john3.isAdult());
