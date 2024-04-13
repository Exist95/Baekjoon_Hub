const AND = (x,y) => {
    if(x === false && y === false) return false
    return true
}

const OR = (x,y) => {
    if(x === true && y === true) return true
    return false
}

function solution(x1, x2, x3, x4) {
    return OR(AND(x1,x2),AND(x3,x4))
}


      
      
