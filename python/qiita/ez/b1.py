import struct

packed_data = struct.pack("I f 5s", 1, 3.14, b"hello")

print(packed_data)