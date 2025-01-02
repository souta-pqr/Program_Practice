from fractions import Fraction

fraction1 = Fraction(3, 4)
fraction2 = Fraction(5, 6)

result_add = fraction1 + fraction2
print(result_add)

result_sub = fraction1 - fraction2
print(result_sub)

result_mul = fraction1 * fraction2
print(result_mul)

result_div = fraction1 / fraction2
print(result_div)

print(fraction1.numerator)
print(fraction1.denominator)

approx_fraction = fraction1.limit_denominator(10)
print(approx_fraction)