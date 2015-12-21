# Sums up even Fib Numbers up to a running sum of 4Mil
# Answer = 4613732

current = 2
last = 1
temp = 0
int_sum = 0

while int_sum < 4000000:
	if current % 2 == 0:
		int_sum += current
	temp = last
	last = current
	current = temp + last
	
print int_sum
