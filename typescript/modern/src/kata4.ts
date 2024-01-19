type Animal1 = {
    tag: "animal";
    species: string;
}
type Human1 = {
    tag: "human";
    name: string;
}
type User1 = Animal1 | Human1;

function getUserName1(user: User): string {
    switch (user.tag) {
        case 'human':
            return user.name;
        case 'animal':
            return '名無し';
    }
}

const tama1: User1 = {
    tag: "animal",
    species: "Felis silvestris catus"
};

const uhyo1: User1 = {
    tag: "human",
    name: "uhyo"
};

console.log(getUserName1(uhyo1));
console.log(getUserName1(tama1));