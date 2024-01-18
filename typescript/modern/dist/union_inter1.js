"use strict";
function getName(human) {
    return human.name;
}
function getSpecies(animal) {
    return animal.species;
}
const MysteryFunc1 = Math.random() < 0.5 ? getName : getSpecies;
const uhyo4 = {
    name: "uhyo",
    species: "Homo sapiens sapiens"
};
const value = MysteryFunc1(uhyo4);
console.log(value);
