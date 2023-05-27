"use strict";
function fn1() {
	return this;
}
const fn2 = function() {
	return this;
}

console.log(fn1());
console.log(fn2());
