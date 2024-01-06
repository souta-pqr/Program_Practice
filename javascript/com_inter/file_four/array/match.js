const re = /<.+?>/;

const str1 = 'メニュー<span class="strong"></span>';
console.log(str1.match(re));

const str2 = 'メニュー : コーヒー';
console.log(str2.match(re));

const re1 = /<.+?>/g;

const str3 = 'メニュー<span class="strong"></span>';
console.log(str3.match(re1));

const str4 = 'メニュー : コーヒー';
console.log(str4.match(re1));