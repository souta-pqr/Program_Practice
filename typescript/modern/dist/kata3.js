"use strict";
function getUserName(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
const tama = {
    tag: "animal",
    species: "Felis silvestris catus"
};
const uhyo = {
    tag: "human",
    name: "uhyo"
};
console.log(getUserName(tama));
console.log(getUserName(uhyo));
