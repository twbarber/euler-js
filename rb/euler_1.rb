sum = 0
min = 1
max = 999

(min..max).each {
  |i|
  if i % 3 ==0 || i % 5 == 0
    sum += i
  end
}

puts sum;
