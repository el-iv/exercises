function countOccurrences(arr) {
  copiedArr = arr.slice();
  copiedArr.sort();

  let occurrences = {};

  copiedArr.forEach(arrElement => {
    if (!Object.keys(occurrences).includes(arrElement)) {
      occurrences[arrElement] = 1;
    } else {
      occurrences[arrElement] += 1;
    }
  });

  for (let element in occurrences) {
    console.log(`${element}=> ${occurrences[element]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
