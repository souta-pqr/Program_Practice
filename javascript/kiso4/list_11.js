const array = [1, 2, 3];
const newArray = array.filter((currentValue, index, array) => {
  return currentValue % 2 === 1;
});
console.log(newArray);
console.log(array === newArray);
