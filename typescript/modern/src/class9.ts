const User9 = class {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 18;
    }
};

const user9 = new User9('John', 32);
console.log(user9.isAdult()); // true
console.log(user9.name); // John