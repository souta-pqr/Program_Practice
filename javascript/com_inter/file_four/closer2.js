function countOrder(foodName) {
    let cnt = 0;

    function func () {
        cnt++;

        return `${foodName}を${cnt}つください。`;
    }

    return func;
}

const cntCoffee = countOrder('コーヒー');
const cntCake = countOrder('チーズケーキ');

console.log(cntCoffee());
console.log(cntCoffee());
console.log(cntCake());
console.log(cntCoffee());
console.log(cntCake());
console.log(cntCake());
console.log(cntCake());
