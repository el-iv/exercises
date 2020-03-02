function findFibonacciIndexByLength(digitsNumber) {
  let T = [1, 1]
  let index = 2;

  do {
    T[index] = T[index - 1] + T[index - 2];
    fibNumber = T[index];
    index += 1;
  } while (String(fibNumber).length < digitsNumber);

  return index;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
