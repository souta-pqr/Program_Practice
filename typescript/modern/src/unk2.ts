// function doNothing1(val: unknown) {
//     const name = val.name;
//     console.log(name);
// }

function useUnknown(val: unknown) {
    if (typeof val === "string") {
        console.log("valは文字列です");
        console.log(val.slice(0, 5));
    } else {
        console.log("valはstring型ではありません");
        console.log(val);
    }
}

useUnknown("hello, world");
useUnknown(null);