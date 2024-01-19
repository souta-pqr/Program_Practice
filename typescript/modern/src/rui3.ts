function assertHuman(value: any): asserts value is Human {
    if (value === null) {
        throw new Error("value is null");
    }
    if (
        value.type !== "Human" ||
        typeof value.name !== "string" ||
        typeof value.age !== "number"
    ) {
        throw new Error("value is not a Human");
    }
}