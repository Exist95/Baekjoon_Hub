function solution(my_string) {
    var answer = my_string.toLowerCase().split("").sort().join('');
    return answer;
}