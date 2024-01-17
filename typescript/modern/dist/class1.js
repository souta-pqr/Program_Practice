"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_age;
class User {
    constructor(name, age) {
        _User_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User_age, "f") >= 20;
    }
}
_User_age = new WeakMap();
class PremiumUser extends User {
    constructor() {
        super(...arguments);
        this.rank = 1;
    }
}
function getMessage(u) {
    return `こんにちは ${u.name} さん`;
}
const uhyo = new PremiumUser("uhyo", 30);
console.log(uhyo.rank);
console.log(uhyo.name);
console.log(uhyo.isAdult());
const john = new User("John", 10);
const uhyo1 = new PremiumUser('uhyo1', 32);
console.log(getMessage(john));
console.log(getMessage(uhyo1));
