function longestLength(str){

  let wordArray = str.split(' ');
  let lengthArray = [];

  for (let i = 0; i < wordArray.length; i++) {
    lengthArray.push(wordArray[i].length);
  }

  lengthArray.sort(function(a, b){
    return b - a;
  })

  return lengthArray[0];
}
