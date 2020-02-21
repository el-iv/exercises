function middleWord(str) {
  let words = str.split(' ');
  if (words.length > 1 && words.length % 2 === 1) {
    return words[Math.floor(words.length / 2)];
  } else {
    return "It's not a valid string.";
  }
}

console.log(middleWord("Hello world"));
console.log(middleWord("Hello big world"));
console.log(middleWord("I am starving so much"));
console.log(middleWord(''));
