function solution(my_string) {
    var result = Array(52).fill(0);
    for(let i=0; i< my_string.length; i++){
        let alpha = my_string.charCodeAt(i);
        if(alpha>=65 && alpha<=90){
            result[alpha-65]++;
        }else{
            result[alpha-71]++;
        }
    }
    return result;
}