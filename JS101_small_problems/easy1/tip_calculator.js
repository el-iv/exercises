let readline = require('readline-sync');

console.log("What's the bill amount? ");
let billAmount = readline.question();
billAmount = Number(billAmount);

console.log("What is the tip rate? ");
let tipRate = readline.question();
tipRate = Number(tipRate);

let tip = (tipRate * billAmount / 100);
let total = billAmount + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
