function sumSquares(count) {
  var sum = 0;
  for (i = 1; i <= count; i++) {
    sum += i * i;
  }
  return sum;
}

function squareSums(count) {
  var sum = 0;
  for (i = 1; i <= count; i++) {
    sum += i;
  }
  return sum * sum;
}

console.log(squareSums(100) - sumSquares(100));
