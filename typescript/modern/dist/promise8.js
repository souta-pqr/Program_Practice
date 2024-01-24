"use strict";
import("fs/promises")
    .then(({ readFile }) => readFile("foo.txt", "utf8"))
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log("エラーが発生しました", error);
});
