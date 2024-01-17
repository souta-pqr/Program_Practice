class User10 {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

const user10 = new User10('John', 32);
console.log(user10.isAdult()); // true
console.log(user10.name); // John
// console.log(user10.#age); // Property '#age' is not accessible outside class 'User10' because it has a private identifier.ts(18013)