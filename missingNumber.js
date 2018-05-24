function findMissingNumber (arr) {

  let sortedArray = arr.sort( (a, b) => { return a - b});

  for (let i = 0; i < sortedArray.length; i++) {
    if (i !== sortedArray[i]) {
      return i;
    }
  }
}
