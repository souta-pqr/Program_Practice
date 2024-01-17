class RepeatArray<T> extends Array<T> {
    repeat(times: number): RepeatArray<T> {
        const result = new RepeatArray<T>();
        for (let i = 0; i < times; i++) {
            result.push(...this);
        }
        return result;
    }
}

const arr = new RepeatArray<number>(1, 2, 3);
arr.push(4);
const repeated = arr.repeat(3);

console.log(repeated); // [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]