// ";"<-iranakutemotooru

var name = "Yamada" + "Taro";
console.log(name)

var x = 10
x = x + 5
console.log(x)

let fruit = ["orange", "apple", "grape"];
let orange = fruit[0];
console.log(orange);

console.log(fruit.length);

const lastIndex = fruit.length-1
const lastElement = fruit[lastIndex]
console.log(lastElement)

var person = {
name: "YamadaTaro",
age: 20,
gender: "male"
};
var name = person.name
console.log(name)

var person1 = {
name: "YamadaTaro",
age: 20,
gender: "male",
address: {
postcode: "101-0001",
pref: "Tokyo",
city: "tiyodaku"
	}
};

var postcode = person1.address.postcode;
console.log(postcode)

var person2 = {
name: "YamadaTaro",
age: 20,
gender: "male"
};
console.log(person2.age >= 20);

if(person2.age >= 20) {
	console.log("your age is over 20")
}

function add() {
	var a = 10;
	var b = 20;
	var result = a + b;
	console.log(result);
}

add();
