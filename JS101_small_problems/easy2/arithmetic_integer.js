let readline = require('readline-sync');

console.log('==> Enter the first number:');
let firstNumber = readline.question();
firstNumber = parseInt(firstNumber);

console.log('==> Enter the second number:');
let secondNumber = readline.question();
secondNumber = parseInt(secondNumber);

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
