from copy import copy
japan = {"name": "Japan", "prime_ministers": ["sampleA", "sampleB"]}
japan_copy = copy(japan)

japan_copy["prime_ministers"].append("sampleC")

print(japan["prime_ministers"])