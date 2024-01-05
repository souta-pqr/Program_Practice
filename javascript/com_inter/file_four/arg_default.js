function formatMenu(food = "未入力", price = 0) {
    const res = `${food}は${price}円です`;
    return res;
}

console.log(formatMenu("ラーメン", 500));
console.log(formatMenu("カレー"));
console.log(formatMenu(undefined, 900));
console.log(formatMenu());