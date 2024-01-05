function getFunc() {
    const name = "チョコパフェ";

    function innerFunc() {
        const price = 800;

        console.log(`${name}は${price}円です。`);
    }

    return innerFunc;
}

const func = getFunc();

func();