function Money(amount, currency) {
    if (amount < 0) {
        throw new Error("Invalid amount");
    }
    if (!currency) {
        throw new Error("Invalid currency");
    }

    this.amount = amount;
    this.currency = currency;
    Object.freeze(this); // 不変にする
}

Money.prototype.add = function (ohter) {
    if (this.currency !== ohter.currency) {
        throw new Error("通貨が異なります");
    }
    const added = this.amount + ohter.amount;
    return new Money(added, this.currency);
}