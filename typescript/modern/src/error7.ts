class EmptyArrayError extends Error{}

try {
    getAverage([1, 2, 3]);
    getAverage([]);
} catch (err) {
    if (err instanceof EmptyArrayError) {
        console.log("EmptyArrayErrorをキャッチしました．");
    } else {
        throw err;
    }
}

function getAverage(nums: number[]) {
    if (nums.length === 0) {
        throw new EmptyArrayError("配列が空です．");
    }
    return sum1(nums) / nums.length;
}

function sum1(nums: number[]): number {
    let result = 0;
    for (const num of nums) result += num;
    return result;
}