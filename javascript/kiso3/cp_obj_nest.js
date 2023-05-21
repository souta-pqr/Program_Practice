const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj = {
  level: 1,
  nest: {
    level: 2
  },
};
const cloneObj = shallowClone(obj);
console.log(cloneObj.nest === obj.nest);
