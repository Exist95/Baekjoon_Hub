function solution(n_str) {
    let index = 0
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] === '0') index++
        else break;
    }
    
    return n_str.slice(+index)
}