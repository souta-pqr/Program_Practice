class Length(float):
	def to_cm(self):
		return super().__str__() + "cm"

pencil_Length = Length(16)
print(pencil_Length.to_cm())
