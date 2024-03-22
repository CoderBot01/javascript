function randomRange(myMin, myMax) {
  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  let randomDecimal = Math.random();

  console.log(randomDecimal);
  
  // Scale the random decimal to fit within the range myMin to myMax
  let randomNumber = Math.floor(randomDecimal * (myMax - myMin + 1)) + myMin;
  
  // Return the random whole number
  console.log (randomNumber);
}

randomRange(5,10)
