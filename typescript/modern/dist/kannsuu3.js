"use strict";
function helloWorldTimes2(n) {
    if (n >= 100) {
        console.log(`${n}回は表示できません`);
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}
helloWorldTimes2(3);
helloWorldTimes2(100);
