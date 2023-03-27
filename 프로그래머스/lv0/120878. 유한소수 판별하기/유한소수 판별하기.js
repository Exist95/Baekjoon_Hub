function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2;
}