const mySet = new Set();
mySet.add('コーヒー');
mySet.add('紅茶');
mySet.add('ケーキ');

console.log('サイズ: ' + mySet.size);

mySet.forEach(function(value1, value2) {
    console.log('forEach: ', value1, value2);
});