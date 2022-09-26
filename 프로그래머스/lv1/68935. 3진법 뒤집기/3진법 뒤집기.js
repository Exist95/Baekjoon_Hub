function solution(n) {
  let answer = String(n.toString(3).split("").reverse().join(""));
  return parseInt(answer, 3);
}