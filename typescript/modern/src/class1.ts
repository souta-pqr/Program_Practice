class EmptyNameError extends Error {}

class User {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
        if ( name === "") {
            throw new EmptyNameError("名前が空です．");
        }
        this.#name = name;
        this.#age = age;
    }

    getMessage(str: string): string {
        return `${this.#name} (${this.#age})「${str}」`;
    }
}

const user = new User("Uhyo", 26);
console.log(user.getMessage("こんにちは"));