function getLargestPalindrome() {
  products = fillMultiples().sortDescending();
  for (i = 0; i < products.length; i++) {
    if (products[i].toString().isPalindrome()) {
      return products[i];
    }
  }
}

function fillMultiples() {
  var products = []
  for (i = 100; i < 1000; i++ ) {
    for (j = 100; j < 1000; j++ ) {
      products.push(i*j)
    }
  }
  return products
}

Array.prototype.sortDescending = function() {
  return this.sort(function(a,b) { return b - a })
}

String.prototype.isPalindrome = function() {
  return this == this.reverse() ? true : false
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log(getLargestPalindrome());
