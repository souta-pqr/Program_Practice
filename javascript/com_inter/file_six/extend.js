class Menu {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    getInf() {
        const t = `Name: ${this.name}, Price: ${this.price}`;
        
        return t;
    }
}

class DrinkMenu extends Menu {
    constructor (name, price, size) {
        super(name, price);

        this.size = null;
        if(size === 'S' || size === 'M' || size === 'L') {
            this.size = size;
        }
    }

    getInf() {
        const superT = super.getInf();

        const t = `${superT}, Size: ${this.size}`;
        return t;
    }

    getsizeNum() {

        if(this.size === 'S') {
            return 1;
        } else if(this.size === 'M') {
            return 2;
        } else if(this.size === 'L') {
            return 3;
        } else {
            return 0;
        }
    }
}

const cake = new Menu('Cake', 100);
const drink = new DrinkMenu('Drink', 200, 'S');

console.log(cake.getInf());

console.log(drink.getInf());
console.log(`量は${drink.getsizeNum()}`);