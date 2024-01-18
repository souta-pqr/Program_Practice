"use strict";
try {
    throwNull();
}
catch (err) {
    console.log(err, "が発生しました");
}
function throwNull() {
    throw null;
}
