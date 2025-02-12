from dataclasses import dataclass

@dataclass
class Country:
    name: str
    popularity: int
    area: int


japan = Country(name="Japan", popularity=125000000, area=380000)
print(japan)

japan.area = 8493489

print(japan.area) # @dataclass(frozen=True) にすれば変更不可能www