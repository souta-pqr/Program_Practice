function signNumber1(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
}
function useNumber1(num: number) {
    return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

// signNumber(useNumber1(1)); // Error: Argument of type '"zero"' is not assignable to parameter of type '"plus" | "minus"'.

// useNumber("uhyo"); // Error: Argument of type '"uhyo"' is not assignable to parameter of type 'number'.