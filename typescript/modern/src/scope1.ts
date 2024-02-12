const repeatLength = 5;
const repeat1 = function<T>(element: T): T[] {
    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
        result.push(element);
    }
    return result;
}

console.log(repeat1<number>(1));