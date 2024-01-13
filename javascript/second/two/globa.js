// parseInt()は文字列を整数に変換します
let str1 = "123";
let num1 = parseInt(str1);
console.log(num1); // 出力: 123

// parseFloat()は文字列を浮動小数点数に変換します
let str2 = "123.456";
let num2 = parseFloat(str2);
console.log(num2); // 出力: 123.456

// isNaN()は値がNaN（Not a Number）であるかどうかをチェックします
let str3 = "abc";
let num3 = parseInt(str3);
console.log(isNaN(num3)); // 出力: true

// isFinite()は値が有限数であるかどうかをチェックします
let num4 = 1/0;
console.log(isFinite(num4)); // 出力: false

// encodeURI()はURIをエンコードします
let uri = "https://ja.wikipedia.org/wiki/メインページ";
let encodedURI = encodeURI(uri);
console.log(encodedURI); // 出力: https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8
