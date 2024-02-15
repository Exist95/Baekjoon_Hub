function solution(myString) {
    var answer = [];

    return myString.split('x').map((el)=> el.length);
}