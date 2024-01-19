"use strict";
function doNothing(val) {
    console.log(val);
}
doNothing(3);
doNothing({
    user: {
        name: "uhyo"
    }
});
doNothing(() => {
    console.log("hello");
});
