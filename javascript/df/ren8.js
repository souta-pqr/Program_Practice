function greatThan(n) {
	return function(m) {
		return m > n;
	};
}

const greaterThan5 = greatThan(5);
console.log(greaterThan5(4));
console.log(greaterThan5(5));
console.log(greaterThan5(6));
