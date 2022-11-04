function solution(num_list) {
    var answer = [0,0];
    for(let x of num_list){
        if(x % 2 === 0){
            answer[0]++
        } else {
            answer[1]++
        }
    }
    return answer;
}