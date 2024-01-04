const arr = ["コーヒー", "紅茶", "ジュース", "ほうじ茶", "緑茶"];

const [a, , b, ...c] = arr;

console.log(a, b, c);