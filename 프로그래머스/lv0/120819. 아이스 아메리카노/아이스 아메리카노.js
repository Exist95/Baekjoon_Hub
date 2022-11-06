function solution(money) {
    var answer = [];
    answer[0] = Math.floor(money/5500)
    answer[1] = money - (answer[0]*5500)
    return answer;
}