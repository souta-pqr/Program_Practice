function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(3, 9)); // [3, 4, 5, 6, 7, 8, 9]s