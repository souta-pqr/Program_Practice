const d = new Date(2030, 0, 1, 0, 0, 0);

console.log(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
);

d.setFullYear(d.getFullYear() + 1);
d.setMonth(d.getMonth() + 1);
d.setDate(d.getDate() + 1);
d.setHours(d.getHours() + 1);
d.setMinutes(d.getMinutes() + 1);
d.setSeconds(d.getSeconds() + 1);

console.log(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
);