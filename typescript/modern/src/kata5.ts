type Human2 = {
    type: "human";
    name: string;
    age: number;
}

function setAge(human: Human2, age: Human2["age"]) {
    return { ...human, age };
}

const uhyo2: Human2 = {
    type: "human",
    name: "uhyo",
    age: 30
};

const uhyo3 = setAge(uhyo2, 31);
console.log(uhyo3);