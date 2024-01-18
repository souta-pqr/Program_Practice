"use strict";
function useMaybeHuman(human) {
    const age = human?.age;
    console.log(age);
}
useMaybeHuman(undefined);
