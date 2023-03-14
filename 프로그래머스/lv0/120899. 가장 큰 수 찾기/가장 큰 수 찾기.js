function solution(array) {
  return (answer = [Math.max(...array), array.indexOf(Math.max(...array))]);
}