const myMap = new Map();
myMap.set('coffee', 'コーヒー');
myMap.set('tea', '紅茶');
myMap.set('water', '水');

console.log('サイズ : ' + myMap.size);
console.log('tea : ' + myMap.get('tea'));

myMap.forEach(function(value, key) {
    console.log('forEach : ' + key + ' = ' + value);
});