class User2 {
    name: string = "";
    age: number = 0;
}

const uhyo = new User2();
console.log(uhyo.name); // ""
console.log(uhyo.age); // 0

uhyo.name = "uhyo";
console.log(uhyo.name); // "uhyo"