import decimal

a = decimal.Decimal('0.1')
b = decimal.Decimal('0.2')

result = a + b
print(result)

decimal.getcontext().prec = 6
c = decimal.Decimal('1') / decimal.Decimal('3')
print(c)

d = decimal.Decimal('2.675')
rounded = d.quantize(decimal.Decimal('0.01'), rounding=decimal.ROUND_HALF_UP)
print(rounded)