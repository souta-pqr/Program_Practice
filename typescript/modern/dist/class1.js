"use strict";
class User2 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const uhyo = new User2();
console.log(uhyo.name); // ""
console.log(uhyo.age); // 0
uhyo.name = "uhyo";
console.log(uhyo.name); // "uhyo"
