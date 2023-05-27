function add(x, y) {
	return x + y;
}

console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));
