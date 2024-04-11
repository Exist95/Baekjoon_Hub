function solution(myString, pat) {
    var answer = 0;
    for(let i=0; i<myString.length; i++){
        let str = myString.slice(i, i+pat.length)
        if(str == pat) answer++
    }
    return answer
}