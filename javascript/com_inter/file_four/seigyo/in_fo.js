const item = {name: "ホットコーヒー", price: 300, size: "M"};

for (let key in item) {
    console.log(`${key}: ${item[key]}`);
}