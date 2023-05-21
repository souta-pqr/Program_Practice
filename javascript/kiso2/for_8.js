const numbers = [5, 10];
let total = 0;
let total1 = 0;
const str = "吉野家";
for (const num in numbers) {
  total += num;
}
console.log(total);

for (const num of numbers) {
  total1 += num;
}
console.log(total1)

for (const value of str) {
  console.log(value);
}

for (const value in str) {
  console.log(value);
}
/*
inはインデックスを返し
ofが想像している挙動、要素を返す
*/
