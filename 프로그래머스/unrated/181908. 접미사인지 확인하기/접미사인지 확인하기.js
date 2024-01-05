function solution(my_string, is_suffix) {
    for(let i=0; i<my_string.length; i++){
        if(my_string.slice(my_string.length-is_suffix.length) === is_suffix) {
            return 1
        } 
        return 0
    }
}