function multiplicativeAverage(arr) {
  let product = arr.reduce((product, currentNumber) => product * currentNumber, 1);

  return (product / arr.length).toFixed(3).toString();
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
