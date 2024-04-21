function solution(myStr) {
    const answer = myStr.split('a').join('_').split('b').join('_').split('c').join('_').split('_').filter(item => item.length !== 0);
     return answer.length !== 0 ? answer : ['EMPTY'];
}