type Human = {
    type: "Human";
    name: string;
    age: number;
}

function isHuman(value: any): value is Human {
    if (value === null) return false;
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    );
}

console.log(isHuman({
    type: "Human",
    name: "Rui",
    age: 30
    }));