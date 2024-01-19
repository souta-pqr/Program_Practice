type obj = {
    0: string;
    1: number;
}

const obj: obj = {
    0: 'foo',
    "1": 26
};

obj["0"] = "john";
obj[1] = 30;

type ObjKeys = keyof obj;
