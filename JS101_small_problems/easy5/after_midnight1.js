function timeOfDay(number) {
  let minutes = number;

  while (minutes < 0) {
    minutes += 24 * 60;
  }

  let hours = 0;

  while (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }

  while (hours >= 24) {
    hours -= 24;
  }

  let outputHours = (hours < 10) ? "0" + hours : String(hours);
  let outputMinutes = (minutes < 10) ? "0" + minutes : String(minutes);

  return outputHours + ":" + outputMinutes;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
