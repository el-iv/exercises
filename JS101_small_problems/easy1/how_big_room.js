let readline = require("readline-sync");
const SQUARE_METER_TO_SQUARE_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.question();
length = Number(length);

console.log('Enter the width of the room in meters:');
let width = readline.question();
width = Number(width);

let areaInSquareMeters = (length * width).toFixed(2);
let areaInSquareFeet = (areaInSquareMeters * SQUARE_METER_TO_SQUARE_FEET).toFixed(2);

console.log(`The area of the room is  ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet)`);
