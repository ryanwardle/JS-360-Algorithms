function factorial (num){

  let ans = 1;

  for (var i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
}
