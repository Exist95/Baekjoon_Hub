function solution(n, numlist) {
    var answer = [];
   numlist.forEach(el => {
       if(el% n === 0){
           answer.push(el)
       }
   })
    return answer;
}
