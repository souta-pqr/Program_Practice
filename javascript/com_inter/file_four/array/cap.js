const re = /(ぞく|どき|わく)\1/g;

const s = 'どきどきわくわくを提供します。';
console.log(s.match(re));