console.log("処理１");

setTimeout(() => {
    console.log("処理A");

        setTimeout(() => {
            console.log("処理B");
            
                setTimeout(() => {
                    console.log("処理C");

                        setTimeout(() => {
                            console.log("処理D");
                            
                        }, 100);
                }, 100);
        }, 100);
}, 100);

console.log("処理２");