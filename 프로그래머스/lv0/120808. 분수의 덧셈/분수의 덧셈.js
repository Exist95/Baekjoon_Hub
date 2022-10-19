function solution(denum1, num1, denum2, num2) {
  let boonja = num1 * denum2 + num2 * denum1;
  let boonmo = num1 * num2;

  let maximun = 1;
  for (let i = 1; i <= boonja; i++) {
    if (boonja % i === 0 && boonmo % i === 0) {
      maximun = i;
    }
  }
  return [boonja / maximun, boonmo / maximun];
}