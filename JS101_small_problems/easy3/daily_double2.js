function crunch(str) {
  let newStr = '';

  for (let index = 0; index < char.length; i++) {
    if (chars.length == 0) {
      newStr = str;
      break;
    }
    if (str[index] !== str[index + 1]) {
      newStr = newStr + str[index];
    }
  }
  return newStr;
}





console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
