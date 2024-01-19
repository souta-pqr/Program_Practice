"use strict";
function getUserName1(user) {
    switch (user.tag) {
        case 'human':
            return user.name;
        case 'animal':
            return '名無し';
    }
}
const tama1 = {
    tag: "animal",
    species: "Felis silvestris catus"
};
const uhyo1 = {
    tag: "human",
    name: "uhyo"
};
console.log(getUserName1(uhyo1));
console.log(getUserName1(tama1));
