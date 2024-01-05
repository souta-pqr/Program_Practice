[11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
.map((x, i) => ({i: i, n: x}))
.filter(x => x.n % 2 === 0)
.forEach(x => console.log(`arr[${x.i}] = ${x.n}`));