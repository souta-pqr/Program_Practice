const obj1 = {
    double(num: number): number {
        return num * 2;
    },
    double2: (num: number): number => num * 2,
};

console.log(obj1.double(3)) // 6
console.log(obj1.double2(3)) // 6