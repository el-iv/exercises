function wordSizes(str) {
  let obj = {};
  if (str === "") {
    return obj;
  }

  let words = str.split(' ').map(word => word.replace(/[^a-z0-9]/gi, ""));
  let wordsSizes = words.map(word => word.length);

  for (let index = 0; index < wordsSizes.length; index++) {
    let currentSize = String(wordsSizes[index]);
    if (!Object.keys(obj).includes(currentSize)) {
      obj[currentSize] = 1;
    } else {
      obj[currentSize] += 1;
    }
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
