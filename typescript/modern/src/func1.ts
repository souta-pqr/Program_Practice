function createUser(name: string, age: number) {
  return function (message: string) {
    return `${name} (${age})「${message}」`;
  };
}

const getMessage1 = createUser("Uhyo", 26);
console.log(getMessage1("こんにちは")); // Uhyo (26)「こんにちは」