type User2 = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo, 26, 1
John Smith, 17, 0
Mary Sue, 14, 1
`;

// const users: User2[] = data.trim().split("\n").map(line => {
//     const [name, ageString, premiumUserString] = line.split(", ");
//     return {
//         name,
//         age: parseInt(ageString, 10),
//         premiumUser: premiumUserString === "1"
//     };
// });

const users: User2[] = [];

const lines = data.split("\n");
for (const line of lines) {
    if (line === "") {
        continue;
    }
    const [name, ageString, premiumUserString] = line.split(", ");
    const age = parseInt(ageString, 10);
    const premiumUser = premiumUserString === "1";

    users.push({
        name,
        age,
        premiumUser
    });
}

console.log(users);

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} ${user.age}はプレミアムユーザです`);
    } else {
        console.log(`${user.name} ${user.age}はプレミアムユーザではありません`);
    }
}