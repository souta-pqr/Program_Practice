type Obj2 = { foo3?: number };
const obj3: Obj2 = {};
const { foo3 = 500 } = obj3;