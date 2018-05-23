function repeatString (str, num) {

  let repeatedString = '';

  for (let i = 1; i <= num; i++) {
    repeatedString += str;
  }
  return repeatedString;
}


console.log(repeatString('Ryan', 4));
