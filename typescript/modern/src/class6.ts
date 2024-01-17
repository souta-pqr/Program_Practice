class User6 {
    static adminName: string = "uhyo";
    static getAdminUser() {
        return new User6(User6.adminName, 26);
    }

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

console.log(User6.adminName);
const admin = User6.getAdminUser();
console.log(admin.age);
console.log(admin.name);

const nick = new User6("nick", 26);
console.log(nick.isAdult());