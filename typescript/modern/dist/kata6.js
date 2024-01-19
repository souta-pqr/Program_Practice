"use strict";
function setAge1(human, age) {
    return { ...human, age };
}
const uhyo4 = {
    type: "human",
    name: "uhyo",
    age: 30n
};
const uhyo5 = setAge1(uhyo4, 31n);
console.log(uhyo5);
