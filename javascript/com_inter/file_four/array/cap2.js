const re = /^(.+?)( = )(.+?)$/g;

const s = 'a * b = b * a';

console.log(s.replace(re, '$3$2$1'));