"use strict";
const showName = (obj) => {
    console.log(obj.name);
};
const g = showName;
g({
    name: "daishi",
    age: 35,
});
