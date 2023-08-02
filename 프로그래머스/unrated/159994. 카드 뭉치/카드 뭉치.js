function solution(cards1, cards2, goal) {
    let cnt = 0
    for(let i=0; i<goal.length; i++){
        const findWord = goal[i]
        
        if(cards1[0] === findWord){
            cards1.shift();
            cnt++
        } else if (cards2[0] === findWord){
            cards2.shift()
            cnt++
        } else {
            return "No"
        }
    }
    return goal.length === cnt ? "Yes" : "No"
}