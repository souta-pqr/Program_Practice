"use strict";
const showName = (obj1) => {
    console.log(obj1.name);
};
const g = showName;
g({
    name: "John Smith",
    age: 16,
});
