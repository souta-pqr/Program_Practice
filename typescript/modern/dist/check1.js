"use strict";
const num = 56;
if (!Number.isNaN(num)) {
    console.log('num is a number');
}
else {
    console.log('num is not a number');
}
const input1 = "123", input2 = "";
const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty);
const input2isNotisEmpty = !!input2;
console.log(input2isNotisEmpty);
