const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const K = input[1].split(' ').map(v=>+v);
const M = input[3].split(' ').map(v=>+v);

K.sort((a,b)=>a-b)
let N = [[K[0],1]];
for(let i = 1; i<K.length; i++){
  if(K[i-1]==K[i]){
    N[N.length-1][1]++;
  }else{
    N.push([K[i],1])
  }
}

let answer = [];
M.forEach(v=>{
  let left = 0;
  let right = N.length-1; 
  let find = false; 
    while(left<=right){
      let mid = Math.floor((right+left)/2);   
      if(N[mid][0]>v){
        right = mid-1; 
      }else if(N[mid][0]<v){
        left=mid+1;
      }else{
        find=true;  
        answer.push(N[mid][1])
        break; 
      }
    }
    if(!find)answer.push(0)
})

console.log(answer.join(' '))