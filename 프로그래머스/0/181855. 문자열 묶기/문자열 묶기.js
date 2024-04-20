function solution(strArr) {
    const dict={}
    const max_len = Math.max(...strArr.map(item => item.length))
   
for(let i = 1; i <= max_len; i++) {
        const data = strArr.filter(item => item.length === i);
        
        dict[i] = data.length;
    }
    return Math.max(...Object.values(dict))
}