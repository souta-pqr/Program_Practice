"use strict";
function fromKey(key) {
    return key.slice(2);
}
const user = fromKey("user:uhyo");
console.log(user);
