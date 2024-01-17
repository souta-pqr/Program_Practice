class User7 {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }

    public getAge(): number {
        return this.#age;
    }

    public fillterOlder(users: readonly User7[]): User7[] {
        return users.filter(u => u.getAge() > this.#age);
    }
}

const uhyo4 = new User7("uhyo", 30);
const john4 = new User7("John", 10);
const bob = new User7("Bob", 20);

const older = uhyo4.fillterOlder([john4, bob]);
console.log(older);
