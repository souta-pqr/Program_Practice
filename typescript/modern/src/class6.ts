class User5 {
    name: string = "";
    age: number = 0;
}

type MyUserConstructor = new () => User5;

const Myuser: MyUserConstructor = User5;
const u = new Myuser();
console.log(u.name, u.age);