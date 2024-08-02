function sym(...arrays) {
    // Helper function to find the symmetric difference between two arrays
    function symmetricDifference(a, b) {
      return a
        .filter(item => !b.includes(item))
        .concat(b.filter(item => !a.includes(item)));
    }
  
    // Reduce the array of arrays using the symmetricDifference function
    const result = arrays.reduce((acc, array) => symmetricDifference(acc, array), []);
  
    // Remove any duplicates in the result
    return [...new Set(result)];
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 3];
  const array2 = [3, 4, 5];
  const array3 = [5, 6, 7];
  const result = sym(array1, array2, array3);
  console.log(result); // Output: [1, 2, 4, 6, 7]