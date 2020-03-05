function century(year) {
  let centuryNumber;
  if (year % 100 === 0) {
    centuryNumber = year / 100;
  } else {
    centuryNumber = Math.ceil(year / 100);
  }

  let end = '';

  if (centuryNumber % 100 === 11 || centuryNumber % 100 === 11
      || centuryNumber % 100 === 13) {
    end = 'th';
  } else {

    let remainder = centuryNumber % 10;
    if (remainder === 1) {
        end = 'st';
      } else if (remainder === 2) {
        end = 'nd';
      } else if (remainder === 3) {
        end = 'rd';
      } else {
        end = 'th';
      }
    }

  return String(centuryNumber) + end;
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
