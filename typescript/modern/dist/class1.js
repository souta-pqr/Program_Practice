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
var _User_name, _User_age;
class EmptyNameError extends Error {
}
class User {
    constructor(name, age) {
        _User_name.set(this, void 0);
        _User_age.set(this, void 0);
        if (name === "") {
            throw new EmptyNameError("名前が空です．");
        }
        __classPrivateFieldSet(this, _User_name, name, "f");
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
    getMessage(str) {
        return `${__classPrivateFieldGet(this, _User_name, "f")} (${__classPrivateFieldGet(this, _User_age, "f")})「${str}」`;
    }
}
_User_name = new WeakMap(), _User_age = new WeakMap();
const user = new User("Uhyo", 26);
console.log(user.getMessage("こんにちは"));
