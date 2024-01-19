"use strict";
function getNamesIfAllHuman(users) {
    if (users.every(user => user.tag === "human")) {
        return users.map(user => user.name);
    }
    return undefined;
}
