type Option<T> = { tag: 'Some', value: T } | { tag: 'None' };

function isSome<T>(obj: Option<T>): obj is { tag: 'Some', value: T } {
    return obj.tag === 'Some';
}

function logNumber(obj: Option<number>): void {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}

function MapOption<T, U>(obj: Option<T>, func: (x: T) => U): Option<U> {
    if (isSome(obj)) {
        return { tag: 'Some', value: func(obj.value) };
    } else {
        return { tag: 'None' };
    }
}

function doubleOption(obj: Option<number>) {
    return MapOption(obj, x => x * 2);
}

// Example usage
const someNumber: Option<number> = { tag: 'Some', value: 42 };
const noNumber: Option<number> = { tag: 'None' };

logNumber(someNumber); // Output: 42
logNumber(noNumber); // No output

console.log(doubleOption(someNumber)); // Output: { tag: 'Some', value: 84 }
console.log(doubleOption(noNumber)); // Output: { tag: 'None' }