function centerOf(str) {
  let newStr = '';
  if (str.length % 2 === 0) {
    newStr = str.substr((str.length / 2) - 1, 2);
  } else {
    newStr = str[Math.floor(str.length / 2)];
  }
  return newStr;
}

console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
