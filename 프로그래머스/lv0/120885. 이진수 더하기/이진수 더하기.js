function solution(bin1, bin2) {
    let one = parseInt(bin1, 2)
    let two = parseInt(bin2, 2)
    var answer = (one+two).toString(2);
    return answer;
}