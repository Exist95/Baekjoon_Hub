function solution(my_string) {
  let str = my_string.split(" ");
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+") {
      answer += Number(str[i + 1]);
      i++;
    } else if (str[i] === "-") {
      answer -= Number(str[i + 1]);
      i++;
    } else {
      answer += Number(str[i]);
    }
  }
  return answer;
}