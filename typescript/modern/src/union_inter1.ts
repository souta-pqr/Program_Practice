type Human3 = { name: string };
type Animal3 = { species: string };
function getName(human: Human3) {
    return human.name;
}
function getSpecies(animal: Animal3) {
    return animal.species;
}

const MysteryFunc1 = Math.random() < 0.5 ? getName : getSpecies;

const uhyo4: Human3 & Animal3 = {
    name: "uhyo",
    species: "Homo sapiens sapiens"
};

const value = MysteryFunc1(uhyo4);
console.log(value);