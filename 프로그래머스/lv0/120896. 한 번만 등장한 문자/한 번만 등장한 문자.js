function solution(s) {
    let answer = []
    let nArr = s.split('')
    nArr.forEach(x => {
        if(s.indexOf(x) === s.lastIndexOf(x)){
            answer.push(x);
        }
    })
    
    return answer.sort().join('');
}