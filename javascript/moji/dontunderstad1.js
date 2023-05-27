function toDateJa(dateString) {
    // $B%Q%?!<%s$K%^%C%A$7$?$H$-$N$_!"%3!<%k%P%C%/4X?t$GCV49=hM}$,9T$o$l$k(B
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
        // `all`$B$K$O!"%^%C%A$7$?J8;zNsA4BN$,F~$C$F$$$k$,:#2s$OMxMQ$7$J$$(B
        // `all`$B$,<!$NJV$9CM$GCV49$5$l$k%$%a!<%8(B
        return `${year}$BG/(B${month}$B7n(B${day}$BF|(B`;
    });
}
// $B%^%C%A$7$J$$J8;zNs$N>l9g$O!"$=$N$^$^$NJ8;zNs$,JV$k(B
console.log(toDateJa("$BK\F|%O@2E7%J%j(B")); // => "$BK\F|%O@2E7%J%j(B"
// $B%^%C%A$7$?>l9g$OCV49$7$?7k2L$rJV$9(B
console.log(toDateJa("$B:#F|$O(B2017-03-01$B$G$9(B")); // => "$B:#F|$O(B2017$BG/(B03$B7n(B01$BF|$G$9(B"
