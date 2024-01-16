const toLowerOrUpper1 = (str: string, upper: boolean = false): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
    return str.toLowerCase();
    }
}

console.log(toLowerOrUpper1("TypeScript", true))
console.log(toLowerOrUpper1("TypeScript", false))
console.log(toLowerOrUpper1("TypeScript"))