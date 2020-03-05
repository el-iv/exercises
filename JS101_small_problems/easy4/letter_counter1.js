function count(val, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      counter++;
    }
  }
  return counter;
}

function wordSizes(str) {
  let obj = {};
  if (str === '') {
    return obj;
  }
  let wordsSizes = str.split(' ').map(word => word.length);
  wordsSizes.forEach(size => {
    if (!Object.keys(obj).includes(size)) {
      obj[size] = count(size, wordsSizes);
    }
  });

  return obj;
}




console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
