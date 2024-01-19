type Fruit = "apple" | "orange" | "strawberry";

type FruitNumbers = {
    [P in Fruit]: number
};

const numbers: FruitNumbers = {
    apple: 5,
    orange: 10,
    strawberry: 7
};