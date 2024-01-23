"use strict";
const sleep = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
sleep(3000).then(() => {
    console.log("3秒経過しました");
});
