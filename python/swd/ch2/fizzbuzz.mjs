import fs from "node:fs/promises";

const file = await fs.readFile("fizzbuzz.wasm");
const result = await WebAssembly.instantiate(file);
const { fizzbuzz } = result.instance.exports;

for (let i=1; i<=20; i++){
    const v = fizzbuzz(i);
    switch(v){
        case -1:
            console.log("Fizz"); break;
        case -2:
            console.log("Buzz"); break;
        case -3:
            console.log("FizzBuzz"); break;
        default:
            console.log(v); break;
    }
}
