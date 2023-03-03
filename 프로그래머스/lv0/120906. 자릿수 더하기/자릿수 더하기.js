function solution(n) {
    let ans = 0
    var answer = String(n).split('')
    for(let i=0; i<answer.length; i++){
        ans += Number(answer[i])
    }
    return ans
}