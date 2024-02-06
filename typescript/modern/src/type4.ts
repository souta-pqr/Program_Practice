function repeat<T>(element: T, lenght: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

console.log(repeat<string>('a', 5));
console.log(repeat<number>(1, 5));