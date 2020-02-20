let readline = require('readline-sync');

function computeSum(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
}

function computeProduct(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

function isSum(operation) {
  return operation === 's';
}

function isProduct(operation) {
  return operation === 'p';
}

console.log('Please enter an integer greater than 0: ');
let number = readline.question();
number = Number(number);

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let operation = readline.question();

console.log();

if (isSum(operation)) {
  console.log(`The sum of the integers between 1 and ${number} is ${computeSum(number)}`);
} else if (isProduct(operation)) {
  console.log(`The product of the integers between 1 an ${number} is ${computeProduct(number)}`);
}
