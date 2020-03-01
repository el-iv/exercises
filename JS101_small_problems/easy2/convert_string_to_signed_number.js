const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger(str) {
  let arrayOfDigits = str.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => value = value * 10 + digit);
  return value;
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1, str.length));
    case '+':
      return stringToInteger(str.slice(1, str.length));
    default:
      return stringToInteger(str);
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
