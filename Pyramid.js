function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      
      // Add spaces
      for (let j = 0; j < height - i; j++) {
        row += ' ';
      }
      
      // Add asterisks
      for (let k = 0; k < 2 * i - 1; k++) {
        row += '*';
      }
      
      console.log(row);
    }
  }
  
  // Example usage:
  printPyramid(5);
  