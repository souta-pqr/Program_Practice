type HasName = {
    name: string;
}
type HasNameAndAge = {
    name: string;
    age: number;
}

const fromAge = (age: number): HasNameAndAge => ({
    name: "john Smith",
    age,
});

const f: (age: number) => HasName = fromAge;
const obj2: HasName = f(100);

console.log(obj2.name);