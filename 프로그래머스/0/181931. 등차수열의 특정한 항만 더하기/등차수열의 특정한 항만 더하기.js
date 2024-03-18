function solution(a, d, included) {
    const len = included.length
    var answer = 0
    let arr = []
    for(let i=0; i<len; i++){
        if(arr.length !== 0) arr.push(arr[arr.length-1]+d)
        else arr.push(a)
    }
    for(let i=0; i<len; i++) {
        if(included[i] === true) answer+= arr[i]
    }
    return answer
}