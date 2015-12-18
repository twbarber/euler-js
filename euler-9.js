function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
};

function getTriangle() {
  for (a = 1; a < 1000; a++) {
    for (b = 1; b < 1000; b++) {
      var c = getC(a,b);
      if (a + b + c == 1000) {
        return new Triangle(a, b, c);
      }
    }
  }
}

function getC(a, b) {
  var cSquared = (a*a + b*b);
  return Math.pow(cSquared, .5);
}

function getProductOfSides(triangle) {
  return (triangle.a * triangle.b * triangle.c);
}

console.log(getProductOfSides(getTriangle()))
