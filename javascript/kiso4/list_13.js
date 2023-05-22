const array = [1, 2, 3];
function sum(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}
console.log(sum(array));
