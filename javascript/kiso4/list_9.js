function removeAtIndex(array, index) {
  const copiedArray = array.slice();
  copiedArray.splice(index, 1);
  return copiedArray;
}
const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);

