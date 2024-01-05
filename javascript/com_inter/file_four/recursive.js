function recursion(n, max) {
    console.log(n);

    n *= 2;

    if (n > max) {
        return;
    }

    recursion(n, max);
}

recursion(1, 16);