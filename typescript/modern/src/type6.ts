const repeat2 = <T extends {
    name: string;
}>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}

type HasNameAndAge2 = {
    name: string;
    age: number;
}

console.log(repeat2<HasNameAndAge2>({
    name: 'uhyo',
    age: 26
}, 5));