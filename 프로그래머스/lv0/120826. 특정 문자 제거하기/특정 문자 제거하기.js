function solution(my_string, letter) {
    let answer = ''
   for(let x of my_string){
       if(x !== letter){
           answer+= x
       }
   }
    return answer
}