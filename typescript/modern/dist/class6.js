"use strict";
class User5 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const Myuser = User5;
const u = new Myuser();
console.log(u.name, u.age);
