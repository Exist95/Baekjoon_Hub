function solution(n) {
  let num = n.toString(2);
  let numCount = num.match(/1/g).length;
  while (true) {
    n += 1;
    let nextN = n.toString(2);
    let nextNC = nextN.match(/1/g).length;
    if (nextNC === numCount) {
      break;
    }
  }

  return n;
}