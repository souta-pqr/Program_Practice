class User1 {
    static adminUser: User1;
    static {
        this.adminUser = new User1();
        this.adminUser.#age = 9999;
    }

    #age: number = 0;
    getAge() {
        return this.#age;
    }
    setAge(age: number) {
        if (age < 0 || age > 150) {
            return;
        }
        this.#age = age;
    }
}

console.log(User1.adminUser.getAge());