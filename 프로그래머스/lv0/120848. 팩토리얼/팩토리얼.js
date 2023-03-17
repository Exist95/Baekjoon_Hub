function solution(n) {
    let result = 0
    for(let i = 1; i <= 10; i++) {
        if(n >= getFacto(i)) {
            result = i
            continue
        } else {
            break
        }
    }
    return result
}

function getFacto(num) {
    if(num > 1) return num*getFacto(num-1)
    return num
}