class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInf() {
        const t = `Name: ${this.name}, Price: ${this.price}`;
        
        return t;
    }
}

const cake1 = new Menu('Cake1', 100);
const cake2 = new Menu('Cake2', 200);

console.log(cake1.name, cake1.price);
console.log(cake2.name, cake2.price);

console.log(cake1.getInf());
console.log(cake2.getInf());