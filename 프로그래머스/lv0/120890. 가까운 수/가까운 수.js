function solution(array, n) {
    let ans = [];
    
    array.forEach((item) => {
        ans.push(Math.abs(item - n));
    })
    
    const min = Math.min(...ans);
    
    let check = [];
    
    for(let index = 0; index < ans.length; index++){
        if(ans[index] === min){
            check.push(array[index]);
        }
    }
    
    return Math.min(...check);
}