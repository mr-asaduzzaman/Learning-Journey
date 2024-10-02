const averageOfSquares = (arr) => {
    let sumOfSquares = 0;
    
    for (let num of arr) {
      sumOfSquares += num * num;  // Square each element and add to sum
    }
    
    return sumOfSquares / arr.length;  // Return the average
  };
  
  // Example usage:
  const numbers = [2, 3, 4];
  const result = averageOfSquares(numbers);
  console.log(result);  // Output: 9.666666666666666
  