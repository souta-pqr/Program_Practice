class MyClass {
}
const myClass = new MyClass();
const myClassAnother = new MyClass();
console.log(myClass === myClassAnother);
console.log(myClass instanceof MyClass);
console.log(myClassAnother instanceof MyClass);
