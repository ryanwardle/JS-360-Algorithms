function checkPalindrome (string){

  let phrase = string.toLowerCase();
  phrase = phrase.replace(/[^a-zA-Z 0-9]/g, '');
  phrase = phrase.replace(/\s/g, "");
  phrase.split('');

  let reversePhrase = [];
  for (let i = 0; i < phrase.length; i++) {
    reversePhrase.unshift(phrase[i]);

  }

  reversePhrase = reversePhrase.toString();
  reversePhrase = reversePhrase.replace(/,/g, '');

  if (phrase === reversePhrase) {
    return true;
  }else {
    return false;
  }

}


//BETTER WAY*************

function isPalindrome(str){
  let word = str.toLowerCase().replace(/W_/g, '');;
  let reversedString = word.split('').reverse().join('');

  return word === reversedString;
}
