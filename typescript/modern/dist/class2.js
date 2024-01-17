"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _User1_age;
class User1 {
    constructor() {
        _User1_age.set(this, 0);
    }
    getAge() {
        return __classPrivateFieldGet(this, _User1_age, "f");
    }
    setAge(age) {
        if (age < 0 || age > 150) {
            return;
        }
        __classPrivateFieldSet(this, _User1_age, age, "f");
    }
}
_a = User1, _User1_age = new WeakMap();
(() => {
    _a.adminUser = new _a();
    __classPrivateFieldSet(_a.adminUser, _User1_age, 9999, "f");
})();
console.log(User1.adminUser.getAge());
