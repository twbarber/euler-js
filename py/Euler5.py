# Finds the lowest number divisible by 1-20
# 2520 is incriment because its lowest num divisible by 1-10

test = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
low = 0
found = False

while not found:
	low += 2520
	for i in test:
		if low % i == 0:
			if i == 20:
				found = True
				break
		else:
			break

print low
