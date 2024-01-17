class User2<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }
    
    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

const uhyo1 = new User2<string>("uhyo", 3, "example");
const data = uhyo1.data;

const john = new User2("John", 30, {hobby: "game"});
const hobby = john.data.hobby;

console.log(uhyo1.isAdult());
console.log(john.isAdult());
console.log(data);