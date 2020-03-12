function sequence(count, startingNum) {
  let outputArr = [];
  let currentNumber = 0;

  for (let index = 1; index <= count; index++) {
    currentNumber += startingNum;
    outputArr.push(currentNumber);
  }

  return outputArr;
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
