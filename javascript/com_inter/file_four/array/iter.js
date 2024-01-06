const arr = ['コーヒー', '紅茶', 'ほうじ茶', '緑茶'];

const iterator = arr.keys();

for (const key of iterator) {
    console.log(key); // 0, 1, 2, 3
}

const arr2 = ['コーヒー', '紅茶', 'ほうじ茶', '緑茶'];

const iterator2 = arr2.values();

for (const value of iterator2) {
    console.log(value); // 'コーヒー', '紅茶', 'ほうじ茶', '緑茶'
}

const arr3 = ['コーヒー', '紅茶', 'ほうじ茶', '緑茶'];

const iterator3 = arr3.entries();

for (const entry of iterator3) {
    console.log(entry); // [0, 'コーヒー'], [1, '紅茶'], [2, 'ほうじ茶'], [3, '緑茶']
}