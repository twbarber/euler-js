function dividesElevenToTwenty(number) {
  return (number % 11 == 0 && number % 12 == 0 && number % 13 == 0 && number % 14 == 0
        && number % 15 == 0 && number % 16 == 0 && number % 17 == 0 && number % 18 == 0
        && number % 19 == 0 && number % 20 == 0) ? true : false;
}

var min = 2520;

while (!dividesElevenToTwenty(min)) {
  min += 20;
}

console.log(min);
