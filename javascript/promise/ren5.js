/**
 * 1000$B%_%jICL$K~$N%i%s%@%`$J%?%$%_%s%0$G%l%9%]%s%9$r5?;wE*$K%G!<%?<hF@$9$k4X?t(B
 * $B;XDj$7$?(B`path`$B$K%G!<%?$,$"$k>l9g!"@.8y$H$7$F(B**Resolved**$B>uBV$N(BPromise$B%*%V%8%'%/%H$rJV$9(B
 * $B;XDj$7$?(B`path`$B$K%G!<%?$,$J$$>l9g!"<:GT$H$7$F(B**Rejected**$B>uBV$N(BPromise$B%*%V%8%'%/%H$rJV$9(B
 */
function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
// `then`$B%a%=%C%I$G@.8y;~$H<:GT;~$K8F$P$l$k%3!<%k%P%C%/4X?t$rEPO?(B
// /success/data $B$N%j%=!<%9$OB8:_$9$k$N$G@.8y$7(BonFulfilled$B$,8F$P$l$k(B
dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response); // => { body: "Response body of /success/data" }
}, function onRejected(error) {
    // $B$3$N9T$O<B9T$5$l$^$;$s(B
});
// /failure/data $B$N%j%=!<%9$OB8:_$7$J$$$N$G(BonRejected$B$,8F$P$l$k(B
dummyFetch("/failure/data").then(function onFulfilled(response) {
    // $B$3$N9T$O<B9T$5$l$^$;$s(B
}, function onRejected(error) {
    console.error(error); // Error: "NOT FOUND"
});

