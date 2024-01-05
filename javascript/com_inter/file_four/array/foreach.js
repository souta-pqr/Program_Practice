const arr = [1, 2,,,,,3];
let cnt = 0;

arr.forEach((x, i) => {
    console.log(`arr[${i}] = ${x}`);
    cnt++;
    });

console.log(`${arr.length}, ${cnt}`); // 3