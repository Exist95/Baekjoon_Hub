function solution(age) {
  var answer = age
    .toString()
    .split("")
    .map((x) => String.fromCharCode(Number(x) + 97))
    .join("");

  return answer;
}