const toLowerOrUpper = (str: string, upper?: boolean) => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(toLowerOrUpper("TypeScript", true))
console.log(toLowerOrUpper("TypeScript", false))