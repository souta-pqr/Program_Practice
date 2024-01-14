const item = {name: 'ホットコーヒー', price: 450, countDay: 8};

for (const propName in item) {
    console.log(`${propName} : ${item[propName]}`);
}