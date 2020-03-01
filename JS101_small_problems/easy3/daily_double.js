function crunch(str) {
  let chars = str.split('');
  let index = 0;
  let newStr = '';

  while (index <= chars.length - 1) {
    if (chars[index] !== chars[index + 1]) {
      newStr = newStr + chars[index];
    }
    index++;
  }
  return newStr;
}




console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
