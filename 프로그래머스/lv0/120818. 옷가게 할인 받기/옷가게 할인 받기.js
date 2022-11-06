function solution(price) {
    if(price >= 100_000 && price < 300_000) {
        return price*0.95 << 0
    } else if(price >= 300_000 && price < 500_000) {
        return price*0.9 << 0
    } else if(price >= 500_000) {
        return price*0.8 << 0
    } else {
        return price
    }
}