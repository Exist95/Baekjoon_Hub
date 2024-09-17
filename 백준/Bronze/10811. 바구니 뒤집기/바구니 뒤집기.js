const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;

const [N, M] = input[idx++].split(" ").map(Number);

let result = Array.from({ length: N }).map((_, idx) => idx + 1);

for (let i = 0; i < M; i++) {
  const [x, y] = input[idx++].split(" ").map(Number);

  const subArray = result.slice(x - 1, y).reverse();
  result.splice(x - 1, y - x + 1, ...subArray);
}

console.log(result.join(" "));