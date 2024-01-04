const obj = {menuA: "コーヒー", menuB: "紅茶", menuC: "ココア"};

const {menuA = "ほうじ茶", menuD = "緑茶"} = obj;

console.log(menuA, menuD);