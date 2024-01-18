type Animal = {
    species: string;
    age: string;
};
type Human = {
    name: string;
    age: number;
}

type User = Human | Animal;

const tama: User = {
    species: "Felis silvestris catus",
    age: "永遠の17歳"
}

const uhyo: User = {
    name: "uhyo",
    age: 26
}

function showAge(user: User) {
    const age = user.age;
    console.log(age);
}