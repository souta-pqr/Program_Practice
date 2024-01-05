const obj = {menuA: "コーヒー", menuB: "紅茶", menuC: "ココア"};

const {menuA = "ほうじ茶", menuD = "緑茶"} = obj;

console.log(menuA, menuD);

obj.menuA = "ほうじ茶";
obj.menuD = "緑茶";

console.log(obj.menuA, obj.menuD);