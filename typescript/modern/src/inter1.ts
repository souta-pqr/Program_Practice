type Animal2 = {
    species: string;
    age: number;
}

type Human2 = Animal2 & {
    name: string;
}

const tama: Animal2 = {
    species: "Felis silvestris catus",
    age: 3
};
const uhyo2: Human2 = {
    species: "Homo sapiens sapiens",
    age: 26,
    name: "uhyo"
};