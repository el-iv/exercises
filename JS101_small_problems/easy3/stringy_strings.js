function stringy(number) {
  let str = '';
  while (number > 0) {
    if (number === 1) {
      str += '1';
      break;
    }
    str += '10';
    number -= 2;
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(1));    // "1"
console.log(stringy(0));    // "0"
