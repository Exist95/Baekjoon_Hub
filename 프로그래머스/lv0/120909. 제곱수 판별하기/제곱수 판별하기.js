function solution(n) {
    for(let i=1; i<=10000; i++){
        if(n === i*i) return 1
    }
    return 2    
}