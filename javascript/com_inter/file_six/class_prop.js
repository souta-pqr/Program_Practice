class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static MIN_PRICE = 50;
    static MAX_PRICE = 200;
}

console.log(Menu.MIN_PRICE);
console.log(Menu.MAX_PRICE);