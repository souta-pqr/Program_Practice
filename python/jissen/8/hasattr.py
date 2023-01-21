import json
import os

def is_package(module_or_package):
	return hasattr(module_or_package, "__path__")

print(is_package(json))
print(is_package(os))
