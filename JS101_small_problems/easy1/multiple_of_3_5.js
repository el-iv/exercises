function multisum(number) {
  let result = 0;

  for (let num = 3; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      result += num;
    }
  }

  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
