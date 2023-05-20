function isEven(num) {
  return num % 2 === 0;
}

function isEvenIncluded(numbers) {
  let isEvenIncluded = false;
  for (let i=0; i<numbers.length; i++) {
    const num = numbers[i];
    if (isEven(num)) {
      isEvenIncluded = true;
      break;
    }
  }
  return isEvenIncluded;
}
const array = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array));
