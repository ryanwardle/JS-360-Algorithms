function reverseAString(string){
  let reverseArray = [];

  for (let i = 0; i < string.length; i++) {
    reverseArray.unshift(string[i]);
  }

   let word = reverseArray.toString();
   word = word.replace(/,/gi, '');
   return word;
}
