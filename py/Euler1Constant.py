import time
import math
 
# Sums all numbers 1 to max divisible by div
def sum(maximum, div):
	# Total pairs
	pairs = (maximum / div) / 2
	print pairs
	print math.ceil((maximum / div) / 2)

	# Gets the maximum number to be paired
	# Floors max / div then multiplies by div
	high = maximum / div * div
	
	# Sum of each pair
	pair_sum = div + high

	total = pair_sum * pairs

	# Compensates for extra number after pairings
	if (math.ceil((maximum / div) / 2) % 2) != 0:
		print 'here'
		total += (div * (pairs + 1))

	return total

start = time.time()
tre = sum(1000, 3)
print tre
range_sum = sum(1000, 5)
print range_sum
fif = sum(1000, 15)
print fif
end = time.time()

print "time: " + str("%.6f" % (end-start))
print range_sum - fif