function solution(my_string) {
    let a = 0;
    var answer = my_string.split('').filter(x => Number(x));
    for(let i=0; i<answer.length; i++){
        a += Number(answer[i])
    }
    return a;
}