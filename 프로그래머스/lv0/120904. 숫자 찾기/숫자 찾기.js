function solution(num, k) {
    let answer = num.toString().indexOf(k.toString())
    answer >= 0 ? answer = answer+1 : -1
    return answer;
}