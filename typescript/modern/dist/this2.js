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
var _User7_age;
class User7 {
    constructor(name, age) {
        _User7_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User7_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User7_age, "f") >= 20;
    }
    getAge() {
        return __classPrivateFieldGet(this, _User7_age, "f");
    }
    fillterOlder(users) {
        return users.filter(u => u.getAge() < __classPrivateFieldGet(this, _User7_age, "f"));
    }
}
_User7_age = new WeakMap();
const uhyo4 = new User7("uhyo", 30);
const john4 = new User7("John", 10);
const bob = new User7("Bob", 20);
const older = uhyo4.fillterOlder([john4, bob]);
console.log(older);
