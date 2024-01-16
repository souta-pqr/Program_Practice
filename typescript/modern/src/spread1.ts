const sum2 = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

const nums = [1, 2, 3, 4, 5];
console.log(sum2(...nums));