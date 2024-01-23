"use strict";
const sleepReject = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, duration);
    });
};
sleepReject(3000).catch(() => {
    console.log("エラーが発生しました");
});
