import cmath

z = 3 + 4j

print(abs(z))

print(cmath.phase(z))

polar_form = cmath.polar(z)
print(polar_form)

rect_form = cmath.rect(5.0, 0.927295180016122)
print(rect_form)

print(cmath.sqrt(z))

print(cmath.log(z))