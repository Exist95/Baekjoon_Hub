function solution(n) {
    let pizza = 6
    while(pizza % n !== 0){
        pizza+=6
    }
    return pizza/6
}
