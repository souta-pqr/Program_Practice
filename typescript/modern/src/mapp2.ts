type Fruit2 = "apple" | "orange" | "strawberry";

type FruitNumbers2 = {
    [P in Fruit2]: P[]; // P[] は Fruit2[] と同じ
};

const numbers1: FruitNumbers2 = {
    apple: ["apple", "apple"],
    orange: ["orange"],
    strawberry: ["strawberry"]
};