function firstDuplicate (numArr) {

  let count = 0;

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] === numArr[i + 1]) {
      return numArr[i];
    }else if (numArr[i] !== numArr[i + 1]) {
      count +=  1;
    }

    if (count === numArr.length - 1) {
      return -1;
    }
  }
}
