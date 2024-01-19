type T = Readonly<{
    name: string;
    age: number;
}>; // { readonly name: string; readonly age: number; }

type U = Partial<{
    name: string;
    age: number;
}>; // { name?: string; age?: number; }

type V = Pick<{
    name: string;
    age: number;
}, "age">; // { age: number; }

type Union = "uhyo" | "hyo" | 1 | 2 | 3;
type Q = Extract<Union, number>; // 1 | 2 | 3
type R = Exclude<Union, number>; // "uhyo" | "hyo"