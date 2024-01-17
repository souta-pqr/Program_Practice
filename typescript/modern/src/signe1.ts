type MyFunc = {
    isUsed?: boolean;
    (arg: number): void;
};

const double: MyFunc = (num) => console.log(num * 2);

double(123);
console.log(double.isUsed);