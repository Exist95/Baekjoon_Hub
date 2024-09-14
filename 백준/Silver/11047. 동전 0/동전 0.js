const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

const coins = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  coins.push(+input[i].trim());
}

for (let j = N - 1; j >= 0; j--) {
  //최대값으로 감소 되면 차감
  if (K - coins[j] >= 0) {
    K -= coins[j];
    j++;
    answer++;
  }
}

console.log(answer);