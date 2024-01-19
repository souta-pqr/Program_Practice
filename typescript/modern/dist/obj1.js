"use strict";
function useToString1(value) {
    console.log(`value is ${value.toString()}`);
}
useToString1({
    toString() {
        return "Hello World";
    }
});
useToString1(3.14);
