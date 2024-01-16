"use strict";
const data = `
uhyo,26,1
John Smith, 17,0
Mary sue,14,1
`;
const users = data
    .trim()
    .split("\n")
    .map(line => line.split(","))
    .map(([name, age, premiumUser1]) => ({
    name,
    age: parseInt(age, 10),
    premiumUser: !!parseInt(premiumUser1, 10),
}));
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアム会員です。`);
    }
    else {
        console.log(`${user.name} (${user.age})はプレミアム会員ではありません。`);
    }
}
