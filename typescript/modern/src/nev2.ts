function thrower(): never {
    throw new Error("This function never returns");
}

const result: never = thrower();

const str: string = result
console.log(str)