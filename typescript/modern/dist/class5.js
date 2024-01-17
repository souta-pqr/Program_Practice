"use strict";
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
class PremiumUser4 extends User3 {
    isAdult() {
        return this.age >= 10;
    }
}
const john2 = new PremiumUser4("John", 10);
const nick = new User3("Nick", 10);
console.log(john2.isAdult());
console.log(nick.isAdult());
