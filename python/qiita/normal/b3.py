from dataclasses import asdict, dataclass

japan = Country(name="japan", popurarity=125000000, area=3809000)
japan_dict = asdict(japan)

print(japan_dict)