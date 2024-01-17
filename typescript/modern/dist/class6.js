"use strict";
class User6 {
    static getAdminUser() {
        return new User6(User6.adminName, 26);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
User6.adminName = "uhyo";
console.log(User6.adminName);
const admin = User6.getAdminUser();
console.log(admin.age);
console.log(admin.name);
const nick = new User6("nick", 26);
console.log(nick.isAdult());
