"use strict";
function useNever(value) {
    const num = value;
    const str = value;
    const obj = value;
    console.log(`value is ${value}`);
}
// useNever(3.14); // Error: Argument of type '3.14' is not assignable to parameter of type 'never'.
// useNever("Hello World"); // Error: Argument of type '"Hello World"' is not assignable to parameter of type 'never'.
