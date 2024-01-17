class User2 {
    name?: string;
    age: number = 0;
}

const uhyo2 = new User2();
console.log(uhyo2.name);
uhyo2.name = "uhyo";
console.log(uhyo2.name);

class User3 {
    readonly name: string = "";
    age: number = 0;
}

const uhyo3 = new User3();
// uhyo3.name = "uhyo"; // Error