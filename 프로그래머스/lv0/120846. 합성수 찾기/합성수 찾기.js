function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
        let gcd = []
        for(let j=1; j<=i; j++){
            if(i % j === 0) gcd.push(j)
        }
        if(gcd.length > 2) answer++
    }
    return answer;
}