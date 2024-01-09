function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1
    } else {
        if(arr1.length === arr2.length){
            let a = arr1.reduce((acc,cur) => acc+cur,0)
            let b = arr2.reduce((acc,cur) => acc+cur,0)
            if(a > b) {
            return 1
            } else {
             if(a === b) 
                return 0
                }
            return -1
        }
        return -1
    }
}