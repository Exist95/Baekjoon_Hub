function solution(number, limit, power) {
    var answer = 0;
    const numsArr = new Array(number+1).fill(0);
    for(let i = 1;i<=number;i++) {
        for(let j = i;j<=number; j+=i) {
            numsArr[j] += 1;
        }
    }

    return numsArr.reduce((pv,cv) => { return cv > limit ? pv+power : pv+cv }, 0);
}


