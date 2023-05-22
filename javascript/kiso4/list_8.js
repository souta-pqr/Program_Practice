function removeAtIndex(array, index) {
  array.splice(index, 1);
  return array;
}
const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);
