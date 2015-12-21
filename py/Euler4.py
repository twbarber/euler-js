# Find the largest plaindrome created by two, 3 digit numbers

num = 0

for i in range(999, 99, -1):
	for j in range(999, 99, -1):
		if i*j > num:
			if str(i*j) == ''.join(reversed(str(i*j))):
				num = i*j
		
print num
