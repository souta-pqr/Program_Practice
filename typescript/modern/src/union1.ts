type Animal = {
    species: string;
};
type Human = {
    name: string;
}

type User1 = Animal | Human;

const tama: User1 = {
    species: "Felis silvestris catus"
}

const uhyo: User1 = {
    name: "uhyo"
}