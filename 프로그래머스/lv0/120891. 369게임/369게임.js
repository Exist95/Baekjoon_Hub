function solution(order) {
    var answer = order.toString().split("").filter(x => x==='3' || x==='6' || x==='9').length;
    return answer;
}