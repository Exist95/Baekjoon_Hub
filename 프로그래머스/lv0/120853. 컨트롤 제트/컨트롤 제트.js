function solution(s) {
    let a = 0;
    var answer = s.split(' ');
        for(let i=0; i<answer.length; i++){
        if(answer[i] === 'Z'){
        a -= Number(answer[i-1])
        } else a += Number(answer[i])
 
    }

    return a;
}