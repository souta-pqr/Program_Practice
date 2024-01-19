"use strict";
function getNamesIfAllHuman1(users) {
    if (users.every(user => user.tag === "human")) {
        return users.map(user => user.name);
    }
    return undefined;
}
