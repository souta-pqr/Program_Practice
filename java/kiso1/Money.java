impoort java.util.Currency;

class Money {
  final int amount;
  final Currency currency;

  Money(int amount, Currency currency) {
    if (amount < 0) {
      throw new IllegalArgumentException("金額は0以上でなければなりません")
    }
    if (currency == null) {
      throw new IllegalArgumentException("通貨単位はnullであってはなりません")
    }
 
    this.amount = amount;
    this.currency = currency;
  }

  Money add(final Money other) {
    if (!currency.equals(other.currency)) {
      throw new IllegalArgumentException("通貨単位が異なります")
    }

    final int added = amount + other.amount;
    return new Monwy(added, currency);
  }
}