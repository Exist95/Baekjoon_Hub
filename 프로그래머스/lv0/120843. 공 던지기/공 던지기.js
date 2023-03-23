function solution(numbers, k) {
    let cnt =1
    for(let i=0; i<k-1; i++){
        cnt += 2
        if(cnt > numbers.length){
            cnt -= numbers.length
        }
    }
    return cnt
}

