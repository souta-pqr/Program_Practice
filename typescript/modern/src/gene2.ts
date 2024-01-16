function map(array: number[], callback: (element: number) => number): number[] {
    const result = [];
    for (const element of array) {
        result.push(callback(element));
    }
    return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];

const result = map(data, (x) => x * 10);
console.log(result) // [10, 10, 20, 30, 50, 80, 130]