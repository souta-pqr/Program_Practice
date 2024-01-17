class User4<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }
}

const uhyo3 = new User4<string>("uhyo", 3, "example");