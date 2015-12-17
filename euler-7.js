function divides(a, b) {
  return b % a;
}

function findNextPrime(primes) {
  var next = primes[primes.length - 1] + 2
  var checked = primes.filter(function(a) { return next % a == 0;})
  while (checked.length != 0) {
    next += 2;
    checked = primes.filter(function(a) { return next % a == 0;})
  }
  return next;
}

function findThePrime(count) {
  primes = [2, 3, 5, 7, 11, 13];
  while (primes.length <= count) {
   primes.push(findNextPrime(primes));
  }
 return primes[count - 1];
}

console.log(findThePrime(10001));
