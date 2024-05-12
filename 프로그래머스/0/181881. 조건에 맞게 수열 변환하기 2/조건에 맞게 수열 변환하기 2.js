function solution(arr) {
    let idx = 0
    let prevArr = arr
    
    while(true){
        const changeArr = prevArr.map((a) => {
            if(a >= 50 && a%2 === 0) return a/2
            if(a < 50 && a%2 === 1) return a*2+1
            return a
        })
  
        const isAllSame = prevArr.every((a, i) => a === changeArr[i])
        if(isAllSame) break
        idx+=1  
        prevArr = changeArr
        
    }
    return idx;
}