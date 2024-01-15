class MyIterator {
    private values: number[];
    private index: number;

    constructor(values: number[]) {
        this.values = values;
        this.index = 0;
    }

    next(): IteratorResult<number> {
        if (this.index < this.values.length) {
            return {
                done: false,
                value: this.values[this.index++]
            };
        } else {
            return {
                done: true,
                value: null
            };
        }
    }
}

let it = new MyIterator([1, 2, 3, 4, 5]);
let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}
