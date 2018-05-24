function isTimeValid (time) {

  let timeArray = time.split(':');

  if (Number(timeArray[0]) <= 23 && Number(timeArray[1] <= 59)) {
    return true;
  }
  return false;
}
