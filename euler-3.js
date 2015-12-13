function getPrimes(number) {
  var factors = [];
  var n = 2;
  while (number > 1) {
    if (number % n == 0) {
      factors.push(n);
      number = number / n;
    }
    n++;
  }
  return factors
}

function largestPrime(number) {
  var primes = getPrimes(number);
  return Math.max.apply(Math, primes)
}

console.log(largestPrime(600851475143))
