function fromKey<T extends string>(key: `user:${T}`): T {
    return key.slice(2) as T;
}

const user = fromKey("user:uhyo");

console.log(user)