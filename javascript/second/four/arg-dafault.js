function formatMenu(fooe = '未入力', price = 0) {
    const res = `${fooe}は${price}円です。`;
    return res;
}

console.log(formatMenu('ラーメン', 500));
console.log(formatMenu('カレー'));