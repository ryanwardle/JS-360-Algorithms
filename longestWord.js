function longestWord (str) {

  let lengthArray = [];
  let longestWord = '';
  let string = str.replace(/[\W_]/g, ' ').split(' ');

for (let i = 0; i < string.length; i++) {
  if (string[i].length > longestWord.length) {
    longestWord = string[i];
  }
}
  return longestWord;
}
