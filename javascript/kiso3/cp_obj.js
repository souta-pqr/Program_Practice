const shallowclone = (obj) => {
  return Object.assign({}, obj);
};
const obj = { a: "a" };
const cloneObj = shallowclone(obj);
console.log(cloneObj);
console.log(obj === cloneObj);
console.log(typeof obj);
console.log(typeof cloneObj);
