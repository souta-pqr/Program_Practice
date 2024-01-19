function getFirstFiveLetters(strOrNum: string | number) {
    const str = strOrNum as string;
    return str.slice(0, 5);
}

console.log(getFirstFiveLetters('1234567890')); // 12345

// console.log(getFirstFiveLetters(1234567890)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.