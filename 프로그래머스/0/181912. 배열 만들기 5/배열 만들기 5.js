function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i=0; i<intStrs.length; i++) {
        let str = intStrs[i].slice(s,s+l)
        answer.push(+str)
    }
    return answer.filter(x => x > k);
}