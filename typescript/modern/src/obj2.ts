type HasToString1 = {
    toString: () => string
}

function useToString2(value: HasToString & object) {
    console.log(`value is ${value.toString()}`);
}

useToString2({
    toString() {
        return "Hello World";
    }
})

console.log("Hello World".toString());
// useToString2(3.14); // Error: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'. Type 'number' is not assignable to type 'HasToString'.