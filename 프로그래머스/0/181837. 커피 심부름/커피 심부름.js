function solution(order) {
    let cnt = 0
    for(let i=0; i<order.length; i++){
        if(order[i].includes('americano') || order[i].includes('anything')){
            cnt += 4500
        } else {
            if(order[i].includes('latte')) {
                cnt += 5000
            }
        }
    }
    return cnt;
}