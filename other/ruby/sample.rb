class Money
    attr_reader :amount, :currency
    
    def initialize(amount, currency)
        if amount < 0
            raise ArgumentError.new("Amount cannot be negative")
        end
        if currency.nil? || currency.empty?
            raise ArgumentError.new("Currency cannot be nil")
        end
        @amount = amount
        @currency = currency
        self.freeze # 不変にする
    end

    def add(other)
        if @currency != other.currency
            raise ArgumentError.new("Currency must be same")
        end
        added = @amount + other.amount
        Money.new(added, @currency)
    end
end

# テストコード
yen1 = Money.new(1000, "JPY")
yen2 = Money.new(2000, "JPY")
total = yen1.add(yen2)
puts "合計金額: #{total.amount} #{total.currency}"  # "合計金額: 3000 JPY"と表示

dollar1 = Money.new(10, "USD")
# エラーを引き起こす（通貨が異なるため）
total = yen1.add(dollar1)
