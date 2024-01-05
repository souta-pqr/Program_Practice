function fnc1(arg1, arg2, arg3) {
    console.log(this, arg1, arg2, arg3);
}

fnc1.call('call - thisを設定', '値1', '値2', '値3');
fnc1.apply('apply - thisを設定', ['値1', '値2', '値3']);

let fnc2 = fnc1.bind('bind - thisを設定');
fnc2('値1', '値2', '値3');