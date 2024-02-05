type HasName = {
    name: string;
}
type HasNameAndAge = {
    name: string;
    age: number;
}

const fromAge = (age: number): HasNameAndAge => ({
    name: 'John',
    age
});

const f: (age: number) => HasName = fromAge;
const obj2: HasName = f(25);