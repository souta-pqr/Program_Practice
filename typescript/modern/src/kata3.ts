function range5(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

const arr = range5(1, 10);
for (const value of arr) console.log(value);