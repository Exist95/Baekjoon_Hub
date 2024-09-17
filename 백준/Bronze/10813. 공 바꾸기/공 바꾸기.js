const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let idx = 0;

const [N, M] = input[idx++].split(" ").map(Number);
// N = 바구니 M = 바꾸는 횟수

const result = Array.from({ length: N }).map((_, idx) => idx + 1);

for (let i = 0; i < M; i++) {
  const [x, y] = input[idx++].split(" ").map(Number);

  [result[x - 1], result[y - 1]] = [result[y - 1], result[x - 1]];
}

console.log(result.join(" "));