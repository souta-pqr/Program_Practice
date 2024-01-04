let test = true;

if (test) {
    let food = 'ケーキ';
    console.log('ローカルスコープ', food);
}

// food is not defined in the global scope, so this will throw an error
// console.log('グローバルスコープ', food);

str = "チョコレート\
バニラ"

console.log(str);