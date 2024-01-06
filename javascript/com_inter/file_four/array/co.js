const s = 'abあい😊(T_T)';

const a1 = s.charCodeAt(0); // 97
const a2 = s.charCodeAt(1); // 98
const a3 = s.charCodeAt(2); // 12354
const a4 = s.charCodeAt(3); // 12356
const a5 = s.charCodeAt(4); // 128522
console.log(a1, a2, a3, a4, a5);

const b1 = s.codePointAt(0); // 97
const b2 = s.codePointAt(1); // 98
const b3 = s.codePointAt(2); // 12354
const b4 = s.codePointAt(3); // 12356
console.log(b1, b2, b3);

console.log(
    String.fromCharCode(a1),
    String.fromCharCode(a2),
    String.fromCharCode(a3),
    String.fromCharCode(a4),
    String.fromCharCode(a3, a4)
);

console.log(
    String.fromCodePoint(b1),
    String.fromCodePoint(b2),
    String.fromCodePoint(b3),
    String.fromCodePoint(b3, b4)
);

console.log(s.split(''));
console.log([...s]);