const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};

console.log(sum(1, 10, 100));
console.log(sum(123, 2323));
console.log(sum());