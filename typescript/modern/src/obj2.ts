type Human = {
    type: "Human";
    name: string;
    age: number;
}

function isPropertyAccessible(value: unknown): value is { [key: string]: unknown } {
    return value != null;
}

function isHuman(value: unknown): value is Human {
    if (!isPropertyAccessible(value)) return false;
    return value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number";
}