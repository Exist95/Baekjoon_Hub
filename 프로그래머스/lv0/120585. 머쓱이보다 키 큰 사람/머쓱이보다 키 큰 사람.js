function solution(array, height) {
    let cnt =0
    for(let x of array) {
        if(x > height){
            cnt++
        }
    }
    return cnt;
}