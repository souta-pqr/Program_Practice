"use strict";
async function fail() {
    throw new Error("Oh my god!");
}
const p2 = fail();
p2.catch(err => {
    console.log("エラーが発生しました", err);
});
