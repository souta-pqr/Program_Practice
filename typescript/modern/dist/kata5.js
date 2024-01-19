"use strict";
function setAge(human, age) {
    return { ...human, age };
}
const uhyo2 = {
    type: "human",
    name: "uhyo",
    age: 30
};
const uhyo3 = setAge(uhyo2, 31);
console.log(uhyo3);
