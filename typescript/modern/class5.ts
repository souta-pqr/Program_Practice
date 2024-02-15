class User6 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo4 = new User6("uhyo", 21);
console.log(uhyo4.isAdult()); // true
console.log(uhyo4.name); // "uhyo"