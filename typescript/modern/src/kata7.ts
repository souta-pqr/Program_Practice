type Human4 = {
    name: string;
    age: number;
};

type HumanKeys = keyof Human4;

let key: HumanKeys = "name";
key = "age";
// key = "hoge" // Error: Type '"hoge"' is not assignable to type '"name" | "age"'.