function triangle(number) {
  for (let spacesNumber = number - 1; spacesNumber >= 0; spacesNumber--) {
    console.log(`${' '.repeat(spacesNumber)}${'*'.repeat(number - spacesNumber)}`);
  }
}


triangle(5);
triangle(9);
