type PriceData = {
    [key: string]: number;
};
const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 1339
}

data.apple = 300;

console.log(data.apple);
