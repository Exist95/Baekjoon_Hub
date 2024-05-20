function solution(arr) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(answer.length === 0) {
            answer.push(arr[i])
        } else {
            if(answer[answer.length-1] === arr[i]) {
                answer.pop()
            } else {
                answer.push(arr[i])
            }
        }
    }
    return answer.length ? answer : [-1];
}