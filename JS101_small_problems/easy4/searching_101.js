const readline = require('readline-sync');
let numbers = [];

function isIncluded(num, numbers) {
  return numbers.includes(num);
}

function isIncluded2(val, array) {
  return array.some(element => element > val);
}

console.log("Enter the 1st number: ");
numbers.push(Number(readline.prompt()));
console.log("Enter the 2nd number: ");
numbers.push(Number(readline.prompt()));
console.log("Enter the 3rd number: ");
numbers.push(Number(readline.prompt()));
console.log("Enter the 4th number: ");
numbers.push(Number(readline.prompt()));
console.log("Enter the 5th number: ");
numbers.push(Number(readline.prompt()));
console.log("Enter the last number: ");
let number = (Number(readline.prompt()));

if (isIncluded(number, numbers)) {
  console.log(`The number ${number} appears in ${numbers.join(',')}`);
} else {
  console.log(`The number ${number} does not appear in ${numbers.join(',')}`);
}

if (isIncluded2(number, numbers)) {
  console.log("")
}
