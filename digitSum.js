function sumOfDigits (str) {

  let digits = str.match(/\d+/g, '') || [];
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
