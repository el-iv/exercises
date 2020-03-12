function isBalanced(str) {
  let parenthesesCount = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] === "(") {
      parenthesesCount += 1;
    } else if (str[index] === ")") {
      parenthesesCount -= 1;
    }
    if (parenthesesCount < 0) {
      return false;
    }
  return parenthesesCount === 0;
  }
}



console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
