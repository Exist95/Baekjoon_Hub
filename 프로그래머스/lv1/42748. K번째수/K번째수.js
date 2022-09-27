function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let list = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(list[commands[i][2] - 1]);
  }

  return answer;
}