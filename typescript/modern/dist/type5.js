const repeat1 = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat1('a', 5));
const utils = {
    repeat(element, length) {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
};
const pair = (left, right) => [left, right];
const p = pair('uhyo', 26);
console.log(p);
export {};
