function uniqueValues(arr1,arr2) {

  let uniqueArray = [];

  arr1.forEach((val) => {
    if (arr2.includes(val) === false && uniqueArray.includes(val) === false) {
      uniqueArray.push(val)
    }
  });

  arr2.forEach((val) => {
    if (arr1.includes(val) === false && uniqueArray.includes(val) === false) {
      uniqueArray.push(val)
    }
  });
  return uniqueArray;
}

console.log(uniqueValues([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
