const map: Map<string, number> = new Map();
map.set("foo", 123);
// map.set("zoo",);

console.log(map.get("foo"));
console.log(map.get("bar"));

console.log(map);