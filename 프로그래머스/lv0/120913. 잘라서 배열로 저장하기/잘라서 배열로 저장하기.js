function solution(my_str, n) {
    let str = my_str.split('')
    
    var answer = [];
    
    while(str.length > 0){
         answer.push(str.splice(0,n).join(''))
 
    }
   return answer
}