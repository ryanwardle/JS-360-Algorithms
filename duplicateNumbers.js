function isDuplicateNumber (numArr) {

  let sortedNumbers = numArr.sort((a, b) => {return a - b});

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] === sortedNumbers[i + 1]) {
      return true;
    }
  }
  return false;
}
