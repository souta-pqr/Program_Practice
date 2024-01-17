class User3 {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo2 = new User3();

const john1: User3 = {
    name: "John",
    age: 15,
    isAdult: () => true
}

console.log(john1.isAdult());