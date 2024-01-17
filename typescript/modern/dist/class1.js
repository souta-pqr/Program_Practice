"use strict";
class User {
    constructor() {
        this.name = '';
        this.age = 0;
    }
}
const uhyo = new User();
console.log(uhyo.name);
console.log(uhyo.age);
uhyo.age = 26;
console.log(uhyo.age);
