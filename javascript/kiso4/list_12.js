const array = [1, 2, 3];
const totalValue = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);

console.log(totalValue);
