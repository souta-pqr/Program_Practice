"use strict";
const showName1 = (obj) => {
    console.log(obj.name);
};
const g = showName1;
g({
    name: "John",
    age: 25
});
