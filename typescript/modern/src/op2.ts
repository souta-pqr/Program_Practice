type Human1 = {
    name: string;
    age: number;
}

function useMaybeHuman(human: Human1 | undefined) {
    const age = human?.age;
    console.log(age);
}

useMaybeHuman(undefined);
