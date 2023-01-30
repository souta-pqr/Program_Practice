class LazyProperty:
	def __init__(self, func):
		self.func = func
		self.name = func.__name__
	def __get__(self, instance, owner):
		if not instance:
			# kurasuhennsuutosite,akusesusaretatokinoshori
		
