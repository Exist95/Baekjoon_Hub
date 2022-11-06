function solution(numbers) {
    number = numbers.sort((a,b) => a-b)
    var answer = number[number.length-1] * number[number.length-2];
    return answer;
}