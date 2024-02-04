const toLowerUpper = (str: string, upper?: boolean): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(toLowerUpper('Hello', true)); // HELLO