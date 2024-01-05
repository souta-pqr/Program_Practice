function fnc1(arg) {
    function fnc2(arg) {
        function fnc3(arg) {
            console.log(arg.toString())
        }
        fnc3(arg);
    }
    fnc2(arg);
}

try {
    console.log('try開始');

    fnc1(null);

    console.log('try終了');
} catch (error) {
    console.log('catch開始');

    console.log(error.message);

    console.log('catch終了');
}