function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const bin = (arr1[i] | arr2[i]).toString(2);
    let line = [];
    for (let j = bin.length - n; j < bin.length; j++) {
      if (bin[j] === "1") {
        line.push("#");
      } else {
        line.push(" ");
      }
    }
    answer.push(line.join(""));
  }
  return answer;
}