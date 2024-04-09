function solution(arr) {
    const len = arr.length;
    let num = 0;
    
    while(Math.pow(2,num) < len) num++
    
    for(let i=0; i<(Math.pow(2,num)-len); i++){
        arr.push(0)
    }
    
    return arr
}