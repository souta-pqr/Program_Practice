function fnc1() {
    console.log('中', this);

    function fnc2() {
        console.log('内', this);
    }

    fnc2();
}

console.log('外', this);

fnc1();