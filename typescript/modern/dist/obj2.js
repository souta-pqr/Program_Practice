"use strict";
function isPropertyAccessible(value) {
    return value != null;
}
function isHuman(value) {
    if (!isPropertyAccessible(value))
        return false;
    return value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number";
}
