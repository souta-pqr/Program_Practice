import datetime
import zoneinfo

now = datetime.datetime.now()
print(now)

tokyo_tz = zoneinfo.ZoneInfo("Asia/Tokyo")

now_in_tokyo = datetime.datetime.now(tokyo_tz)
print(now_in_tokyo)