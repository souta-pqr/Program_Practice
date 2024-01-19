"use strict";
function getOneUserName(user1, user2) {
    if (user1 === undefined && user2 === undefined) {
        return undefined;
    }
    if (user1 !== undefined) {
        return user1.name;
    }
    return user2.name;
}
