function asciiValue(str) {
  let stringValue = 0;

  for (let index = 0; index < str.length; index++) {
    stringValue += str.charCodeAt(index);
  }

  return stringValue;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));  
