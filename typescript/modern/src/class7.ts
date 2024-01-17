class User {
    name: string = "";
    age: number = 0;
}

const uhyo = new User();
console.log(uhyo instanceof User);
console.log({} instanceof User);

const john2: User = {
    name: "John",
    age: 16,
};
console.log(john2 instanceof User);