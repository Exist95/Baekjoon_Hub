function solution(people, limit) {
  var answer = 0;
  let sorted = people.sort((a, b) => b - a);
  let l = 0;
  let r = sorted.length - 1;
  while (l < r) {
    let sum = sorted[l] + sorted[r];
    if (sum > limit) {
      l++;
    } else {
      l++;
      r--;
    }
    answer++;
  }
  if (l == r) answer++;
  return answer;
}