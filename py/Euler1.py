# Loops through all multiples of 3 and sums them.
# Repeats the process for mutiples of 5.
#Subtracts multiples of 15 to account for duplicates.

import time
 
int_sum3 = 0
int_sum5 = 0
int_sum15 = 0
int_sum = 0
 
start = time.time()
 
for x in range(0,1000, 3):
    int_sum3 += x
print int_sum3
 
for y in range(0,1000, 5):
    int_sum5 += y
print int_sum5
 
for z in range(0,1000, 15):
    int_sum15 -= z
print int_sum15

 
end = time.time()
 
print "time: " + str("%.6f" % (end-start))
print int_sum
