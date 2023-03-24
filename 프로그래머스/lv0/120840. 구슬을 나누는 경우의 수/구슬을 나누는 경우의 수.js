function solution(balls, share) {
    return fatorial(balls)/((fatorial(balls-share)) * fatorial(share))
}

const fatorial = (num) => {
    let one = BigInt(1);
    for(let i=num; i>=2; i--){
        one *= BigInt(i)
    }
    return one
}