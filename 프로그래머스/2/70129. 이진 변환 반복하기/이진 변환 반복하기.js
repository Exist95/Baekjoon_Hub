function solution(s) {
    let answer = [0,0];
    while(s.length > 1) {
        //이진 변환 횟수
        answer[0]++
        //변환 과정에서 제거된 0의 갯수
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2)
    }
    return answer
}


