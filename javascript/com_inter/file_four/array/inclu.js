const s = 'チョコレートケーキは美味しいです, でも、すごく高いです。';

console.log(' --- include --- ');
console.log(s.includes('チョコレート'));
console.log(s.includes('チョコレート', 1));

console.log(' --- startsWith --- ');
console.log(s.startsWith('チ'));
console.log(s.startsWith('チョコレート', 1));

console.log(' --- endsWith --- ');
console.log(s.endsWith('です。'));
console.log(s.endsWith('です。', 3));

console.log(' --- indexOf --- ');
console.log(s.indexOf('チョコレート'));
console.log(s.indexOf('ケーキ', 7));

console.log(' --- lastIndexOf --- ');
console.log(s.lastIndexOf('です。'));
console.log(s.lastIndexOf('です。', 10));