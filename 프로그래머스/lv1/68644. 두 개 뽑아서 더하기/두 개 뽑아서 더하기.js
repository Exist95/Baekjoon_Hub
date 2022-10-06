function solution(numbers) {
    var answer = [];
    for ( let i = 0; i < numbers.length; i++) {
      for ( let j = i + 1; j < numbers.length; j++) {
        let sum = numbers[i] + numbers[j];
        if( answer.indexOf(sum) === -1) {
          answer.push(sum);
        }
      }
    }
    answer.sort(function(a,b) {
      return a - b;
    })
    return answer;
}