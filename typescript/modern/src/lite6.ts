function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus")); // 1
console.log(signNumber("minus")); // -1
// console.log(signNumber("a")); // Error: Argument of type '"a"' is not assignable to parameter of type '"plus" | "minus"'.