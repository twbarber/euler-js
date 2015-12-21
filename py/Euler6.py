square_sum = 0
sum_square = 0

for i in range(1, 101):
	square_sum += i*i

for i in range(1, 101):
	sum_square += i

sum_square = sum_square * sum_square

print sum_square - square_sum