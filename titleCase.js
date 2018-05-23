function titleCaseSentence(str) {

  let wordArray = str.toLowerCase().split(' ');
  let titleCaseArray = [];

  wordArray.map(function(val){
    titleCaseArray.push(val[0].toUpperCase().concat(val.slice(1)));
  });

  return titleCaseArray.join(' ');
}
