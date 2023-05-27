"use strict";
function say(message) {
	return `${message} ${this.fullName}!`;
}
const person = {
	fullName: "Breadan Dich"
};

console.log(say.call(person, "hello"));
