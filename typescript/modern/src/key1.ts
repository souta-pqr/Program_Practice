const toLowerUpper = (str: string, upper: boolean = false): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(toLowerUpper('Hello', true)); // HELLO
console.log(toLowerUpper("hello", undefined)); // hello