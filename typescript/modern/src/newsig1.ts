interface StringCreator {
    new (value?: any): String;
}

const createString: StringCreator = String;

const myString = new createString("Hello, world!");
console.log(myString.toString());  // "Hello, world!"
