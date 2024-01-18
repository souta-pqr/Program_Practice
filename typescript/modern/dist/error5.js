"use strict";
console.log(sum(100));
function sum(max) {
    try {
        let result = 0;
        for (let i = 1; i <= max; i++) {
            result += i;
        }
        return result;
    }
    finally {
        console.log("計算終了");
    }
}
