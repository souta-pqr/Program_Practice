// Create a new symbol
const mySymbol = Symbol('mySymbol');

// Use the symbol as a property key
const obj = {
    [mySymbol]: 'Hello, symbol!'
};

// Access the property using the symbol
console.log(obj[mySymbol]); // Output: Hello, symbol!
