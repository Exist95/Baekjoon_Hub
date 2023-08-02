function solution(name, yearning, photo) {
    var answer = [];
    const obj = {};
    for(let i=0; i<name.length; i++){
        obj[name[i]] = yearning[i];
    }
    
    return photo.map((arr) => 
        arr.reduce((acc, cur) => acc + (obj[cur]||0), 0)
    )
        
  
}