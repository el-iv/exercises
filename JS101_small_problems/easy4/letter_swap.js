function swap(str) {
  let words = str.split(' ').map(word => {
    if (word.length > 1) {
      let firstChar = word[0];
      let lastChar = word[word.length - 1];
      return (lastChar + word.slice(1,word.length - 1) + firstChar);
    } else {
      return word;
    }
  });

  let swappedWordsStr = words.join(' ');
  return swappedWordsStr;
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
