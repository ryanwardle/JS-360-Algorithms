function amendSentence (str) {

  let split = str.split(/(?=[A-Z])/).join(' ').toLowerCase();

  return split;
}
