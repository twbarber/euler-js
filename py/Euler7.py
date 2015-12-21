def get_prime(number):
	primes = [2, 3]
	last = primes[-1] + 2

	while len(primes) < number:
		add = True
		for i in primes:
			if last % i == 0:
				add = False
				last += 2
		if add:
			primes.append(last)

	return primes
				
print get_prime(10001)[-1]