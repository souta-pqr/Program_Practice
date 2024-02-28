impoort java.util.Currency;

class Money {
  private int amount;
  private Currency currency;

  public Money(int amount, Currency currency) {
    this.amount = amount;
    this.currency = currency;
  }

  public int getAmount() {
    return amount;
  }

  public Currency getCurrency() {
    return currency;
  }

  public Money add(Money m) {
    if (!currency.equals(m.getCurrency())) {
      throw new IllegalArgumentException("Currency mismatch");
    }
    return new Money(amount + m.getAmount(), currency);
  }

  public Money subtract(Money m) {
    if (!currency.equals(m.getCurrency())) {
      throw new IllegalArgumentException("Currency mismatch");
    }
    return new Money(amount - m.getAmount(), currency);
  }

  public boolean equals(Object anObject) {
    if (anObject instanceof Money) {
      Money aMoney = (Money) anObject;
      return aMoney.getCurrency().equals(currency) && aMoney.getAmount() == amount;
    }
    return false;
  }
}