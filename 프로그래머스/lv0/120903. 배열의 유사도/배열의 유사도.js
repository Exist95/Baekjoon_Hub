function solution(s1, s2) {
    let cnt = 0
    if(s2.length === 0 ) return 0
    for(let i=0; i<s2.length; i++){
        for(let j=0; j<s1.length; j++){
            if(s2[i] === s1[j]) cnt++ 
        }
    }
    return cnt
}