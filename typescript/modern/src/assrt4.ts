type Human1 = {
    name: string;
    age: number;
}

function getOneUserName(user1?: Human1, user2?: Human1): string | undefined {
    if (user1 === undefined && user2 === undefined) {
        return undefined;
    }
    if (user1 !== undefined) {
        return user1.name;
    }
    return (user2 as Human1).name;
}