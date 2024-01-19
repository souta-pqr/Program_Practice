function useNever(value: never) {
    const num: number = value;
    const str: string = value;
    const obj: object = value;
    console.log(`value is ${value}`);
}

// useNever(3.14); // Error: Argument of type '3.14' is not assignable to parameter of type 'never'.
// useNever("Hello World"); // Error: Argument of type '"Hello World"' is not assignable to parameter of type 'never'.