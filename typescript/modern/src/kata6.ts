type Human3 = {
    type: "human";
    name: string;
    age: bigint;
};

function setAge1(human: Human3, age: Human3["age"]) {
    return { ...human, age };
}

const uhyo4: Human3 = {
    type: "human",
    name: "uhyo",
    age: 30n
};

const uhyo5 = setAge1(uhyo4, 31n);
console.log(uhyo5);