class User7 {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo7 = new User7("uhyo", 26);
console.log(uhyo7.name);
console.log(uhyo7.isAdult());
// console.log(uhyo7.age);