function solution(array) {
    let answer = ''
    array.forEach(x => answer += x)
    return answer.split("").filter(x => x==='7').length
}