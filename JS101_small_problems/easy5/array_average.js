function average(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  let result = Math.floor(sum / arr.length);
  return result;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
