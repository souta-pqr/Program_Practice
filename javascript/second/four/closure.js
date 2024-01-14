function getFunc() {
    const name = 'チョコパフェ';

    function innerFunc() {
        const price = 800;

        console.log(`${name}: ${price}円`);
    }

    return innerFunc;
}

const func = getFunc();

func();
// => チョコパフェ: 800円