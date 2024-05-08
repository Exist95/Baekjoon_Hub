function solution(n, slicer, num_list) {
    const [A,B,C] = [...slicer]
    
    switch(n) {
        case 1 :
        return num_list.slice(0,B+1)
        case 2 :
            return num_list.slice(A)
        case 3 :
            return num_list.slice(A,B+1)
        case 4 :
            return num_list.slice(A,B+1).filter((_,idx) => !(idx % C))
        
    }
}