const readline = require('readline-sync');

console.log("What is your age?");
let age = Number(readline.prompt());
console.log("At what age would you like to retire?")
let retirementAge = Number(readline.prompt());

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + retirementAge - age}`);
console.log(`You have only ${retirementAge - age} years of work to go!`);
