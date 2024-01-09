function solution(num_str) {
    var answer = 0;
    num_str.split('').forEach((e) => answer += Number(e))
    return answer
}   