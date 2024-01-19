"use strict";
function isSome(obj) {
    return obj.tag === 'Some';
}
function logNumber(obj) {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}
function MapOption(obj, func) {
    if (isSome(obj)) {
        return { tag: 'Some', value: func(obj.value) };
    }
    else {
        return { tag: 'None' };
    }
}
function doubleOption(obj) {
    return MapOption(obj, x => x * 2);
}
// Example usage
const someNumber = { tag: 'Some', value: 42 };
const noNumber = { tag: 'None' };
logNumber(someNumber); // Output: 42
logNumber(noNumber); // No output
console.log(doubleOption(someNumber)); // Output: { tag: 'Some', value: 84 }
console.log(doubleOption(noNumber)); // Output: { tag: 'None' }
