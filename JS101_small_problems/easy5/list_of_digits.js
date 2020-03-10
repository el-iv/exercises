function digitList(number) {
  let numsArr = [];

  let currentNumber = number;
  while (currentNumber >= 10) {
    let remainder = currentNumber % 10;
    numsArr.push(remainder);
    currentNumber = Math.floor(currentNumber / 10);
  }
  numsArr.push(currentNumber);

  numsArr.reverse();
  return numsArr;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
