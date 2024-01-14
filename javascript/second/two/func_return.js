function decorationMenu1(food) {
    return
        `I want to eat ${food}!;`
}

function decorationMenu2(food) {
    return 'I want '
        + food
        + '!';
};

const res1 = decorationMenu1('pizza');
const res2 = decorationMenu2('pizza');

console.log(res1);
console.log(res2);