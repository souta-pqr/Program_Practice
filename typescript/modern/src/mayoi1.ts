type NestedObj = {
    obj?: {
        foo: number;
    }
};
const nested1: NestedObj = {
    obj: { foo: 123 }
};
const nested2: NestedObj = {};