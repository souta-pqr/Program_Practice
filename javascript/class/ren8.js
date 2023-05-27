class ArrayWrapper {
    // new$B1i;;;R$G0z?t$,EO$5$l$?$J$+$C$?>l9g$N=i4|CM$O6uG[Ns(B
    constructor(array = []) {
        this.array = array;
    }

    // rest parameters$B$H$7$FMWAG$r<u$1$D$1$k(B
    static of(...items) {
        return new ArrayWrapper(items);
    }

    get length() {
        return this.array.length;
    }
}

// $BG[Ns$r0z?t$H$7$FEO$7$F$$$k(B
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// $BMWAG$r0z?t$H$7$FEO$7$F$$$k(B
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapperA.length); // => 3
console.log(arrayWrapperB.length); // => 3

