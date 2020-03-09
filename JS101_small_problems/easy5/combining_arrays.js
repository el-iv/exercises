function union(arr1, arr2) {
  let concatenatedArr = arr1.concat(arr2);
  let unionArr = [];
  concatenatedArr.forEach(element => {
    if (!unionArr.includes(element)) {
      unionArr.push(element);
    }
  });
  return unionArr;
}

let arr1 = [1, 3, 3, 5];
let arr2 = [9, 3, 5, 7];

console.log(union(arr1, arr2));
