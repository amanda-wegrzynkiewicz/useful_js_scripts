function updateInventory(curInv, newInv) {
    // Convert current inventory to an object for easier updating
    const inventory = curInv.reduce((acc, [quantity, item]) => {
      acc[item] = quantity;
      return acc;
    }, {});
  
    // Update inventory with new inventory data
    newInv.forEach(([quantity, item]) => {
      if (inventory[item] !== undefined) {
        inventory[item] += quantity;
      } else {
        inventory[item] = quantity;
      }
    });
  
    // Convert the inventory object back to an array
    const updatedInv = Object.keys(inventory).map(item => [inventory[item], item]);
  
    // Sort the updated inventory alphabetically by item name
    updatedInv.sort((a, b) => a[1].localeCompare(b[1]));
  
    return updatedInv;
  }
  
  // Example usage:
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  var updatedInventory = updateInventory(curInv, newInv);
  console.log(updatedInventory);
  // Output: 
  // [
  //   [88, "Bowling Ball"],
  //   [2, "Dirty Sock"],
  //   [3, "Half-Eaten Apple"],
  //   [3, "Hair Pin"],
  //   [5, "Microphone"],
  //   [7, "Toothpaste"]
  // ]
  