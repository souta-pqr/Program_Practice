function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

type Human5 = {
    name: string;
    age: number;
}

const uhyo7: Human5 = {
    name: 'uhyo',
    age: 26
};

const uhyoName = get(uhyo7, 'name');
const UhyoAge = get(uhyo7, 'age');