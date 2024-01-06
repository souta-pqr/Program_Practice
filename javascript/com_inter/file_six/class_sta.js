class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static calcTax(price, taxPer) {
        const res = Math.trunc(price * (100 + taxPer) / 100);

        return res;
    }
}

console.log(Menu.calcTax(100, 10));
console.log(Menu.calcTax(200, 8));
const cake1 = new Menu('Cake1', 100);
// console.log(cake1.calcTax(100, 10));