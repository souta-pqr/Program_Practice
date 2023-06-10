const sales = 'Toyota';

function carTypes(name) {
	return name === 'Honda' ? name : `Sorry, we don't sell ${name}.`;
}

const car = {myCar: 'Saturn', getCar: carTypes('Honma'), special: sales};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
