const obj = {
    value: 42,
    valueOf() {
        return this.value;
    }
};

console.log(obj.valueOf()); // Output: 42
