from copy import deepcopy

japan = {"name": "Japan", "prime_ministers": ["sampleA", "sampleB",]}
japan_copy = deepcopy(japan)

japan_copy["prime_ministers"].append("sampleC")

print(japan_copy["prime_ministers"])

print(japan["prime_ministers"])

#copy・・・共通
#deepcopy・・・別のオブジェクト