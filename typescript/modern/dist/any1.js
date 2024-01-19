"use strict";
function doWhatever(obj) {
    console.log(obj.user.name);
    obj();
    const result = obj + 1;
    return result;
}
