function isMultiple(divisor, firstDiv, secondDiv) {
  return (number % firstDiv * secondDiv == 0) ? true : (number % firstDiv == 0) ? true : (number % secondDiv == 0) ? true : false
}

function findSumOfMultiples(min, max, firstMultiple, secondMultiple) {
  var sumOfMultiples = 0
  for (number = min; number < max; number++) {
    if (isMultiple(number, firstMultiple, secondMultiple)) {
      sumOfMultiples += number
    }
  }
  return sumOfMultiples
}

console.log(findSumOfMultiples(0, 1000, 3, 5))
