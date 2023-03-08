function solution(box, n) {
    var answer = Math.floor(box[0]/n) * Math.floor(box[1]/n) * Math.floor(box[2]/n) ;
    
    return answer;
}