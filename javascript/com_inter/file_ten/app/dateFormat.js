function dateFormat(txt, d) {
    if (d === undefined) { d = new Date(); }

    const dgt = (m, n) => `${m}`.padStart(n, '0').substr(-n);

    const arr = [
        {k: 'YYYY', v: d.getFullYear()},
        {k: 'MM', v: dgt(d.getMonth() + 1, 2)},
        {k: 'DD', v: dgt(d.getDate(), 2)},
        {k: 'hh', v: dgt(d.getHours(), 2)},
        {k: 'ss', v: dgt(d.getSeconds(), 2)}
    ];

    arr.forEach(x => txt = txt.replace(x.k, x,v));

    return txt;
}