function solution(k, m, score) {
    if(score.length < m) return 0
    score.sort((a,b) => a-b)
    let answer = 0;
    
    while(score.length >= m){
        const box = score.splice(score.length -m, m)
        const prize = m * Math.min(...box)
        answer += prize
    }

    return answer;
}


//상태에 따라 점수 1~K
//K점이 최상품, 1점이 최하품
//M개씩 담아 포장 가장 낮은 점수가 P점인 경우 사과 한 상자의 가격은 P * M
//가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산
