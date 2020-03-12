function repeater(str) {
  let newStr = [];
  str.split('').forEach(char => {
    newStr.push(char, char);
  });

  return newStr.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
