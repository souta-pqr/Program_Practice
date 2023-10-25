import re

line = "怒られて(L た)。 & オコラレテ(L タ)。"
if 'D' not in line or 'F' not in line:
    cleaned_line = re.sub(r'\([A-CEG-Z] ', '', line)
    cleaned_line = re.sub(r'\)', '', cleaned_line)

print(cleaned_line)
