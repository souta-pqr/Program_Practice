class User4 {
    name?: string;
    age: number = 0;
}

const uhyo2 = new User4();
console.log(uhyo2.name); // undefined
uhyo2.name = "uhyo";
console.log(uhyo2.name); // "uhyo"