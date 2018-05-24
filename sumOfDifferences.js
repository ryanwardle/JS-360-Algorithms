function sumOfDifferences(numArr) {

  let sum = 0;

  numArr.sort((a, b) => {return a - b})

  for (let i = numArr[0]; i <= numArr[1]; i++) {
    sum += i;
  }
  return sum;
}
