const array = ["A", "B", "C"];
const newArray = array.concat(["D", "E"]);
console.log(newArray);

const newArray_1 = ["X", "Y", "Z", ...array];
console.log(newArray_1);
