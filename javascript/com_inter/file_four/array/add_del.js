const arr = [20, 21, 22]
console.log('元の配列');
console.log('  ', arr);

arr.push(30, 31, 32);
console.log('末尾に追加した後の配列');
console.log('  ', arr);

arr.unshift(10, 11, 12);
console.log('先頭に追加した後の配列');
console.log('  ', arr);

const popped = arr.pop();
console.log('末尾を取り出した後の配列');
console.log('  ', arr);
console.log('  ', popped);

const head = arr.shift();
console.log('先頭を取り出した後の配列');
console.log('  ', arr);
console.log('  ', head);