function fibonacci(first, second, numbers, max) {
  var generatedNumbers = numbers;
  if (first + second <= max) {
    var sum = first + second;
    numbers.push(sum);
    return fibonacci(second, sum, generatedNumbers, max)
  } else {
    return generatedNumbers
  }
}

var evens = fibonacci(1, 1, [1,1], 4000000).filter(function(a) { return a % 2 == 0 });

console.log(evens.reduce(function(a,b) { return a + b}));
