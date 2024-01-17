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
var _User2_age;
class User2 {
    constructor(name, age) {
        _User2_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User2_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User2_age, "f") >= 20;
    }
}
_User2_age = new WeakMap();
const uhyo1 = new User2('uhyo', 25);
const john1 = new User2("john", 17);
const boundIsAdult = uhyo1.isAdult.bind(uhyo1);
console.log(boundIsAdult()); // true
console.log(boundIsAdult.call(john1));
