function say(message) {
	return `${message} ${this.fullName}!`;
}
const person = {
	fullName: "Brecdan Eich"
};

const sayPerson = say.bind(person, "hello");
console.log(sayPerson());
