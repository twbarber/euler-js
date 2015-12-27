$fib = [1,1]
Max = 4000000

def generate_fibonacci(fib)
  nextFib = caclulate_next_fibb(fib[-1], fib[-2])
  if nextFib >= Max
    return fib
  else
    fib.push(nextFib)
    generate_fibonacci(fib)
  end
  fib
end

def caclulate_next_fibb(first, second)
  first + second
end

def sum_evens(fibs)
  fibs.select(&:even?).reduce(:+)
end

puts sum_evens(generate_fibonacci($fib))
