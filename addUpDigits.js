function addDigits(num) {

  let sum = 0;
  let splitDigits = num.toString().split('');

  splitDigits.forEach((num) => {
    let number = parseInt(num);
    sum += number;
  });
  return sum;
}
