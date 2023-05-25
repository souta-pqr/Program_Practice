const str = "ABCDE";
//sliceメソッドが従来使われてきた標準的なもの
console.log(str.slice(1));
//substringメソッドは少し特殊
console.log(str.substring(-1));
//console.log(str.slice(-1)); -> E
