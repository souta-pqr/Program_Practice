const arr = [
    { id: 1, name: 'コーヒー', price: 100 },
    { id: 2, name: '紅茶', price: 150 },
    { id: 3, name: 'ほうじ茶', price: 150 },
    { id: 4, name: '緑茶', price: 200 },
];

console.log(arr.every(v => v.price >= 100));
console.log(arr.every(v => v.price >= 150));

console.log(arr.some(v => v.price >= 100));
console.log(arr.some(v => v.price >= 150));