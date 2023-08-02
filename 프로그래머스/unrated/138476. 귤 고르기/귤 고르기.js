function solution(k, tangerine) {
    var answer = 0;
    let obj= {}
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1
    })
    const kind = Object.values(obj).sort((a,b) => b-a)
    let sum = 0
    
    for(let num of kind) {
        answer++;
        sum += num
        if(sum >=k) break;
    }
    
    return answer;
}