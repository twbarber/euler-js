# Determine the largest prime factor of num N
# Had to research prime factorization. See Wordpress 

num = 600851475143
i = 2

while i * i < num:
	while num % i == 0:
		num /= i
	i += 1
	
print num
