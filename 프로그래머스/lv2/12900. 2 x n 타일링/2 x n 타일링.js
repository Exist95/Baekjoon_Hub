function solution(n) {
    let arr = [1, 2];
    for (var i = 2; i <= n; i++) {
        arr.push((arr[i-1] + arr[i-2]) % 1000000007);
    }
    return arr[n-1] ? arr[n-1] : 0;
}