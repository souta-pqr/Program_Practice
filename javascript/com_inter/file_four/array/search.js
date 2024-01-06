const re = /(自動|電|馬)車/;

console.log('通勤は電車です．'.search(re));
console.log('通勤は自動車です．'.search(re));
console.log('通勤は馬車です．'.search(re));
console.log('通勤はバスです．'.search(re));