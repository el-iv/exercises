const DIGITS = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let str = '';
  do {
   let remainder = number % 10;
   number = Math.floor(number / 10);
   str = DIGITS[remainder] + str;
 } while (number > 0);
  return str;
}

function signedIntegerToString(number) {
  if (number < 0) {
    return `-${integerToString(-number)}`;
  } else if (number > 0){
    return `+${integerToString(number)}`;
  } else return integerToString(number);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
