function formatNumberOrString(value: string | number) {
    if (typeof value === "number") {
        return value.toFixed(3);
    } else {
        return value;
    }
}

console.log(formatNumberOrString(0.1));
console.log(formatNumberOrString("TypeScript"));