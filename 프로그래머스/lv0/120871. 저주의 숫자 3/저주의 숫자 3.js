function solution(n) {
    let nums = Array.from({length: 200}, (_,i) => i+1);
    let fillterNums = nums.filter((m) =>
       m % 3 !== 0 && !m.toString().includes("3")
    ) 
    return fillterNums[n-1]
}
  
