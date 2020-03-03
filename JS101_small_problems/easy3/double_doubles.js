function isDoubleNumber(number) {
  let leftSideDigits = String(number).slice(0, Math.floor(String(number).length / 2));
  let rightSideDigits = String(number).slice(Math.floor(String(number).length/ 2));

  return leftSideDigits === rightSideDigits;
}

function twice(number) {
  if (!isDoubleNumber(number)) {
    return (number * 2);
  }

  return number;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
