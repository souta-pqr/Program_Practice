import asyncio
async def print_numeber(number):
  print(number)

if __name__ == "__main__":
  loop = asyncio.get_event_loop()

  loop.run_until_complete(
    asyncio.wait([
      print_numeber(number)
      for number in range(10)
    ])
  )
  loop.close()
