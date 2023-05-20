function fn(x) {
  return `最初の関数 x: ${x}`;
}
function fn(x, y) {
  return `最後の関数 x: ${x}, y: ${y}`;
}
console.log(fn(2, 10));
// 二つ表示されるわけではない
