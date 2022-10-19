function solution(s) {
  let num = s.split(" ").map((x) => Number(x));
  num = num.sort((a, b) => a - b);
  const answer = num[0] + " " + num[num.length - 1];
  return answer;
}